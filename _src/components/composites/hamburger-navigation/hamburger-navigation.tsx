"use client";

import useToggleHamburger from "@/_src/hooks/use-toggle-hamburger.hooks"
import HamburgerItems from "./components/hamburger-items/hamburger-items";
import { HamburgerNavigationType } from "./hamburger-navigation.type";
import styles from "./hamburger-navigation.module.scss";
import { HamburgerButton } from "../../ui";

const HamburgerNavigation = (props: HamburgerNavigationType) => {
  const {linkItems} = props;
  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleHamburger(false);

  // debug code
  // console.log("render Hamburger Navigation");
  return (
    <div className={styles.hamburger}>
      <HamburgerButton
        isHamburgerOpen={isHamburgerOpen}
        toggleIsHamburgerOpen={toggleIsHamburgerOpen}
      />
      <div className={styles.hamburger__navigation + (isHamburgerOpen ? ` ${styles.hamburger__navigation__open}` : ` ${styles.hamburger__navigation__close}`)}>
        <HamburgerItems
          linkItems={linkItems}
          toggleIsHamburgerOpen={toggleIsHamburgerOpen}
        />
      </div>
    </div>
  )
}

export default HamburgerNavigation;