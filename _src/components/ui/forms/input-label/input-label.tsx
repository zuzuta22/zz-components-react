'use client';

import { InputLabelType } from "./input-label.type"
import styles from "./input-label.module.scss";
import { useEffect, useState } from "react";

export const InputLabel = (props: InputLabelType) => {
  const {text, htmlFor, isActive} = props;
  const [isInputActive, setIsInputActive] = useState(isActive)

  useEffect(() => {
    setIsInputActive(isActive);
  }, [isActive]);

  return (
      <label htmlFor={htmlFor}
        className={`${styles.input_label}${isInputActive ? ` ${styles.input_label__active}`: ""}`}
      >
        {text}
      </label>
  )
}