import styled from "styled-components";

const HeroSectionBg = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 700px;
  background: linear-gradient(260deg, #41b5d9 2.25%, #5f41d9 100.27%);
  display: flex;
  justify-content: center;
  color: #fff;

  @media (max-width: 980px) {
    height: 100%;
    max-height: none;
    overflow: hidden;
  }
`;
const ContentSection = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 0px 112px;
  position: relative;

  @media (max-width: 1220px) {
    padding: 0px 28px;
  }
  @media (max-width: 980px) {
    height: 100%;
  }
`;
const DivContent = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 980px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0px 0px 0px;
    gap: 50px;
  }
`;

const Title = styled.h1`
  font-size: 4.4rem;
  font-weight: 500;
  letter-spacing: 2.4px;
  max-width: 600px;

  @media (max-width: 980px) {
    font-size: 3.8rem;
    max-width: 700px;
  }
  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;
const Subtitle = styled.p`
  max-width: 400px;
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 980px) {
    max-width: 700px;
  }
  @media (max-width: 475px) {
    font-size: 1.4rem;
  }
`;
const Slogan = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 2.4px;
  opacity: 0.75;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 475px) {
    font-size: 1.2rem;
  }
`;
const ImgSubtitle = styled.i`
  width: 30px;
  display: flex;
`;
const ImgBtn = styled.i`
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgHero = styled.img`
  width: 65rem;

  @media (max-width: 1080px) {
    width: 55rem;
  }
  @media (max-width: 980px) {
    width: 40rem;
  }
  @media (max-width: 475px) {
    width: 40rem;
  }
`;

export {
  HeroSectionBg,
  ContentSection,
  Title,
  Subtitle,
  DivContent,
  ImgHero,
  ImgSubtitle,
  ImgBtn,
  Slogan,
};
