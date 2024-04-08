import { ObjectId } from 'mongoose';

export interface IAccount {
    name: string;
    forname: string;
    address: string;
    idIdentity: ObjectId;
};