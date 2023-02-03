import 'package:flutter_ast_core/flutter_ast_core.dart';

import 'analyzer.dart';
import 'index.dart';

extension ImportDirectiveImplUtils on ImportDirectiveImpl {
  DartImport toDartImport() {
    return DartImport(
      offset: this.offset,
      end: this.end,
      uri: this.uri.stringValue,
      prefix: this.prefix?.name,
      hide: this
          .combinators
          .whereType<HideCombinatorImpl>()
          .map((e) => e.hiddenNames.map((e) => e.name).toList())
          .expand((element) => element)
          .toList(),
      show: this
          .combinators
          .whereType<ShowCombinatorImpl>()
          .map((e) => e.shownNames.map((e) => e.name).toList())
          .expand((element) => element)
          .toList(),
    );
  }
}
