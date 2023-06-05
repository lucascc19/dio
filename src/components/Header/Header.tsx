import { useContext } from "react";
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
import { AuthContent } from "../../context/auth";

export const Header = () => {
  const navigate = useNavigate();

  const { user, handleSignOut } = useContext(AuthContent);

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
          {user.id && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
            </>
          )}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/62766998?v=4" />
              <a href="/" onClick={handleSignOut}>Sair</a>
            </>
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
