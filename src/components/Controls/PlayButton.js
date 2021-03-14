import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./Controls.module.scss";

const PlayButton = ({ click }) => {
  return (
    <button className={`${styles.button} ${styles.playBtn}`} onClick={click}>
      <AiFillPlayCircle />
    </button>
  );
};

export default PlayButton;
