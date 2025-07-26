import Petal from '../Petal';
import styles from './Menu.module.css';

const items = [
  { name: 'Projects',  path: '/projects',  color: '#F8BBD0' },
  { name: 'Services',  path: '/services',  color: '#FFF9C4' },
  { name: 'Formation', path: '/formation', color: '#FFCC80' },
  { name: 'Contact',   path: '/contact',   color: '#CE93D8' },
];

export default function Menu() {
  return (
    <nav className={styles.nav}>
      {items.map(i => (
        <Petal key={i.name} {...i} />
      ))}
    </nav>
  );
}
