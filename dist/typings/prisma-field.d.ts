declare type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export declare enum PrismaFieldType {
    STRING = "String",
    INTEGER = "Int",
    BIG_INT = "BigInt",
    DECIMAL = "Decimal",
    FLOAT = "Float",
    BOOLEAN = "Boolean",
    DATE_TIME = "DateTime",
    JSON = "Json"
}
export declare type PrismaFieldTypeName = LiteralUnion<`${PrismaFieldType}`>;
export declare type PrismaFieldAttribute = "@unique" | "@id" | "@updatedAt" | `@map("${string}")` | `@default(${string})` | "@ignore";
export declare type PrismaFieldModifier = "?" | "[]" | "";
export {};
