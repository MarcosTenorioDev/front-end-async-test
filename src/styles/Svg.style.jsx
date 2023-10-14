import styled from "styled-components";

export const Img = styled.img`
  width: ${(prop) => (prop.width ? prop.width : "50px")};
  min-width: ${(prop) => (prop.minw ? prop.minw : "auto")};
  min-height: ${(prop) => (prop.minh ? prop.minh : "auto")};
  margin: ${(prop) => (prop.margin ? prop.margin : "0")};
  position: ${(prop) => (prop.position ? prop.position : "relative")};
  top: ${(prop) => (prop.top ? prop.top : "")};
  right: ${(prop) => (prop.right ? prop.right : "")};
  left: ${(prop) => (prop.left ? prop.left : "")};
  bottom: ${(prop) => (prop.bottom ? prop.bottom : "")};
  z-index: ${(prop) => (prop.z ? prop.z : "0")};

  @media (max-width: 1220px) {
    display: none;
  }

`;
