import { PrismaEnumOptions } from "../typings/prisma-enum";
import { ModelMapOptions } from "../typings/prisma-type-options";
export declare class PrismaEnum {
    readonly name: string;
    private enumMap;
    private blockAttributes;
    constructor(name: string);
    addValue(value: string, options?: PrismaEnumOptions): this;
    map(options: ModelMapOptions): this;
    toString(): string;
}
