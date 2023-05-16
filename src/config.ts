import { InputProps } from "./Input";

type Config = (InputProps & {
  validate?: (state: FormDataI) => boolean;
  name: keyof FormDataI;
})[];

export const config: Config = [
  {
    name: "name",
    placeholder: "Имя",
    required: true,
  },
  {
    name: "surname",
    placeholder: "Фамилия",
    required: true,
  },
  {
    name: "email",
    placeholder: "E-mail",
    pattern: "^\\S+@\\S+\\.\\S+$",
    errorMessage: "Неверный email",
  },
  {
    name: "password",
    placeholder: "Пароль",
    required: true,
    type: "password",
    minLength: 6,
    errorMessage: "Пароли не совпадают",
    validate: (state: FormDataI) => !(state.password === state.duplicate),
  },
  {
    name: "duplicate",
    placeholder: "Подтвердите пароль",
    required: true,
    type: "password",
  },
];

export const initialState: FormDataI = {
  name: "",
  password: "",
  duplicate: "",
  email: "",
  surname: "",
};

export type FormDataI = {
  name: string;
  password: string;
  duplicate: string | undefined;
  email: string;
  surname: string;
};
