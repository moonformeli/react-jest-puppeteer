import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Login.scss";

const Login = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [pw, setPW] = useState("");

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangePW = e => {
    setPW(e.target.value);
  };

  const onSubmit = e => {
    if (name === "admin" && pw === "1234") {
      // return <Redirect to="/login/success" />;
      history.push("/login/success");
    }
  };

  return (
    <div className={styles.form}>
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          value={pw}
          onChange={onChangePW}
        />
        <button className={styles.submit} onClick={onSubmit}>
          sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
