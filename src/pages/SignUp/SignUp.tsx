import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Column,
  Container,
  SignIn,
  CreateAccount,
  Row,
  SubtitleLogin,
  Text,
  Title,
  TitleLogin,
  Wrapper,
} from "./SignUp.style";
import axios from "axios";

interface SignUpForm {
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

export const SignUp = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData: SignUpForm) => {
    try {
      await axios.post("http://localhost:8001/users", formData);
      navigate("/feed");
    } catch (e) {
      //TODO: HANDLE ERROR
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
            <TitleLogin>Comece agora grátis</TitleLogin>
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
                name="name"
                type="name"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdAccountCircle />}
              />
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
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
              <CreateAccount>
                <Text>Já tenho conta.</Text>
                <SignIn onClick={}>Fazer Login</SignIn>
              </CreateAccount>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
