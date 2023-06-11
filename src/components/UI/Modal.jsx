import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

//onCloseCart()
const Backdrop = props => {
    return <BackdropComp onClick={props.onCloseCart} />
}

const ModalOverlay = props => {
    return (
        <ModalComp>
            <ContentComp>{props.children}</ContentComp>
        </ModalComp>
    )
}
const portalElement = document.getElementById('overlays');


//onCloseCart()
const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </>
    )
}

const BackdropComp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`

const SlideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const wideScreen = '(min-width: 768px)'

const ModalComp = styled.div`
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: ${SlideDown} 300ms ease-out forwards;

    @media ${wideScreen} {
        width: 40rem;
        left: calc(50% - 20rem);
    }
    
`

const ContentComp = styled.div``




export default Modal