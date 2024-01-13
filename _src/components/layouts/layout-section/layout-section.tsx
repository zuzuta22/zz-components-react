import { ReactNode } from "react"
import styles from "./layout-section.module.scss";

type LayoutSectionType = {
  children: ReactNode;
}

const LayoutSection = (props: LayoutSectionType) => {
  const {children} = props;
  return (
    <section className={styles.sec}>
      {children}
    </section>
  )
}

export default LayoutSection;