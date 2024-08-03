import React, { useState } from "react";
import styles from "./User.module.scss";
import profile from "../../../../../public/nanami.png";

import classNames from "classnames";

import { Flex } from "antd";

const User = () => {
  return (
    <Flex className={styles.flexUser}>
      <img className={styles.imgUser} src={profile}></img>
      <div className={styles.userName}>Skyrim</div>
    </Flex>
  );
};

export default User;
