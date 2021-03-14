import { RiUploadCloud2Fill } from "react-icons/ri";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.site_header}>
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        ShareMu
      </a>
      <a href="/" className={styles.upload_button}>
        <RiUploadCloud2Fill /> Upload
      </a>
    </div>
  </header>
);

export default Header;
