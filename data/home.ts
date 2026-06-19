export type HeroSlide = { word: string; img: string };

export const HERO_SLIDES: HeroSlide[] = [
  { word: "Pompes à chaleur", img: "01-hero-bg-01-pompe-chaleur.jpg" },
  { word: "Climatiseurs", img: "01-hero-bg-02-climatiseur.jpg" },
  { word: "Panneaux photovoltaïques", img: "01-hero-bg-03-panneaux-photovoltaiques.jpg" },
  { word: "Adoucisseur d'eau et eau de boisson", img: "01-hero-bg-04-adoucisseur-eau-et-eau-de-boisson.jpg" },
  { word: "Salle de bain clé en main", img: "01-hero-bg-05-salle-de-bain.jpg" },
  { word: "Chaudières", img: "01-hero-bg-06-chaudiere.jpg" },
];

export const CERTIFS = [
  { src: "rge-qualipac.png", alt: "RGE QualiPAC" },
  { src: "rge-qualisol.png", alt: "RGE QualiSol" },
  { src: "rge-qualibois.png", alt: "RGE Qualibois" },
  { src: "rge-eco-artisan.png", alt: "RGE Eco Artisan" },
  { src: "rge-qualipv.png", alt: "RGE QualiPV" },
  { src: "qualigaz.png", alt: "Certification Qualigaz" },
];

export const PARTENAIRES = [
  { src: "bwt.jpg", alt: "BWT" },
  { src: "atlantic.png", alt: "Atlantic" },
  { src: "mitsubishi.png", alt: "Mitsubishi Electric" },
  { src: "daikin.png", alt: "Daikin" },
  { src: "viessmann.png", alt: "Viessmann" },
  { src: "frisquet.png", alt: "Frisquet" },
  { src: "froling.jpg", alt: "Froling" },
  { src: "windhager.png", alt: "Windhager" },
  { src: "aubade.jpg", alt: "Aubade" },
  { src: "grohe.png", alt: "Grohe" },
  { src: "alterna.webp", alt: "Alterna" },
];

export type ExpertiseCard = {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  pos: string;
};

export const EXPERTISES_HOME: ExpertiseCard[] = [
  {
    slug: "pompe-a-chaleur",
    title: "Pompe à chaleur",
    tagline: "Chauffez votre maison… en consommant <em>moins d'énergie</em>",
    img: "01-hero-bg-01-pompe-chaleur.jpg",
    pos: "center",
  },
  {
    slug: "adoucisseur",
    title: "Adoucisseur & eau de boisson",
    tagline: "La qualité d'une eau de source <em>dans chaque pièce</em>",
    img: "01-hero-bg-04-adoucisseur-eau-et-eau-de-boisson.jpg",
    pos: "center",
  },
  {
    slug: "climatisation",
    title: "Climatisation",
    tagline: "Un intérieur frais, même en pleine <em>canicule</em>",
    img: "01-hero-bg-02-climatiseur.jpg",
    pos: "center",
  },
  {
    slug: "chaudieres-poele-granules",
    title: "Chaudières & Poêle à granulés",
    tagline: "Un chauffage <em>fiable</em>, toute l'année",
    img: "01-hero-bg-06-chaudiere.jpg",
    pos: "center",
  },
  {
    slug: "plomberie-salle-de-bain",
    title: "Salle de bain clé en main",
    tagline: "Une salle de bain esthétique <em>pensée pour durer</em>",
    img: "01-hero-bg-05-salle-de-bain.jpg",
    pos: "center",
  },
  {
    slug: "panneaux-photovoltaiques",
    title: "Panneaux photovoltaïques",
    tagline: "Produisez votre <em>propre énergie</em>",
    img: "01-hero-bg-03-panneaux-photovoltaiques.jpg",
    pos: "center",
  },
];

export type Temoignage = {
  produit: string;
  service: string;
  quote: string;
  name: string;
  place: string;
  stars: number;
};

