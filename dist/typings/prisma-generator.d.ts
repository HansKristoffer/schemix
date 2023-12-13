export interface PrismaGeneratorOptions {
    provider: string;
    name?: string;
    output?: string;
    previewFeatures?: string[];
    engineType?: "library" | "binary";
    binaryTargets?: string[];
    [key: string]: string | string[] | boolean | undefined;
}
export declare type PrismaMultiGeneratorOptions = Array<PrismaGeneratorOptions & {
    name: string;
}>;
