import Axios, { AxiosInstance } from "axios";
import {
  AnalysisResults,
  CompileDDCResponse,
  CompileRequest,
  CompileResponse,
  SourceRequest,
} from "./types";
import { decorateJavascript } from "./utils/deocrate-js";

const BASE_URLS = {
  stable: "https://stable.api.dartpad.dev/",
  beta: "https://beta.api.dartpad.dev/",
} as const;

const API_PATH = "api/dartservices/v2";

/**
 * this is an error thrown by dart-services server, which is not a client problem, if you get this message, retry api call.
 */
const COMMON_DDC_ERRORS = [
  "Could not resolve the package 'flutter' in 'package:flutter/material.dart'",
];
/**
 * maximun retry number for handling common serverside errors.
 */
const DEFAULT_MAX_RETRY = 5;

type CreateOptions =
  | {
      baseUrl?: string;
      channel?: "stable" | "beta";
    }
  | {
      channel?: "stable" | "beta";
    };

class DartServices {
  readonly axios: AxiosInstance;

  static create(
    options: CreateOptions = {
      channel: "stable",
    }
  ): DartServices {
    if ("baseUrl" in options) {
      return new DartServices(options.baseUrl);
    } else {
      return new DartServices(BASE_URLS[options.channel ?? "stable"]);
    }
  }

  constructor(
    private readonly baseUrl: string,
    private readonly maxRetry: number = DEFAULT_MAX_RETRY
  ) {
    this.axios = Axios.create({
      baseURL: baseUrl + API_PATH,
    });
  }

  /**
   * cursor that holds retry counts of requests.
   */
  retryCursors: Map<number, number> = new Map<number, number>();
  /**
   * use this for flutter code compile
   * @param source
   */
  async compileDDC(
    source: string,
    cursor?: number
  ): Promise<CompileDDCResponse> {
    try {
      const res = await this.axios.post("/compileDDC", <CompileRequest>{
        source: source,
      });
      return res.data;
    } catch (e) {
      if (
        COMMON_DDC_ERRORS.some((errmsg) => {
          return (e.response.data.error?.message ?? ("" as string)).includes(
            errmsg
          );
        })
      ) {
        // console.warn('dart-services serverside issue detected.')
        if (!cursor) {
          // create cursor
          cursor = Date.now();
          this.retryCursors[cursor] = 1;
        } else {
          // console.log(`retrying with cursor ${cursor}`)
          this.retryCursors[cursor] = this.retryCursors[cursor] + 1;
          if (this.retryCursors[cursor] > this.maxRetry) {
            // delete the cursor.
            this.retryCursors.delete(cursor);
            return {
              message: "retried, but failed. closing.",
              error: e.response.data.error,
              success: false,
            };
          }
        }
        // console.warn(
        //   'dart-services failed with serverside issues. retrying.. re entry of',
        //   this.retryCursors[cursor]
        // );
        return await this.compileDDC(source, cursor);
      }
      return {
        error: e.response.data.error,
        success: false,
      };
    }
  }

  /**
   * use this for pure dart code compile. code with flutter dependency will refuse to compile.
   * @param source
   */
  async compile(source: string): Promise<CompileResponse> {
    const res = await this.axios.post<CompileResponse>("/compile", <
      CompileRequest
    >{
      source: source,
    });
    return res.data;
  }

  /**
   * performs the static analysis
   * @param source
   */
  async analyze(source: string): Promise<AnalysisResults> {
    const res = await this.axios.post<AnalysisResults>("/analyze", <
      SourceRequest
    >{
      source: source,
    });
    return res.data;
  }

  /**
   * compiles and build decorated js
   * @param source
   */
  async compileComplete(source: string): Promise<CompileResponse> {
    const compiled = await this.compileDDC(source);
    if (compiled.error) {
      return {
        error: compiled.error,
        success: false,
      };
    } else {
      const complete = decorateJavascript(compiled?.result, {
        modulesBaseUrl: compiled.modulesBaseUrl,
      });
      return {
        result: complete,
        sourceMap: null,
        error: null,
        success: true,
      };
    }
  }
}

export const stable = new DartServices(BASE_URLS.stable);

export const beta = new DartServices(BASE_URLS.beta);

export async function compileComplete(
  source: string
): Promise<CompileResponse> {
  return await stable.compileComplete(source);
}

export default DartServices;
