import { ObjectId } from 'mongoose';

export interface IOrder {
    idRestaurant: string;
    idClient: ObjectId;
    idDelivery?: ObjectId;
    orderState: OrderState;
    price: number;
};

export interface IOrderItems {
    idOrder: string;
    idItem: string;
};

export enum OrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};