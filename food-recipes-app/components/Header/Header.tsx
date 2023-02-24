"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("About");
  const handleClick = (link: string) => {
    setActive(link);
  };

  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navLinkContainer}>
        <Link
          onClick={() => handleClick("About")}
          className={active === "About" ? styles.navItemActive : styles.navItem}
          href="/"
        >
          About
        </Link>
        <Link
          onClick={() => handleClick("Recipes")}
          className={
            active === "Recipes" ? styles.navItemActive : styles.navItem
          }
          href="/recipes"
        >
          Recipes
        </Link>
        <Link
          onClick={() => handleClick("Addfoodrecipe")}
          className={
            active === "Addfoodrecipe" ? styles.navItemActive : styles.navItem
          }
          href="/addfoodrecipe"
        >
          Add new recipe
        </Link>
      </nav>
    </div>
  );
};

export default Header;
