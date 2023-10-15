import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBg = styled.div`
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(10px);
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  z-index: 2;

  @media (max-width: 1290px) {
    background: none;
    padding: 0;
  }
`;

const NavBarContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0px 112px;

  @media (max-width: 1290px) {
    padding: 0;
  }
`;
const NavbarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1290px) {
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
  width: 100%;
  max-width: 356px;

  @media (max-width: 1290px) {
    & > *:nth-child(2) {
      display: none;
    }
    max-width: 80%;
  }

  @media (max-width: 660px) {
    width: 80%;
    padding: 0px 3rem 0px 0px;
  }

  @media (max-width: 450px) {
    padding: 5px 7rem 5px 1rem;
  }
`;

const NavLinkWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  padding-left: 20px;
  margin-right: 48px;
  flex: 1;
  border-right: 1px solid rgba(var(--brand-color), 0.25);

  @media (max-width: 1290px) {
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    padding: 7rem 1rem 0px;
    width: 80%;
    gap: 0;
    border: none;
    ${(props) =>
      props.isMobileMenuOpen &&
      css`
        display: flex;
      `}
  }
  @media (max-width: 670px) {
    margin-bottom: 200px;
    height: 100vh;
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
  font-weight: 400;

  &:nth-child(5) {
    padding-right: 48px;
  }

  @media (max-width: 1290px) {
    &:nth-child(4) {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
    }
    &:nth-child(1) {
      border: none;
    }
    border-top: 1px solid rgb(90, 147, 224);
    padding: 20px 0;
  }

  &:hover {
    transform: translateY(4px);
  }
`;

const StyledNavButton = styled.button`
  color: #FFF;
  transition: 0.2s;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  background: none;
  border-radius: 80px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    font-size: 1.7rem;
  }
`;

const StyledHamburguerIcon = styled.i`
  display: none;
  position: absolute;
  right: 25px;
  top: 28px;
  z-index: 9999999;
  @media (max-width: 1290px) {
    display: block;
  }
`;

const LogoImg = styled.img`
  width: 150px;

  @media (max-width: 1290px) {
    position: absolute;
    left: 34px;
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
  StyledNavButton,
};
