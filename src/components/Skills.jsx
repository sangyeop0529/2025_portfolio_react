import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Skills.module.css";
import SkillCard from "./SkillCard";
import SectionTitle from "./SectionTitle";
import { skillsData } from "../data/skillsData";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [allFlipped, setAllFlipped] = useState(false);
  const [individualFlipped, setIndividualFlipped] = useState({});

  // GSAP 애니메이션용 ref들
  const sectionRef = useRef();
  const titleRef = useRef();
  const firstRowRef = useRef();
  const secondRowRef = useRef();
  const buttonRef = useRef();

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 타이틀
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 첫 번째 행 카드들
      const firstRowCards = firstRowRef.current.children;
      gsap.fromTo(
        firstRowCards,
        {
          x: -100,
          opacity: 0,
          rotation: -15,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15, // 각 카드마다 0.15초 지연
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: firstRowRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 두 번째 행 카드들
      const secondRowCards = secondRowRef.current.children;
      gsap.fromTo(
        secondRowCards,
        {
          x: 100,
          opacity: 0,
          rotation: 15,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: secondRowRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 버튼 애니메이션
      gsap.fromTo(
        buttonRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 카드들 패럴랙스 효과
      gsap.to(firstRowCards, {
        y: -20,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(secondRowCards, {
        y: 20, // 반대 방향
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // 7. 카드 호버 효과 (인터랙션)
      [...firstRowCards, ...secondRowCards].forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotation: Math.random() * 6 - 3, // -3도에서 3도 사이 랜덤 회전
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    }, sectionRef); // scope 지정

    return () => ctx.revert(); // 정리
  }, []);

  return (
    <section className={style.section} id="skills" ref={sectionRef}>
      <div className={`${style.container} container`}>
        <div ref={titleRef}>
          <SectionTitle
            center
            title="My Skills"
            subTitle=" 웹 개발의 기초부터 최신 기술까지 <br />
            실무에 바로 적용 가능한 나의 핵심 역량들입니다."
          />
        </div>

        <div className={style.listWrap}>
          <ul className={style.list} ref={firstRowRef}>
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
          <ul className={`${style.list} ${style.reverse}`} ref={secondRowRef}>
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

        <button
          className={style.allBtn}
          ref={buttonRef}
          onClick={handleAllFlip}>
          {allFlipped ? "한번에 앞면 보기" : "한번에 자세히 보기"}
        </button>
      </div>
    </section>
  );
};

export default Skills;
