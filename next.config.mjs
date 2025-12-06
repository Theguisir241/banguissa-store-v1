/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Ajoutez la valeur 80 à la liste des qualités autorisées
    qualities: [75, 80],

    }
};

export default nextConfig;
