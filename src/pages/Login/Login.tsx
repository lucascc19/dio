import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail não é válido ")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();


const handleClickSignUp = () => {
  navigate("/signup");
};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData: LoginForm) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&password=${formData.password}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header autenticado={false} />
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Input
                name="email"
                type="email"
                error={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                type="password"
                error={errors?.password?.message}
                control={control}
                placeholder="Senha"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <ForgetPassword>Esqueci minha senha</ForgetPassword>
              <CreateAccount onClick={handleClickSignUp}>Criar Conta</CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
