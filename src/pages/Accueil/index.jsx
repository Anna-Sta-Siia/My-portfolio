import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../../context/UIContext';

import medallionBack from '../../assets/images/medaillon_back.webp';
import portrait from '../../assets/images/AnastasiaGirard.png';
import aboutFr from '../../assets/traduction/about/about.fr.json';
import aboutEn from '../../assets/traduction/about/about.en.json';
import aboutRu from '../../assets/traduction/about/about.ru.json';

import About from '../../components/About';
import styles from './Accueil.module.css';

export default function Accueil({ phase, onFinish }) {
  const { language } = useUI();
  const [flipped, setFlipped] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const translations = { fr: aboutFr, en: aboutEn, ru: aboutRu };
  const about = translations[language] || aboutEn;

  useEffect(() => {
  const alreadyPlayed = sessionStorage.getItem('hasPlayedOnce') === 'true';
  setHasPlayedOnce(alreadyPlayed);

  if (phase === 'medallion' && !alreadyPlayed) {
    setTimeout(() => setFlipped(true), 500);
    setTimeout(() => {
      onFinish?.();
      setHasPlayedOnce(true);
      sessionStorage.setItem('hasPlayedOnce', 'true');
    }, 2500);
  } else if (phase === 'medallion' && alreadyPlayed) {
    onFinish?.(); // уже проиграно — не повторять
  }
}, [phase, onFinish]);

const rotateY =
  phase === 'app' || hasPlayedOnce
    ? -180
    : flipped
    ? -180
    : 0;
  return (
    <section className={styles.accueil}>
      <motion.div
        className={styles.medallion}
        animate={{ rotateY }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      >
        <div className={styles.front}>
          <img src={medallionBack} alt={about.alt.medallionBack} />
        </div>
        <div className={styles.back}>
          <img src={portrait} alt={about.alt.portrait} />
        </div>
      </motion.div>
      <About />
    </section>
  );
}
