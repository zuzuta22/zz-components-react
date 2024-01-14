'use client';

import { useState } from "react";
import { InputTextAreaType } from "./input-textarea.type";

import styles from "./input-textarea.module.scss";
import { InputLabel } from "../..";

export const InputTextArea = (props: InputTextAreaType) => {
  const {id, name, labelText, placeholder, isRequired} = props;
  const [text, setText] = useState<string>("");
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {setIsActive(true); }
  const handleOnBlur = () => {if (!text) { setIsActive(false); }}

  return (
    <div className={styles.input_textarea}>
      {labelText &&
        <InputLabel
          text={labelText}
          isActive={isActive}
          htmlFor={id}
        />
      }
      <textarea name={name}
        id={id}
        className={`${styles.input_textarea__field}${isActive ? ` ${styles.input_textarea__field__active}` : ""}`}
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