"use client";
import styles from "../styles/Footer.module.css";
import { PhoneCall, MailPlus, MapPin } from "lucide-react";
import { Instagram, Facebook } from "@deemlol/next-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Contacts */}
     {/* Top Contacts */}
<div className={styles.top}>
  <div>
    <h2 style={{ marginBottom: "8px", fontSize: "16px", opacity: 0.9 }}>Kigali Address</h2>
    <a href="tel:+250792402359" className={styles.contactItem}>
      <PhoneCall />
      <span>(+250) 792 402 359</span>
    </a>

    <a href="mailto:contact@banguissa-store.com" className={styles.contactItem}>
      <MailPlus />
      <span>contact@banguissa-store.com</span>
    </a>

    <a
      href="https://maps.app.goo.gl/8Yg7uKHXVN8cwAsw7"
      target="_blank"
      className={styles.contactItem}
    >
      <MapPin />
      <span>Kicukiro, Kigali, Rwanda</span>
    </a>
  </div>

  <div>
    <h2 style={{ marginBottom: "8px", fontSize: "16px", opacity: 0.9 }}>Guangzhou Address</h2>
    <a
      href="#"
      target="_blank"
      className={styles.contactItem}
    >
      <MapPin />
      <span>
        陈 — 18588632856  
        广东省广州市白云区  
        棠溪打铁基鸭乸塘新街  
        好运来超市斜对面  
        时尚赏色 Stephane
      </span>
    </a>
  </div>
</div>


      {/* Main Links */}
      <div className={styles.links}>
        <div>
          <h1>About</h1>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h1>Company</h1>
          <ul>
            <li><a href="#">Certificate</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div>
          <h1>Resources</h1>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h1>Social</h1>
          <div className={styles.social}>
            <a href="https://www.facebook.com/profile.php?id=61576577405576" target="_blank"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/banguissastore/" target="_blank"><Instagram size={24} /></a>


          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Banguissa Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
