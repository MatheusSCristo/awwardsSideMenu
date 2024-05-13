import { motion } from "framer-motion";
import { Links } from "./data";
import styles from "./style.module.scss";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.65,
      opacity: { duration: 0.35 },
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
        duration: 0.65,
        opacity: { duration: 0.35 },
        ease: [0.215, 0.61, 0.355, 1],
      },
    //   translateY:-100,
    //   translateX:100,
      rotateX:90
  },
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => (
          <div className={styles.linkContainer} key={link.id}>
            <motion.div
              custom={i}
              variants={perspective}
              animate="enter"
              initial="initial"
              exit="exit"
            >
              <a href={link.url}>{link.title}</a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
