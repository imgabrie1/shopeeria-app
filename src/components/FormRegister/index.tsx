import { iDataRegister } from "@/contexts/user/interface";
import { UserContext } from "@/contexts/user/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { schema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormRegister = () => {
  const { registerUser, loadingForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataRegister>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<iDataRegister> = async (data) => {
    await registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <div>
          <input
            id="name"
            type="text"
            autoComplete="text"
            required
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            required
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
        </div>
        <div>
          <input
            id="passwordConfirm"
            type="password"
            autoComplete="new-password"
            required
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
      </div>

      <div>
        <button disabled={loadingForm}>
          {loadingForm ? "Loading..." : "Register"}
        </button>
      </div>
    </form>
  );
};
