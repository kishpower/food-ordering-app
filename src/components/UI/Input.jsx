import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef(
    (props, ref) => {
        return (
            <Input1>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} id={props.input.id} {...props.input} />
            </Input1>
        )
    }
)

const Input1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    label {
        font-weight: bold;
        margin-right: 1rem;
    }

    input {
        width: 3rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        font: inherit;
        padding-left: 0.5rem;
    }
`
export default Input