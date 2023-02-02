import 'package:_fe_analyzer_shared/src/scanner/token.dart' show SimpleToken;
import 'package:flutter_ast_core/flutter_ast_core.dart';
import 'index.dart';

extension FieldDeclarationImplUtils on FieldDeclarationImpl {
  DartField? toDartField() {
    DartField? _base;
    for (final node in this.childEntities) {
      if (node is VariableDeclarationListImpl) {
        _base = _process(node);
      }
    }
    return _base;
  }
}

extension TopLevelVariableDeclarationImplUtils
    on TopLevelVariableDeclarationImpl {
  DartField? toDartField() {
    DartField? _base;
    for (final node in this.root.childEntities) {
      if (node is VariableDeclarationListImpl) {
        _base = _process(node);
      }
    }
    return _base;
  }
}

extension DefaultFormalParameterImplUtils on DefaultFormalParameterImpl {
  DartProperty? toDartProperty(List<DartField?> fields) {
    DartProperty? base;
    bool _hasValue = false;

    // e.g.
    // [<FieldFormalParameterImpl: this.listField>, <SimpleToken: =>, <ListLiteralImpl: const []>]
    for (final node in this.childEntities) {
      print('${node.runtimeType}: ${node.toString()}');

      // e.g.
      // constructor({Key key})
      if (node is SimpleFormalParameterImpl) {
        base = _processProperty(node);
        for (final child in node.childEntities) {
          if (child is StringTokenImpl || child is DeclaredSimpleIdentifier) {
            base = base!.copyWith(name: child.toString());
          }
          if (child is NamedTypeImpl) {
            base = base!.copyWith(type: child.toString());
          }
        }
      }

      // e.g.
      // constructor({this.field})
      // this   : KeywordToken
      // .      : SimpleToken
      // field  : SimpleIdentifierImpl
      if (node is FieldFormalParameterImpl) {
        base = _processProperty(node);

        // get the name
        for (final child in node.childEntities) {
          // e.g.
          // in `this.field` -> "field" is StringTokenImpl
          if (child is StringTokenImpl || child is SimpleIdentifierImpl) {
            base = base?.copyWith(name: child.toString());
          }
        }

        // get the type - the fields are in the parent class
        for (final field in fields) {
          if (field?.name == base?.name) {
            base = base?.copyWith(type: field?.type);
          }
        }
      }

      // value initializaation token
      if (node is SimpleToken && node.toString() == '=') {
        _hasValue = true;
        continue;
      }

      if (_hasValue && node is LiteralImpl) {
        base = base?.copyWith(value: node.toDartCore());
      }
    }
    return base;
  }
}

DartField _processField(FormalParameter node) {
  return DartField(
    offset: node.offset,
    end: node.end,
    name: null,
    type: null,
    isConst: node.isConst,
    isFinal: node.isFinal,
  );
}

DartProperty _processProperty(FormalParameter node) {
  return DartProperty(
    offset: node.offset,
    end: node.end,
    name: null,
    type: null,
    isNamed: node.isNamed,
    isOptional: node.isOptional,
    isPositional: node.isPositional,
    isRequired: node.isRequired,
    isRequiredPositional: node.isRequiredPositional,
    isSynthetic: node.isSynthetic,
    isRequiredNamed: node.isRequiredNamed,
    isOptionalNamed: node.isOptionalNamed,
  );
}

DartField _process(VariableDeclarationListImpl node) {
  late String _type, _name;
  for (final child in node.childEntities) {
    if (child is NamedTypeImpl) {
      final NamedTypeImpl _node = child;
      _type = _node.toString();
    }
    if (child is VariableDeclarationImpl) {
      _name = child.name.toString();
    }
  }
  return DartField(
    offset: node.offset,
    end: node.end,
    type: _type,
    name: _name,
  );
}
