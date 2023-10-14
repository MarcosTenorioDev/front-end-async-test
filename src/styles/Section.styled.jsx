import styled from "styled-components";

const HeroSectionBg = styled.div`
width: 100vw;
height: 100vh;
max-height: 700px;
background: linear-gradient(260deg, #41B5D9 2.25%, #5F41D9 100.27%);
display: flex;
justify-content: center;
color: #FFF;
position: relative;
`

const Title = styled.h1`
    max-width: ${(prop) => prop.maxw ? prop.maxw : "fit-content"};
    font-size:  ${(prop) => prop.size ? prop.size : "1.5rem"};
    font-weight:  ${(prop) => prop.weight ? prop.weight : "600"};
    letter-spacing:  ${(prop) => prop.spacing ? prop.spacing : "normal"};
    opacity: ${(prop) => prop.opacity ? prop.opacity : "1"};
`
const Subtitle = styled.h2`
    max-width: ${(prop) => prop.maxw ? prop.maxw : "fit-content"};
    font-size:  ${(prop) => prop.size ? prop.size : "1.5rem"};
    font-weight:  ${(prop) => prop.weight ? prop.weight : "600"};
    letter-spacing:  ${(prop) => prop.spacing ? prop.spacing : "normal"};
    opacity: ${(prop) => prop.opacity ? prop.opacity : "1"};
`

const ContentSection = styled.section`
width: 100%;
max-width: 1440px;
padding: 0px 112px;

@media (max-width:1220px) {
    padding: 100px 28px;
}

`

export { HeroSectionBg, ContentSection, Title, Subtitle };