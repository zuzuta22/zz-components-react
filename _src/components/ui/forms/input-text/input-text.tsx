'use client';

import { useState } from "react";
import { InputTextType } from "./input-text.type";

import styles from "./input-text.module.scss";
import { InputLabel } from "../..";

export const InputText = (props: InputTextType) => {
  const {id, name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles.input_text}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <input type="text" name={name}
        id={id}
        className={`${styles.input_text__field}${isActive ? ` ${styles.input_text__field__active}` : ""}`}
        placeholder={placeholder}
        value={text}
        required={!!isRequired}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnBlur()}
      />
    </div>
  )
}