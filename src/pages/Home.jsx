import { Navbar } from "../components";
import {
  HeroSectionBg,
  ContentSection,
  Subtitle,
  Title,
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

        <ContentSection>
          <Flex height="100%">
            <Flex
              direction="column"
              gap="44px"
              maxw="100%"
              height="100%"
              items="flex-start"
              justify="center"
            >
              <Flex items="center" gap="15px">
                <Img src={devices} width="30px" />
                <Subtitle size="1.6rem" weight="600" spacing="2.4px" opacity="0.75">
                  PLATAFORMA ALL IN ONE
                </Subtitle>
              </Flex>
              <Title size="4.4rem" weight="500" spacing="2.4px" maxw="600px">Sua escola online poderosa e lucrativa</Title>
              <Subtitle maxw="650px" size="1.6rem" weight="400" opacity="0.9">
                Tenha sua própria escola online 100% white label com rede
                social, gamificação, clube de assinaturas, ecommerce e sistema
                EAD completo.
              </Subtitle>
              <Flex gap="30px">
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
                <Button padding="15px" fontsize="1.6rem">
                  <Img
                    src={play}
                    alt="play icon"
                    width="28px"
                    margin="0px 10px 0px 0px"
                  />
                  Ver Vídeo
                </Button>
              </Flex>
            </Flex>
            <Flex justify="flex-end" maxw="100%" height="100%" items="flex-end">
              <Img src={man} width="100%" />
            </Flex>
          </Flex>
        </ContentSection>
      </HeroSectionBg>
    </>
  );
};

export default Home;
