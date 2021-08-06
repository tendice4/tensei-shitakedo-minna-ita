import React from "react";
import s from "/src/styles/components/elements/layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Layout;
