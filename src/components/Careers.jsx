import React, { useState } from "react";
import style from "./Career.module.css";
import SectionTitle from "./SectionTitle";
import { CareersData } from "../data/CareersData";
import CareerItem from "./CareerItem";

const Career = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const itemPerPage = 2;

  const visibleCareers = CareersData.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemPerPage);
  };

  const hasMoreItem = visibleCount < CareersData.length;

  return (
    <section className={style.section} id="career">
      <div className={`${style.container} container`}>
        <SectionTitle
          center
          title="Publishing Works"
          subTitle="실무에서 직접 참여했던 주요 프로젝트들과<br />그 과정에서 쌓아온 경험들입니다."
        />

        <ul className={style.list}>
          {visibleCareers.map((career) => (
            <CareerItem key={career.number} {...career} />
          ))}
        </ul>

        {hasMoreItem && (
          <button className={style.moreBtn} onClick={handleShowMore}>
            프로젝트 더 보기
          </button>
        )}
      </div>
    </section>
  );
};

export default Career;
