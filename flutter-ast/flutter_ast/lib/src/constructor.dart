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

      ///
      /// ```
      /// const ExampleClass(
      ///     // this is `FormalParameterListImpl` including this.position and {...}
      ///     // 👇 this is `FieldFormalParameterImpl` which does not have a default value
      ///     this.position,
      ///     // 👇  the items inside `{}` are `DefaultFormalParameterImpl`
      ///     {
      ///       this.myField = false,
      ///       this.mySecondField = 1,
      ///       this.numField = 3,
      ///       this.mapField = const {},
      ///       this.dateField,
      ///       this.listField = const [],
      ///     });
      /// ```
      if (node is FormalParameterListImpl) {
        for (final child in node.childEntities) {
          // e.g. this.field
          if (child is FieldFormalParameterImpl) {
            final _ = child.toDartProperty(parent.fields);
            _properties.add(_);
          }

          // e.g. {this.field}
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
