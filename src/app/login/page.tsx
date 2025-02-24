"use client";

import { useAuth } from "@/contexts/authContext";
import { LoginData } from "@/interfaces/login.interface";
import { loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onFormSubmit = (formData: LoginData) => {
    login(formData);
    console.log(formData);
  };

  return (
    <main >
      <div >
        <h2 >
          Login
        </h2>
      </div>

      <div>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div>
            <label
              htmlFor="email"
            >
              E-mail
            </label>
            <div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                {...register("email")}
              />
            </div>
          </div>

          <div>
            <div >
              <label
                htmlFor="password"

              >
                Senha
              </label>
            </div>
            <div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                {...register("password")}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
