import 'package:flutter_ast_core/flutter_ast_core.dart';
import 'index.dart';

extension ClauseDeclarationImplUtils on ClassDeclarationImpl {
  DartClass toDartClass(DartFile parent) {
    var base = DartClass(
      //
      name: this.name.toString(),
      offset: this.offset,
      end: this.end,
      isAbstract: this.abstractKeyword != null,
      extendsClause: this.extendsClause?.toString(),
      implementsClause: this.implementsClause?.toString(),
      withClause: this.withClause?.toString(),
    );

    // (-1) handle fields ( execution order matters. the fields are referenced when handling the constructors )
    final List<DartField?> fields = [];
    for (final item in this.childEntities.whereType<FieldDeclarationImpl>()) {
      fields.add(item.toDartField());
    }
    base = base.copyWith(fields: fields);

    // (+1) handle constructors
    final List<DartConstructor?> constructors = [];
    for (final item
        in this.childEntities.whereType<ConstructorDeclarationImpl>()) {
      constructors.add(item.toDartConstructor(base));
    }
    base = base.copyWith(constructors: constructors);

    // (0) handle methods
    final List<DartMethod> methods = [];
    for (final item in this.childEntities.whereType<MethodDeclarationImpl>()) {
      methods.add(item.toDartMethod(base));
    }
    base = base.copyWith(methods: methods);

    // (0) handle comments
    final List<DartComment> comments = [];
    for (final item in this.childEntities.whereType<CommentImpl>()) {
      comments.add(item.toDartComment());
    }
    base = base.copyWith(comments: comments);

    // return
    return base;
  }
}
