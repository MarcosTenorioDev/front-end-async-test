import {
  LogoImg,
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
  NavBg,
  StyledUserIcon,
  StyledHamburguerIcon,
  NavBarContent,
  NavButtonWrapper,
} from "../styles/Navbar.styled";
import Dropdown from "./Dropdown";
import { Button } from "../styles/Button.style";
import logoSvg from "../assets/logo.svg";
import Hamburguer from "hamburger-react";
import userIcon from "../assets/userProfile.svg";
import brazil from "../assets/brazil.svg";
import usa from "../assets/usa.svg";
import spain from "../assets/spain.svg";
import ead from "../assets/ead.svg";
import gamification from "../assets/gamification.svg";
import mobile from "../assets/mobile.svg";
import social from "../assets/social.svg";
import { useState } from "react";

const Navbar = () => {
  const link = [
    {
      page: "Preços",
      href: "/",
    },
    {
      page: "Carreiras",
      href: "/",
    },
    {
      page: "Contato",
      href: "/",
    },
  ];

  const optionsLanguage = [
    { name: "PT", img: brazil },
    { name: "EN", img: usa },
    { name: "ES", img: spain },
  ];

  const solutions = [
    { name: "Crie uma Escola Online", description: "Lorem ipsum dolor sit amet", img: ead },
    { name: "Gamificação", description: "Lorem ipsum dolor sit amet", img: gamification },
    { name: "Comunidade e rede social", description: "Lorem ipsum dolor sit amet", img: mobile },
    { name: "Aplicativo mobile", description: "Lorem ipsum dolor sit amet", img: social },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    console.log(isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <NavBg>
        <NavBarContent>
          <LogoImg src={logoSvg} alt="Logo" />
          <NavbarWrapper open={isMobileMenuOpen}>
            <NavLinkWrapper >
              <Dropdown
                options={solutions}
                title="Soluções principais"
                padding="20px 15px"
                widthimg="50px"
                name="Soluções"
                check={false}
                display="grid"
                position="relative"
              />
              {link.map((link) => (
                <StyledNavLink key={link.page} to={link.href}>
                  {link.page}
                </StyledNavLink>
              ))}
            </NavLinkWrapper>

            <NavButtonWrapper>
              <Button>
                <StyledUserIcon src={userIcon} alt="User Icon" />
                Entrar
              </Button>

              <Button
                border="1px solid rgba(255, 255, 255, 0.5)"
                padding="12px 24px"
                borderradius="80px"
                margin="0px 40px"
                whitespace="nowrap"
              >
                Começar agora
              </Button>
              <Dropdown options={optionsLanguage} text="PT" check={true}/>
            </NavButtonWrapper>
          </NavbarWrapper>

          <StyledHamburguerIcon onClick={toggleMobileMenu}>
            <Hamburguer color="#FFF" rounded={true} />
          </StyledHamburguerIcon>
        </NavBarContent>
      </NavBg>
    </>
  );
};

export default Navbar;
