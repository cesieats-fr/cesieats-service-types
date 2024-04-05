export interface IOrder {
    id: string;
    idRestaurant: string;
    idClient: string;
    idDelivery?: string;
    itemState: OrderState;
}

export interface IOrderItems {
    id: string;
    idOrder: string;
    idItem: string;
}

enum OrderState {
    WaitingForApprouval,
    Approuved,
    WaitingForDelivery,
    Done
}