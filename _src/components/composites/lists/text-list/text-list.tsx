import { TextListType } from "./text-list.type";
import styles from "./text-list.module.scss";
import { TextListItem } from "@/_src/components/ui";


const TextList = (props: TextListType) => {
  const {listItems, listType, styleType} = props;
  const baseClass = "text_list";
  const typeModifierClass = baseClass + "__" + listType;
  const styleModifierClass = baseClass + "__" + styleType;

  const DynamicTag = listType === "numbered" ? "ol" : "ul";

  return (
    <DynamicTag className={`${styles[baseClass]}${listType ? ` ${styles[typeModifierClass]}` : ""}${styleType ? ` ${styles[styleModifierClass]}` : ""}`}>
    {listItems.map((item, index) => (
      <TextListItem key={index} text={item.text} />
    ))} 
  </DynamicTag>
  )
}

export default TextList;