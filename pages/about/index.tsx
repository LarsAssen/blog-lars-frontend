import Image from "next/image";
import Link from "next/link";
import { Award, Book, Heart, Users, MapPin } from "react-feather";
import { Facebook, Instagram, Twitter, Linkedin } from "react-feather";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import Button from "@/components/UI/Button";
import Layout from "@/components/layout";
import SEO from "@/components/SEO/SEO";

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://twitter.com", icon: Twitter },
  { href: "https://linkedin.com", icon: Linkedin },
];

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Discover the person behind this blog: Lars Assen."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.pageBackground}
      >
        <header className={styles.header}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={styles.container}
          >
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.subtitle}>
              Ultrarunner, Philosopher, Lifelong Learner
            </p>
          </motion.div>
        </header>

        <motion.main
          className={`${styles.main} ${styles.container}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div className={styles.grid}>
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/about.jpg"
                alt="Lars Assen"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className={styles.quickFacts}
            >
              <h2 className="title">Quick Facts</h2>
              <ul className="list">
                {/* <li className="listItem">
                <MapPin className="icon" />
                <span>100+ ultramarathons completed</span>
              </li>
              <li className="listItem">
                <Award className="icon" />
                <span>3-time Western States 100 finisher</span>
              </li>
              <li className="listItem">
                <Book className="icon" />
                <span>Author of "Running Beyond Limits"</span>
              </li> */}
                <li className="listItem">
                  <Heart className="icon" />
                  <span>Passionate about mindfulness and self-improvement</span>
                </li>
                {/* <li className="listItem">
                <Users className="icon" />
                <span>Founder of UltraRunner's Community</span>
              </li> */}
              </ul>
            </motion.div>
          </motion.div>

          <motion.section
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.section}
          >
            <h2 className="title">My Journey</h2>
            <p className="text">
              My ultrarunning journey began over a decade ago when I stumbled
              upon a trail race in the mountains. What started as a challenge to
              push my limits quickly turned into a lifelong passion.
            </p>
          </motion.section>

          <motion.section
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.section}
          >
            <h2 className="title">Philosophy</h2>
            <p className="text">
              I believe that ultrarunning is more than just a sport – it's a
              journey of self-discovery and personal growth.
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.section}
          >
            <h2 className="title">What I Offer</h2>
            <p className="text">
              Through this blog and my coaching services, I share the knowledge
              and insights I've gained over years of ultrarunning.
            </p>
            <div className={styles.buttons}>
              <Link href="/blog">
                <Button className="primary">Read My Blog</Button>
              </Link>
              <Link href="/coaching">
                <Button className="outline">Explore Coaching</Button>
              </Link>
            </div>
          </motion.section>
        </motion.main>

        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map(({ href, icon: Icon }) => (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={href}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="icon" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default AboutPage;
