import { Link } from 'react-router-dom';
import styles from './Petal.module.css';

export default function Petal({ name, path, color }) {
  return (
    <Link
      to={path}
      className={styles.petal}
      style={{ '--bg': color }}
    >
      {name}
    </Link>
  );
}
