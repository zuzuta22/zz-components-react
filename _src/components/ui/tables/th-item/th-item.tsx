import { ThItemType } from "./th-item.type"

export const ThItem = (props: ThItemType) => {
  const {text} = props;
  return (
    <th>{text}</th>
  )
}