export const TEMOIGNAGES: Temoignage[] = [
  { produit: "Pompe à chaleur", service: "Entretien", quote: "Exceptionnel ! L'équipe a entretenu ma pompe à chaleur avec professionnalisme. J'ai vraiment ressenti une différence dans la performance et l'efficacité de mon système. Hautement recommandé.", name: "Marc Dubois", place: "Nièvre", stars: 5 },
  { produit: "Climatisation", service: "Installation", quote: "Après l'installation de mon système de climatisation bi-split par cette entreprise, je suis épatée par leur efficacité et la qualité de leur travail. Un confort inégalé chez moi maintenant, merci !", name: "Sophie Bernard", place: "Nièvre", stars: 5 },
  { produit: "Chaudières", service: "Dépannage", quote: "Rapide et efficace, le service de dépannage a sauvé ma chaudière en plein hiver. Je suis très impressionné par leur réactivité et leur expertise. Ils ont gagné un client fidèle.", name: "Étienne Martin", place: "Nièvre", stars: 5 },
  { produit: "Climatisation", service: "Dépannage", quote: "Son venu me dépanner ma Clim. Très compétent, consciencieux, minutieux. Personne agréable. Je recommande vivement. Ils ont gagné une cliente supplémentaire. Merci pour cette intervention un peu en urgence.", name: "Yolande Jeanzac", place: "Nièvre", stars: 5 },
  { produit: "Pompe à chaleur", service: "Installation", quote: "Efficaces et rapides !!!!! Cherif, l'installateur est d'un professionnalisme extraordinaire, conscienceux, agréable et techniquement irréprochable. Son travail est parfait, net et propre. Un GRAND merci à lui et Mr Merlin.", name: "Sarah Grégoire", place: "Nièvre", stars: 5 },
  { produit: "Chaudières", service: "Entretien", quote: "Je ne peux que recommander cet artisan plombier qui vient d'effectuer le ramonage de nos deux conduits de cheminées. Très propre et consciencieux.", name: "Jacques Marchesi", place: "Nièvre", stars: 5 },
  { produit: "Chaudières", service: "Entretien", quote: "Rdv respecter, travail nettoyage cheminée et chaudière très consciencieux ET très sympathique.", name: "Sylviane Desruisseau", place: "Nièvre", stars: 5 },
  { produit: "Salle de bain", service: "Installation", quote: "Très bon artisan ! À recommander.", name: "Arnaud F.", place: "Nièvre", stars: 5 },
  { produit: "Adoucisseur d'eau", service: "Installation", quote: "Rapide et efficace.", name: "FM", place: "Nièvre", stars: 5 },
  { produit: "Panneaux photovoltaïques", service: "Installation", quote: "Réactivité, ponctualité, qualité, professionnalisme.", name: "Lydie Buisine", place: "Nièvre", stars: 5 },
  { produit: "Climatisation", service: "Installation", quote: "Réactivité, professionnalisme.", name: "Kévin Graff", place: "Nièvre", stars: 5 },
];

export type HistoireChapter = {
  date: string;
  eyebrow: string;
  title: string;
  body: string;
  imageSrc?: string;
};

