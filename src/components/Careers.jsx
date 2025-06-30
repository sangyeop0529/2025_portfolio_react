import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Career.module.css";
import SectionTitle from "./SectionTitle";
import { CareersData } from "../data/CareersData";
import CareerItem from "./CareerItem";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const itemPerPage = 2;

  // ref들
  const sectionRef = useRef();
  const titleRef = useRef();
  const listRef = useRef();
  const buttonRef = useRef();

  const visibleCareers = CareersData.slice(0, visibleCount);
  const hasMoreItem = visibleCount < CareersData.length;

  // "더 보기" 버튼 클릭
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemPerPage);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 제목 애니메이션
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 현재 보이는 모든 카드들에 스크롤 애니메이션 적용
      const currentItems = Array.from(listRef.current.children);

      currentItems.forEach((item, index) => {
        const isFromLeft = index % 2 === 0; // 홀수번째는 왼쪽에서

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: isFromLeft ? -80 : 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. "더 보기" 버튼 애니메이션
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleCount]); // visibleCount가 변경될 때마다 실행

  // 버튼 사라짐 효과
  useEffect(() => {
    if (buttonRef.current && !hasMoreItem) {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
      });
    }
  }, [hasMoreItem]);

  return (
    <section className={style.section} id="career" ref={sectionRef}>
      <div className={`${style.container} container`}>
        <div ref={titleRef}>
          <SectionTitle
            center
            title="Publishing Works"
            subTitle="실무에서 직접 참여했던 주요 프로젝트들과<br />그 과정에서 쌓아온 경험들입니다."
          />
        </div>

        <ul className={style.list} ref={listRef}>
          {visibleCareers.map((career) => (
            <CareerItem key={career.number} {...career} />
          ))}
        </ul>

        {hasMoreItem && (
          <button
            className={style.moreBtn}
            ref={buttonRef}
            onClick={handleShowMore}>
            프로젝트 더 보기
          </button>
        )}
      </div>
    </section>
  );
};

export default Career;
