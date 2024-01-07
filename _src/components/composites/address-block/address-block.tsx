import AddressText from "../../ui/texts/address-text/address-text";
import ZipText from "../../ui/texts/zip-text/zip-text";
import { AddressBlockType } from "./address-block.type";
import styles from "./address-block.module.scss";

const AddressBlock = (props: AddressBlockType) => {
  const {zipCode, address1, address2} = props;
  return (
    <p className={styles.address_block}>
      <ZipText zipCode={zipCode} />
      <AddressText address1={address1} address2={address2} />
    </p>
  )
}

export default AddressBlock;