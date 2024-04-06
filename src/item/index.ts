export interface IItem {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
}

export interface IMenu {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
}

export interface IMenuItem {
    idItem: string;
    idMenu: string;
}