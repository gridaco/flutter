import 'package:flutter/material.dart';

class PreviewTarget1 extends StatelessWidget {
  const PreviewTarget1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Preview Target 1'),
      ),
      body: const Center(
        child: Text('Preview Target 1'),
      ),
    );
  }
}
