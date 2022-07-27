import cp from "child_process";
import path from "path";
const { spawn, spawnSync } = cp;

const flutterbin = "flutter";

interface FlutterProject {
  name: string;
}

export async function flutter_version(): Promise<false | string> {
  const res = await spawnSync(flutterbin, ["--version"], {
    encoding: "utf8",
  });
  if (res.error) {
    return false;
  }

  // e.g.
  // Flutter 3.0.5 • channel stable • https://github.com/flutter/flutter.git
  // Framework • revision f1875d570e (13 days ago) • 2022-07-13 11:24:16 -0700
  // Engine • revision e85ea0e79c
  // Tools • Dart 2.17.6 • DevTools 2.12.2
  return res.stdout;
  // We'de like to add a version parser but we don't want this to mess up when the out format changees.
}

function run_web(project, flags?: { "--no-web-browser-launch"?: boolean }) {
  const proc = spawn(
    flutterbin,
    [
      "run",
      "-d",
      "chrome",
      flags?.["--no-web-browser-launch"] ? "--no-web-browser-launch" : "",
    ],
    {
      cwd: project,
    }
  );
}

function run_web_server(project) {
  const proc = spawn(flutterbin, ["run", "-d", "web-server"], {
    cwd: project,
  });
}

export default async function build(project) {
  let out = "";

  const proc = spawn(flutterbin, ["run", "-d", "chrome"], {
    cwd: project,
  });

  proc.stdout.setEncoding("utf8");
  proc.stdout.on("data", (data) => {
    console.log("stdout: " + data);
    data = data.toString();
    out += data;
  });

  proc.stderr.setEncoding("utf8");
  proc.stderr.on("data", function (data) {
    console.log("stderr: " + data);

    data = data.toString();
    out += data;
  });

  proc.on("error", function (err) {
    console.error(err);
  });

  proc.on("exit", function (code, signal) {
    console.log("child process exited with code " + code, signal);
  });

  proc.on("close", function (code, signal) {
    console.log("child process exited with code " + code, signal);
    // return path.join(project, "build", "web");
  });
}

if (require.main === module) {
  flutter_version().then((r) => {
    if (r) {
      build(
        "/Users/softmarshmallow/Documents/Apps/grida/flutter-builder/example/flutter_demo"
      );
    } else {
      console.log("flutter bin not installed");
    }
  });
}
