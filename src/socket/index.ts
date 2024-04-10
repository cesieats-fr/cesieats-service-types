export interface ISocketAccountId {
    userId: string;
    socketId: string;
}

export interface ISocketEvent {
    userId: string;
    event: string;
    data: unknown;
}