import type React from "react";
import { useEffect, useState } from "react";
import styles from "./ProgressScroller.module.scss";

const ProgressScroller: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const handleScrollThrottled = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      >
        <span className={styles.progressThumb} />
      </div>
    </div>
  );
};

export default ProgressScroller;
