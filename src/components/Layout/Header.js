import React from "react";
import styles from "./Header.module.css";
import logo from "../../gia-logo-wh.svg";

export default function Header({ login, setLogin }) {
  const clickHandler = () => {
    setLogin((state) => !state);
  };
  return (
    <header className={styles["app-header"]}>
      <img src={logo} alt="logo" />
      <button className={styles.login} onClick={clickHandler}>
        Login
      </button>
    </header>
  );
}
