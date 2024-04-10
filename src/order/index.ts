import { Document } from 'mongoose';

export interface IOrder extends Document {
    idRestaurant: string;
    idAccountRestaurant: string;
    idClient: string;
    idDelivery?: string;
    orderState: OrderState;
    price: number;
    clientName: string;
    clientAddress: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantTelephone: string;
};

export interface IOrderItems extends Document {
    idOrder: string;
    idItem: string;
};

export interface IOrderMenus extends Document {
    idOrder: string;
    idMenu: string;
}

export enum OrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};