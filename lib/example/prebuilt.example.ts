import { PrebuiltWidget } from "../builder/prebuilt-widget";
import { Double } from "../dart";
import { Opacity } from "../widgets/opacity";



const prebuilt = new PrebuiltWidget("UndifinedCustomWidget()")


const opacity = new Opacity({
    opacity: 0.0,
    child: prebuilt
})

console.log(opacity.build().finalize())
