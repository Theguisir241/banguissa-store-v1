import Image from "next/image";
import  styles from "../styles/Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles[`nav-container`]}>
      <Image src={"/banguissa-store.png"} width={100} height={100}/> 
      <ul className={styles["menu-items"]}>
        <li>Services</li>
        <li>Products</li>
        <li>Gallery</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
