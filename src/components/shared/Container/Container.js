import React from "react";

import css from "./Container.module.css";
import Title from "components/shared/Title";

const Container = ({ children, title }) => {
  return (
    <div className={css.container}>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
};

export default Container;
