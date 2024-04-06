export interface INotification {
    title: string;
    text: string;
    typeNotif: ENotificationType;
};

export enum ENotificationType {
    Info,
    Warning,
    Error,
};
