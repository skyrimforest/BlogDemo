import React, { useState } from "react";
import styles from "./SkySider.module.scss";

import classNames from "classnames";

import Tag from "./Tag/Tag";
import User from "./User/User";

import { Flex } from "antd";

const SkySider = () => {
  return (
    <Flex className={styles.flexSkySider}>
      <User></User>
      <Tag></Tag>
      <Tag></Tag>
    </Flex>
  );
};

export default SkySider;
