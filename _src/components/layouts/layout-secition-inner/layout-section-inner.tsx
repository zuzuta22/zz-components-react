import { ReactNode } from "react"
import styles from "./layout-section-inner.module.scss";

type LayoutSectionType = {
  children: ReactNode;
}

const LayoutSectionInner = (props: LayoutSectionType) => {
  const {children} = props;
  return (
    <div className={styles.sec_inner}>
      {children}
    </div>
  )
}

export default LayoutSectionInner;