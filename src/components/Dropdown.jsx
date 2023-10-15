import { useState } from "react";
import {
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownImage,
  CheckIcon,
  DropdownTitle,
  DropdownItemContainer,
  DropdownItemTitle,
  DropdownItemDescription,
} from "../styles/Dropdown.styled";
import check from "../assets/check.svg";
import ArrowDropdown from "./ArrowDropdown";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.text);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {props.name ? props.name : selectedOption}
        <ArrowDropdown isOpen={isOpen}/>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu position={props.position}>
          {props.title && (
            <DropdownTitle padding={props.padding}>{props.title}</DropdownTitle>
          )}
          <DropdownItemContainer display={props.display}>
            {props.options.map((option, index) => (
              <DropdownItem
                selected={props.check ? selectedOption === option.name : ""}
                key={index}
                onClick={() => selectOption(option.name)}
                paddingitem={props.paddingitem}
              >
                <DropdownImage
                  src={option.img}
                  alt="img"
                  widthimg={props.widthimg}
                />
                <div>
                  <DropdownItemTitle>{option.name}</DropdownItemTitle>
                  {option.description && <DropdownItemDescription>{option.description}</DropdownItemDescription>}
                </div>
                {selectedOption === option.name && (
                  <>{props.check && <CheckIcon src={check} alt="Check" />}</>
                )}
              </DropdownItem>
            ))}
          </DropdownItemContainer>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
