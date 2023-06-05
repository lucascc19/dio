import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./Feed.style";

export const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Lucas Rodrigues"
            image="https://avatars.githubusercontent.com/u/62766998?v=4"
            percentual={25}
          />
          <UserInfo
            nome="Lucas Rodrigues"
            image="https://avatars.githubusercontent.com/u/62766998?v=4"
            percentual={65}
          />
          <UserInfo
            nome="Lucas Rodrigues"
            image="https://avatars.githubusercontent.com/u/62766998?v=4"
            percentual={45}
          />
          <UserInfo
            nome="Lucas Rodrigues"
            image="https://avatars.githubusercontent.com/u/62766998?v=4"
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};
