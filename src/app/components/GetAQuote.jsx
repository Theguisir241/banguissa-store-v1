"use client";
import { useState } from "react";
import styles from "../styles/GetAQuote.module.css";
import Button from "./Button";

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email : "",
    age: "",
    type: "entrepreneur",
    productLink: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Ici tu peux connecter à un backend ou envoyer via email
    alert("Merci ! Votre demande de devis a été envoyée.");
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      phone:"",
      type: "entrepreneur",
      productLink: "",
      additionalInfo: "",
    });
  };

  return (
    <section className={styles.quoteSection}>
      <div className={styles.container}>
        {/* Titre */}
        <h2 className={styles.title}>Obtenez un devis pour vos achats en Chine</h2>

        {/* Explication */}
        <p className={styles.description}>
          Remplissez ce formulaire afin que nous puissions estimer le coût et vous guider pour l'achat de vos produits en Chine.  
          Plus vous fournissez d'informations précises (type de produit, quantité, lien du produit, etc.), plus votre devis sera exact.
        </p>

        {/* Formulaire */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.inputField}


            />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.inputField}


            />
            <input
              type="number"
              name="age"
              placeholder="Âge"
              value={formData.age}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.row}>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className={styles.selectField}
            >
              <option value="entrepreneur">Entrepreneur</option>
              <option value="company">Compagnie</option>
              <option value="student">Étudiant</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div className={styles.row}>
            <input
              type="url"
              name="productLink"
              placeholder="Lien vers votre produit (Alibaba, Taobao, etc.) ou peut importe le site"
              value={formData.productLink}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.row}>
            <textarea
              name="additionalInfo"
              placeholder="Autres informations utiles pour le devis"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className={styles.textareaField}
            />
          </div>

          <div className={styles.submitButton}>
            <Button type="submit">Envoyer ma demande</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
