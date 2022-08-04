export function removeLastSemicolon(code: string) {
    // whatever ends with (;)n
    // );;;;; -> )
    // ); -> )
    // aaa;;;;; -> aaa
    code = code.replace(/(;*);$/, '')
    return code
}

export function endsWithSemicolon(code: string): boolean {
    return code.endsWith(';')
}

export function exportDuplicatedCommas(code: string) {
    return code.replace(",,", ",")
}