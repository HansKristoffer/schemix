import { PrismaEnumField } from "../modules/PrismaEnumField";
import { PrismaScalarField } from "../modules/PrismaScalarField";
import { PrismaRelationalField } from "../modules/PrismaRelationalField";
import { CompositeIDFieldOptions, CompositeUniqueFieldOptions, EnumFieldOptions, FieldOptions, ModelMapOptions, RelationalFieldOptions } from "../typings/prisma-type-options";
/**
 * Manipulates the `PrismaScalarField` based on the options provided.
 * @param field THe prisma scalar field object.
 * @param options The options object.
 */
export declare const handleScalarOptions: <T extends FieldOptions>(field: PrismaScalarField, options: T) => void;
/**
 * Manipulates the `PrismaRelationField` based on the options provided.
 * @param field The prisma relational field object.
 * @param options The options object.
 */
export declare const handleRelationalOptions: <T extends RelationalFieldOptions>(field: PrismaRelationalField, options: T) => void;
/**
 * Manipulates the `PrismaEnumField` based on the options provided.
 * @param field The prisma enum field object.
 * @param options The options object.
 */
export declare const handleEnumOptions: <T extends EnumFieldOptions>(field: PrismaEnumField, options: T) => void;
export declare const buildCompositeId: (options: CompositeIDFieldOptions) => string;
export declare const buildCompositeUnique: (options: CompositeUniqueFieldOptions) => string;
export declare const buildModelMap: (options: ModelMapOptions) => string;
