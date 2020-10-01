import { formatCode } from "dart-style"

export class BuildingTree {
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

    constructor(containerName: string, depth: number) {
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
        this.code = formatCode(this.code).code;
        return this.lookup();
    }

    lookup(): string {
        return this.code
    }
}