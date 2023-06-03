import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  MenuRight,
  UserPicture,
} from "./Header.style";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  autenticado: boolean;
}

export const Header: React.FC<HeaderProps> = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate("/signup");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/62766998?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button
                title="Entrar"
                variant="primary"
                onClick={handleClickLogin}
              />
              <Button
                title="Cadastrar"
                variant="secondary"
                onClick={handleClickSignUp}
              />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};
