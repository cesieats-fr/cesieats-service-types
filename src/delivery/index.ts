import { ObjectId } from "mongoose";

export interface IDelivery {
    state: EDeliveryState;
    idClient: ObjectId;
    idDeliver: ObjectId;
    idOrder: ObjectId;
    idRestaurant: ObjectId;
    clientAddress: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantTelephone: string;
}

enum EDeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
}