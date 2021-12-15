import React, { useState, useEffect } from "react";
import { validation } from "../validat";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";

import styles from "./SignUp.module.css";

///
///
///
///
const SignUp = () => {
  //state
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({});
  

  ///Handler
  const changeHandler = (e) => {
    if (e.target.name === "isAccept") {
      setdata({ ...data, [e.target.name]: e.target.checked });
    } else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  };
  const focusHandler = (e) => {

    setShow({ [e.target.name]: true });
  };

  const sendData = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      notify("you sign up", "succes");
    } else {
      setShow({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
      notify("signup faild", "faild");
    }
  };
// 
  //useEfect
  useEffect(() => {
    setErrors(validation(data));
  }, [data]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendData}>
      <h1>SignUp</h1>
        <div className={styles.fields}>
          <label>Name</label>
          <input
            className={show.name && errors.nameValid && styles.warning}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />

          <span>{show.name && errors.nameValid}</span>
        </div>
        <div className={styles.fields}>
          <label>Email</label>
          <input
          className={show.email && errors.emailValid && styles.warning}
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />

          <span>{show.email && errors.emailValid}</span>
        </div>
        <div className={styles.fields}>
          <label>Password</label>
          <input
          className={show.password && errors.passwordValid && styles.warning}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />

          <span>{show.password && errors.passwordValid}</span>
        </div>
        <div className={styles.fields}>
          <label>Confirm Password</label>
          <input
           className={show.confirmPassword && errors.confirmValid && styles.warning}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />

          <span>{show.confirmPassword && errors.confirmValid}</span>
        </div>
        <div className={styles.checkFields}>
          <div>
            <label for="check">I accept term of privacy policy</label>
            <input
              id="check"
              type="checkbox"
              name="isAccept"
              value={data.isAccept}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          <span>{show.isAccept && errors.isAcceptValid}</span>
        </div>

        <div className={styles.btns}>
          <Link to="/login" >login</Link>
          <button type="submit">Sign Up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
