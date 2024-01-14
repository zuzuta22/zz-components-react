'use client';

import { useState } from "react";
import { InputRadioType } from "./input-radio.type";

import styles from "./input-radio.module.scss";

export const InputRadio = (props: InputRadioType) => {
  const {id, name, value, text} = props;
  const [isActive, setIsActive] = useState(false);

  const handleToggleRadio = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.input_radio}>
      <input type="radio" name={name}
        id={id}
        className={styles.input_radio__field}
        value={value}
        checked={isActive}
        onChange={() => {}}
      />
      <label
        htmlFor={id}
        className={styles.input_radio__label}
        onClick={handleToggleRadio}
      >
        {text}
      </label>
    </div>
  )
}