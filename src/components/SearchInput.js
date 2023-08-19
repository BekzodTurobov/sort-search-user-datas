import React, { useContext } from "react";
import classes from "./_SearchInput.module.scss";
import { GoSearch } from "react-icons/go";
import SearchResult from "./SearchResult";
import DataContext from "../context/DataContext";

function SearchInput() {
  const { searchInput, showData, inputChangeHandler, showFilteredDataHandler } =
    useContext(DataContext);

  return (
    <div className={classes.searchContainer}>
      <input
        onChange={inputChangeHandler}
        type="text"
        placeholder="search"
        value={searchInput}
      />
      <GoSearch
        onClick={() => {
          showFilteredDataHandler();
        }}
        className={classes["btn--search"]}
      ></GoSearch>
      {showData && <SearchResult />}
    </div>
  );
}

export default SearchInput;
