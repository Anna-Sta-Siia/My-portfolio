import { useRef } from 'react';
import { useUI } from '../../context/UIContext';
import Petal from '../Petal';
import styles from './Menu.module.css';

import menuEn from '../../assets/traduction/menu/menu.en.json';
import menuFr from '../../assets/traduction/menu/menu.fr.json';
import menuRu from '../../assets/traduction/menu/menu.ru.json';

const labels = { en: menuEn, fr: menuFr, ru: menuRu };

const items = [
  { key: 'projects', path: '/projects', color: '#F8BBD0' },
  { key: 'services', path: '/services', color: '#FFF9C4' },
  { key: 'formation', path: '/formation', color: '#FFCC80' },
  { key: 'contact', path: '/contact', color: '#B0BEC5' },
  { key: 'linkedin', path: 'https://www.linkedin.com/in/anastasia-rabynina-139992312/', color: '#81D4FA' },
  { key: 'github', path: 'https://github.com/Anna-Sta-Siia', color: '#D1C4E9' },
  { key: 'cv', path: '/cv', color: '#bbf8c5' }
];

export default function Menu() {
  const { language } = useUI();
  const translated = labels[language] || labels.en;
  const sliderRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth / 2;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.arrow} onClick={() => scroll('left')}>◀</button>
      <div className={styles.slider} ref={sliderRef}>
        {items.map(({ key, path, color }) => (
          <Petal
            key={key}
            name={translated[key] || key}
            path={path}
            color={color}
          />
        ))}
      </div>
      <button className={styles.arrow} onClick={() => scroll('right')}>▶</button>
    </div>
  );
}
