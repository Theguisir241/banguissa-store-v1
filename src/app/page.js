import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur Banguissa Store</h1>
      <p className={styles.subtitle}>Sourcing | Quality Control</p>
    </div>
     </div>
  );
}
