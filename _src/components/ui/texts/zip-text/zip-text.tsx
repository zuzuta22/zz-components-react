import { ZipTextType } from "./zip-text.type";
import styles from "./zip-text.module.scss";

const ZipText = (props: ZipTextType) => {
  const {zipCode} = props;
  return (
    <span className={styles.zip_text}>
      〒{zipCode}
    </span>
  )
}

export default ZipText;