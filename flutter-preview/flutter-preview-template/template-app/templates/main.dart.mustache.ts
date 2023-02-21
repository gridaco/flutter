export default `
{{#imports}}
import '{{{.}}}';
{{/imports}}

void main() {
  runApp(const FlutterPreview());
}

class FlutterPreview extends StatelessWidget {
  const FlutterPreview({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "{{title}}",
      theme: ThemeData(),
      home: Scaffold(
          body: Center(
        child: {{widget}}(),
      )),
    );
  }
}
`;
