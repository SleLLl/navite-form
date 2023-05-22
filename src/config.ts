import { InputProps } from "./Input";

type Config = (InputProps & {
  validate?: (error: FormDataI) => string;
  name: keyof FormDataI;
})[];

export const config: Config = [
  {
    name: "email",
    placeholder: "E-mail",
    type: "email",
    required: true,
    validate: (error: FormDataI) => (error.email ? error.email : ""),
  },
  {
    name: "password",
    placeholder: "Пароль",
    required: true,
    type: "password",
    minLength: 6,
    validate: (error: FormDataI) => (error.password ? error.password : ""),
  },
];

export const initialState: FormDataI = {
  password: "",
  email: "",
};

export type FormDataI = {
  password: string;
  email: string;
};
