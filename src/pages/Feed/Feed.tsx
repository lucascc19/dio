import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Column, Title } from "./Feed.style";

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
      </Container>
    </>
  );
};
