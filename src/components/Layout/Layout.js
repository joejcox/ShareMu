import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
