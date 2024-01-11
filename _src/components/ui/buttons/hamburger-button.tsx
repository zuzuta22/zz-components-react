import React from "react";
import styles from "./hamburger-button.module.scss";
import { HamburgeButtonType } from "./hamburger-button.type";

export const HamburgerButton = (props: HamburgeButtonType) => {
  const {isHamburgerOpen, toggleIsHamburgerOpen} = props;

  // debug code
  console.log("Render: HamburgerButton");

  return (
    <>
      <button
        type="button"
        name="Hamburger Button"
        className={styles.hamburger}
        aria-expanded={isHamburgerOpen}
        aria-label="Open Menu"
        aria-controls="navigation"
        onClick={toggleIsHamburgerOpen}>
          <span className={styles.hamburger_line__top}></span>
          <span className={styles.hamburger_line__middle}></span>
          <span className={styles.hamburger_line__bottom}></span>
        </button>
    </>
  )
}