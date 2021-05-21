import styled from "styled-components"

interface Props {
    secondary?: boolean
}

export const Button = styled.button<Props>`
    display: block;
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 4px;
    box-shadow: none;

    color: white;
    background-color: ${p => p.secondary ? "black" : "#f8049c"};

    font-size: 1em;
    font-weight: bold;
    white-space: normal;

    &:disabled {
        color: #666;
        background-color: #eee;
    }
`