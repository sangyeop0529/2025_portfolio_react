import React from "react";
import style from "./Hero.module.css";
import TypeIt from "typeit-react";
import { FaGithub } from "react-icons/fa";

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
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>
          <TypeIt options={typeItOptions} getAfterInit={typeItSequence} />
        </h2>

        <div className={style.btnGroup}>
          <button className={style.primaryBtn}>Contact Me</button>
          <button className={style.secondaryBtn}>
            <FaGithub /> GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
