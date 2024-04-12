export interface IOrder {
    _id?: string;
    idRestaurant: string;
    idAccountRestaurant: string;
    idClient: string;
    idDeliver?: string;
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
    amount: number;
};

export interface IOrderMenus {
    _id?: string;
    idOrder: string;
    idMenu: string;
    amount: number;
}

export enum EOrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};