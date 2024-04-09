export interface IItem {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: string;
};

export interface IMenu {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: string;
};

export interface IMenuItem {
    idItem: string;
    idMenu: string;
};