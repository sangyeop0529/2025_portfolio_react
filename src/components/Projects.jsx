import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Projects.module.css";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";
import { projectsData } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const containerRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    // GSAP Context 생성 - 이 컴포넌트의 애니메이션만 관리
    const ctx = gsap.context(() => {
      const project = gsap.utils.toArray(".project-item");

      // 배경 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 100%",
            end: "bottom bottom",
            scrub: 1,
            refreshPriority: -1,
          },
        })
        .to(
          projectsRef.current,
          {
            backgroundColor: "#1a1a1a",
          },
          0
        );

      // 가로 스크롤 효과
      gsap.to(project, {
        xPercent: -100 * (project.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => "+=" + (listRef.current?.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
    }, projectsRef); // 컨텍스트 스코프를 projectsRef로 제한

    // 컴포넌트 언마운트 시 이 컨텍스트의 애니메이션만 정리
    return () => ctx.revert();
  }, []);

  // 리사이즈 및 페이지 로드 처리
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    const handleLoad = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section id="projects" className={style.section} ref={projectsRef}>
      <div className={`${style.container} container`} ref={containerRef}>
        <SectionTitle
          title="Projects"
          subTitle="체계적인 학습을 통해 쌓아온 React 개발 경험과 <br />그 과정에서 완성한
          프로젝트들입니다."
        />

        <ul className={style.list} ref={listRef}>
          {projectsData.map((project) => (
            <ProjectItem key={project.number} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
