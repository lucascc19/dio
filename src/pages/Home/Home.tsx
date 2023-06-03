import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/banner.png";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  TitleHighlight,
  TextContent,
  Section,
} from "./Home.style";

export const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Section>
          <div>
            <Title>
              <TitleHighlight>
                Implemente <br />
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do
              mundo e encare seu novo desafio profissional, evoluindo em
              comunidade com os melhores experts.
            </TextContent>
            <Button
              title="Começar agora"
              variant="secondary"
              onClick={handleClickSignIn}
            />
          </div>
        </Section>
        <Section>
          <div>
            <img src={bannerImage} alt="Imagem principal do site." />
          </div>
        </Section>
      </Container>
    </>
  );
};
