import Head from "next/head";
import Image from "next/image";
import Client from "@flutter-daemon/client";
import { Example } from "../grida/Example";
import { useEffect, useState } from "react";
import { FlutterProject } from "@flutter-daemon/client";

const flutter_main_dart_initial = `import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({Key? key}) : super(key: key);\n\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        // This is the theme of your application.\n        //\n        // Try running your application with "flutter run". You'll see the\n        // application has a blue toolbar. Then, without quitting the app, try\n        // changing the primarySwatch below to Colors.green and then invoke\n        // "hot reload" (press "r" in the console where you ran "flutter run",\n        // or simply save your changes to "hot reload" in a Flutter IDE).\n        // Notice that the counter didn't reset back to zero; the application\n        // is not restarted.\n        primarySwatch: Colors.blue,\n      ),\n      home: const MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  const MyHomePage({Key? key, required this.title}) : super(key: key);\n\n  // This widget is the home page of your application. It is stateful, meaning\n  // that it has a State object (defined below) that contains fields that affect\n  // how it looks.\n\n  // This class is the configuration for the state. It holds the values (in this\n  // case the title) provided by the parent (in this case the App widget) and\n  // used by the build method of the State. Fields in a Widget subclass are\n  // always marked "final".\n\n  final String title;\n\n  @override\n  State<MyHomePage> createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      // This call to setState tells the Flutter framework that something has\n      // changed in this State, which causes it to rerun the build method below\n      // so that the display can reflect the updated values. If we changed\n      // _counter without calling setState(), then the build method would not be\n      // called again, and so nothing would appear to happen.\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // This method is rerun every time setState is called, for instance as done\n    // by the _incrementCounter method above.\n    //\n    // The Flutter framework has been optimized to make rerunning build methods\n    // fast, so that you can just rebuild anything that needs updating rather\n    // than having to individually change instances of widgets.\n    return Scaffold(\n      appBar: AppBar(\n        // Here we take the value from the MyHomePage object that was created by\n        // the App.build method, and use it to set our appbar title.\n        title: Text(widget.title),\n      ),\n      body: Center(\n        // Center is a layout widget. It takes a single child and positions it\n        // in the middle of the parent.\n        child: Column(\n          // Column is also a layout widget. It takes a list of children and\n          // arranges them vertically. By default, it sizes itself to fit its\n          // children horizontally, and tries to be as tall as its parent.\n          //\n          // Invoke "debug painting" (press "p" in the console, choose the\n          // "Toggle Debug Paint" action from the Flutter Inspector in Android\n          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)\n          // to see the wireframe for each widget.\n          //\n          // Column has various properties to control how it sizes itself and\n          // how it positions its children. Here we use mainAxisAlignment to\n          // center the children vertically; the main axis here is the vertical\n          // axis because Columns are vertical (the cross axis would be\n          // horizontal).\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            const Text(\n              'You have pushed the button this many times:',\n            ),\n            Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: const Icon(Icons.add),\n      ), // This trailing comma makes auto-formatting nicer for build methods.\n    );\n  }\n}\n`;

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
  const [src, setSrc] = useState("");
  const [weblaunchUrl, setWeblaunchUrl] = useState<string>();

  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    if (client) {
      client.project("tmp").then((project) => {
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

  const onRunClick = () => {
    if (project) {
      project.save().then(() => {
        setRefreshKey(refreshKey + 1);
      });
    }
  };

  if (booted) {
    return (
      <Example
        value={src}
        initialValue={flutter_main_dart_initial}
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
