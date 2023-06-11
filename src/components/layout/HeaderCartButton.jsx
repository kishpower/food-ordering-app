import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import CartIcon from '../cart/CartIcon'
import CartContext from '../store/cart-context'

//onClick()

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <>
            <Button onClick={props.onClick} isHighlighted={btnIsHighlighted}>
                <Icon>
                    <CartIcon></CartIcon>
                </Icon>

                <span>
                    Your Cart
                </span>

                <Badge>
                    {numberOfCartItems}
                </Badge>

            </Button>
        </>
    )
}

const Icon = styled.span`
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
`

const Badge = styled.span`
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
`
const Bump = keyframes`
0% {
    transform: scale(1);
}
10% {
    transform: scale(0.9);
}
30% {
    transform: scale(1.1);
}
50% {
    transform: scale(1.15);
}
100% {
    transform: scale(1);
}
`

const Button = styled.button`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    ${props => {
        return props.isHighlighted ? css`animation : ${Bump} 300ms ease-out;` : ''
    }
    }
    
    &:hover,&:active{
    background-color: #2c0d00;
}
    &:hover ${Badge},
    &:active ${Badge} {
    background-color: #92320c;
}
`




export default HeaderCartButton