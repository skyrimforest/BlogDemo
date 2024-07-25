import React, { useState } from "react";
import styles from "./Blog.module.scss";

import classNames from "classnames";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Blog = () => {
  return (
    <div className={styles.main}>
      <Layout>
        <Header></Header>
        <Sider></Sider>
        <Content></Content>
      </Layout>
    </div>
  );
};

export default Blog;
