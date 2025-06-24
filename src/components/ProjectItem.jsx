import React from "react";
import style from "./ProjectItem.module.css";

const ProjectItem = ({ number, title, desc, date, tech }) => {
  return (
    <li className={`${style.project} project-item`}>
      <figure className={style.imgBox}>
        <img src={`/images/img${number}.jpg`} alt={title} />
      </figure>
      <div className={style.info}>
        <h3 className={style.textTitle}>{title}</h3>
        <p className={style.desc}>{desc}</p>
        <span className={style.date}>{date}</span>

        <ul className={style.tech}>
          {tech.map((keyItem, index) => (
            <li key={index}>{keyItem}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProjectItem;
