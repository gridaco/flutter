
import Axios from "axios";

var xpath = require('xpath')
    , dom = require('xmldom').DOMParser

import { Parameter } from "coli/lib"

const axios = Axios.create(
    {
        baseURL: "https://api.flutter.dev/"
    }
)

type docType = "class" | "constructor" | "enum"

async function main(docUrl: string, type: docType): Promise<string> {
    const htmldocs = await readDocsHtml(docUrl)
    parseDocs(htmldocs, type)

    return htmldocs
}


function convertDartNativeTypeToTypescriptType(type: string): string {
    const map = {
        'double': 'double',
        'bool': 'boolean',
        'List': 'Array',
        'String': 'string',
        'int': 'number',
        'Iterable': 'Map'
    }

    if (type in map) {
        return map[type]
    }
    return type
}


function makeTsConstructor(name: string, params: Array<Parameter<any>>): string {
    var parametering = params.reduce(function (map, obj) {
        map[obj.name] = obj.type;
        return map;
    }, {});


    var allocating = {}
    params.forEach(function (v, i) {
        allocating[`this.${v.name} = `] = `args?.${v.name}`
    }, {});
    allocating = JSON.stringify(allocating, null, 4).split('"').join().split(':').join().split('{').join().split('}').join().split(',').join()

    return `constructor(args?:
${JSON.stringify(parametering, null, 4).split('"').join().split('\,').join().split(':').join('?:')}
){
    super()
${allocating}
}`
}

async function parseDocs(docs: string, type: docType) {
    switch (type) {
        case "class":
            break;
        case "constructor":

            const xp_constructorName = `//*[@id="dartdoc-main-content"]/section[1]/span/text()`
            const xp_parameterTypes = `//*[@class="parameter"]/span[@class="type-annotation"]/a/text()`
            const xp_parameterNames = `//*[@class="parameter"]/span[@class="parameter-name"]/text()`

            const doc = new dom().parseFromString(docs)
            const constructorName = xpath.select(xp_constructorName, doc)[0].data
            const parameterTypes = xpath.select(xp_parameterTypes, doc).map((n) => n.data)
            const parameterNames = xpath.select(xp_parameterNames, doc).map((n) => n.data)


            const parameters: Array<Parameter<any>> = []

            for (let i = 0; i < parameterTypes.length; i++) {
                parameters.push({
                    type: convertDartNativeTypeToTypescriptType(parameterTypes[i],),
                    name: parameterNames[i]
                })
            }



            console.log(constructorName)
            const constructor = makeTsConstructor(constructorName, parameters);
            console.log(constructor)

            break;
        case "enum":
            break;
    }
}


async function readDocsHtml(docUrl: string) {
    const response = await axios.get(docUrl)
    return response.data
}


main("https://api.flutter.dev/flutter/material/FlatButton/FlatButton.icon.html", "constructor")