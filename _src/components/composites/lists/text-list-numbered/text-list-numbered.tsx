import { TextListNumberedType } from "./text-list-numbered.type";
import styles from "./text-list-numbered.module.scss";
import TextListItem from "@/_src/components/ui/lists/text-list-item/text-list-item";

const TextListNumbered = (props: TextListNumberedType) => {
  const {listItems} = props;
  return (
    <ol className={styles.text_list_numbered}>
      {listItems.map((item, index) => (
        <TextListItem key={index} text={item.text} />
      ))}
    </ol>
  )
}

export default TextListNumbered;