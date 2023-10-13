import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBg = styled.div`
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(15px);
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 20px 0px;

  @media (max-width: 1220px) {
    background: none;
    padding: 0;
  }
`;

const NavBarContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0px 112px;

  @media (max-width: 1220px) {
    padding: 0;
  }
`;
const NavbarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1220px) {
    padding: 20px 0px;
    flex-direction: column-reverse;
    background: var(--teal-purple-gradient);
    height: 100vh;
    display: ${(prop) => (prop.open ? "flex" : "none")};
    z-index: 1;
    overflow-y: auto;
  }
`;

const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 1220px) {
    & > *:nth-child(2) {
      display: none;
    }
    padding: 5px 3rem;
  }

  @media (max-width: 660px) {
    padding: 5px 5rem 5px 3rem;
  }

  @media (max-width: 450px) {
    padding: 5px 7rem 5px 1rem;
  }
`;

const NavLinkWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-left: 10%;

  @media (max-width: 1220px) {
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 7rem 1rem 0px;
    width: 80%;
    gap: 0;
    ${(props) =>
      props.isMobileMenuOpen &&
      css`
        display: flex;
      `}
  }
  @media (max-width: 440px) {
    overflow-y: auto;
  }
`;

const StyledUserIcon = styled.img`
  margin-right: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  transition: 0.2s;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 500;

  &:nth-child(4) {
    border-right: 1px solid rgba(var(--brand-color), 0.25);
    padding-right: 48px;
    margin-right: 48px;
  }

  @media (max-width: 1220px) {
    &:nth-child(4) {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
    }
    border-top: 1px solid rgb(90, 147, 224);
    padding: 20px 0;
  }
`;

const StyledHamburguerIcon = styled.i`
  display: none;
  position: absolute;
  right: 25px;
  top: 28px;
  z-index: 9999999;
  @media (max-width: 1220px) {
    display: block;
  }
`;

const LogoImg = styled.img`
  width: 150px;

  @media (max-width: 1220px) {
    position: absolute;
    left: 25px;
    top: 34px;
    z-index: 1;
  }
`;

export {
  LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
  NavBg,
  StyledUserIcon,
  StyledHamburguerIcon,
  NavBarContent,
  NavButtonWrapper,
};
