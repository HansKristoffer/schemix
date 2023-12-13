import { PrismaFieldTypeName } from "../typings/prisma-field";
import { Comment } from "../typings/prisma-type-options";
export declare class PrismaRelationalField {
    private readonly name;
    private type;
    private relationAttributes;
    private attributes;
    private modifier;
    private rawAttributeString;
    private comments;
    constructor(name: string, type: PrismaFieldTypeName);
    private parseRelationAttribute;
    setFields(tokens: string[]): this;
    setName(targetName: string): this;
    setReferences(tokens: string[]): this;
    setOnDelete(action: string): this;
    setOnUpdate(action: string): this;
    setMap(action: string): this;
    setOptional(): this;
    setList(): this;
    setRawAttributes(rawAttributeString: string): this;
    setComments(comments: Comment[]): this;
    toFieldData(): {
        comments: (`/// ${string}` | `// ${string}`)[];
        tokens: string[];
    };
    toTokenArray(): string[];
}
