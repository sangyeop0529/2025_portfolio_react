import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import profileImage from "../assets/images/profile.jpg";
import profileImage2 from "../assets/images/profile2.jpg";
import style from "./Profile.module.css";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const profileRef = useRef();
  const profileImageRef = useRef();
  const careerRef = useRef();
  const educationRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 배경색 변경
      gsap.to(profileRef.current, {
        backgroundColor: "#fafafa",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 타이틀
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 프로필 이미지
      gsap.fromTo(
        profileImageRef.current,
        {
          scale: 0.8,
          rotation: -10,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: profileImageRef.current,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Career
      gsap.fromTo(
        careerRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: careerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Education
      gsap.fromTo(
        educationRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Career 리스트 아이템들 순차적 애니메이션
      const careerItems = careerRef.current.querySelectorAll("li");
      gsap.fromTo(
        careerItems,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2, // 각 아이템마다 0.2초씩 지연
          ease: "power2.out",
          scrollTrigger: {
            trigger: careerRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Education 리스트 아이템들 순차적 애니메이션
      const educationItems = educationRef.current.querySelectorAll("li");
      gsap.fromTo(
        educationItems,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 추가 효과: 호버 시 프로필 이미지 미세한 애니메이션
      const profileImg = profileImageRef.current.querySelector("img");

      profileImg.addEventListener("mouseenter", () => {
        gsap.to(profileImg, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      profileImg.addEventListener("mouseleave", () => {
        gsap.to(profileImg, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }, profileRef);

    return () => ctx.revert(); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <section id="profile" className={style.section} ref={profileRef}>
      <div className={`${style.container} container`}>
        <div ref={titleRef}>
          <SectionTitle
            title="WHO AM I"
            subTitle="기본에 충실하면서도 새로운 기술에 도전하는 <br />
          성장하는 프론트엔드 개발자입니다."
          />
        </div>

        <figure className={style.profile} ref={profileImageRef}>
          {/* <img src="https://placehold.co/380x380" alt="profile" /> */}
          <img src={profileImage2} alt="profile" />
        </figure>

        <div className={style.flexBox}>
          <div className={style.career} ref={careerRef}>
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

          <div className={style.education} ref={educationRef}>
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
