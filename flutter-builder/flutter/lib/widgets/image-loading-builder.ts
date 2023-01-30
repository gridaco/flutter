import { BuildContext } from "./build-context";
import { Widget } from "./widget";

export type ImageLoadingBuilder = (context?: BuildContext, child?: Widget, loadingProgress?: any) => Widget