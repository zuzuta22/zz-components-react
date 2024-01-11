import { getFormatedDateString } from "@/_src/utils/getFormatedDateString";
import { DateTextType } from "./date-text.type";

export const DateText = (props: DateTextType) => {
  const {date, format} = props;
  const dateString: string = getFormatedDateString(date, format);

  return (
    <span>{dateString}</span>
  )
}