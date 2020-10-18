![](./docs/cover.jpg)

# flutter-builder

flutter widget builder for nodejs
> flutter-builder uses *[dynamic](https://github.com/bridgedxyz/dynamic)* for handling dynamic configurable data such as button action handling.

*CoLI: Computer Language Interface*

## Installation
``` sh
yarn add @bridged.xyz/flutter-builder
```

## How to use

```ts

const text = new Text("this is written in typescript", {textStyle: new TextStyle(color: Colors.black)})
console.log(text.build().finalize())

// >>
// Text("this is written in typescript", textStyle: TextStyle(color: Colors.black))

```

## Usecase
**build widget tree**
- ts ClassTree -> dart ClassTree



``` typescript
const text = new Text("this is written in typescript", {textStyle: new TextStyle(color: Colors.black)})

const row = new Row({children: [
  text,
]})

console.log(row.build().finalize())

// >>
// Row(
//	children: [
// 		Text("this is written in typescript", textStyle: TextStyle(color: Colors.black))
// 	]
// );
```





**function as function**
> ts function -> dart in-code function

*from*
``` ts
const functionInRow = new Row(
    {
        children: [
            Function.from(_buildWidget())
        ]
    }
)

function _buildWidget(): Widget{
    return new Text("👋")
}

functionInRow.build().finalize()

// Row(
//    children: [
//        _buildWidget()
//    ]
// )
//
// Widget _buildWidget(){
//     return Text("👋");
// }
```



**full class build**

```typescript
const classWidget = new StatelessWidget("Component")

const builder = new Row();

classWidget.buildFrom(builder)

classWidget.build()

// class Component extends StatelessWidget{
// 		@override
//		Widget build(BuildContext context){
//			return Row();
//		}
// }

```



**slots (variables)**

```typescript

const argument = Variable.from("some text")
const text = new Text(argument);
text.build().finalize()

// >>
// final String argument = "some text";
// Text(argument);

```







## flutter code export

[Widget catalog](https://flutter.dev/docs/development/ui/widgets)

[widgets library](https://api.flutter.dev/flutter/widgets/widgets-library.html)

[Material Components widgets](https://flutter.dev/docs/development/ui/widgets/material)

widget supported

### Core

- ✅ Gradient
- RadialGradient
- ✅ Radius
- ✅ EdgeInsets
- ✅ Color
- ⚠️ Icon
- ✅ IconData
- Image → XImage

### Basics

- ✅ Container
    - ✅ BoxDecoration
- ✅ SizedBox
- ✅ Column
- ✅ Row
- ✅ Stack
- ✅ Positioned
- ✅ Align
- ✅ Text
    - ✅ DefaultTextStyle
- RichText
- ✅ Padding
- ✅ Center
- Clip
    - ClipRRect
    - ClipRect
    - ClipOval
    - ClipPath
- ✅ Expanded
- Flex
- Flexible
- ✅ Opacity
- ⚠️ GestureDetector
- Placeholder
- ✅ Spacer
- ✅ Transform
- Wrap
- ✅ Divider

### Later

- FittedBox
- Form

### Interactive

- FormField

### Layouts

- ListView
    - horizontal
    - vertical
- GirdView
    - horizontal
    - vertical
- ✅ SingleChildScrollView

### MISC

- ErrorWidget
- MediaQuery
