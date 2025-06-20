import React, { useEffect } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  useEffect(() => {
    const createShootingStarGroup = () => {
      const count = Math.floor(Math.random() * 2) + 2; // 2~3개 랜덤

      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          // 각각 다른 시간에 생성
          const star = document.createElement("div");
          star.className = "shooting-star";

          // 완전히 다른 위치에서 시작
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * (window.innerHeight / 2);

          star.style.left = `${startX}px`;
          star.style.top = `${startY}px`;

          document.getElementById("starry-background").appendChild(star);

          setTimeout(() => {
            star.remove();
          }, 2400);
        }, i * 600); // 0.3초씩 간격을 두고 생성
      }
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.7) {
        createShootingStarGroup();
      }
    }, 2000); // 간격도 조금 늘림

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
