import { CopyrightType } from "./copyright.type";

export const Copyright = (props: CopyrightType) => {
  const {text} = props;
  return (
    <small>{text}</small>
  )
}