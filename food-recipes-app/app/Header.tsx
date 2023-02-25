import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navLinkContainer}>
        <Link className={styles.navItem} href="/">
          About
        </Link>
        <Link className={styles.navItem} href="/recipes">
          Recipes
        </Link>
        <Link className={styles.navItem} href="/addfoodrecipe">
          Add new recipe
        </Link>
      </nav>
    </div>
  );
};

export default Header;
