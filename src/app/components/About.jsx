"use client";

import styles from "../styles/About.module.css"
import Button from "./Button.jsx";
import { BadgeCheck, Plane } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image"
import { use } from "react";
// components/About.js


const About = () => {
  // Remplacez ces chemins par les chemins réels de vos images (elles doivent être dans le dossier /public)
  const imagePrincipale = '/group-trained-workers-using-depot-equipment-working-packaging-department-with-packages-people-using-merchandise-boxes-pack-ship-products-industrial-stock-distribution.jpg';
  const imageSecondaire = '/happy-delivery-man-holding-packages.jpg';
  
  // Dimensions originales de l'image principale pour next/image
  const largeurMain = 800; 
  const hauteurMain = 600;

  // Dimensions originales de l'image secondaire pour next/image
  const largeurSub = 500; 
  const hauteurSub = 300; 

  return (
    <section className={styles.aboutSection}>
      
      {/* Colonne Gauche: Images avec Superposition */}
      <div className={styles.imageCol}>
        <div className={styles.imageContainer}>
          
          {/* Image Principale (Grand rectangle) */}
          <div className={styles.mainImageWrapper}>
            <Image
              src={imagePrincipale}
              alt="Deux partenaires de Banguissa Store se serrant la main après inspection."
              width={largeurMain}
              height={hauteurMain}
              // 'layout="responsive"' est l'approche moderne pour gérer les images fluides
              sizes="(max-width: 768px) 100vw, 50vw" 
              className={styles.mainImage}
            />
          </div>

          {/* Image Secondaire (Petit carré superposé) */}
          <div className={styles.subImageWrapper}>
            <Image
              src={imageSecondaire}
              alt="Vue aérienne d'un employé vérifiant un chargement de marchandise."
              width={largeurSub}
              height={hauteurSub}
              // 'layout="responsive"' ou 'layout="fixed"' dépend du style exact, 
              // 'responsive' est souvent meilleur.
              sizes="(max-width: 768px) 50vw, 25vw"
              className={styles.subImage}
            />
          </div>
          
        </div>
      </div>

      {/* Colonne Droite: Contenu Textuel */}
      <div className={styles.contentCol}>
        
        {/* Titre Secondaire (h6) */}
        <h6 className={styles.subtitle}>À PROPOS DE NOUS</h6>
        
        {/* Titre Principal (h2) */}
        <h2 className={styles.title}>Notre Approche de l'Inspection et du Contrôle Qualité</h2>
        
        {/* Point Clé 1: Inspection */}
        <div className={styles.keyPoint}>
           <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className={styles.icon}><BadgeCheck width={80} height={80} color="#f4ca54"/></div>
      </ScrollAnimation>
          <ScrollAnimation animation="slideLeft" delay={0.5}>
             <h4 className={styles.keyTitle}>Contrôle Qualité & Inspection :</h4>
          <p className={styles.keyDescription}>
            Nos équipes sont vos yeux en Chine. Nous intervenons directement à la source 
            pour garantir que vos marchandises répondent strictement à vos 
            spécifications avant l'envoi vers le Gabon et le Rwanda.
          </p>
</ScrollAnimation>
         
        </div>

        {/* Point Clé 2: Logistique */}
          <ScrollAnimation animation="slideLeft" delay={0.5}>
          <div className={styles.keyPoint}>
          <div className={styles.icon}><Plane width={80} height={80} color="#f4ca54"/>
        </div>
        </div>
      </ScrollAnimation>
        
          <h4 className={styles.keyTitle}>Logistique Simplifiée & Envoi Sécurisé :</h4>
          <ScrollAnimation animation="slideUp" duration={1}>
            <p className={styles.keyDescription}>
            Nous gérons l'ensemble du fret et des douanes. Nous sous-traitons avec 
            des partenaires fiables comme JFI Cargo, Afrinna, et Yarnel Cargo pour un acheminement direct et sécurisé vers Libreville, Port-Gentil et Kigali.
          </p>
      </ScrollAnimation>
          
        
        
        <Button href="/devis">
        Demander un Devis
        </Button>

      </div>
    </section>
  );
};

export default About