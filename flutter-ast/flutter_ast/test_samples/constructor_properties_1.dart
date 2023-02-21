//ignore_for_file: uri_does_not_exist,undefined_class,extends_non_class,undefined_named_parameter,undefined_method,undefined_identifier,super_formal_parameter_without_associated_named,creation_with_non_type,non_constant_default_value

import 'package:flutter/material.dart';

class PressableCard extends StatefulWidget {
  const PressableCard({
    required this.child,
    this.borderRadius = const BorderRadius.all(Radius.circular(5)),
    this.upElevation = 2,
    this.downElevation = 0,
    this.shadowColor = CupertinoColors.black,
    this.duration = const Duration(milliseconds: 100),
    this.onPressed,
    super.key,
  });

  final VoidCallback? onPressed;

  final Widget child;

  final BorderRadius borderRadius;

  final double upElevation;

  final double downElevation;

  final Color shadowColor;

  final Duration duration;

  @override
  State<PressableCard> createState() => _PressableCardState();
}
