import React, { useState } from "react";
import style from "./SkillCard.module.css";

const SkillCard = ({ number, name, level, desc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <li className={style.container} onClick={handleClick}>
      <div className={`${style.card} ${isFlipped ? style.flipped : ""}`}>
        <div className={style.front}>
          <div className={style.cardImg}>
            <img src={`/public/images/card-icon0${number}.png`} alt="HTML" />
          </div>
          <span className={style.title}>{name}</span>
          <p className={style.btn}>클릭하여 자세히 보기</p>
        </div>
        <div className={style.back}>
          <h5 className={style.title}>{name}</h5>
          <p className={style.desc}>{desc}</p>

          <div className={style.progress}>
            <span className={style.label}>숙련도</span>
            <div className={style.bar}>
              <div
                className={style.fill}
                style={{ width: `${(level / 5) * 100}%` }}></div>
            </div>
            <span className={style.text}>{level} / 5</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SkillCard;
