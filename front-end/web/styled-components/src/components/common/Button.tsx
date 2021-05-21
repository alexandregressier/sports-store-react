import styled, { css } from "styled-components"

interface Props {
    secondary?: boolean
    large?: boolean
}

export const Button = styled.button<Props>`
    display: block;
    width: 100%;
    border: none;
    box-shadow: none;

    color: white;
    background-color: ${p => p.secondary ? "black" : "#f8049c"};

    font-weight: bold;
    white-space: normal;

    ${p => p.large ? css`
        padding: 10px;
        border-radius: 5px;
        font-size: 1.5em;
    ` : css`
        padding: 8px;
        border-radius: 4px;
        font-size: 1em;
    `}
    &:disabled {
        color: #666;
        background-color: #eee;
    }
`