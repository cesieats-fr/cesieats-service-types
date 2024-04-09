import { ObjectId } from 'mongoose';

export interface IOrder {
    idRestaurant: string;
    idClient: ObjectId;
    idDelivery?: ObjectId;
    orderState: OrderState;
    price: number;
    clientName: string;
    clientAddress: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantTelephone: string;
};

export interface IOrderItems {
    idOrder: ObjectId;
    idItem: ObjectId;
};

export interface IOrderMenus {
    idOrder: ObjectId;
    idMenu: ObjectId;
}

export enum OrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};