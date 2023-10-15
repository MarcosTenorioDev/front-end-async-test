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
import Card from "../components/Card";
import track from "../assets/track.svg"
import playlistCard from "../assets/playlists.svg"
import folder from "../assets/folder.svg"

const Home = () => {
  const cards = [
    {
      img: track,
      title: "Trilha de etapas",
      description:
        "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.",
    },
    {
      img: playlistCard,
      title: "Playlists",
      description:
        "Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline.",
    },
    {
      img: folder,
      title: "Coleções",
      description:
        "Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência.",
    },
  ];
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
                <Button>Começar Agora</Button>
                <Button>
                  <ImgBtn>
                    <img src={play} alt="play icon" />
                  </ImgBtn>
                  Ver Vídeo
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
          <MainContentSub>pensamos em cada detalhe</MainContentSub>
          <MoreResources>Conheça alguns dos nossos recursos ⚡️</MoreResources>
        </AboutContent>

        <MainContentTitle>
          Queremos que o aluno se sinta confortável enquanto aprende
        </MainContentTitle>

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
          <SeeAllResourcesText>
            Veja todos os outros recursos disponíveis para te ajudar
          </SeeAllResourcesText>
          <SeeMoreBtn>Ver mais</SeeMoreBtn>
        </SeeAllResourcesDiv>
      </MainContent>
    </>
  );
};

export default Home;
