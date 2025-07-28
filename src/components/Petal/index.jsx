import { Link } from 'react-router-dom';
import styles from './Petal.module.css';

export default function Petal({ name, path, color }) {
  const isExternal = path.startsWith('http');

  const style = { '--bg': color };

  return isExternal ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.petal}
      style={style}
    >
      {name}
    </a>
  ) : (
    <Link
      to={path}
      className={styles.petal}
      style={style}
    >
      {name}
    </Link>
  );
}
