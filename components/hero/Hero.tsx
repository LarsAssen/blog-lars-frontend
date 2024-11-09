import type React from "react";
import Button from "@/components/UI/Button";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1: MotionValue = useTransform(scrollY, [0, 300], [0, -100]);
  const y2: MotionValue = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className={styles.heroSection}>
      <motion.div
        className={styles.backgroundImage}
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/devvbeebq/image/upload/v1715929994/hero_5613a177b7.jpg')",
          y: y1,
        }}
      />
      <motion.div className={styles.backgroundOverlay} style={{ y: y2 }} />
      <div className={styles.heroContent}>
        <h1>
          Embrace Endurance. Cultivate Resilience.
          <br />
          Grow with Purpose.
        </h1>
        <p>
          Discover insights and practices for a life of meaning and strength,
          from ultra running to mindful living.
        </p>
        <div className={styles.heroButtons}>
          <Link href="#courses">
            <Button size="large">Explore Courses</Button>
          </Link>
          <Link href="#blog-topics">
            <Button size="large" variant="primary">
              Read Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
