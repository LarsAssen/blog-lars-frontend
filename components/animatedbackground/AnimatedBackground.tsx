import React from "react";
import styles from "./AnimatedBackground.module.scss";

const AnimatedBackground: React.FC = () => {
  const particles = Array.from({ length: 30 });

  return (
    <div className={styles.animatedBackground}>
      {particles.map((_, index) => (
        <div
          key={index}
          className={`${styles.particle} ${
            index % 3 === 0
              ? styles.particleLarge
              : index % 2 === 0
              ? styles.particleMedium
              : styles.particleSmall
          }`}
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
