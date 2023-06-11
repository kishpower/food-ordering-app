import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'


//onCloseCart()
const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount1 = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    const cartItems = (
        <ul>
            {cartCtx.items.map(item => {
                return (<CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />)
            })}
        </ul>
    )
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <Total>
                <span>Total Amount</span>
                <span>{totalAmount1}</span>
            </Total>
            <Actions>
                <ButtonAlt onClick={props.onCloseCart}>Close</ButtonAlt>
                {hasItems && <ButtonAlt2>Order</ButtonAlt2>}
            </Actions>
        </Modal>
    )
}

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem
`
const ButtonAlt = styled.button``

const ButtonAlt2 = styled.button``

const Actions = styled.div`
    text-align: right;

    button{
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #8a2b06;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
    }

    button:hover,button:active{
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    }

    ${ButtonAlt}{
        color: #8a2b06;
    }

    ${ButtonAlt2}{
        background-color: #8a2b06;
        color: white;
    }
`


export default Cart