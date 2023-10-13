import { Navbar } from "../components";
import { HeroSectionBg, ContentSection } from "../styles/Section.styled";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSectionBg>
        <ContentSection>
          <h1>Hello World</h1>
        </ContentSection>
      </HeroSectionBg>
    </>
  );
};

export default Home;
