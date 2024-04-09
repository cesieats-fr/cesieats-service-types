export interface IOrder {
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
    idOrder: string;
    idItem: string;
};

export interface IOrderMenus {
    idOrder: string;
    idMenu: string;
}

export enum OrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
};