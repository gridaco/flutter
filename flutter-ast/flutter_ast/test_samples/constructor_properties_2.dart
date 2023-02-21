//ignore_for_file: uri_does_not_exist,undefined_class,extends_non_class,undefined_named_parameter,undefined_method,undefined_identifier,super_formal_parameter_without_associated_named,creation_with_non_type,non_constant_default_value

import 'package:flutter/material.dart';

class VeggieCard extends StatelessWidget {
  const VeggieCard(this.veggie, this.isInSeason, this.isPreferredCategory,
      {super.key});

  /// Veggie to be displayed by the card.
  final Veggie veggie;

  /// If the veggie is in season, it's displayed more prominently and the
  /// image is fully saturated. Otherwise, it's reduced and de-saturated.
  final bool isInSeason;

  /// Whether [veggie] falls into one of user's preferred [VeggieCategory]s
  final bool isPreferredCategory;
}
