'use client';

import { useState } from "react";
import { InputTelType } from "./input-tel.type";

import styles from "./input-tel.module.scss";
import { InputLabel } from "../..";

export const InputTel = (props: InputTelType) => {
  const {id = "tel", name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles.input_tel}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="tel" name={name}
        id={id}
        className={`${styles.input_tel__field}${isActive ? ` ${styles.input_tel__field__active}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
        autoComplete={id}
        pattern="^[0-9a-zA-Z\-]+$"
      />
    </div>
  )
}