import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      })
      .to(
        "#projects",
        {
          backgroundColor: "#1a1a1a",
        },
        0
      );
  }, []);

  return (
    <section id="projects" className={style.section} ref={projectsRef}>
      <div className={`${style.container} container`}>
        <h2 className={`${style.mainTitle} main-title`}>Projects</h2>
        <p className={`${style.subTitle} sub-title`}>
          체계적인 학습을 통해 쌓아온 React 개발 경험과 <br />그 과정에서 완성한
          프로젝트들입니다.
        </p>
      </div>
    </section>
  );
};

export default Projects;
