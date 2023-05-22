import "./index.scss";

import Input from "./Input";
import { config, FormDataI, initialState } from "./config";
import { ChangeEvent, FormEvent, useState } from "react";

const user = {
  email: "admin@gmail.com",
  password: "123456",
};

enum View {
  singUp = "singUp",
  done = "done",
}

const wait = () =>
  new Promise((res) => {
    setTimeout(res, 1000);
  });

function App() {
  const [formValue, setFormValue] = useState<FormDataI>(initialState);
  const [errors, setErrors] = useState<FormDataI>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<View>(View.singUp);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormDataI;
    const value = e.target.value;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isWrong = errors.email !== user.email || errors.password !== user.password;
    setIsLoading(true);
    await wait();
    setIsLoading(false);
    if (isWrong) {
      setErrors({
        email: " ",
        password: " ",
      });
      return;
    }
    setView(View.done);
  };

  return (
    <>
      {view === View.singUp && (
        <form className="form_container" onSubmit={onSubmit}>
          <p className="form_title">Sing in</p>
          <p className="input_error" data-error={!!errors.password}>
            Wrong email or password
          </p>
          {config.map((item) => {
            const { validate, name, ...rest } = item;
            const errorMessage = validate?.(errors);
            return (
              <Input
                key={name}
                autoFocus={!!errorMessage && name === "email"}
                onChange={onChange}
                name={name}
                value={formValue[name]}
                error={!!errorMessage}
                errorMessage={errorMessage}
                {...rest}
              />
            );
          })}
          <button className="form_button">{isLoading ? "Loading" : "Login"}</button>
        </form>
      )}
      {view === View.done && (
        <form className="form_container">
          <h1>Hello</h1>
        </form>
      )}
    </>
  );
}

export default App;
