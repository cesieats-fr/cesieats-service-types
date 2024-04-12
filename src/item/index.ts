export interface IItem {
    _id?: string;
    title: string;
    description?: string;
    imageUrl?: string;
    price: number;
    idRestaurant?: string;
};

export interface IMenu {
    _id?: string;
    title: string;
    description?: string;
    imageUrl?: string;
    price: number;
    idRestaurant?: string;
};

export interface IMenuItem {
    _id?: string;
    idItem: string;
    idMenu: string;
};