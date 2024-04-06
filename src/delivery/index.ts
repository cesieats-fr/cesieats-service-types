import { ObjectId } from 'mongoose';

export interface IDelivery {
    state: DeliveryState;
    idClient: ObjectId;
    idRestaurant: ObjectId;
    idDeliver: ObjectId;
    idOrder: ObjectId;
};

export enum DeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
};