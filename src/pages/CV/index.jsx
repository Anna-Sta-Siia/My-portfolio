import styles from './CV.module.css';
import backCover from '../../assets/medaillon_back.webp';

export default function CV() {
  return (
    <section className={styles.CV}>
      <div className={styles.text}>
      <h2>Mon CV</h2>
      </div>
      <div className={styles.image}>
      <img src={backCover} alt="Medallion cover" className={styles.cover}></img>
      </div>
    </section>
  );
}
