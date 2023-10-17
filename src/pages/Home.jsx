import { Navbar, Card } from "../components";
import {
  HeroSectionBg,
  ContentSection,
  Subtitle,
  Title,
  DivContent,
  ImgHero,
  ImgSubtitle,
  ImgBtn,
  Slogan,
} from "../styles/Section.styled";
import {
  MainContent,
  AboutContent,
  MainContentSub,
  CardsContainer,
  MainContentTitle,
  MoreResources,
  SeeAllResourcesDiv,
  SeeMoreBtn,
  SeeAllResourcesText,
} from "../styles/Content.styled";
import { Img } from "../styles/Svg.styled";
import devices from "../assets/devices.svg";
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";
import play from "../assets/play.svg";
import playlist from "../assets/playlist.svg";
import certified from "../assets/certified.svg";
import man from "../assets/man.png";
import { useDataContext } from "../context/contextLanguageProvider";
import folder from "../assets/folder.svg";
import track from "../assets/track.svg";
import playlistCard from "../assets/playlists.svg";

const Home = () => {
  const { data } = useDataContext();

  const homeTitle = data.content?.home?.title ? data.content.home.title : "";
  const homeSubTitle = data.content?.home?.subtitle
    ? data.content.home.subtitle
    : "";
  const homeSlogan = data.content?.home?.slogan ? data.content.home.slogan : "";
  const homeBtnStart = data?.content?.home?.startNow
    ? data.content.home.startNow
    : "";
  const homeBtnWatchVideo = data?.content?.home?.watchVideo
    ? data.content.home.watchVideo
    : "";
  const mainContentSub = data?.content?.home?.mainContentSub
    ? data.content.home.mainContentSub
    : "";
  const moreResources = data?.content?.home?.MoreResources
    ? data.content.home.MoreResources
    : "";
  const mainContentTitle = data?.content?.home?.MainContentTitle
    ? data.content.home.MainContentTitle
    : "";
  const seeAllResourcesText = data?.content?.home?.SeeAllResourcesText
    ? data.content.home.SeeAllResourcesText
    : "";
  const seeMoreBtn = data?.content?.home?.SeeMoreBtn
    ? data.content.home.SeeMoreBtn
    : "";

  const cards = data.items ? data.items : [];

  return (
    <>
      <Navbar />
      <HeroSectionBg>
        <ContentSection>
          <Img
            src={playlist}
            alt="Play icon"
            position="absolute"
            z="1"
            top="35px"
            right="20px"
            width="80px"
          />
          <Img
            src={certified}
            alt="Certified icon"
            position="absolute"
            top="50px"
            left="37%"
            width="80px"
          />
          <Img
            src={playlist}
            alt="Play icon"
            position="absolute"
            z="1"
            top="40px"
            left="20px"
            width="80px"
          />
          <DivContent height="100%">
            <Flex
              direction="column"
              gap="44px"
              maxw="100%"
              height="100%"
              items="flex-start"
              justify="center"
            >
              <Slogan>
                <ImgSubtitle>
                  <img src={devices} alt="Computers Icons" />
                </ImgSubtitle>
                {homeSlogan}
              </Slogan>
              <Title>{homeTitle}</Title>
              <Subtitle>{homeSubTitle}</Subtitle>
              <Flex gap="30px" items="center">
                <Button>{homeBtnStart}</Button>
                <Button>
                  <ImgBtn>
                    <img src={play} alt="play icon" />
                  </ImgBtn>
                  {homeBtnWatchVideo}
                </Button>
              </Flex>
            </Flex>
            <Flex justify="center" maxw="100%" height="100%" items="flex-end">
              <ImgHero src={man} alt="Homem segurando um tablet" />
            </Flex>
          </DivContent>
        </ContentSection>
      </HeroSectionBg>

      <MainContent>
        <AboutContent>
          <MainContentSub>{mainContentSub}</MainContentSub>
          <MoreResources>{moreResources}</MoreResources>
        </AboutContent>

        <MainContentTitle>{mainContentTitle}</MainContentTitle>

        <CardsContainer>
          {cards.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardsContainer>

        <SeeAllResourcesDiv>
          <SeeAllResourcesText>{seeAllResourcesText}</SeeAllResourcesText>
          <SeeMoreBtn>{seeMoreBtn}</SeeMoreBtn>
        </SeeAllResourcesDiv>
      </MainContent>
    </>
  );
};

export default Home;
