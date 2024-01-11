import FaqList from "./faq-list";
import { FaqListType } from "./faq-list.type";

const FaqListContainer = (props: FaqListType[]) => {
  const faqItems = props;
  return (
    <>
      {faqItems ? (
        <FaqList faqItems={faqItems} />
      ) : null}
    </>
  )
}

export default FaqListContainer;