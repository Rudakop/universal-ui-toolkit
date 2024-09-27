import 'package:flutter/material.dart';
import 'widgets/custom_button.dart'; 

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Desktop App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Desktop App'),
      ),
      body: Center(
        child: CustomButton(
          label: 'Click Me',
          onPressed: () {
            print('Button clicked!');
          },
        ),
      ),
    );
  }
}
