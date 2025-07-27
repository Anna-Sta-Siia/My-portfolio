import Header from '../../components/Header'
import MedallionReveal from "../../components/MedallionReveal";
import Footer from '../../components/Footer';
import styles from './Accueil.module.css';

export default function Accueil (){
    return(
    <>
    <Header/>
    <section className={styles.accueil}>
    <MedallionReveal/>
    </section>
    <Footer/>
    </> 
    )
}
