import { Navbar } from "../components";
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
import { Img } from "../styles/Svg.style";
import devices from "../assets/devices.svg";
import { Flex } from "../styles/Flex.style";
import { Button } from "../styles/Button.style";
import play from "../assets/play.svg";
import playlist from "../assets/playlist.svg";
import certified from "../assets/certified.svg";
import man from "../assets/man.png";

const Home = () => {
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
                PLATAFORMA ALL IN ONE
              </Slogan>
              <Title>Sua escola online poderosa e lucrativa</Title>
              <Subtitle>
                Tenha sua própria escola online 100% white label com rede
                social, gamificação, clube de assinaturas, ecommerce e sistema
                EAD completo.
              </Subtitle>
              <Flex gap="30px" items="center">
                <Button
                  backgroundcolor="#00E1E7"
                  borderradius="80px"
                  padding="15px"
                  color="black"
                  fontsize="1.6rem"
                  fontweight="200"
                >
                  Começar Agora
                </Button>
                <Button fontsize="1.6rem">
                  <ImgBtn>
                    <img src={play} alt="play icon" />
                  </ImgBtn>
                  Ver Vídeo
                </Button>
              </Flex>
            </Flex>
            <Flex justify="center" maxw="100%" height="100%" items="flex-end">
              <ImgHero src={man} />
            </Flex>
          </DivContent>
        </ContentSection>
      </HeroSectionBg>

      <ContentSection></ContentSection>
    </>
  );
};

export default Home;
