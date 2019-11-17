import React from "react";
import Login from "./components/Login";
import styles from "./App.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default App;
