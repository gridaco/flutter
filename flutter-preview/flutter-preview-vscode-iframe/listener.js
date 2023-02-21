// iframe listener

// test.
// the message from webview app will be received here.

window.addEventListener("message", (event) => {
  const message = event.data; // The json data that the webview sent
  switch (message.command) {
    case "alert":
      alert(message.text);
      return;
  }
});
