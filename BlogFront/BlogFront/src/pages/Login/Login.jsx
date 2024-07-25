import React, { useState } from "react";
import styles from "./Login.module.scss";

import classNames from "classnames";
const Login = () => {
  const [title, setTitle] = useState("title");
  return (
    <main className={styles.main}>
      <div
        className={classNames([
          styles.divLoginWrapperBkgH,
          styles.divLoginWrapperH,
        ])}
      >
        <div className={styles.flexTitleRowWrapperH}>
          <div className={styles.divTitle}>{title}</div>
        </div>
      </div>
    </main>
  );
};

export default Login;
