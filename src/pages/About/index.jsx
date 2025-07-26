import portrait from '../../assets/AnastasiaGirard.png';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
        <img src={portrait} alt="Anastasia Girard" className={styles.portrait}/>
        <div className={styles.text}>
          <h2>About Me</h2>
                   <p>
            Привет! Я — Анастасия, интегратор веба. 
            Люблю создавать красивый и живой интерфейс, вдохновлённый природой и русским фольклором.</p>
             <p>Здесь ты найдёшь мои проекты, навыки и услуги, а также сможешь связаться со мной через форму.
          </p>
        </div>
    </section>
  );
}
