import { FaqQuestionType } from "./faq-question.type";
import styles from "./faq-question.module.scss";

export const FaqQuestion = (props: FaqQuestionType) => {
  const {text} = props;
  return (
    <dt className={styles.faq_question}>{text}</dt>
  )
}