import React, { useState } from "react";
import styles from "./Blog.module.scss";

import classNames from "classnames";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Blog = () => {
  return (
    <Layout>
      <Header></Header>
      <Sider></Sider>
      <Content></Content>
    </Layout>
  );
};

export default Blog;
