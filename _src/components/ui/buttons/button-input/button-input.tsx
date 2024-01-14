import styles from "./button-input.module.scss"
import { ButtonInputType } from "./button-input.type"

export const ButtonInput = (props: ButtonInputType) => {
  const {id, text, type} = props;
  const baseClass = "button_input";
  const modifierClass = baseClass + "__" + type;

  return (
    <input 
      id={id}
      type="submit"
      className={`${styles[baseClass]}${type ? ` ${styles[modifierClass]} `: ""}`}
      aria-label={text}
      value={text}  
    />
  )
}