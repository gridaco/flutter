export function param(props?: {
    name?: string,
    default?: boolean
}) {
    if (name == null) {
        // this is default parameter
    }
    console.log("f(): evaluated");
    return function (
    ) {
        console.log("f(): called");
    };
}
