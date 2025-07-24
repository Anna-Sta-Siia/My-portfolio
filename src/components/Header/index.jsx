// src/components/Header/index.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setLanguage } from '../../features/ui/uiSlice';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const dispatch = useDispatch();
  const theme    = useSelector(s => s.ui.theme);
  const lang     = useSelector(s => s.ui.language);

  return (
    <header className={styles.header}>
      {/* Logo cliquable */}
      <Link to="/" className={`${styles.logo} logo`}>Anastasia Girard</Link>

      <div className={styles.controls}>
        {/* Toggle thème */}
        <button
          onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Sélecteur de langue */}
        <select
          value={lang}
          onChange={e => dispatch(setLanguage(e.target.value))}
          aria-label="Select language"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </header>
  );
}
