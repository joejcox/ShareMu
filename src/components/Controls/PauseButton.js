import { AiFillPauseCircle } from "react-icons/ai";
import styles from "./Controls.module.scss";

const PlayButton = ({ click }) => {
  return (
    <button className={`${styles.button} ${styles.pauseBtn}`} onClick={click}>
      <AiFillPauseCircle />
    </button>
  );
};

export default PlayButton;
