import { Document } from 'mongoose';

export interface IRestaurant extends Document {
    name: string;
    description: string;
    address: string;
    openingTime: string;
    closingTime: string;
    deliveryPrice: number;
    telephone: string;
    idAccount?: string;
}