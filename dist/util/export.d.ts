import { PrismaSchema } from "../modules/PrismaSchema";
/**
 * Exports the schema to a path relative to the current working directory.
 * @param filepath The filepath of the target file.
 * @param filename The filename of the target file (should not include `.prisma` extension).
 * @param schema The `PrismaSchema` object.
 */
export declare const exportSchema: (filepath: string, filename: string, schema: PrismaSchema) => Promise<void>;
