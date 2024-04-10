export interface INotification {
    _id?: string;
    title: string;
    text: string;
    typeNotif: ENotificationType;
};

export enum ENotificationType {
    Info,
    Warning,
    Error,
};
