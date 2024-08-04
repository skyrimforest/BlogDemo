import React, { useState, useCallback } from "react";
import styles from "./SkyHeader.module.scss";

import { REQ, handleRequest, getApiUrl } from "@/modules/api/api";

import classNames from "classnames";
import { Flex, Button, Input } from "antd";

const SkyHeader = () => {
  const testAxios = useCallback(() => {
    // console.log("233");
    // console.log(getApiUrl("USER_TEST"));
    handleRequest(REQ("USER_TEST", { name: "刻晴", age: 23 }), {});
  }, []);

  return (
    <Flex className={styles.flexSkyHeader}>
      <Button
        className={classNames([styles.homeButton, styles.buttonBack])}
        onClick={testAxios}
      >
        简单博客
      </Button>
      <Button className={classNames([styles.normalButton, styles.buttonBack])}>
        Home
      </Button>
      <Button className={classNames([styles.normalButton, styles.buttonBack])}>
        About
      </Button>
      <Button className={classNames([styles.normalButton, styles.buttonBack])}>
        Github
      </Button>
      <Input className={styles.searchInput} placeholder="Search"></Input>
      <Button className={styles.styleButton}></Button>
      <Button className={styles.styleButton}></Button>
    </Flex>
  );
};

export default SkyHeader;
