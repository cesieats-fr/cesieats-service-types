export interface IOrder {
    _id?: string;
    idRestaurant: string;
    idAccountRestaurant: string;
    idClient: string;
    idDelivery?: string;
    orderState: EOrderState;
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
    amount: string;
};

export interface IOrderMenus {
    _id?: string;
    idOrder: string;
    idMenu: string;
    amount: string;
}

export enum EOrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};