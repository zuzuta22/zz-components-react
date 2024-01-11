import Link from "next/link";
import { LabelLinkType } from "./label-link.type";
import styles from "./label-link.module.scss";

export const LabelLink = (props: LabelLinkType) => {
  const {text, linkTo, isExternal = false} = props;
  return (
    <div className={styles.lable_link}>
      {!isExternal ? (
        <Link href={`/${linkTo}/`}>{text}</Link>
      ) : (
        <a href={linkTo} target="_blank" rel="noopener, noreferer">{text}</a>
      )}
    </div>
  )
}