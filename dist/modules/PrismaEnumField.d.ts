import { PrismaFieldTypeName } from "../typings/prisma-field";
import { Comment } from "../typings/prisma-type-options";
export declare class PrismaEnumField {
    private readonly name;
    private type;
    private attributes;
    private modifier;
    private rawAttributeString;
    private comments;
    constructor(name: string, type: PrismaFieldTypeName);
    setOptional(): this;
    setList(): this;
    setUnique(): this;
    setDefault(defaultValue: string): this;
    mapTo(fieldName: string): this;
    setRawAttributes(rawAttributeString: string): this;
    setComments(comments: Comment[]): this;
    toFieldData(): {
        comments: (`/// ${string}` | `// ${string}`)[];
        tokens: string[];
    };
    toTokenArray(): string[];
}
