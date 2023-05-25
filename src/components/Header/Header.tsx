import { Container, Row, Wrapper } from "./Header.style";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
        </Row>
        <Row>
          <Button title="Entrar" variant="primary" />
          <Button title="Cadastrar" variant="secondary" />
        </Row>
      </Container>
    </Wrapper>
  );
};
