import styled from "styled-components";

const rotateAnimation = (props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)');

const StyledArrowDropdown = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${rotateAnimation};
`;

export { StyledArrowDropdown };
