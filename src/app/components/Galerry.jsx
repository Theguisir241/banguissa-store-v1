"use client";

import Image from "next/image";
import styles from "../styles/Gallery.module.css";
import ScrollAnimation from "./ScrollAnimation";
import Button from "./Button";

export default function Gallery() {
  const images = [
    "/gallery/img-gallery-1.jpg",
    "/gallery/img-gallery-2.jpg",
    "/gallery/img-gallery-3.jpg",
    "/gallery/img-gallery-4.jpg",
    "/gallery/img-gallery-5.jpg",
    "/gallery/img-gallery-6.jpg",
    "/gallery/img-gallery-7.jpg",
    "/gallery/img-gallery-8.jpg",
    "/gallery/img-gallery-9.jpg",
    "/gallery/img-gallery-10.jpg",
    "/gallery/img-gallery-11.jpg",
    "/gallery/img-gallery-12.jpg",
    "/gallery/img-gallery-13.jpeg",
    "/gallery/img-gallery-14.jpeg",
  ];

  return (
    <section className={styles.gallerySection}>

      {/* Titre */}
      <ScrollAnimation animation="slideUp">
        <h2 className={styles.title}>
          Notre <span>Galerie</span>
        </h2>
      </ScrollAnimation>

      {/* MASONRY GRID */}
      <ScrollAnimation animation="fade" duration={1}>
        <div className={styles.masonry}>
          {images.map((src, i) => (
            <div key={i} className={styles.masonryItem}>
              <Image
                src={src}
                alt={`gallery-image-${i + 1}`}
                width={500}
                height={800}
                style={{ width: "100%", height: "auto" }}
                className={styles.masonryImage}
              />
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="zoomIn" duration={0.8} delay={0.2}>
        <div className={styles.ctaWrapper}>
          <Button href="/contact">Contactez nous</Button>
        </div>
      </ScrollAnimation>

    </section>
  );
}
