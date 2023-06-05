import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContent = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `/users?email=${loginData.email}&password=${loginData.password}`
      );

      if (data.length && data[0].id) {
        setUser(data[0]);
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  const handleSignOut = () => {
    setUser({} as IUser);
  }

  return (
    <AuthContent.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContent.Provider>
  );
};
