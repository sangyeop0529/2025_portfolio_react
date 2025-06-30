import React from "react";
import style from "./Detail.module.css";
import { projectsData } from "../data/projectsData";
import { useParams } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Detail = () => {
  const { number } = useParams();

  console.log(number);

  const project = projectsData.find(
    (project) => project.number === parseInt(number)
  );

  return (
    <section id="projectDetail" className={style.section}>
      <div className={`${style.container} container`}>
        <div className={`${style.title} point-color`}>{project.title}</div>
        <figure className={style.imgBox}>
          <img src={`/images/${project.imgName}`} alt={project.title} />
        </figure>
        <div className={style.bottom}>
          <div className={style.overview}>
            <h3 className={style.overviewTitle}>프로젝트 개요</h3>
            <p className={style.overviewDesc}>{project.desc}</p>
            <div className={style.overviewInfo}>
              <span>작업기간 : {project.date}</span>
              <span>
                주요기술 :{" "}
                <span className={style.overviewTech}>
                  {project.tech.join(" / ")}
                </span>
              </span>
              <span>기여도 : 100%</span>
            </div>
            <div className={style.btnGroup}>
              <a
                className={style.btn}
                href={project.URL}
                target="_blank"
                rel="noopener noreferrer">
                <RiGlobalLine /> 배포 URL
              </a>
              <a
                className={style.btn}
                href={project.git}
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub /> 깃허브 URL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
