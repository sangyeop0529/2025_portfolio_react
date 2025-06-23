import React from "react";
import style from "./Career.module.css";

const Career = () => {
  return (
    <section className={style.section} id="Career">
      <div className={`${style.container} container`}>
        <h2 className={`${style.mainTitle} main-title`}>Careers</h2>
        <p className={`${style.subTitle} sub-title`}>
          실무 환경에서 담당했던 주요 프로젝트들과 <br />그 과정에서 쌓아온
          경험들입니다.
        </p>
      </div>
    </section>
  );
};

export default Career;
