import styles from './Skills.module.css';

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js',
  'Redux Toolkit', 'TypeScript', 'Git & GitHub',
  'Framer Motion', 'React Hook Form'
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Compétences</h2>
      <div className={styles.grid}>
        {skills.map(skill => (
          <span key={skill} className={styles.badge}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
