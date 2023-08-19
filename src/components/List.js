import React, { useState, useContext } from "react";
import classes from "./_List.module.scss";
import { GoChevronDown } from "react-icons/go";
import DataContext from "../context/DataContext";

function List() {
  const { posts, currentPage } = useContext(DataContext);

  const [toggleArr, setToggleArr] = useState({
    value: 0,
    bool: false,
  });

  const iconToggleHandler = (id) => {
    return toggleArr.value === id && toggleArr.bool ? classes.active : "";
  };

  const sortingHandler = (id) => {
    if (id === 1) {
      posts.sort((a, b) => (!toggleArr.bool ? b.id - a.id : a.id - b.id));
    }

    if (id === 2) {
      posts.sort((a, b) =>
        !toggleArr.bool ? b.body.length - a.body.length : a.id - b.id
      );
    }
    if (id === 3) {
      posts.sort((a, b) =>
        !toggleArr.bool ? b.title.length - a.title.length : a.id - b.id
      );
    }
    setToggleArr(() => {
      return { value: id, bool: !toggleArr.bool };
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>ID</p>
            <GoChevronDown
              onClick={() => sortingHandler(1, currentPage)}
              className={`${classes.icon} ${iconToggleHandler(1)}`}
            />
          </th>
        </tr>
        <tr>
          <th>
            <p>Заголовок</p>
            <GoChevronDown
              onClick={() => sortingHandler(2)}
              className={`${classes.icon} ${iconToggleHandler(2, currentPage)}`}
            />
          </th>
        </tr>
        <tr>
          <th>
            <p>Описание</p>
            <GoChevronDown
              onClick={() => sortingHandler(3, currentPage)}
              className={`${classes.icon} ${iconToggleHandler(3)}`}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.body}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;
