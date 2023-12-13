import { PrismaFieldTypeName } from "../typings/prisma-field";
import { Comment } from "../typings/prisma-type-options";
export declare class PrismaScalarField {
    private readonly name;
    private type;
    private attributes;
    private modifier;
    private rawAttributeString;
    private comments;
    constructor(name: string, type: PrismaFieldTypeName);
    setOptional(): this;
    setList(): this;
    setAsId(): this;
    setUnique(): this;
    setToUpdatedAt(): this;
    setDefault(defaultValue: string | number | {
        cuid: boolean;
        uuid: boolean;
        now: boolean;
    }): this;
    setIgnore(): this;
    mapTo(fieldName: string): this;
    setRawAttributes(rawAttributeString: string): this;
    setComments(comments: Comment[]): this;
    toFieldData(): {
        comments: (`/// ${string}` | `// ${string}`)[];
        tokens: string[];
    };
    toTokenArray(): string[];
}
