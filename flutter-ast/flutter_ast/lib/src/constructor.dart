import 'package:flutter_ast_core/flutter_ast_core.dart';
import 'index.dart';

extension ConstructorDeclarationImplUtils on ConstructorDeclarationImpl {
  DartConstructor toDartConstructor(DartClass parent) {
    String _name = '';
    List<DartProperty> _properties = [];

    for (final node in this.childEntities) {
      if (node is SimpleIdentifierImpl) {
        _name = node.name;
      }
      if (node is DeclaredSimpleIdentifier) {
        _name = node.name;
      }

      if (node is FormalParameterListImpl) {
        for (final child in node.childEntities) {
          if (child is DefaultFormalParameterImpl) {
            final _props = List<DartProperty?>.from(_properties);
            _props.add(child.toDartProperty(parent.fields));
            _properties = List<DartProperty>.from(_props);
          }
        }
      }
    }

    final base = DartConstructor(
        name: _name,
        offset: this.offset,
        end: this.end,
        properties: _properties);

    return base;
  }
}
