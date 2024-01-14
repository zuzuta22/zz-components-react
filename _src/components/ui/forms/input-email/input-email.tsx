'use client';

import { useState } from "react";
import { InputEmailType } from "./input-email.type";

import styles from "./input-email.module.scss";
import { InputLabel } from "../..";

export const InputEmail = (props: InputEmailType) => {
  const {id = "email", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles.input_email}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="email" name={name}
        id={id}
        className={`${styles.input_email__field}${isActive ? ` ${styles.input_email__field__active}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
      />
    </div>
  )
}