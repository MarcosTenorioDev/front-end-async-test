import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    justify-content: ${(prop) => prop.justify ? prop.justify : "flex-start"};
    flex-direction: ${(prop) => prop.direction ? prop.direction : "row"};
    padding: ${(prop) => prop.padding ? prop.padding : "0"};
    margin: ${(prop) => prop.margin ? prop.margin : "0"};
    align-items: ${(prop) => prop.items ? prop.items : "flex-start"};
    justify-content: ${(prop) => prop.justify ? prop.justify : "flex-start"};
    width: ${(prop) => prop.width ? prop.width : "auto"};
    height: ${(prop) => prop.height ? prop.height : "auto"};
    gap: ${(prop) => prop.gap ? prop.gap : "0"};
    max-width: ${(prop) => prop.maxw ? prop.maxw : "none"} ;
    border: ${(prop) => prop.border ? prop.border : "none"};

    @media (max-width:980px) {
        text-align: center;
        align-items: center;
        gap: 20px;
    }
    @media (max-width:480px) {
        flex-direction: column;
    }
`