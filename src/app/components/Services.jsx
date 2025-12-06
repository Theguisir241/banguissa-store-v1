"use client";

import styles from "../styles/Services.module.css";
import ScrollAnimation from "./ScrollAnimation";
import { Plane, PackageCheck, ClipboardCheck, Import } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Achat depuis la Chine",
      description:
        "Nous facilitons vos achats en Chine, en négociant avec des fournisseurs fiables et en sécurisant vos paiements.",
      icon: <Plane size={40} className={styles.icon} />,
    },
    {
      title: "Inspection & Contrôle Qualité",
      description:
        "Nous inspectons vos produits avant expédition pour garantir la qualité et éviter les mauvaises surprises.",
      icon: <ClipboardCheck size={40} className={styles.icon} />,
    },
    {
      title: "Livraison Sécurisée",
      description:
        "Nous assurons l’acheminement vers Libreville, Port-Gentil et Kigali grâce à nos partenaires logistiques fiables.",
      icon: <PackageCheck size={40} className={styles.icon} />,
    },
  ];

  return (
    <>
    <section className={styles.section} id="services">
      <ScrollAnimation animation="fade" duration={1}>
        <h2 className={styles.title}>
          <span>Nos </span>
          <span className={styles.highlight}>Services</span>
        </h2>
  <p className={styles.subtitle}>
    Banguissa Store vous accompagne de l’achat à la livraison sécurisée de vos produits depuis la Chine.
  </p>
</ScrollAnimation>

      <div className={styles.grid}>
        {services.map((service, idx) => (
          <ScrollAnimation
            key={idx}
            animation="slideUp"
            delay={idx * 0.3}
            duration={0.8}
          >
            <div className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
     <dotlottie-wc
  src="https://lottie.host/af3c1db1-45f3-482b-8bfe-c6a442d50bd7/5LgPN7Uuig.lottie"
  autoplay
  loop
></dotlottie-wc>
</>
  );
}
