import { TdItemType } from "./td-item.type"

export const TdItem = (props: TdItemType) => {
  const {text} = props;
  return (
    <td>{text}</td>
  )
}