export interface IAccount {
    email: string;
    password: string;
    name: string;
    forname: string;
    accountType: EAccountType;
    address?: string;
    apiKey?: string;
};

export enum EAccountType {
    CLIENT,
    DELIVER,
    RESTAURANT,
}