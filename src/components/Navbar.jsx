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
  StyledNavButton,
} from "../styles/Navbar.styled";
import Dropdown from "./Dropdown";
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
import { useDataContext } from "../context/contextLanguageProvider";

const Navbar = () => {
  const { data } = useDataContext();
  const links = data.navbar ? data.navbar : [];

  const { signIn, solutions, start } = data.navButtons ?? {};

  const signInText = signIn ?? "";
  const solutionsText = solutions ?? "";
  const startText = start ?? "";

  const optionsLanguage = [
    { name: "pt", img: brazil },
    { name: "en", img: usa },
    { name: "es", img: spain },
  ];
  const { selectedLanguage, changeLanguage } = useDataContext();

  const solutionsItems = [
    {
      name: "Crie uma Escola Online",
      description: "Lorem ipsum dolor sit amet",
      img: ead,
    },
    {
      name: "Comunidade e rede social",
      description: "Lorem ipsum dolor sit amet",
      img: social,
    },
    {
      name: "Gamificação",
      description: "Lorem ipsum dolor sit amet",
      img: gamification,
    },
    {
      name: "Aplicativo mobile",
      description: "Lorem ipsum dolor sit amet",
      img: mobile,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <>
      <NavBg>
        <NavBarContent>
          <LogoImg src={logoSvg} alt="Logo" />
          <NavbarWrapper open={isMobileMenuOpen}>
            <NavLinkWrapper>
              <Dropdown
                options={solutionsItems}
                title="SOLUÇÕES PRINCIPAIS"
                padding="30px 30px"
                paddingitem="0px 25px 40px"
                widthimg="35px"
                name={solutionsText}
                check={false}
                display="grid"
                position="relative"
              />
              {links.map((link) => (
                <StyledNavLink key={link.page} to={link.href}>
                  {link.page}
                </StyledNavLink>
              ))}
            </NavLinkWrapper>

            <NavButtonWrapper>
              <StyledNavLink>
                <StyledUserIcon src={userIcon} alt="User Icon" />
                {signInText}
              </StyledNavLink>
              <StyledNavButton>{startText}</StyledNavButton>

              <Dropdown
                options={optionsLanguage}
                name={selectedLanguage}
                check={true}
                onItemClick={changeLanguage}
              />
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
