import { TextListAsteriskedType } from "./text-list-asterisked.type";
import styles from "./text-list-asterisked.module.scss";
import TextListItem from "@/_src/components/ui/lists/text-list-item/text-list-item";

const TextListAsterisked = (props: TextListAsteriskedType) => {
  const {listItems} = props;
  return (
    <ul className={styles.text_list_asterisked}>
      {listItems.map((item, index) => (
        <TextListItem key={index} text={item.text} />
      ))}
    </ul>
  )
}

export default TextListAsterisked;