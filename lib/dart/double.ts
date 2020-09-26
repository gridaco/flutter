import { Buildable } from "../builder/buildable";
export type double = number | Double;
type doubleMode = "value" | "nan" | "infinity" | "negativeInfinity" | "minPositive" | "maxFinite"
export class Double implements Buildable {
    static nan = new Double(undefined, "nan");
    static infinity = new Double(undefined, "infinity");
    static negativeInfinity = new Double(undefined, "negativeInfinity");
    static minPositive = new Double(undefined, "minPositive");
    static maxFinite = new Double(undefined, "maxFinite");

    _mode: doubleMode
    _value: number

    constructor(d: number, mode: doubleMode = "value") {
        this._value = d;
        this._mode = mode
    }

    static value(d: number) {
        return new Double(d);
    }

    /**
     * builds the double value like dart style
     */
    build(): string {
        switch (this._mode) {
            case "nan":
                return "double.nan"
            case "infinity":
                return "double.infinity"
            case "negativeInfinity":
                return "double.negativeInfinity"
            case "minPositive":
                return "double.minPositive:"
            case "maxFinite":
                return "maxFinite"
            case "value":
                return this._value.toString()
        }
    }
}