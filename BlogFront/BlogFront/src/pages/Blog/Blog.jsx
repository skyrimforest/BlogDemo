import React, { useState } from "react";
import styles from "./Blog.module.scss";

import classNames from "classnames";

import SkyContent from "./SkyContent/SkyContent";
import SkyHeader from "./SkyHeader/SkyHeader";
import SkySider from "./SkySider/SkySider";

const Blog = () => {
  return (
    <div className={styles.main}>
      <div
        className={classNames([
          styles.divBlogWrapperBkgH,
          styles.divBlogWrapperH,
        ])}
      >
        {/* <div className={styles.header}>hello</div>

        <div className={styles.siderbar}>hello</div>
        <div className={styles.blogbody}>hello</div> */}

        <SkyHeader>233</SkyHeader>
        <SkySider>233</SkySider>
        <SkyContent>233</SkyContent>
      </div>
    </div>
  );
};

export default Blog;
