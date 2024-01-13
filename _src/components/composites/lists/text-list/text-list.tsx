import { TextListType } from "./text-list.type";
import styles from "./text-list.module.scss";
import TextListItem from "@/_src/components/ui/lists/text-list-item/text-list-item";

const TextList = (props: TextListType) => {
  const {listItems, listType, styleType} = props;
  const baseClass = "text_list";
  const typeModifierClass = baseClass + "__" + listType;
  const styleModifierClass = baseClass + "__" + styleType;

  if (listType == "numbered") {
    return (
      <ol className={`${styles[baseClass]}${listType ? ` ${styles[typeModifierClass]}` : ""}${styleType ? ` ${styles[styleModifierClass]}` : ""}`}>
      {listItems.map((item, index) => (
        <TextListItem key={index} text={item.text} />
      ))}
    </ol>
    )
  } else {
    return (
      <ul className={`${styles[baseClass]}${listType ? ` ${styles[typeModifierClass]}` : ""}${styleType ? ` ${styles[styleModifierClass]}` : ""}`}>
        {listItems.map((item, index) => (
          <TextListItem key={index} text={item.text} />
        ))}
      </ul>
    )
  }
}

export default TextList;