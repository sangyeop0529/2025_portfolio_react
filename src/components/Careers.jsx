import React from "react";
import style from "./Career.module.css";
import SectionTitle from "./sectionTitle";
import { CareersData } from "../data/CareersData";
import CareerItem from "./CareerItem";

const Career = () => {
  return (
    <section className={style.section} id="Career">
      <div className={`${style.container} container`}>
        <SectionTitle
          center
          title="Publishing Works"
          subTitle="실무에서 직접 참여했던 주요 프로젝트들과<br />그 과정에서 쌓아온 경험들입니다."
        />

        <ul className={style.list}>
          {CareersData.map((career) => (
            <CareerItem key={career.number} {...career} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Career;
