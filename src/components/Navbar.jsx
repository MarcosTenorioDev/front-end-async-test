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
import { useState } from "react";
import { useDataContext } from "../context/contextLanguageProvider";

const Navbar = () => {
  const { data } = useDataContext();
  const links = data.navbar ? data.navbar : [];

  const { signIn, solutions, start } = data.navButtons ?? {};

  const solutionTitle = data?.solutionTitle ?? "";
  const signInText = signIn ?? "";
  const solutionsText = solutions ?? "";
  const startText = start ?? "";

  const optionsLanguage = [
    { name: "pt", img: brazil },
    { name: "en", img: usa },
    { name: "es", img: spain },
  ];
  const { selectedLanguage, changeLanguage } = useDataContext();

  let solutionsItems = data?.solutionsItems ? data?.solutionsItems : [];
  solutionsItems = solutionsItems.map((item) => ({
    name: item.name,
    description: item.description,
    img: item.img,
  }));

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
                title={solutionTitle}
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
