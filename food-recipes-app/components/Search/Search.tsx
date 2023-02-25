"use client";
import styles from "./Search.module.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SearchIcon from "../Icons/SearchIcon";

const Search = () => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchBox}>
        <span className={styles.searchTopText}>search for thasty food</span>
        <div className={styles.inputContainer}>
          <input
            type={"text"}
            placeholder="search"
            className={styles.searchInput}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <SearchIcon width={"30"} height={"30"} />
        </div>
      </label>
    </div>
  );
};

export default Search;
