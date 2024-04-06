export interface IDelivery {
    state: DeliveryState;
    idClient: string;
    idDeliver: string;
    idOrder: string;
}
enum DeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
}