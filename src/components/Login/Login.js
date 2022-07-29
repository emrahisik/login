import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logo from "../../gia-logo-bl.svg"

const Login = ({ setLogin }) => {
  const clickHandler = () => setLogin((state) => !state);
  return (
    <div>
      <div className={styles.modal} onClick={clickHandler}></div>
      <form
        className={`${styles["modal-content"]} ${styles.animate}`}
        action="action_page.php"
      >
        <div className={styles.imgcontainer}>
          <img src={logo} alt="logo"/>
        </div>
        <div className={styles.container}>
          <label htmlFor="user-id">User Id</label>
          <input
            type="text"
            placeholder="Enter User Id"
            name="user-id"
            id="user-id"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            required
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className={styles.container}>
          <button
            type="button"
            className={styles.cancelbtn}
            onClick={clickHandler}
          >
            Cancel
          </button>
          <span className={styles.psw}>
            Forgot <Link to="/">password?</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
