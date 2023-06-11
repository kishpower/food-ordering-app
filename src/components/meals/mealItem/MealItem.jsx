import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';

// meal {name,description,price} 
// 
// 
const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    const price = props.price.toFixed(2);
    return (
        <Meal>
            <div>
                <h3>{props.name}</h3>
                <Description>{props.description}</Description>
                <Price>{price}</Price>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id}></MealItemForm>
            </div>
        </Meal>
    )
}

const Meal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;

    h3{
        margin: 0 0 0.25rem 0;
    }
`

const Description = styled.div`
    font-style: italic;
`

const Price = styled.div`
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
`
export default MealItem