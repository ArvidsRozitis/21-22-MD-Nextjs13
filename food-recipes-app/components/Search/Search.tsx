"use client";
import styles from "./Search.module.scss";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.searchContainer}>
      <span>{input}</span>
      <label className={styles.searchLabel}>
        search for thasty food
        <div className={styles.inputContainer}>
          <input
            type={"text"}
            placeholder="search"
            className={styles.searchInput}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
      </label>
    </div>
  );
};

export default Search;
