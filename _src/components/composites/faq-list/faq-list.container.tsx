import FaqList from "./faq-list";
import { FaqItemsType　} from "./faq-list.type";

const FaqListContainer = (props: FaqItemsType) => {
  const {faqItems} = props;

  return (
    <>
      {faqItems ? (
        <FaqList faqItems={faqItems} />
      ) : null}
    </>
  )
}

export default FaqListContainer;