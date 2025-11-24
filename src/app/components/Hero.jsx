import styles from "../styles/Hero.module.css"
import { BadgeCheck, Warehouse, Plane, Ship } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <h1>BANGUISSA Store</h1>
        <h2>Votre partenaire d’achat fiable en Chine.</h2>
        <h3>Nous contrôlons la qualité, négocions avec les fournisseurs et assurons un suivi complet jusqu’à la livraison.</h3>

        <div className={styles["hero-links"]}>
          <a href="" className={styles["hero-link-1"]}>Découvrir nos services ➜</a>
          <a href="">Obtenir un devis ➜</a>
        </div>
        <div className={styles["illustrations-container"]}>
          <div className={styles["icons-area-1"]}>
            <BadgeCheck width={80} height={90} color="#ffffff"/>
            <div className={styles["text-area"]}>
            <h2>Inspection & Contrôle </h2> 
            <p>Nous vérifions chaque détail pour garantir des produits conformes, fiables et prêts à être vendus.</p>
            </div>
          </div>
          <div className={styles["icons-area-2"]}>
            <Warehouse  width={80} height={90}  color="#ffffff"/>
            <div className={styles["text-area"]}>
            <h2>Entreposage Sécurisé</h2>
            <p>Vos marchandises sont recus dans nos entrepôts en chine contrôlés et surveillés jusqu’à leur expédition.</p> 
            </div>
          </div>
          <div className={styles["icons-area-3"]}>
            <Plane width={80} height={90} color="#ffffff"/>
           <div className={styles["text-area"]}>
            <h2>Livraison Aérienne</h2> 
            <p>Optez pour un transport rapide, suivi et prioritaire pour toutes vos commandes depuis la Chine.</p>
            </div>
            
          </div>
          <div className={styles["icons-area-3"]}>
            <Ship width={80} height={90} color="#ffffff"/>
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
