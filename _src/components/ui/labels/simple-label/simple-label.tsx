import { SimpleLableType } from "./simple-label.type"
import styles from "./simple-label.module.scss";

export const SimpleLabel = (props: SimpleLableType) => {
  const {text} = props;
  return (
    <div className={styles.simple_label}>{text}</div>
  )
}