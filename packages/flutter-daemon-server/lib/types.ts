///
/// @see https://github.com/flutter/flutter/blob/master/packages/flutter_tools/doc/daemon.md
///

export type AppEvent =
  | AppLogEvent
  | AppStopEvent
  | AppStartEvent
  | AppStartedEvent
  | AppProgressEvent
  | AppDebugPortEvent
  | AppWebLaunchUrlEvent;

export type AppEventMap = {
  "app.log": AppLogEvent;
  "app.stop": AppStopEvent;
  "app.start": AppStartEvent;
  "app.started": AppStartedEvent;
  "app.progress": AppProgressEvent;
  "app.debugPort": AppDebugPortEvent;
  "app.webLaunchUrl": AppWebLaunchUrlEvent;
};

export interface DaemonConnectedEvent {
  /**
   * The protocol version. This is the same version returned by the version() command.
   */
  version: string;
  /**
   * The pid of the daemon process.
   */
  pid: string;
}

/**
 * The daemon.logMessage event is sent whenever a log message is created - either a status level message or an error. The JSON message will contain an event field with the value daemon.logMessage, and an params field containing a map with level, message, and (optionally) stackTrace fields.
 */
export interface DaemonLogMessageEvent {
  level: string;
  message: string;
  stackTrace?: unknown;
}

/**
 * The daemon.showMessage event is sent by the daemon when some if would be useful to show a message to the user. This could be an error notification or a notification that some development tools are not configured or not installed. The JSON message will contain an event field with the value daemon.showMessage, and an params field containing a map with level, title, and message fields. The valid options for level are info, warning, and error.
 *
 * It is up to the client to decide how best to display the message; for some clients, it may map well to a toast style notification. There is an implicit contract that the daemon will not send too many messages over some reasonable period of time.
 */
export interface DaemonShowMessageEvent {
  level: "info" | "warning" | "error";
  title: string;
  message: string;
}

/**
 * The restart() restarts the given application. It returns a Map of { int code, String message } to indicate success or failure in restarting the app. A code of 0 indicates success, and non-zero indicates a failure.
 */
export interface AppRestartRequest {
  /**
   * the id of a previously started app; this is required.
   */
  appId: string;

  /**
   * fullRestart: optional; whether to do a full (rather than an incremental) restart of the application
   */
  fullRestart?: boolean;

  /**
   * optional; the reason for the full restart (eg. save, manual) for reporting purposes
   */
  reason?: "save" | "manual";

  /**
   * pause: optional; when doing a hot restart the isolate should enter a paused mode
   */
  pause?: boolean;

  /**
   * optional; whether to automatically debounce multiple requests sent in quick succession (this may introduce a short delay in processing the request)
   */
  debounce?: boolean;
}

/**
 * The detach() command takes one parameter, appId. It returns a bool to indicate success or failure in detaching from an app without stopping it.
 */
export interface AppDetatchRequest {
  /**
   * the id of a previously started app; this is required.
   */
  appId;
}

/**
 * The stop() command takes one parameter, appId. It returns a bool to indicate success or failure in stopping an app.
 */
export interface AppStopRequest {
  /**
   * the id of a previously started app; this is required.
   */
  appId;
}

/**
 * This is sent when an app is starting. The params field will be a map with the fields appId, directory, and deviceId.
 */
export interface AppStartEvent {
  appId;
  directory;
  deviceId;
}

/**
 * This is sent when an observatory port is available for a started app. The params field will be a map with the fields appId, port, and wsUri. Clients should prefer using the wsUri field in preference to synthesizing a uri using the port field. An optional field, baseUri, is populated if a path prefix is required for setting breakpoints on the target device.
 */
export interface AppDebugPortEvent {
  appId: string;
  port: string;
  wsUri: string;
  baseUri?: string;
}

/**
 * This is sent once the application launch process is complete and the app is either paused before main() (if startPaused is true) or main() has begun running. When attaching, this even will be fired once attached. The params field will be a map containing the field appId.
 */
export interface AppStartedEvent {
  appId: string;
}

/**
 * This is sent when output is logged for a running application. The params field will be a map with the fields appId and log. The log field is a string with the output text. If the output indicates an error, an error boolean field will be present, and set to true.
 */
export interface AppLogEvent {
  appId: string;
  log: string;
  error?: boolean;
}

/**
 * This is sent when an operation starts and again when it stops. When an operation starts, the event contains the fields id, an opaque identifier, and message containing text describing the operation. When that same operation ends, the event contains the same id field value as when the operation started, along with a finished bool field with the value true, but no message field.
 */
export type AppProgressEvent = {
  id: string;
  message?: string;
  finished?: boolean;
};

/**
 * This is sent when an app is stopped or detached from. The params field will be a map with the field appId.
 */
export interface AppStopEvent {
  appId: string;
}

/**
 * This is sent once a web application is being served and available for the user to access. The params field will be a map with a string url field and a boolean launched indicating whether the application has already been launched in a browser (this will generally be true for a browser device unless --no-web-browser-launch was used, and false for the headless web-server device).
 */
export interface AppWebLaunchUrlEvent {
  url: string;
  launched: boolean;
}

export interface Device {
  id: string;
  name: string;
  platform: string;
  emulator: boolean;
}

export interface Emulator {
  id: string;
  name: string;
}

export interface EmulatorCreateRequest {
  /**
   * an optional name for this emulator
   */
  name?: string;
}

export interface EmulatorCreateResponse {
  /**
   *  whether the emulator was successfully created
   */
  success: boolean;
  /**
   * the name of the emulator created; this will have been auto-generated if you did not supply one
   */
  emulatorName: string;
  /**
   *  when success=false, a message explaining why the creation of the emulator failed
   */
  error?: string;
}

export interface EmulatorLaunchRequest {
  /**
   * the id of an emulator as returned by getEmulators.
   */
  emulatorId: string;
}

/**
 * The serve() command starts a DevTools server if one isn't already running. The return value will contain:
 */
export interface DevToolsServeRequest {
  /**
   * whether the server started.
   */
  success: boolean;
  /**
   * the address host if the server successfully started.
   */
  host?: string;
  /**
   * the port if the server successfully started.
   */
  port: string;
}
