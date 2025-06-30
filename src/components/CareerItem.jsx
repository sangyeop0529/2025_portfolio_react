import React from "react";
import style from "./CareerItem.module.css";
import { RiGlobalLine } from "react-icons/ri";

const CareerItem = ({ title, date, feature, thumbnail, URL }) => {
  return (
    <li className={style.card}>
      <figure className={style.thumbnail}>
        <img src={`/images/${thumbnail}.png`} alt={title} />
      </figure>

      <div className={style.info}>
        <div className={style.projectTop}>
          <div className={`${style.title} point-color`}>{title}</div>
          <div className={style.date}>{date}</div>
        </div>

        <div className={style.projectBottom}>
          <ul className={style.keyFeature}>
            {feature.map((techItem, index) => (
              <li key={index}>{techItem}</li>
            ))}
          </ul>

          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className={style.btn}>
            <RiGlobalLine />
            웹사이트 보기
          </a>
        </div>
      </div>
    </li>
  );
};

export default CareerItem;
