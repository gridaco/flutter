import { Widget } from "../widgets";
import { Opacity } from "../widgets/opacity";



const prebuilt = Widget.prebuilt("UndifinedCustomWidget()")


const opacity = new Opacity({
    opacity: 0.0,
    child: prebuilt
})

console.log(opacity.build().finalize())
