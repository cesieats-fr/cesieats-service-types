export interface IOrder {
    idRestaurant: string;
    idClient: string;
    idDelivery?: string;
    itemState: OrderState;
}

export interface IOrderItems {
    idOrder: string;
    idItem: string;
}

enum OrderState {
    WaitingForApprouval,
    Approuved,
    WaitingForDelivery,
    Done
}