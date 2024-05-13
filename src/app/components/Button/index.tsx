import { motion } from "framer-motion";
import styles from "./style.module.scss";

type propsType = {
  isActive: boolean;
  toggleMenu: () => void;
};

const Button = ({ isActive, toggleMenu }: propsType) => {
  return (
    <div className={styles.button} onClick={toggleMenu}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5 ,ease:[0.76,0,0.24,1]}}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu"/>
        </div>
        <div className={styles.el}>
          <PerspectiveText label="Close"/>
        </div>
      </motion.div>
    </div>
  );
};

export default Button;


const PerspectiveText = ({label}:{label:string}) => {
  return(
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}