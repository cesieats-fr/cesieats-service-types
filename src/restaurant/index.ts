export interface IRestaurant {
    _id?: string;
    name: string;
    description: string;
    address: string;
    openingTime: string;
    closingTime: string;
    deliveryPrice: number;
    telephone: string;
    idAccount?: string;
}