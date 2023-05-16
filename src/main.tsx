import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// function App() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [duplicate, setDuplicate] = useState("");
//
//   const isValidPassword = password === duplicate;
//
//   const onChange =
//     (fn: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
//       const value = e.target.value;
//       fn(value);
//     };
//
//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//
//     if (!isValidPassword) {
//       return;
//     }
//     console.log("generate payload");
//   };
//
//   return (
//     <form className="form_container" onSubmit={onSubmit}>
//       <p className="form_title">Регистрация</p>
//       <Input placeholder="Имя" value={name} required onChange={onChange(setName)} />
//       <Input
//         placeholder="Фамилия"
//         value={surname}
//         required
//         onChange={onChange(setSurname)}
//       />
//       <Input
//         value={email}
//         placeholder="E-mail"
//         errorMessage="Неверный email"
//         onChange={onChange(setEmail)}
//       />
//       <Input
//         placeholder="Пароль"
//         value={surname}
//         type="password"
//         required
//         errorMessage="Пароли не совпадают"
//         onChange={onChange(setPassword)}
//       />
//       <Input
//         placeholder="Подтвердите пароль"
//         value={duplicate}
//         type="password"
//         required
//         onChange={onChange(setDuplicate)}
//       />
//       <button className="form_button">регистрация</button>
//     </form>
//   );
// }
