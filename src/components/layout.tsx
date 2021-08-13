import React, { SetStateAction, useEffect, useState } from "react";
import s from "/src/styles/components/elements/layout.module.css";

const MAX_WIDTH = 578;

const Layout: React.FC = ({ children }) => {
  const [innerWidth, setInnerWidth]: [
    number,
    React.Dispatch<SetStateAction<number>>
  ] = useState(578);
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth);
    };
  }, []);
  return (
    <div className={s.container}>
      <div
        className={s.content}
        style={
          innerWidth < MAX_WIDTH
            ? {
                zoom: `${(innerWidth / MAX_WIDTH) * 100}%`,
              }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
