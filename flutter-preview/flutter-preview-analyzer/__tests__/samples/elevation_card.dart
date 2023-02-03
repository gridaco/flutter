// ignore_for_file: uri_does_not_exist,undefined_class,extends_non_class,undefined_named_parameter,undefined_method,undefined_identifier,undefined_function,const_initialized_with_non_constant_value,creation_with_non_type,super_formal_parameter_without_associated_named,non_constant_case_expression,non_type_as_type_argument,undefined_super_member,override_on_non_overriding_member
import 'package:flutter/material.dart';

class ElevationCard extends StatefulWidget {
  const ElevationCard(
      {super.key, required this.info, this.shadowColor, this.surfaceTint});

  final ElevationInfo info;
  final Color? shadowColor;
  final Color? surfaceTint;

  @override
  State<ElevationCard> createState() => _ElevationCardState();
}

class _ElevationCardState extends State<ElevationCard> {
  late double _elevation;

  @override
  void initState() {
    super.initState();
    _elevation = widget.info.elevation;
  }

  @override
  Widget build(BuildContext context) {
    const BorderRadius borderRadius = BorderRadius.all(Radius.circular(4.0));
    final bool showOpacity = _elevation == widget.info.elevation;
    final Color color = Theme.of(context).colorScheme.surface;

    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Material(
        borderRadius: borderRadius,
        elevation: _elevation,
        color: color,
        shadowColor: widget.shadowColor,
        surfaceTintColor: widget.surfaceTint,
        type: MaterialType.card,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text(
                'Level ${widget.info.level}',
                style: Theme.of(context).textTheme.labelMedium,
              ),
              Text(
                '${widget.info.level.toInt()} dp',
                style: Theme.of(context).textTheme.labelMedium,
              ),
              if (showOpacity)
                Expanded(
                  child: Align(
                    alignment: Alignment.bottomRight,
                    child: Text(
                      '${widget.info.overlayPercent}%',
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class ElevationInfo {
  const ElevationInfo(this.level, this.elevation, this.overlayPercent);
  final int level;
  final double elevation;
  final int overlayPercent;
}
