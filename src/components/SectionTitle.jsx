import React from "react";
import style from "./SectionTitle.module.css";

const SectionTitle = ({ title, subTitle, center }) => {
  return (
    <div className={`${center ? style.center : ""}`}>
      <h2 className={style.mainTitle}>{title}</h2>
      <p
        className={style.subTitle}
        dangerouslySetInnerHTML={{ __html: subTitle }}
      />
    </div>
  );
};

export default SectionTitle;
