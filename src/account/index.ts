export interface IAccount {
    _id?: string;
    email: string;
    password: string;
    name: string;
    forname: string;
    accountType: EAccountType;
    address?: string;
    apiKey?: string;
    codeSponsor?: string;
};

export enum EAccountType {
    CLIENT,
    DELIVER,
    RESTAURANT,
}