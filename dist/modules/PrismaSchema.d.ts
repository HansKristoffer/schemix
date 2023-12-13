import { PrismaModel } from "../modules/PrismaModel";
import { PrismaEnum } from "../modules/PrismaEnum";
import { PrismaDataSourceOptions } from "../typings/prisma-datasource";
import { PrismaGeneratorOptions, PrismaMultiGeneratorOptions } from "../typings/prisma-generator";
export declare class PrismaSchema {
    private readonly datasource;
    private readonly generator;
    private readonly basePath?;
    private readonly additionalPaths?;
    private enums;
    private models;
    constructor(datasource: PrismaDataSourceOptions, generator: PrismaGeneratorOptions | PrismaMultiGeneratorOptions);
    constructor(datasource: PrismaDataSourceOptions, generator: PrismaGeneratorOptions | PrismaMultiGeneratorOptions, basePath: string);
    constructor(datasource: PrismaDataSourceOptions, generator: PrismaGeneratorOptions | PrismaMultiGeneratorOptions, basePath: string, additionalPaths: string[]);
    /**
     * Parses a datasource block for the schema using the parameters
     * provided in the constructor.
     * @returns A string representing the datasource block.
     */
    private parseDataSource;
    /**
     * Parses a generator block for the schema using the parameters
     * provided in the constructor.
     * @returns A string representing the generator block.
     */
    private parseGenerator;
    /**
     * Creates a mixin and automatically attaches it to the schema.
     * @returns The `PrismaModel` object.
     */
    createMixin(): PrismaModel;
    /**
     * Creates a `PrismaModel` object and automatically attaches it to the schema.
     * @param modelName The name of the model.
     * @returns The `PrismaModel` object.
     */
    createModel(modelName: string): PrismaModel;
    /**
     * Creates a `PrismaEnum` object and automatically attaches it to the schema.
     * @param enumName The name of the enum.
     * @returns The `PrismaEnum` object.
     */
    createEnum(enumName: string): PrismaEnum;
    /**
     * Parses the schema into a singular schema string.
     * @returns Returns a singular schema string.
     */
    toString(): Promise<string>;
    /**
     * Exports the schema to the provided filepath/filename.
     * @param filepath The target filepath.
     * @param filename The target filename.
     */
    export(filepath: string, filename: string): void;
}
