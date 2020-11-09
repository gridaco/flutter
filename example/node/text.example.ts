import { RichText, Text, TextSpan, Theme } from "@bridged.xyz/flutter-builder"

const text = new Text("", {
    style: Theme.of().textStyle.headline5
})

const textRich = Text.rich(new TextSpan({ text: 'hello', style: Theme.of().textStyle.headline5 }))


const richText = new RichText(
    {
        text: new TextSpan(
            {
                text: 'hello',
                style: Theme.of().textStyle.headline5,
                children: [
                    new TextSpan(
                        {
                            text: 'world',
                            style: Theme.of().textStyle.headline6,
                        }
                    ),
                ]
            }
        ),
    }
)

console.log(text.build().finalize())

console.log(textRich.build().finalize())

console.log(richText.build().finalize())