import { FormEvent } from "react";
import "./index.scss";
import Input from "./Input";
import { config } from "./config";

function App() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    console.log(data);
    console.log("generate payload");
  };

  return (
    <form className="form_container" onSubmit={onSubmit}>
      <p className="form_title">Регистрация</p>
      {config.map((item) => (
        <Input key={item.key} {...item} />
      ))}
      <button className="form_button">регистрация</button>
    </form>
  );
}

export default App;
