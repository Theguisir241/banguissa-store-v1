'use client'
import styles from "../styles/Hero.module.css"
import { BadgeCheck, Warehouse, Plane, Ship } from "lucide-react";
export default function Hero() {
  return (
    <section id="hero" className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <h1>BANGUISSA Store</h1>
        <h2>Votre partenaire d’achat fiable en Chine.</h2>
        <h3>Nous contrôlons la qualité, négocions avec les fournisseurs et assurons un suivi complet jusqu’à la livraison.</h3>

        <div className={styles["hero-links"]}>
          <a href="#services" className={styles["hero-link-1"]}>Découvrir nos services ➜</a>
          <a href="#quote">Obtenir un devis ➜</a>
        </div>
        <div className={styles["illustrations-container"]}>
          <div className={styles["icon-item"]}>
            <BadgeCheck width={80} height={90}/>
            <div className={styles["text-area"]}>
            <h2>Inspection & Contrôle </h2> 
            <p>Nous vérifions chaque détail pour garantir des produits conformes, fiables et prêts à être vendus.</p>
            </div>
          </div>
          <div className={styles["icon-item"]}>
            <Warehouse  width={80} height={90} />
            <div className={styles["text-area"]}>
            <h2>Entreposage Sécurisé</h2>
            <p>Vos marchandises sont recus dans nos entrepôts en chine contrôlés et surveillés jusqu’à leur expédition.</p> 
            </div>
          </div>
          <div className={styles["icon-item"]}>
            <Plane width={80} height={90} />
           <div className={styles["text-area"]}>
            <h2>Livraison Aérienne</h2> 
            <p>Optez pour un transport rapide, suivi et prioritaire pour toutes vos commandes depuis la Chine.</p>
            </div>
            
          </div>
          <div className={styles["icon-item"]}>
            <Ship width={80} height={90}/>
           <div className={styles["text-area"]}>
            <h2>Livraison Maritime</h2> 
            <p>Optez pour un transport rapide, suivi et prioritaire pour toutes vos commandes depuis la Chine.</p>
            </div>
            
          </div>

        </div>
        </div>

    
 

    </section>
  );
}
