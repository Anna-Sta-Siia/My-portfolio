import { useUI } from '../../context/UIContext';
import { motion } from 'framer-motion';
import medallionBack from '../../assets/images/medaillon_back.webp';
import styles from './MedallionReveal.module.css';
import portrait from '../../assets/images/AnastasiaGirard.png';
import aboutFr from '../../assets/traduction/about/about.fr.json';
import aboutEn from '../../assets/traduction/about/about.en.json';
import aboutRu from '../../assets/traduction/about/about.ru.json';
import About from '../About';

export default function MedallionReveal() {
  const { language } = useUI();

  const translations = {
    fr: aboutFr,
    en: aboutEn,
    ru: aboutRu
  };

  const about = translations[language] || aboutEn;

   return (
    <div className={styles.overlay}>
  <motion.div
    className={styles.medallion}
    initial={{ rotateY: 0 }}
    animate={{ rotateY: -180 }}
    transition={{ duration: 1.8, ease: 'easeInOut' }}
  >
    <div className={styles.front}>
      <img src={medallionBack} alt={about.alt.medallionBack} />
    </div>
    <div className={styles.back}>
      <img src={portrait} alt={about.alt.portrait} />
    </div>
  </motion.div>
  <About/>
</div>)

}
 