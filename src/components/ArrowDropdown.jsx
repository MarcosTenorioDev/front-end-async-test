import { StyledArrowDropdown } from "../styles/ArrowDropdown.styled";
import arrow from "../assets/arrow.svg";

const ArrowDropdown = ({ isOpen }) => {

  return (
    <StyledArrowDropdown
      src={arrow}
      alt="arrow"
      isOpen={ isOpen }
    />
  );
}

export default ArrowDropdown;
