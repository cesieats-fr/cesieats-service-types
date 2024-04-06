export interface IDelivery {
    state: DeliveryState;
    idClient: string;
    idRestaurant: string;
    idDeliver: string;
    idOrder: string;
}
enum DeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
}