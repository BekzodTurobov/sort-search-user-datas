import { useContext } from "react";
import SearchInput from "./SearchInput";
import List from "./List";
import Footer from "./Footer";
import classes from "./_List.module.scss";
import DataContext from "../context/DataContext";
import { DataProvider } from "../context/DataContext";

const Posts = () => {
  const { error } = useContext(DataContext);
  return (
    <DataProvider>
      <SearchInput />
      {error ? <p className={classes.error}>{error}</p> : <List />}
      {!error && <Footer />}
    </DataProvider>
  );
};

export default Posts;
