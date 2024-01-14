import { ButtonLinkType } from "./button-link.type";
import styles from "./button-link.module.scss";

export const ButtonLink = (props: ButtonLinkType) => {
  const {text, linkTo, type} = props;
  const baseClass = "button_link";
  const modifierClass = baseClass + "__" + type;
  return (
    <button className={`${styles[baseClass]}${type ? ` ${styles[modifierClass]} `: ""}`} aria-label={text}>
      <a href={linkTo}>{text}</a>
    </button>
  )
}