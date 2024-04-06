import { ObjectId } from 'mongoose';

export interface IItem {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: ObjectId;
};

export interface IMenu {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: ObjectId;
};

export interface IMenuItem {
    idItem: ObjectId;
    idMenu: ObjectId;
};