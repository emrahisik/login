import React from "react";
import styles from "./Header.module.css"


export default function Header ({login, setLogin}){
  const clickHandler = () => {
    setLogin(state=> !state)
  }
  return (
    <header className={styles["app-header"]}>
        <p>
          GIA
        </p>
        <button className={styles.login} onClick={clickHandler}>Login</button>
      </header>
  )
}