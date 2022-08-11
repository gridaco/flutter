export interface File {
  path: string;
  content: string;
}

interface Command {
  /**
   * request, response id
   */
  $id: string;
}

export type Request =
  | CreateNewProjectRequest
  | UseProjectRequest
  | WriteFileRequest
  | ReadFileRequest
  | RestartRequet
  | StopRequest;

export interface RequestMap {
  "create-new-project": CreateNewProjectRequest;
  "use-project": UseProjectRequest;
  "write-file": WriteFileRequest;
  "read-file": ReadFileRequest;
  restart: RestartRequet;
  stop: StopRequest;
}

export type Response =
  | CreateNewProjectResponse
  | UseProjectResponse
  | WriteFileResponse
  | ReadFileResponse
  | RestartResponse
  | StopResponse;

/**
 * request for creating new flutter project. if no initials are provided, it uses the default `flutter create` command.
 * 
 * @example
 * ```json
{
  "type": "create-new-project",
  "id": "tmp",
  "name": "tmp"
}
  ```
 */
export interface CreateNewProjectRequest extends Command {
  type: "create-new-project";
  id: string;
  name: string;
  /**
   * @deprecated - not ready
   * creates new project with initial files
   */
  initials?: File[];
  /**
   * creates new project and overwrites existing files
   */
  overwrites?: {
    [path: string]: string;
  };
}

export interface CreateNewProjectResponse extends CreateNewProjectRequest {}

export interface UseProjectRequest
  extends Omit<CreateNewProjectRequest, "type"> {
  type: "use-project";
}

export interface UseProjectResponse extends UseProjectRequest {
  used: "existing" | "new";
  appId?: string;
  webLaunchUrl?: string;
}
interface IProjectRequest {
  readonly projectId: string;
}

/**
 * request for writing file to a existing project.
 *
 * @example
 * ```json
{
  "type": "write-file",
  "projectId": "tmp",
  "path": "lib/main.dart",
  "content": "import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: const MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key, required this.title}) : super(key: key);\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            const Text(\n              'You have pushed the button this many times:',\n            ),\n            Text(\n              'static',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: () {},\n        tooltip: 'Increment',\n        child: const Icon(Icons.add),\n      ),\n    );\n  }\n}\n",
  "save": true
 }
 * ```
 */
export interface WriteFileRequest extends IProjectRequest, Command {
  type: "write-file";
  path: string;
  content: string;
  save?: boolean;
}

export interface WriteFileResponse extends WriteFileRequest {}

export interface ReadFileRequest extends IProjectRequest, Command {
  type: "read-file";
  path: string;
}

export interface ReadFileResponse extends ReadFileRequest, Command {
  content: string;
}

export interface RestartRequet extends IProjectRequest, Command {
  type: "restart";
}

export interface RestartResponse extends RestartRequet {}

export interface StopRequest extends IProjectRequest, Command {
  type: "stop";
}

export interface StopResponse extends StopRequest {}
