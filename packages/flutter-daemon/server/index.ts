import { FlutterDaemon } from "../lib/flutter-daemon";
import ws from "ws";

// Creating a new websocket server
const wss = new ws.Server({ port: 8080 });

// const d = new FlutterDaemon();
// d.start();
// d.version();
// d.getDevices();
// d.restart({
//   appId: "0",
// });

// Creating connection using websocket
wss.on("connection", (ws) => {
  console.log("new client connected");
  // sending message
  ws.on("message", (data) => {
    console.log(`Client has sent us: ${data}`);
  });
  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    console.log("the client has connected");
  });
  // handling client connection error
  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});
console.log("The WebSocket server is running on port 8080");
