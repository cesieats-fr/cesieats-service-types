import { Document } from 'mongoose';

export interface INotification extends Document {
    title: string;
    text: string;
    typeNotif: ENotificationType;
};

export enum ENotificationType {
    Info,
    Warning,
    Error,
};
