import { TextListItemType } from "./text-list-item.type";

const TextListItem = (props: TextListItemType) => {
  const {text} = props;
  return (
    <li>{text}</li>
  )
};

export default TextListItem;