import "reflect-metadata";

export const paramMetadataKey = Symbol("param");

export function param(props?: {
    name?: string,
    default?: boolean
}) {
    return Reflect.metadata(paramMetadataKey, props.name);
}


export function defaultParam(): (target: object, propertyKey: string) => void {
    return registerProperty;
}

function registerProperty(target: object, propertyKey: string): void {
    let properties: string[] = Reflect.getMetadata(paramMetadataKey, target);

    if (properties) {
        properties.push(propertyKey);
    } else {
        properties = [propertyKey];
        Reflect.defineMetadata(paramMetadataKey, properties, target);
    }
}

export function getDefaultParamProperties(origin: object): object {
    const properties: string[] = Reflect.getMetadata(paramMetadataKey, origin);
    const result = {};
    properties.forEach(key => result[key] = origin[key]);
    return result;
}