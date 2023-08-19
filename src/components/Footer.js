import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./_Footer.module.scss";
import DataContext from "../context/DataContext";

function Footer() {
  const { numbers, currentPage, goToPreviousPage, goToNextPage } =
    useContext(DataContext);

  return (
    <div className={classes["footer-container"]}>
      <button
        onClick={goToPreviousPage}
        className={`${classes.btn} ${classes["btn-previous"]}`}
      >
        Prev
      </button>
      <ul className={classes.pagination}>
        {numbers.map((n, i) => (
          <li className={`${classes["page-item"]}`} key={i}>
            <Link
              to={`/posts/${n}`}
              className={`${classes[currentPage === n ? "active" : ""]}`}
            >
              {n}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={goToNextPage}
        className={`${classes.btn} ${classes["btn-next"]}`}
      >
        Next
      </button>
    </div>
  );
}

export default Footer;
