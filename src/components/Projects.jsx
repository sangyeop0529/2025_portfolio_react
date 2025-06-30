import React, { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const scrollTriggerRef = useRef(null);

  // 애니메이션 초기화 함수
  const initializeAnimations = () => {
    // 기존 ScrollTrigger 인스턴스 제거
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // 모든 ScrollTrigger 인스턴스 새로고침
    ScrollTrigger.refresh(true);

    const ctx = gsap.context(() => {
      const project = gsap.utils.toArray(".project-item");

      // 애니메이션 시작 전 초기 상태로 리셋
      gsap.set(project, { xPercent: 0, clearProps: "all" });
      gsap.set(projectsRef.current, { backgroundColor: "", clearProps: "all" });
      gsap.set(containerRef.current, { clearProps: "all" });

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
      const horizontalScroll = gsap.to(project, {
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
          onRefresh: (self) => {
            // ScrollTrigger 새로고침 시 end 값 재계산
            self.end =
              self.start + (listRef.current?.scrollWidth - window.innerWidth);
          },
        },
      });

      // ScrollTrigger 인스턴스 저장
      scrollTriggerRef.current = horizontalScroll.scrollTrigger;
    }, projectsRef);

    return ctx;
  };

  // 초기 마운트 시 애니메이션 설정
  useLayoutEffect(() => {
    const ctx = initializeAnimations();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // 라우트 변경 감지 및 ScrollTrigger 새로고침
  useEffect(() => {
    // 페이지 복귀 시 ScrollTrigger 재초기화
    const handleRouteChange = () => {
      // 약간의 딜레이를 주어 DOM이 완전히 렌더링된 후 실행
      setTimeout(() => {
        ScrollTrigger.refresh(true);

        // 스크롤 위치가 저장되어 있다면 복원
        const savedScrollPosition = sessionStorage.getItem(
          "projectsScrollPosition"
        );
        if (savedScrollPosition) {
          window.scrollTo(0, parseInt(savedScrollPosition));
          sessionStorage.removeItem("projectsScrollPosition");
        }
      }, 100);
    };

    handleRouteChange();
  }, [location.pathname]);

  // 페이지 떠나기 전 스크롤 위치 저장
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        "projectsScrollPosition",
        window.scrollY.toString()
      );
    };

    // 링크 클릭 시 스크롤 위치 저장
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.href.includes("/projects/")) {
        sessionStorage.setItem(
          "projectsScrollPosition",
          window.scrollY.toString()
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // 리사이즈 및 페이지 로드 처리
  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      // 디바운싱으로 리사이즈 최적화
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };

    const handleLoad = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // 가시성 변경 시 ScrollTrigger 새로고침
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
