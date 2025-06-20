import React, { useEffect } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * (window.innerHeight / 2);

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;

      document.getElementById("starry-background").appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 800);
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.2) {
        createShootingStar();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="starry-background">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
