import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
// import { api } from "../../services/api";

// import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Row,
  Wrapper,
  CreateAccount,
  ForgetPassword,
} from "./Login.style";

export const Login = () => {
  const navigate = useNavigate();
  const handleNextRoute = () => {
    navigate("/feed");
  };

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   reValidateMode: "onChange",
  //   mode: "onChange",
  // });

  // const onSubmit = async (formData) => {
  //   try {
  //     const { data } = await api.get(
  //       `/users?email=${formData.email}&senha=${formData.senha}`
  //     );

  //     if (data.length && data[0].id) {
  //       navigate("/feed");
  //       return;
  //     }

  //     alert("Usuário ou senha inválido");
  //   } catch (e) {
  //     //TODO: HOUVE UM ERRO
  //   }
  // };

  // console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input
                name="email"
                type={""}
                control={""}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              {/* {errors.email && <span>E-mail é obrigatório</span>} */}
              <Input
                name="senha"
                type="password"
                control={""}
                placeholder="Senha"
                leftIcon={<MdLock />}
              />
              {/* {errors.senha && <span>Senha é obrigatório</span>} */}
              <Button
                title="Entrar"
                variant="secondary"
                type="submit"
                onClick={handleNextRoute}
              />
            </form>
            <Row>
              <ForgetPassword>Esqueci minha senha</ForgetPassword>
              <CreateAccount>Criar Conta</CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
