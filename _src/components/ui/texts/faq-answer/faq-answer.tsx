import { FaqAnswerType } from "./faq-answer.type";
import styles from "./faq-answer.module.scss";

export const FaqAnswer = (props: FaqAnswerType) => {
  const {text} = props;
  return (
    <dd className={styles.faq_answer}>{text}</dd>
  )
}