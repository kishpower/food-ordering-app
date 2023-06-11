
import React from 'react'
import styled from 'styled-components'
import mainImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

// functions - onShowCart()
//
//
const Header = (props) => {

    return (
        <>
            <Header1>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </Header1>
            <Image>
                <MainImage src={mainImage} />
            </Image>

        </>
    )
}
const Image = styled.div`
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
`

const MainImage = styled.img`
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`

const Header1 = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2;
    z-index: 5;
`
export default Header