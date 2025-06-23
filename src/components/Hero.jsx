import React from "react";
import TypeIt from "typeit-react";
import { FaGithub } from "react-icons/fa";
import style from "./Hero.module.css";

// TypeIt
const typeItOptions = {
  speed: 80,
  deleteSpeed: 80,
  waitUntilVisible: true,
  loop: true,
  html: true,
};

const typeItSequence = (instance) => {
  return instance
    .type("<span class='en'>Clean <b class='point-color'>Code</b>,</span>")
    .break()
    .type("<span class='en'>Great Results</span>")
    .pause(2000)
    .delete()
    .pause(500)
    .type("프론트엔드 개발자")
    .break()
    .type("<b class='point-color'>\"이상엽\"</b>입니다.")
    .pause(2000)
    .delete()
    .pause(500);
};

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGithubClick = () => {
    const githubURL = "https://github.com/sangyeop0529";
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="hero" className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>
          <TypeIt options={typeItOptions} getAfterInit={typeItSequence} />
        </h2>

        <div className={style.btnGroup}>
          <button className={style.primaryBtn} onClick={handleContactClick}>
            Contact Me
          </button>
          <button className={style.secondaryBtn} onClick={handleGithubClick}>
            <FaGithub /> GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
