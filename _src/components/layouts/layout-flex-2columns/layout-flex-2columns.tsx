interface Props {
  children: [React.ReactElement, React.ReactElement];
  ratio?: "3to7" | "4to6" | "5to5" | string;
}

import React from "react";
import styles from "./layout-flex-2columns.module.scss";

const LayoutFlex2Columns = ({ children, ratio }: Props) => {
  const leftPanel = React.cloneElement(children[0]);
  const rightPanel = React.cloneElement(children[1]);

  const baseClass = "flex_2columns";
  const modifierClass = baseClass + "__" + ratio;
  const leftBlockClass = baseClass + "__left";
  const rightBlockClass = baseClass + "__right";

  return (
    <>
      <div className={`${styles[baseClass]}${ratio ? ` ${styles[modifierClass]}` : ""}`}>
        <div className={styles[leftBlockClass]}>
          {leftPanel}
        </div>
        <div className={styles[rightBlockClass]}>
          {rightPanel}
        </div>
      </div>
    </>
  );
}

export default LayoutFlex2Columns;