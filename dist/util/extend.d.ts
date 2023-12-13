import type { PrismaModel } from "../modules/PrismaModel";
export declare function extendModel(model: PrismaModel, name: string, callback: (Model: PrismaModel) => void): PrismaModel;
export declare function extendModel(model: PrismaModel, callback: (Model: PrismaModel) => void): PrismaModel;
