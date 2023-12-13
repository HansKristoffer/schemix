export declare type CommentTypes = "///" | "//";
export declare type Comment = `${CommentTypes} ${string}`;
export declare type DefaultFieldOptions = {
    comments?: Comment[];
    map?: string;
    raw?: string;
    ignore?: boolean;
};
export declare type StringFieldOptions = ({
    id?: never;
    default?: string | ({
        uuid?: true;
        cuid?: never;
    } | {
        uuid?: never;
        cuid?: true;
    });
    unique?: true;
    optional?: true;
    list?: never;
} | {
    id?: true;
    default?: string | ({
        uuid?: true;
        cuid?: never;
    } | {
        uuid?: never;
        cuid?: true;
    });
    unique?: true;
    optional?: never;
    list?: never;
} | {
    id?: never;
    default?: never;
    unique?: never;
    optional?: never;
    list?: true;
}) & DefaultFieldOptions;
export declare type IntFieldOptions = ({
    id?: true;
    default?: number | {
        autoincrement: true;
    };
    unique?: true;
    optional?: never;
    list?: never;
} | {
    id?: never;
    default?: number | {
        autoincrement: true;
    };
    unique?: true;
    optional?: true;
    list?: never;
} | {
    id?: never;
    default?: never;
    optional?: never;
    unique?: never;
    list?: true;
}) & DefaultFieldOptions;
export declare type FloatFieldOptions = ({
    default?: number;
    optional?: true;
    unique?: true;
    list?: never;
} | {
    default?: never;
    optional?: never;
    unique?: never;
    list?: true;
}) & DefaultFieldOptions;
export declare type DecimalFieldOptions = ({
    precision?: [number, number];
    default?: number;
    optional?: true;
    unique?: true;
    list?: never;
} | {
    precision?: [number, number];
    default?: never;
    optional?: never;
    unique?: never;
    list?: true;
}) & DefaultFieldOptions;
export declare type BooleanFieldOptions = ({
    default?: boolean;
    optional?: true;
    list?: never;
} | {
    default?: never;
    optional?: never;
    list?: true;
}) & DefaultFieldOptions;
export declare type DateTimeFieldOptions = {
    default?: {
        now: true;
    };
    updatedAt?: true;
    optional?: true;
} & DefaultFieldOptions;
export declare type JsonFieldOptions = ({
    default?: object | string | undefined;
    optional?: true;
    list?: never;
} | {
    default?: never;
    optional?: never;
    list?: true;
}) & DefaultFieldOptions;
declare type ReferentialAction = "Cascade" | "Restrict" | "NoAction" | "SetNull" | "SetDefault";
export declare type RelationalFieldOptions = ({
    list?: true;
    optional?: never;
} | {
    list?: never;
    optional?: true;
}) & {
    references?: string[];
    fields?: string[];
    onDelete?: ReferentialAction;
    onUpdate?: ReferentialAction;
    name?: string;
} & DefaultFieldOptions;
export declare type EnumFieldOptions = ({
    default?: string;
    list?: never;
    optional?: true;
    unique?: true;
} | {
    default?: never;
    list?: true;
    optional?: never;
    unique?: never;
}) & DefaultFieldOptions;
export declare type FieldOptions = StringFieldOptions | IntFieldOptions | FloatFieldOptions | BooleanFieldOptions | DateTimeFieldOptions | JsonFieldOptions | EnumFieldOptions;
export declare type CompositeIDFieldOptions = {
    name?: string;
    fields: string[];
    map?: string;
};
export declare type CompositeUniqueFields = string[];
export declare type CompositeUniqueOptions = {
    fields: CompositeUniqueFields;
    map?: string;
};
export declare type CompositeUniqueFieldOptions = CompositeUniqueOptions | CompositeUniqueFields;
export declare type ModelMapOptions = {
    name: string;
} | string;
export {};
