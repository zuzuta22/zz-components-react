import Link from "next/link";
import styles from "./nav-link.module.scss";
import { NavLinkType } from "./nav-link.type"

const NavLink = (props: NavLinkType) => {
  const {linkTo, linkName, toggleIsHamburgerOpen} = props;
  return (
    <Link
      className={styles.nav_link}
      href={linkTo === "" ? "/" : "/" + linkTo + "/"}
      onClick={toggleIsHamburgerOpen}
    >
      {linkName}
    </Link>
  )
}

export default NavLink;