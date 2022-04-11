import { useState } from "react";
import styles from "./SearchBar.module.css";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { products } from "../../product";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    setIsOpen(true);
  };

  // const closeSearchBox = () => {
  //   setTimeout(() => {
  //     setIsOpen(false);
  //   }, 200);
  // };
  return (
    <div>
      <div className={styles.search}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputBase
            placeholder="Search for products, brands and more"
            className={`${styles.inputRoot} ${styles.inputInput}`}
            inputProps={{ "aria-label": "search" }}
            value={searchText}
            onChange={handleSearchInput}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
