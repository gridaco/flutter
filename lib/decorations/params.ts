import "reflect-metadata";

export const paramMetadataKey = Symbol("param");

export function param(props?: {
    name?: string,
    default?: boolean
}) {
    return Reflect.metadata(paramMetadataKey, props.name);
}
