import React from "react";
import style from "./ProjectItem.module.css";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ number, title, desc, date, tech, imgName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${number}`);
  };

  return (
    <li className={`${style.project} project-item`} onClick={handleClick}>
      <figure className={style.imgBox}>
        <img src={`/images/${imgName}`} alt={title} />
      </figure>
      <div className={style.info}>
        <h3 className={style.textTitle}>{title}</h3>
        <p className={style.desc} style={{ whiteSpace: "pre-line" }}>
          {desc}
        </p>
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
