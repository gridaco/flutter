// import { formatCode } from "dart-style"
import { Buildable } from "./buildable";

export class BuildingTree implements Buildable {
    readonly defaultArguments: Array<string> = Array<string>()
    readonly namedArguments: Map<string, string> = new Map();
    readonly containerName: string
    readonly depth: number
    pushDefaultArgument(value: string) {
        this.defaultArguments.push(value);
    }

    pushNamedArgument(key: string, value: string) {
        this.namedArguments.set(key, value);
    }

    pushNamedArray(key: string, array: Array<string>) {
        let content = "";
        array.forEach((el) => {
            content += `${el},\n`
        })
        const code = `[\n${content}]`
        this.namedArguments.set(key, code);
    }

    constructor(containerName?: string, depth?: number) {
        this.containerName = containerName;
        this.depth = depth;
    }

    get isRootTree() {
        return this.depth == 0;
    }

    code: string

    build(): BuildingTree {
        let final = ""
        this.defaultArguments.forEach((v) => {
            final += `${v},\n`
        })
        this.namedArguments.forEach((v, k) => {
            final += `${k}: ${v},\n`
        })
        final = `${this.containerName}(
    ${final}
)`
        this.code = final;
        return this;
    }

    finalize() {
        if (this.isRootTree) {
            this.code += ";"
        }
        this.format();
        return this.lookup();
    }

    format(): string {
        // this.code = formatCode(this.code).code;
        return this.lookup();
    }

    lookup(): string {
        return this.code
    }
}