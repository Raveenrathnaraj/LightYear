export interface FoodDetail {
    id:number;
    name:string;
    price:number;
}

export interface IFoodCart{
    foodItems: FoodCartItem [];
    netTotal: number;
    taxAmount : number;
    deliveryFee: number;
    finalPrice: number;
}

export interface FoodCartItem {
    id: number;
    name: string;
    qty: number;
    price: number;
    totalPrice: number;
}