import { FaqAnswerType } from "../../ui/texts/faq-answer/faq-answer.type";
import { FaqQuestionType } from "../../ui/texts/faq-question/faq-question.type";

export type FaqListType = {
  questionText: FaqQuestionType;
  answerText: FaqAnswerType;
}

export type FaqItemsType = {
  faqItems: FaqListType[];
}