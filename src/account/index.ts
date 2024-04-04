import { Schema, model } from "mongoose";

export interface IAccount {
    id: number;
    email: string;
    password: string;
};

export const accountSchema = new Schema<IAccount>({
    id: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const Account = model<IAccount>('Account', accountSchema);