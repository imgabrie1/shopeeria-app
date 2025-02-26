import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail obrigatório").required("E-mail inválido"),
  password: yup
  .string()
  .required("Senha obrigatória")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
  )
  ,
  confirmPassword: yup
  .string()
  .required("confirme sua senha")
  .oneOf([yup.ref("password")], "Senhas devem ser iguais")
  ,
});
