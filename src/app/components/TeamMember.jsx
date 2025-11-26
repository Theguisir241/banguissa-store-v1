"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import styles from "../styles/Team.module.css";

export default function TeamMember({ name, role, img }) {
  return (
    <ScrollAnimation animation="fadeUp" delay={0.2}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={img} alt={name} width={300} height={300} className={styles.image} />
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </ScrollAnimation>
  );
}
