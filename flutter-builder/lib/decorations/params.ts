export const paramMetadataKey = Symbol("param");
import { Reflection as Reflect } from '@abraham/reflection';

export function param(props?: {
    name?: string,
    default?: boolean
}) {
    return Reflect.metadata(paramMetadataKey, props.name);
}

//#region default param
export function defaultParam(): (target: object, propertyKey: string) => void {
    return registerDefaultParamProperty;
}

function registerDefaultParamProperty(target: object, propertyKey: string): void {
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

//#endregion



//#region ignore


export const ignoreMetadataKey = Symbol("param");

export function ignore(): (target: object, propertyKey: string) => void {
    return registerIgnoreFieldProperty;
}

function registerIgnoreFieldProperty(target: object, propertyKey: string): void {
    let properties: string[] = Reflect.getMetadata(ignoreMetadataKey, target);

    if (properties) {
        properties.push(propertyKey);
    } else {
        properties = [propertyKey];
        Reflect.defineMetadata(ignoreMetadataKey, properties, target);
    }
}

export function getIgnoreProperties(origin: object): object {
    const properties: string[] = Reflect.getMetadata(ignoreMetadataKey, origin);
    const result = {};
    properties.forEach(key => result[key] = origin[key]);
    return result;
}

//#endregion