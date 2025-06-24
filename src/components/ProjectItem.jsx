import React from "react";
import style from "./ProjectItem.module.css";

const ProjectItem = ({ number }) => {
  return (
    <li className={`${style.project} project-item`}>
      <figure className={style.imgBox}>
        <img src={`/images/img${number}.jpg`} alt="" />
      </figure>
      <div className={style.info}>
        <h3 className={style.textTitle}>감정일기장</h3>
        <p className={style.desc}>React로 만들어진 기본 일기장입니다.</p>
        <span className={style.date}>2025.05.21 ~ 2025.05.26</span>

        <ul className={style.tech}>
          <li>React</li>
          <li>Javascript</li>
        </ul>
      </div>
    </li>
  );
};

export default ProjectItem;
