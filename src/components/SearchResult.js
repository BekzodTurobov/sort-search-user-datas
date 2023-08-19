import React, { useContext } from "react";
import classes from "./_SearchResult.module.scss";
import DataContext from "../context/DataContext";

function SearchResult() {
  const { filteredData, showFilteredDataHandler } = useContext(DataContext);

  const data = filteredData;

  return (
    <table className={classes.resultContainer}>
      <thead>
        <tr>
          <td>ID</td>
        </tr>
        <tr>
          <td>Заголовок</td>
        </tr>
        <tr>
          <td>Описание</td>
        </tr>
      </thead>
      <tbody className={classes.foundData}>
        {data.map((item, i) => (
          <tr
            onClick={() => {
              showFilteredDataHandler([item]);
            }}
            key={i}
          >
            <td>{item.id}</td>
            <td>{item.body}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResult;
