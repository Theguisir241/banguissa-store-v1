import { Lato } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/Footer";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"], // normal et bold
    variable: "--font-lato",
});

// --- CONFIGURATION DU VIEWPORT (Pour themeColor) ---
export const viewport = {
    themeColor: "#f4ca54", 
};

export const metadata = {
    
    // 1. URL DE BASE et SEO
    metadataBase: new URL("https://Banguissa-store.online"),
    title: "Banguissa Store | Sourcing, Contrôle Qualité et Logistique en Chine",
    description: "Votre partenaire d’achat fiable en Chine. Nous assurons le sourcing, le contrôle qualité et la logistique complète pour la livraison en Afrique (Libreville, Port-Gentil, Kigali). Obtenez un devis rapide !",
    keywords: ["Banguissa Store", "achat Chine", "sourcing Chine", "contrôle qualité", "logistique Afrique", "importation Chine"],
    
    // 2. ICÔNES (FAVICON, Apple Touch, Android)
    icons: {
        // Icône principale: On privilégie le format SVG pour la mise à l'échelle
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            // Fallback PNG et ICO
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' }, 
        ],
        // Icône pour les appareils Apple (iOS)
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
        ],
        // Icônes spécifiques pour Android / PWA
        other: [
            { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
        ]
    },
    
    // 3. MANIFESTE WEB (Android, PWA)
    manifest: '/site.webmanifest',
    
    // 4. OPEN GRAPH (Facebook, LinkedIn)
    openGraph: {
        title: "Banguissa Store : L'Import-Export Simplifié depuis la Chine",
        description: "Sourcing, inspection, négociation et livraison sécurisée de vos produits depuis la Chine vers l'Afrique.",
        url: "https://Banguissa-store.online", 
        siteName: 'Banguissa Store',
        images: [
            {
                url: '/images/open-graph-image.jpg', 
                width: 1200,
                height: 630,
                alt: 'Logo Banguissa Store et services',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    
    // 5. TWITTER (X)
    twitter: {
        // CORRECTION: 'summary_large_image' est le type de carte, pas un chemin d'image.
        card: 'summary_large_image', 
        title: 'Banguissa Store | Achat et Livraison depuis la Chine',
        description: 'Le partenaire de confiance pour sécuriser vos importations en Afrique.',
        creator: '@Banguissastore',
        images: ['/diverse-employees-analyzing-inventory-list-laptop-counting-products-boxes-storage-room-shelves-young-people-using-device-work-stock-logistics-delivery-service.jpg'], 
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr"> 
            <body className={lato.variable}>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}