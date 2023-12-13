import { PrismaEnum } from "../modules/PrismaEnum";
import { PrismaModel } from "../modules/PrismaModel";
export declare function createModel(name: string, callback: (Model: PrismaModel) => void): PrismaModel;
export declare function createModel(callback: (Model: PrismaModel) => void): PrismaModel;
export declare function createEnum(name: string, callback: (Enum: PrismaEnum) => void): PrismaEnum;
export declare function createEnum(callback: (Enum: PrismaEnum) => void): PrismaEnum;
export declare function createMixin(callback: (Model: PrismaModel) => void): PrismaModel;
