import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Profile.module.css";
import profileImage from "../assets/images/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const profileRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      })
      .to(
        "#profile",
        {
          backgroundColor: "#fff",
        },
        0
      );
  }, []);

  return (
    <section id="profile" className={style.section} ref={profileRef}>
      <div className={`${style.container} container`}>
        <h2 className={`${style.mainTitle} main-title`}>WHO AM I</h2>
        <p className={`${style.subTitle} sub-title`}>
          안녕하세요!
          <br /> 기본에 충실한 프론트엔드 이상엽입니다.
        </p>

        <figure className={style.profile}>
          <img src="https://placehold.co/400x400" />
          {/* <img src={profileImage} alt="profile" /> */}
        </figure>

        <div className={style.flexBox}>
          <div className={style.career}>
            <h3 className={style.category}>Career</h3>
            <ul className={style.list}>
              <li>
                <h5 className={`${style.title} point-color`}>파이브센스</h5>
                <p className={style.desc}>
                  반응형 웹사이트 퍼블리싱 작업을 진행하고, 안정적인 서비스
                  운영을 위한 유지보수 및 도메인 연결, 호스팅 관리 등의 운영
                  업무를 담당했습니다.
                </p>
                <span className={style.date}>2023.11 ~ 2025.03</span>
              </li>
              <li>
                <h5 className={`${style.title} point-color`}>인터와이즈</h5>
                <p className={style.desc}>
                  웹사이트 디자인 작업과 랜딩페이지 제작, 웹사이트 퍼블리싱
                  업무를 중심으로 다양한 웹 프로젝트를 진행했습니다.
                </p>
                <span className={style.date}>2021.04 ~ 2022.05</span>
              </li>
            </ul>
          </div>

          <div className={style.education}>
            <h3 className={style.category}>Education</h3>
            <ul className={style.list}>
              <li>
                <h5 className={`${style.title} point-color`}>
                  메가스터디IT아카데미(강남)
                </h5>
                <p className={style.desc}>
                  반응형 웹사이트 퍼블리싱 작업을 진행하고, 안정적인 서비스
                  운영을 위한 유지보수 및 도메인 연결, 호스팅 관리 등의 운영
                  업무를 담당했습니다.
                </p>
                <span className={style.date}>2022.05 ~ 2022.08</span>
              </li>
              <li>
                <h5 className={`${style.title} point-color`}>
                  그린컴퓨터아카데미(서면)
                </h5>
                <p className={style.desc}>
                  웹사이트 디자인 작업과 랜딩페이지 제작, 웹사이트 퍼블리싱
                  업무를 중심으로 다양한 웹 프로젝트를 진행했습니다.
                </p>
                <span className={style.date}>2020.11~ 2021.04</span>
              </li>
              <li>
                <h5 className={`${style.title} point-color`}>
                  온라인 강의 및 교육
                </h5>
                <p className={style.desc}>
                  패스트캠퍼스, 드림코딩, 인프런 등의 다양한 온라인 플랫폼을
                  통해 프론트엔드 개발 관련 학습을 진행했습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
