import React from "react";
import styles from "./Login.module.css"
import { Link } from "react-router-dom"

const Login = ({setLogin}) => {
  const clickHandler = () => setLogin(state=>!state)
  return (
    <div>
    <div className={styles.modal} onClick={clickHandler}></div>
    <form className={`${styles["modal-content"]} ${styles.animate}`} action="action_page.php">
      <div className={styles.container}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" name="remember" /> Remember
          me
        </label>
      </div>

      <div className={styles.container} >
        <button type="button" className={styles.cancelbtn} onClick={clickHandler}>
          Cancel
        </button>
        <span className="psw">
          Forgot <Link to="/">password?</Link>
        </span>
      </div>
    </form>
    </div>
  );
};

export default Login;