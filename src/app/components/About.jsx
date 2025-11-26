"use client";

import styles from "../styles/About.module.css"
import Button from "./Button.jsx";
import { BadgeCheck, Plane } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    <>
    <section className={styles.aboutSection} id="about">
      
  {/* Colonne Gauche : Images */}
  <div className={styles.imageCol}>
    <div className={styles.imageContainer}>
      
      {/* Image Principale */}
      <ScrollAnimation animation="fade" duration={1}>
        <div className={styles.mainImageWrapper}>
          <Image
            src={imagePrincipale}
            alt="Deux partenaires de Banguissa Store se serrant la main après inspection."
            width={largeurMain}
            height={hauteurMain}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.mainImage}
          />
        </div>
      </ScrollAnimation>

      {/* Image Secondaire */}
      <ScrollAnimation animation="fade" delay={0.3} duration={1}>
        <div className={styles.subImageWrapper}>
          <Image
            src={imageSecondaire}
            alt="Vue aérienne d'un employé vérifiant un chargement de marchandise."
            width={largeurSub}
            height={hauteurSub}
            sizes="(max-width: 768px) 50vw, 25vw"
            className={styles.subImage}
          />
        </div>
      </ScrollAnimation>

    </div>
  </div>

  {/* Colonne Droite : Texte */}
  <div className={styles.contentCol}>

    {/* Subtitle */}
    <ScrollAnimation animation="slideUp" duration={0.8}>
      <h6 className={styles.subtitle}>À PROPOS DE NOUS</h6>
    </ScrollAnimation>

    {/* Main Title */}
    <ScrollAnimation animation="slideUp" delay={0.2} duration={0.9}>
      <h2 className={styles.title}>Notre Approche de l'Inspection et du Contrôle Qualité</h2>
    </ScrollAnimation>

    {/* --- POINT CLÉ 1 --- */}
    <div className={styles.keyPoint}>

      {/* Icon Animation */}
      <ScrollAnimation animation="fade-Right" duration={1}>
        <div className={styles.icon}>
          <BadgeCheck width={80} height={80} color="#f4ca54" />
        </div>
      </ScrollAnimation>

      {/* Text Animation */}
      <ScrollAnimation animation="fade-Left" delay={0.2} duration={1}>
        <div>
          <h4 className={styles.keyTitle}>Contrôle Qualité & Inspection :</h4>
          <p className={styles.keyDescription}>
            Nos équipes sont vos yeux en Chine. Nous intervenons directement à la
            source pour garantir que vos marchandises répondent strictement à vos 
            spécifications avant l'envoi vers le Gabon et le Rwanda.
          </p>
        </div>
      </ScrollAnimation>

    </div>

    {/* --- POINT CLÉ 2 --- */}
    <div className={styles.keyPoint}>

      {/* Icon Animation */}
      <ScrollAnimation animation="fade-Right" duration={1}>
        <div className={styles.icon}>
          <Plane width={80} height={80} color="#f4ca54" />
        </div>
      </ScrollAnimation>

      {/* Text Animation */}
      <ScrollAnimation animation="fade-Left" delay={0.2} duration={1}>
        <div>
          <h4 className={styles.keyTitle}>Logistique Simplifiée & Envoi Sécurisé :</h4>
          <p className={styles.keyDescription}>
            Nous gérons l'ensemble du fret et des douanes. Nous sous-traitons avec 
            des partenaires fiables comme JFI Cargo, Afrinna et Yarnel Cargo pour 
            un acheminement direct et sécurisé vers Libreville, Port-Gentil et Kigali.
          </p>
        </div>
      </ScrollAnimation>

    </div>

    {/* CTA Button */}
    <ScrollAnimation animation="slideUp" delay={0.3} duration={1}>
      <Button href="/devis">Demander un Devis</Button>
    </ScrollAnimation>

  </div>

</section>

       {/* --- SECTION ANIMATION FIABILITÉ --- */}
<div className={styles.animations}>
  
  <div className={styles.animText}>
        <ScrollAnimation animation="slideUp" delay={0.3} duration={1}>
         <h1>Fiabilité</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideDown" delay={0.2} duration={1}>
           <p>
      Banguissa Store fonde chacune de ses opérations sur la confiance, la transparence  
      et l’engagement, en plaçant la satisfaction du client au centre de ses priorités.
      Nous mettons un point d’honneur à offrir un service rapide et réactif, avec un support
      client disponible pour répondre à chaque question ou besoin dans les plus brefs délais.
      Chaque étape de notre processus — de l’achat à la livraison finale — est pensée pour
      garantir efficacité, qualité et fluidité, afin que nos clients bénéficient d’une expérience
      professionnelle, sécurisée et entièrement transparente.
       </p>
        </ScrollAnimation>
   
  </div>

  <div className={styles.animVisual}>
    <DotLottieReact
      src="https://lottie.host/c0718123-d96d-4d5a-a696-e542d40ac7d4/vAR8ZIYvjq.lottie"
      loop
      autoplay
      className={styles.myanimation}
    />
  </div>
  <ScrollAnimation animation="slideUp" delay={0.3} duration={1}>
      <Button href="/devis">Demander un Devis</Button>
    </ScrollAnimation>

</div>

        </>
  );
};

export default About