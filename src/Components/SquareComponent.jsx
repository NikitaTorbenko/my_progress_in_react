// import { useState } from "react";
import { useState } from "react";
import styles from "./SquareComponent.module.css";

const SquareComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const eventToChangeSqueres = () => setIsVisible(!isVisible)

  return (
    <div className={styles.SquareComponent}>
      <div
        onClick={() => eventToChangeSqueres()}
        className={`${isVisible ? styles.dBlock : styles.dNone} ${styles.red}`}
      ></div>
      <div
        onClick={eventToChangeSqueres}
        className={`${!isVisible ? styles.dBlock : styles.dNone} ${styles.green}`}
      ></div>
    </div>
  );
};

export default SquareComponent;
