"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour rendre la navbar transparente
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: "0%" },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`${styles["nav-container"]} ${scrolled ? styles.scrolled : ""}`}
    >
      <Link href="/">
        <Image
          className={styles["logo"]}
          src="/banguissa-store.png"
          alt="banguissa-store-logo"
          width={100}
          height={90}
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>

      {/* Menu desktop */}
      <ul className={styles["menu-items"]}>
        <li><Link href="#hero">Acceuil</Link></li>
        <li><Link href="#about">A Propos</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#gallery">Gallerie</Link></li>
        <li><Link href="#quote">Devis</Link></li>
      </ul>

      {/* Hamburger button */}
      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        />
      </div>

      {/* Menu mobile */}
      <motion.div
        className={styles.mobileMenu}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        transition={{ type: "tween", duration: 0.4 }}
      >
        {/* Bouton de fermeture */}
        <button
          className={styles.closeMenu}
          onClick={() => setOpen(false)}
        >
          X
        </button>

        <motion.ul className={styles.mobileList}>
          {["about", "services", "gallery", "quote"].map((item, i) => (
            <motion.li
              key={item}
              variants={linkVariants}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setOpen(false)}
            >
              <Link href={`#${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
}
