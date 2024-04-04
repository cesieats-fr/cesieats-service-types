export interface IItem {
    id: number;
    title: string;
}

export interface IMenu {
    id: string;
    title: string;
}

export interface IMenuItem {
    id: string;
    idItem: string;
    idMenu: string;
}