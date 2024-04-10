export interface IOrder {
    _id?: string;
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

export interface IOrderItems {
    _id?: string;
    idOrder: string;
    idItem: string;
};

export interface IOrderMenus {
    _id?: string;
    idOrder: string;
    idMenu: string;
}

export enum OrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};