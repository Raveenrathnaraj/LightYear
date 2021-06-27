import { any } from 'prop-types';
import React, { useState, createContext } from 'react';
import { FoodCartItem, IFoodCart } from './Interface';

interface FoodContextType {
    cart: IFoodCart;
    modifyCart: (food: FoodCartItem) => void;
}

const emptyCart:IFoodCart = {
    foodItems : [],
    netTotal: 0,
    deliveryFee:0,
    taxAmount: 0,
    finalPrice: 0
}

// @ts-ignore
export const foodCartContext = createContext<FoodContextType>()

export function FoodCart(props:any) {
    const [cart, setCart] = useState<IFoodCart>(emptyCart)
    const [id,setId] = useState(new Map())

    const modifyCart = (food:FoodCartItem) => {
        if (id.has(food.id)){
            const ind = id.get(food.id)
            if (food.qty){
                let price = cart?.foodItems && cart?.foodItems[ind]?.totalPrice
                price = food.totalPrice - price
                cart.netTotal+=price
                cart.foodItems[ind] = food
            }else{
                cart?.foodItems.splice(ind,1)
                id.delete(food.id)
                cart.foodItems.forEach((food,i) => id.set(food.id,i))
                setId(id)
                cart.netTotal -= food.price
            }
        }else{
            setId(id.set(food.id,cart.foodItems.length))
            cart?.foodItems.push(food)
            cart.netTotal += food.totalPrice
        }

        cart.taxAmount = cart.netTotal*.15
        setCart(cart)
    }
    return (
        <foodCartContext.Provider value = {{cart,modifyCart}}>
            {props.children}
        </foodCartContext.Provider>
    )
}

