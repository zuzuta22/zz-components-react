import { FaqAnswer } from "../../ui/texts/faq-answer/faq-answer";
import { FaqQuestion } from "../../ui/texts/faq-question/faq-question";
import { FaqItemsType, FaqListType } from "./faq-list.type";

const FaqList = (props: FaqItemsType) => {
  const { faqItems } = props;
  return (
    <>
      {faqItems ? (
        <dl>
          {faqItems.map((item: FaqListType, index: number) => (
            <div key={index}>
              <FaqQuestion text={item.questionText.text} />
              <FaqAnswer text={item.answerText.text} />
            </div>
          ))}
        </dl>
      ) : null}
    </>
  );
}

export default FaqList;