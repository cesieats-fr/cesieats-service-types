export interface IDelivery {
    _id?: string;
    state: EDeliveryState;
    idClient: string;
    idDeliver?: string;
    idOrder: string;
    idRestaurant: string;
    clientAddress: string;
    restaurantName: string;
    restaurantAddress: string;
    restaurantTelephone: string;
}

export enum EDeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
}