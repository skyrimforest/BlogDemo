import React, { useState } from "react";
import styles from "./SkyHeader.module.scss";

import classNames from "classnames";
import { Flex, Button, Input } from "antd";

const SkyHeader = () => {
  return (
    <Flex className={styles.flexSkyHeader}>
      <Button className={classNames([styles.homeButton,styles.buttonBack])}>简单博客</Button>
      <Button className={classNames([styles.normalButton,styles.buttonBack])}>Home</Button>
      <Button className={classNames([styles.normalButton,styles.buttonBack])}>About</Button>
      <Button className={classNames([styles.normalButton,styles.buttonBack])}>Github</Button>
      <Input className={styles.searchInput} placeholder="Search"></Input>
      <Button className={styles.styleButton}></Button>
      <Button className={styles.styleButton}></Button>
    </Flex>
  );
};

export default SkyHeader;
