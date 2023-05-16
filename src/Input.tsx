import { JSX } from "react";

export type InputProps = {
  errorMessage?: string;
  error?: boolean;
} & JSX.IntrinsicElements["input"];

const Input = (props: InputProps) => {
  const { placeholder, errorMessage, error = false, type, ...rest } = props;

  return (
    <label className="input_container">
      <input
        className="input"
        autoComplete="off"
        data-error={error}
        type={type || "text"}
        {...rest}
      />
      <p className="input_error" data-error={error}>
        {errorMessage}
      </p>
      <p className="input_placeholder">{placeholder}</p>
    </label>
  );
};

export default Input;
