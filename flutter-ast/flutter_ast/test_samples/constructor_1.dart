class ExampleClass {
  final bool myField;
  final double mySecondField;
  final num numField;
  final Map mapField;
  final DateTime? dateField;
  final List listField;
  final String id;

  final int position;

  const ExampleClass(
    this.position, {
    required this.id,
    this.myField = false,
    this.mySecondField = 1,
    this.numField = 3,
    this.mapField = const {},
    this.dateField,
    this.listField = const [],
  });

  const ExampleClass.alt(
    this.position, {
    required this.id,
    this.mySecondField = double.infinity,
    this.numField = 3,
    this.mapField = const {},
    this.listField = const [],
    this.dateField,
  }) : this.myField = true;
}
