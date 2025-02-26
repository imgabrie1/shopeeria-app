import { AxiosError } from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import {
  iContextUserProps,
  iDataRegister,
  iProducts,
  iUserContext,
} from "./interface";
import { deleteCookie } from "cookies-next";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iContextUserProps) => {
  const [products, setProducts] = useState<iProducts[] | null>(null);
  const [filteredWord, setFilteredWord] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<iProducts[] | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const router = useRouter();

  const getProducts = async () => {
    setLoading(true);

    try {
      const { data } = await api.get<iProducts[]>("/product");

      setProducts(data);
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);

      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const registerUser = async (data: iDataRegister): Promise<void> => {
    setLoadingForm(true);
    try {
      await api.post("/users", data);

      toast.success("Cadastro efetuado com sucesso");
      console.log(data);

      router.push("/");
    } catch (err) {
      const currentError = err as AxiosError;

      const message =
        (currentError.response?.data as string) || "Algo deu errado!";

      toast.error(message);
    } finally {
      setLoadingForm(false);
    }
  };

  const resetToAllProducts = () => {
    setFilteredWord(null);

    setFilteredProducts(null);
  };

  const logout = () => {
    deleteCookie("shopeeria.token");
    deleteCookie("shopeeria.user");

    setProducts(null);

    setFilteredProducts(null);

    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        products,
        filteredWord,
        filteredProducts,
        resetToAllProducts,
        setFilteredWord,
        setFilteredProducts,
        loading,
        registerUser,
        logout,
        loadingForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
