import { TextListItemType } from "./text-list-item.type";

export const TextListItem = (props: TextListItemType) => {
  const {text} = props;
  return (
    <li>{text}</li>
  )
};