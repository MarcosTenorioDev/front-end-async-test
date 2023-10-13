import styled from "styled-components";

export const Button = styled.button`
    background: none;
    background-color: ${(prop) => prop.backgroundcolor ? prop.backgroundcolor : "none"};
    border: ${(prop) => prop.border ? prop.border : "none"};
    font-weight: 600;
    color: ${(prop) => prop.color ? prop.color : "white"};
    font-size: ${(prop) => prop.fontsize ? prop.fontsize : "1.5rem"};
    border-radius: ${(prop) => prop.borderradius ? prop.borderradius : "none"};
    padding: ${(prop) => prop.padding ? prop.padding : "0"};
    cursor: pointer;
    margin: ${(prop) => prop.margin ? prop.margin : "0"};
    display: flex;
    align-items: center;
    white-space: ${(prop) => prop.whitespace ? prop.whitespace : "break"};
`
