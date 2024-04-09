export interface IDelivery {
    state: EDeliveryState;
    idClient: string;
    idDeliver: string;
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