import { AddressBlockType } from "./address-block.type";
import styles from "./address-block.module.scss";
import { AddressText, ZipText } from "../../ui";

const AddressBlock = (props: AddressBlockType) => {
  const {zipCode, address1, address2} = props;
  return (
    <p className={styles.address_block}>
      <ZipText zipCode={zipCode} />
      <AddressText address1={address1} address2={address2 ? address2 : undefined} />
    </p>
  )
}

export default AddressBlock;