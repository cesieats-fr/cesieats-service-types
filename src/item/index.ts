import { Document } from 'mongoose';

export interface IItem extends Document {
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: string;
};

export interface IMenu extends Document{
    title: string;
    description?: string;
    imageUrl?: string;
    price: Number;
    idRestaurant: string;
};

export interface IMenuItem extends Document{
    idItem: string;
    idMenu: string;
};