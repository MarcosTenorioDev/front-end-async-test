import styled from "styled-components";

export const Button = styled.button`

  display: flex;
  align-items: center;
  background: none;
  border: none;
  background-color: var(--brand-colors-teal-pure);
  border-radius: 80px;
  color: black;
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
  padding: 18px 32px;

  &:nth-child(2) {
    background-color: none;
    background: none;
    color: #FFF;
    gap: 8px;
    }

  &:hover {
    padding: 18px 32px;
    font-size: 1.8rem;
  }
`;
