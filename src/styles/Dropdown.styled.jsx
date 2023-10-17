import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: none;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  transition: transform 0.2s;
  gap: 10px;

  @media (max-width: 1290px) {
    padding: 20px 0px;
  }

  &:hover {
    transform: translateY(4px);
  }
`;

const DropdownTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2.1px;
  color: var(--brand-colors-purple-pure);
  white-space: nowrap;
  padding: ${(prop) => (prop.padding ? prop.padding : "0")};
`;

const DropdownMenu = styled.ul`
  position: absolute;
  list-style: none;
  background-color: #fff;
  border-radius: 8px;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

const DropdownItemContainer = styled.div`
  display: ${(prop) => (prop.display ? prop.display : "block")};
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CheckIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 20px;
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  padding: ${(prop) => (prop.paddingitem ? prop.paddingitem : "15px")};
  background: ${(props) =>
    props.selected
      ? "linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0.00) 100%)"
      : "transparent"};
`;

const DropdownImage = styled.img`
  width: ${(prop) => (prop.widthimg ? prop.widthimg : "20px")};
  margin-right: 10px;
`;

const DropdownItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 440px) {
    white-space: break-spaces;
  }
`;

const DropdownItemDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--neutral-colors-200);
  white-space: nowrap;
`;

export {
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownWrapper,
  DropdownImage,
  CheckIcon,
  DropdownTitle,
  DropdownItemContainer,
  DropdownItemTitle,
  DropdownItemDescription,
};
