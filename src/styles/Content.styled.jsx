import styled from "styled-components";
import arrowRight from "../assets/arrowRight.svg";
import rocket from "../assets/rocket.svg";

const MainContent = styled.main`
  width: 100%;
  max-width: 1440px;
  padding: 107px 112px;
  margin-inline: auto;

  @media (max-width: 1220px) {
    padding: 107px 28px;
  }
  @media (max-width: 768px) {
    padding: 50px 28px;
  }
`;
const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 16px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const MainContentSub = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: var(--brand-colors-purple-dark);
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 40px;
    opacity: 0.5;
    background-color: var(--brand-colors-purple-dark);
  }
  @media (max-width: 768px) {
    width: 100%;
    white-space: nowrap;
    &::before {
      content: "";
      display: inline-block;
      height: 1px;
      width: 100%;
      opacity: 0.5;
      background-color: var(--brand-colors-purple-dark);
    }
    &::after {
      content: "";
      display: inline-block;
      height: 1px;
      width: 100%;
      opacity: 0.5;
      background-color: var(--brand-colors-purple-dark);
    }
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;

    &::before {
      display: none;
    }
    &::after {
      display: none;
    }
  }
`;
const MoreResources = styled.h4`
  color: var(--neutral-colors-200);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const MainContentTitle = styled.h2`
  color: var(--neutral-colors-100);
  font-size: 3.2rem;
  font-weight: 500;
  letter-spacing: 0.16px;

  @media (max-width: 980px) {
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 2.6rem;
  }
`;
const CardsContainer = styled.div`
  padding: 67px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: var(--neutral-colors-900);
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 47px 0px;
  }
`;

const SeeAllResourcesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 0px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0px 0px 0px;
    gap: 20px;
  }
`;

const SeeAllResourcesText = styled.h4`
  color: var(--neutral-colors-200);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 32px;

  &::before {
    content: url(${rocket});
    width: 32px;
  }
`;

const SeeMoreBtn = styled.button`
  background: none;
  border: none;
  color: var(--brand-colors-purple-pure);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 32px;
  cursor: pointer;
  transition: 0.2s;

  &::after {
    content: url(${arrowRight});
    width: 24px;
  }

  &:hover{
    transform: translateX(4px);
  }
`;

export {
  MainContent,
  AboutContent,
  MainContentSub,
  CardsContainer,
  MainContentTitle,
  MoreResources,
  SeeAllResourcesDiv,
  SeeMoreBtn,
  SeeAllResourcesText,
};
