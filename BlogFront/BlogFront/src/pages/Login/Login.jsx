import React, { useState } from "react";
import styles from "./Login.module.scss";

import classNames from "classnames";
import { Flex, Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  navigate("/", { replace: true });

  const [title, setTitle] = useState("简单博客");
  return (
    <main className={styles.main}>
      <div
        className={classNames([
          styles.divLoginWrapperBkgH,
          styles.divLoginWrapperH,
        ])}
      >
        <Flex className={styles.flexTitleRowWrapperH}>
          <div className={styles.divTitle}>{title}</div>
        </Flex>

        <Form className={classNames([styles.formLogin, styles.formLoginH])}>
          <Form.Item
            label="账号"
            name="userName"
            rules={[{ required: true, message: "请输入登录账号" }]}
          >
            <Input placeholder="请输入登录账号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="passWord"
            rules={[{ required: true, message: "请输入登录密码" }]}
          >
            <Input.Password placeholder="请输入登录密码" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: {
                offset: 0,
              },
              sm: {
                offset: 4,
              },
            }}
          >
            <Button
              className="btn-login"
              type="primary"
              htmlType="submit"
              onClick={() => {
                navigate("/Blog", { replace: true });
              }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Login;
