import { AddressTextType } from "./address-text.type";
import styles from "./address-text.module.scss";

export const AddressText = (props: AddressTextType) => {
  const {address1, address2} = props;
  return (
    <>
      <span className={styles.address_text}>{address1}</span>
      {address2 ? (<span className={styles.address_text}>{address2}</span>) : null}
    </>
  )
}