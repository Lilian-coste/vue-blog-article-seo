import { CONTENT_YEAR } from '../lib/site';

export type ExpertiseSlide = {
  h4: string;
  p: string;
  /**
   * Optionnel : image spécifique à cette slide (override de installImg).
   * Si absent, l'image fixe `installImg` de l'expertise est utilisée.
   * Permet d'avoir une image qui change selon la slide active.
   */
  img?: string;
};

export type Expertise = {
  title: string;
  heroImg: string;
  depannageImg: string;
  installImg: string;
  icon: string;
  install: {
    h3: string;
    slides: ExpertiseSlide[];
  };
  depannage: {
    h3: string;
    p: string;
  };
  partenaireLogos: { src: string; alt: string }[];
  certifLogos: { src: string; alt: string }[];
  hasSimulator: boolean;
  /**
   * Bloc SEO optionnel — sépare la page expertise (conversion) du pilier SEO (guide complet).
   * - `title` et `description` : surchargent les meta par défaut (`<title>` et meta description).
   * - `guideSlug` : slug d'un article `/blog/{guideSlug}` qui sert de page mère du cocon sémantique
   *   pour cette expertise. Si défini, un lien discret « Pour aller plus loin » est ajouté en bas
   *   de la page expertise. Cf. livrable seo/cocon-pac/03-audit-pilier-et-plan-edito-silo3.md.
   */
  seo?: {
    title?: string;
    description?: string;
    guideSlug?: string;
    guideLabel?: string;
  };
};

