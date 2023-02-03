import yaml from "yaml";

type PackageVersion = string;
type PackagePath = { path: string };
type PackageResolution = PackageVersion | PackagePath;

type Dependencies = {
  [key: string]: PackageResolution;
};

type DartEnvironment = {
  sdk: string;
  flutter?: string;
  [key: string]: string;
};

type DartExecutable = {
  [key: string]: string | null;
};

type DartPlatforms = {
  android?: string | null;
  ios?: string | null;
  linux?: string | null;
  macos?: string | null;
  web?: string | null;
  windows?: string | null;
  [key: string]: string | null;
};

type PubPublishTo = "none" | string;

export interface Pubspec {
  /**
   * Required for every package. [Learn more.](https://dart.dev/tools/pub/pubspec#name)
   */
  name?: string;

  /**
   * Required for packages that are hosted on the pub.dev site. [Learn more.](https://dart.dev/tools/pub/pubspec#version)
   */
  version?: string;

  /**
   * Required for packages that are hosted on the pub.dev site. [Learn more.](https://dart.dev/tools/pub/pubspec#description)
   */
  description?: string;

  /**
   * Optional. URL pointing to the package’s homepage (or source code repository). [Learn more.](https://dart.dev/tools/pub/pubspec#homepage)
   */
  homepage?: string;

  /**
   * Optional. URL pointing to the package’s source code repository. [Learn more.](https://dart.dev/tools/pub/pubspec#repository)
   */
  repository?: string;

  /**
   * Optional. URL pointing to the package’s issue tracker. [Learn more.](https://dart.dev/tools/pub/pubspec#issue_tracker)
   */
  issue_tracker?: string;

  /**
   * Optional. URL pointing to documentation for the package. [Learn more.](https://dart.dev/tools/pub/pubspec#documentation)
   */
  documentation?: string;

  /**
   * Can be omitted if your package has no dependencies. [Learn more.](https://dart.dev/tools/pub/pubspec#dependencies)
   */
  dependencies?: Dependencies;

  /**
   * Can be omitted if your package has no dev dependencies. [Learn more.](https://dart.dev/tools/pub/pubspec#dependencies)
   */
  dev_dependencies?: Dependencies;

  /**
   * Can be omitted if you do not need to override any dependencies. [Learn more.](https://dart.dev/tools/pub/pubspec#dependencies)
   */
  dependency_overrides?: Dependencies;

  /**
   * Required as of Dart 2. [Learn more.](https://dart.dev/tools/pub/pubspec#sdk-constraints)
   */
  environment?: DartEnvironment;

  /**
   * Optional. Used to put a package’s executables on your PATH.
   */
  executables?: DartExecutable;
  platforms?: DartPlatforms;
  publish_to?: PubPublishTo;
  false_secrets?: Array<string>;

  flutter?: PubspecFlutterSpec;
}

interface PubspecFlutterSpec {
  "uses-material-design": boolean;
  generate: boolean;
  assets: Array<string>;
  fonts: Array<{
    family: string;
    fonts: Array<{
      asset: string;
      weight?: number;
      style?: "normal" | "italic";
    }>;
  }>;
}

export function parse(pubspec: string): Pubspec {
  return yaml.parse(pubspec);
}

export function stringfy(pubspec: Pubspec): string {
  return yaml.stringify(pubspec);
}
