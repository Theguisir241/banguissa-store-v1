// --- CORRECTION ET OPTIMISATION DES METADONNÉES ---

export const metadata = {
    
    // 1. CORRECTION DE L'URL DE BASE (metadataBase)
    // Cela permet à Next.js de construire des chemins absolus corrects pour les images sociales.
    metadataBase: new URL("https://Banguissa-store.online"),
    
    // Titre de la page (apparaît dans l'onglet du navigateur et les résultats de recherche)
    title: "Banguissa Store | Sourcing, Contrôle Qualité et Logistique en Chine",
    
    // Description de la page (apparaît sous le titre dans les résultats de recherche)
    description: "Votre partenaire d’achat fiable en Chine. Nous assurons le sourcing, le contrôle qualité et la logistique complète pour la livraison en Afrique (Libreville, Port-Gentil, Kigali). Obtenez un devis rapide !",
    
    // Mots-clés pertinents (Aide Google à comprendre le contexte, bien que moins important qu'avant)
    keywords: ["Banguissa Store", "achat Chine", "sourcing Chine", "contrôle qualité", "logistique Afrique", "importation Chine"],
    
    // NOTE: themeColor a été retiré d'ici et déplacé dans "viewport" (voir ci-dessous)
    
    // --- 2. OPEN GRAPH (Partage Facebook, LinkedIn, etc.) ---
    
    openGraph: {
        title: "Banguissa Store : L'Import-Export Simplifié depuis la Chine",
        description: "Sourcing, inspection, négociation et livraison sécurisée de vos produits depuis la Chine vers l'Afrique.",
        url: "https://Banguissa-store.online", // Bien de le répéter
        siteName: 'Banguissa Store',
        images: [
            {
                // Next.js utilisera metadataBase + ce chemin relatif
                url: '/images/open-graph-image.jpg', 
                width: 1200,
                height: 630,
                alt: 'Logo Banguissa Store et services',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    
    // --- 3. TWITTER (Partage sur X/Twitter) ---
    
    twitter: {
        card: '/black-female-courier-working-checking-packages-delivery-van.jpg', 
        title: 'Banguissa Store | Achat et Livraison depuis la Chine',
        description: 'Le partenaire de confiance pour sécuriser vos importations en Afrique.',
        creator: '@Banguissastore',
        // Next.js utilisera metadataBase + ce chemin relatif
        images: ['/diverse-employees-analyzing-inventory-list-laptop-counting-products-boxes-storage-room-shelves-young-people-using-device-work-stock-logistics-delivery-service.jpg'], 
    },
};

// --- CORRECTION DU THEMECOLOR (viewport) ---

// Ceci est la nouvelle fonction exportée pour les propriétés liées au Viewport.
export const viewport = {
    // Note : Correction du double dièse dans votre code original
    themeColor: "#f4ca54", 
    // Autres propriétés comme 'width' ou 'initial-scale' peuvent être ajoutées ici si besoin.
};