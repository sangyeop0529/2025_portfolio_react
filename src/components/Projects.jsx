import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Projects.module.css";
import ProjectItem from "./ProjectItem";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const containerRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    const project = gsap.utils.toArray(".project-item");

    // 배경
    gsap
      .timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .to(
        "#projects",
        {
          backgroundColor: "#1a1a1a",
        },
        0
      );

    // 가로 스크롤 효과
    let scrollTween = gsap.to(project, {
      xPercent: -100 * (project.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        // snap: 1 / (project.length - 1),
        start: "top top",
        end: () => "+=" + (listRef.current.scrollWidth - window.innerWidth),
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className={style.section} ref={projectsRef}>
      <div className={`${style.container} container`} ref={containerRef}>
        <h2 className={`${style.mainTitle} main-title`}>Projects</h2>
        <p className={`${style.subTitle} sub-title`}>
          체계적인 학습을 통해 쌓아온 React 개발 경험과 <br />그 과정에서 완성한
          프로젝트들입니다.
        </p>

        <ul className={style.list} ref={listRef}>
          <ProjectItem number="1" />
          <ProjectItem number="2" />
          <ProjectItem number="3" />
          <ProjectItem number="4" />
        </ul>
      </div>
    </section>
  );
};

export default Projects;
