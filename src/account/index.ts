import { ObjectId } from 'mongoose';

export interface IAccount {
    name: string;
    forname: string;
    idIdentity: ObjectId;
};