export const HISTOIRE_CHAPTERS: HistoireChapter[] = [
  {
    date: "1999",
    eyebrow: "",
    title: "Les débuts",
    body: "<p>Tout commence en 1999.</p><p>C'est à l'âge de 14 ans que je commence l'apprentissage de la plomberie chez mon oncle, à Tannay dans la Nièvre.</p><p>À la suite de cette expérience, je passe un CAP plomberie en deux ans, suivi d'une mention complémentaire chauffage en un an à Marzy. Puis d'un Brevet Professionnel génie climatique en deux ans à Autun.</p><p>Pendant les 8 années suivant ma formation, j'ai travaillé dans 2 entreprises différentes. C'est grâce à cette expérience que j'ai pu tout apprendre du métier :<br />de la prise en main des chantiers à la responsabilité de leur succès, en passant par le respect des délais impartis et la gestion d'ouvriers.</p>",
    imageSrc: "/images/histoire-da.png",
  },
  {
    date: "2013",
    eyebrow: "",
    title: "Le grand saut",
    body: "<p>À 27 ans, avec toutes les responsabilités que j'endossais, je me suis rendu compte que j'avais toutes les clés en main pour lancer ma propre entreprise.</p><p>C'est alors qu'avec un camion, de l'outillage et un coin bureau dans ma maison, je crée l'EURL Merlin Christophe.</p><p>Fort de mon expérience, de ma réputation, mais surtout de mon réseau de footballeurs — j'avais joué dans les villes de Tannay, Clamecy et Corbigny — la première année fut un véritable succès.</p><p>Avec un chiffre d'affaires plus que doublé par rapport à mon prévisionnel, la dynamique et le succès de l'EURL Merlin Christophe étaient lancés.</p>",
  },
  {
    date: "2015",
    eyebrow: "",
    title: "Ma première équipe",
    body: "<p>Deux ans après la création de l'entreprise, j'ai embauché mon premier ouvrier, avec qui nous avons poursuivi la bonne dynamique des premières années.</p><p>Au point qu'au bout de quatre ans, mon deuxième ouvrier et ma secrétaire rejoignent l'aventure afin de pouvoir répondre aux besoins de tous nos clients.</p>",
  },
  {
    date: "2020",
    eyebrow: "",
    title: "Une deuxième structure",
    body: "<p>En 2020, nous faisons face à une problématique.</p><p>Les demandes d'entretien et de dépannage de chaudières, pompes à chaleur et climatisations s'accumulent.</p><p>Il m'était alors impossible de répondre à toutes les demandes sans rogner sur la qualité. Et ça, c'était hors de question.</p><p>Après avoir entendu qu'un confrère souhaitait arrêter son activité, j'ai saisi cette opportunité et créé MC PAC Énergie.</p><p>Une structure entièrement dédiée à la maintenance et au SAV, dans laquelle je recrute un nouveau technicien spécialisé.</p><p>En reprenant les mêmes exigences que pour ma première entreprise, nous réussissons dès la première année à faire de MC PAC Énergie un nouveau succès, avec un chiffre d'affaires encourageant pour l'avenir.</p><p>J'ai alors la confirmation que notre recette — être sérieux, réactif, à l'écoute des gens, utiliser des produits de très grande qualité et tout faire pour satisfaire nos clients — fonctionne, et qu'elle doit devenir le socle des valeurs de nos entreprises pour assurer un succès durable.</p><p>Très vite, un deuxième technicien rejoint l'équipe de MC PAC Énergie afin de répondre aux attentes croissantes de nos clients.</p>",
    imageSrc: "/images/histoire-2020-mcpac.jpg",
  },
  {
    date: "2021–2025",
    eyebrow: "",
    title: "Une nouvelle phase de développement",
    body: "<p>À partir de 2021, une nouvelle étape commence pour l'entreprise.</p><p>Avec une activité toujours plus soutenue, il devient essentiel de structurer davantage l'organisation afin de continuer à garantir le même niveau de qualité de service.</p><p>C'est dans cette logique que j'accueille mon premier apprenti en plomberie et chauffage qui, très vite, se distingue en obtenant la 2e place au concours du Meilleur Apprenti de France (MAF).</p><p>En mars 2022, nous franchissons un cap important avec notre installation dans la zone industrielle de Clamecy.</p><p>Ce nouvel espace nous permet d'ouvrir une salle d'exposition de 600 m² afin de mieux accompagner nos clients dans leurs projets et leur faire découvrir concrètement nos équipements de dernière génération.</p><p>Dans cette salle d'exposition, vous pouvez choisir votre future climatisation, pompe à chaleur, chaudière et poêle à granulés, adoucisseurs et eau de boissons.</p><p>Ainsi que des accessoires de piscine (pompes, filtrations et robots de nettoyage).</p><p>Puis, en 2025, l'équipe continue de grandir.</p><p>Une nouvelle recrue rejoint l'aventure en tant que directrice d'agence à Clamecy, avec pour mission d'assurer le suivi des clients ainsi que l'organisation quotidienne des activités.</p><p>Dans le même temps, un nouvel apprenti intègre l'entreprise en tant que technicien spécialisé en pompes à chaleur et climatisation. Renforçant ainsi notre expertise sur ces solutions en plein développement.</p>",
    imageSrc: "/images/histoire-2021-salle-expo.jpg",
  },
  {
    date: "2026",
    eyebrow: "",
    title: "Le Groupe Merlin",
    body: "<p>Début 2026, je franchis une nouvelle étape.</p><p>Je rejoins le SKL CLUB ÉLITE développé par <strong>Éric Larchevêque</strong> — entrepreneur, investisseur et jury dans l'émission « Qui veut être mon associé ? » — afin d'être accompagné dans le développement de mes entreprises.</p><p>Ce programme change ma vision. Je décide alors de suivre les conseils d'Éric et de fusionner les deux entités — Merlin Christophe et MC PAC Énergie — sous un seul nom : <strong>le Groupe Merlin</strong>.</p><p>L'objectif est clair : structurer un groupe pour assurer un succès durable, avec l'ouverture de nouvelles agences, l'embauche de nouveaux techniciens et de nouvelles directrices d'agences pour couvrir le département de la Nièvre et… prochainement de l'Yonne.</p><p>Et pour lancer cette nouvelle aventure, je décide d'ouvrir une agence à Corbigny. Avec le recrutement d'un ancien artisan du secteur de Corbigny et d'une nouvelle directrice d'agence.</p><p>Ce qui évolue, c'est notre structure, pour renforcer son identité et sa portée d'intervention. Mais ce qui ne change pas, ce sont les valeurs qui nous ont permis de grandir jusqu'ici :</p><p>la réactivité, le sérieux, l'utilisation de produits haut de gamme, la proximité avec nos clients et un savoir faire que l'on développe continuellement.</p><p>Notamment avec la participation à des concours nationaux dont j'ai été couronné 3ème au concours RMC du Meilleur Artisan de France.</p><p>Ce sont les fondements de l'entreprise et je tiens à ce que vous les ressentiez. Que ce soit pour une nouvelle installation, pour un entretien ou un dépannage.</p><p>Parce que le travail bien fait, ça se voit, ça se ressent, et ça crée de la confiance, le Groupe Merlin est fier de vous accompagner depuis plus de 13 ans.</p>",
    imageSrc: "/images/histoire-2026.jpeg",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: "Quelles sont les prestations que vous faites ?",
    a: "<p>Nous intervenons sur l'ensemble de vos besoins en chauffage, plomberie et confort de l'habitat. Concrètement, nous vous accompagnons pour :</p><ul><li>l'installation et le dépannage de vos systèmes de chauffage (pompe à chaleur, chaudières, climatisation)</li><li>la création de salles de bain clé en main</li><li>les travaux de plomberie (fuites, réparations, remplacement d'équipements)</li><li>le traitement de l'eau (adoucisseurs et eau de boisson)</li><li>l'installation de panneaux photovoltaïques</li></ul>",
  },
  {
    q: "Quelles aides de l'État pour une pompe à chaleur en 2026 ?",
    a: "Selon vos revenus, vos travaux et votre type de logement, vous pouvez cumuler MaPrimeRénov' et les CEE (Coup de pouce chauffage). Les aides peuvent atteindre <strong>10 800 €</strong> pour le remplacement d'une chaudière fioul ou gaz par une pompe à chaleur air/eau. Nous nous occupons de la création à la validation de votre dossier. Vous pouvez aussi <strong>simuler le montant de vos aides</strong> grâce à notre simulateur disponible plus haut sur cette page.",
  },
  {
    q: "Intervenez-vous en dépannage en urgence ?",
    a: "Oui, sur les départements de la Nièvre et de la Yonne. En cas de panne, nous proposons une intervention sous 24 h ouvrées (et plus rapide selon la disponibilité de l'équipe).",
  },
  {
    q: "Avec quels partenaires travaillez-vous ?",
    a: "<p>Nous nous appuyons sur des marques reconnues pour la qualité et la durabilité de leurs équipements :</p><ul><li><strong>BWT</strong> — traitement de l'eau</li><li><strong>Atlantic</strong> — chauffage, eau chaude</li><li><strong>Mitsubishi Electric</strong> — pompes à chaleur, climatisation</li><li><strong>Daikin</strong> — pompes à chaleur, climatisation</li><li><strong>Viessmann</strong> — chauffage</li><li><strong>Windhager</strong> — chaudières à granulés et pompes à chaleur</li><li><strong>Frisquet</strong> — chaudières</li><li><strong>Froling</strong> — chaudières bois et granulés</li><li><strong>Aubade</strong> — salle de bain</li><li><strong>Grohe</strong> — robinetterie sanitaire</li><li><strong>Alterna</strong> — sanitaires</li></ul>",
  },
  {
    q: "Êtes-vous certifiés RGE ?",
    a: "<p>Oui, le Groupe Merlin cumule plusieurs certifications :</p><ul><li><strong>RGE QualiPAC</strong> (pompes à chaleur)</li><li><strong>RGE QualiSol</strong> (solaire thermique)</li><li><strong>RGE Qualibois</strong> (chaudières et poêles à bois)</li><li><strong>RGE Eco Artisan</strong></li><li><strong>RGE QualiPV</strong> (panneaux photovoltaïques)</li><li>Certification <strong>Qualigaz</strong> (qualification gaz, hors RGE)</li></ul><p>Ces certifications sont obligatoires pour que vos travaux ouvrent droit aux aides de l'État.</p>",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous couvrons les départements de la <strong>Nièvre</strong> et de l'<strong>Yonne</strong> depuis nos deux agences de Clamecy et Corbigny. Pour un projet en dehors de cette zone, contactez-nous pour étudier la faisabilité.",
  },
  {
    q: "Proposez-vous des contrats d'entretien ?",
    a: "Oui, nous proposons des contrats d'entretien annuels pour pompes à chaleur, climatiseurs, chaudières et adoucisseurs. L'entretien annuel est obligatoire pour de nombreux équipements et garantit la durée de vie du matériel.",
  },
  {
    q: "Quelles sont vos offres et vos tarifs ?",
    a: "<p>Chaque prestation est <strong>réalisée sur-mesure</strong>, en fonction de votre logement, de vos besoins et de votre budget. Pour vous proposer une offre juste, nous étudions chaque projet individuellement et nous nous déplaçons gratuitement pour évaluer la situation.</p><p>Pour découvrir le détail de chacune de nos expertises, rendez-vous dans la section <a href=\"/#expertises\">nos expertises</a>. Pour obtenir un devis personnalisé, <a href=\"/contact\">contactez-nous</a> — on vous rappelle sous 24h ouvrées.</p>",
  },
];
