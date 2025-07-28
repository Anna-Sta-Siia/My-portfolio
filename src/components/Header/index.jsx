import { useUI } from '../../context/UIContext';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Menu from '../Menu';
import menuEn from '../../assets/traduction/menu/menu.en.json';
import menuFr from '../../assets/traduction/menu/menu.fr.json';
import menuRu from '../../assets/traduction/menu/menu.ru.json';

const labels = { en: menuEn, fr: menuFr, ru: menuRu };

export default function Header() {
  // récupère theme/lang + setters
  const { theme, setTheme, language, setLanguage } = useUI();
   const label = labels[language] || labels.en;
const logoText = language === 'ru' ? 'Анастасия Р. ' : 'Anastasia R.';
  return (
    <header className={styles.header}>
      <Link to="/" className={`${styles.logo} logo`}>
        {logoText}
      </Link>
      <Menu/>
      <div className={styles.controls}>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          aria-label="Select language"
          className={styles.option}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
        </select>
        <button>
      <Link to="/cv" className={`${styles.logo} logo`}>
        {language === 'en' ? 'Resume' : label.cv}
      </Link>
    </button>
      </div>
    </header>
  );
}
