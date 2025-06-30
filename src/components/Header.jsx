import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiXMark } from "react-icons/hi2";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = ({ mode = "home" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      // 헤더 높이만큼 오프셋을 고려하여 스크롤
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // 헤더 높이만큼 빼기

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const handleBack = () => {
    navigate(-1); // 한 페이지 뒤로
  };

  if (mode == "home") {
    return (
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${style.header} ${isScrolled ? style.scrolled : ""} ${
          isHovered ? style.hovered : ""
        }`}>
        <div className={style.container}>
          <div className={style.logo}>
            <h2>Dell's Portfolio</h2>
          </div>

          <div className={style.navContainer}>
            {toggled ? (
              <HiXMark className={style.toggleBar} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu
                className={style.toggleBar}
                onClick={handleToggle}
              />
            )}

            {toggled && (
              <nav className={style.nav}>
                <ul>
                  <li onClick={() => scrollToSection("hero")}>Hero</li>
                  <li onClick={() => scrollToSection("profile")}>About</li>
                  <li onClick={() => scrollToSection("skills")}>Skills</li>
                  <li onClick={() => scrollToSection("projects")}>Projects</li>
                  <li onClick={() => scrollToSection("career")}>Works</li>
                  <li onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${style.header} ${isScrolled ? style.scrolled : ""} ${
          isHovered ? style.hovered : ""
        }`}>
        <div className={style.container}>
          <div className={style.navContainer}>
            <IoArrowBackOutline
              className={style.toggleBar}
              onClick={handleBack}
            />
          </div>
          <div className={style.logo}>
            <h2>Dell's Portfolio</h2>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
