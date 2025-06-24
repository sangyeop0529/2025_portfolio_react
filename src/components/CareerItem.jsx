import React from "react";
import style from "./CareerItem.module.css";
import { RiGlobalLine } from "react-icons/ri";

const CareerItem = ({ number, title, date, feature }) => {
  return (
    <li className={style.card}>
      <figure className={style.thumbnail}>
        <img src={`/images/img${number}.jpg`} alt={title} />
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

          <button className={style.btn}>
            <RiGlobalLine />
            웹사이트 보기
          </button>
        </div>
      </div>
    </li>
  );
};

export default CareerItem;
