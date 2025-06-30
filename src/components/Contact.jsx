import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Contact.module.css";
import { IoCall, IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // ref들
  const sectionRef = useRef();
  const titleBoxRef = useRef();
  const infoRef = useRef();
  const copyrightRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 2. 제목 박스 애니메이션 - 위에서 아래로 + 페이드인
      gsap.fromTo(
        titleBoxRef.current,
        {
          opacity: 0,
          y: -50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleBoxRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={style.section} id="contact" ref={sectionRef}>
      <div className={style.content}>
        <div className={style.titleBox} ref={titleBoxRef}>
          <h2 className={`${style.title} en`}>Contact Me</h2>
          <p className={`${style.thankyou} point-color`}>
            봐주셔서 감사합니다.
          </p>
        </div>

        <div className={style.info} ref={infoRef}>
          <div className={style.tell}>
            <a href="tel:010-4147-2234" className={style.btn}>
              <IoCall />
            </a>
          </div>
          <div className={style.mail}>
            <a href="mailto:sangyeop0529@naver.com" className={style.btn}>
              <IoMail />
            </a>
          </div>
          <div className={style.github}>
            <a
              href="https://github.com/sangyeop0529"
              target="_blank"
              rel="noopener noreferrer"
              className={style.btn}>
              <FaGithub />
            </a>
          </div>
        </div>

        <p className={style.copyLight} ref={copyrightRef}>
          Copyright {new Date().getFullYear()}. sangyeop0529 all rights
          reserved.
          <br />
          React, GSAP, CSS Modules 기반으로 제작된 포트폴리오입니다.
        </p>
      </div>
    </section>
  );
};

export default Contact;
