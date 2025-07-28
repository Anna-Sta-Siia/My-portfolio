import Petal from '../Petal';
import styles from './Menu.module.css'
import { useUI } from '../../context/UIContext';

import menuEn from '../../assets/traduction/menu/menu.en.json';
import menuFr from '../../assets/traduction/menu/menu.fr.json';
import menuRu from '../../assets/traduction/menu/menu.ru.json';

const labels = { en: menuEn, fr: menuFr, ru: menuRu };

const items = [
  { key: 'projects',  path: '/projects',  color: '#F8BBD0' },
  { key: 'services',  path: '/services',  color: '#FFF9C4' },
  { key: 'formation', path: '/formation', color: '#FFCC80' },
  { key: 'contact',   path: '/contact',   color: '#B0BEC5' },
  { key: 'LinkedIn',   path: 'https://www.linkedin.com/in/anastasia-rabynina-139992312/',   color: '#81D4FA' },
  { key: 'GitHub',   path: '/contacthttps://github.com/Anna-Sta-Siia',   color: '#D1C4E9' },
  { key: 'CV',  path: '/cv',  color: '#bbf8c5' }
];

export default function Menu() {
  const { language } = useUI();
  const translated = labels[language] || labels.en;

  return (
    <nav className={styles.nav}>
      {items.map(({ key, path, color }) => (
        <Petal key={key} name={translated[key]} path={path} color={color} />
      ))}
    </nav>
  );
}
