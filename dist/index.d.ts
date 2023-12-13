import { PrismaSchema } from "./modules/PrismaSchema";
import { PrismaDataSourceOptions } from "./typings/prisma-datasource";
import { PrismaGeneratorOptions, PrismaMultiGeneratorOptions } from "./typings/prisma-generator";
declare type PrivateSchema = Omit<PrismaSchema, "createMixin" | "createEnum" | "createModel">;
interface CreateSchemaOptions {
    datasource: PrismaDataSourceOptions;
    generator: PrismaGeneratorOptions | PrismaMultiGeneratorOptions;
    basePath?: string;
    additionalPaths?: string[];
}
export declare let schema: PrismaSchema | undefined;
/**
 * Create a Prisma schema object.
 * @param props.datasource The datasource object information for Prisma.
 * @param props.generator The generator object information for Prisma.
 * @param props.basePath The base path for the schema object, optional if you want a purely programmatically generated schema.
 * @param props.additionalPaths The path for a secondary location for the schema objects. Will not be searched if basePath is empty.
 * @returns The generated schema object.
 */
export declare const createSchema: <T extends CreateSchemaOptions>({ datasource, generator, basePath, additionalPaths, }: T) => T["basePath"] extends string ? PrivateSchema : PrismaSchema;
export { createMixin, createEnum, createModel } from "./util/create";
export { extendModel } from "./util/extend";
export { PrismaModel } from "./modules/PrismaModel";
export { PrismaEnum } from "./modules/PrismaEnum";
export { PrismaSchema };
