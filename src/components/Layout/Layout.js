import React, { useState } from "react";
import Header from "./Header";
import Login from "../Login/Login";

export default function Layout ({children}){
  const [login, setLogin] = useState(false)
  return<>
  <Header login={login} setLogin={setLogin}/>
  {login && <Login setLogin={setLogin}/>}
  {children}
  </>
}