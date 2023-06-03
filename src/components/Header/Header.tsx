import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./Header.style";

interface HeaderProps {
  autenticado: boolean;
}

export const Header: React.FC<HeaderProps> = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/62766998?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" variant="primary" />
              <Button title="Cadastrar" variant="secondary" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
