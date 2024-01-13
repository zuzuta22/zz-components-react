import { DotTextListType } from "./dot-text-list.type";
import styles from "./dot-text-list.module.scss";

const DotTextList = (props: DotTextListType) => {
  const {listItems} = props;
  return (
    <ul className={styles.dot_text_list}>
      {listItems.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ul>
  )
}

export default DotTextList;