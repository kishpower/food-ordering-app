import React from 'react'
import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        let updatedItems;

        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id;
        })

        const existingCartItem = state.items[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            console.log("updatedItem -", updatedItem);
        } else {
            updatedItems = state.items.concat(action.item);
        }
        console.log("updatedItems -", updatedItems);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const removingItemIndex = state.items.findIndex(item => {
            return item.id === action.id;
        })
        const removingItem = state.items[removingItemIndex];
        const updatedTotalAmount = state.totalAmount - removingItem.price;

        let updatedItems;
        if (removingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)

        } else {
            const updatedItem = { ...removingItem, amount: removingItem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[removingItemIndex] = updatedItem;
        }
        console.log("updatedItems -", updatedItems);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider