
import { HamburgerNavigationItemType, HamburgerNavigationItemsType } from './hamburger-items.type';
import styles from "./hamburger-items.module.scss";
import { NavLink } from '@/_src/components/ui';

const HamburgerItems = (props: HamburgerNavigationItemsType) => {
  const {linkItems, toggleIsHamburgerOpen} = props;
  return (
    <>
      {linkItems ? (
        <ul className={styles.hamburger_items}>
          {linkItems
            .filter(item => item.isDisplayed ?? true)
            .sort((a, b) => a.order - b.order) // sort by the order value
            .map((item: HamburgerNavigationItemType, index: number) => (
              <li key={index}>
                <NavLink
                  linkTo={item.url}
                  linkName={item.name}
                  toggleIsHamburgerOpen={toggleIsHamburgerOpen}
                />
              </li>
            ))}
        </ul>
      ) : null}
    </>
  )
}

export default HamburgerItems;