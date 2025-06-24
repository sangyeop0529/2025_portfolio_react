import React from "react";
import style from "./Contact.module.css";
import { IoCall, IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={style.section} id="contact">
      <div className={style.content}>
        <div className={style.titleBox}>
          <h2 className={`${style.title} en`}>Contact Me</h2>
          <p className={`${style.thankyou} point-color`}>
            봐주셔서 감사합니다.
          </p>
        </div>

        <div className={style.info}>
          <div className={style.tell}>
            <IoCall />
          </div>
          <div className={style.mail}>
            <IoMail />
          </div>
          <div className={style.github}>
            <FaGithub />
          </div>
        </div>

        <p className={style.copyLight}>
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
