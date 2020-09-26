import { Buildable } from "../interface/buildable";
export type double = number | DartDouble;
type doubleMode = "value" | "nan" | "infinity" | "negativeInfinity" | "minPositive" | "maxFinite"
export class DartDouble implements Buildable {
    static nan = new DartDouble(undefined, "nan");
    static infinity = new DartDouble(undefined, "infinity");
    static negativeInfinity = new DartDouble(undefined, "negativeInfinity");
    static minPositive = new DartDouble(undefined, "minPositive");
    static maxFinite = new DartDouble(undefined, "maxFinite");

    _mode: doubleMode
    _value: number

    constructor(d: number, mode: doubleMode = "value") {
        this._value = d;
        this._mode = mode
    }

    static value(d: number) {
        return new DartDouble(d);
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