import perfil from "../assets/img/perfil.webp";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.perfil} src={perfil} alt="Luis Paradela" />
      <div>
        <p className={styles.title}>Luis Paradela</p>
        <p className={styles.subTitle}>Junior Web Developer</p>
      </div>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/luis-paradela-delgado-a729a0106/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/Paradels"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaGithub size={28} />
        </a>
      </div>
    </header>
  );
}

export default Header;
