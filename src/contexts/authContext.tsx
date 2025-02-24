"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { LoginData } from "@/interfaces/login.interface";
import api from "@/services/api";

interface ProviderProps {
  children: ReactNode;
}

interface User {
  name: string | undefined;
}

interface AuthProviderData {
  setToken: (value: string) => void;
  login: (userDataLogin: LoginData) => void;
  token: string | undefined;
  user: User | undefined;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<User | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingForm, setLoadingForm] = useState<boolean>(false);
  const router = useRouter();

  const login = async (userDataLogin: LoginData): Promise<void> => {
    setLoadingForm(true);

    try {
      const response = await api.post<AuthProviderData>(
        "/login",
        userDataLogin
      );

      setCookie("shopeeria.token", response.data.token, { maxAge: 60 * 30 });

      if(response.data.user!){
        setCookie("shopeeria.user", response.data.user?.name, { maxAge: 60 * 30 });
      }else {
        setCookie("shopeeria.user", "Usuário", { maxAge: 60 * 30 });
      }


      setToken(response.data.token);


      if(response.data.user!){
        setUser({ name: response.data.user?.name });
      }else{
        setUser({ name: "Usuário" });
      }

      router.push("/profile");
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingForm(false);
    }
  };

  return (
    <AuthContext.Provider value={{ login, token, setToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
