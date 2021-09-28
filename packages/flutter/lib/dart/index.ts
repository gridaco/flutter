export {
    Double,
} from "./double";

// learn more at https://github.com/webpack/webpack/issues/7378#issuecomment-492641148
import { double as d } from "./double"
export type double = d;
