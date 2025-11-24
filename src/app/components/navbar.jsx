import Image from "next/image";
import  styles from "../styles/Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles[`nav-container`]}>
      <Image className={styles["logo" ]}src={"/banguissa-store.png"} alt="banguissa-store-logo" width={100} height={90}/> 
      <ul className={styles["menu-items"]}>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Request a quote</li>
      </ul>
    </nav>
  );
}
