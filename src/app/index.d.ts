declare enum SassStyle {
    compact = 2,
    compressed = 3,
    expanded = 1,
    nested = 0,
}

interface ISassOptions {
    // Path to source map file
    // Enables the source map generating
    // Used to create sourceMappingUrl
    sourceMapFile?: string;
    // Pass-through as sourceRoot property
    sourceMapRoot?: string;
    // The input path is used for source map generation.
    // It can be used to define something with string
    // compilation or to overload the input file path.
    // It is set to "stdin" for data contexts
    // and to the input file on file contexts.
    inputPath?: string;
    // The output path is used for source map generation.
    // Libsass will not write to this file; it is just
    // used to create information in source-maps etc.
    outputPath?: string;
    // Embed included contents in maps
    sourceMapContents?: boolean;
    // Embed sourceMappingUrl as data uri
    sourceMapEmbed?: boolean;
    // Disable sourceMappingUrl in css output
    sourceMapOmitUrl?: boolean;
    style?: SassStyle;
    // Decimal point precision for outputting fractional numbers
    // (-1 will use the libsass default; which currently is 5)
    precision?: number;
    // If you want inline source comments
    comments?: boolean;
    // String to be used for indentation
    indent?: string;
    // String to be used to for line feeds
    linefeed?: string;
}

interface SassCompileResult {
    status: number;
    text: string;
    map: SassMap;
    files: any[];
}

interface SassMap {
    version: number;
    sourceRoot: string;
    file: string;
    sources: string[];
    sourcesContent: string[];
    mappings: string;
    names: any[];
}

declare class Sass {
    static style: typeof SassStyle;
    static setWorkerUrl(workerPath: string);

    constructor(workerPath?: string);

    compile(source: string, cb: (result: SassCompileResult) => void);
    compile(source: string, options: ISassOptions, cb: (result: SassCompileResult) => void);
    destroy(): void;
}