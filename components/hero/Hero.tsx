import React from "react";
import Button from "@/components/UI/Button";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.scss";

interface HeroProps {
  y1: MotionValue<number>;
  y2: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ y1, y2 }) => {
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
          Ultrarunning, Philosophy, <br />
          and Self-Improvement
        </h1>
        <p>
          Join me on a journey of physical endurance, mental resilience, and
          personal growth.
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
