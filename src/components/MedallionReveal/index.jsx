import { motion } from 'framer-motion';
import medallionBack from '../../assets/medaillon_back.webp';
import portrait from '../../assets/AnastasiaGirard.png';
import About from '../../pages/About'; // ← вот он!
import Header from '/Header';
import Footer from '/Footer';
import styles from './MedallionReveal.module.css';

export default function MedallionReveal({ onFinish }) {
  return (
    <div className={styles.overlay}>
      <Header/>
      <div className={styles.medallionWrapper}>
        <motion.div
          className={styles.halfShell}
          initial={{ rotateY: 0, y: 0 }}
          animate={{ rotateY: -160, y: -20 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        >
          <img src={medallionBack} className={styles.lid} alt="medallion lid" />
          <img src={portrait} className={styles.backface} alt="portrait inside" />
        </motion.div>

        <div className={styles.about}>
          <About />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
