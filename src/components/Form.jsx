import React, { useRef } from "react";
import classes from "./Form.module.css";

const Form = ({ postData }) => {
  const inputTextRef = useRef("");
  const inputTitleRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: inputTitleRef.current.value,
      text: inputTextRef.current.value,
    };
    postData(data);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" placeholder="title" ref={inputTitleRef} />
      <input type="text" placeholder="text" ref={inputTextRef} />
      <button>ADD</button>
    </form>
  );
};

export default Form;
