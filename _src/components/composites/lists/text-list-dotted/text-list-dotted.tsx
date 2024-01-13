import { TextListDottedType } from "./text-list-dotted.type";
import styles from "./text-list-dotted.module.scss";
import TextListItem from "@/_src/components/ui/lists/text-list-item/text-list-item";

const TextListDotted = (props: TextListDottedType) => {
  const {listItems} = props;
  return (
    <ul className={styles.text_list_dotted}>
      {listItems.map((item, index) => (
        <TextListItem key={index} text={item.text} />
      ))}
    </ul>
  )
}

export default TextListDotted;