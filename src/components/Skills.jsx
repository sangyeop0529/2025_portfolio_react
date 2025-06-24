import React, { useState } from "react";
import style from "./Skills.module.css";
import SkillCard from "./SkillCard";
import SectionTitle from "./SectionTitle";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  const [allFlipped, setAllFlipped] = useState(false);
  const [individualFlipped, setIndividualFlipped] = useState({});

  const handleAllFlip = () => {
    const newFlippedState = !allFlipped;
    setAllFlipped(newFlippedState);

    const newIndividualState = {};
    [...skillsData.firstRow, ...skillsData.secondRow].forEach((skill) => {
      newIndividualState[skill.number] = newFlippedState;
    });
    setIndividualFlipped(newIndividualState);
  };

  const handleIndividualFlip = (cardNumber) => {
    setIndividualFlipped((prev) => ({
      ...prev,
      [cardNumber]: !prev[cardNumber],
    }));
  };

  return (
    <section className={style.section}>
      <div className={`${style.container} container`}>
        <SectionTitle
          center
          title="My Skills"
          subTitle=" 웹 개발의 기초부터 최신 기술까지 <br />
          실무에 바로 적용 가능한 나의 핵심 역량들입니다."
        />

        <div className={style.listWrap}>
          <ul className={style.list}>
            {skillsData.firstRow.map((skill) => (
              <SkillCard
                key={skill.number}
                level={skill.level}
                name={skill.name}
                number={skill.number}
                desc={skill.desc}
                isFlipped={individualFlipped[skill.number] || false}
                onFlip={() => handleIndividualFlip(skill.number)}
              />
            ))}
          </ul>
          <ul className={`${style.list} ${style.reverse}`}>
            {skillsData.secondRow.map((skill) => (
              <SkillCard
                key={skill.number}
                level={skill.level}
                name={skill.name}
                number={skill.number}
                desc={skill.desc}
                isFlipped={individualFlipped[skill.number] || false}
                onFlip={() => handleIndividualFlip(skill.number)}
              />
            ))}
          </ul>
        </div>

        <button className={style.allBtn} onClick={handleAllFlip}>
          {allFlipped ? "한번에 앞면 보기" : "한번에 자세히 보기"}
        </button>
      </div>
    </section>
  );
};

export default Skills;
