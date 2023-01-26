import 'dart:convert';
import 'dart:io';

import 'package:grinder/grinder.dart';
import 'package:yaml/yaml.dart' as yaml;
import "package:node_preamble/preamble.dart" as preamble;

void main(List<String> args) => grind(args);

@DefaultTask()
@Task('Publish to npm')
void npm() {
  var out = 'dist';
  var pubspec = yaml.loadYaml(getFile('pubspec.yaml').readAsStringSync());
  var homepage = pubspec['homepage'];
  var fileName = 'ast.js';
  var indexName = 'index.js';
  // Generate modified dart2js output suitable to run on node.
  var tempFile = File('${Directory.systemTemp.path}/temp.js');
  Dart2js.compile(File('tool/node_ast_service.dart'),
      outFile: tempFile, categories: 'all');
  var dart2jsOutput = tempFile.readAsStringSync();
  File('$out/$fileName').writeAsStringSync('''${preamble.getPreamble()}
self.exports = exports; // Temporary hack for Dart-JS Interop under node.
$dart2jsOutput''');
  File('$out/package.json')
      .writeAsStringSync(const JsonEncoder.withIndent('  ').convert({
    'name': 'flutter-ast',
    'version': pubspec['version'],
    'description': pubspec['description'],
    'main': indexName,
    'typings': 'dart-style.d.ts',
    'scripts': {'test': 'echo "Error: no test specified" && exit 1'},
    'repository': {'type': 'git', 'url': 'git+$homepage'},
    'author': pubspec['author'],
    'license': 'BSD',
    'bugs': {'url': '$homepage/issues'},
    'homepage': homepage
  }));
  // run('npm', arguments: ['publish', out]);
}