export const EXPERTISES: Record<string, Expertise> = {
  'pompe-a-chaleur': {
    title: 'Pompe à chaleur',
    heroImg: 'detail-pompe-a-chaleur.jpg',
    depannageImg: 'depannage-groupe-13.png',
    installImg: 'install-pompe-a-chaleur.jpg',
    icon: 'pac',
    install: {
      h3: "Une maison bien chauffée, des factures allégées… sans vous poser 1000 questions.",
      slides: [
        {
          h4: "Réduisez vos factures d'électricité",
          p: "<p>L'installation d'une pompe à chaleur vous permet de consommer moins d'énergie et de faire du bien à votre portefeuille.</p><p>Si vous vous chauffez avec une ancienne chaudière chez vous, vous payez vos factures d'électricité <strong>3× plus cher</strong> que normalement. Si vous n'avez pas encore de système de chauffage, comparez bien les différentes solutions avant de passer à l'achat.</p><p>Pour toutes installations d'une pompe à chaleur, vous bénéficiez <strong>jusqu'à 10 800 €</strong> d'aides de l'État. Vous pouvez simuler le montant de vos aides grâce à notre simulateur en bas de cette page (nous nous occupons de la création à la validation de votre dossier).</p>",
        },
        {
          h4: "Une installation pensée pour vous",
          p: "<p>Il existe plusieurs types de pompes à chaleur (PAC). Parmi elles, nous vous proposons les solutions hybrides Air-Eau avec production d'eau chaude sanitaire.</p><p>Pour vous proposer la solution la plus adaptée, un de nos professionnels se déplacera chez vous afin d'étudier et de comprendre votre habitation, votre système de chauffage actuel et vos besoins.</p><p><strong>Ne faites pas confiance à une société qui ne ferait pas ce déplacement au préalable !</strong> Nos équipes réalisent une installation soignée, rapide et conforme aux normes.</p>",
        },
        {
          h4: "Des équipements fiables, garantis dans le temps",
          p: "<p>Notre partenaire <strong>Atlantic</strong> vous permet de bénéficier de pompes à chaleur d'une grande qualité, avec <strong>jusqu'à 10 ans de garantie</strong>.</p><p>Un choix essentiel pour éviter les mauvaises surprises et assurer la longévité de votre installation.</p><p>Nous vous proposons un contrat d'entretien suite à l'installation de votre pompe à chaleur.</p>",
        },
      ],
    },
    depannage: {
      h3: "Une panne de chauffage, ça n'attend pas.",
      p: "<p>Nos équipes interviennent rapidement pour diagnostiquer et réparer votre pompe à chaleur, quelle que soit la marque. Votre confort est rétabli au plus vite, plus besoin d'attendre des semaines.</p><p>Sur place, nos techniciens repèrent la cause du problème pour effectuer une réparation fiable, pensée pour durer dans le temps.</p>",
    },
    partenaireLogos: [
      { src: 'atlantic.png', alt: 'Atlantic' },
      { src: 'mitsubishi.png', alt: 'Mitsubishi Electric' },
      { src: 'daikin.png', alt: 'Daikin' },
      { src: 'viessmann.png', alt: 'Viessmann' },
      { src: 'windhager.png', alt: 'Windhager' },
    ],
    certifLogos: [
      { src: 'rge-qualipac.png', alt: 'RGE QualiPAC' },
      { src: 'rge-eco-artisan.png', alt: 'RGE Eco Artisan' },
    ],
    hasSimulator: true,
    seo: {
      title:
        `Pompe à chaleur en Nièvre et Yonne — Installation, aides ${CONTENT_YEAR}, devis | Groupe Merlin`,
      description:
        `Installation, entretien et dépannage de pompes à chaleur air/eau en Nièvre (58) et Yonne (89). Jusqu'à 10 800 € d'aides ${CONTENT_YEAR}, certifié RGE QualiPAC. Devis gratuit, simulateur en ligne.`,
      guideSlug: 'pompe-a-chaleur-guide-complet',
      guideLabel: 'Pour aller plus loin, consultez notre guide complet sur la pompe à chaleur',
    },
  },

  'climatisation': {
    title: 'Climatisation',
    seo: {
      title: "Climatisation dans la Nièvre et l'Yonne — Installation, entretien, devis | Groupe Merlin",
      description: "Installation et entretien de climatisation (split, multi-split, réversible) en Nièvre (58) et Yonne (89). Certifié RGE QualiPAC. Marques Daikin, Mitsubishi Electric, Atlantic. Devis gratuit.",
      guideSlug: 'climatisation-guide-complet',
      guideLabel: 'Pour aller plus loin, consultez notre guide complet sur la climatisation',
    },
    heroImg: 'detail-climatisation.jpg',
    depannageImg: 'depannage-groupe-13.png',
    installImg: 'install-climatisation.jpg',
    icon: 'clim',
    install: {
      h3: "Un été sans transpirer dans votre propre maison.",
      slides: [
        {
          h4: '',
          p: "<p>L'été, quand les températures montent, votre maison devient vite un four. Les nuits sont étouffantes et les journées épuisantes. Dormir, travailler, se reposer chez soi devient un effort.</p><p>Choisir la bonne climatisation et bien l'installer change votre quotidien.</p>",
        },
        {
          h4: "La solution adaptée à vos besoins",
          p: "<p>Il existe deux types de climatisation. La <strong>climatisation simple froide</strong> rafraîchit votre intérieur rapidement et efficacement pendant les mois chauds. La <strong>climatisation réversible</strong> rafraîchit en été et peut également assurer un chauffage d'appoint en hiver, pour un confort toute l'année.</p><p>Nos techniciens se déplacent chez vous pour étudier votre logement et vous recommander la solution la plus adaptée à votre situation. Une installation pensée pour vous, posée soigneusement et rapidement.</p>",
        },
        {
          h4: "Des équipements fiables, garantis dans le temps",
          p: "<p>Nous travaillons avec des marques reconnues — <strong>[A]</strong>, <strong>[B]</strong> — pour vous garantir des équipements performants et durables, avec <strong>jusqu'à [X] ans de garantie</strong>.</p><p><em>Nous vous proposons également un contrat d'entretien suite à l'installation.</em></p>",
        },
      ],
    },
    depannage: {
      h3: "Une panne de chauffage, ça n'attend pas.",
      p: "<p>Une clim qui ne refroidit plus, un système qui fait du bruit, une télécommande qui ne répond plus… quand ça arrive, nous intervenons rapidement.</p><p>Nos techniciens interviennent pour diagnostiquer et réparer votre climatisation, quelle que soit la marque. Sur place, ils identifient la cause du problème et effectuent une réparation pensée pour durer.</p><p>Nous proposons également des contrôles réguliers pour anticiper les pannes avant qu'elles ne surviennent et éviter une mauvaise surprise au cœur de l'été.</p>",
    },
    partenaireLogos: [
      { src: 'mitsubishi.png', alt: 'Mitsubishi Electric' },
      { src: 'daikin.png', alt: 'Daikin' },
      { src: 'atlantic.png', alt: 'Atlantic' },
    ],
    certifLogos: [
      { src: 'rge-qualipac.png', alt: 'RGE QualiPAC' },
      { src: 'rge-eco-artisan.png', alt: 'RGE Eco Artisan' },
    ],
    hasSimulator: false,
  },

  'chaudieres-poele-granules': {
    title: 'Chaudières & Poêle à granulés',
    heroImg: 'detail-chaudiere.jpg',
    depannageImg: 'depannage-group-12.jpg',
    installImg: 'install-chaudiere.jpg',
    icon: 'chaudiere',
    install: {
      h3: "Un chauffage fiable, adapté à votre logement.",
      slides: [
        {
          h4: "Un système choisi pour votre habitation",
          p: "<p>Gaz, fioul, bois ou granulés : le choix d'une chaudière dépend de votre habitation, de votre consommation et de votre budget.</p><p>Nous étudions votre logement et votre installation actuelle pour vous proposer une solution adaptée à votre situation.</p><p>Car une chaudière mal choisie ou mal installée, c'est un système qui consomme trop… ou qui tombe en panne plus souvent.</p><p>Nous installons des équipements fiables et adaptés à votre usage quotidien. Nos équipes réalisent une installation soignée et conforme aux normes, pour un fonctionnement optimal dès le départ.</p>",
        },
        {
          h4: "Le poêle et l'insert à granulés",
          p: "<p>Le poêle à granulés est une solution de chauffage au bois à la fois économique et autonome. Grâce à son réservoir et à sa programmation, il diffuse une chaleur douce et régulière dans votre pièce de vie, sans que vous ayez à le recharger en permanence.</p><p>L'insert à granulés vient quant à lui s'installer dans une cheminée existante pour la transformer en véritable chauffage performant. Vous gardez le charme du feu tout en gagnant en confort et en rendement.</p><p>Au quotidien, vous profitez d'un allumage et d'une régulation automatiques, d'un combustible renouvelable et d'une chaleur homogène dans tout votre logement.</p><p>Nous étudions votre intérieur et vos habitudes pour vous conseiller l'appareil le mieux adapté, puis nous réalisons une installation soignée et conforme aux normes, pour un fonctionnement optimal dès le départ.</p>",
        },
      ],
    },
    depannage: {
      h3: "Une panne de chauffage, ça n'attend pas.",
      p: "<p>Une chaudière, un poêle ou un insert à granulés en panne, c'est un inconfort immédiat, surtout en hiver. Nos équipes interviennent rapidement pour diagnostiquer le problème et remettre votre chauffage en fonctionnement.</p><p>Chaque intervention vise une réparation durable, pour éviter que la panne ne se répète.</p><p>Nous assurons également l'entretien de votre chaudière, de votre poêle ou de votre insert à granulés pour limiter les pannes et prolonger leur durée de vie.</p>",
    },
    partenaireLogos: [
      { src: 'viessmann.png', alt: 'Viessmann' },
      { src: 'frisquet.png', alt: 'Frisquet' },
      { src: 'froling.jpg', alt: 'Froling' },
      { src: 'windhager.png', alt: 'Windhager' },
    ],
    certifLogos: [
      { src: 'rge-qualibois.png', alt: 'RGE Qualibois' },
      { src: 'qualigaz.png', alt: 'Qualigaz' },
      { src: 'rge-eco-artisan.png', alt: 'RGE Eco Artisan' },
    ],
    hasSimulator: false,
    seo: {
      title:
        `Chaudière à granulés dans la Nièvre et l'Yonne — Installation, aides ${CONTENT_YEAR}, devis | Groupe Merlin`,
      description:
        `Installation et entretien de chaudières à granulés et poêles à bois en Nièvre (58) et Yonne (89). Certifié RGE Qualibois. Marques Froling, Viessmann, Frisquet. Devis gratuit.`,
      guideSlug: 'chaudieres-granules-guide-complet',
      guideLabel: 'Pour aller plus loin, consultez notre guide complet sur les chaudières à granulés',
    },
  },

  'plomberie-salle-de-bain': {
    title: 'Salle de bain clé en main',
    heroImg: 'detail-salle-de-bain.jpg',
    depannageImg: 'depannage-group-12.jpg',
    installImg: 'install-salle-de-bain.jpg',
    icon: 'sdb',
    install: {
      h3: "Une salle de bain complète, sans contraintes… du premier rendez-vous à la dernière finition.",
      slides: [
        {
          h4: "Une solution tout-en-un",
          p: "<p>Créer ou rénover une salle de bain peut vite devenir un casse-tête : plusieurs intervenants, des choix techniques et des délais qui s'allongent…</p><p>Avec notre solution clé en main, vous avez un seul interlocuteur, du début à la fin et des matériaux de qualité.</p><p>De la conception à la réalisation, nous prenons en charge l'ensemble de votre projet : <strong>plomberie</strong>, <strong>installation des équipements</strong>, <strong>coordination complète du chantier</strong>.</p><p>Vous n'avez rien à gérer, tout est centralisé et géré par nos professionnels. Nos équipes assurent une installation propre, rapide et conforme aux normes. Vous avancez sereinement, avec un projet maîtrisé à chaque étape.</p>",
        },
        {
          h4: "Des matériaux de qualité, pensés pour durer",
          p: "<p>Nous travaillons avec des partenaires reconnus comme <strong>Aubade</strong> et <strong>Alterna</strong>, pour vous proposer du mobilier de qualité, des douches, baignoires et carrelages durables, et des finitions soignées et esthétiques.</p><p>Réalisez une salle de bain aussi belle que fiable dans le temps.</p>",
        },
        {
          h4: "Un projet adapté à votre quotidien",
          p: "<p>Chaque salle de bain est conçue selon votre espace, vos envies et votre budget.</p><p>Nos réalisations sur-mesure nécessitent un entretien sur place afin de concevoir une salle de bain unique et à votre image.</p>",
        },
      ],
    },
    depannage: {
      h3: "Une fuite ou un problème ? Contactez-nous, nous intervenons rapidement.",
      p: "<p>Un problème de plomberie — fuite, canalisation bouchée, équipement défaillant… — peut arriver à tout moment. Et plus vous attendez, plus les dégâts peuvent s'aggraver.</p><p>Nos équipes peuvent intervenir <strong>dans les 48 h</strong> après votre appel pour stopper le problème et limiter les dégâts. Nous effectuons une réparation fiable pour éviter que le problème ne se reproduise.</p><p><strong>Tous types de travaux de plomberie</strong> : fuites d'eau, canalisations bouchées ou endommagées, remplacement d'équipements (robinetterie, WC, etc.), réparations diverses.</p>",
    },
    partenaireLogos: [
      { src: 'aubade.jpg', alt: 'Aubade' },
      { src: 'alterna.webp', alt: 'Alterna' },
      { src: 'grohe.png', alt: 'Grohe' },
    ],
    certifLogos: [],
    hasSimulator: false,
    seo: {
      title:
        `Salle de bain clé en main dans la Nièvre et l'Yonne — Rénovation, installation, devis | Groupe Merlin`,
      description:
        `Rénovation complète de salle de bain clé en main en Nièvre (58) et Yonne (89). Un seul interlocuteur du début à la fin. Marques Aubade, Alterna, Grohe. Devis gratuit.`,
      guideSlug: 'salle-de-bain-guide-complet',
      guideLabel: 'Pour aller plus loin, consultez notre guide complet sur la rénovation de salle de bain',
    },
  },

  'adoucisseur': {
    title: 'Adoucisseur & eau de boisson',
    heroImg: 'detail-adoucisseur.jpg',
    depannageImg: 'depannage-group-12.jpg',
    installImg: 'install-adoucisseur.jpg',
    icon: 'eau',
    install: {
      h3: "Une eau douce et à très bon goût… au quotidien.",
      slides: [
        {
          h4: "Une eau traitée à la source",
          p: "<p>L'eau du robinet peut contenir du calcaire, du chlore ou encore des résidus indésirables, laissant des traces sur vos équipements de cuisine et une usure prématurée de vos installations.</p><p>Mais surtout, l'eau a un goût désagréable, vous obligeant à acheter des bouteilles en plastique.</p><p>Les solutions d'adoucissement et de filtration permettent de délivrer une eau plus douce, minéralisée et à très bon goût.</p>",
          img: 'install-adoucisseur-eau-boisson.jpg',
        },
        {
          h4: "Pour l'eau de boisson — système BWT ONE SOURCE PEARLWATER",
          p: "<p>Installé directement sous votre évier, le système <strong>MIXXO PRO</strong> filtre et minéralise votre eau du robinet pour lui donner la qualité d'une eau de source.</p><p>Il minéralise l'eau en calcium, magnésium et bicarbonate, tout en réduisant le chlore, les goûts et odeurs, les microplastiques, les PFAS et les pesticides.</p><p>D'une simple pression sur la télécommande fournie, vous basculez entre eau filtrée et non filtrée.</p><p>Quand une eau adoucie et agréable rencontre une eau minéralisée et agréable à boire — le tout dans une seule installation.</p>",
          img: 'install-adoucisseur-eau-boisson.jpg',
        },
        {
          h4: "Pour toute la maison — l'adoucisseur BWT PERLAMAXX OPTI",
          p: "<p>Compact et élégant, il s'intègre facilement dans tous les espaces. Conçu pour un foyer de 1 à 8 personnes, il adoucit l'eau de toute votre habitation pour protéger vos équipements du calcaire, prolonger leur durée de vie et vous offrir un confort incomparable au quotidien.</p><p>Connecté en Wi-Fi, il vous alerte en cas de débit anormal ou de manque de sel, désinfecte automatiquement ses résines et optimise sa consommation d'eau et de sel. Le tout suivi à distance, pour une tranquillité totale.</p><p><strong>Garanti jusqu'à 10 ans</strong> sur le bac, bouteilles et résine.</p>",
          img: 'install-adoucisseur-maison.jpg',
        },
        {
          h4: "Des équipements fiables et durables",
          p: "<p>Nous travaillons en partenariat exclusif avec <strong>BWT</strong>, référence mondiale dans le traitement de l'eau. Leurs systèmes sont conçus pour durer, avec des fonctions intelligentes, une conception pensée pour la longévité et une réparabilité facilitée.</p><p><em>Nous vous proposons également un contrat d'entretien et le remplacement de cartouche selon la fréquence recommandée.</em></p>",
          img: 'install-adoucisseur-maison.jpg',
        },
      ],
    },
    depannage: {
      h3: "Une pièce ne fonctionne plus correctement ? Nous intervenons rapidement.",
      p: "<p>Nos techniciens interviennent pour diagnostiquer le problème et rétablir rapidement la qualité de votre eau.</p><p>En cas de panne, nous remplaçons les composants défaillants de votre installation. Certains éléments peuvent être pris en charge dans le cadre de garanties (se référer à la partie « Installation »).</p>",
    },
    partenaireLogos: [
      { src: 'bwt.jpg', alt: 'BWT' },
    ],
    certifLogos: [],
    hasSimulator: false,
    seo: {
      title:
        `Adoucisseur d'eau et eau de boisson dans la Nièvre et l'Yonne — Installation BWT | Groupe Merlin`,
      description:
        `Installation d'adoucisseur d'eau et de systèmes d'eau de boisson BWT en Nièvre (58) et Yonne (89). Partenaire exclusif BWT PerlaMaxx OPTI. Eau douce et eau filtrée minéralisée. Devis gratuit.`,
      guideSlug: 'adoucisseur-guide-complet',
      guideLabel: "Pour aller plus loin, consultez notre guide complet sur l'adoucisseur d'eau",
    },
  },

  'panneaux-photovoltaiques': {
    title: 'Panneaux photovoltaïques',
    heroImg: 'detail-panneaux-photovoltaiques.jpg',
    depannageImg: 'depannage-groupe-13.png',
    installImg: 'install-panneaux-photovoltaiques.jpg',
    icon: 'solaire',
    install: {
      h3: "Produisez votre propre énergie… et réduisez votre dépendance.",
      slides: [
        {
          h4: "Reprenez le contrôle de votre consommation",
          p: "<p>Aujourd'hui, le coût de l'électricité ne cesse d'augmenter, tout comme vos factures. Les panneaux photovoltaïques permettent de reprendre le contrôle.</p><p>Grâce à l'énergie solaire, vous produisez une partie de votre consommation directement depuis votre toit. <strong>Moins d'électricité achetée, plus d'autonomie au quotidien.</strong></p>",
        },
        {
          h4: "Un investissement rentable dans le temps",
          p: "<p>L'installation de panneaux photovoltaïques permet de réduire vos factures sur le long terme, tout en valorisant votre habitation.</p><p>Vous investissez dans un système durable, pensé pour durer plusieurs années.</p><p>De plus, nos équipes réalisent une installation propre et conforme, pour garantir un fonctionnement fiable dès le départ.</p>",
        },
      ],
    },
    depannage: {
      h3: "Production en baisse ? Onduleur en panne ? On diagnostique.",
      p: "<p>Maintenance préventive et curative : nettoyage des panneaux, contrôle de l'onduleur, vérification des fixations.</p>",
    },
    partenaireLogos: [],
    certifLogos: [
      { src: 'rge-qualipv.png', alt: 'RGE QualiPV' },
      { src: 'rge-eco-artisan.png', alt: 'RGE Eco Artisan' },
    ],
    hasSimulator: false,
    seo: {
      title: `Panneaux photovoltaïques dans la Nièvre et l'Yonne — Installation RGE QualiPV | Groupe Merlin`,
      description: `Installation de panneaux photovoltaïques en Nièvre (58) et Yonne (89). Installateur certifié RGE QualiPV et RGE Eco Artisan. Autoconsommation, aides, devis gratuit.`,
      guideSlug: 'panneaux-photovoltaiques-guide-complet',
      guideLabel: 'Pour aller plus loin, consultez notre guide complet sur les panneaux photovoltaïques',
    },
  },
};

export const EXPERTISE_SLUGS = Object.keys(EXPERTISES);
