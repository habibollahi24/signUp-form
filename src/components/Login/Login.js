import React, { useState, useEffect } from "react";
import { validation } from "../validat";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";

import styles from "../SignUp/SignUp.module.css";

///
///
///
///
const Login = () => {
  //state
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({});

  ///Handler
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const focusHandler = (e) => {
    setShow({ [e.target.name]: true });
  };

  const sendData = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      notify("you login", "succes");
    } else {
      setShow({
        email: true,
        password: true,
      });
      notify("Login faild", "faild");
    }
  };
  //
  //useEfect
  useEffect(() => {
    setErrors(validation(data , "login"));
  }, [data]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendData}>
      <h1>Login</h1>
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

        <div className={styles.btns}>
          <Link to="/signup">SignUp</Link>
          <button type="submit">Login</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
