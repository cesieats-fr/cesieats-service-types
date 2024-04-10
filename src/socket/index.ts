export interface ISocketAccountId {
    accountId: string;
    socketId: string;
}

export interface ISocketEvent {
    accountId: string;
    event: string;
    data: unknown;
}