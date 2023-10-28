import React from "react";
import classes from "./List.module.css";

const List = ({ array }) => {
  return (
    <ul>
      {array.map((el) => {
        return (
          <li className={classes.li}>
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
