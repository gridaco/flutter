import Client from "@flutter-daemon/client";
import { Example } from "../grida/Example";
import { useEffect, useState } from "react";
import { FlutterProject } from "@flutter-daemon/client";

const flutter_main_dart_initial =
  "import 'package:flutter/material.dart';\n\nvoid main() => runApp(App());\n\nclass App extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      debugShowCheckedModeBanner: false,\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: const MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  final String title;\n\n  const MyHomePage({\n    Key? key,\n    required this.title,\n  }) : super(key: key);\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: [\n            const Text(\n              'You have pushed the button this many times:',\n            ),\n            Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: const Icon(Icons.add),\n      ),\n    );\n  }\n}\n";

function useClinet() {
  const [client, setClient] = useState<Client>();
  useEffect(() => {
    setClient(new Client("ws://localhost:43070"));
  }, []);

  return client;
}

export default function Home() {
  const client = useClinet();
  const [project, setProject] = useState<FlutterProject>();
  const [booted, setBooted] = useState(false);
  const [src, setSrc] = useState<string>();
  const [weblaunchUrl, setWeblaunchUrl] = useState<string>();

  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    if (client) {
      client
        .project("tmp", "tmp", {
          "lib/main.dart": flutter_main_dart_initial,
        })
        .then((project) => {
          setProject(project);
          setBooted(true);
        });
    }
  }, [client]);

  useEffect(() => {
    if (project) {
      project.webLaunchUrl().then((url) => {
        console.log("weblaunchUrl", url);
        setWeblaunchUrl(url);
      });
      project.readFile("lib/main.dart").then((data) => {
        setRefreshKey(refreshKey + 1);
        setSrc(data);
      });
    }
  }, [project]);

  const onValueChange = (value: string | undefined) => {
    if (value) {
      setSrc(value);
      if (project) {
        console.log("writing file...");
        project
          .writeFile("lib/main.dart", value, true)
          .then(() => {
            console.log("file written");
            setRefreshKey(refreshKey + 1);
          })
          .catch(console.error);
      }
    }
  };

  const onRunClick = () => {
    if (project) {
      project.save().then(() => {
        console.log("saved");
        setRefreshKey(refreshKey + 1);
      });
    }
  };

  if (booted) {
    return (
      <Example
        value={src}
        initialValue={flutter_main_dart_initial}
        onValueChange={debounce(onValueChange, 1000)}
        refreshKey={refreshKey}
        onRunClick={onRunClick}
        webLuanchUrl={weblaunchUrl}
      />
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        booting...
      </div>
    );
  }
}

// debounce
function debounce(fn: Function, wait: number) {
  let timeout: number;
  return function (...args: any[]) {
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, wait);
  };
}
