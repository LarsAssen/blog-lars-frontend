import Layout from "@/components/layout";
import type React from "react";
import SEO from "@/components/SEO/SEO";
import { Twitter, Linkedin, Instagram, Facebook } from "react-feather";
import styles from "./About.module.scss";
import AnimatedBackground from "@/components/animatedbackground/AnimatedBackground";

const AboutPage: React.FC = () => (
  <Layout>
    <AnimatedBackground />
    <SEO
      title="About"
      description="Discover the person behind this blog: Lars Assen."
    />
    <div className={styles.container}>
      <div className={styles.aboutSection}>
        <div className={styles.imageColumn}>
          <img
            src="/about.jpg"
            alt="Lars Assen"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textColumn}>
          <h1 className={styles.heading}>Hello! I'm Lars Assen 🌍</h1>
          <p className={styles.paragraph}>
            Ultra runner, health nut, mindfulness seeker, and a lifelong lover
            of personal growth. I've built this space to share everything that
            keeps me inspired, healthy, and always ready to push the limits of
            mind and body.
          </p>
          <p className={styles.paragraph}>
            <span className={styles.highlight}>Mission:</span> To inspire,
            empower, and fuel others to find purpose, health, and adventure in
            their lives. This site is all about wellness journeys and meaningful
            insights—it's a place to learn, share, and grow.
          </p>
          <p className={styles.paragraph}>
            Whether you're here for running tips, wellness hacks, or personal
            growth stories, I hope my experiences will resonate with you. Let’s
            make life a fulfilling adventure!
          </p>
          <div className={styles.socialSection}>
            <a
              href="https://twitter.com"
              target="_blank"
              className={styles.icon}
            >
              <Twitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className={styles.icon}
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className={styles.icon}
            >
              <Instagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className={styles.icon}
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
