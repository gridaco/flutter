import 'dart:convert';
import 'dart:io';
import 'package:path/path.dart';
import 'package:grinder/grinder.dart';
import 'package:yaml/yaml.dart' as yaml;
import "package:node_preamble/preamble.dart" as preamble;

void main(List<String> args) => grind(args);

@DefaultTask()
@Task('Publish to npm')
void node() {
  var pubspec = yaml.loadYaml(getFile('pubspec.yaml').readAsStringSync());
  var homepage = pubspec['homepage'];
  var fileName = 'ast.js';
  var indexName = 'index.js';
  // Generate modified dart2js output suitable to run on node.
  var tempFile = File('${Directory.systemTemp.path}/temp.js');
  Dart2js.compile(File('tool/node_ast_service.dart'),
      outFile: tempFile, categories: 'all');
  var dart2jsOutput = tempFile.readAsStringSync();
  File(join('../flutter-ast-node', '$fileName'))
      .writeAsStringSync('''${preamble.getPreamble()}
self.exports = exports; // Temporary hack for Dart-JS Interop under node.
$dart2jsOutput''');
  // run('npm', arguments: ['publish', out]);
}
