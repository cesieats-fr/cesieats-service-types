export interface IOrder {
    id: string;
    idRestaurant: string;
    idClient: string;
    idDelivery?: string;
}

export interface IOrderItems {
    id: string;
    idOrder: string;
    idItem: string;
}