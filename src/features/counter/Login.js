import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";
import { loginAsync , selectlogged } from "./loginSlice";

export function Login() {
  const logged = useSelector(selectlogged)
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div style={{ backgroundColor: "gray" }}>
      <div className={styles.row}>
        <h1>{logged ? "logged":"not logged"}</h1>
        <br></br>
        <hr></hr>
        User name<input onChange={(e) => setusername(e.target.value)} />
        Password<input onChange={(e) => setpassword(e.target.value)} />
        <button onClick={() => dispatch(loginAsync({username,password}))}>login</button>

      </div>
    </div>
  );
}
