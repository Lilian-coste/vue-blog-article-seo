import { CONTENT_YEAR } from '../lib/site';

export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  img: string;
  imgDir?: string;
  /** object-position CSS de la vignette (ex: "10% center") pour recadrer le sujet. */
  imgFocus?: string;
  overlayEyebrow?: string;
  overlayTitle?: string;
  body: string;
  /**
   * - false → narratif/actualité, affiché home (S7) + /articles + /blog/[slug].
   * - true → conseil, affiché uniquement sur /blog-conseil + /blog/[slug].
   */
  isAdvice: boolean;
  /** Date de publication ISO (`YYYY-MM-DD`). Optionnel — utilisée pour le JSON-LD BlogPosting. */
  datePublished?: string;
  /**
   * Clé d'une agence dans `AGENCES` (`@/data/agences`). Si défini, remplace l'image hero
   * par un bloc en-tête d'agence (coordonnées à gauche + Google Maps à droite).
   */
  agencyRef?: string;
  /** Texte affiché à la place du bouton « Nous contacter » dans l'en-tête d'agence (ex : « OUVERTURE : 10 JUIN 2026 »). */
  agencyBadge?: string;
  /**
   * Si true → article exclu des listes publiques (/blog-conseil, /articles, sitemap.xml,
   * carousel home S7) et non indexable par Google. L'URL `/blog/{slug}` reste accessible
   * pour preview/relecture. À retirer une fois validé par Lilian.
   * Cf. handover : livrables/seo/_HANDOVER.md
   */
  draft?: boolean;
  /**
   * Slug d'expertise auquel cet article appartient dans le cocon sémantique
   * (ex: 'pompe-a-chaleur', 'climatisation'). Permet d'afficher une section
   * « Articles liés » en bas de chaque article du cocon, qui irrigue le maillage interne.
   */
  cocon?: string;
};


export const BLOG_ARTICLES: BlogArticle[] = [
  /* === ACTUALITÉS — home (carousel S7) + /articles === */
  {
    slug: "ouverture-agence-corbigny",
    title: "Le Groupe Merlin ouvre une nouvelle agence à Corbigny",
    category: "Le Groupe Merlin",
    excerpt:
      "Une deuxième agence pour le Groupe Merlin, à Corbigny, à partir du 1er juin 2026. Chauffage, plomberie, climatisation, adoucisseur d'eau : tous nos services au plus près des familles de la Nièvre et de l'Yonne.",
    img: "blog-ouverture-agence-corbigny.jpeg",
    imgDir: "blog",
    isAdvice: false,
    datePublished: "2026-05-11",
    agencyRef: "corbigny",
    agencyBadge: "OUVERTURE : 1ER JUIN 2026",
    body: `
<p>Le Groupe Merlin ouvre sa deuxième agence à Corbigny, à compter de juin 2026. Une nouvelle adresse, une nouvelle équipe et un seul objectif : être au plus près de chez vous pour s'occuper, du dépannage à la grosse installation, de tout ce qui touche au chauffage, à l'eau et au confort de votre maison.</p>
<p>Avant de vous présenter ce qu'on apporte concrètement, voici deux mots sur ce qu'est le Groupe Merlin aujourd'hui et pourquoi on choisit Corbigny pour cette nouvelle étape.</p>

<h2>Une deuxième agence, pour rester proches des familles de la Nièvre</h2>
<p>Après avoir accompagné plus de <strong>500 familles dans la Nièvre et l'Yonne ces dix dernières années</strong>, on connaît bien les besoins de la région. Et on sait surtout là où vous avez besoin d'aide et d'un excellent artisan :</p>
<ul>
  <li><strong>Côté chauffage</strong>, qu'il s'agisse de pavillons des années 70-90, de grandes maisons en pierre, de longères ou encore d'anciennes fermes, beaucoup de maisons sont encore chauffées par une vieille chaudière au fioul ou au gaz. La plupart des gens ne s'en rendent pas compte, mais ils paient des factures bien plus élevées que nécessaire. Simplement parce que l'installation a fait son temps et qu'elle n'est plus adaptée. Nous vous aidons, grâce à nos diagnostics, à réduire jusqu'à 70 % le montant de vos factures de chauffage.</li>
  <li><strong>Côté plomberie</strong>, l'eau de la région est dure et très chargée en calcaire. On le voit tous les jours en intervention : des chauffe-eau qui s'entartrent prématurément, des tuyaux qui s'opacifient et l'eau du robinet qui a un goût. Beaucoup de pannes auraient pu être évitées avec un adoucisseur ou simplement un entretien régulier.</li>
  <li><strong>Côté climatisation</strong>, les étés sont de plus en plus chauds en Bourgogne. La climatisation, qui était un confort optionnel il y a dix ans, devient un vrai sujet aujourd'hui. Surtout dans les maisons en pierre qui gardent la chaleur tard dans la nuit.</li>
</ul>
<p>C'est exactement pour répondre à ces réalités locales que vous retrouverez à l'agence de Corbigny <strong>tous les services du groupe</strong> (contrats d'entretien, installation et dépannage), pour l'ensemble de nos expertises : chauffage, climatisation, plomberie, salle de bain clé en main, adoucisseur d'eau et eau de boisson, panneaux photovoltaïques.</p>
<!-- BANDEAU_CERTIFS -->
<h2>Venez nous rencontrer à Corbigny</h2>
<p>L'agence vous accueille au <strong>22 Grande Rue, 58800 Corbigny</strong>, du <strong>lundi au vendredi de 8 h à 12 h et de 13 h 30 à 18 h</strong>, <strong>fermé le samedi</strong>. Pour prendre rendez-vous ou faire diagnostiquer une panne, vous pouvez appeler le <a href="tel:+33386220148">03 86 22 01 48</a> (fixe) ou le <a href="tel:+33638752408">06 38 75 24 08</a> (mobile), ou envoyer un email à <a href="mailto:agence.corbigny@groupe-merlin.fr">agence.corbigny@groupe-merlin.fr</a> à partir du <strong>1er juin 2026</strong>.</p>
<p>Et si vous voulez voir, toucher et comparer, notre <strong>showroom de 600 m² à Clamecy</strong> présente l'ensemble de nos produits (pompes à chaleur, chaudières, salles de bain, adoucisseurs, panneaux solaires). Une visite vaut mille devis.</p>

<!-- GUIDE_DOWNLOADS_CORBIGNY : bloc « Avant de partir, récupérez votre guide » archivé le 2026-06-19 (demande Lilian, en attente de validation des 4 guides par le client). Masqué du site, conservé verbatim ci-dessous. Pour REPUBLIER : supprimer ce marqueur d'ouverture ET le marqueur de fermeture situé juste après le paragraphe « Une question avant de télécharger… ».
<h2>Avant de partir, récupérez votre guide</h2>
<p>Pour vous aider à y voir clair selon votre besoin, on a préparé quatre guides à télécharger gratuitement. Choisissez celui qui correspond à votre projet :</p>
<ul class="gm-guide-downloads">
  <li>
    <div class="gm-guide-card">
      <p class="gm-guide-card__title"><span class="gm-guide-card__hl">Le guide Chauffage</span></p>
      <p class="gm-guide-card__desc">Tout ce qu'il faut savoir avant de remplacer votre chaudière ou d'installer une pompe à chaleur : aides, dimensionnement et choix de la techno.</p>
      <a class="gm-guide-card__btn" href="/guides/guide-chauffage.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path></svg>Télécharger le guide</a>
    </div>
  </li>
  <li>
    <div class="gm-guide-card">
      <p class="gm-guide-card__title"><span class="gm-guide-card__hl">Le guide Plomberie &amp; salle de bain</span></p>
      <p class="gm-guide-card__desc">Pour bien préparer une rénovation, anticiper le budget et éviter les mauvaises surprises.</p>
      <a class="gm-guide-card__btn" href="/guides/guide-plomberie-salle-de-bain.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path></svg>Télécharger le guide</a>
    </div>
  </li>
  <li>
    <div class="gm-guide-card">
      <p class="gm-guide-card__title"><span class="gm-guide-card__hl">Le guide Climatisation</span></p>
      <p class="gm-guide-card__desc">Choisir entre mono-split et multi-split selon votre maison, et bien dimensionner votre installation.</p>
      <a class="gm-guide-card__btn" href="/guides/guide-climatisation.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path></svg>Télécharger le guide</a>
    </div>
  </li>
  <li>
    <div class="gm-guide-card">
      <p class="gm-guide-card__title"><span class="gm-guide-card__hl">Le guide Adoucisseur &amp; eau de boisson</span></p>
      <p class="gm-guide-card__desc">Comprendre la dureté de l'eau, protéger votre maison du calcaire et obtenir une eau de boisson filtrée et reminéralisée au robinet.</p>
      <a class="gm-guide-card__btn" href="/guides/guide-adoucisseur-eau-de-boisson.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 20h14"></path></svg>Télécharger le guide</a>
    </div>
  </li>
</ul>
<p>Une question avant de télécharger ? <a href="/contact">Demandez votre devis gratuit</a>, ou appelez directement l'agence. On s'occupe de l'ensemble de votre confort quotidien.</p>
-->
`,
  },
  {
    slug: "3eme-meilleur-artisan-france",
    title: "3ᵉ meilleur artisan de France : une reconnaissance nationale",
    category: "Concours & distinctions",
    excerpt:
      "Christophe Merlin termine 3ᵉ au concours national des artisans plombiers-chauffagistes, lors d'une finale au salon Batimat Interclima.",
    img: "blog-3eme-meilleur-artisan.jpg",
    imgDir: "blog",
    isAdvice: false,
    body:
      "<p>Un concours qui réunit les artisans des 4 coins du pays, où plus de 250 candidats en plomberie-chauffage se sont affrontés, jusqu'à une finale à Paris, lors du salon Batimat Interclima, à la porte de Versailles à Paris.</p>" +
      "<p>Pendant deux jours, les six finalistes ont dû réaliser des installations techniques en plomberie et chauffage dans des temps imparti très courts…</p>" +
      "<p>Mais aussi une pièce artistique imposée. Christophe Merlin devait réaliser une pièce sur le thème de la Coupe du Monde de rugby. Défis qu'il releva en concevant une main tenant un ballon de rugby. Une œuvre en cuivre et en ferraille.</p>" +
      "<h3>L'espoir de l'emporter dans deux ans</h3>" +
      "<blockquote>« Je pense revenir dans deux ans et j'espère cette fois-ci l'emporter. Il y avait vraiment du niveau car tous ceux qui étaient devant et derrière moi étaient des compagnons du devoir… J'ai fini 3ᵉ mais j'étais bien entouré » — Christophe Merlin</blockquote>" +
      "<p>Une performance notable qui s'ajoute au Grand Prix Stars et Métiers 2021 pour la Nièvre qu'il avait obtenu dans la catégorie entrepreneur alors qu'il reste un pur artisan.</p>" +
      "<p>À la suite de ce podium, Christophe vient d'inscrire son apprenti, Lorenzo Javorcek, au concours 2023 du meilleur apprenti de France.</p>" +
      "<h3>Une entreprise en pleine évolution</h3>" +
      "<p>Dans cette continuité, l'entreprise a récemment franchi une nouvelle étape.</p>" +
      "<p>Installée initialement à Lucy-sur-Yonne (Yonne), elle vient d'emménager dans la zone industrielle de la Cité des Flotteurs, avenue de Saint-Exupéry.</p>" +
      "<p>Avec l'ouverture d'un showroom de plus de 600 m² à aménager, où chaque box sera dédié à un fournisseur : sanitaire, salles de bains, pompes à chaleur, climatisation, poêles à granulés, chaudières, adoucisseurs d'eau, traitement d'eau de boisson, traitement et accessoires de piscines.</p>",
  },
  {
    slug: "nathan-lorenzo-maf-clamecy",
    title: "Nathan et Lorenzo, le duo gagnant du concours MAF formé à Clamecy",
    category: "Apprentissage",
    excerpt:
      "Deux apprentis de Clamecy s'illustrent au concours « Un des Meilleurs Apprentis de France » : médaille d'argent régionale pour Lorenzo, médaille d'or pour Nathan.",
    img: "blog-nathan-lorenzo-maf.jpg",
    imgDir: "blog",
    overlayEyebrow: "Concours MAF · 2026",
    overlayTitle: "Médaille d'or à Clamecy",
    isAdvice: false,
    body:
      "<p>À Clamecy, deux jeunes apprentis se sont illustrés lors du concours <strong>Un des Meilleurs Apprentis de France (MAF)</strong>.</p>" +
      "<p>Parmi eux, Lorenzo Javorcek, formé au sein du Groupe Merlin, a marqué les esprits en décrochant une <strong>médaille d'argent régionale</strong>, après avoir obtenu l'or au niveau départemental.</p>" +
      "<h3>Une formation qui mène à l'excellence</h3>" +
      "<p>Le concours MAF est reconnu pour son exigence : les candidats doivent réaliser des installations techniques complexes, avec un niveau de précision et de finition particulièrement élevé.</p>" +
      "<p>Lorenzo s'y est distingué grâce à un travail rigoureux, mêlant maîtrise technique et exigence du détail. Une performance qui reflète directement la qualité de l'accompagnement et de la formation au sein de l'entreprise.</p>" +
      "<h3>Un duo qui vise le niveau national</h3>" +
      "<p>À ses côtés, Nathan de Monge de Freneau, également apprenti en installation thermique chez un confrère, s'est illustré en décrochant une <strong>médaille d'or régionale</strong>.</p>" +
      "<p>Une performance qui lui ouvre les portes de la <strong>finale nationale</strong>, prévue les 22 et 23 juin à Nice, où il présentera son travail devant le jury.</p>" +
      "<p>Une belle reconnaissance pour ce duo d'apprentis formé à Clamecy.</p>" +
      "<h3>Une dynamique tournée vers l'avenir</h3>" +
      "<p>Aujourd'hui, Lorenzo poursuit son parcours en préparant son brevet professionnel au sein de l'entreprise. Et cette première distinction marque une étape importante : celle d'une nouvelle génération d'artisans formés localement… et capables de se démarquer au niveau national.</p>",
  },

  /* === CONSEILS — uniquement sur /blog-conseil === */
  {
    // Pilier du cocon sémantique « pompe à chaleur ». Référencé depuis la page expertise
    // (cf. data/expertises.ts → 'pompe-a-chaleur'.seo.guideSlug) et recevra les liens entrants
    // de tous les articles enfants des 7 silos (cf. livrable seo/cocon-pac/03-*.md).
    slug: "pompe-a-chaleur-guide-complet",
    title: `Pompe à chaleur dans la Nièvre et Yonne : le guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    excerpt:
      "Tout ce qu'il faut savoir avant d'installer une pompe à chaleur dans la Nièvre ou dans l'Yonne : fonctionnement, choix entre air/air et air/eau, prix, aides 2026, entretien, dépannage et installateurs locaux.",
    img: "install-pompe-a-chaleur.jpg",
    imgDir: "expertises",
    isAdvice: true,
    datePublished: "2026-05-27",
    body: `
<div class="gm-stat-grid">
  <div class="gm-stat"><span class="gm-stat__value">10 800 €</span><span class="gm-stat__label">d'aides cumulables en 2026</span></div>
  <div class="gm-stat"><span class="gm-stat__value">15-20 ans</span><span class="gm-stat__label">durée de vie d'une PAC bien entretenue</span></div>
  <div class="gm-stat"><span class="gm-stat__value">COP 3-4</span><span class="gm-stat__label">1 kWh consommé = 3 à 4 kWh restitués</span></div>
  <div class="gm-stat" style="color: #ef4135;"><span class="gm-stat__value">-25 °C</span><span class="gm-stat__label">température mini de fonctionnement des modèles haute performance</span></div>
</div>

<p>Vous envisagez d'installer une pompe à chaleur chez vous, dans la Nièvre ou dans l'Yonne, et avant de signer un devis, vous voulez comprendre, comparer et calculer ? Alors ce guide est exactement ce dont vous avez besoin.</p>
<p>Vous y trouverez les sept thèmes essentiels à maîtriser avant de vous lancer : comment fonctionne une pompe à chaleur, comment choisir entre les modèles, quelles aides vous pouvez toucher en 2026, combien coûte réellement l'installation, comment l'entretenir, que faire en cas de panne, et comment trouver un installateur près de chez vous.</p>
<p>Chaque section vous donne l'essentiel en quelques minutes, avec un lien vers un article dédié si vous voulez creuser un sujet précis. À la fin, vous saurez exactement où vous en êtes et ce qu'il vous reste à faire.</p>

<h2>1. Comprendre la pompe à chaleur : comment ça marche et quels types existent</h2>
<p>La pompe à chaleur (parfois appelée PAC) est un dispositif qui ne produit pas de chaleur, mais qui la déplace. Plus précisément, elle capte les calories présentes dans un milieu à basse température (l'air extérieur, le sol ou l'eau) et les transfère vers un milieu à plus haute température, votre logement, pour le chauffer ou produire de l'eau chaude sanitaire. C'est le principe thermodynamique, comme celui d'un réfrigérateur qui fonctionnerait à l'envers. À noter : toutes les pompes à chaleur ont besoin d'électricité pour fonctionner.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma simplifié du cycle thermodynamique d'une pompe à chaleur en 4 étapes">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#171723"/>
    </marker>
  </defs>
  <g font-family="-apple-system, sans-serif" font-size="13" text-anchor="middle">
    <g>
      <circle cx="80" cy="120" r="75" fill="#FAC864"/>
      <text x="80" y="100" font-weight="700" font-size="15">1</text>
      <text x="80" y="125">Capte la chaleur</text>
      <text x="80" y="143">de l'air extérieur</text>
    </g>
    <line x1="160" y1="120" x2="195" y2="120" stroke="#171723" stroke-width="2" marker-end="url(#arrow)"/>
    <g>
      <circle cx="250" cy="120" r="75" fill="#EAE1CD"/>
      <text x="250" y="100" font-weight="700" font-size="15">2</text>
      <text x="250" y="125">Compresseur</text>
      <text x="250" y="143">monte en T°</text>
    </g>
    <line x1="330" y1="120" x2="365" y2="120" stroke="#171723" stroke-width="2" marker-end="url(#arrow)"/>
    <g>
      <circle cx="420" cy="120" r="75" fill="#EAE1CD"/>
      <text x="420" y="100" font-weight="700" font-size="15">3</text>
      <text x="420" y="125">Diffuse la chaleur</text>
      <text x="420" y="143">dans la maison</text>
    </g>
    <line x1="500" y1="120" x2="535" y2="120" stroke="#171723" stroke-width="2" marker-end="url(#arrow)"/>
    <g>
      <circle cx="590" cy="120" r="75" fill="#FAC864"/>
      <text x="590" y="100" font-weight="700" font-size="15">4</text>
      <text x="590" y="125">Détendeur</text>
      <text x="590" y="143">le cycle reprend</text>
    </g>
  </g>
</svg>
<span class="gm-schema__caption">Le cycle thermodynamique d'une pompe à chaleur — quatre étapes en boucle continue.</span>
</div>

<p>Cela explique pourquoi une PAC consomme moins d'électricité qu'elle ne produit de chaleur. Là où un radiateur électrique consomme 1 kWh pour vous restituer 1 kWh de chaleur, une PAC consomme 1 kWh pour vous en restituer 3 à 4 selon les conditions. C'est ce qu'on appelle le coefficient de performance (COP).</p>
<p>Plus ce COP est élevé, plus votre PAC est performante. Pour une PAC air/eau moderne, un COP entre 3 et 4 est considéré comme bon, au-dessus de 4 c'est excellent. Ce coefficient varie selon la température extérieure : il est plus élevé en mi-saison qu'en plein hiver, ce qui est normal. C'est pour ça qu'on regarde aussi le <strong>SCOP</strong> (coefficient de performance saisonnier), qui donne la performance moyenne sur l'année entière et qui est donc plus représentatif de votre consommation réelle.</p>

<p class="gm-pullquote">Une PAC ne produit pas de chaleur. Elle la déplace et c'est ce qui permet de réduire jusqu'à 70 % le montant de vos factures.</p>

<p>Il existe deux grandes familles de pompe à chaleur : la PAC air/eau et la PAC air/air.</p>
<p>La <strong>PAC air/eau</strong> envoie la chaleur dans votre circuit hydraulique. Elle chauffe vos radiateurs, votre plancher chauffant et souvent votre eau chaude sanitaire. C'est celle qu'on installe le plus dans les maisons individuelles dans la Nièvre et dans l'Yonne, surtout pour remplacer une vieille chaudière. La <strong>PAC air/air</strong> envoie la chaleur sous forme d'air pulsé via des unités intérieures (les « splits »). Elle chauffe l'hiver et rafraîchit l'été. C'est la solution qu'on appelle aussi « climatisation réversible ».</p>
<p style="color: #ef4135;">Pour les conditions hivernales rigoureuses de la Nièvre, les modèles à haute performance par températures négatives (Daikin Altherma 3 H HT, Mitsubishi Ecodan Zubadan, Atlantic Alféa Extensa+) sont conçus pour rester efficaces jusqu'à <strong>-15 à -25 °C</strong>. Pour aller plus loin, voir le guide officiel <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">France Rénov' sur les pompes à chaleur</a>.</p>

<h2>2. Choisir sa pompe à chaleur : air/eau ou air/air, quelle marque, quel modèle</h2>
<p>Le choix entre air/eau et air/air dépend principalement de votre installation actuelle. Si vous avez déjà des radiateurs hydrauliques ou un plancher chauffant, la PAC air/eau s'y connecte naturellement. Si vous partez d'un chauffage électrique direct (convecteurs) ou si vous cherchez avant tout à climatiser l'été, la PAC air/air est plus adaptée.</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>PAC air/eau</th><th>PAC air/air</th></tr></thead>
<tbody>
<tr><td>Chauffage hiver</td><td>Oui, via radiateurs / plancher chauffant</td><td>Oui, via air pulsé (splits)</td></tr>
<tr><td>Rafraîchissement été</td><td>Selon modèle (réversible)</td><td>Oui, fonction climatisation</td></tr>
<tr><td>Eau chaude sanitaire</td><td>Oui sur la plupart des modèles</td><td>Non, équipement séparé nécessaire</td></tr>
<tr><td>Compatible installation existante</td><td>Radiateurs hydrauliques, plancher chauffant</td><td>Logement chauffé à l'électrique direct</td></tr>
<tr><td>Budget moyen pose comprise</td><td>10 800 – 15 800 €</td><td>6 000 – 9 000 €</td></tr>
<tr><td>Aides 2026 cumulables</td><td>MaPrimeRénov' + CEE + éco-PTZ + TVA 5,5 %</td><td>Prime CEE + TVA 5,5 % (pas de MaPrimeRénov' parcours par geste)</td></tr>
</tbody>
</table>

<p><em>👉 Le « <strong>parcours par geste</strong> » désigne une aide accordée pour un seul type de travaux, comme l'installation d'une pompe à chaleur, par opposition à une rénovation globale qui regroupe plusieurs travaux ensemble. Une PAC air/eau y est éligible ; une PAC air/air ne l'est pas.</em></p>

<p>Côté marques, le Groupe Merlin travaille avec des fabricants reconnus pour la fiabilité de leurs équipements : <strong>Daikin</strong> (gamme Altherma), <strong>Mitsubishi Electric</strong> (Ecodan et Zubadan), <strong>Atlantic</strong> (Alféa), <strong>Viessmann</strong> (Vitocal), <strong>Frisquet</strong> et <strong>Froling</strong>. Le choix entre eux dépend de la puissance nécessaire (calculée selon la surface, l'isolation et la zone climatique), de la configuration de votre logement et de votre budget.</p>
<p>Un autre choix important concerne la configuration : <strong>monobloc</strong> (toute la mécanique est dans l'unité extérieure) ou <strong>bibloc</strong> (deux unités, une dehors et une dedans). Le monobloc est plus simple à installer et ne nécessite pas de manipulation de fluide frigorigène à l'intérieur. Le bibloc offre plus de souplesse de placement et une meilleure performance en très grand froid.</p>

<p class="gm-pullquote">Notre conseil : ne choisissez jamais un modèle sur catalogue. Un installateur sérieux se déplace chez vous, étudie votre logement, calcule la puissance nécessaire et vous propose une solution adaptée.</p>

<h2>3. Les aides 2026 pour une pompe à chaleur : jusqu'à 10 800 €</h2>
<p>C'est probablement la première question que vous vous posez. La réponse simple : quatre aides peuvent se cumuler en 2026, et elles peuvent couvrir une grande partie de votre installation, parfois plus de la moitié.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des 4 aides cumulables en 2026 pour une pompe à chaleur">
  <g font-family="-apple-system, sans-serif" text-anchor="middle">
    <rect x="240" y="10" width="200" height="60" rx="12" fill="#171723"/>
    <text x="340" y="38" fill="#FAC864" font-size="14" font-weight="700">Jusqu'à 10 800 €</text>
    <text x="340" y="56" fill="#fff" font-size="11">aides cumulables 2026</text>
    <line x1="340" y1="70" x2="100" y2="120" stroke="#171723" stroke-width="1.5"/>
    <line x1="340" y1="70" x2="270" y2="120" stroke="#171723" stroke-width="1.5"/>
    <line x1="340" y1="70" x2="410" y2="120" stroke="#171723" stroke-width="1.5"/>
    <line x1="340" y1="70" x2="580" y2="120" stroke="#171723" stroke-width="1.5"/>
    <rect x="20" y="120" width="160" height="100" rx="10" fill="#FAC864"/>
    <text x="100" y="148" font-size="13" font-weight="700">MaPrimeRénov'</text>
    <text x="100" y="170" font-size="11">jusqu'à 5 000 €</text>
    <text x="100" y="188" font-size="11">selon revenus</text>
    <text x="100" y="206" font-size="10" fill="#5a5a66">anah.gouv.fr</text>
    <rect x="190" y="120" width="160" height="100" rx="10" fill="#FAC864"/>
    <text x="270" y="148" font-size="13" font-weight="700">Prime CEE</text>
    <text x="270" y="170" font-size="11">plusieurs k€</text>
    <text x="270" y="188" font-size="11">remplacement fioul/gaz</text>
    <text x="270" y="206" font-size="10" fill="#5a5a66">fournisseurs énergie</text>
    <rect x="360" y="120" width="160" height="100" rx="10" fill="#EAE1CD"/>
    <text x="440" y="148" font-size="13" font-weight="700">Éco-PTZ</text>
    <text x="440" y="170" font-size="11">prêt sans intérêt</text>
    <text x="440" y="188" font-size="11">jusqu'à 30 000 €</text>
    <text x="440" y="206" font-size="10" fill="#5a5a66">votre banque</text>
    <rect x="530" y="120" width="130" height="100" rx="10" fill="#EAE1CD"/>
    <text x="595" y="148" font-size="13" font-weight="700">TVA 5,5 %</text>
    <text x="595" y="170" font-size="11">au lieu de 20 %</text>
    <text x="595" y="188" font-size="11">automatique</text>
    <text x="595" y="206" font-size="10" fill="#5a5a66">artisan RGE</text>
    <text x="340" y="260" font-size="12" font-style="italic" fill="#5a5a66">Toutes ces aides sont conditionnées à un installateur certifié RGE.</text>
  </g>
</svg>
<span class="gm-schema__caption">Les 4 aides cumulables en 2026 pour l'installation d'une pompe à chaleur air/eau.</span>
</div>

<p><strong>MaPrimeRénov'</strong> est la prime de l'État, gérée par <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">l'Anah</a>. Pour une PAC air/eau, elle va de 3 000 € (revenus supérieurs, sous condition) à 5 000 € (revenus très modestes). La <strong>prime CEE</strong>, versée par les fournisseurs d'énergie (EDF, TotalEnergies…), s'ajoute à MaPrimeRénov' et atteint plusieurs milliers d'euros sur un remplacement de chaudière fioul. L'<strong>éco-prêt à taux zéro</strong> vous permet de financer le reste à charge sans intérêts, auprès de votre banque. Et la <strong>TVA à 5,5 %</strong> s'applique automatiquement quand un artisan certifié RGE installe votre PAC.</p>

<p>Trois conditions essentielles à connaître :</p>
<ul class="gm-checklist">
  <li>L'artisan doit être <strong>certifié RGE QualiPAC</strong> (le Groupe Merlin l'est, parmi cinq certifications RGE).</li>
  <li>Le dossier doit être déposé <strong>avant</strong> la signature du devis et le démarrage des travaux.</li>
  <li>Le logement doit être votre <strong>résidence principale</strong>.</li>
</ul>

<p>Pour le détail complet des barèmes, des conditions et des démarches, nous avons écrit un article dédié : <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>Pompe à chaleur en 2026 : comment bénéficier jusqu'à 10 800 € d'aides</strong></a>. Et pour calculer en 2 minutes le montant exact auquel vous avez droit, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>

<h2>4. Combien coûte une pompe à chaleur : prix matériel, prix pose, reste à charge</h2>
<p>Sur une PAC air/eau pour une maison individuelle, le budget total varie en fonction de la puissance, du modèle, du type de pose (rénovation ou neuf) et de l'état de votre installation existante. La fourchette habituelle se situe entre <strong>10 800 € et 15 800 €</strong> matériel + pose, hors aides. Une fois MaPrimeRénov' et la prime CEE déduites, le reste à charge peut considérablement diminuer, parfois sous la barre des 5 000 € pour les revenus modestes qui remplacent une chaudière fioul.</p>
<p>Pour une PAC air/air (climatisation réversible), les budgets sont plus contenus : entre <strong>6 000 € et 9 000 €</strong> selon le nombre de splits intérieurs et la puissance globale. Les aides sont en revanche plus limitées : la prime CEE est possible, mais la PAC air/air n'est pas éligible au parcours par geste de MaPrimeRénov'.</p>
<p>Trois postes pèsent dans le devis : <strong>le matériel</strong> (l'unité extérieure + l'unité intérieure + le ballon eau chaude si la PAC en assure la production), <strong>la pose</strong> (étude thermique, dimensionnement, installation, mise en service, raccordements hydraulique et électrique) et <strong>les ajustements</strong> éventuels sur votre installation existante (remplacement de radiateurs sous-dimensionnés, modification du tableau électrique, désamiantage si nécessaire).</p>
<p>Un devis sérieux détaille ces trois postes. Si on vous présente un prix global sans décomposition, demandez le détail.</p>

<h2>5. L'entretien et la durée de vie d'une pompe à chaleur</h2>
<p>Une PAC bien entretenue dure entre <strong>15 et 20 ans</strong>. La durée de vie effective dépend de trois facteurs : la qualité de l'installation initiale (dimensionnement, raccordements, mise en service), la marque et la gamme du matériel, et la régularité de l'entretien.</p>
<p>L'entretien est <strong>obligatoire</strong> depuis le décret de juillet 2020 pour toute PAC dont la puissance dépasse 4 kW (c'est-à-dire pratiquement toutes les PAC domestiques). Il doit être réalisé a minima tous les deux ans par un professionnel qualifié. Il comprend le contrôle du fluide frigorigène, le nettoyage des échangeurs, la vérification des pressions et un bilan de performance.</p>
<p>Pour un locataire, l'entretien est à sa charge sauf disposition contraire dans le bail. Pour un propriétaire occupant, c'est à votre charge.</p>
<p>Le Groupe Merlin propose un <strong>contrat d'entretien annuel</strong> qui comprend la visite obligatoire, un dépannage prioritaire en cas de panne et un suivi des performances sur la durée. Pour en savoir plus, contactez-nous en cliquant sur le bouton situé dans le coin supérieur droit de cette page. Vous serez redirigé vers l'agence la plus proche de chez vous.</p>

<h2>6. Quand votre pompe à chaleur tombe en panne : les pannes courantes et le dépannage</h2>
<p>Les pannes les plus fréquentes que nos techniciens rencontrent sont :</p>
<ul class="gm-checklist">
  <li><strong>La PAC ne chauffe plus ou plus assez</strong> : souvent un problème de fluide frigorigène, de débit d'eau ou de sonde de température.</li>
  <li><strong>La PAC givre l'hiver et ne dégivre pas correctement</strong> : la fonction dégivrage est défectueuse, ou l'installation est mal placée par rapport au vent dominant.</li>
  <li><strong>La PAC fait sauter le disjoncteur</strong> : problème électrique, compresseur défectueux ou démarrage trop fort.</li>
  <li><strong>La PAC est bruyante</strong> : vibrations mal absorbées, pales d'hélice abîmées, position défavorable.</li>
</ul>
<p>Sur la plupart de ces pannes, un diagnostic sur place permet d'identifier la cause en 30 minutes à 1 heure. La réparation, elle, peut être faite dans la foulée pour les pannes courantes (capteurs, sondes, condensateurs), ou nécessite une pièce détachée sous quelques jours.</p>
<p>Le Groupe Merlin intervient en dépannage sous <strong>48 heures ouvrées</strong> dans la Nièvre et dans l'Yonne, sur toutes les marques (Daikin, Mitsubishi, Atlantic, Viessmann, et les autres).</p>

<h2>7. Trouver un installateur de pompe à chaleur dans la Nièvre ou dans l'Yonne</h2>
<p>Quand on cherche un installateur de PAC, trois critères font la différence :</p>
<ul class="gm-checklist">
  <li><strong>La certification RGE QualiPAC</strong> est obligatoire pour que votre installation ouvre droit aux aides de l'État. Sans cette certification, votre installateur ne peut pas vous faire bénéficier de MaPrimeRénov' ni de la prime CEE.</li>
  <li><strong>L'ancrage local</strong> compte tout autant : un installateur qui connaît la région connaît les particularités du bâti (maisons en pierre, longères, fermes rénovées), les conditions climatiques (hivers froids, humidité, vent du nord-ouest) et qui sera là dans 10 ou 15 ans si vous avez une panne.</li>
  <li><strong>Le déplacement systématique avant devis</strong> est non négociable : un installateur qui propose un prix sans visite ne peut pas dimensionner correctement votre PAC.</li>
</ul>
<p>Si vous voulez choisir le Groupe Merlin, nous cochons les trois cases. Nous sommes certifiés RGE QualiPAC (parmi cinq certifications RGE), installés dans la Nièvre depuis plus de 14 ans, avec deux agences : <a href="/agences/clamecy"><strong>Clamecy</strong></a> et <a href="/agences/corbigny"><strong>Corbigny</strong> (ouverture le 1er juin 2026)</a>. Nous nous déplaçons gratuitement chez vous pour étudier votre projet, sur l'ensemble du département de la Nièvre et de l'Yonne.</p>

<h2>Et maintenant ?</h2>
<p>Vous avez maintenant les sept clés pour faire votre choix sereinement. Voici trois étapes simples pour avancer :</p>
<ol>
  <li>Si vous voulez d'abord savoir combien votre projet va vraiment vous coûter, <a href="/expertises/pompe-a-chaleur#simulateur"><strong>utilisez notre simulateur</strong></a>. Il calcule en 2 minutes le montant de vos aides et votre reste à charge.</li>
  <li>Si vous préférez en parler directement, <a href="/contact"><strong>demandez un rendez-vous gratuit à domicile</strong></a>. Un de nos techniciens passe chez vous, étudie votre installation et vous remet un devis détaillé sous quelques jours.</li>
  <li>Si vous voulez creuser un sujet précis avant de vous décider (les aides en détail, le remplacement d'une chaudière fioul, le choix entre les marques, l'entretien…), le détail complet des aides 2026 se trouve dans l'article <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>Pompe à chaleur en 2026 : jusqu'à 10 800 € d'aides</strong></a>. Les autres articles du cocon (remplacement chaudière fioul, comparatif marques, entretien) seront publiés progressivement sur ce blog dans les prochaines semaines.</li>
</ol>
<p>Pour toute question, nos équipes vous accueillent à <a href="/agences/clamecy"><strong>Clamecy</strong></a> et à <a href="/agences/corbigny"><strong>Corbigny</strong></a>, du lundi au vendredi de 8 h à 12 h et de 13 h 30 à 18 h. Nos agences sont fermées le samedi.</p>
<p><em>Les montants et conditions cités dans ce guide sont ceux en vigueur en 2026 et peuvent évoluer en cours d'année. Le montant exact de vos aides dépend de votre situation et figure dans votre devis personnalisé. Sources officielles : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>, <a href="https://www.service-public.fr/" target="_blank" rel="noopener">service-public.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>.</em></p>
`,
  },
  {
    slug: "pompe-a-chaleur-aides-etat-2026",
    title: `Pompe à chaleur en ${CONTENT_YEAR} : découvrez comment bénéficier jusqu'à 10 800 € d'aides`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    excerpt:
      "MaPrimeRénov', prime CEE, éco-PTZ, TVA réduite : découvrez toutes les aides 2026 pour une pompe à chaleur air/eau, qui y a droit, et comment connaître le montant exact qu'il vous reste à payer.",
    img: "01-hero-bg-01-pompe-chaleur.jpg",
    imgDir: "hero",
    isAdvice: true,
    datePublished: "2026-05-11",
    body: `
<p>Vous avez une vieille chaudière au fioul ou au gaz, vos factures de chauffage grimpent chaque hiver, et on vous a dit que la pompe à chaleur était la bonne solution ?</p>
<p>Si vous comptez passer à la pompe à chaleur, vous avez aussi entendu parler de MaPrimeRénov', de la prime CEE, de l'éco-prêt à taux zéro.</p>
<p>Et vous vous êtes sûrement demandé : combien touchez-vous ? Qui y a droit ? Combien je vais devoir sortir de ma poche ?</p>
<p>On reçoit ces questions presque tous les jours, que ce soit à notre agence de Clamecy ou celle de Corbigny.</p>
<p>Alors on a décidé d'écrire un article pour que vous puissiez découvrir quelles sont les aides auxquelles vous avez droit, le montant exact de celles-ci en 2026, et où faire votre demande.</p>

<h2>Quelles aides existent en 2026 pour une pompe à chaleur ?</h2>
<p>Quatre aides se cumulent : MaPrimeRénov', la prime CEE, l'éco-prêt à taux zéro et la TVA à 5,5 %. Mises bout à bout, elles réduisent considérablement le reste à charge de votre pompe à chaleur.</p>

<h3>MaPrimeRénov' 2026 : combien pour une pompe à chaleur air/eau ?</h3>
<p>C'est la prime de l'État que tout le monde connaît de nom, et dont presque personne ne connaît le montant exact.</p>
<p>Le guichet MaPrimeRénov' « parcours par geste » a rouvert le <strong>23 février 2026</strong>, pour tous les ménages. Pour l'installation d'une pompe à chaleur air/eau (celle qui chauffe votre maison, et souvent l'eau chaude, par vos radiateurs ou un plancher chauffant), voici les chiffres pour 2026 :</p>
<ul>
  <li>revenus très modestes : <strong>jusqu'à 5 000 €</strong></li>
  <li>revenus modestes : <strong>jusqu'à 4 000 €</strong></li>
  <li>revenus intermédiaires : <strong>jusqu'à 3 000 €</strong></li>
  <li>revenus supérieurs : <strong>rien sur ce geste</strong></li>
</ul>
<p>Pour découvrir le montant exact de vos aides, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>

<h3>La prime CEE</h3>
<p>Cette prime, qui s'additionne à MaPrimeRénov', ne se demande pas auprès de l'État, mais auprès des fournisseurs d'énergie (EDF, TotalEnergies et les autres).</p>
<p>Le principe est simple : vous remplacez votre vieille chaudière au fioul, au gaz ou au charbon par une pompe à chaleur air/eau, et le fournisseur vous verse une prime. Son montant dépend de vos revenus. Sur un remplacement de chaudière fioul, ça peut représenter plusieurs milliers d'euros. Vous pouvez faire la demande en ligne sur le site officiel des primes. Ou la simuler avec notre simulateur et nous contacter pour qu'on s'occupe du dossier.</p>

<h3>L'éco-prêt à taux zéro : payer sans intérêts, et à votre rythme</h3>
<p>Une fois MaPrimeRénov' et la prime CEE déduites, il reste presque toujours une part à votre charge. C'est là qu'intervient l'éco-PTZ : un prêt <strong>sans aucun intérêt</strong>, que vous demandez à votre banque, pour financer cette part.</p>

<h3>La TVA à 5,5 % : la réduction que vous n'avez même pas à demander</h3>
<p>Quand un artisan <strong>certifié RGE</strong> installe votre pompe à chaleur air/eau, la TVA passe de 20 % à <strong>5,5 %</strong> sur le matériel et la pose. Aucune démarche de votre côté : la réduction est déjà là, sur le devis et sur la facture.</p>

<h2>Qui a droit aux aides ? Les conditions à connaître</h2>
<p>Pour décrocher MaPrimeRénov' et la prime CEE, il faut cocher quelques cases :</p>
<ul>
  <li><strong>L'installation doit être faite par un artisan RGE.</strong> Sans certification RGE, vous ne pouvez pas bénéficier de ces aides. Le Groupe Merlin détient <strong>six certifications RGE</strong> (dont QualiPAC pour les pompes à chaleur), ce qui débloque l'ensemble des aides selon votre projet.</li>
  <li><strong>Le dossier doit être déposé avant de signer le devis et de démarrer les travaux.</strong> C'est l'erreur classique : commander la pompe à chaleur, puis demander l'aide. À ce moment précis, il est trop tard pour en bénéficier.</li>
  <li><strong>Ne pas avoir plusieurs sources de chaleur.</strong> La pompe à chaleur doit être la seule source de chaleur raccordée au réseau hydraulique de votre logement.</li>
  <li><strong>Le logement doit être votre résidence principale.</strong> Si vous êtes locataire, vous n'êtes pas éligible aux aides de l'État pour la pompe à chaleur. Dans le cas où vous souhaitez remplacer votre chaudière au fioul, au gaz ou au charbon par une PAC, vous devez vous adresser à votre propriétaire.</li>
  <li><strong>Dépose d'une chaudière au fioul, au gaz ou au charbon obligatoire.</strong> L'ancienne chaudière doit être effectivement déposée dans le cadre des travaux.</li>
</ul>

<h2>Comment connaître le montant exact de vos aides ?</h2>
<p>C'est probablement <strong>la question</strong> que vous vous posez.</p>
<p>Le montant exact de vos aides dépend de trois choses :</p>
<ul>
  <li><strong>votre revenu fiscal de référence</strong> (celui qui figure sur votre avis d'imposition),</li>
  <li><strong>le nombre de personnes dans votre foyer</strong>,</li>
  <li><strong>le type de votre logement</strong> : un T3, un T5, une longère de 180 m²… La surface et l'agencement déterminent la puissance que doit avoir la pompe à chaleur. Et donc le coût des travaux, et l'assiette sur laquelle se calculent les aides.</li>
</ul>
<p>Pour que vous puissiez calculer en moins de 2 minutes le montant exact de vos aides, on a construit un simulateur.</p>
<p>Vous renseignez votre situation, et il calcule le montant de <strong>MaPrimeRénov'</strong> et de la <strong>prime CEE</strong> auxquels vous avez droit. Vous découvrez également le <strong>reste à charge</strong>, ce que vous paierez réellement une fois les aides déduites. Ou ce que vous financerez via l'éco-prêt à taux zéro, si vous l'obtenez auprès de votre banque.</p>
<p>Faites le calcul exact de vos aides avec <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a> dès maintenant. Et contactez-nous pour qu'on prenne en charge votre dossier et la demande de vos aides.</p>

<h2>Pourquoi confier votre pompe à chaleur au Groupe Merlin</h2>
<p>Chez le Groupe Merlin, nous nous occupons de tout, pour vous :</p>
<ul>
  <li>l'étude de votre maison,</li>
  <li>le dimensionnement de votre pompe à chaleur,</li>
  <li>le montage complet des dossiers MaPrimeRénov' et CEE.</li>
</ul>
<p>Dans les maisons en pierre de la Nièvre ou de l'Yonne, une installation mal pensée peut vite devenir un mauvais investissement : une maison qui chauffe mal, le prix de vos factures d'électricité qui continue de grimper… et des hivers passés à regretter son choix.</p>
<p>C'est pour ça que chaque projet est étudié selon votre maison, votre isolation et votre mode de vie. Nous nous déplaçons gratuitement pour étudier votre logement et réaliser votre devis.</p>
<p>Si jamais un artisan que vous contactez ne se déplace pas au préalable chez vous pour vous proposer une solution adaptée à votre situation, c'est sûrement le signe que vous allez avoir des ennuis plus tard avec votre installation.</p>
<p>Et une fois notre installation terminée, vous savez que vous pourrez toujours nous appeler dans 10 ou 15 ans.</p>
<p>Nos équipes sont actuellement situées à Clamecy et à Corbigny. Depuis plus de 14 ans, nous avons accompagné plus de 200 familles avec nos solutions de pompe à chaleur, chaudière, adoucisseur et eau de boisson, climatisation, panneaux photovoltaïques, et dans la création de salle de bain clé en main.</p>
<p>Pour qu'on vous accompagne dans l'installation de votre pompe à chaleur, faites une estimation avec <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>, ou <a href="/contact">demandez votre devis gratuit</a>. Et si vous préférez en parler directement, nos équipes vous accueillent à Clamecy ou à Corbigny pour étudier votre projet.</p>
<p><em>Les montants et conditions cités sont ceux en vigueur en 2026 et peuvent évoluer en cours d'année. Le montant exact de vos aides dépend de votre situation et figure dans votre devis personnalisé. Barèmes officiels : economie.gouv.fr, service-public.fr et france-renov.gouv.fr.</em></p>
`,
  },
  /* ===== COCON PAC — SILOS 1 + 2 + 5 + 6 : COMPRENDRE / CHOISIR / ENTRETIEN / PANNES ===== */
  {
    slug: "comment-fonctionne-pompe-a-chaleur",
    title: "Comment fonctionne une pompe à chaleur : le guide simple",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "comment-fonctionne-pompe-a-chaleur.jpg",
    imgDir: "blog",
    excerpt:
      "Une pompe à chaleur ne crée pas de chaleur : elle la capte dans l'air extérieur et la transfère dans votre maison. On vous explique le cycle frigorifique, le COP et ce que ça change concrètement pour votre facture de chauffage.",
    body: `

<p>On vous pose souvent la question à notre agence de Clamecy : "Mais comment ça fonctionne exactement, une pompe à chaleur ?" C'est une bonne question, parce que comprendre le principe aide à mieux choisir son installation et à s'éviter des déceptions.</p>
<p>La réponse tient en une phrase : une pompe à chaleur ne crée pas de chaleur. Elle la capte dans l'air extérieur — même par temps froid — et la transfère dans votre maison. C'est tout. Et c'est précisément ce qui la rend si efficace.</p>

<h2>Le principe fondamental : déplacer la chaleur, pas la créer</h2>
<p>Votre réfrigérateur applique exactement le même principe. Il capte la chaleur à l'intérieur (là où se trouvent vos aliments) et la rejette derrière, à l'extérieur. La PAC fait l'inverse : elle prend les calories présentes dans l'air extérieur et les dépose dans votre maison.</p>
<p>Ce qui paraît contre-intuitif, c'est qu'il fait froid dehors. Pourtant, même à 0 °C, l'air contient de l'énergie thermique exploitable. Même à -10 °C, une PAC moderne continue de fonctionner correctement. C'est la physique des gaz qui le permet, et non une prouesse technologique mystérieuse.</p>
<p>Concrètement : pour chaque kWh d'électricité consommé pour faire tourner le compresseur, la PAC restitue 3 à 4 kWh de chaleur. C'est ce qu'on appelle le COP (coefficient de performance).</p>

<h2>Les 4 étapes du cycle frigorifique</h2>
<div class="gm-schema">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma du cycle frigorifique d'une pompe à chaleur : 4 étapes en boucle">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#FAC864"/>
    </marker>
  </defs>
  <!-- Cercle principal -->
  <ellipse cx="260" cy="110" rx="110" ry="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
  <!-- Étape 1 -->
  <circle cx="155" cy="110" r="30" fill="#1a2e4a" stroke="#FAC864" stroke-width="2"/>
  <text x="155" y="106" text-anchor="middle" fill="#FAC864" font-size="10" font-weight="bold">1</text>
  <text x="155" y="118" text-anchor="middle" fill="#fff" font-size="9">Évaporation</text>
  <!-- Étape 2 -->
  <circle cx="260" cy="40" r="30" fill="#1a2e4a" stroke="#FAC864" stroke-width="2"/>
  <text x="260" y="36" text-anchor="middle" fill="#FAC864" font-size="10" font-weight="bold">2</text>
  <text x="260" y="48" text-anchor="middle" fill="#fff" font-size="9">Compression</text>
  <!-- Étape 3 -->
  <circle cx="365" cy="110" r="30" fill="#1a2e4a" stroke="#FAC864" stroke-width="2"/>
  <text x="365" y="106" text-anchor="middle" fill="#FAC864" font-size="10" font-weight="bold">3</text>
  <text x="365" y="118" text-anchor="middle" fill="#fff" font-size="9">Condensation</text>
  <!-- Étape 4 -->
  <circle cx="260" cy="180" r="30" fill="#1a2e4a" stroke="#FAC864" stroke-width="2"/>
  <text x="260" y="176" text-anchor="middle" fill="#FAC864" font-size="10" font-weight="bold">4</text>
  <text x="260" y="188" text-anchor="middle" fill="#fff" font-size="9">Détente</text>
  <!-- Labels secondaires -->
  <text x="100" y="148" text-anchor="middle" fill="#64748b" font-size="8">Capte les calories</text>
  <text x="100" y="158" text-anchor="middle" fill="#64748b" font-size="8">de l'air extérieur</text>
  <text x="420" y="148" text-anchor="middle" fill="#64748b" font-size="8">Cède la chaleur</text>
  <text x="420" y="158" text-anchor="middle" fill="#64748b" font-size="8">à votre circuit</text>
</svg>
</div>
<p>Le fluide frigorigène circule en boucle fermée à travers 4 étapes :</p>
<ol>
  <li><strong>Évaporation</strong> : le fluide frigorigène, à basse pression, capte les calories de l'air extérieur et se transforme en gaz.</li>
  <li><strong>Compression</strong> : le compresseur monte la pression du gaz, ce qui élève sa température à 60-80 °C.</li>
  <li><strong>Condensation</strong> : le fluide chaud cède sa chaleur à votre circuit de chauffage (radiateurs ou plancher chauffant) et redevient liquide.</li>
  <li><strong>Détente</strong> : la pression chute, le fluide refroidit et recommence le cycle depuis le début.</li>
</ol>
<p>Ce cycle ne consomme de l'électricité que pour faire tourner le compresseur. Tout le reste est de la physique gratuite.</p>

<h2>Le COP : comprendre l'efficacité de votre installation</h2>
<p>Le COP (coefficient de performance) mesure combien de kWh de chaleur votre PAC produit pour chaque kWh électrique consommé. La norme EN 14511 fixe les conditions de mesure standardisées pour comparer les appareils.</p>
<table class="gm-compare">
  <thead><tr><th>COP mesuré</th><th>Ce que ça signifie</th><th>Interprétation</th></tr></thead>
  <tbody>
    <tr><td>Inférieur à 3</td><td>1 kWh électrique → moins de 3 kWh chaleur</td><td>Performances insuffisantes</td></tr>
    <tr><td>3 à 4</td><td>1 kWh électrique → 3 à 4 kWh chaleur</td><td>Bon niveau de performance</td></tr>
    <tr><td>Supérieur à 4</td><td>1 kWh électrique → plus de 4 kWh chaleur</td><td>Excellentes performances</td></tr>
  </tbody>
</table>
<p>Le SCOP (COP saisonnier, norme EN 14825) est plus représentatif de la réalité annuelle, car il tient compte des variations de température tout au long de l'année. En Nièvre (zone climatique H1c, température de base −7 °C), un SCOP annuel à partir de 3,9 indique une installation bien dimensionnée et performante.</p>

<blockquote class="gm-pullquote">
  "Le COP indique la performance à un instant T. Le SCOP vous dit combien votre PAC a été efficace sur toute une saison de chauffe. C'est ce second chiffre qui compte vraiment pour votre facture."
</blockquote>

<h2>Les différentes sources d'énergie : air, sol, eau</h2>
<p>Toutes les PAC s'appuient sur le même cycle frigorifique, mais elles puisent la chaleur dans des sources différentes :</p>
<ul class="gm-checklist">
  <li><strong>Air/eau</strong> : capte les calories dans l'air extérieur, les restitue via vos radiateurs ou votre plancher chauffant. La solution la plus répandue en rénovation.</li>
  <li><strong>Air/air</strong> : capte l'air extérieur, distribue la chaleur par soufflage dans les pièces. Réversible (chaud l'hiver, frais l'été). Idéal pour le confort estival aussi.</li>
  <li><strong>Géothermique (sol/eau ou eau/eau)</strong> : puise dans le sol ou une nappe phréatique, plus stable en température, plus efficace mais nécessite des travaux de forage plus importants.</li>
</ul>
<p>Pour la grande majorité des maisons de la Nièvre et de l'Yonne, les PAC air/eau et air/air répondent parfaitement au besoin. Pour comparer les deux solutions principales, lisez notre article <a href="/blog/pompe-a-chaleur-air-eau-ou-air-air">PAC air/eau ou air/air : quelle différence et quel choix</a>.</p>

<h2>Ce que ça change concrètement pour votre facture</h2>
<p>Avec une chaudière au fioul, vous convertissez 1 kWh d'énergie fossile en environ 0,9 kWh de chaleur (rendement ~90 %). Avec une PAC dont le COP est 3,5, vous produisez 3,5 kWh de chaleur pour 1 kWh d'électricité. La différence est massive sur une saison de chauffe.</p>
<p>Les économies réelles dépendent de votre prix du kWh électrique, de votre consommation antérieure et de l'isolation de votre maison. L'<a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a> et les retours de nos clients dans la Nièvre indiquent régulièrement des économies entre 60 % et 75 % par rapport à une chaudière au fioul.</p>
<p>Pour connaître le prix complet d'une installation, consultez notre article <a href="/blog/prix-pompe-a-chaleur-air-eau">Prix d'une pompe à chaleur air/eau : la fourchette honnête</a>.</p>

<h2>Groupe Merlin : vous expliquer avant de vendre</h2>
<p>Chez Groupe Merlin, nous sommes certifiés <strong>RGE QualiPAC</strong> (parmi cinq certifications RGE) dans la Nièvre et l'Yonne. Avant toute installation, nous réalisons une visite préalable pour analyser votre logement, comprendre vos besoins et vous proposer la solution la plus adaptée, pas la plus chère.</p>
<p>Pour aller plus loin sur le sujet, consultez notre <a href="/blog/pompe-a-chaleur-guide-complet">guide complet pompe à chaleur 2026</a>. Et si vous voulez passer à l'étape suivante, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : ADEME, norme EN 14511 (COP), norme EN 14825 (SCOP), <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>.</em></p>
`,
  },
  {
    slug: "pompe-a-chaleur-air-eau-ou-air-air",
    title: "PAC air/eau ou air/air : quelle différence et quel choix",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pompe-a-chaleur-air-eau-ou-air-air.jpg",
    imgDir: "blog",
    excerpt:
      "PAC air/eau ou air/air : deux technologies, deux usages très différents. L'une remplace votre chaudière et chauffe vos radiateurs, l'autre souffle de l'air chaud ou frais dans vos pièces. On compare pour vous aider à choisir.",
    body: `

<p>Quand on parle de pompe à chaleur, on mélange souvent deux technologies qui n'ont pas le même usage. La PAC air/eau remplace votre chaudière et alimente vos radiateurs ou votre plancher chauffant. La PAC air/air souffle de l'air chaud l'hiver et frais l'été dans vos pièces. Ce sont deux réponses à deux besoins différents.</p>
<p>Les deux puisent leurs calories dans l'air extérieur. Mais la façon dont elles distribuent la chaleur est radicalement différente. Et ça change tout pour décider laquelle vous correspond.</p>

<h2>Ce que les deux technologies ont en commun</h2>
<p>Les PAC air/eau et air/air reposent sur le même cycle frigorifique : un fluide frigorigène capte les calories de l'air extérieur, un compresseur élève leur température, puis la chaleur est distribuée dans votre maison. Pour comprendre ce mécanisme en détail, lisez notre article <a href="/blog/comment-fonctionne-pompe-a-chaleur">Comment fonctionne une pompe à chaleur</a>.</p>
<p>Les deux systèmes sont éligibles aux aides de l'État. La différence de montant des aides est importante : seule la PAC air/eau ouvre droit à MaPrimeRénov' dans sa version la plus généreuse, car elle est classée comme système de chauffage principal.</p>

<h2>La PAC air/eau : pour remplacer votre chaudière</h2>
<p>La PAC air/eau capte les calories dans l'air extérieur et les transfère à l'eau de votre circuit de chauffage. Elle alimente vos radiateurs, votre plancher chauffant ou vos ventilo-convecteurs — exactement comme une chaudière, mais sans flamme et sans combustible.</p>
<p>C'est la solution idéale si :</p>
<ul class="gm-checklist">
  <li>Vous avez une vieille chaudière fioul ou gaz à remplacer.</li>
  <li>Votre logement est équipé de radiateurs ou d'un plancher chauffant.</li>
  <li>Vous voulez bénéficier des aides les plus importantes (jusqu'à 10 800 € en 2026).</li>
  <li>Vous cherchez un système de chauffage principal pour toute la maison.</li>
</ul>
<p>L'installation nécessite une visite préalable pour vérifier la compatibilité des émetteurs existants (les radiateurs fonte anciens, par exemple, peuvent nécessiter une adaptation). Le coût complet — matériel et pose — se situe entre 10 800 € et 15 800 € dans la Nièvre et l'Yonne, aides déduites selon votre situation.</p>
<p>Pour les détails de prix, consultez notre article <a href="/blog/prix-pompe-a-chaleur-air-eau">Prix d'une pompe à chaleur air/eau : la fourchette honnête</a>.</p>

<h2>La PAC air/air : la climatisation réversible</h2>
<p>La PAC air/air capte les calories de l'air extérieur et les distribue par soufflage dans vos pièces. En hiver, elle souffle de l'air chaud. En été, elle inverse le cycle et souffle de l'air frais. C'est ce qu'on appelle la climatisation réversible.</p>
<p>C'est la solution idéale si :</p>
<ul class="gm-checklist">
  <li>Vous cherchez un confort thermique été comme hiver (chaud l'hiver, frais l'été).</li>
  <li>Vous n'avez pas de réseau de distribution d'eau chaude à alimenter.</li>
  <li>Vous voulez équiper une pièce spécifique ou une maison sans circuit de chauffage existant.</li>
  <li>Votre budget est plus limité : entre 6 000 € et 9 000 € pour une installation complète.</li>
</ul>
<p>Elle ne remplace pas totalement une chaudière pour le chauffage de toute la maison (sauf installation multi-split avec plusieurs unités intérieures). Pour comparer les prix en détail, voir <a href="/blog/prix-pompe-a-chaleur-air-air">Prix d'une pompe à chaleur air/air</a>.</p>

<h2>Tableau comparatif complet</h2>
<table class="gm-compare">
  <thead>
    <tr>
      <th>Critère</th>
      <th>PAC air/eau</th>
      <th>PAC air/air</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Distribution de chaleur</td><td>Via radiateurs ou plancher chauffant</td><td>Par soufflage d'air</td></tr>
    <tr><td>Réversible (climatisation)</td><td>Certains modèles seulement</td><td>Oui, systématiquement</td></tr>
    <tr><td>Remplacement chaudière</td><td>Oui, système principal</td><td>Complément ou pièce isolée</td></tr>
    <tr><td>Prix indicatif (pose incluse)</td><td>10 800 – 15 800 €</td><td>6 000 – 9 000 €</td></tr>
    <tr><td>MaPrimeRénov' 2026</td><td>Oui (jusqu'à 5 000 €)</td><td>Oui (barème inférieur)</td></tr>
    <tr><td>Prime CEE</td><td>Oui</td><td>Selon conditions</td></tr>
    <tr><td>Travaux installation</td><td>Unité extérieure + raccordement circuit eau</td><td>Unité extérieure + groupe(s) intérieur(s)</td></tr>
    <tr><td>Eau chaude sanitaire</td><td>Possible (avec ballon thermodynamique)</td><td>Non</td></tr>
  </tbody>
</table>

<h2>Quelle situation correspond à quel choix</h2>
<p>Si vous remplacez une vieille chaudière fioul dans une maison de la Nièvre : la PAC air/eau est la bonne réponse. Vous coupez le fioul, vous gardez vos radiateurs (ou les adaptez), et vous bénéficiez des aides les plus importantes.</p>
<p>Si vous voulez climatiser votre logement existant ou équiper une résidence secondaire sans chaudière à remplacer : la PAC air/air (climatisation réversible) est plus adaptée et moins coûteuse à installer.</p>
<p>Dans certains cas — maison avec chauffage électrique par convecteurs, budget limité — les deux technologies peuvent coexister : PAC air/air pour le confort estival, PAC air/eau pour le chauffage principal.</p>

<blockquote class="gm-pullquote">
  "La question n'est pas 'laquelle est meilleure', mais 'laquelle correspond à votre logement'. Une visite préalable permet de trancher en 30 minutes."
</blockquote>

<h2>Groupe Merlin pose les deux systèmes dans la Nièvre et l'Yonne</h2>
<p>Certifiés <strong>RGE QualiPAC</strong> (parmi cinq certifications RGE), nos techniciens installent des PAC air/eau et air/air pour les particuliers et les professionnels de la Nièvre et de l'Yonne. Nous travaillons avec les marques <strong>Daikin, Mitsubishi Electric, Atlantic et Viessmann</strong>.</p>
<p>Avant tout devis, nous réalisons une visite préalable gratuite pour évaluer votre logement et vous orienter vers la solution la plus adaptée.</p>
<p>Pour tout comprendre avant de décider, consultez également notre <a href="/blog/pompe-a-chaleur-guide-complet">guide complet pompe à chaleur 2026</a>. Quand vous êtes prêt, <a href="/contact"><strong>demandez votre visite préalable</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>, barèmes MaPrimeRénov' 2026.</em></p>
`,
  },
  {
    slug: "quelle-marque-pompe-a-chaleur-choisir",
    title: `Quelle marque de pompe à chaleur choisir en ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "quelle-marque-pompe-a-chaleur-choisir.jpg",
    imgDir: "blog",
    excerpt:
      "Daikin, Mitsubishi Electric, Atlantic, Viessmann, Frisquet, Froling : quelles sont les marques de pompes à chaleur fiables en 2026 et comment choisir ? On vous donne les critères qui comptent vraiment.",
    body: `

<p>La question de la marque est souvent la première qu'on nous pose. "Est-ce que Daikin c'est bien ?" "Atlantic, c'est fiable ?" La réponse courte : toutes les marques que nous installons chez Groupe Merlin sont fiables. La vraie question, c'est celle que personne ne pose : qui installe, et comment.</p>
<p>Une excellente PAC mal dimensionnée ou mal posée donnera de moins bons résultats qu'une PAC de milieu de gamme parfaitement installée. La marque compte moins que l'installateur. Cela dit, voici ce que vous devez savoir sur chacune.</p>

<h2>Les critères qui comptent vraiment</h2>
<p>Avant de choisir une marque, définissez vos critères de sélection. Ce sont eux qui devraient guider votre décision, pas les publicités.</p>
<ul class="gm-checklist">
  <li><strong>Le SCOP annuel</strong> : coefficient de performance saisonnier (norme EN 14825). Plus il est élevé, moins vous consommez d'électricité sur l'année. Visez ≥ 3,9 en zone H1c (Nièvre).</li>
  <li><strong>La garantie constructeur</strong> : en général 2 à 5 ans sur le compresseur, parfois plus en option payante. Lisez les conditions avant de signer.</li>
  <li><strong>La disponibilité des pièces détachées</strong> : une marque bien implantée en France garantit qu'on trouve des pièces rapidement en cas de panne.</li>
  <li><strong>Le niveau sonore</strong> : important si l'unité extérieure est proche d'une chambre ou d'un voisinage. Vérifiez le niveau en dB(A) à 1 mètre.</li>
  <li><strong>La compatibilité avec votre installation</strong> : température de départ, radiateurs existants, surface à chauffer. C'est votre logement qui détermine le bon modèle.</li>
  <li><strong>Le SAV local</strong> : votre installateur peut-il intervenir dans les 48 heures en cas de panne ?</li>
</ul>

<h2>Les marques partenaires de Groupe Merlin</h2>
<p>Nous travaillons avec un panel de marques sélectionnées pour leur fiabilité, leur performance en climat tempéré-froid et la disponibilité du SAV en France.</p>

<table class="gm-compare">
  <thead>
    <tr>
      <th>Marque</th>
      <th>Gamme PAC</th>
      <th>Points forts</th>
      <th>Usage recommandé</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Daikin</strong></td>
      <td>Altherma</td>
      <td>Leader mondial, SCOP élevé, gamme très large</td>
      <td>Rénovation et neuf, toutes surfaces</td>
    </tr>
    <tr>
      <td><strong>Mitsubishi Electric</strong></td>
      <td>Ecodan</td>
      <td>Fiabilité reconnue, bonne tenue en froid</td>
      <td>Maisons bien isolées, chauffage seul</td>
    </tr>
    <tr>
      <td><strong>Atlantic</strong></td>
      <td>Alféa</td>
      <td>Fabrication française, gamme résidentielle complète</td>
      <td>Rénovation standard, budget maîtrisé</td>
    </tr>
    <tr>
      <td><strong>Viessmann</strong></td>
      <td>Vitocal</td>
      <td>Qualité germanique, longévité réputée</td>
      <td>Maisons de grande superficie</td>
    </tr>
    <tr>
      <td><strong>Frisquet</strong></td>
      <td>Hydroconfort PAC</td>
      <td>Fabrication française, bonne intégration systèmes hybrides</td>
      <td>Remplacement chaudière gaz en hybride</td>
    </tr>
    <tr>
      <td><strong>Froling</strong></td>
      <td>SWP / THZ</td>
      <td>Spécialiste biomasse + géothermie, qualité autrichienne</td>
      <td>Projets avec source géothermique</td>
    </tr>
  </tbody>
</table>

<blockquote class="gm-pullquote">
  "Nous ne proposons que des marques dont nous pouvons assurer le SAV localement. Si nous ne pouvons pas intervenir rapidement en cas de panne, nous ne la vendons pas."
</blockquote>

<h2>Comment se passe le choix chez Groupe Merlin</h2>
<p>Nous ne partons pas de la marque. Nous partons de votre maison.</p>
<p>Lors de la visite préalable, nous évaluons la surface à chauffer, le niveau d'isolation, les émetteurs existants (radiateurs, plancher chauffant), la zone climatique (H1c dans la Nièvre, température de base −7 °C) et votre usage prévu. À partir de là, nous calculons la puissance nécessaire (<a href="/blog/dimensionnement-pompe-a-chaleur">le dimensionnement</a>) et nous sélectionnons dans notre gamme le modèle le plus adapté.</p>
<p>Le résultat : vous n'avez pas un appareil de telle marque "par défaut", vous avez la solution qui correspond à votre logement et à votre budget.</p>

<h2>Le SAV : critère décisif pour les années qui suivent</h2>
<p>Une pompe à chaleur dure 15 à 20 ans. Sur cette durée, votre installateur interviendra pour les entretiens réguliers, et peut-être pour des pannes. La proximité géographique et la réactivité du SAV sont donc aussi importantes que les caractéristiques techniques de l'appareil.</p>
<p>Nos deux agences (Clamecy et Corbigny) couvrent l'ensemble de la Nièvre et de l'Yonne. Notre délai d'intervention est de <strong>48 heures ouvrées</strong>. En cas de panne en hiver, vous n'attendez pas une semaine un technicien qui vient de Lyon ou de Paris.</p>
<p>Pour en savoir plus sur les certifications qui garantissent la qualité d'un installateur, consultez <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a> (rubrique "Travaux de rénovation énergétique — choisir un professionnel RGE").</p>

<h2>Commencer par une visite préalable</h2>
<p>La bonne marque, c'est celle qui correspond à votre logement, pas celle qui passe le plus en publicité. La seule façon de le savoir avec certitude, c'est de faire analyser votre maison par un professionnel RGE.</p>
<p>Consultez notre <a href="/blog/pompe-a-chaleur-guide-complet">guide complet pompe à chaleur 2026</a> pour une vue d'ensemble avant votre décision. Et si vous souhaitez aller plus loin, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a> à l'agence Groupe Merlin la plus proche de chez vous.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, normes EN 14511 et EN 14825, <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>.</em></p>
`,
  },
  {
    slug: "entretien-pompe-a-chaleur-obligatoire",
    title: "Entretien obligatoire de votre pompe à chaleur : ce qu'il faut savoir",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "entretien-pompe-a-chaleur-obligatoire.jpg",
    imgDir: "blog",
    excerpt:
      "Votre pompe à chaleur nécessite un entretien régulier, voire obligatoire selon certaines conditions réglementaires. Voici ce que la loi impose, ce que comprend une visite annuelle et pourquoi négliger l'entretien coûte plus cher que de le faire.",
    body: `

<p>La pompe à chaleur a la réputation d'être un équipement sans entretien. C'est faux. Moins contraignante qu'une chaudière au fioul, certes, mais une PAC qui n'est jamais vérifiée perd en efficacité, en confort et en longévité. Et dans certains cas, l'entretien est une obligation réglementaire.</p>

<h2>Ce que dit la réglementation</h2>
<p>La réglementation distingue plusieurs obligations selon les caractéristiques de l'installation :</p>
<p><strong>Contrôle d'étanchéité des fluides frigorigènes (réglementation F-Gas)</strong> : si votre PAC contient des fluides frigorigènes fluorés (HFC) en quantité supérieure au seuil réglementaire, un contrôle d'étanchéité périodique est obligatoire. La fréquence dépend de la quantité de fluide en tonnes équivalent CO₂. Cette obligation concerne une majorité d'installations résidentielles récentes.</p>
<p><strong>Contrôle périodique des systèmes de climatisation et PAC réversibles</strong> : au-delà de certaines puissances, une inspection réglementaire par un technicien habilité est requise. Pour les installations résidentielles de puissance courante, reportez-vous aux indications de votre installateur ou consultez <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>.</p>
<p>En dehors de ces obligations légales, les fabricants conditionnent généralement leur garantie au respect d'un entretien régulier. Négliger l'entretien, c'est risquer de perdre la garantie constructeur.</p>

<h2>Ce que comprend un entretien annuel</h2>
<ul class="gm-checklist">
  <li>Vérification du niveau de pression du fluide frigorigène et contrôle d'étanchéité.</li>
  <li>Nettoyage des filtres de l'unité intérieure et de l'échangeur de l'unité extérieure.</li>
  <li>Vérification du débit et de la pression du circuit hydraulique (PAC air/eau).</li>
  <li>Contrôle des connexions électriques et des paramètres de régulation.</li>
  <li>Test du cycle de dégivrage (automatique sur la plupart des modèles).</li>
  <li>Mesure des performances (températures de départ et retour, puissance absorbée).</li>
  <li>Remise d'un rapport d'intervention avec les relevés.</li>
</ul>

<h2>Ce que vous pouvez faire vous-même entre deux visites</h2>
<p>Entre deux entretiens professionnels, quelques gestes simples permettent de maintenir les performances de votre installation :</p>
<ul class="gm-checklist">
  <li>Nettoyer ou remplacer le filtre de l'unité intérieure (PAC air/air) tous les 2 à 3 mois.</li>
  <li>Vérifier que l'unité extérieure n'est pas obstruée (feuilles, neige, végétation).</li>
  <li>Ne pas réduire excessivement la consigne de température (les arrêts-redémarrages fréquents usent le compresseur).</li>
  <li>Signaler tout bruit inhabituel à votre installateur sans attendre la prochaine visite.</li>
</ul>

<blockquote class="gm-pullquote">
  "Un filtre encrassé peut faire chuter le COP de 10 à 15 %. Sur une saison de chauffe, c'est une surconsommation visible sur votre facture. Le nettoyage prend cinq minutes."
</blockquote>

<h2>Combien coûte l'entretien d'une PAC</h2>
<p>Le coût d'une visite d'entretien annuelle dépend du type d'installation, de la région et de l'installateur. À titre indicatif, comptez entre 100 € et 200 € pour une PAC résidentielle standard. Ce montant inclut généralement la main-d'œuvre et les vérifications listées ci-dessus, mais pas le remplacement éventuel de pièces ou le rechargement en fluide frigorigène.</p>
<p>Rapporté à la durée de vie d'une installation (15 à 20 ans) et aux économies qu'elle génère sur les factures de chauffage, c'est un investissement rentable. Une PAC dont le COP se dégrade faute d'entretien peut consommer 15 à 20 % d'électricité en plus.</p>

<h2>Les conséquences d'un défaut d'entretien</h2>
<p>Un manque d'entretien n'entraîne pas une panne immédiate, mais une dégradation progressive :</p>
<ul class="gm-checklist">
  <li>Baisse du COP et augmentation de la consommation électrique.</li>
  <li>Usure prématurée du compresseur (la pièce la plus coûteuse à remplacer).</li>
  <li>Risque de fuite de fluide frigorigène non détectée (impact environnemental et perte de performance).</li>
  <li>Perte de la garantie constructeur en cas de sinistre.</li>
  <li>Réduction de la durée de vie globale de l'installation.</li>
</ul>
<p>Pour tout comprendre sur la durée de vie d'une PAC, lisez notre article <a href="/blog/duree-de-vie-pompe-a-chaleur">Durée de vie d'une PAC : combien d'années peut-on en attendre</a>.</p>

<h2>Groupe Merlin assure le suivi de votre installation</h2>
<p>Nos techniciens assurent l'entretien des PAC que nous installons dans la Nièvre et l'Yonne. Délai d'intervention garanti : <strong>48 heures ouvrées</strong>. Nos deux agences de Clamecy et Corbigny couvrent l'ensemble du territoire.</p>
<p>Si vous rencontrez un problème entre deux entretiens, consultez notre article <a href="/blog/pannes-pompe-a-chaleur-solutions">Les pannes courantes de pompe à chaleur et leurs solutions</a> ou <a href="/contact"><strong>contactez-nous directement</strong></a>.</p>
<p><em>Sources : réglementation F-Gas (règlement UE 517/2014), <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>, recommandations fabricants.</em></p>
`,
  },
  {
    slug: "duree-de-vie-pompe-a-chaleur",
    title: "Durée de vie d'une PAC : combien d'années peut-on en attendre",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "duree-de-vie-pompe-a-chaleur.jpg",
    imgDir: "blog",
    excerpt:
      "Une pompe à chaleur bien installée et bien entretenue dure entre 15 et 20 ans. Voici ce qui détermine cette longévité, comment la préserver et à quel moment anticiper le remplacement.",
    body: `

<p>Quand on investit entre 10 000 € et 16 000 € dans une pompe à chaleur, la question de la durée de vie est légitime. Combien d'années va-t-elle durer ? Quand faudra-t-il la remplacer ? Est-ce que les économies générées compenseront l'investissement sur la durée ?</p>
<p>La réponse dépend de trois facteurs principaux : la qualité de l'installation initiale, l'entretien régulier et le bon dimensionnement. Une PAC correctement posée et entretenue dure entre 15 et 20 ans. Une PAC sous-dimensionnée, mal installée ou jamais vérifiée peut tomber en panne bien avant.</p>

<h2>La durée de vie moyenne : 15 à 20 ans</h2>
<p>La durée de vie de 15 à 20 ans est la référence communément citée par les fabricants et les organismes comme l'<a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a> pour les PAC résidentielles bien entretenues. Elle s'applique à l'ensemble du système : unité extérieure, compresseur, circuit hydraulique (pour les air/eau) et régulation.</p>
<p>Certaines marques avancent des durées supérieures pour leurs compresseurs. Ces chiffres correspondent à des conditions d'utilisation optimales — installation correctement dimensionnée, entretien régulier, pas de cycles de marche/arrêt intempestifs.</p>
<p>En pratique, les composants ne vieillissent pas tous au même rythme. Le compresseur est la pièce la plus sollicitée et la plus coûteuse. Les filtres, les sondes et les cartes électroniques peuvent nécessiter un remplacement avant la fin de vie du compresseur.</p>

<h2>Les facteurs qui allongent ou raccourcissent la longévité</h2>
<table class="gm-compare">
  <thead>
    <tr>
      <th>Facteur</th>
      <th>Impact positif (longévité)</th>
      <th>Impact négatif (usure prématurée)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Dimensionnement</td><td>PAC correctement calibrée à la puissance de la maison</td><td>PAC sous ou surdimensionnée → cycles courts et nombreux</td></tr>
    <tr><td>Entretien</td><td>Visite annuelle, filtres nettoyés, pression vérifiée</td><td>Aucun entretien → dégradation du COP et du compresseur</td></tr>
    <tr><td>Utilisation</td><td>Consigne stable, régulation programmée</td><td>Coupures fréquentes, températures extrêmes demandées</td></tr>
    <tr><td>Qualité installation</td><td>Installateur RGE qualifié, raccordements soignés</td><td>Pose bâclée, mauvais raccordements hydrauliques</td></tr>
    <tr><td>Climat local</td><td>Zone tempérée, peu de jours <0°C</td><td>Hivers très rigoureux sollicitant plus le compresseur</td></tr>
  </tbody>
</table>

<h2>Les garanties constructeur : ce qu'elles couvrent vraiment</h2>
<p>La plupart des fabricants proposent une garantie de 2 ans sur les pièces et la main-d'œuvre, souvent extensible à 5 ans sur le compresseur moyennant un contrat d'entretien ou une déclaration d'installation. Certaines marques proposent des garanties compresseur allant jusqu'à 7 ans en option.</p>
<p>Points d'attention avant de signer :</p>
<ul class="gm-checklist">
  <li>La garantie est généralement conditionnée à un entretien régulier par un professionnel habilité.</li>
  <li>Elle couvre les défauts de fabrication, pas l'usure normale ni les dommages liés à une installation incorrecte.</li>
  <li>L'intervention d'un technicien non agréé peut annuler la garantie — vérifiez les conditions.</li>
  <li>Conservez tous les rapports d'intervention : ils servent de preuve en cas de litige.</li>
</ul>

<h2>Les signes qui montrent que votre PAC vieillit</h2>
<ul class="gm-checklist">
  <li>La maison met plus de temps à chauffer à consigne identique.</li>
  <li>La consommation électrique a augmenté sans changement d'usage.</li>
  <li>Des bruits inhabituels (sifflements, claquements, vibrations) sont apparus.</li>
  <li>Des codes erreur s'affichent plus fréquemment sur la régulation.</li>
  <li>Des interventions techniques se multiplient sur le même composant.</li>
  <li>Le COP mesuré lors d'un entretien a chuté de 10 % ou plus par rapport aux valeurs initiales.</li>
</ul>
<p>Ces signaux ne signifient pas qu'il faut remplacer immédiatement l'installation, mais qu'il faut faire diagnostiquer. Un technicien peut souvent prolonger la vie de l'appareil en remplaçant un composant ciblé. En savoir plus : <a href="/blog/pannes-pompe-a-chaleur-solutions">Les pannes courantes de pompe à chaleur et leurs solutions</a>.</p>

<blockquote class="gm-pullquote">
  "Anticiper le remplacement d'une PAC en fin de vie, c'est aussi l'occasion de profiter des nouvelles aides de l'État et des progrès techniques. Un appareil vieux de 15 ans consomme souvent 30 % de plus qu'un modèle récent équivalent."
</blockquote>

<h2>Anticiper le remplacement au bon moment</h2>
<p>Quand votre PAC approche les 12-15 ans de vie et que les pannes commencent à se multiplier, la question du remplacement se pose. Le calcul est simple : si le coût de réparation dépasse 30 % du coût d'un appareil neuf, le remplacement est souvent plus rentable.</p>
<p>Un remplacement anticipé présente un avantage : vous bénéficiez des aides de l'État (MaPrimeRénov', prime CEE) et des progrès des fabricants — les PAC actuelles ont un SCOP nettement supérieur aux modèles d'il y a 10 ans.</p>
<p>Pour préparer votre projet, consultez notre <a href="/blog/pompe-a-chaleur-guide-complet">guide complet pompe à chaleur 2026</a> et notre article sur les <a href="/blog/entretien-pompe-a-chaleur-obligatoire">obligations d'entretien</a>.</p>

<h2>Groupe Merlin : de l'installation au suivi longue durée</h2>
<p>Nos techniciens assurent l'entretien et le dépannage des PAC dans la Nièvre et l'Yonne, y compris des appareils que nous n'avons pas installés. Si votre PAC vieillit et que vous souhaitez un diagnostic honnête — "on répare ou on remplace" — <a href="/contact"><strong>contactez-nous</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, données constructeurs (Daikin, Mitsubishi Electric, Atlantic, Viessmann), <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>.</em></p>
`,
  },
  {
    slug: "pannes-pompe-a-chaleur-solutions",
    title: "Les pannes courantes de pompe à chaleur et leurs solutions",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pannes-pompe-a-chaleur-solutions.jpg",
    imgDir: "blog",
    excerpt:
      "Votre pompe à chaleur affiche un code erreur, fait du bruit ou ne chauffe plus autant qu'avant ? Voici les 5 pannes les plus fréquentes, comment les identifier et ce que vous pouvez faire avant d'appeler un technicien.",
    body: `

<p>Une pompe à chaleur est un équipement fiable, mais aucun appareil électromécanique n'est à l'abri d'une panne. Savoir reconnaître les signes avant-coureurs et distinguer ce que vous pouvez vérifier vous-même de ce qui nécessite un technicien peut vous faire gagner du temps et éviter des frais inutiles.</p>
<p>Voici les 5 pannes que nos techniciens rencontrent le plus souvent dans la Nièvre et l'Yonne.</p>

<h2>Les 5 pannes les plus fréquentes sur une PAC résidentielle</h2>
<table class="gm-compare">
  <thead>
    <tr>
      <th>Panne observée</th>
      <th>Cause probable</th>
      <th>Action recommandée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>La PAC ne chauffe plus ou chauffe insuffisamment</td>
      <td>Pression du fluide basse, filtre encrassé, thermostat mal réglé, cycle de dégivrage</td>
      <td>Vérifier la consigne et le mode ; nettoyer le filtre. Si persistant : appeler un technicien</td>
    </tr>
    <tr>
      <td>Code erreur affiché sur la régulation</td>
      <td>Défaut capteur, problème électrique, surchauffe du compresseur</td>
      <td>Relever le code, consulter le manuel. Ne pas tenter de court-circuiter l'alarme</td>
    </tr>
    <tr>
      <td>Bruit anormal (sifflement, claquement, vibration)</td>
      <td>Corps étranger dans l'unité extérieure, givre excessif, compresseur vieillissant</td>
      <td>Vérifier si l'unité extérieure est obstruée. Si bruit interne persistant : intervention nécessaire</td>
    </tr>
    <tr>
      <td>Givre excessif sur l'unité extérieure</td>
      <td>Cycle de dégivrage défaillant, mauvaise ventilation autour de l'unité</td>
      <td>Vérifier l'espace autour de l'unité (50 cm min). Si givre persistant après dégivrage automatique : appeler</td>
    </tr>
    <tr>
      <td>Consommation électrique qui augmente sans raison</td>
      <td>COP dégradé, filtre encrassé, fuite de fluide, compresseur en perte d'efficacité</td>
      <td>Planifier un entretien pour mesure du COP réel. Comparer avec les valeurs de mise en service</td>
    </tr>
  </tbody>
</table>

<h2>Le cycle de dégivrage : une fausse panne très fréquente</h2>
<p>Par temps froid et humide, votre PAC lance automatiquement un cycle de dégivrage : l'unité extérieure se couvre brièvement de vapeur, la soufflerie ralentit, et l'appareil ne chauffe pas pendant 5 à 15 minutes. C'est normal, pas une panne.</p>
<p>Ce cycle est prévu par le fabricant et déclenché automatiquement par la régulation. Il ne faut pas l'interrompre. Si ce cycle dure plus de 30 minutes ou se répète plusieurs fois par heure, là oui, c'est un signe à signaler.</p>

<h2>Ce que vous pouvez vérifier vous-même</h2>
<ul class="gm-checklist">
  <li>Le disjoncteur dédié à la PAC n'a pas sauté.</li>
  <li>Le thermostat est bien en mode chauffage (et non en mode été ou arrêt).</li>
  <li>La consigne de température est correctement réglée.</li>
  <li>Le filtre de l'unité intérieure (PAC air/air) est propre.</li>
  <li>L'unité extérieure n'est pas obstruée par des feuilles, de la neige ou de la végétation.</li>
  <li>Le code erreur affiché est noté pour le communiquer au technicien.</li>
</ul>

<blockquote class="gm-pullquote">
  "La majorité des appels que nous recevons en urgence l'hiver se règlent en deux minutes au téléphone : un disjoncteur sauté, une consigne en mode été oubliée, un filtre bouché. Vérifiez ces points avant d'appeler."
</blockquote>

<h2>Quand appeler un professionnel sans attendre</h2>
<p>Certaines situations nécessitent une intervention rapide, sans tenter de bricoler :</p>
<ul class="gm-checklist">
  <li>Odeur de brûlé ou fumée provenant de l'unité intérieure ou extérieure.</li>
  <li>Fuite d'eau visible au niveau de l'unité extérieure hors gel.</li>
  <li>Bruit métallique fort dans le compresseur.</li>
  <li>Code erreur qui revient après réinitialisation.</li>
  <li>Températures très basses et panne totale de chauffage (urgence chauffage).</li>
</ul>
<p>Pour les cas où votre PAC ne chauffe plus du tout, consultez notre article détaillé <a href="/blog/pompe-a-chaleur-ne-chauffe-plus">Pompe à chaleur qui ne chauffe plus : diagnostic et dépannage</a>.</p>

<h2>Prévenir plutôt que guérir : l'entretien régulier</h2>
<p>La majorité des pannes courantes sont évitables avec un entretien annuel : vérification de la pression du fluide, nettoyage des échangeurs, contrôle des connexions électriques. Une PAC entretenue tombe moins souvent en panne et conserve ses performances sur toute sa durée de vie.</p>
<p>Tout savoir sur ce que comprend un entretien : <a href="/blog/entretien-pompe-a-chaleur-obligatoire">Entretien obligatoire de votre pompe à chaleur</a>.</p>

<h2>Groupe Merlin : 48 heures ouvrées pour intervenir</h2>
<p>Notre délai d'intervention garanti est de <strong>48 heures ouvrées</strong> dans la Nièvre et l'Yonne. Vous n'attendez pas une semaine un technicien venu de loin. Nos agences de Clamecy et Corbigny couvrent l'ensemble du territoire.</p>
<p>En cas de panne, <a href="/contact"><strong>contactez-nous</strong></a>. Si vous cherchez à comprendre ce qui se passe avant d'appeler, consultez notre <a href="/blog/pompe-a-chaleur-guide-complet">guide complet pompe à chaleur</a>.</p>
<p><em>Sources : retours techniciens Groupe Merlin, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, documentation fabricants.</em></p>
`,
  },
  {
    slug: "pompe-a-chaleur-ne-chauffe-plus",
    title: "Pompe à chaleur qui ne chauffe plus : diagnostic et dépannage",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pompe-a-chaleur-ne-chauffe-plus.jpg",
    imgDir: "blog",
    excerpt:
      "Votre pompe à chaleur tourne mais la maison ne chauffe plus, ou chauffe nettement moins bien qu'avant ? Voici comment diagnostiquer la cause étape par étape, ce que vous pouvez vérifier seul et quand appeler un technicien.",
    body: `

<p>C'est le scénario redouté en plein hiver : vous rentrez chez vous, il fait froid, et la PAC tourne mais la maison ne chauffe plus. Ou presque plus. Avant de paniquer et d'appeler en urgence, il y a quelques vérifications simples à faire. La majorité des cas ont une cause simple et réparable rapidement.</p>

<h2>Avant tout : distinguer "PAC éteinte" et "PAC qui tourne sans chauffer"</h2>
<p>Si la PAC est complètement éteinte (aucun voyant, aucun bruit), le problème est électrique : disjoncteur sauté, coupure de courant, contact défaillant. Vérifiez le tableau électrique en priorité.</p>
<p>Si la PAC tourne (vous entendez le compresseur et le ventilateur) mais ne chauffe pas ou chauffe moins bien qu'avant, les causes sont différentes. C'est ce cas que nous détaillons ici.</p>

<h2>Les vérifications de base à faire vous-même</h2>
<ul class="gm-checklist">
  <li><strong>La consigne de température</strong> : vérifiez que le thermostat est réglé sur une température supérieure à la température ambiante. Un thermostat réglé à 18 °C dans une maison à 19 °C ne va pas déclencher le chauffage.</li>
  <li><strong>Le mode de fonctionnement</strong> : certaines PAC réversibles ont un mode "été" et un mode "hiver". Vérifiez que vous êtes bien en mode chauffage.</li>
  <li><strong>Le filtre de l'unité intérieure</strong> (PAC air/air) : un filtre encrassé réduit fortement le débit d'air et donc la chaleur distribuée. Nettoyez-le si besoin.</li>
  <li><strong>L'unité extérieure</strong> : vérifiez qu'elle n'est pas obstruée (neige, feuilles, végétation). Laissez au moins 50 cm dégagés sur tous les côtés.</li>
  <li><strong>Le givre</strong> : si l'unité extérieure est couverte de givre, attendez la fin du cycle de dégivrage automatique (5 à 15 minutes). Si le givre persiste, c'est anormal.</li>
</ul>

<h2>Les causes fréquentes d'une perte de chauffe</h2>
<table class="gm-compare">
  <thead>
    <tr>
      <th>Symptôme</th>
      <th>Cause probable</th>
      <th>Que faire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tourne mais température ne monte pas</td>
      <td>Pression fluide basse (fuite légère), compresseur défaillant</td>
      <td>Intervention technicien nécessaire</td>
    </tr>
    <tr>
      <td>Chauffe moins bien qu'avant</td>
      <td>Filtre encrassé, échangeur sale, COP dégradé</td>
      <td>Nettoyage filtre, puis entretien annuel si COP mesuré en baisse</td>
    </tr>
    <tr>
      <td>Cycle dégivrage très fréquent</td>
      <td>Capteur de dégivrage défaillant, mauvaise implantation unité extérieure</td>
      <td>Appeler si le cycle dure >30 min ou se répète >3 fois/h</td>
    </tr>
    <tr>
      <td>Code erreur sur la régulation</td>
      <td>Capteur, carte électronique, surchauffe compresseur</td>
      <td>Relever le code, couper l'appareil 5 min, redémarrer. Si code revient : appeler</td>
    </tr>
    <tr>
      <td>Radiateurs froids mais PAC tourne</td>
      <td>Problème circulation d'eau (pompe hydraulique), vanne bloquée (PAC air/eau)</td>
      <td>Vérifier la pression du circuit eau (manomètre sur le circuit) ; appeler si <1 bar</td>
    </tr>
  </tbody>
</table>

<h2>Comprendre le cycle de dégivrage</h2>
<p>Par temps froid et humide — typique d'un hiver dans la Nièvre — votre PAC lance automatiquement un cycle de dégivrage toutes les quelques heures. Pendant ce cycle de 5 à 15 minutes :</p>
<ul class="gm-checklist">
  <li>L'unité extérieure peut se couvrir de vapeur.</li>
  <li>La soufflerie de l'unité extérieure peut s'arrêter.</li>
  <li>La chaleur distribuée dans la maison diminue temporairement.</li>
</ul>
<p>Ce comportement est normal et prévu par le constructeur. Ce n'est pas une panne. Si vous avez un doute, attendez 20 minutes avant de conclure que la PAC ne fonctionne pas correctement.</p>

<blockquote class="gm-pullquote">
  "En hiver, quand un client nous appelle parce que sa PAC 'ne chauffe plus', la première question c'est : est-ce qu'il y a de la vapeur autour de l'unité extérieure ? Dans 30 % des cas, c'est juste le dégivrage en cours."
</blockquote>

<h2>Quand c'est sérieux : ne pas tarder à appeler</h2>
<p>Certaines situations nécessitent une intervention rapide, sans attendre :</p>
<ul class="gm-checklist">
  <li>Il fait très froid dehors (températures négatives) et vous n'avez plus de chauffage du tout.</li>
  <li>Le code erreur revient après réinitialisation.</li>
  <li>Vous entendez un bruit métallique ou un claquement dans le compresseur.</li>
  <li>La pression du circuit hydraulique est en dessous de 1 bar (PAC air/eau) — risque de dommages sur la pompe.</li>
  <li>La PAC fonctionne en continu sans jamais atteindre la consigne de température.</li>
</ul>

<h2>Comment éviter que ça se reproduise</h2>
<p>La grande majorité des cas de "PAC qui ne chauffe plus" sont liés à un manque d'entretien ou à un mauvais dimensionnement initial. Un entretien annuel permet de détecter les baisses de pression, les filtres encrassés et les signes avant-coureurs de défaillance avant qu'ils deviennent des pannes.</p>
<p>Pour tout savoir sur l'entretien : <a href="/blog/entretien-pompe-a-chaleur-obligatoire">Entretien obligatoire de votre pompe à chaleur</a>. Pour un panorama de toutes les pannes fréquentes : <a href="/blog/pannes-pompe-a-chaleur-solutions">Les pannes courantes de pompe à chaleur et leurs solutions</a>. Et si vous vous interrogez sur le bon dimensionnement de votre installation : <a href="/blog/dimensionnement-pompe-a-chaleur">Bien dimensionner sa pompe à chaleur</a>.</p>

<h2>Groupe Merlin : intervention en 48 heures ouvrées</h2>
<p>Nos techniciens interviennent dans la Nièvre et l'Yonne dans un délai de <strong>48 heures ouvrées</strong>. Si vous êtes dans une situation d'urgence chauffage, <a href="/contact"><strong>contactez-nous</strong></a> directement. Précisez le code erreur affiché si vous en avez un, et le type de PAC — ça nous permet de préparer l'intervention.</p>
<p><em>Sources : retours techniciens Groupe Merlin, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>.</em></p>
`,
  },
  /* ===== COCON PAC — SILO 7 : LOCAL NIÈVRE / YONNE ===== */
  {
    slug: "installateur-pompe-a-chaleur-nievre",
    title: "Installateur de pompe à chaleur dans la Nièvre : comment bien choisir",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installateur-pompe-a-chaleur-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Comment choisir un installateur de pompe à chaleur dans la Nièvre : certification RGE, ancrage local, visite préalable et ce que le Groupe Merlin apporte concrètement dans le département.",
    body: `

<p>Vous habitez dans la Nièvre et vous cherchez un installateur de pompe à chaleur sérieux, pas un sous-traitant envoyé par une enseigne nationale qui ne remettra jamais les pieds dans votre maison après la pose.</p>
<p>Voici les critères qui comptent vraiment pour choisir un installateur PAC dans notre région et ce que Groupe Merlin apporte concrètement sur chaque point.</p>

<h2>Le premier critère : la certification RGE QualiPAC</h2>
<p>Sans certification RGE QualiPAC, votre installateur ne peut pas vous faire bénéficier de MaPrimeRénov' ni de la prime CEE. Ce sont plusieurs milliers d'euros d'aides que vous perdez. Ce critère est non négociable : vérifiez-le avant toute autre chose.</p>
<p>La certification RGE (Reconnue Garante de l'Environnement) est délivrée par des organismes accrédités et renouvelée régulièrement. Elle garantit que l'installateur a suivi une formation spécifique sur la technologie concernée et qu'il respecte les règles de l'art en matière d'installation et de performance.</p>
<p>Pour vérifier la certification d'un installateur, vous pouvez consulter le site <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a> et rechercher les artisans RGE dans votre commune.</p>
<p>Le Groupe Merlin est certifié RGE QualiPAC, parmi cinq certifications RGE au total (QualiPAC, QualiSol, Qualibois, QualiPV, Éco Artisan), complétées par la certification Qualigaz hors RGE.</p>

<h2>Le deuxième critère : la visite préalable systématique</h2>
<p>Une pompe à chaleur mal dimensionnée, c'est une maison froide l'hiver ou une PAC qui s'use en quelques années. Le dimensionnement correct ne se fait qu'après une visite de votre logement. Un installateur qui vous propose un prix au téléphone sur la base de votre superficie est un installateur qui ne peut pas garantir la performance de ce qu'il vous installe.</p>
<p>Chez le Groupe Merlin, nous ne faisons jamais de devis PAC sans visite préalable. C'est notre politique, et nous la tenons même pour les petites installations. Lors de la visite, notre technicien calcule les déperditions thermiques de votre logement, vérifie la compatibilité de vos radiateurs et vous explique exactement ce qu'il va installer et pourquoi.</p>

<h2>Le troisième critère : l'ancrage local dans la Nièvre</h2>
<p>Une pompe à chaleur, ça s'entretient et ça peut avoir des pannes. La question à poser à votre installateur : "Dans 10 ans, si ma PAC tombe en panne en janvier, est-ce que vous pouvez intervenir rapidement ?"</p>
<p>Un installateur qui sous-traite à des équipes d'une autre région n'a pas de réponse garantie à cette question. Un artisan local ancré dans le département, oui.</p>
<p>Nous sommes installés à Clamecy et à Corbigny. Nos techniciens connaissent la Nièvre, ses routes, ses conditions climatiques et ses types de logements (maisons de bourg, longères, fermes en pierre). Et nous intervenons en dépannage sous <strong>48 heures ouvrées</strong> dans la Nièvre et dans l'Yonne.</p>

<h2>Les particularités du bâti nivernais pour la PAC</h2>
<p>La Nièvre est une région où les maisons en pierre sont omniprésentes. Longères, fermes rénovées, maisons de bourg du XIXe siècle : ces logements ont une forte inertie thermique et des caractéristiques qui changent le dimensionnement d'une PAC par rapport à un pavillon récent.</p>
<ul class="gm-checklist">
  <li><strong>Les murs en pierre épaisse</strong> (60 à 80 cm) ont une bonne inertie mais des déperditions importantes si non isolés. Ça conditionne la puissance nécessaire.</li>
  <li><strong>Les radiateurs d'époque</strong>, souvent en fonte, peuvent nécessiter une vérification de compatibilité avec une PAC basse température avant de finaliser le choix du modèle.</li>
  <li><strong>Les configurations de chaufferie</strong> dans les vieilles bâtisses (caves, dépendances, greniers) peuvent imposer des solutions d'installation spécifiques pour l'unité extérieure.</li>
  <li><strong>Le réseau électrique</strong> de certaines maisons anciennes peut nécessiter une mise à niveau avant l'installation d'une PAC.</li>
</ul>
<p>Ces particularités, nos techniciens les connaissent parce qu'ils travaillent dans la Nièvre depuis plus de 14 ans. Ils ne découvrent pas votre type de logement le jour du chantier.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les 3 critères pour choisir un installateur PAC dans la Nièvre">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <rect x="20" y="20" width="190" height="160" rx="10" fill="#FAC864"/>
    <text x="115" y="55" font-weight="700" font-size="15">1. RGE QualiPAC</text>
    <text x="115" y="82" font-size="12">Obligatoire pour les aides</text>
    <text x="115" y="102" font-size="12">MaPrimeRénov' + CEE.</text>
    <text x="115" y="130" font-size="11" fill="#5a5a66">Vérifiable sur</text>
    <text x="115" y="148" font-size="11" fill="#5a5a66">france-renov.gouv.fr</text>
    <rect x="245" y="20" width="190" height="160" rx="10" fill="#FAC864"/>
    <text x="340" y="55" font-weight="700" font-size="15">2. Visite préalable</text>
    <text x="340" y="82" font-size="12">Sans visite, pas de</text>
    <text x="340" y="102" font-size="12">dimensionnement juste.</text>
    <text x="340" y="130" font-size="11" fill="#5a5a66">Refusez les devis</text>
    <text x="340" y="148" font-size="11" fill="#5a5a66">sans déplacement.</text>
    <rect x="470" y="20" width="190" height="160" rx="10" fill="#171723"/>
    <text x="565" y="55" fill="#FAC864" font-weight="700" font-size="15">3. Ancrage local</text>
    <text x="565" y="82" fill="#fff" font-size="12">Qui sera là dans 10 ans</text>
    <text x="565" y="102" fill="#fff" font-size="12">pour dépanner votre PAC ?</text>
    <text x="565" y="130" fill="#EAE1CD" font-size="11">Dépannage 48 h</text>
    <text x="565" y="148" fill="#EAE1CD" font-size="11">dans la Nièvre.</text>
  </g>
</svg>
<span class="gm-schema__caption">Les 3 critères essentiels pour choisir un installateur PAC dans la Nièvre — dans cet ordre.</span>
</div>

<p class="gm-pullquote">Un artisan qui ne se déplace pas avant de vous faire un devis ne peut pas garantir la performance de votre installation. C'est vrai partout, et encore plus dans les vieilles maisons de la Nièvre.</p>

<h2>Ce que vous pouvez attendre de Groupe Merlin</h2>
<p>Nous sommes installés à <a href="/agences/clamecy">Clamecy</a> (agence principale) et à <a href="/agences/corbigny">Corbigny</a> (ouverte en juin 2026). Nous intervenons sur l'ensemble du département de la Nièvre et dans l'Yonne.</p>
<p>Sur chaque projet PAC, voici ce que vous obtenez :</p>
<ul class="gm-checklist">
  <li>Une visite préalable gratuite de votre logement, avec calcul des déperditions thermiques.</li>
  <li>Un devis détaillé : matériel, pose, dépose de l'ancienne chaudière, aides déduites, reste à charge clair.</li>
  <li>La prise en charge complète des dossiers MaPrimeRénov' et CEE.</li>
  <li>L'installation et la mise en service par notre équipe, avec explication du fonctionnement.</li>
  <li>Un suivi dans la durée et un contrat d'entretien disponible.</li>
  <li>Le dépannage sous 48 heures ouvrées si vous avez un problème.</li>
</ul>

<p>Pour démarrer votre projet, <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Pour tout savoir sur les aides disponibles en 2026, consultez <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article dédié</strong></a>. Et pour comprendre toutes les dimensions du projet PAC avant de vous lancer, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet</strong></a> est le bon point de départ.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "installateur-pompe-a-chaleur-yonne",
    title: "Installateur de pompe à chaleur dans l'Yonne : trouver le bon artisan",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installateur-pompe-a-chaleur-yonne.jpg",
    imgDir: "blog",
    excerpt:
      "Trouver un installateur de pompe à chaleur dans l'Yonne : critères de sélection, certification RGE, aides 2026 et intervention du Groupe Merlin dans le département.",
    body: `

<p>Vous habitez dans l'Yonne et vous cherchez un installateur de pompe à chaleur qui connaît votre région, qui est certifié RGE pour débloquer les aides et qui sera encore là dans dix ans pour intervenir si vous avez un problème.</p>
<p>Voici comment choisir et ce que le Groupe Merlin propose concrètement dans l'Yonne.</p>

<h2>Les critères de sélection valables dans l'Yonne comme ailleurs</h2>
<p>Les critères pour choisir un bon installateur PAC sont les mêmes partout en France. Dans l'Yonne, trois points méritent une attention particulière :</p>
<ul class="gm-checklist">
  <li><strong>La certification RGE QualiPAC</strong> est indispensable. Sans elle, vous ne pouvez pas bénéficier de MaPrimeRénov' ni de la prime CEE, soit potentiellement plusieurs milliers d'euros d'aides perdues. Vérifiez la certification avant tout engagement sur <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</li>
  <li><strong>La visite préalable est non négociable.</strong> Un installateur qui vous propose un prix sans avoir vu votre logement ne peut pas dimensionner correctement votre PAC. Dans l'Yonne, on trouve beaucoup de maisons rurales avec des configurations atypiques (longères, corps de ferme, maisons de bourg XIXe). Ces logements ont besoin d'une étude sérieuse avant toute installation.</li>
  <li><strong>L'ancrage local compte pour la durée.</strong> La question du dépannage dans 5 ou 10 ans est centrale. Un artisan local qui connaît votre logement et votre installation sera toujours plus réactif qu'un prestataire national qui sous-traite.</li>
</ul>

<h2>L'Yonne : un département avec ses spécificités pour la PAC</h2>
<p>L'Yonne présente des caractéristiques locales qui influencent le choix et le dimensionnement d'une pompe à chaleur :</p>
<ul class="gm-checklist">
  <li><strong>Le bâti</strong> est majoritairement ancien dans les zones rurales : maisons en pierre calcaire, logements du XIXe et début XXe siècle avec une forte inertie thermique et souvent peu ou pas isolés.</li>
  <li><strong>Le climat</strong> dans l'Yonne est de type continental tempéré (zone H1), avec des hivers pouvant descendre régulièrement en dessous de 0 °C. La PAC doit être dimensionnée en conséquence, avec une puissance adaptée aux journées les plus froides.</li>
  <li><strong>Le réseau de gaz</strong> n'est pas présent partout dans les communes rurales de l'Yonne. Beaucoup de foyers chauffent encore au fioul ou à l'électricité directe, deux situations où la PAC est particulièrement pertinente.</li>
</ul>

<table class="gm-compare">
<thead><tr><th>Situation actuelle</th><th>PAC recommandée</th><th>Aides 2026</th></tr></thead>
<tbody>
<tr><td>Chaudière fioul en fin de vie</td><td>PAC air/eau</td><td>MPR + CEE + TVA 5,5 % + éco-PTZ</td></tr>
<tr><td>Chauffage électrique direct (convecteurs)</td><td>PAC air/air ou air/eau</td><td>CEE + TVA 5,5 %</td></tr>
<tr><td>Chaudière gaz récente</td><td>À évaluer — dépend de votre situation</td><td>CEE + TVA 5,5 % (pas MPR)</td></tr>
</tbody>
</table>

<p class="gm-pullquote">Dans l'Yonne, les maisons en pierre non isolées sont nombreuses. Elles se chauffent différemment d'un pavillon récent. Exigez un installateur qui connaît ce type de logement.</p>

<h2>Les aides disponibles dans l'Yonne en 2026</h2>
<p>Les aides de l'État sont les mêmes dans l'Yonne que partout en France. Pour une PAC air/eau en 2026 :</p>
<ul class="gm-checklist">
  <li><strong>MaPrimeRénov'</strong> : jusqu'à 5 000 € selon vos revenus, conditionnée à un artisan RGE et à un dossier déposé avant les travaux.</li>
  <li><strong>Prime CEE</strong> : plusieurs milliers d'euros supplémentaires, versée par les fournisseurs d'énergie, bonifiée sur le remplacement d'une chaudière fioul.</li>
  <li><strong>TVA à 5,5 %</strong> au lieu de 20 % : automatique avec un artisan RGE, déjà dans votre devis.</li>
  <li><strong>Éco-PTZ</strong> : jusqu'à 30 000 € de prêt sans intérêts pour financer le reste à charge.</li>
</ul>
<p>Pour les ménages modestes qui remplacent une chaudière fioul dans l'Yonne, l'ensemble de ces aides peut atteindre <strong>10 800 €</strong>. Pour calculer votre situation précise, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>

<h2>Groupe Merlin dans l'Yonne</h2>
<p>Le Groupe Merlin est implanté à Clamecy (Nièvre), qui est aussi la ville la plus proche pour de nombreuses communes du nord de l'Yonne (Vézelay, Avallon, Lormes, Corbigny). Nous intervenons régulièrement sur des chantiers dans l'Yonne depuis notre création il y a plus de 14 ans, et nous accompagnons plus de 500 familles dans la Nièvre et dans l'Yonne.</p>
<p>Nous nous déplaçons gratuitement pour la visite préalable dans les secteurs du nord de l'Yonne couverts par notre rayon d'intervention. Pour vérifier si votre commune est dans notre zone, <a href="/contact"><strong>contactez-nous directement</strong></a>.</p>
<p>Pour démarrer votre projet PAC dans l'Yonne, <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Pour comprendre toutes les dimensions du sujet avant de vous lancer, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a> et <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>l'article sur les aides 2026</strong></a> répondront à vos premières questions.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "pompe-a-chaleur-maison-pierre-nievre",
    title: "PAC dans une maison ancienne en pierre dans la Nièvre : ce qui change",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pompe-a-chaleur-maison-pierre-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Peut-on installer une pompe à chaleur dans une vieille maison en pierre dans la Nièvre ? Ce qui change par rapport à un logement récent, les précautions à prendre et pourquoi ça peut très bien fonctionner.",
    body: `

<p>La Nièvre est une région de maisons en pierre. Longères, corps de ferme rénovés, maisons de bourg en calcaire ou en grès : c'est le bâti dominant du département. Et c'est aussi le type de logement pour lequel on nous pose le plus de questions sur la pompe à chaleur : est-ce que ça marche dans une vieille maison, est-ce qu'il faut d'abord isoler, est-ce que les vieux radiateurs sont compatibles ?</p>
<p>La réponse courte : oui, ça marche, et souvent très bien. Mais il faut comprendre les particularités de ce type de logement pour dimensionner correctement l'installation.</p>

<h2>Ce que l'inertie thermique change pour la PAC</h2>
<p>Une maison en pierre épaisse a une <strong>forte inertie thermique</strong>. Concrètement, cela signifie deux choses :</p>
<ul class="gm-checklist">
  <li>Elle se <strong>réchauffe lentement</strong> quand on allume le chauffage : les murs absorbent la chaleur progressivement avant de la restituer.</li>
  <li>Elle se <strong>refroidit aussi lentement</strong> une fois chauffée : même si vous coupez le chauffage plusieurs heures, la maison reste tempérée.</li>
</ul>
<p>Ce comportement thermique est un atout pour le confort, à condition d'adapter le mode de chauffe. La pompe à chaleur, qui fonctionne en chauffe continue à basse température, est particulièrement bien adaptée à ce type de logement. Contrairement aux chaudières qui chauffent en coups de chauffe successifs à haute température, la PAC maintient une température stable et constante. C'est exactement ce que demande un logement à forte inertie.</p>

<h2>La compatibilité avec les vieux radiateurs</h2>
<p>C'est souvent la question centrale : est-ce que mes vieux radiateurs en fonte sont compatibles avec une PAC ?</p>
<p>La réponse dépend de leur taille. Les PAC air/eau modernes fonctionnent à <strong>basse température</strong> : l'eau du circuit hydraulique est chauffée à 35 à 45 °C, parfois jusqu'à 55 °C selon les modèles. Les chaudières à gaz ou fioul, elles, chauffent l'eau à 60 à 80 °C.</p>
<p>Pour qu'un radiateur chauffe correctement une pièce à 45 °C d'eau plutôt qu'à 70 °C, il doit être <strong>plus grand</strong>, c'est-à-dire avoir une plus grande surface d'échange. Les vieux radiateurs en fonte des maisons de pierre nivernaises sont souvent très grands et imposants, précisément parce qu'ils ont été conçus pour une époque où on ne calculait pas trop finement les déperditions. Dans de nombreux cas, ils sont <strong>surdimensionnés par rapport aux besoins</strong>, ce qui les rend très bien compatibles avec une PAC basse température.</p>
<p>En revanche, dans certaines maisons rénovées où les vieux radiateurs en fonte ont été remplacés par des radiateurs acier compact de petite taille, ces derniers peuvent être insuffisants pour une PAC basse température. Cela se vérifie lors de la visite préalable.</p>

<table class="gm-compare">
<thead><tr><th>Type d'émetteur</th><th>Compatibilité PAC basse température</th><th>Remarque</th></tr></thead>
<tbody>
<tr><td>Radiateur en fonte (ancien)</td><td>✅ Souvent très bien compatible</td><td>Grande surface d'échange, adapté à basse T°</td></tr>
<tr><td>Radiateur acier compact (moderne)</td><td>⚠️ À vérifier selon la taille</td><td>Peut nécessiter remplacement si sous-dimensionné</td></tr>
<tr><td>Plancher chauffant</td><td>✅ Idéal pour PAC basse température</td><td>Basse T° parfaite pour le plancher</td></tr>
<tr><td>Convecteurs électriques</td><td>❌ Non compatible</td><td>Circuit aéraulique, pas hydraulique</td></tr>
</tbody>
</table>

<p class="gm-pullquote">Les vieux radiateurs en fonte des maisons nivernaises sont souvent les meilleurs amis de la PAC basse température. Leur grande surface d'échange compense parfaitement la température de l'eau plus basse.</p>

<h2>Faut-il d'abord isoler avant d'installer la PAC</h2>
<p>C'est une question légitime. La réponse nuancée :</p>
<p>Si votre maison en pierre est une <strong>passoire thermique avérée</strong> (DPE E, F ou G), installer une PAC avant d'isoler peut donner des résultats décevants : la PAC devra travailler en permanence pour compenser des déperditions très importantes, et votre facture d'électricité sera élevée.</p>
<p>Mais si votre maison a un niveau d'isolation <strong>moyen</strong> (DPE C ou D), ou si vous avez déjà isolé les combles et remplacé les fenêtres, une PAC bien dimensionnée fonctionnera parfaitement sans attendre des travaux d'isolation complets. Dans ce cas, la PAC peut même vous encourager à isoler progressivement par la suite, en voyant vos factures baisser.</p>
<p>C'est votre installateur qui doit évaluer cette question lors de la visite, pas un algorithme en ligne. Il peut vous dire si l'installation d'une PAC sans isolation préalable est réaliste dans votre maison, ou si l'isolation est une étape préalable indispensable.</p>

<h2>Le cas des maisons très mal isolées</h2>
<p>Dans les rares cas où la maison est très mal isolée (DPE F ou G, murs non isolés, combles non traités, fenêtres d'origine simple vitrage), la PAC seule ne suffira peut-être pas à maintenir le confort voulu les jours les plus froids, ou elle le fera à un coût trop élevé. Dans ce cas, nous vous le disons lors de la visite. Il vaut mieux l'entendre avant de signer un devis qu'après l'installation.</p>

<h2>Groupe Merlin et les maisons en pierre de la Nièvre</h2>
<p>Depuis plus de 14 ans, nous installons des pompes à chaleur dans des maisons en pierre dans la Nièvre et dans l'Yonne. C'est notre quotidien. Nous connaissons les configurations classiques : la chaufferie dans la cave voûtée, le salon en longueur avec ses radiateurs en fonte aux deux extrémités, la dépendance transformée en pièce de vie qu'il faut chauffer en extension.</p>
<p>Chaque projet commence par une visite de votre logement. On regarde tout : l'état des murs, les radiateurs, la configuration de l'installation hydraulique, l'alimentation électrique et l'emplacement possible de l'unité extérieure. Et on vous présente une solution adaptée à votre maison, pas une installation standard copiée-collée.</p>
<p>Pour démarrer, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour en savoir plus sur les aides disponibles en 2026, consultez <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article sur les aides</strong></a>. Et pour tout comprendre sur la PAC avant de vous lancer, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet</strong></a> est le bon point de départ.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (guide des pompes à chaleur), <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "pompe-a-chaleur-bourgogne-climat",
    title: "Pompe à chaleur en Bourgogne : adapter l'installation au climat local",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pompe-a-chaleur-bourgogne-climat.jpg",
    imgDir: "blog",
    excerpt:
      "La Bourgogne et ses hivers froids : comment la pompe à chaleur s'adapte au climat local, quelles performances attendre et les points à vérifier pour une installation adaptée à la région.",
    body: `

<p>La Bourgogne, et la Nièvre en particulier, n'est pas une région méditerranéenne. Les hivers y sont froids, parfois très froids en janvier et février, et les maisons rurales avec leurs volumes importants et leurs murs anciens ont des besoins en chaleur significatifs.</p>
<p>La bonne question à se poser avant d'installer une pompe à chaleur en Bourgogne n'est donc pas "est-ce que ça marche ?" mais "comment adapter l'installation aux conditions climatiques locales pour que ça marche bien ?"</p>

<h2>La Bourgogne en zone climatique H1</h2>
<p>La France est découpée en trois grandes zones climatiques (H1, H2, H3) selon les réglementations thermiques. La Bourgogne, dont fait partie la Nièvre et l'Yonne, est classée en <strong>zone H1</strong>, la zone la plus froide (hors montagne). Plus précisément, la Nièvre est en zone <strong>H1c</strong>.</p>
<p>Cette classification a des implications directes pour le dimensionnement d'une PAC :</p>
<ul class="gm-checklist">
  <li>La <strong>température de base</strong> (la température extérieure la plus froide à partir de laquelle on dimensionne) est de −7 °C en zone H1c. C'est la valeur utilisée pour calculer la puissance nécessaire de la PAC.</li>
  <li>Les <strong>déperditions thermiques</strong> à compenser sont plus importantes que dans le sud de la France : les maisons perdent plus de chaleur, et la PAC doit travailler davantage.</li>
  <li>Le <strong>SCOP</strong> (coefficient de performance saisonnier) sera naturellement un peu moins élevé qu'en zone méditerranéenne, parce que la PAC fonctionne par des températures plus basses une partie de l'hiver.</li>
</ul>

<h2>La PAC fonctionne-t-elle bien quand il fait très froid</h2>
<p>C'est la question centrale pour qui habite en Bourgogne. La réponse dépend du modèle choisi et de la façon dont il a été dimensionné.</p>
<p>Les pompes à chaleur air/eau modernes fonctionnent jusqu'à des températures extérieures très basses. La plupart des modèles que nous installons maintiennent leur capacité de chauffe jusqu'à −10 °C ou −15 °C, avec une baisse progressive de leur performance (COP) à mesure que la température extérieure descend. C'est normal et prévu par les constructeurs.</p>
<p>Concrètement : par une nuit à −5 °C en janvier dans la Nièvre, une PAC bien dimensionnée chauffe normalement votre maison. Par une nuit à −12 °C (épisode de grand froid rare), elle continue de fonctionner mais avec un COP un peu plus faible. Si votre maison est correctement isolée et la PAC correctement dimensionnée, vous ne le ressentez pas.</p>

<table class="gm-compare">
<thead><tr><th>Température extérieure</th><th>COP indicatif d'une PAC air/eau</th><th>Impact sur le confort</th></tr></thead>
<tbody>
<tr><td>+7 °C (mi-saison)</td><td>~4,5 – 5</td><td>Fonctionnement optimal</td></tr>
<tr><td>0 °C (hiver normal)</td><td>~3 – 3,5</td><td>Performance bonne, maison chauffée normalement</td></tr>
<tr><td>−7 °C (grand froid zone H1c)</td><td>~2 – 2,5</td><td>PAC en puissance max, maison maintenue en température</td></tr>
<tr><td>En dessous de −10 °C</td><td>Varie selon le modèle</td><td>Certains modèles maintiennent, d'autres réduisent leur puissance</td></tr>
</tbody>
</table>

<p class="gm-pullquote">En Bourgogne, une PAC bien dimensionnée pour le climat local chauffe correctement votre maison même par grand froid. C'est une question de puissance installée et de qualité du dimensionnement.</p>

<h2>Comment adapter le dimensionnement au climat bourguignon</h2>
<p>Pour que votre PAC soit bien adaptée au climat de la Bourgogne, voici les points clés à vérifier avec votre installateur :</p>
<ul class="gm-checklist">
  <li><strong>La puissance doit être calculée à −7 °C</strong>, pas à 0 °C ou à −2 °C. C'est la température de base réglementaire pour la zone H1c. Un dimensionnement fait à une température moins froide conduira à une PAC sous-dimensionnée les jours de grand froid.</li>
  <li><strong>La marge de sécurité</strong> de 10 à 15 % sur la puissance est justifiée dans notre région : les pointes de froid existent et doivent être couvertes.</li>
  <li><strong>Le SCOP minimal recommandé</strong> pour notre zone est de 3,9 selon les critères de performance appliqués par l'ADEME et l'Anah pour MaPrimeRénov'. Vérifiez que le modèle proposé l'atteint.</li>
  <li><strong>La fonction antigel</strong> doit être configurée correctement pour protéger l'installation par températures très négatives, notamment la nuit.</li>
</ul>

<h2>Les étés de plus en plus chauds en Bourgogne</h2>
<p>Le sujet climatique en Bourgogne, c'est aussi les étés. La région connaît des canicules de plus en plus fréquentes, avec des pics à 35-38 °C certaines années. Les maisons en pierre qui gardent bien la fraîcheur jusqu'en juillet deviennent des fours en août si elles ne sont pas aérées correctement.</p>
<p>Une PAC air/eau réversible peut rafraîchir l'été dans certains configurations, mais c'est moins efficace et moins confortable qu'une PAC air/air dédiée. Si le confort estival est important pour vous, une installation combinée (PAC air/eau pour le chauffage principal + quelques splits air/air dans les pièces à vivre pour l'été) est souvent la solution la plus complète.</p>

<h2>Groupe Merlin et le climat de la Nièvre</h2>
<p>Nous installons des pompes à chaleur dans la Nièvre et dans l'Yonne depuis plus de 14 ans. Nous dimensionnons nos installations sur la base des conditions climatiques réelles de la région, pas sur des données moyennes nationales.</p>
<p>Chaque visite préalable intègre les caractéristiques climatiques locales dans le calcul de déperditions thermiques. On ne vous propose pas la même puissance pour une maison dans le Morvan (plus froid, plus humide) que pour une maison dans le val de Loire (plus doux).</p>
<p>Pour démarrer votre projet, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour comprendre tout ce qu'il faut savoir avant d'installer une PAC dans la région, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a> couvre tous les aspects du sujet. Et pour savoir à quelles aides vous avez droit en 2026, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (guide pompe à chaleur), norme EN 14511, réglementation thermique RT2012 (zones climatiques).</em></p>
`,
  },

  /* ===== COCON PAC — SILO 4 : PRIX & INSTALLATION ===== */
  {
    slug: "prix-pompe-a-chaleur-air-eau",
    title: `Prix d'une pompe à chaleur air/eau en ${CONTENT_YEAR} : la fourchette honnête`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prix-pompe-a-chaleur-air-eau.jpg",
    imgDir: "blog",
    excerpt:
      "Combien coûte vraiment une pompe à chaleur air/eau en 2026 : fourchette de prix matériel + pose, décomposition des postes et reste à charge après aides selon votre situation.",
    body: `

<p>Le prix d'une pompe à chaleur air/eau est la première question que tout le monde pose. Et c'est la bonne : avant de décider si c'est le bon investissement pour vous, il faut savoir ce que vous allez vraiment débourser, pas une fourchette vague de 8 000 à 25 000 €.</p>
<p>Voici les prix réels pratiqués sur nos chantiers dans la Nièvre et dans l'Yonne, les postes qui composent ce prix et ce qui fait varier la facture d'un logement à l'autre.</p>

<h2>La fourchette honnête : 10 800 – 15 800 €</h2>
<p>Pour une pompe à chaleur air/eau installée dans une maison individuelle en résidence principale, matériel et pose compris, la fourchette observée en 2026 se situe entre <strong>10 800 € et 15 800 €</strong>. C'est la grille tarifaire que nous appliquons sur nos chantiers dans la région.</p>
<p>Cette fourchette est large parce qu'elle couvre des logements très différents : une maison de 70 m² bien isolée n'a pas le même besoin qu'une longère de 200 m² en pierre brute. La puissance de la PAC (exprimée en kW) est le premier facteur qui fait varier le prix.</p>
<p>En dehors de la puissance, trois autres facteurs influencent le devis :</p>
<ul class="gm-checklist">
  <li><strong>La marque et le modèle</strong> de la PAC retenus selon votre logement et votre budget.</li>
  <li><strong>L'état de votre installation existante</strong> : si vos radiateurs sont sous-dimensionnés pour une PAC basse température, certains peuvent nécessiter d'être remplacés.</li>
  <li><strong>La configuration du chantier</strong> : l'emplacement de l'unité extérieure, la longueur des tranchées ou gaines à tirer, l'accès à la chaufferie.</li>
</ul>
<p>Ces postes additionnels sont détectables lors d'une visite préalable de votre logement. Voilà pourquoi aucun installateur sérieux ne peut vous donner un prix juste au téléphone.</p>

<h2>Décomposition des postes d'un devis PAC</h2>
<p>Un devis sérieux détaille au minimum trois postes :</p>

<table class="gm-compare">
<thead><tr><th>Poste</th><th>Ce qu'il comprend</th><th>Part dans le budget</th></tr></thead>
<tbody>
<tr><td>Matériel</td><td>Unité extérieure, unité intérieure ou ballon thermodynamique ECS, régulateur, éventuels accessoires</td><td>Part importante — varie selon la puissance et la marque</td></tr>
<tr><td>Pose</td><td>Raccordements hydrauliques, raccordements électriques, mise en service, réglage, dépose de l'ancienne chaudière</td><td>Part significative — varie selon la complexité du chantier</td></tr>
<tr><td>Ajustements</td><td>Remplacement de radiateurs sous-dimensionnés, modification du tableau électrique, travaux de maçonnerie si nécessaire</td><td>Variable — détecté à la visite. Peut être nul ou représenter plusieurs centaines d'euros</td></tr>
</tbody>
</table>

<p>Si on vous présente un prix global sans décomposition de ces postes, demandez-le avant de signer. La transparence sur les postes est un indicateur de sérieux.</p>

<p class="gm-pullquote">Un devis PAC sans décomposition des postes matériel / pose / ajustements ne vous permet pas de comparer correctement deux installateurs. Demandez systématiquement le détail.</p>

<h2>Ce que vous payez réellement après aides</h2>
<p>Le prix affiché sur le devis n'est pas ce que vous sortez de votre poche. En 2026, plusieurs aides se cumulent et font baisser significativement le reste à charge :</p>
<ul class="gm-checklist">
  <li><strong>TVA à 5,5 %</strong> au lieu de 20 % : s'applique automatiquement sur toute installation PAC air/eau réalisée par un artisan certifié RGE. Elle est déjà prise en compte dans les prix que nous vous indiquons.</li>
  <li><strong>MaPrimeRénov'</strong> : de 3 000 à 5 000 € selon vos revenus, versée après les travaux par l'Anah.</li>
  <li><strong>Prime CEE</strong> : plusieurs milliers d'euros supplémentaires, versée par les fournisseurs d'énergie.</li>
  <li><strong>Éco-PTZ</strong> : prêt sans intérêts jusqu'à 30 000 € pour financer le reste à charge.</li>
</ul>
<p>Pour les ménages modestes qui remplacent une chaudière fioul, ces aides peuvent cumuler jusqu'à <strong>10 800 €</strong>. Cela réduit le reste à charge réel de manière très significative.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma montrant l'impact des aides sur le reste à charge d'une PAC air/eau">
  <defs>
    <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#171723"/>
    </marker>
  </defs>
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <rect x="20" y="20" width="170" height="140" rx="8" fill="#EAE1CD"/>
    <text x="105" y="48" font-weight="700" font-size="14">Devis brut</text>
    <text x="105" y="78" font-size="22" font-weight="700" fill="#171723">13 000 €</text>
    <text x="105" y="105" font-size="11" fill="#5a5a66">exemple 120 m²</text>
    <text x="105" y="125" font-size="11" fill="#5a5a66">TVA 5,5 % incluse</text>
    <text x="200" y="92" font-size="18" font-weight="700">→</text>
    <rect x="215" y="20" width="210" height="140" rx="8" fill="#FAC864"/>
    <text x="320" y="48" font-weight="700" font-size="14">Aides déduites</text>
    <text x="320" y="72" font-size="13">MPR : jusqu'à 4 000 €</text>
    <text x="320" y="95" font-size="13">CEE : plusieurs k€</text>
    <text x="320" y="118" font-size="11" fill="#5a5a66">Total : jusqu'à 10 800 € (remplacement fioul)</text>
    <text x="436" y="92" font-size="18" font-weight="700">→</text>
    <rect x="451" y="20" width="210" height="140" rx="8" fill="#171723"/>
    <text x="556" y="48" fill="#FAC864" font-weight="700" font-size="14">Reste à charge</text>
    <text x="556" y="78" fill="#fff" font-size="18" font-weight="700">réduit</text>
    <text x="556" y="105" fill="#EAE1CD" font-size="11">finançable via éco-PTZ</text>
    <text x="556" y="125" fill="#EAE1CD" font-size="11">sans intérêts</text>
  </g>
</svg>
<span class="gm-schema__caption">Exemple indicatif — le reste à charge réel dépend de vos revenus, de votre logement et de l'énergie remplacée.</span>
</div>

<h2>Pourquoi les prix varient autant selon les devis</h2>
<p>Si vous avez déjà demandé plusieurs devis pour une PAC, vous avez peut-être constaté des écarts importants entre installateurs. Plusieurs raisons expliquent ces différences :</p>
<ul class="gm-checklist">
  <li><strong>La puissance proposée.</strong> Un installateur qui surévalue la puissance nécessaire vous proposera un matériel plus cher sans que votre maison en ait besoin. Un autre qui la sous-évalue vous exposera à une PAC insuffisante les jours les plus froids.</li>
  <li><strong>La qualité et la gamme du matériel.</strong> Les prix varient significativement selon les marques et les gammes. Ce n'est pas toujours une question de performance : certaines gammes sont mieux adaptées à certaines configurations.</li>
  <li><strong>Le sérieux de l'étude.</strong> Un installateur qui se déplace et fait une étude thermique complète de votre logement intègre des coûts d'étude dans son devis. C'est normal et gage de qualité.</li>
  <li><strong>Les postes cachés.</strong> Certains devis très bas omettent des postes (dépose de l'ancienne chaudière, mise en conformité électrique, ajustements des radiateurs) qui apparaissent en supplément ensuite.</li>
</ul>
<p>Pour comparer deux devis correctement, vérifiez qu'ils incluent exactement les mêmes postes et les mêmes spécifications techniques.</p>

<h2>Comment Groupe Merlin établit ses devis</h2>
<p>Nous nous déplaçons systématiquement chez vous avant d'établir le moindre chiffre. Lors de la visite, nous calculons les déperditions thermiques de votre logement, vérifions l'état et la compatibilité de vos radiateurs, étudions l'emplacement optimal de l'unité extérieure et identifions les éventuels ajustements nécessaires.</p>
<p>Le devis que nous vous remettons détaille tous les postes, intègre la TVA à 5,5 % et présente les aides déduites (MaPrimeRénov' et prime CEE montées par nos soins) avec le reste à charge final. Pas de surprise en cours de chantier.</p>
<p>Pour estimer vos aides et votre reste à charge en deux minutes avant même qu'on se rencontre, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>. Pour qu'un technicien passe chez vous, <a href="/contact"><strong>demandez votre devis gratuit</strong></a>.</p>
<p>Pour tout comprendre sur les aides disponibles, consultez <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article sur les aides 2026</strong></a> et <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a>.</p>
<p><em>Les prix indiqués sont ceux pratiqués en 2026 par Groupe Merlin sur ses chantiers dans la Nièvre et dans l'Yonne. Sources aides : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "prix-pompe-a-chaleur-air-air",
    title: `Prix d'une pompe à chaleur air/air (climatisation réversible) en ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prix-pompe-a-chaleur-air-air.jpg",
    imgDir: "blog",
    excerpt:
      "Prix d'une pompe à chaleur air/air en 2026 : fourchette mono-split et multi-split, aides disponibles et différences avec la PAC air/eau pour guider votre choix.",
    body: `

<p>La pompe à chaleur air/air, souvent appelée climatisation réversible, chauffe l'hiver et rafraîchit l'été. Son prix est nettement inférieur à celui d'une PAC air/eau, mais elle n'offre pas les mêmes prestations et n'est pas éligible aux mêmes aides.</p>
<p>Voici les prix réels d'une installation air/air en 2026, les aides auxquelles vous pouvez prétendre et les cas où cette technologie est la bonne réponse à votre besoin.</p>

<h2>La fourchette de prix : 6 000 – 9 000 €</h2>
<p>Pour une PAC air/air installée dans une maison individuelle, le budget se situe entre <strong>6 000 € et 9 000 €</strong>, matériel et pose compris. Cette fourchette couvre une installation mono-split (une seule unité intérieure) à multi-split 3 ou 4 pièces.</p>
<p>Deux facteurs font principalement varier le prix :</p>
<ul class="gm-checklist">
  <li><strong>Le nombre de splits intérieurs.</strong> Un mono-split pour une pièce unique, c'est le bas de la fourchette. Un multi-split pour traiter le salon et deux chambres, c'est le haut ou au-delà.</li>
  <li><strong>La puissance totale installée</strong>, qui dépend du volume à traiter et de l'isolation du logement.</li>
</ul>

<table class="gm-compare">
<thead><tr><th>Configuration</th><th>Prix indicatif posé</th></tr></thead>
<tbody>
<tr><td>Mono-split (1 pièce)</td><td>2 000 – 4 000 €</td></tr>
<tr><td>Bi-split (2 pièces)</td><td>4 000 – 6 500 €</td></tr>
<tr><td>Tri ou quadri-split (3-4 pièces)</td><td>6 000 – 9 000 €</td></tr>
</tbody>
</table>

<p>Ces prix intègrent l'unité extérieure, les splits intérieurs, la pose et la mise en service. Ils incluent la TVA à 5,5 % appliquée automatiquement avec un artisan certifié RGE.</p>

<h2>Les aides disponibles pour une PAC air/air</h2>
<p>La PAC air/air n'est <strong>pas éligible</strong> au parcours par geste de MaPrimeRénov'. Cette aide est réservée à la PAC air/eau, qui remplace effectivement votre système de chauffage principal.</p>
<p>Pour une PAC air/air, deux aides restent accessibles :</p>
<ul class="gm-checklist">
  <li><strong>La prime CEE</strong> : versée par les fournisseurs d'énergie sur les installations réalisées par un artisan RGE. Son montant pour une PAC air/air est généralement inférieur à celui accordé sur une PAC air/eau.</li>
  <li><strong>La TVA à 5,5 %</strong> au lieu de 20 % : automatique avec un artisan certifié RGE, déjà intégrée dans nos prix.</li>
</ul>
<p>L'éco-PTZ est également cumulable dans certains cas, si les travaux PAC air/air sont inclus dans un projet de rénovation plus large.</p>

<p class="gm-pullquote">La PAC air/air coûte moins cher à installer et est moins aidée par l'État. Si votre objectif principal est de remplacer votre chauffage, la PAC air/eau reste la solution la mieux accompagnée.</p>

<h2>PAC air/air ou PAC air/eau : comment choisir</h2>
<p>Le choix entre les deux technologies dépend de votre situation :</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>PAC air/air</th><th>PAC air/eau</th></tr></thead>
<tbody>
<tr><td>Chauffage principal</td><td>Oui (air pulsé)</td><td>Oui (radiateurs / plancher chauffant)</td></tr>
<tr><td>Rafraîchissement été</td><td>✅ Oui, natif</td><td>Selon modèle</td></tr>
<tr><td>Eau chaude sanitaire</td><td>❌ Non</td><td>✅ Oui sur la plupart des modèles</td></tr>
<tr><td>Remplacement chaudière</td><td>Adapté si chauffage électrique direct</td><td>Adapté si radiateurs hydrauliques</td></tr>
<tr><td>Prix posé</td><td>6 000 – 9 000 €</td><td>10 800 – 15 800 €</td></tr>
<tr><td>MaPrimeRénov'</td><td>❌ Non éligible</td><td>✅ Jusqu'à 5 000 €</td></tr>
</tbody>
</table>

<p>Si vous avez des radiateurs hydrauliques et que vous voulez remplacer votre chaudière, la PAC air/eau est la solution naturelle. Si vous avez du chauffage électrique direct (convecteurs) et que vous cherchez à améliorer votre confort thermique tout en ayant la climatisation l'été, la PAC air/air est plus pertinente.</p>
<p>Dans beaucoup de maisons de la Nièvre et dans l'Yonne, les deux solutions peuvent être complémentaires : une PAC air/eau assure le chauffage de base et la production d'eau chaude, et quelques splits air/air dans les chambres apportent le confort estival.</p>

<h2>Un point sur les étés en Bourgogne</h2>
<p>Les étés deviennent progressivement plus chauds dans la Nièvre et dans l'Yonne. Les maisons en pierre, qui conservent bien la chaleur l'hiver, accumulent aussi la chaleur en été et la restituent lentement la nuit. Dans ces logements, une installation air/air bien dimensionnée apporte un confort réel de juin à septembre.</p>
<p>Si votre objectif est uniquement la climatisation estivale (et pas le remplacement d'un chauffage principal), la PAC air/air est la solution la plus adaptée et la plus économique.</p>

<p>Pour discuter de votre projet et savoir quelle solution convient à votre logement, <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Nous intervenons dans la Nièvre et dans l'Yonne depuis plus de 14 ans. Pour tout comprendre sur les deux types de PAC, consultez <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a>, et pour les aides sur la PAC air/eau, <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article dédié</strong></a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>.</em></p>
`,
  },

  {
    slug: "installation-pompe-a-chaleur-etapes",
    title: "Installation d'une pompe à chaleur : les étapes et le déroulement",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installation-pompe-a-chaleur-etapes.jpg",
    imgDir: "blog",
    excerpt:
      "Comment se passe l'installation d'une pompe à chaleur, de la visite préalable à la mise en service : les étapes, la durée et ce que vous devez préparer.",
    body: `

<p>On vous a remis un devis pour une pompe à chaleur et vous vous demandez comment ça va se passer concrètement : combien de temps durent les travaux, ce qui va être installé où, si vous pouvez rester chez vous pendant le chantier, et ce que vous devez préparer.</p>
<p>Voici le déroulement complet d'une installation PAC air/eau, de la première visite jusqu'à la mise en service.</p>

<h2>Étape 1 — La visite préalable (avant tout engagement)</h2>
<p>Avant de vous remettre un devis, un technicien qualifié vient chez vous pour étudier votre logement. Cette visite est indispensable : c'est sur elle que repose tout le dimensionnement de votre installation.</p>
<p>Lors de cette visite, le technicien :</p>
<ul class="gm-checklist">
  <li>Relève les caractéristiques de votre logement (surface, nombre de niveaux, orientation, exposition).</li>
  <li>Évalue le niveau d'isolation des murs, toiture et plancher.</li>
  <li>Contrôle l'état et la taille de vos radiateurs existants pour vérifier leur compatibilité avec une PAC basse température.</li>
  <li>Identifie l'emplacement optimal pour l'unité extérieure (distance aux voisins, exposition, accès pour l'entretien).</li>
  <li>Vérifie votre tableau électrique et votre alimentation.</li>
</ul>
<p>C'est sur la base de cette visite qu'il calcule la puissance nécessaire et rédige un devis précis. Un installateur qui vous propose un prix sans visite ne peut pas garantir la performance de l'installation.</p>

<h2>Étape 2 — Le devis et les dossiers d'aides</h2>
<p>Après la visite, vous recevez un devis détaillé. Avant de le signer, votre installateur doit déposer les dossiers MaPrimeRénov' et CEE à votre place (ou avec vous selon l'organisation retenue). Ces dossiers doivent impérativement être validés <strong>avant</strong> la signature du devis et le démarrage des travaux. C'est une condition non négociable pour bénéficier des aides.</p>
<p>Une fois l'éligibilité aux aides confirmée, vous signez le devis. Le chantier peut alors être planifié.</p>

<h2>Étape 3 — La préparation du chantier</h2>
<p>Avant l'intervention, quelques points pratiques sont à anticiper :</p>
<ul class="gm-checklist">
  <li><strong>Dégager l'accès à la chaufferie</strong> : les techniciens auront besoin d'un accès libre pour intervenir sur votre ancien système de chauffage et installer les raccordements hydrauliques.</li>
  <li><strong>Prévoir l'emplacement de l'unité extérieure</strong> : elle doit être accessible pour l'entretien, à distance réglementaire des limites de propriété et non exposée aux vents dominants hivernaux si possible.</li>
  <li><strong>Vérifier la puissance électrique disponible</strong> : une PAC air/eau de 9 à 12 kW consomme environ 3 à 4 kW en pointe. Si votre tableau est limité, une mise à niveau peut être nécessaire.</li>
</ul>

<div class="gm-schema">
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les 6 étapes d'une installation PAC air/eau">
  <defs>
    <marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#171723"/>
    </marker>
  </defs>
  <g font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">
    <rect x="5" y="10" width="100" height="80" rx="6" fill="#FAC864"/>
    <text x="55" y="35" font-weight="700">1</text>
    <text x="55" y="55">Visite</text>
    <text x="55" y="70">préalable</text>
    <line x1="107" y1="50" x2="118" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#ar4)"/>
    <rect x="120" y="10" width="100" height="80" rx="6" fill="#FAC864"/>
    <text x="170" y="35" font-weight="700">2</text>
    <text x="170" y="52">Devis +</text>
    <text x="170" y="67">dossiers aides</text>
    <line x1="222" y1="50" x2="233" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#ar4)"/>
    <rect x="235" y="10" width="100" height="80" rx="6" fill="#EAE1CD"/>
    <text x="285" y="35" font-weight="700">3</text>
    <text x="285" y="52">Préparation</text>
    <text x="285" y="67">chantier</text>
    <line x1="337" y1="50" x2="348" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#ar4)"/>
    <rect x="350" y="10" width="100" height="80" rx="6" fill="#EAE1CD"/>
    <text x="400" y="35" font-weight="700">4</text>
    <text x="400" y="52">Installation</text>
    <text x="400" y="67">1-2 jours</text>
    <line x1="452" y1="50" x2="463" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#ar4)"/>
    <rect x="465" y="10" width="100" height="80" rx="6" fill="#EAE1CD"/>
    <text x="515" y="35" font-weight="700">5</text>
    <text x="515" y="52">Mise en</text>
    <text x="515" y="67">service</text>
    <line x1="567" y1="50" x2="578" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#ar4)"/>
    <rect x="580" y="10" width="92" height="80" rx="6" fill="#171723"/>
    <text x="626" y="35" fill="#FAC864" font-weight="700">6</text>
    <text x="626" y="52" fill="#fff">Facture +</text>
    <text x="626" y="67" fill="#FAC864">MPR versée</text>
    <text x="340" y="150" font-size="12" font-style="italic" fill="#5a5a66">Le dossier MaPrimeRénov' doit être validé entre l'étape 2 et l'étape 4 — avant les travaux.</text>
  </g>
</svg>
<span class="gm-schema__caption">Les 6 étapes d'une installation PAC air/eau, de la visite préalable au versement de MaPrimeRénov'.</span>
</div>

<h2>Étape 4 — Le chantier d'installation (1 à 2 jours)</h2>
<p>L'installation d'une PAC air/eau en rénovation (remplacement d'une chaudière) dure généralement <strong>une à deux journées</strong> selon la complexité. Vous pouvez rester chez vous pendant les travaux.</p>
<p>Le premier jour, les techniciens :</p>
<ul class="gm-checklist">
  <li>Posent et raccordent l'unité extérieure à son emplacement définitif.</li>
  <li>Installent l'unité intérieure ou le ballon thermodynamique dans la chaufferie.</li>
  <li>Réalisent les raccordements hydrauliques entre l'unité intérieure et votre réseau de radiateurs.</li>
  <li>Procèdent à la dépose de l'ancienne chaudière (si remplacement).</li>
</ul>
<p>Le deuxième jour (si nécessaire), ils finalisent les raccordements électriques, testent l'étanchéité du circuit et préparent la mise en service.</p>

<h2>Étape 5 — La mise en service et le réglage</h2>
<p>La mise en service est une étape critique souvent négligée dans certaines installations bâclées. Elle consiste à démarrer la PAC pour la première fois, à vérifier les pressions du circuit, à paramétrer les courbes de chauffe selon votre logement et à contrôler le bon fonctionnement de tous les organes de régulation.</p>
<p>Un technicien vous explique ensuite le fonctionnement de votre thermostat et de votre régulateur, les plages horaires à configurer selon votre mode de vie et les alertes à surveiller (gel, pression, alarmes).</p>

<p class="gm-pullquote">Une PAC mal réglée au démarrage peut consommer 30 à 40 % de plus qu'une PAC bien paramétrée pour votre logement. La mise en service ne s'improvise pas.</p>

<h2>Étape 6 — La facture finale et le versement des aides</h2>
<p>Une fois les travaux terminés, vous recevez la facture finale. Elle doit mentionner la certification RGE de l'entreprise et reprendre tous les éléments du devis. Vous la transmettez sur la plateforme maprimerenov.gouv.fr (ou votre installateur le fait pour vous), et l'Anah procède au versement de MaPrimeRénov' sur votre compte dans les semaines suivantes.</p>

<h2>Groupe Merlin : ce qu'on fait pour vous</h2>
<p>Chez nous, les étapes 2 et 6 (dossiers d'aides et suivi du versement) sont intégralement gérées par notre équipe. Vous vous concentrez sur votre projet, on s'occupe de l'administratif.</p>
<p>Nous intervenons dans toute la Nièvre et dans l'Yonne depuis notre agence de <a href="/agences/clamecy">Clamecy</a> et notre agence de <a href="/agences/corbigny">Corbigny</a>. Pour démarrer, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p>Pour en savoir plus sur les prix d'une installation PAC air/eau, lisez <a href="/blog/prix-pompe-a-chaleur-air-eau"><strong>notre article dédié</strong></a>. Et pour l'ensemble du sujet PAC, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet</strong></a> est le bon point de départ.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "dimensionnement-pompe-a-chaleur",
    title: "Bien dimensionner sa pompe à chaleur : pourquoi c'est crucial",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "dimensionnement-pompe-a-chaleur.jpg",
    imgDir: "blog",
    excerpt:
      "Le dimensionnement d'une pompe à chaleur détermine sa performance et sa durée de vie. Voici comment il se calcule, pourquoi il ne peut pas se faire sans visite et ce qui se passe quand il est mal fait.",
    body: `

<p>Le dimensionnement d'une pompe à chaleur, c'est le calcul de la puissance qui lui permettra de chauffer votre logement les jours les plus froids de l'hiver, sans consommer trop et sans tomber en panne prématurée.</p>
<p>C'est l'étape la plus importante d'une installation PAC et la plus souvent bâclée par les installateurs peu sérieux. Une PAC sous-dimensionnée n'arrivera pas à chauffer votre maison par grand froid. Une PAC surdimensionnée s'use prématurément, coûte plus cher à l'achat et consomme davantage. Dans les deux cas, c'est vous qui payez.</p>

<h2>Pourquoi le dimensionnement ne peut pas se faire à distance</h2>
<p>La puissance nécessaire d'une PAC se calcule à partir des déperditions thermiques de votre logement : la quantité de chaleur que votre maison perd par heure quand il fait très froid dehors. Ce calcul prend en compte :</p>
<ul class="gm-checklist">
  <li><strong>La superficie chauffée</strong> et la hauteur sous plafond de chaque pièce.</li>
  <li><strong>L'isolation de chaque paroi</strong> : murs, toiture, plancher, fenêtres. Une maison en pierre sans isolation extérieure perd de la chaleur très différemment d'un pavillon des années 1990 avec isolation intérieure.</li>
  <li><strong>La zone climatique</strong> de votre logement. La Nièvre est classée en zone H1c, avec une température de base de référence de −7 °C pour le calcul de déperditions. C'est la température par rapport à laquelle la PAC doit être dimensionnée.</li>
  <li><strong>L'exposition et l'orientation</strong> du logement, qui influencent les apports solaires passifs.</li>
  <li><strong>La ventilation</strong> et le renouvellement d'air, source importante de déperdition dans les logements anciens.</li>
</ul>
<p>Aucun de ces éléments ne peut être évalué correctement sans visite. Un installateur qui vous propose une puissance au téléphone, sur la base de votre seule superficie, fait une estimation grossière qui peut se tromper de 20 à 40 %.</p>

<h2>Les conséquences d'un mauvais dimensionnement</h2>
<p>Un dimensionnement approximatif a des conséquences directes sur votre quotidien :</p>

<table class="gm-compare">
<thead><tr><th>Situation</th><th>Conséquences</th></tr></thead>
<tbody>
<tr><td>PAC sous-dimensionnée</td><td>Maison froide les jours les plus froids. La PAC tourne en permanence à pleine puissance et s'use prématurément. Facture d'électricité supérieure aux prévisions.</td></tr>
<tr><td>PAC surdimensionnée</td><td>La PAC démarre et s'arrête trop fréquemment (cyclage). Usure prématurée du compresseur. Confort insuffisant malgré une puissance théorique suffisante. Coût d'achat inutilement élevé.</td></tr>
<tr><td>PAC correctement dimensionnée</td><td>Maison à température constante. Consommation optimisée. Durée de vie maximale. Performance SCOP conforme aux spécifications du fabricant.</td></tr>
</tbody>
</table>

<p class="gm-pullquote">Une PAC surdimensionnée n'est pas "plus sûre" qu'une PAC bien dimensionnée. Elle s'use plus vite et coûte plus cher à faire tourner.</p>

<h2>Comment se fait le calcul en pratique</h2>
<p>Le calcul réglementaire des déperditions thermiques est défini par la norme RT2012 ou ses équivalents. Pour une installation PAC, la norme européenne EN 14511 donne le cadre de référence pour mesurer le COP à différentes températures.</p>
<p>Concrètement, lors de la visite, le technicien relève toutes les caractéristiques du logement, les saisit dans un logiciel de calcul thermique et obtient la puissance de déperdition en watts par degré Celsius d'écart entre l'intérieur et l'extérieur. Multiplié par l'écart de température maximum (−7 °C dehors et 20 °C dedans dans la Nièvre, soit 27 °C d'écart), cela donne la puissance nécessaire.</p>
<p>À cette puissance, on ajoute généralement une marge de 10 à 15 % pour les pointes de froid. On obtient ainsi la puissance cible de la PAC à installer.</p>

<h2>Le cas particulier des maisons en pierre de la Nièvre</h2>
<p>Les longères, fermes et maisons de bourg en pierre de taille sont très courantes dans la Nièvre et dans l'Yonne. Elles ont une <strong>forte inertie thermique</strong> : elles mettent du temps à se chauffer mais aussi à se refroidir. C'est un atout pour le confort, mais ça change le calcul de dimensionnement.</p>
<p>Dans une maison en pierre non isolée, les déperditions par les murs sont importantes mais lentes. Le chauffage doit monter en température progressivement, pas brutalement. La PAC est adaptée à ce mode de chauffe continue à basse température, mais il faut qu'elle soit dimensionnée sur la base des vraies déperditions de votre maison, pas sur une règle de pouce au mètre carré.</p>
<p>Si votre maison en pierre a été isolée par l'intérieur ou par l'extérieur, les déperditions sont nettement inférieures et la PAC peut être moins puissante que vous ne le pensez. Ce qui est une bonne nouvelle côté budget.</p>

<h2>Ce que Groupe Merlin fait lors de la visite</h2>
<p>Chaque projet PAC que nous étudions commence par une visite complète du logement. Nous ne faisons pas de devis au téléphone, et nous n'acceptons pas de dimensionner une PAC sur la base d'une simple superficie communiquée par email.</p>
<p>Lors de la visite, nous réalisons le calcul des déperditions thermiques de votre logement, nous vérifions la compatibilité de vos radiateurs existants (température de départ d'eau, taille des émetteurs, état des robinets thermostatiques) et nous vous proposons la puissance adaptée à votre situation réelle.</p>
<p>Pour démarrer, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour comprendre l'ensemble du projet PAC avant la visite, consultez <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a> et <a href="/blog/installation-pompe-a-chaleur-etapes"><strong>notre article sur les étapes d'installation</strong></a>.</p>
<p><em>Sources : norme EN 14511 (COP PAC), <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "pompe-a-chaleur-monobloc-ou-bibloc",
    title: "PAC monobloc ou bibloc : laquelle choisir pour votre maison",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pompe-a-chaleur-monobloc-ou-bibloc.jpg",
    imgDir: "blog",
    excerpt:
      "PAC air/eau monobloc ou bibloc : différences techniques, avantages de chacune et comment choisir selon votre logement et votre configuration.",
    body: `

<p>Quand vous commencez à comparer des devis de pompe à chaleur air/eau, vous tombez sur deux configurations : monobloc et bibloc (ou split). Ces deux mots désignent la façon dont la PAC est architecturée, et ils ont des implications concrètes sur l'installation, l'entretien et les conditions d'utilisation de votre équipement.</p>
<p>Voici ce qui distingue les deux et comment choisir selon votre logement.</p>

<h2>La PAC air/eau monobloc : tout à l'extérieur</h2>
<p>Dans une configuration monobloc, <strong>toute la partie mécanique</strong> de la pompe à chaleur (compresseur, échangeur thermique, ventilateur, détendeur) est regroupée dans une seule unité placée à l'extérieur du logement. Cette unité extérieure est connectée à votre circuit hydraulique intérieur (radiateurs, plancher chauffant) uniquement par des tuyaux d'eau. Il n'y a pas de fluide frigorigène à l'intérieur de votre logement.</p>
<p>C'est la configuration la plus courante aujourd'hui sur les nouvelles installations en rénovation.</p>
<p>Avantages du monobloc :</p>
<ul class="gm-checklist">
  <li><strong>Installation simplifiée</strong> : pas de manipulation de fluide frigorigène à l'intérieur du bâtiment. L'installateur n'a pas besoin d'une certification spéciale pour la manipulation du circuit frigorigène côté intérieur (le circuit est entièrement confiné dans l'unité extérieure).</li>
  <li><strong>Entretien plus accessible</strong> : toutes les interventions sur la partie mécanique se font à l'extérieur.</li>
  <li><strong>Adaptée aux logements existants</strong> : le raccordement sur un circuit hydraulique existant est simple, sans percer de trous importants dans les murs.</li>
  <li><strong>Fluides frigorigènes modernes</strong> : les monoblocs récents utilisent souvent le R290 (propane) ou le R32, à faible impact climatique.</li>
</ul>
<p>Inconvénients du monobloc :</p>
<ul class="gm-checklist">
  <li>L'unité extérieure est plus volumineuse, car elle intègre toute la mécanique.</li>
  <li>Les performances peuvent légèrement baisser par températures très basses (en dessous de −10 °C), car le circuit hydraulique (eau) perd de la chaleur sur la longueur des tuyaux entre l'extérieur et l'intérieur.</li>
</ul>

<h2>La PAC air/eau bibloc : la mécanique partagée entre deux unités</h2>
<p>Dans une configuration bibloc (aussi appelée split), la PAC se compose de deux unités reliées par un <strong>circuit frigorifique</strong> :</p>
<ul class="gm-checklist">
  <li>L'<strong>unité extérieure</strong> (compresseur, échangeur air/fluide frigorigène, ventilateur).</li>
  <li>L'<strong>unité intérieure</strong> (échangeur eau/fluide frigorigène, régulation, parfois le ballon ECS), installée dans la chaufferie.</li>
</ul>
<p>Les deux unités sont reliées par des tuyaux contenant du fluide frigorigène sous pression. Cela nécessite une certification spéciale pour l'installation (manipulation des fluides frigorigènes), réservée aux techniciens habilités.</p>
<p>Avantages du bibloc :</p>
<ul class="gm-checklist">
  <li><strong>Meilleures performances par grand froid</strong> : l'échange thermique se fait directement entre le fluide frigorigène et l'eau dans l'unité intérieure, sans perte sur un circuit hydraulique extérieur.</li>
  <li><strong>Plus grande flexibilité d'implantation</strong> : l'unité extérieure peut être placée plus loin de la chaufferie (jusqu'à une certaine limite de longueur de circuit).</li>
  <li><strong>Unité extérieure plus compacte</strong> : elle n'intègre pas l'échangeur eau/frigorigène.</li>
</ul>
<p>Inconvénients du bibloc :</p>
<ul class="gm-checklist">
  <li>Installation plus complexe et réservée à des techniciens habilités aux fluides frigorigènes.</li>
  <li>En cas de fuite du circuit frigorigène, une intervention spécialisée est nécessaire.</li>
</ul>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>PAC air/eau monobloc</th><th>PAC air/eau bibloc</th></tr></thead>
<tbody>
<tr><td>Architecture</td><td>Toute la mécanique en unité extérieure</td><td>Mécanique partagée entre 2 unités</td></tr>
<tr><td>Liaison extérieur/intérieur</td><td>Tuyaux d'eau (circuit hydraulique)</td><td>Tuyaux frigorigène</td></tr>
<tr><td>Installation</td><td>Plus simple</td><td>Technicien habilité frigorigène requis</td></tr>
<tr><td>Performance par grand froid</td><td>Légère baisse sous −10 °C</td><td>Maintenue</td></tr>
<tr><td>Encombrement extérieur</td><td>Unité plus volumineuse</td><td>Unité plus compacte</td></tr>
<tr><td>Entretien</td><td>Accès extérieur uniquement</td><td>Deux unités à entretenir</td></tr>
</tbody>
</table>

<p class="gm-pullquote">Dans la grande majorité des cas, la PAC monobloc est la solution la plus adaptée en rénovation dans la Nièvre. La bibloc présente des avantages par grand froid ou quand la configuration du bâtiment l'impose.</p>

<h2>Laquelle choisir pour votre logement</h2>
<p>Le choix entre monobloc et bibloc dépend principalement de deux facteurs :</p>
<ul class="gm-checklist">
  <li><strong>La configuration de votre logement</strong> : si la chaufferie est très éloignée de l'emplacement possible de l'unité extérieure, la bibloc offre plus de flexibilité. Si l'installation est standard, le monobloc convient dans la grande majorité des cas.</li>
  <li><strong>Les conditions climatiques locales</strong> : dans la Nièvre, les hivers sont froids mais les épisodes en dessous de −10 °C restent limités. Un monobloc bien dimensionné fonctionne parfaitement dans notre région.</li>
</ul>
<p>C'est votre installateur qui doit trancher, après avoir visité votre logement et étudié la configuration optimale. Ce n'est pas une décision à prendre seul sur catalogue.</p>
<p>Pour tout comprendre sur la PAC air/eau avant votre installation, consultez <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a>. Pour voir le prix complet d'une installation, lisez <a href="/blog/prix-pompe-a-chaleur-air-eau"><strong>notre article sur les prix</strong></a>. Et pour démarrer votre projet, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, norme EN 14511, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  /* ===== COCON PAC — SILO 3 : AIDES & FINANCEMENT ===== */
  {
    slug: "remplacer-chaudiere-fioul-par-pompe-a-chaleur-prix-aides",
    title: `Remplacer une chaudière fioul par une pompe à chaleur : prix et aides ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "remplacer-chaudiere-fioul-par-pompe-a-chaleur-prix-aides.jpg",
    imgDir: "blog",
    excerpt:
      "Votre chaudière fioul vieillit et vous envisagez le passage à la pompe à chaleur : prix réel de l'installation, aides 2026 cumulables et déroulement des travaux dans la Nièvre et dans l'Yonne.",
    body: `

<p>Vous chauffez votre maison au fioul depuis des années, votre chaudière approche des quinze ou vingt ans et vous vous demandez si le moment est venu d'en changer. Vous avez entendu parler de la pompe à chaleur et vous voulez savoir ce que ça coûte vraiment, ce à quoi vous avez droit et comment ça se passe concrètement.</p>
<p>Nous vous donnons ici toutes les réponses, en partant des faits : l'interdiction qui s'applique depuis 2022, le prix réel d'une installation, les aides auxquelles vous pouvez prétendre et ce qu'il vous restera à payer une fois les aides déduites.</p>

<h2>Pourquoi 2026 est le bon moment pour passer du fioul à la PAC</h2>
<p>La première raison est réglementaire. Depuis le 1er juillet 2022, il n'est plus possible d'installer une chaudière fonctionnant uniquement au fioul dans un logement, que ce soit pour un premier équipement ou pour remplacer une ancienne chaudière. Ce choix a disparu du marché. Si votre chaudière fioul vous lâche demain, vous ne pourrez pas la remplacer par une chaudière fioul neuve : vous serez contraints de changer de technologie. Autant anticiper ce moment en le choisissant, plutôt que de le subir un jour de janvier.</p>
<p>La deuxième raison est économique. Le fioul est une énergie fossile dont le prix suit les cours pétroliers internationaux, avec des variations brutales que vous avez probablement ressenties ces dernières années. La pompe à chaleur fonctionne à l'électricité, dont le tarif réglementé limite les hausses. Surtout, la PAC air/eau restitue entre 3 et 4 kWh de chaleur pour chaque kWh d'électricité consommé : c'est ce qu'on appelle le COP (coefficient de performance). Une chaudière fioul, elle, produit au maximum 1 kWh de chaleur pour 1 kWh de combustible.</p>
<p>La troisième raison concerne les aides. En 2026, l'État a concentré ses soutiens financiers sur la sortie des énergies fossiles. Le remplacement d'une chaudière fioul ouvre droit à MaPrimeRénov' et à la prime CEE, deux aides cumulables qui ne sont plus disponibles pour une chaudière gaz depuis le 1er janvier 2026. C'est donc aujourd'hui que les conditions sont les plus favorables pour ce type de remplacement.</p>

<p class="gm-pullquote">Remplacer votre chaudière fioul avant la panne, c'est choisir votre calendrier plutôt que de le subir, et profiter des meilleures aides de l'État pendant qu'elles existent.</p>

<h2>Combien coûte le remplacement fioul vers PAC air/eau</h2>
<p>Le budget d'une installation PAC air/eau, matériel et pose compris, se situe entre <strong>10 800 € et 15 800 €</strong>. C'est la fourchette que nous pratiquons sur nos chantiers dans la Nièvre et dans l'Yonne, et elle dépend de trois facteurs principaux : la puissance de la PAC (calculée selon la superficie de votre logement, son niveau d'isolation et la zone climatique), le modèle retenu et l'état de votre installation existante.</p>
<p>Un devis sérieux comprend en général plusieurs postes distincts :</p>
<ul class="gm-checklist">
  <li>L'<strong>unité extérieure</strong> (compresseur, échangeur thermique, ventilateur) et l'<strong>unité intérieure</strong> ou le ballon thermodynamique si la PAC assure également la production d'eau chaude sanitaire.</li>
  <li>La <strong>pose</strong> : raccordements hydrauliques sur votre réseau de radiateurs existants, raccordements électriques, mise en service et réglage des paramètres de régulation.</li>
  <li>La <strong>dépose de l'ancienne chaudière fioul</strong>, incluse dans la plupart des devis sérieux, avec évacuation réglementaire du fioul résiduel.</li>
  <li>Les <strong>ajustements éventuels</strong> : si vos radiateurs sont sous-dimensionnés pour une PAC basse température, ils peuvent nécessiter d'être remplacés ou complétés. Cela se détecte lors de la visite préalable obligatoire.</li>
</ul>
<p>Si on vous présente un prix global sans décomposition de ces postes, demandez le détail avant de signer quoi que ce soit.</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>Remplacement fioul → fioul</th><th>Remplacement fioul → PAC air/eau</th></tr></thead>
<tbody>
<tr><td>Légalité en 2026</td><td>❌ Interdit depuis juillet 2022</td><td>✅ Autorisé et accompagné</td></tr>
<tr><td>Prix matériel + pose</td><td>Non disponible</td><td>10 800 – 15 800 €</td></tr>
<tr><td>MaPrimeRénov'</td><td>Aucune</td><td>Jusqu'à 5 000 €</td></tr>
<tr><td>Prime CEE</td><td>Aucune</td><td>Plusieurs milliers d'euros</td></tr>
<tr><td>TVA à 5,5 %</td><td>Non applicable</td><td>Automatique (artisan RGE)</td></tr>
<tr><td>Éco-prêt à taux zéro</td><td>Non</td><td>Jusqu'à 30 000 €</td></tr>
</tbody>
</table>

<h2>Les aides pour un remplacement fioul → PAC en 2026</h2>
<p>C'est sur ce type de remplacement que les aides sont les plus importantes. Quatre dispositifs se cumulent et peuvent couvrir une très grande partie du projet.</p>
<ul class="gm-checklist">
  <li><strong>MaPrimeRénov' (parcours par geste)</strong> : versée par l'État via l'Anah après les travaux. Pour une PAC air/eau : jusqu'à 5 000 € pour les revenus très modestes, 4 000 € pour les revenus modestes et 3 000 € pour les revenus intermédiaires. Les ménages aux revenus supérieurs ne bénéficient pas de cette aide sur ce geste. Le guichet est ouvert depuis le 23 février 2026.</li>
  <li><strong>La prime CEE</strong> : versée par les fournisseurs d'énergie (EDF, TotalEnergies et les autres). Elle s'additionne à MaPrimeRénov' et représente plusieurs milliers d'euros supplémentaires sur un remplacement de chaudière fioul, selon votre situation et le fournisseur retenu.</li>
  <li><strong>La TVA à 5,5 %</strong> au lieu de 20 % : appliquée automatiquement quand un artisan certifié RGE installe votre PAC. Aucune démarche de votre part : la réduction figure déjà sur votre devis et sur votre facture finale.</li>
  <li><strong>L'éco-prêt à taux zéro (éco-PTZ)</strong> : un prêt sans aucun intérêt, demandé auprès de votre banque, pour financer le reste à charge après déduction des autres aides. Il peut atteindre 30 000 € selon les travaux engagés.</li>
</ul>

<div class="gm-schema">
<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma montrant la réduction progressive du coût d'une PAC grâce aux aides 2026">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <rect x="10" y="20" width="150" height="130" rx="8" fill="#EAE1CD"/>
    <text x="85" y="45" font-weight="700" font-size="13">Prix installation</text>
    <text x="85" y="75" font-size="20" font-weight="700" fill="#171723">~13 000 €</text>
    <text x="85" y="100" font-size="11" fill="#5a5a66">matériel + pose</text>
    <text x="85" y="118" font-size="10" fill="#5a5a66">(exemple indicatif)</text>
    <text x="172" y="90" font-size="20" fill="#171723">−</text>
    <rect x="190" y="20" width="145" height="130" rx="8" fill="#FAC864"/>
    <text x="262" y="45" font-weight="700" font-size="13">MaPrimeRénov'</text>
    <text x="262" y="75" font-size="18" font-weight="700">4 000 €</text>
    <text x="262" y="100" font-size="11">ex. revenus modestes</text>
    <text x="347" y="90" font-size="20" fill="#171723">−</text>
    <rect x="365" y="20" width="145" height="130" rx="8" fill="#FAC864"/>
    <text x="437" y="45" font-weight="700" font-size="13">Prime CEE</text>
    <text x="437" y="75" font-size="15" font-weight="700">variable</text>
    <text x="437" y="98" font-size="11">selon revenus</text>
    <text x="437" y="115" font-size="11">et fournisseur</text>
    <text x="522" y="90" font-size="20" fill="#171723">=</text>
    <rect x="540" y="20" width="130" height="130" rx="8" fill="#171723"/>
    <text x="605" y="45" fill="#FAC864" font-weight="700" font-size="12">Reste à charge</text>
    <text x="605" y="75" fill="#fff" font-size="14" font-weight="700">réduit</text>
    <text x="605" y="100" fill="#EAE1CD" font-size="11">finançable via</text>
    <text x="605" y="118" fill="#EAE1CD" font-size="11">éco-PTZ 0 %</text>
  </g>
</svg>
<span class="gm-schema__caption">Exemple indicatif pour une maison de ~120 m² avec revenus modestes. Votre situation peut différer selon votre logement et votre foyer.</span>
</div>

<p>Pour les ménages modestes qui remplacent une chaudière fioul, le total des aides peut atteindre <strong>10 800 €</strong>. Seul un devis personnalisé, après visite de votre maison, permet de calculer le reste à charge précis pour votre situation.</p>

<h2>Les conditions à respecter avant de commencer</h2>
<p>Pour bénéficier de MaPrimeRénov' et de la prime CEE, quatre règles sont non négociables :</p>
<ul class="gm-checklist">
  <li><strong>L'artisan doit être certifié RGE QualiPAC.</strong> Sans cette certification, vous ne pouvez pas toucher ces aides. Le Groupe Merlin est certifié RGE QualiPAC, parmi cinq certifications RGE au total.</li>
  <li><strong>Le dossier d'aides doit être déposé et validé avant la signature du devis et le démarrage des travaux.</strong> C'est l'erreur la plus fréquente : on commande la PAC, puis on tente de demander l'aide après coup. À ce stade, il est trop tard. Votre installateur doit déposer le dossier pour vous en amont.</li>
  <li><strong>Le logement doit être votre résidence principale</strong>, occupée depuis au moins deux ans à la date de la demande.</li>
  <li><strong>La chaudière fioul existante doit être déposée</strong> dans le cadre des travaux. La pompe à chaleur doit devenir l'unique source de chaleur raccordée au circuit hydraulique.</li>
</ul>

<h2>Un exemple pour y voir plus clair</h2>
<p>Prenons une maison type que nous voyons souvent dans la Nièvre : environ 120 m², construite dans les années 1980, avec une chaudière fioul de 20 ans et des radiateurs hydrauliques en bon état. Le logement est correctement isolé en toiture mais les murs sont restés en pierre brute.</p>
<p>Après visite et calcul des déperditions thermiques, la puissance retenue est de 9 à 11 kW. Le budget d'installation se situe dans la fourchette basse à médiane de notre grille tarifaire, soit entre 12 000 et 14 000 €, pose et dépose comprises.</p>
<p>Pour un foyer aux revenus modestes : MaPrimeRénov' de 4 000 € et prime CEE variable. Le reste à charge peut être financé via l'éco-PTZ sans intérêts, ce qui permet d'étaler la dépense sur plusieurs années sans surcoût.</p>
<p>Cet exemple est indicatif. Votre maison est différente de celle décrite ici : sa superficie, son année de construction, son niveau d'isolation et ses émetteurs de chaleur changeront le dimensionnement et donc le prix. Seul un devis après visite donne un chiffre juste.</p>

<p class="gm-pullquote">Un installateur qui vous propose un prix sans avoir visité votre maison ne peut pas dimensionner correctement votre pompe à chaleur. Si ça arrive avant même la visite, c'est un signal d'alarme à ne pas ignorer.</p>

<h2>Le déroulement de A à Z chez Groupe Merlin</h2>
<p>Nous avons accompagné plus de 500 familles dans la Nièvre et dans l'Yonne ces dix dernières années. Sur les remplacements de chaudière fioul, voici comment nous procédons :</p>
<ul class="gm-checklist">
  <li><strong>Visite gratuite chez vous</strong> : un technicien se déplace, étudie votre logement, calcule les déperditions thermiques et vous propose une solution adaptée à votre maison et à votre budget.</li>
  <li><strong>Devis détaillé</strong> : matériel, pose, dépose de l'ancienne chaudière, aides déduites et reste à charge clairement indiqué.</li>
  <li><strong>Montage des dossiers MaPrimeRénov' et CEE</strong> : nous nous en occupons à votre place, avant la signature du devis, pour que vous ne ratiez aucune aide à laquelle vous avez droit.</li>
  <li><strong>Travaux et mise en service</strong> : notre équipe installe et règle votre PAC, procède à la dépose réglementaire de l'ancienne chaudière et vous explique le fonctionnement de votre nouvelle installation.</li>
  <li><strong>Suivi dans la durée</strong> : nous sommes à <a href="/agences/clamecy">Clamecy</a> et à <a href="/agences/corbigny">Corbigny</a>, et nous intervenons en dépannage sous 48 heures ouvrées dans la Nièvre et dans l'Yonne.</li>
</ul>

<p>Pour estimer vos aides et votre reste à charge en deux minutes, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>. Pour qu'un technicien vienne chez vous faire une étude gratuite, <a href="/contact"><strong>demandez votre devis</strong></a>.</p>
<p>Pour aller plus loin sur les aides 2026 pour une pompe à chaleur, lisez notre article dédié : <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>Pompe à chaleur en 2026 : jusqu'à 10 800 € d'aides</strong></a>. Et si vous voulez revenir sur les bases avant de vous décider, <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a> couvre tout ce qu'il faut savoir.</p>
<p><em>Les prix et conditions cités dans cet article sont ceux en vigueur en 2026 et peuvent évoluer. Sources officielles : <a href="https://france-renov.gouv.fr/renovation/chauffage/pompe-chaleur-maison" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>.</em></p>
`,
  },

  {
    slug: "remplacer-chaudiere-gaz-par-pompe-a-chaleur",
    title: "Remplacer une chaudière gaz par une pompe à chaleur : ce qui change vraiment",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "remplacer-chaudiere-gaz-par-pompe-a-chaleur.jpg",
    imgDir: "blog",
    excerpt:
      "Remplacer une chaudière gaz par une PAC air/eau : dans quels cas ça vaut le coup en 2026, quel est l'écart de coût réel sur 15 ans et pourquoi les aides ont changé par rapport au remplacement fioul.",
    body: `

<p>Vous avez une chaudière gaz qui fonctionne encore, ou qui arrive en fin de vie, et on vous parle de pompe à chaleur. Vous vous posez la bonne question : est-ce que ça vaut vraiment le coup de remplacer son gaz par une PAC, ou est-ce que c'est une bonne affaire uniquement pour ceux qui chauffaient au fioul ?</p>
<p>La réponse est plus nuancée que pour le fioul. Le gaz n'est pas interdit en remplacement, et son kWh reste moins cher à l'achat que l'électricité. Mais en 2026, il n'est plus aidé du tout, et la PAC, elle, consomme bien moins d'énergie pour produire la même chaleur. Ce sont les deux éléments centraux à comprendre avant de décider.</p>

<h2>Ce qui a changé pour le gaz en 2026</h2>
<p>Contrairement au fioul, le gaz naturel reste autorisé en remplacement. Vous pouvez encore remplacer une vieille chaudière gaz par une chaudière gaz à condensation récente, à condition qu'elle respecte le seuil réglementaire d'émissions fixé à 300 gCO₂/kWh par le décret du 5 janvier 2022. Le gaz naturel reste sous ce seuil, ce qui est pourquoi les chaudières gaz à condensation demeurent autorisées.</p>
<p>Mais en 2026, le gaz a perdu toute aide publique. MaPrimeRénov' pour une chaudière gaz s'est arrêtée au 1er janvier 2026. Les primes CEE pour le gaz ont disparu dès 2024. Et la TVA à 5,5 % ne s'applique plus à son installation. Vous payez donc une chaudière gaz au prix plein, sans aucune aide de l'État.</p>
<p>La pompe à chaleur air/eau, elle, bénéficie toujours de MaPrimeRénov', de la prime CEE et de la TVA à 5,5 %. C'est là que la comparaison commence à pencher.</p>

<h2>Le calcul honnête : gaz versus PAC sur 15 ans</h2>
<p>Pour comprendre si le remplacement vaut le coup, il faut comparer deux choses séparément : le coût d'investissement initial et le coût d'usage annuel sur la durée de vie de l'équipement.</p>
<p><strong>Côté investissement initial</strong>, une chaudière gaz à condensation coûte entre 3 500 et 9 000 € matériel et pose compris, selon la puissance et la marque. Une PAC air/eau coûte entre 10 800 et 15 800 €. L'écart est réel, mais les aides comblent une grande partie de la différence.</p>
<p><strong>Côté coût d'usage annuel</strong>, la PAC restitue entre 3 et 4 kWh de chaleur pour 1 kWh d'électricité consommé. Une chaudière gaz à condensation produit environ 0,9 kWh de chaleur pour 1 kWh de gaz brûlé. Si le kWh d'électricité est plus cher que le kWh de gaz, mais que la PAC en consomme 3 à 4 fois moins, l'écart de facture dépend du rapport entre ces deux prix, qui évolue chaque année.</p>
<p>Ce calcul, on ne peut pas le faire pour vous à distance : il dépend de votre tarif gaz actuel, de votre tarif électricité, de la puissance de l'installation et de votre consommation réelle. Un technicien qui connaît votre logement peut l'estimer avec votre dernière facture en main.</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>Chaudière gaz à condensation</th><th>PAC air/eau</th></tr></thead>
<tbody>
<tr><td>Prix matériel + pose</td><td>3 500 – 9 000 €</td><td>10 800 – 15 800 €</td></tr>
<tr><td>MaPrimeRénov' 2026</td><td>❌ Supprimée</td><td>Jusqu'à 5 000 €</td></tr>
<tr><td>Prime CEE</td><td>❌ Supprimée depuis 2024</td><td>Plusieurs milliers €</td></tr>
<tr><td>TVA à 5,5 %</td><td>❌ Supprimée</td><td>✅ Automatique (RGE)</td></tr>
<tr><td>Éco-PTZ</td><td>Non</td><td>Jusqu'à 30 000 €</td></tr>
<tr><td>Énergie consommée pour 1 kWh de chaleur</td><td>~1,1 kWh gaz</td><td>0,25 à 0,33 kWh élec.</td></tr>
</tbody>
</table>

<p class="gm-pullquote">Le gaz reste autorisé mais n'est plus aidé. Une chaudière gaz neuve se paie aujourd'hui au prix plein, sans aucun soutien de l'État.</p>

<h2>Les cas où le passage PAC vaut clairement le coup</h2>
<p>Le remplacement d'une chaudière gaz par une PAC est particulièrement pertinent dans ces situations :</p>
<ul class="gm-checklist">
  <li>Votre chaudière gaz a <strong>plus de 15 ans</strong> et commence à tomber en panne régulièrement. Le coût des réparations qui s'enchaînent rend le remplacement intéressant indépendamment de la technologie.</li>
  <li>Votre logement est <strong>correctement isolé</strong> ou vous envisagez de l'isoler. La PAC est plus efficace dans un logement bien isolé, car elle travaille à basse température. Un logement passoire thermique peut nécessiter des travaux d'isolation en parallèle pour que la PAC tourne dans de bonnes conditions.</li>
  <li>Vous avez des <strong>revenus très modestes ou modestes</strong> : l'écart de prix entre les deux technologies se comble beaucoup plus vite grâce aux aides MaPrimeRénov' et CEE.</li>
  <li>Votre réseau de distribution (radiateurs ou plancher chauffant) est <strong>compatible</strong> avec une PAC basse température, ou vous êtes prêt à adapter certains émetteurs.</li>
</ul>

<h2>Les cas où il vaut mieux attendre ou étudier d'autres options</h2>
<p>Il y a des situations où le passage gaz → PAC mérite réflexion supplémentaire :</p>
<ul class="gm-checklist">
  <li>Votre chaudière gaz a <strong>moins de 5 ans</strong> et fonctionne parfaitement : le retour sur investissement du remplacement prématuré est difficile à justifier.</li>
  <li>Votre logement est <strong>très mal isolé</strong> et vous n'avez pas les moyens de l'isoler dans l'immédiat. La PAC sera sous-performante dans ce contexte.</li>
  <li>Vos <strong>radiateurs exigent une température d'eau très élevée</strong> (supérieure à 70 °C en plein hiver) : certaines configurations de vieux radiateurs en fonte sont moins compatibles avec les PAC basse température standard. Il existe des solutions, mais elles méritent d'être étudiées au cas par cas.</li>
</ul>
<p>Un artisan qui se déplace chez vous peut évaluer votre situation en une visite. Si la PAC n'est pas adaptée à votre cas, il vous le dira. C'est la marque d'un installateur honnête.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma comparant le coût total sur 15 ans entre chaudière gaz et PAC air/eau">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <rect x="20" y="20" width="290" height="160" rx="10" fill="#EAE1CD"/>
    <text x="165" y="50" font-weight="700" font-size="15">Chaudière gaz condensation</text>
    <text x="165" y="80" font-size="13">Investissement : 3 500 – 9 000 €</text>
    <text x="165" y="105" font-size="13">0 € d'aides en 2026</text>
    <text x="165" y="130" font-size="13">Prix plein, facture gaz variable</text>
    <text x="165" y="162" font-size="11" fill="#5a5a66">durée de vie : 15 – 25 ans</text>
    <rect x="370" y="20" width="290" height="160" rx="10" fill="#FAC864"/>
    <text x="515" y="50" font-weight="700" font-size="15">PAC air/eau</text>
    <text x="515" y="80" font-size="13">Investissement : 10 800 – 15 800 €</text>
    <text x="515" y="105" font-size="13">Jusqu'à 10 800 € d'aides 2026</text>
    <text x="515" y="130" font-size="13">Consomme 3 – 4× moins d'énergie</text>
    <text x="515" y="162" font-size="11" fill="#5a5a66">durée de vie : 15 – 20 ans</text>
  </g>
</svg>
<span class="gm-schema__caption">Comparaison indicative — seul un devis personnalisé permet de calculer votre retour sur investissement réel.</span>
</div>

<h2>Comment on procède chez Groupe Merlin pour ce type de projet</h2>
<p>Quand vous nous appelez pour un remplacement gaz → PAC, on commence par la même chose que pour tous nos projets : une visite gratuite chez vous.</p>
<p>On regarde votre logement, vos émetteurs de chaleur, vos habitudes de consommation et votre facture de gaz actuelle. On calcule la puissance nécessaire et on vous présente deux scénarios : garder le gaz ou passer à la PAC, avec le budget de chaque option, les aides déduites et le coût d'usage estimé sur la durée.</p>
<p>Si la PAC est la bonne solution pour votre maison, on monte les dossiers MaPrimeRénov' et CEE à votre place avant la signature du devis. Si ce n'est pas le bon moment ou la bonne configuration, on vous le dit aussi. Notre travail, c'est de vous installer quelque chose qui fonctionne bien dans votre maison, pas de vous vendre une technologie quelle que soit votre situation.</p>
<p>Nos deux agences de la <a href="/agences/clamecy">Nièvre et de l'Yonne</a> interviennent sur l'ensemble du département. Pour en savoir plus sur les aides disponibles en 2026, consultez notre article détaillé : <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>Pompe à chaleur en 2026 : jusqu'à 10 800 € d'aides</strong></a>. Et pour calculer en deux minutes le montant auquel vous avez droit, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>
<p>Vous préférez en parler directement ? <a href="/contact"><strong>Demandez votre devis gratuit</strong></a> et un technicien passe chez vous sans engagement.</p>
<p><em>Les montants et conditions cités sont ceux en vigueur en 2026 et peuvent évoluer. Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, <a href="https://www.cre.fr/" target="_blank" rel="noopener">cre.fr</a> (Commission de Régulation de l'Énergie), <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "maprimerenov-pompe-a-chaleur-2026-baremes",
    title: `MaPrimeRénov' pompe à chaleur ${CONTENT_YEAR} : barèmes exacts par revenu`,
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "maprimerenov-pompe-a-chaleur-2026-baremes.jpg",
    imgDir: "blog",
    excerpt:
      "MaPrimeRénov' pompe à chaleur 2026 : barèmes exacts selon vos revenus, conditions à respecter et démarches pour obtenir jusqu'à 5 000 € sur votre installation.",
    body: `

<p>MaPrimeRénov' est l'aide de l'État dont tout le monde parle mais dont presque personne ne connaît le montant exact. Ce qui n'aide pas, c'est que les règles changent chaque année et que la communication officielle reste souvent floue.</p>
<p>Dans cet article, on vous donne les barèmes exacts 2026 pour une pompe à chaleur air/eau, les conditions à remplir pour en bénéficier et les étapes pour déposer votre dossier sans rater l'aide à laquelle vous avez droit.</p>

<h2>MaPrimeRénov' en 2026 : ce qui a changé</h2>
<p>Depuis le 23 février 2026, le guichet MaPrimeRénov' « parcours par geste » est de nouveau ouvert pour tous les ménages, après une période de restriction. Ce « parcours par geste » désigne une aide accordée pour un seul type de travaux (comme l'installation d'une pompe à chaleur), par opposition à la rénovation d'ampleur qui regroupe plusieurs travaux en un seul projet.</p>
<p>Ce retour à un guichet ouvert est une bonne nouvelle. Mais il y a eu un changement important depuis le début de l'année : le gaz et le bois (en chaudière) ne sont plus financés par MaPrimeRénov' parcours par geste. Les aides se concentrent désormais sur les systèmes de chauffage décarbonés, dont la pompe à chaleur air/eau fait partie.</p>
<p>Pour une PAC air/eau, le montant de MaPrimeRénov' dépend de vos revenus, déclarés à partir de votre revenu fiscal de référence (la ligne qui figure sur votre avis d'imposition).</p>

<h2>Les barèmes 2026 pour une PAC air/eau</h2>
<p>L'Anah classe les ménages en quatre catégories selon leur revenu fiscal de référence et la composition de leur foyer. Voici les montants applicables en 2026 pour l'installation d'une pompe à chaleur air/eau :</p>

<table class="gm-compare">
<thead><tr><th>Catégorie de revenus</th><th>Montant MaPrimeRénov' (PAC air/eau)</th></tr></thead>
<tbody>
<tr><td>Revenus très modestes</td><td><strong>Jusqu'à 5 000 €</strong></td></tr>
<tr><td>Revenus modestes</td><td><strong>Jusqu'à 4 000 €</strong></td></tr>
<tr><td>Revenus intermédiaires</td><td><strong>Jusqu'à 3 000 €</strong></td></tr>
<tr><td>Revenus supérieurs</td><td>Pas d'aide sur ce geste</td></tr>
</tbody>
</table>

<p>Ces montants s'entendent comme des forfaits par logement. Pour connaître votre catégorie, vous devez comparer votre revenu fiscal de référence aux plafonds de l'Anah, qui varient selon le nombre de personnes dans votre foyer et selon que vous habitez en Île-de-France ou dans une autre région. Dans la Nièvre, vous êtes en province (hors IDF). Les plafonds exacts et actualisés sont disponibles sur <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a> et sur <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>.</p>

<p class="gm-pullquote">Pour connaître votre catégorie, regardez votre avis d'imposition et comparez votre revenu fiscal de référence aux plafonds de l'Anah pour votre situation de foyer.</p>

<h2>Ce que MaPrimeRénov' ne couvre pas seule</h2>
<p>MaPrimeRénov' est une aide parmi d'autres. Elle se cumule avec la prime CEE (versée par les fournisseurs d'énergie), la TVA à 5,5 % et l'éco-prêt à taux zéro. Ensemble, ces aides peuvent couvrir une très grande partie du projet, et jusqu'à 10 800 € pour les ménages modestes qui remplacent une chaudière fioul.</p>
<p>MaPrimeRénov' seule ne couvre pas le coût total d'une installation PAC air/eau, qui se situe entre 10 800 et 15 800 €. C'est normal : elle est conçue pour fonctionner en complément des autres dispositifs. Pour estimer votre reste à charge précis, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>.</p>

<h2>Les conditions à respecter pour en bénéficier</h2>
<p>Pour décrocher MaPrimeRénov', plusieurs conditions doivent être réunies simultanément :</p>
<ul class="gm-checklist">
  <li><strong>L'artisan doit être certifié RGE QualiPAC.</strong> C'est la condition première. Sans certification RGE sur la technologie installée, MaPrimeRénov' ne peut pas être accordée. Le Groupe Merlin est certifié RGE QualiPAC.</li>
  <li><strong>Le dossier doit être déposé et validé avant la signature du devis et le démarrage des travaux.</strong> C'est la règle la plus souvent mal comprise, et la plus souvent oubliée. Si vous signez d'abord le devis, il est trop tard pour bénéficier de MaPrimeRénov'. Le dépôt passe avant tout engagement contractuel.</li>
  <li><strong>Le logement doit être votre résidence principale</strong> et être achevé depuis plus de deux ans à la date de la demande.</li>
  <li><strong>La pompe à chaleur doit être la seule source de chaleur</strong> raccordée à votre réseau hydraulique. Si vous gardez une chaudière en appoint sur le même réseau, l'aide est compromise.</li>
  <li><strong>L'ancienne chaudière (fioul ou gaz) doit être déposée</strong> dans le cadre des travaux si vous en remplacez une.</li>
</ul>

<div class="gm-schema">
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des 5 étapes pour obtenir MaPrimeRénov'">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <circle cx="70" cy="80" r="50" fill="#FAC864"/>
    <text x="70" y="72" font-weight="700" font-size="14">1</text>
    <text x="70" y="90" font-size="11">Vérifier</text>
    <text x="70" y="106" font-size="11">éligibilité</text>
    <line x1="122" y1="80" x2="148" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar)"/>
    <circle cx="200" cy="80" r="50" fill="#FAC864"/>
    <text x="200" y="72" font-weight="700" font-size="14">2</text>
    <text x="200" y="90" font-size="11">Créer</text>
    <text x="200" y="106" font-size="11">votre compte</text>
    <line x1="252" y1="80" x2="278" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar)"/>
    <circle cx="330" cy="80" r="50" fill="#EAE1CD"/>
    <text x="330" y="72" font-weight="700" font-size="14">3</text>
    <text x="330" y="90" font-size="11">Déposer</text>
    <text x="330" y="106" font-size="11">le dossier</text>
    <line x1="382" y1="80" x2="408" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar)"/>
    <circle cx="460" cy="80" r="50" fill="#EAE1CD"/>
    <text x="460" y="72" font-weight="700" font-size="14">4</text>
    <text x="460" y="90" font-size="11">Faire les</text>
    <text x="460" y="106" font-size="11">travaux</text>
    <line x1="512" y1="80" x2="538" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar)"/>
    <circle cx="590" cy="80" r="50" fill="#171723"/>
    <text x="590" y="72" fill="#FAC864" font-weight="700" font-size="14">5</text>
    <text x="590" y="90" fill="#fff" font-size="11">Recevoir</text>
    <text x="590" y="106" fill="#fff" font-size="11">le paiement</text>
    <text x="340" y="180" font-size="12" font-style="italic" fill="#5a5a66">⚠️ Le dépôt du dossier (étape 3) doit précéder la signature du devis et le démarrage des travaux (étape 4).</text>
  </g>
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#171723"/>
    </marker>
  </defs>
</svg>
<span class="gm-schema__caption">Les 5 grandes étapes de MaPrimeRénov' — l'étape 3 (dépôt) doit toujours précéder l'étape 4 (travaux).</span>
</div>

<h2>MaPrimeRénov' : ce que Groupe Merlin prend en charge</h2>
<p>Le montage d'un dossier MaPrimeRénov' peut sembler complexe : création de compte sur la plateforme officielle, saisie des informations du logement, téléversement des documents, attente de la validation, puis envoi de la facture finale après travaux.</p>
<p>Chez le Groupe Merlin, nous prenons en charge l'ensemble des démarches à votre place. Cela fait partie de notre accompagnement depuis le début du projet : nous montons votre dossier MaPrimeRénov' et CEE avant la signature du devis, nous suivons son instruction et nous vous guidons jusqu'au paiement.</p>
<p>Vous n'avez pas à vous préoccuper de savoir quelle case remplir ou quel document télécharger. On gère.</p>

<h2>PAC air/air : une nuance importante</h2>
<p>Les montants cités dans cet article concernent exclusivement la <strong>PAC air/eau</strong>. La PAC air/air (aussi appelée climatisation réversible) n'est pas éligible au parcours par geste de MaPrimeRénov'. Pour une PAC air/air, d'autres aides existent (prime CEE, TVA 5,5 %), mais pas MaPrimeRénov'. Pour comprendre la différence entre les deux types de PAC, consultez <a href="/blog/pompe-a-chaleur-guide-complet"><strong>notre guide complet</strong></a>.</p>

<p>Pour calculer en deux minutes le montant exact de vos aides selon votre situation, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>. Et pour qu'on vous accompagne dans votre projet et qu'on monte votre dossier, <a href="/contact"><strong>contactez-nous</strong></a> : un technicien vient chez vous, étudie votre logement et s'occupe de tout.</p>
<p>Pour approfondir la question des autres aides (prime CEE, éco-PTZ), consultez notre article <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>Pompe à chaleur en 2026 : jusqu'à 10 800 € d'aides</strong></a>.</p>
<p><em>Les montants et conditions cités sont ceux en vigueur en 2026 et peuvent évoluer. Sources officielles : <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>, <a href="https://www.service-public.fr/" target="_blank" rel="noopener">service-public.fr</a>.</em></p>
`,
  },

  {
    slug: "prime-cee-pompe-a-chaleur",
    title: "Prime CEE pompe à chaleur : qui paie, combien, comment l'obtenir",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prime-cee-pompe-a-chaleur.jpg",
    imgDir: "blog",
    imgFocus: "10% center",
    excerpt:
      "La prime CEE pour une pompe à chaleur : qui la verse, combien elle représente et comment elle se cumule avec MaPrimeRénov' pour réduire votre reste à charge.",
    body: `

<p>La prime CEE est probablement la moins bien comprise des aides disponibles pour une pompe à chaleur. Tout le monde a entendu parler de MaPrimeRénov' mais beaucoup ignorent qu'une deuxième aide, parfois équivalente en montant, peut s'y ajouter.</p>
<p>CEE signifie Certificats d'Économies d'Énergie. Ce sont les fournisseurs d'énergie (EDF, TotalEnergies et les autres) qui la versent, pas l'État. Et pour une pompe à chaleur air/eau, en particulier sur un remplacement de chaudière fioul, cette prime peut représenter plusieurs milliers d'euros supplémentaires par rapport à MaPrimeRénov'.</p>

<h2>Comment fonctionne le dispositif CEE</h2>
<p>Les fournisseurs d'énergie sont tenus par la loi de financer des économies d'énergie chez leurs clients. Pour remplir cette obligation, ils financent des travaux de rénovation chez les particuliers, en échange de quoi ils obtiennent des certificats qui attestent de ces économies réalisées.</p>
<p>Concrètement, pour vous qui voulez installer une pompe à chaleur : vous signalez votre projet à un fournisseur d'énergie ou à un mandataire CEE avant de démarrer les travaux. En échange d'un dossier justificatif (devis RGE, informations sur votre logement et votre situation), le fournisseur s'engage à vous verser une prime. Elle peut vous être déduite directement sur le devis ou versée après les travaux sur votre compte bancaire.</p>
<p>Le système est encadré par l'État (ministère de la Transition écologique) mais les montants sont fixés par chaque fournisseur selon les barèmes CEE en vigueur. Ils varient donc d'un fournisseur à l'autre et d'une période à l'autre.</p>

<h2>Qui peut en bénéficier et sous quelles conditions</h2>
<p>Pour décrocher la prime CEE sur une pompe à chaleur, les conditions principales sont les suivantes :</p>
<ul class="gm-checklist">
  <li><strong>L'artisan doit être certifié RGE</strong> sur la technologie installée. Sans certification RGE QualiPAC, la prime CEE ne peut pas être accordée. Le Groupe Merlin est certifié RGE QualiPAC parmi cinq certifications RGE.</li>
  <li><strong>Le dossier CEE doit être signé avant le démarrage des travaux</strong>, de la même façon que pour MaPrimeRénov'. Si vous commandez la PAC avant d'avoir signé le devis CEE, vous perdez le droit à la prime.</li>
  <li><strong>Le logement doit être votre résidence principale</strong> (ou dans certains cas votre résidence secondaire, mais les montants sont alors différents).</li>
  <li>L'installation doit correspondre à une <strong>opération standardisée CEE</strong> reconnue. L'installation d'une PAC air/eau (fiche BAR-TH-104) en fait partie.</li>
</ul>

<h2>Combien représente la prime CEE pour une PAC</h2>
<p>Le montant de la prime CEE dépend de plusieurs facteurs : le type de travaux réalisés (remplacement fioul, remplacement gaz, première installation), vos revenus (les ménages modestes bénéficient souvent de montants plus élevés) et la politique tarifaire du fournisseur CEE retenu.</p>
<p>Sur un remplacement de chaudière fioul par une PAC air/eau, le montant peut atteindre plusieurs milliers d'euros. Cumulé à MaPrimeRénov', cela peut représenter une aide totale de 10 800 € pour les ménages modestes, comme indiqué dans <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article sur les aides 2026</strong></a>.</p>
<p>Sur un remplacement de chaudière gaz par une PAC, la prime CEE est toujours disponible mais généralement moins élevée que sur le fioul.</p>
<p>Pour avoir le montant exact selon votre situation, vous pouvez utiliser <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>, ou nous contacter pour qu'on étudie votre dossier avec vous.</p>

<table class="gm-compare">
<thead><tr><th>Situation</th><th>Prime CEE</th><th>MaPrimeRénov' cumulable</th></tr></thead>
<tbody>
<tr><td>Remplacement chaudière fioul → PAC air/eau</td><td>Plusieurs milliers €</td><td>Jusqu'à 5 000 €</td></tr>
<tr><td>Remplacement chaudière gaz → PAC air/eau</td><td>Variable (généralement inférieur)</td><td>Jusqu'à 5 000 €</td></tr>
<tr><td>Première installation PAC (pas de chaudière à remplacer)</td><td>Variable</td><td>Jusqu'à 5 000 €</td></tr>
<tr><td>PAC air/air (climatisation réversible)</td><td>Variable</td><td>❌ Pas éligible</td></tr>
</tbody>
</table>

<p class="gm-pullquote">La prime CEE et MaPrimeRénov' sont deux aides indépendantes qui se cumulent. Rater l'une des deux revient à laisser plusieurs milliers d'euros sur la table.</p>

<h2>Comment ne pas rater la prime CEE</h2>
<p>L'erreur la plus fréquente est de découvrir la prime CEE après les travaux. À ce stade, il est trop tard : le dossier doit être engagé avant le début du chantier.</p>
<p>Voici comment procéder pour ne pas la rater :</p>
<ul class="gm-checklist">
  <li><strong>Signalez votre projet avant de signer le devis.</strong> Contactez un fournisseur d'énergie ou un mandataire CEE, ou demandez à votre installateur de le faire pour vous.</li>
  <li><strong>Comparez plusieurs offres CEE.</strong> Les montants varient selon les fournisseurs. EDF, TotalEnergies et d'autres acteurs proposent leurs propres montants : il vaut la peine de les comparer.</li>
  <li><strong>Ne signez aucun devis et ne démarrez aucun travail</strong> avant d'avoir une confirmation écrite de la prime CEE accordée.</li>
  <li><strong>Conservez tous les documents</strong> : devis RGE signé, facture finale, attestation sur l'honneur, fiche descriptive des travaux. Ces pièces sont nécessaires pour le versement de la prime.</li>
</ul>

<h2>Ce que Groupe Merlin fait pour vous</h2>
<p>Chez nous, le montage du dossier CEE fait partie de notre accompagnement. On s'en occupe à votre place, en même temps que le dossier MaPrimeRénov', avant la signature du devis. Vous n'avez pas à comparer les offres CEE de chaque fournisseur ni à suivre les échéances administratives : on gère l'ensemble du dossier et on vous indique le montant exact de la prime CEE dans votre devis.</p>
<p>Nos agences de <a href="/agences/clamecy">Clamecy</a> et de <a href="/agences/corbigny">Corbigny</a> interviennent sur l'ensemble de la Nièvre et de l'Yonne. Pour démarrer votre projet, <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Un technicien passe chez vous, calcule la puissance nécessaire et vous présente un devis avec toutes les aides déduites.</p>
<p>Pour tout comprendre sur les aides 2026 et comment elles se cumulent, consultez <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article dédié</strong></a> et <a href="/blog/pompe-a-chaleur-guide-complet"><strong>le guide complet PAC</strong></a>.</p>
<p><em>Sources : <a href="https://www.ecologie.gouv.fr/" target="_blank" rel="noopener">ecologie.gouv.fr</a> (dispositif CEE), <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>. Les montants de la prime CEE varient selon les périodes et les fournisseurs.</em></p>
`,
  },

  {
    slug: "eco-ptz-pompe-a-chaleur",
    title: "Éco-PTZ pompe à chaleur : prêt sans intérêt, montant, démarches",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "eco-ptz-pompe-a-chaleur.jpg",
    imgDir: "blog",
    excerpt:
      "L'éco-prêt à taux zéro pour une pompe à chaleur : un prêt sans intérêts pour financer votre reste à charge, comment le demander et quelles banques le proposent.",
    body: `

<p>Vous avez calculé le coût de votre pompe à chaleur, vous avez déduit MaPrimeRénov' et la prime CEE, et il reste encore une partie à financer. C'est là qu'intervient l'éco-prêt à taux zéro, ou éco-PTZ : un prêt sans intérêts, que vous demandez auprès de votre banque, pour couvrir ce reste à charge sans supporter de coût financier supplémentaire.</p>
<p>C'est souvent la pièce manquante dans le plan de financement d'une installation PAC. Et c'est l'une des moins connues, parce qu'elle se gère directement avec la banque et non avec l'État.</p>

<h2>Ce qu'est l'éco-PTZ et comment il fonctionne</h2>
<p>L'éco-prêt à taux zéro est un prêt accordé par une banque agréée pour financer des travaux de rénovation énergétique dans votre résidence principale. Ce qui le distingue d'un crédit classique : <strong>il est sans intérêts</strong>. Vous remboursez uniquement la somme empruntée, en mensualités sur une durée que vous choisissez avec votre banque, sans aucun surcoût financier.</p>
<p>C'est l'État qui prend en charge les intérêts à votre place, dans le cadre du dispositif de soutien à la rénovation énergétique. Concrètement, vous empruntez 10 000 €, vous remboursez exactement 10 000 €, sur 5 ou 10 ans par exemple, et vous ne payez pas d'intérêts.</p>
<p>L'éco-PTZ ne remplace pas MaPrimeRénov' ni la prime CEE : il complète ces aides en permettant de financer le reste à charge sans endettement coûteux.</p>

<h2>Quel montant peut-on emprunter</h2>
<p>Pour l'installation d'une pompe à chaleur air/eau en résidence principale, le montant maximum de l'éco-PTZ est de <strong>30 000 €</strong>. Ce plafond est suffisant pour couvrir le reste à charge de la grande majorité des installations PAC dans la Nièvre et dans l'Yonne, après déduction de MaPrimeRénov' et de la prime CEE.</p>
<p>Si vous coupler l'installation de votre PAC à d'autres travaux (isolation, fenêtres, ventilation), le plafond global de l'éco-PTZ peut s'appliquer à l'ensemble du projet, dans la limite de 30 000 €.</p>
<p>La durée de remboursement va jusqu'à <strong>20 ans</strong>. Vous choisissez la mensualité qui convient à votre budget avec votre banque.</p>

<table class="gm-compare">
<thead><tr><th>Aide</th><th>Nature</th><th>Qui verse</th><th>Montant max (PAC)</th></tr></thead>
<tbody>
<tr><td>MaPrimeRénov'</td><td>Subvention (don)</td><td>Anah / État</td><td>5 000 €</td></tr>
<tr><td>Prime CEE</td><td>Subvention (don)</td><td>Fournisseur d'énergie</td><td>Plusieurs k€</td></tr>
<tr><td>TVA à 5,5 %</td><td>Réduction fiscale</td><td>Automatique</td><td>Variable</td></tr>
<tr><td>Éco-PTZ</td><td>Prêt sans intérêts</td><td>Banque agréée</td><td>30 000 €</td></tr>
</tbody>
</table>

<p class="gm-pullquote">L'éco-PTZ n'est pas une aide au sens strict : c'est un prêt sans intérêts. Vous le remboursez, mais sans rien payer de plus que la somme empruntée.</p>

<h2>Les conditions pour obtenir l'éco-PTZ</h2>
<p>L'éco-PTZ est accessible si vous remplissez les conditions suivantes :</p>
<ul class="gm-checklist">
  <li><strong>Le logement doit être votre résidence principale</strong>, achevé depuis plus de deux ans. Les résidences secondaires et les logements locatifs ne sont pas éligibles dans les mêmes conditions.</li>
  <li><strong>Les travaux doivent être réalisés par un artisan certifié RGE</strong>. La certification QualiPAC est requise pour une pompe à chaleur air/eau.</li>
  <li>L'installation doit correspondre à une <strong>opération éligible</strong>, ce qui est le cas de l'installation d'une PAC air/eau dans une résidence principale existante.</li>
  <li>Il n'y a <strong>pas de condition de revenus</strong> pour l'éco-PTZ, contrairement à MaPrimeRénov'. Tous les propriétaires occupants peuvent y prétendre, quelle que soit leur catégorie de revenus.</li>
</ul>

<h2>Comment le demander</h2>
<p>L'éco-PTZ se demande auprès d'une banque qui a signé une convention avec l'État pour proposer ce dispositif. Les grandes banques françaises le proposent en général : BNP Paribas, Crédit Agricole, CIC, Banque Postale, Caisse d'Épargne, Crédit Mutuel, Société Générale et d'autres. Vérifiez auprès de votre propre banque si elle propose ce dispositif.</p>
<p>La démarche est la suivante :</p>
<ul class="gm-checklist">
  <li>Vous contactez votre banque et lui présentez votre projet de travaux avec le devis de l'artisan RGE.</li>
  <li>La banque étudie votre dossier selon ses propres critères d'octroi (revenus, situation financière), comme pour tout prêt.</li>
  <li>Si le prêt est accordé, vous remboursez en mensualités sans intérêts sur la durée convenue.</li>
  <li>La banque est remboursée des intérêts par l'État dans le cadre du dispositif.</li>
</ul>
<p>Il n'y a pas de demande à faire auprès de l'État ou de l'Anah pour l'éco-PTZ : tout se passe entre vous et votre banque.</p>

<h2>Éco-PTZ et MaPrimeRénov' : peuvent-ils se cumuler</h2>
<p>Oui, depuis 2020, l'éco-PTZ et MaPrimeRénov' sont cumulables. Vous pouvez donc bénéficier d'une subvention de l'État (MaPrimeRénov'), d'une prime des fournisseurs d'énergie (CEE) et d'un prêt sans intérêts (éco-PTZ) sur le même projet. C'est la combinaison optimale pour réduire votre reste à charge au maximum.</p>
<p>Pour calculer le reste à charge une fois toutes les aides appliquées sur votre situation, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a>. Pour aller plus loin sur MaPrimeRénov', lisez notre article <a href="/blog/maprimerenov-pompe-a-chaleur-2026-baremes"><strong>MaPrimeRénov' pompe à chaleur 2026 : barèmes par revenu</strong></a>.</p>
<p>Et si vous souhaitez qu'on s'occupe de l'ensemble du montage (dossier MPR, CEE et accompagnement pour votre banque), <a href="/contact"><strong>contactez-nous</strong></a>. Nos équipes de Clamecy et de Corbigny se déplacent gratuitement pour étudier votre projet.</p>
<p><em>Sources : <a href="https://www.service-public.fr/particuliers/vosdroits/F19905" target="_blank" rel="noopener">service-public.fr</a> (fiche éco-PTZ), <a href="https://www.economie.gouv.fr/" target="_blank" rel="noopener">economie.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "monter-dossier-maprimerenov-etape-par-etape",
    title: "Comment monter votre dossier MaPrimeRénov' étape par étape",
    category: "Conseils",
    cocon: "pompe-a-chaleur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "monter-dossier-maprimerenov-etape-par-etape.jpg",
    imgDir: "blog",
    excerpt:
      "Comment monter votre dossier MaPrimeRénov' : les 7 étapes pour déposer correctement votre demande d'aide et ne pas rater une seule condition.",
    body: `

<p>MaPrimeRénov' peut représenter jusqu'à 5 000 € sur votre installation de pompe à chaleur. Mais pour en bénéficier, il faut suivre un ordre précis d'étapes et respecter des règles qui ne souffrent aucune exception. Une seule erreur, comme signer le devis avant d'avoir déposé le dossier, et vous perdez l'aide définitivement.</p>
<p>Voici le dossier MaPrimeRénov' expliqué étape par étape, dans l'ordre où il faut le faire.</p>

<h2>Étape 1 — Vérifier que vous êtes éligible</h2>
<p>Avant de créer votre compte sur la plateforme officielle, vérifiez les conditions de base :</p>
<ul class="gm-checklist">
  <li><strong>Votre logement est votre résidence principale</strong>, achevé depuis plus de deux ans.</li>
  <li>Vous êtes <strong>propriétaire occupant</strong>. Si vous êtes locataire, vous n'êtes pas éligible à MaPrimeRénov' pour une pompe à chaleur.</li>
  <li>Vos travaux seront réalisés par un <strong>artisan certifié RGE QualiPAC</strong>. Sans cette certification, la demande sera refusée.</li>
  <li>Vous allez installer une <strong>PAC air/eau</strong>. La PAC air/air (climatisation réversible) n'est pas éligible au parcours par geste.</li>
</ul>
<p>Si vous remplissez ces quatre conditions, vous pouvez passer à l'étape suivante.</p>

<h2>Étape 2 — Créer votre compte sur maprimerenov.gouv.fr</h2>
<p>Rendez-vous sur <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>. La plateforme est gérée par l'Anah (Agence nationale de l'habitat). Vous aurez besoin de vous identifier via FranceConnect avec votre numéro fiscal et vos identifiants des impôts, ou via votre espace personnel impots.gouv.fr.</p>
<p>Une fois connecté, complétez les informations demandées : adresse du logement, surface habitable, année de construction, système de chauffage actuel.</p>

<h2>Étape 3 — Saisir votre geste de travaux et demander l'aide</h2>
<p>Sélectionnez le geste qui correspond à votre projet : « installation d'une pompe à chaleur air/eau ». La plateforme calcule automatiquement le montant de MaPrimeRénov' auquel vous avez droit en fonction de vos revenus et vous affiche une estimation.</p>
<p>Téléversez les documents demandés à ce stade. En général : votre dernier avis d'imposition (pour vérifier la catégorie de revenus), et selon les cas des informations complémentaires sur votre logement.</p>
<p>Soumettez votre demande. Vous obtenez alors une <strong>notification d'éligibilité</strong> (ou de refus) de la part de l'Anah. Conservez ce document.</p>

<p class="gm-pullquote">Cette étape 3 doit être complète et validée AVANT de signer le moindre devis avec votre artisan. C'est la règle qui conditionne tout le reste.</p>

<h2>Étape 4 — Obtenir un devis RGE et le signer</h2>
<p>Une fois votre éligibilité confirmée par l'Anah, vous pouvez demander et signer un devis à votre artisan RGE. Le devis doit mentionner :</p>
<ul class="gm-checklist">
  <li>Le numéro de certification RGE de l'entreprise.</li>
  <li>La description précise de l'équipement installé (marque, modèle, puissance, COP ou SCOP).</li>
  <li>Le détail des postes : matériel, pose, dépose de l'ancienne chaudière si applicable.</li>
  <li>Le montant total TTC avec la TVA à 5,5 % appliquée.</li>
</ul>
<p>Vérifiez que tous ces éléments figurent sur le devis avant de le signer.</p>

<h2>Étape 5 — Déclarer le devis signé sur maprimerenov.gouv.fr</h2>
<p>Retournez sur la plateforme et déclarez le devis signé en le téléversant. C'est ce qui déclenche l'ouverture formelle du dossier de financement. L'Anah enregistre votre projet et vous confirme la suite de la procédure.</p>

<h2>Étape 6 — Laisser l'artisan réaliser les travaux</h2>
<p>Les travaux peuvent désormais démarrer. L'artisan installe la PAC, procède à la dépose de l'ancienne chaudière si nécessaire, raccorde l'installation et la met en service.</p>
<p>À la fin du chantier, vous recevez une <strong>facture finale</strong> qui doit reprendre les mêmes éléments que le devis, avec en plus la mention que les travaux ont bien été réalisés par l'entreprise RGE signataire. Vérifiez que les montants correspondent avant de la valider.</p>

<h2>Étape 7 — Transmettre la facture finale et recevoir le paiement</h2>
<p>Téléversez la facture finale sur maprimerenov.gouv.fr. L'Anah instruit le dossier et, une fois tout validé, verse MaPrimeRénov' directement sur votre compte bancaire.</p>
<p>Les délais de traitement varient selon les périodes. Dans les phases de forte demande, il peut s'écouler plusieurs semaines entre la transmission de la facture et le versement. C'est normal : l'Anah traite un volume important de dossiers.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les 7 étapes du dossier MaPrimeRénov' dans l'ordre chronologique">
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#171723"/>
    </marker>
  </defs>
  <g font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">
    <rect x="5" y="10" width="82" height="80" rx="6" fill="#FAC864"/>
    <text x="46" y="35" font-weight="700">1</text>
    <text x="46" y="55">Vérifier</text>
    <text x="46" y="70">éligibilité</text>
    <line x1="89" y1="50" x2="100" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="102" y="10" width="82" height="80" rx="6" fill="#FAC864"/>
    <text x="143" y="35" font-weight="700">2</text>
    <text x="143" y="55">Créer</text>
    <text x="143" y="70">son compte</text>
    <line x1="186" y1="50" x2="197" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="199" y="10" width="82" height="80" rx="6" fill="#FAC864"/>
    <text x="240" y="35" font-weight="700">3</text>
    <text x="240" y="47">Déposer</text>
    <text x="240" y="62">la demande</text>
    <text x="240" y="77" fill="#ef4135" font-size="10">avant devis !</text>
    <line x1="283" y1="50" x2="294" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="296" y="10" width="82" height="80" rx="6" fill="#EAE1CD"/>
    <text x="337" y="35" font-weight="700">4</text>
    <text x="337" y="55">Signer</text>
    <text x="337" y="70">le devis RGE</text>
    <line x1="380" y1="50" x2="391" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="393" y="10" width="82" height="80" rx="6" fill="#EAE1CD"/>
    <text x="434" y="35" font-weight="700">5</text>
    <text x="434" y="47">Déclarer</text>
    <text x="434" y="62">le devis</text>
    <text x="434" y="77">en ligne</text>
    <line x1="477" y1="50" x2="488" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="490" y="10" width="82" height="80" rx="6" fill="#EAE1CD"/>
    <text x="531" y="35" font-weight="700">6</text>
    <text x="531" y="47">Réaliser</text>
    <text x="531" y="62">les</text>
    <text x="531" y="77">travaux</text>
    <line x1="574" y1="50" x2="585" y2="50" stroke="#171723" stroke-width="1.5" marker-end="url(#arrow2)"/>
    <rect x="587" y="10" width="82" height="80" rx="6" fill="#171723"/>
    <text x="628" y="35" fill="#FAC864" font-weight="700">7</text>
    <text x="628" y="50" fill="#fff">Envoyer</text>
    <text x="628" y="65" fill="#fff">facture →</text>
    <text x="628" y="80" fill="#FAC864">paiement</text>
    <text x="340" y="140" font-size="12" font-style="italic" fill="#5a5a66">⚠️ Les étapes 1 à 3 doivent être complètes avant de signer le devis (étape 4).</text>
    <text x="340" y="160" font-size="12" font-style="italic" fill="#5a5a66">Un dossier déposé après signature du devis est refusé systématiquement.</text>
  </g>
</svg>
<span class="gm-schema__caption">Les 7 étapes du dossier MaPrimeRénov' — l'ordre est impératif, en particulier le dépôt avant la signature du devis.</span>
</div>

<h2>Les erreurs les plus fréquentes (et comment les éviter)</h2>
<p>Après des années à accompagner des familles dans la Nièvre et dans l'Yonne sur leurs projets de chauffage, voici les erreurs que l'on voit le plus souvent :</p>
<ul class="gm-checklist">
  <li><strong>Signer le devis avant d'avoir déposé le dossier.</strong> C'est l'erreur numéro un. Elle est irréversible : une fois le devis signé, vous avez perdu le droit à MaPrimeRénov'.</li>
  <li><strong>Choisir un artisan non certifié RGE</strong>, en pensant économiser sur l'installation. Sans RGE, pas d'aide. Le surcoût apparent de l'artisan RGE est presque toujours largement compensé par les aides qu'il débloque.</li>
  <li><strong>Oublier de téléverser la facture finale</strong> après les travaux. Le paiement n'est pas automatique : vous devez l'initier en transmettant votre facture sur la plateforme.</li>
  <li><strong>Confondre la date de commande du matériel et la date de signature du devis de pose.</strong> Ce qui compte, c'est la date de signature du devis d'installation par l'artisan RGE, pas la date à laquelle la PAC a été commandée.</li>
</ul>

<h2>Laisser Groupe Merlin s'en occuper à votre place</h2>
<p>Si tout cela vous semble compliqué, sachez que nous pouvons nous en charger entièrement pour vous. Chez le Groupe Merlin, le montage du dossier MaPrimeRénov' et CEE fait partie de notre accompagnement. Vous nous confiez votre projet, nous gérons les démarches administratives de A à Z, dans le bon ordre et avec les bons documents.</p>
<p>Vous n'avez pas à surveiller les délais ni à vous rappeler quelle pièce envoyer quand : on s'en occupe. Et parce que nous connaissons bien les particularités des logements de la région, maisons en pierre de la Nièvre, longères, fermes rénovées, nous dimensionnons correctement votre installation dès le départ.</p>
<p>Pour démarrer, utilisez <a href="/expertises/pompe-a-chaleur#simulateur"><strong>notre simulateur</strong></a> pour estimer vos aides en deux minutes, puis <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Un technicien se déplace chez vous, étudie votre logement et vous présente un devis détaillé avec toutes les aides déduites.</p>
<p>Pour aller plus loin sur les barèmes MaPrimeRénov' selon vos revenus, consultez <a href="/blog/maprimerenov-pompe-a-chaleur-2026-baremes"><strong>notre article dédié</strong></a>. Et pour tout savoir sur les autres aides (prime CEE, éco-PTZ), lisez <a href="/blog/pompe-a-chaleur-aides-etat-2026"><strong>notre article complet sur les aides 2026</strong></a>.</p>
<p><em>Sources : <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>, <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>, <a href="https://www.service-public.fr/" target="_blank" rel="noopener">service-public.fr</a>.</em></p>
`,
  },

  /* ===== COCON CLIMATISATION — PAGE MÈRE + SILOS 1 À 6 ===== */
  {
    slug: "climatisation-guide-complet",
    title: `Climatisation dans la Nièvre et l'Yonne : le guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "climatisation",
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "climatisation-guide-complet.jpg",
    imgDir: "blog",
    excerpt:
      "Tout ce qu'il faut savoir avant d'installer une climatisation dans la Nièvre ou dans l'Yonne : fonctionnement, types (split, multi-split, réversible), prix, aides éventuelles, entretien et choix d'un installateur local.",
    body: `
<p>Avec des étés qui se réchauffent dans la Nièvre et l'Yonne, la climatisation n'est plus un luxe réservé aux maisons du Sud. Les canicules de 2022 et 2023, puis les chaleurs inhabituelles de ce mois de mai 2026, ont changé les habitudes. De plus en plus de familles choisissent d'équiper leur logement, non pas pour le confort estival uniquement, mais pour une solution qui chauffe aussi en hiver.</p>
<p>Ce guide vous donne toutes les clés pour choisir et installer une climatisation adaptée à votre logement et à votre budget, dans notre région.</p>

<h2>Les deux grandes familles : simple froid ou réversible</h2>
<p>Avant de choisir un modèle, la première question à vous poser est celle-ci : vous cherchez uniquement à vous rafraîchir l'été ou vous voulez aussi un appoint de chauffage en hiver ?</p>
<table class="gm-compare">
  <thead><tr><th>Type</th><th>Fonction principale</th><th>Chauffage en hiver</th><th>Coût indicatif</th></tr></thead>
  <tbody>
    <tr><td><strong>Climatisation simple froid</strong></td><td>Rafraîchissement uniquement</td><td>Non</td><td>3 000 – 5 000 €</td></tr>
    <tr><td><strong>Climatisation réversible (PAC air/air)</strong></td><td>Rafraîchissement + chauffage d'appoint</td><td>Oui</td><td>6 000 – 9 000 €</td></tr>
  </tbody>
</table>
<p>La grande majorité de nos installations dans la Nièvre et l'Yonne sont des <strong>climatisations réversibles</strong>. Pour un coût un peu plus élevé, vous avez un équipement qui fonctionne 12 mois par an. Pour comprendre les différences en détail, lisez notre article <a href="/blog/climatisation-simple-froide-ou-reversible">Climatisation simple froid ou réversible : ce qui change vraiment</a>.</p>

<h2>Monosplit, multi-split ou gainable</h2>

<div class="gm-schema">
<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des 3 configurations de climatisation : monosplit, multi-split, gainable">
  <!-- Monosplit -->
  <rect x="10" y="10" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="85" y="30" text-anchor="middle" fill="#1a2e4a" font-size="11" font-weight="bold">Monosplit</text>
  <rect x="30" y="45" width="110" height="40" rx="4" fill="#1a2e4a"/>
  <text x="85" y="70" text-anchor="middle" fill="#FAC864" font-size="9">Unité extérieure</text>
  <line x1="85" y1="85" x2="85" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <rect x="30" y="110" width="110" height="35" rx="4" fill="#334155"/>
  <text x="85" y="132" text-anchor="middle" fill="#fff" font-size="9">Unité intérieure ×1</text>
  <text x="85" y="180" text-anchor="middle" fill="#64748b" font-size="8">1 pièce</text>
  <!-- Multi-split -->
  <rect x="185" y="10" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="260" y="30" text-anchor="middle" fill="#1a2e4a" font-size="11" font-weight="bold">Multi-split</text>
  <rect x="205" y="38" width="110" height="34" rx="4" fill="#1a2e4a"/>
  <text x="260" y="59" text-anchor="middle" fill="#FAC864" font-size="8.5">Unité extérieure ×1</text>
  <line x1="235" y1="72" x2="213" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="260" y1="72" x2="260" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="285" y1="72" x2="307" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3,2"/>
  <rect x="192" y="100" width="42" height="30" rx="3" fill="#334155"/>
  <text x="213" y="119" text-anchor="middle" fill="#fff" font-size="7.5">Pièce 1</text>
  <rect x="239" y="100" width="42" height="30" rx="3" fill="#334155"/>
  <text x="260" y="119" text-anchor="middle" fill="#fff" font-size="7.5">Pièce 2</text>
  <rect x="286" y="100" width="42" height="30" rx="3" fill="#334155"/>
  <text x="307" y="119" text-anchor="middle" fill="#fff" font-size="7.5">Pièce 3</text>
  <text x="260" y="148" text-anchor="middle" fill="#64748b" font-size="7.5">3 unités indépendantes</text>
  <text x="260" y="180" text-anchor="middle" fill="#64748b" font-size="8">2 à 5 pièces</text>
  <!-- Gainable -->
  <rect x="360" y="10" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="435" y="30" text-anchor="middle" fill="#1a2e4a" font-size="11" font-weight="bold">Gainable</text>
  <rect x="380" y="45" width="110" height="40" rx="4" fill="#1a2e4a"/>
  <text x="435" y="70" text-anchor="middle" fill="#FAC864" font-size="9">Unité extérieure</text>
  <line x1="435" y1="85" x2="435" y2="105" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
  <rect x="390" y="105" width="90" height="25" rx="4" fill="#475569"/>
  <text x="435" y="121" text-anchor="middle" fill="#fff" font-size="8">Centrale gainable</text>
  <line x1="405" y1="130" x2="390" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="435" y1="130" x2="435" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
  <line x1="465" y1="130" x2="480" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3"/>
  <text x="435" y="180" text-anchor="middle" fill="#64748b" font-size="8">Toute la maison</text>
</svg>
</div>

<ul class="gm-checklist">
  <li><strong>Monosplit</strong> : 1 unité extérieure + 1 unité intérieure. Solution la plus courante et la plus économique, idéale pour climatiser une pièce principale (salon, chambre).</li>
  <li><strong>Multi-split</strong> : 1 unité extérieure + 2 à 5 unités intérieures. Permet de climatiser plusieurs pièces avec un seul groupe extérieur. Plus coûteux qu'un monosplit seul, mais plus économique que poser autant de monosplits indépendants : vous n'avez qu'une seule unité extérieure en façade au lieu de plusieurs.</li>
  <li><strong>Gainable</strong> : système centralisé avec conduits dans les cloisons. Solution discrète, homogène sur tout le logement. Nécessite des travaux plus importants.</li>
</ul>
<p>Pour comparer la climatisation monosplit et multi-split en détail : <a href="/blog/climatisation-monosplit-ou-multisplit">Monosplit ou multi-split : quelle configuration choisir</a>.</p>

<h2>Les marques partenaires du Groupe Merlin</h2>
<p>Nous installons trois marques que nous avons sélectionnées pour leur fiabilité, la disponibilité de leur SAV en France et la qualité de leur gamme réversible.</p>
<table class="gm-compare">
  <thead><tr><th>Marque</th><th>Point fort principal</th><th>Positionnement</th><th>Origine</th></tr></thead>
  <tbody>
    <tr><td><strong>Daikin</strong></td><td>Leader mondial de la climatisation, large gamme, très hauts SEER/SCOP</td><td>Entrée à haut de gamme</td><td>Japonaise</td></tr>
    <tr><td><strong>Mitsubishi Electric</strong></td><td>Fiabilité et longévité reconnues, faible niveau sonore</td><td>Milieu à haut de gamme</td><td>Japonaise</td></tr>
    <tr><td><strong>Atlantic</strong></td><td>Marque française, bon rapport qualité-prix, SAV dense en France</td><td>Entrée à milieu de gamme</td><td>Française</td></tr>
  </tbody>
</table>
<p>Pour une comparaison détaillée des gammes et des modèles : <a href="/blog/quelle-marque-climatisation-choisir">Quelle marque de climatisation choisir en 2026</a>.</p>

<h2>Prix et aides en 2026</h2>
<p>Le prix d'une climatisation réversible (monosplit) posée par un professionnel se situe entre <strong>6 000 € et 9 000 €</strong> dans la Nièvre et l'Yonne, matériel et pose inclus. Ce montant varie selon la puissance choisie, la configuration du logement et les travaux d'installation nécessaires.</p>
<p>Pour la climatisation simple froid (rafraîchissement seul), aucune aide d'État significative n'est prévue. Pour la climatisation réversible (PAC air/air), deux dispositifs s'appliquent :</p>
<ul class="gm-checklist">
  <li><strong>Prime CEE (Certificats d'Économies d'Énergie)</strong> : versée par les fournisseurs d'énergie, elle peut atteindre <strong>975 €</strong> pour les ménages aux revenus très modestes et <strong>770 €</strong> pour les autres ménages. Conditions : logement de plus de 2 ans, artisan certifié RGE, appareil avec un SCOP ≥ 3,9 pour une puissance ≤ 12 kW, et demande déposée <em>avant</em> la signature du devis.</li>
  <li><strong>TVA à 10 %</strong> : applicable à la place des 20 % habituels quand l'installation est réalisée par un professionnel dans un logement de plus de 2 ans.</li>
  <li><strong>MaPrimeRénov'</strong> : la climatisation réversible installée seule n'y donne pas droit. Elle peut entrer dans le calcul uniquement dans le cadre d'une rénovation d'ampleur.</li>
</ul>
<p>Le Groupe Merlin est certifié RGE et chiffre l'aide directement dans le devis, pour que vous connaissiez votre reste à charge réel avant de vous engager.</p>

<h2>Entretien et durée de vie</h2>
<p>Une climatisation bien entretenue dure entre 10 et 15 ans. Sans entretien régulier, les performances se dégradent, la consommation électrique augmente et les pannes arrivent plus tôt.</p>
<p>L'entretien annuel par un professionnel est fortement recommandé, et obligatoire dès que l'installation contient plus de 2 kg de fluide frigorigène (réglementation F-Gas). Concrètement, ce contrôle comprend le nettoyage des filtres et de l'évaporateur, la vérification du circuit frigorifique, le contrôle des pressions et la détection d'éventuelles fuites. Un filtre encrassé peut réduire l'efficacité de l'appareil de 20 à 30 %.</p>
<p>Le Groupe Merlin propose des contrats d'entretien annuels pour votre climatisation. Pour en savoir plus sur ce que la réglementation impose et les bons réflexes à adopter : <a href="/blog/entretien-climatisation-obligatoire">Entretien de votre climatisation : ce que la loi impose</a>.</p>

<h2>Le Groupe Merlin : installateur certifié dans la Nièvre et l'Yonne</h2>
<p>Le Groupe Merlin est certifié <strong>RGE QualiPAC</strong> et <strong>RGE Eco Artisan</strong>, parmi cinq certifications RGE. Nos techniciens installent et entretiennent les climatisations dans la Nièvre et dans l'Yonne (agences de Clamecy et de Corbigny). Nous intervenons rapidement pour votre projet, généralement sous quelques jours.</p>
<p>Pour démarrer votre projet, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Nos techniciens se déplacent chez vous pour évaluer votre logement et vous proposer la solution adaptée.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>, règlement UE ErP sur l'efficacité énergétique des climatiseurs.</em></p>
`,
  },
  /* Silo 1 — Comprendre */
  {
    slug: "comment-fonctionne-climatisation",
    title: "Comment fonctionne une climatisation : split, réversible, gainable",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "comment-fonctionne-climatisation.jpg",
    imgDir: "blog",
    imgFocus: "95% center",
    excerpt:
      "Une climatisation capte les calories de l'air intérieur et les rejette dehors. On vous explique le cycle frigorifique, la différence entre EER et SEER et pourquoi la réversible chauffe aussi bien qu'elle refroidit.",
    body: `

<p>Une climatisation ne crée pas du froid. Elle déplace la chaleur : elle la capte à l'intérieur de votre maison et la rejette à l'extérieur. C'est exactement le même principe thermodynamique qu'un réfrigérateur, ou qu'une pompe à chaleur — dans le sens inverse. Comprendre ce mécanisme aide à choisir le bon appareil et à interpréter ses performances.</p>

<h2>Le cycle frigorifique : 4 étapes</h2>
<p>Le fluide frigorigène circule en boucle fermée entre l'unité intérieure et l'unité extérieure :</p>
<ol>
  <li><strong>Évaporation (côté intérieur)</strong> : le fluide, à basse pression et basse température, capte les calories de l'air de la pièce et se vaporise. L'air refroidi est soufflé dans la pièce.</li>
  <li><strong>Compression</strong> : le compresseur (dans l'unité extérieure) monte la pression du gaz, ce qui élève sa température.</li>
  <li><strong>Condensation (côté extérieur)</strong> : le fluide chaud cède sa chaleur à l'air extérieur via l'échangeur de l'unité extérieure et redevient liquide.</li>
  <li><strong>Détente</strong> : la pression chute, le fluide refroidit et recommence le cycle.</li>
</ol>
<p>La climatisation réversible inverse simplement ce cycle en hiver : elle capte les calories de l'air extérieur (même froid) et les restitue à l'intérieur. C'est pourquoi on l'appelle aussi <strong>pompe à chaleur air/air</strong>.</p>

<h2>EER et SEER : comment mesurer la performance</h2>
<table class="gm-compare">
  <thead><tr><th>Indicateur</th><th>Signification</th><th>Norme</th><th>Valeur recommandée</th></tr></thead>
  <tbody>
    <tr><td><strong>EER</strong></td><td>Energy Efficiency Ratio — efficacité à un instant T (35 °C extérieur)</td><td>EN 14511</td><td>≥ 3</td></tr>
    <tr><td><strong>SEER</strong></td><td>Seasonal EER — efficacité sur toute la saison de rafraîchissement</td><td>EN 14825</td><td>≥ 6 (label A+++)</td></tr>
    <tr><td><strong>COP</strong></td><td>Performance en chauffage (réversible uniquement)</td><td>EN 14511</td><td>≥ 3,5</td></tr>
    <tr><td><strong>SCOP</strong></td><td>Seasonal COP — efficacité chauffage sur la saison</td><td>EN 14825</td><td>≥ 3,9 (zone H1c)</td></tr>
  </tbody>
</table>
<p>Le SEER est l'indicateur le plus représentatif de votre consommation électrique réelle sur une saison de rafraîchissement. Un SEER de 6 signifie que pour 1 kWh électrique consommé, vous obtenez 6 kWh de froid. C'est l'équivalent du SCOP pour le chauffage.</p>

<h2>Les 3 configurations principales</h2>
<ul class="gm-checklist">
  <li><strong>Monosplit</strong> : 1 unité extérieure + 1 unité intérieure. Solution la plus simple et la plus courante, idéale pour une pièce principale. Installation en 1 journée généralement.</li>
  <li><strong>Multi-split</strong> : 1 unité extérieure + 2 à 5 unités intérieures (chacune dans une pièce différente). Plus d'impact visuel extérieur réduit, mais coût supérieur et régulation plus complexe.</li>
  <li><strong>Gainable (ou centralisé)</strong> : 1 centrale avec distribution par gaines dans les cloisons et plafonds. Solution la plus discrète et homogène, mais nécessite des travaux de plâtrerie importants. Recommandé en construction neuve ou rénovation lourde.</li>
</ul>

<blockquote class="gm-pullquote">
  "La configuration la mieux adaptée à votre logement ne se choisit pas sur catalogue. Elle se détermine lors d'une visite, en regardant le plan, l'exposition et les circuits possibles pour les gaines."
</blockquote>

<h2>Pourquoi la réversible vaut le surcoût</h2>
<ul class="gm-checklist">
  <li>Un seul appareil pour rafraîchir l'été et chauffer en mi-saison.</li>
  <li>COP de 3 à 4 en mode chauffage : bien meilleur qu'un radiateur électrique.</li>
  <li>Investissement amorti sur 12 mois d'utilisation et non 5-6 mois uniquement.</li>
  <li>Certains modèles éligibles à des primes CEE (vérifier les conditions en vigueur).</li>
</ul>
<p>Pour comprendre les différences entre simple froide et réversible : <a href="/blog/climatisation-simple-froide-ou-reversible">Climatisation simple froide ou réversible : ce qui change vraiment</a>. Et pour tout comprendre sur la climatisation dans la Nièvre et l'Yonne, consultez notre <a href="/blog/climatisation-guide-complet">guide complet climatisation 2026</a>.</p>
<p><em>Sources : normes EN 14511 et EN 14825, règlement ErP UE, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>.</em></p>
`,
  },
  {
    slug: "climatisation-simple-froide-ou-reversible",
    title: "Climatisation simple froide ou réversible : ce qui change vraiment",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "climatisation-simple-froide-ou-reversible.jpg",
    imgDir: "blog",
    excerpt:
      "Climatisation simple froide ou réversible : deux technologies, deux niveaux de service et deux prix. Laquelle correspond à votre situation dans la Nièvre ou l'Yonne ?",
    body: `

<p>La question revient systématiquement : "Est-ce que je prends une clim simple ou une réversible ?" La réponse dépend de ce que vous attendez de l'appareil. Si vous voulez uniquement vous rafraîchir en été, la simple froide suffit. Si vous voulez aussi un appoint de chauffage en mi-saison ou un remplacement partiel de votre chauffage principal, la réversible s'impose.</p>

<h2>La climatisation simple froide</h2>
<p>La climatisation simple froide ne fonctionne que dans un sens : elle capte la chaleur intérieure et la rejette dehors. Elle rafraîchit votre logement en été. Point.</p>
<ul class="gm-checklist">
  <li>Utilisation uniquement en saison chaude (mai à septembre environ en Nièvre).</li>
  <li>Installation plus simple, coût inférieur.</li>
  <li>Pas d'aide d'État significative : c'est un équipement de confort, pas d'efficacité énergétique au sens de la réglementation.</li>
  <li>Idéale si vous avez déjà un bon système de chauffage principal et que vous voulez uniquement gérer les canicules.</li>
</ul>

<h2>La climatisation réversible (PAC air/air)</h2>
<p>La climatisation réversible inverse le cycle en hiver : elle capte les calories de l'air extérieur (même par temps froid) et les restitue à l'intérieur. Elle chauffe et rafraîchit.</p>
<ul class="gm-checklist">
  <li>Utilisation 12 mois sur 12 : rafraîchissement l'été, chauffage d'appoint en mi-saison.</li>
  <li>COP de 3 à 4 en mode chauffage : consomme 3 à 4 fois moins d'énergie qu'un radiateur électrique classique.</li>
  <li>Coût supérieur à l'achat, mais rentabilité améliorée par un usage plus long dans l'année.</li>
  <li>Certains systèmes réversibles peuvent bénéficier de primes CEE — conditions variables selon les opérateurs.</li>
</ul>

<h2>Tableau comparatif</h2>
<table class="gm-compare">
  <thead><tr><th>Critère</th><th>Simple froide</th><th>Réversible</th></tr></thead>
  <tbody>
    <tr><td>Fonction</td><td>Rafraîchissement uniquement</td><td>Rafraîchissement + chauffage</td></tr>
    <tr><td>Saison d'utilisation</td><td>Été uniquement</td><td>Toute l'année</td></tr>
    <tr><td>Prix indicatif (monosplit posé)</td><td>3 000 – 5 000 €</td><td>6 000 – 9 000 €</td></tr>
    <tr><td>Aides d'État</td><td>Aucune significative</td><td>Primes CEE possibles selon conditions</td></tr>
    <tr><td>Économies en mode chauffage</td><td>Sans objet</td><td>COP 3-4 vs radiateur électrique</td></tr>
    <tr><td>Entretien annuel</td><td>Recommandé</td><td>Recommandé</td></tr>
  </tbody>
</table>

<blockquote class="gm-pullquote">
  "Dans la Nièvre, nos hivers sont réels : il fait froid d'octobre à mars. Une réversible travaille aussi en chauffage d'appoint, ce qui change le calcul de rentabilité par rapport à une simple froide."
</blockquote>

<h2>Notre recommandation pour la Nièvre et l'Yonne</h2>
<p>Dans notre région, nous recommandons la <strong>climatisation réversible</strong> dans la grande majorité des cas. La différence de prix est rapidement absorbée par l'économie sur la facture de chauffage en mi-saison. Et si les étés continuent à se réchauffer, l'amortissement en mode froid s'améliore chaque année.</p>
<p>La simple froide reste pertinente pour des projets de budget limité ou pour des locaux qui ont déjà un bon système de chauffage et qui veulent uniquement gérer un pic estival ponctuel.</p>
<p>Pour aller plus loin, consultez notre <a href="/blog/climatisation-guide-complet">guide complet climatisation 2026</a> ou notre article sur <a href="/blog/quelle-climatisation-choisir">quelle climatisation choisir pour votre logement</a>. Et pour démarrer, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>.</em></p>
`,
  },
  /* Silo 2 — Choisir */
  {
    slug: "quelle-climatisation-choisir",
    title: "Quelle climatisation choisir pour votre maison ou appartement",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "quelle-climatisation-choisir.jpg",
    imgDir: "blog",
    excerpt:
      "Surface, exposition, isolation, budget : les critères pour choisir la bonne climatisation pour votre logement dans la Nièvre ou l'Yonne. Monosplit, multi-split ou gainable, simple froide ou réversible.",
    body: `

<p>Choisir une climatisation, c'est d'abord répondre à quatre questions dans le bon ordre : combien de pièces, quelle surface, quel usage et quel budget ? Le modèle vient après. Beaucoup de clients achètent d'abord une marque ou une puissance, puis découvrent que ça ne correspond pas à leur logement. La visite préalable existe précisément pour éviter ça.</p>

<h2>Combien de pièces voulez-vous climatiser</h2>
<p>C'est la première question. Si vous voulez traiter une seule pièce (salon ou chambre), un monosplit suffit. Si vous voulez couvrir plusieurs pièces, vous avez deux options : plusieurs monosplits indépendants (plus de flexibilité, plus d'unités extérieures) ou un multi-split (une seule unité extérieure, plusieurs unités intérieures).</p>
<ul class="gm-checklist">
  <li>1 pièce → monosplit (solution la plus économique)</li>
  <li>2 à 5 pièces → multi-split (1 unité extérieure pour toutes) ou monosplits séparés</li>
  <li>Logement entier avec intégration discrète → gainable (travaux nécessaires)</li>
</ul>

<h2>Quelle puissance pour votre surface</h2>
<table class="gm-compare">
  <thead><tr><th>Surface à climatiser</th><th>Puissance recommandée</th><th>Type adapté</th></tr></thead>
  <tbody>
    <tr><td>Jusqu'à 20 m²</td><td>2,0 – 2,5 kW</td><td>Monosplit compact</td></tr>
    <tr><td>20 à 35 m²</td><td>2,5 – 3,5 kW</td><td>Monosplit standard</td></tr>
    <tr><td>35 à 50 m²</td><td>3,5 – 5,0 kW</td><td>Monosplit puissant</td></tr>
    <tr><td>50 à 80 m²</td><td>5,0 – 7,0 kW</td><td>Multi-split ou gainable</td></tr>
    <tr><td>80 m² et plus</td><td>À calculer selon le bilan thermique</td><td>Gainable ou multi-split</td></tr>
  </tbody>
</table>
<p>Ces chiffres sont indicatifs. La puissance réelle dépend de l'isolation, de l'orientation, du nombre de fenêtres et du type de construction. Une maison en pierre ancienne de la Nièvre se comporte très différemment d'un appartement bien isolé. Un calcul de bilan thermique est indispensable avant tout choix.</p>

<h2>Simple froide ou réversible</h2>
<p>Si vous voulez uniquement vous rafraîchir en été : la simple froide suffit et coûte moins cher. Si vous voulez aussi un chauffage d'appoint en mi-saison ou un remplacement partiel de votre chauffage principal : la réversible s'impose. Pour comparer les deux en détail : <a href="/blog/climatisation-simple-froide-ou-reversible">Climatisation simple froide ou réversible : ce qui change vraiment</a>.</p>

<h2>Les critères techniques à vérifier</h2>
<ul class="gm-checklist">
  <li><strong>SEER ≥ 6</strong> : efficacité saisonnière minimale recommandée. Correspond au label EU A++ ou A+++ selon les gammes.</li>
  <li><strong>Niveau sonore</strong> : vérifiez le niveau de l'unité intérieure en dB(A) à 1 mètre. Important pour les chambres (viser ≤ 25 dB).</li>
  <li><strong>Longueur de liaison frigorigène</strong> : distance maximale entre l'unité extérieure et l'unité intérieure. Impacte le choix d'emplacement.</li>
  <li><strong>Type de fluide frigorigène</strong> : les appareils récents utilisent le R32 (GWP plus faible que le R410A) — moins d'impact environnemental.</li>
</ul>

<blockquote class="gm-pullquote">
  "Le bon appareil n'est pas le plus puissant ni le moins cher : c'est celui qui est parfaitement dimensionné pour votre logement et installé par un professionnel qui connaît votre région."
</blockquote>

<h2>Groupe Merlin vous accompagne dans le choix</h2>
<p>Certifiés <strong>RGE QualiPAC</strong> et <strong>RGE Eco Artisan</strong> (parmi cinq certifications RGE), nos techniciens réalisent une visite préalable pour évaluer votre logement avant tout devis. Nous installons des climatisations <strong>Daikin, Mitsubishi Electric et Atlantic</strong> dans toute la Nièvre et l'Yonne.</p>
<p>Pour comparer les marques : <a href="/blog/quelle-marque-climatisation-choisir">Quelle marque de climatisation choisir en 2026</a>. Pour comprendre le fonctionnement des systèmes : <a href="/blog/comment-fonctionne-climatisation">Comment fonctionne une climatisation</a>. Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, règlement ErP EU sur les climatiseurs.</em></p>
`,
  },
  {
    slug: "climatisation-monosplit-ou-multisplit",
    title: "Monosplit ou multi-split : quelle configuration pour votre logement",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "climatisation-monosplit-ou-multisplit.jpg",
    imgDir: "blog",
    imgFocus: "20% center",
    excerpt:
      "Monosplit ou multi-split : le choix détermine combien de pièces vous climatisez, le nombre d'unités extérieures et votre budget. On compare les deux configurations pour vous aider à décider.",
    body: `

<p>La confusion entre monosplit et multi-split est fréquente. En résumé : le monosplit traite une pièce avec une unité extérieure dédiée, le multi-split traite plusieurs pièces avec une seule unité extérieure. Ce n'est pas juste une question de taille d'appareil, c'est une question d'architecture de l'installation.</p>

<h2>Le monosplit : simple, efficace, économique</h2>
<p>Un système monosplit se compose d'une unité extérieure (le groupe) et d'une unité intérieure (le diffuseur mural, cassette ou console) reliées par des tuyaux de fluide frigorigène et un câble électrique.</p>
<ul class="gm-checklist">
  <li>Installation la plus rapide : 1 journée en général.</li>
  <li>Prix inférieur : 3 000 – 5 000 € pour une simple froide, 6 000 – 9 000 € pour une réversible.</li>
  <li>Fonctionnement indépendant : si le groupe tombe en panne, seule la pièce concernée est impactée.</li>
  <li>Peut être multiplié : 3 monosplits pour 3 pièces = 3 groupes extérieurs.</li>
</ul>
<p>Inconvénient : si vous installez plusieurs monosplits, vous avez plusieurs unités extérieures sur la façade, ce qui peut poser des questions esthétiques ou des contraintes en copropriété.</p>

<h2>Le multi-split : une seule unité extérieure pour plusieurs pièces</h2>
<p>Un système multi-split relie une seule unité extérieure à 2, 3, 4 ou 5 unités intérieures. Chaque unité intérieure traite une pièce indépendamment, mais elles partagent le même groupe extérieur.</p>
<ul class="gm-checklist">
  <li>Un seul groupe extérieur : solution plus discrète, moins d'impact visuel sur la façade.</li>
  <li>Régulation indépendante par pièce : chaque unité intérieure a sa propre télécommande et sa consigne.</li>
  <li>Coût global souvent plus élevé que des monosplits séparés pour le même nombre de pièces.</li>
  <li>Si le groupe extérieur tombe en panne, toutes les pièces sont impactées simultanément.</li>
</ul>

<h2>Tableau comparatif</h2>
<table class="gm-compare">
  <thead><tr><th>Critère</th><th>Monosplit</th><th>Multi-split</th></tr></thead>
  <tbody>
    <tr><td>Nombre de pièces</td><td>1 par système</td><td>2 à 5 avec un seul groupe</td></tr>
    <tr><td>Unités extérieures</td><td>1 par pièce</td><td>1 pour toutes les pièces</td></tr>
    <tr><td>Coût par pièce</td><td>Moins cher à l'unité</td><td>Plus cher, mais 1 seul groupe</td></tr>
    <tr><td>Esthétique extérieure</td><td>Plusieurs groupes si plusieurs pièces</td><td>Un seul groupe</td></tr>
    <tr><td>Indépendance en cas de panne</td><td>Seule la pièce concernée</td><td>Toutes les pièces affectées</td></tr>
    <tr><td>Régulation pièce par pièce</td><td>Oui (chaque système)</td><td>Oui (chaque unité intérieure)</td></tr>
  </tbody>
</table>

<blockquote class="gm-pullquote">
  "Si vous voulez climatiser 2 pièces, comparez toujours le coût de 2 monosplits vs un multi-split 1×2. L'écart n'est pas toujours en faveur du multi-split, et la redondance du monosplit a de la valeur."
</blockquote>

<h2>Quelle configuration pour votre situation</h2>
<ul class="gm-checklist">
  <li><strong>1 pièce à traiter</strong> → monosplit, sans hésitation.</li>
  <li><strong>2 à 3 pièces, façade en copropriété ou contraintes esthétiques</strong> → multi-split pour limiter les groupes extérieurs.</li>
  <li><strong>2 à 3 pièces, maison individuelle sans contrainte</strong> → comparer les devis monosplits vs multi-split.</li>
  <li><strong>4 pièces ou plus</strong> → multi-split ou gainable selon la configuration du logement.</li>
</ul>
<p>Pour comprendre toutes les configurations disponibles et choisir la bonne : <a href="/blog/quelle-climatisation-choisir">Quelle climatisation choisir pour votre maison</a>. Et pour tout sur le fonctionnement de ces systèmes : <a href="/blog/comment-fonctionne-climatisation">Comment fonctionne une climatisation</a>. Pour démarrer votre projet : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, documentation fabricants Daikin, Mitsubishi Electric, Atlantic.</em></p>
`,
  },
  {
    slug: "quelle-marque-climatisation-choisir",
    title: `Quelle marque de climatisation choisir en ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "quelle-marque-climatisation-choisir.jpg",
    imgDir: "blog",
    excerpt:
      "Daikin, Mitsubishi Electric, Atlantic : quelles sont les marques de climatisation fiables en 2026 et comment choisir ? Les critères qui comptent vraiment au-delà du prix affiché.",
    body: `

<p>Comme pour les pompes à chaleur, la marque d'une climatisation compte moins que l'installateur. Une excellente marque mal installée ou mal dimensionnée donne de moins bons résultats qu'une marque standard parfaitement posée. Cela dit, les marques que vous choisissez ne se valent pas toutes sur la durée — fiabilité, SAV local et disponibilité des pièces détachées font la différence.</p>

<h2>Les critères de sélection qui comptent</h2>
<ul class="gm-checklist">
  <li><strong>SEER et COP</strong> : les indicateurs de performance standardisés. Ne vous fiez pas aux valeurs maximales affichées sur les catalogues, comparez les valeurs SEER en conditions réelles.</li>
  <li><strong>Niveau sonore</strong> : en dB(A) à 1 mètre pour l'unité intérieure (important pour les chambres) et l'unité extérieure (important pour le voisinage).</li>
  <li><strong>Garantie</strong> : compresseur (souvent 5 ans extensible), pièces et main-d'œuvre (souvent 2 ans). Lisez les conditions précises.</li>
  <li><strong>SAV local</strong> : votre installateur peut-il intervenir dans les 48 heures en cas de panne ? C'est plus important que le nom sur la plaquette.</li>
  <li><strong>Type de fluide frigorigène</strong> : le R32 (GWP 675) remplace le R410A (GWP 2088) sur les appareils récents. Impact environnemental réduit et seuil F-Gas plus élevé avant obligation de contrôle.</li>
</ul>

<h2>Les marques partenaires de Groupe Merlin</h2>
<table class="gm-compare">
  <thead><tr><th>Marque</th><th>Gamme climatisation</th><th>Points forts</th><th>Usage recommandé</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Daikin</strong></td>
      <td>Emura, Stylish, Comfora, Perfera</td>
      <td>Leader mondial, SEER élevé, gamme large, design soigné</td>
      <td>Toutes surfaces, usage résidentiel et semi-professionnel</td>
    </tr>
    <tr>
      <td><strong>Mitsubishi Electric</strong></td>
      <td>MSZ / MUZ, multi-split MXZ</td>
      <td>Fiabilité reconnue, faible niveau sonore, performance par grand froid</td>
      <td>Chambre (unité silencieuse), réversible usage intensif</td>
    </tr>
    <tr>
      <td><strong>Atlantic</strong></td>
      <td>Fujitsu Atlantic, Takao, Naos</td>
      <td>Fabrication française, gamme résidentielle complète, rapport qualité/prix</td>
      <td>Budget maîtrisé, usage saisonnier, maisons individuelles</td>
    </tr>
  </tbody>
</table>

<blockquote class="gm-pullquote">
  "Chez Groupe Merlin, nous ne proposons que les marques pour lesquelles nous pouvons assurer le SAV localement. Si une pièce est introuvable sous 48 heures dans la Nièvre, nous ne la vendons pas."
</blockquote>

<h2>Le SAV : l'argument décisif sur 10 à 15 ans</h2>
<p>Une climatisation dure 10 à 15 ans. Sur cette durée, votre installateur interviendra pour les entretiens annuels et peut-être pour des pannes. La proximité géographique de votre technicien est aussi importante que les caractéristiques de l'appareil.</p>
<p>Nos agences de Clamecy et Corbigny couvrent l'ensemble de la Nièvre et de l'Yonne. Nos délais d'intervention sont garantis à <strong>48 heures ouvrées</strong>, même en plein mois d'août. Pour trouver le bon installateur dans votre secteur : <a href="/blog/installateur-climatisation-nievre">Installateur de climatisation dans la Nièvre</a> ou <a href="/blog/installateur-climatisation-yonne">dans l'Yonne</a>.</p>
<p>Consultez notre <a href="/blog/climatisation-guide-complet">guide complet climatisation 2026</a> pour une vue d'ensemble. Pour démarrer votre projet, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, normes EN 14511 et EN 14825, données fabricants.</em></p>
`,
  },
  /* Silo 3 — Prix & Installation */
  {
    slug: "prix-climatisation-split",
    title: "Prix d'une climatisation split : la fourchette honnête",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prix-climatisation-split.jpg",
    imgDir: "blog",
    excerpt:
      "Combien coûte une climatisation split dans la Nièvre ou l'Yonne en 2026 ? On détaille les fourchettes réelles pour un monosplit simple froide, un monosplit réversible et un multi-split, pose incluse.",
    body: `

<p>Le prix d'une climatisation est l'une des questions les plus fréquentes que nous recevons. La réponse honnête : il dépend du type de système, de la puissance choisie, de la configuration de votre logement et des travaux nécessaires à l'installation. Voici les fourchettes réelles, sans frais cachés.</p>

<h2>Ce qui est inclus dans le prix d'une installation</h2>
<ul class="gm-checklist">
  <li>L'unité extérieure (groupe) et l'unité(s) intérieure(s).</li>
  <li>La liaison frigorifique (tuyaux de fluide + câble électrique entre les unités).</li>
  <li>La mise en service et le réglage des paramètres.</li>
  <li>Le déplacement et la main-d'œuvre du technicien.</li>
  <li>Le raccordement électrique (si le circuit dédié existe déjà).</li>
</ul>
<p>Ce qui peut s'ajouter : la création d'un circuit électrique dédié (si inexistant), la pose d'une console murale ou d'un support spécial pour l'unité extérieure, les travaux de finition si percement dans une cloison ancienne.</p>

<h2>Fourchettes par type de système</h2>
<table class="gm-compare">
  <thead><tr><th>Type de système</th><th>Puissance</th><th>Prix indicatif posé</th><th>Usage typique</th></tr></thead>
  <tbody>
    <tr><td>Monosplit simple froide</td><td>2,5 kW</td><td>3 000 – 4 000 €</td><td>Pièce jusqu'à 20 m²</td></tr>
    <tr><td>Monosplit simple froide</td><td>3,5 – 5 kW</td><td>4 000 – 5 000 €</td><td>Pièce jusqu'à 40 m²</td></tr>
    <tr><td>Monosplit réversible</td><td>2,5 kW</td><td>6 000 – 7 000 €</td><td>Pièce jusqu'à 20 m²</td></tr>
    <tr><td>Monosplit réversible</td><td>3,5 – 5 kW</td><td>7 000 – 9 000 €</td><td>Pièce jusqu'à 40 m²</td></tr>
    <tr><td>Multi-split réversible 1+2</td><td>5 kW total</td><td>9 000 – 13 000 €</td><td>2 pièces</td></tr>
    <tr><td>Multi-split réversible 1+3</td><td>7 kW total</td><td>12 000 – 17 000 €</td><td>3 pièces</td></tr>
  </tbody>
</table>
<p>Ces fourchettes sont indicatives et valables pour la Nièvre et l'Yonne en 2026. Elles intègrent le matériel et la pose par un technicien RGE. Le prix exact dépend du modèle retenu, de la longueur de liaison et des contraintes de votre logement.</p>

<h2>Y a-t-il des aides pour une climatisation</h2>
<p>Pour la <strong>climatisation simple froide</strong> : aucune aide d'État significative. C'est considéré comme un équipement de confort, pas de rénovation énergétique.</p>
<p>Pour la <strong>climatisation réversible</strong> (PAC air/air) : certaines primes CEE peuvent s'appliquer selon les conditions en vigueur et les opérateurs. Le montant est en général moins important que pour une PAC air/eau. Renseignez-vous sur <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a> pour les dispositifs actuels.</p>

<blockquote class="gm-pullquote">
  "Le meilleur moyen d'avoir un prix précis, c'est la visite préalable. En 30 à 45 minutes chez vous, nous pouvons vous donner un devis définitif sans surprise."
</blockquote>

<h2>Groupe Merlin : devis gratuit dans la Nièvre et l'Yonne</h2>
<p>Nos devis sont gratuits et incluent la visite préalable. Pour comprendre l'installation étape par étape : <a href="/blog/installation-climatisation-etapes">Installation d'une climatisation : étapes et déroulement</a>. Pour choisir le bon système : <a href="/blog/quelle-climatisation-choisir">Quelle climatisation choisir pour votre logement</a>. Et pour démarrer : <a href="/contact"><strong>demandez votre visite préalable</strong></a>.</p>
<p><em>Source des fourchettes de prix : Groupe Merlin, tarifs 2026 en Nièvre (58) et Yonne (89).</em></p>
`,
  },
  {
    slug: "installation-climatisation-etapes",
    title: "Installation d'une climatisation : étapes et déroulement",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installation-climatisation-etapes.jpg",
    imgDir: "blog",
    imgFocus: "55% center",
    excerpt:
      "Comment se passe l'installation d'une climatisation chez vous ? De la visite préalable à la mise en service, voici les 6 étapes d'une installation réalisée par un technicien RGE.",
    body: `

<p>L'installation d'une climatisation se passe en général en une journée pour un monosplit standard. C'est un travail qui nécessite plusieurs compétences : électricité, manipulation des fluides frigorigènes (habilitation obligatoire), et bonne connaissance du bâtiment. Voici comment ça se passe de A à Z.</p>

<h2>Les 6 étapes d'une installation climatisation</h2>

<ul class="gm-checklist">
  <li><strong>Étape 1 — Visite préalable</strong> : le technicien vient chez vous pour évaluer le logement, choisir l'emplacement optimal de l'unité intérieure et extérieure, et identifier les contraintes (électricité, percements, longueur de liaison). C'est à cette étape que le devis est finalisé.</li>
  <li><strong>Étape 2 — Pose de l'unité intérieure</strong> : fixation de la platine murale au mur (fixations dans la structure porteuse), puis accrochage de l'unité intérieure. Percement du mur pour le passage des tuyaux et câbles.</li>
  <li><strong>Étape 3 — Pose de l'unité extérieure</strong> : fixation du groupe extérieur sur un support mural, au sol sur des plots, ou en toiture selon la configuration. Respect des distances minimales de dégagement (50 cm sur tous les côtés).</li>
  <li><strong>Étape 4 — Raccordement frigorifique</strong> : passage des tuyaux de fluide frigorigène entre les deux unités, connexion et mise sous vide du circuit pour éliminer l'humidité et l'air résiduel avant chargement en fluide.</li>
  <li><strong>Étape 5 — Raccordement électrique</strong> : connexion au circuit électrique dédié (220V). Si aucun circuit n'est disponible, création d'une nouvelle ligne depuis le tableau électrique.</li>
  <li><strong>Étape 6 — Mise en service et réglage</strong> : chargement en fluide frigorigène, vérification des pressions, test en mode froid et chaud (si réversible), réglage des paramètres, remise des notices et attestation d'installation.</li>
</ul>

<h2>Les points de vigilance</h2>
<ul class="gm-checklist">
  <li><strong>Habilitation fluide frigorigène</strong> : la manipulation des fluides frigorigènes (R32, R410A) est réglementée. Seul un technicien habilité peut intervenir. Vérifiez cet aspect avant tout prestataire.</li>
  <li><strong>Choix d'emplacement de l'unité intérieure</strong> : au-dessus d'une porte ou d'une fenêtre (pour une meilleure diffusion de l'air), pas en face directe d'une fenêtre ensoleillée.</li>
  <li><strong>Drainage des condensats</strong> : l'unité intérieure produit de l'eau de condensation. Elle doit être évacuée correctement (raccordement au réseau d'eaux usées ou drain vers l'extérieur).</li>
  <li><strong>Distance entre les unités</strong> : chaque fabricant définit une longueur maximale de liaison. Au-delà, les performances chutent. À vérifier lors de la visite préalable.</li>
</ul>

<blockquote class="gm-pullquote">
  "Une installation bâclée — mauvaise mise sous vide, circuit non étanche — se traduit par une perte de fluide après quelques mois et une panne prématurée. C'est toujours moins cher de bien faire du premier coup."
</blockquote>

<h2>Après l'installation</h2>
<p>À la fin de l'intervention, vous recevez une attestation d'installation et un rapport de mise en service avec les valeurs mesurées (pressions, températures). Conservez ces documents : ils sont utiles pour la garantie et pour les entretiens futurs.</p>
<p>Pour planifier l'entretien de votre installation : <a href="/blog/entretien-climatisation-obligatoire">Entretien de votre climatisation : ce que la loi impose</a>. Pour connaître les prix d'une installation : <a href="/blog/prix-climatisation-split">Prix d'une climatisation split : la fourchette honnête</a>. Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, réglementation F-Gas (règlement UE 517/2014), guide d'installation fabricants.</em></p>
`,
  },
  /* Silo 4 — Entretien */
  {
    slug: "entretien-climatisation-obligatoire",
    title: "Entretien de votre climatisation : ce que la loi impose",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "entretien-climatisation-obligatoire.jpg",
    imgDir: "blog",
    imgFocus: "82% center",
    excerpt:
      "L'entretien d'une climatisation est recommandé annuellement et parfois obligatoire selon la réglementation F-Gas. Voici ce que la loi impose, ce que comprend une visite d'entretien et pourquoi le négliger coûte plus cher que de le faire.",
    body: `

<p>La climatisation a la réputation d'un équipement simple qui s'entretient tout seul. C'est faux. Un filtre encrassé peut faire chuter l'efficacité de 15 %, un circuit mal étanche perd du fluide silencieusement. Et dans certains cas, l'entretien n'est pas juste une bonne pratique : c'est une obligation légale.</p>

<h2>Ce que la réglementation impose</h2>
<p><strong>Contrôle d'étanchéité des fluides frigorigènes (réglementation F-Gas)</strong> : si votre climatisation contient des fluides frigorigènes fluorés en quantité supérieure au seuil réglementaire (exprimé en tonnes équivalent CO₂), un contrôle d'étanchéité périodique est obligatoire. La fréquence dépend de la quantité de fluide. Cette réglementation concerne une majorité d'installations résidentielles utilisant le R410A (GWP élevé).</p>
<p>Les nouvelles climatisations au R32 (GWP plus faible) sont souvent sous les seuils, mais il faut vérifier au cas par cas. Votre installateur peut vous indiquer si votre appareil est concerné par cette obligation.</p>
<p>Pour les détails officiels : <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>.</p>

<h2>Ce que comprend un entretien annuel</h2>
<ul class="gm-checklist">
  <li>Nettoyage des filtres de l'unité intérieure.</li>
  <li>Nettoyage de l'échangeur de l'unité intérieure (évaporateur) et de l'unité extérieure (condenseur).</li>
  <li>Vérification du drainage des condensats (absence d'obstruction).</li>
  <li>Contrôle de la pression du fluide frigorigène.</li>
  <li>Vérification du bon fonctionnement en mode froid et chaud (si réversible).</li>
  <li>Contrôle des connexions électriques.</li>
  <li>Remise d'un rapport d'intervention.</li>
</ul>

<h2>Ce que vous pouvez faire vous-même</h2>
<ul class="gm-checklist">
  <li>Nettoyer ou remplacer les filtres de l'unité intérieure tous les 2 à 3 mois en saison (selon le modèle).</li>
  <li>Vérifier que l'unité extérieure n'est pas obstruée (végétation, feuilles).</li>
  <li>Ne pas fermer les lames de l'unité intérieure lors de l'arrêt : laissez-les sécher pour éviter les moisissures.</li>
  <li>Signaler tout bruit inhabituel ou baisse de performance à votre installateur sans attendre.</li>
</ul>

<blockquote class="gm-pullquote">
  "Un filtre propre, un échangeur propre : c'est 10 à 15 % de consommation électrique en moins et une durée de vie de l'appareil prolongée. C'est le geste le plus rentable que vous pouvez faire."
</blockquote>

<h2>Conséquences d'un manque d'entretien</h2>
<ul class="gm-checklist">
  <li>Baisse de l'EER et du SEER : vous consommez plus pour le même confort.</li>
  <li>Risque de développement de moisissures dans l'unité intérieure (mauvaise qualité d'air intérieur).</li>
  <li>Usure prématurée du compresseur.</li>
  <li>Perte éventuelle de la garantie constructeur.</li>
</ul>
<p>Pour savoir combien de temps peut durer votre climatisation : <a href="/blog/duree-de-vie-climatisation">Durée de vie d'une climatisation : combien d'années espérer</a>. En cas de panne : <a href="/blog/pannes-climatisation-solutions">Les pannes courantes de climatisation et leurs solutions</a>. Pour planifier un entretien : <a href="/contact"><strong>contactez Groupe Merlin</strong></a>.</p>
<p><em>Sources : réglementation F-Gas (règlement UE 517/2014), <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>, recommandations fabricants.</em></p>
`,
  },
  {
    slug: "duree-de-vie-climatisation",
    title: "Durée de vie d'une climatisation : combien d'années espérer",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "duree-de-vie-climatisation.jpg",
    imgDir: "blog",
    excerpt:
      "Une climatisation bien entretenue dure entre 10 et 15 ans. Voici ce qui détermine cette longévité, les signes qui montrent que votre appareil vieillit et à quel moment anticiper le remplacement.",
    body: `

<p>Quand on investit entre 6 000 € et 9 000 € dans une climatisation réversible, on veut savoir combien de temps elle va durer. La réponse dépend de deux facteurs principaux : la qualité de l'installation initiale et l'entretien régulier. Un appareil bien installé et entretenu chaque année peut facilement dépasser 12 à 15 ans. Un appareil négligé ou mal dimensionné peut tomber en panne bien avant.</p>

<h2>La durée de vie moyenne : 10 à 15 ans</h2>
<p>La durée de vie généralement citée par les fabricants et l'<a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a> pour les climatisations résidentielles bien entretenues est de 10 à 15 ans. C'est une fourchette honnête qui tient compte de l'ensemble du système : compresseur, échangeurs, circuit électronique et régulation.</p>
<p>Le compresseur est la pièce maîtresse. C'est lui qui sollicité par chaque cycle de fonctionnement, et dont le vieillissement détermine souvent la fin de vie de l'installation. Son remplacement coûte entre 800 € et 1 500 € selon les modèles, soit 15 à 20 % du prix d'un appareil neuf.</p>

<h2>Les facteurs qui allongent ou raccourcissent la longévité</h2>
<table class="gm-compare">
  <thead><tr><th>Facteur</th><th>Impact positif</th><th>Impact négatif</th></tr></thead>
  <tbody>
    <tr><td>Dimensionnement</td><td>Puissance adaptée à la surface</td><td>Sous ou surdimensionné → cycles courts fréquents</td></tr>
    <tr><td>Entretien</td><td>Filtres propres, visite annuelle</td><td>Aucun entretien → compresseur dégradé</td></tr>
    <tr><td>Utilisation</td><td>Fonctionnement continu sur plage horaire</td><td>Arrêts/redémarrages fréquents</td></tr>
    <tr><td>Installation</td><td>Technicien RGE habilité, mise sous vide correcte</td><td>Installation bâclée, circuit non étanche</td></tr>
    <tr><td>Exposition</td><td>Unité extérieure à l'ombre, bien ventilée</td><td>Unité exposée plein sud, mal ventilée</td></tr>
  </tbody>
</table>

<h2>Les signes que votre climatisation vieillit</h2>
<ul class="gm-checklist">
  <li>La pièce met plus longtemps à atteindre la consigne de température.</li>
  <li>La consommation électrique a augmenté sans changement d'usage.</li>
  <li>Des bruits inhabituels sont apparus (vibrations, sifflements, claquements).</li>
  <li>Des codes erreur s'affichent régulièrement sur la télécommande.</li>
  <li>Des fuites d'eau apparaissent en dessous de l'unité intérieure (condensats mal évacués).</li>
  <li>L'appareil dépasse 10-12 ans et les interventions de maintenance se multiplient.</li>
</ul>

<blockquote class="gm-pullquote">
  "Un appareil de 12 ans qui commence à chauffer correctement deux heures après avoir été allumé, c'est souvent le signe que le remplacement est plus rentable que la réparation."
</blockquote>

<h2>Anticiper le remplacement au bon moment</h2>
<p>La règle empirique : si le coût de réparation dépasse 30 % du prix d'un appareil neuf équivalent, le remplacement est en général plus judicieux. Vous bénéficiez des progrès techniques (SEER bien supérieur aux appareils d'il y a 10 ans), des nouvelles garanties constructeur et des conditions d'installation actuelles.</p>
<p>Pour planifier votre entretien et préserver la longévité de votre installation : <a href="/blog/entretien-climatisation-obligatoire">Entretien de votre climatisation : ce que la loi impose</a>. En cas de doute sur l'état de votre appareil, <a href="/contact"><strong>demandez un diagnostic à Groupe Merlin</strong></a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, données fabricants (Daikin, Mitsubishi Electric, Atlantic).</em></p>
`,
  },
  /* Silo 5 — Pannes */
  {
    slug: "pannes-climatisation-solutions",
    title: "Les pannes courantes de climatisation et leurs solutions",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pannes-climatisation-solutions.jpg",
    imgDir: "blog",
    excerpt:
      "Climatisation qui ne refroidit plus, code erreur, goûtelettes d'eau, bruit inhabituel : les 5 pannes les plus fréquentes et ce que vous pouvez vérifier avant d'appeler un technicien.",
    body: `

<p>Une climatisation est un appareil électromécanique soumis à des contraintes saisonnières : arrêt pendant 8 mois, redémarrage à pleine charge au cœur de l'été. La plupart des pannes ont des causes simples et prévisibles. Savoir les reconnaître peut vous faire économiser une intervention inutile.</p>

<h2>Les 5 pannes les plus fréquentes</h2>
<table class="gm-compare">
  <thead>
    <tr><th>Panne observée</th><th>Cause probable</th><th>Action recommandée</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Ne refroidit plus ou refroidit insuffisamment</td>
      <td>Filtre encrassé, fuite de fluide frigorigène, compresseur défaillant</td>
      <td>Nettoyer le filtre. Si persistant après nettoyage : appeler un technicien</td>
    </tr>
    <tr>
      <td>Eau qui coule de l'unité intérieure</td>
      <td>Condensat mal évacué, drain obstrué, niveau de fluide bas provoquant un givrage de l'évaporateur</td>
      <td>Vérifier le tuyau de drainage. Si givrage visible sur l'échangeur : arrêter l'appareil et appeler</td>
    </tr>
    <tr>
      <td>Bruit inhabituel (vibration, sifflement, claquement)</td>
      <td>Corps étranger dans l'unité extérieure, compresseur vieillissant, fixations desserrées</td>
      <td>Vérifier l'absence de corps étranger. Si bruit interne persistant : intervention nécessaire</td>
    </tr>
    <tr>
      <td>Code erreur affiché sur la télécommande ou l'unité</td>
      <td>Capteur défaillant, problème de communication entre unités, surchauffe</td>
      <td>Relever le code, couper l'appareil 5 min. Si code revient : appeler avec le code en main</td>
    </tr>
    <tr>
      <td>Télécommande qui ne répond plus</td>
      <td>Piles usées, capteur infrarouge obstrué, panne télécommande</td>
      <td>Remplacer les piles, nettoyer le récepteur. Si inefficace : télécommande à remplacer</td>
    </tr>
  </tbody>
</table>

<h2>Ce que vous pouvez vérifier avant d'appeler</h2>
<ul class="gm-checklist">
  <li>Le disjoncteur dédié à la climatisation n'a pas sauté.</li>
  <li>La télécommande est bien en mode froid (et non en mode chauffage ou ventilation seule).</li>
  <li>La consigne est inférieure à la température ambiante (une consigne à 24 °C dans une pièce à 23 °C ne déclenchera pas le refroidissement).</li>
  <li>Le filtre de l'unité intérieure est propre (un filtre encrassé réduit fortement le débit d'air).</li>
  <li>L'unité extérieure n'est pas obstruée par de la végétation ou des feuilles.</li>
</ul>

<blockquote class="gm-pullquote">
  "90 % des appels 'urgence climatisation' que nous recevons en début d'été se règlent par une vérification simple : un filtre bouché, un disjoncteur sauté ou une télécommande en mauvais mode."
</blockquote>

<h2>Quand appeler sans attendre</h2>
<ul class="gm-checklist">
  <li>Odeur de brûlé depuis l'unité intérieure ou extérieure.</li>
  <li>Givrage visible sur l'échangeur de l'unité intérieure (glace ou givre).</li>
  <li>Bruit métallique fort dans le compresseur.</li>
  <li>Code erreur qui revient après réinitialisation.</li>
  <li>Fuite importante d'eau depuis l'unité intérieure.</li>
</ul>
<p>Si votre climatisation ne refroidit plus du tout : <a href="/blog/climatisation-ne-refroidit-plus">Climatisation qui ne refroidit plus : diagnostic et dépannage</a>. Pour anticiper les pannes : <a href="/blog/entretien-climatisation-obligatoire">Entretien de votre climatisation</a>.</p>

<h2>Groupe Merlin : 48 heures ouvrées dans la Nièvre et l'Yonne</h2>
<p>Nos techniciens interviennent sur tout type de climatisation, y compris les marques que nous n'avons pas installées. Si vous êtes en panne en plein juillet, <a href="/contact"><strong>contactez-nous</strong></a>. Précisez le code erreur affiché si vous en avez un.</p>
<p><em>Sources : retours techniciens Groupe Merlin, documentation fabricants, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>.</em></p>
`,
  },
  {
    slug: "climatisation-ne-refroidit-plus",
    title: "Climatisation qui ne refroidit plus : diagnostic et dépannage",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "climatisation-ne-refroidit-plus.jpg",
    imgDir: "blog",
    imgFocus: "45% center",
    excerpt:
      "Votre climatisation tourne mais la pièce ne refroidit plus ? Voici comment diagnostiquer la cause étape par étape, ce que vous pouvez vérifier vous-même et quand appeler un technicien.",
    body: `

<p>C'est la panne la plus fréquente en plein été : la climatisation tourne, vous entendez le ventilateur, mais la pièce reste chaude. Ou elle refroidit nettement moins bien qu'avant. Avant d'appeler en urgence, quelques vérifications de base permettent de résoudre le problème dans 30 % des cas sans intervention technique.</p>

<h2>Vérification 1 : la télécommande et la consigne</h2>
<ul class="gm-checklist">
  <li>L'appareil est bien en mode <strong>froid</strong> (icône flocon ou "COOL"), et non en mode ventilation seule, chauffage ou automatique.</li>
  <li>La consigne de température est <strong>inférieure</strong> à la température ambiante de la pièce. Une consigne à 24 °C dans une pièce à 23 °C : aucun refroidissement.</li>
  <li>La vitesse du ventilateur n'est pas réglée sur "Auto" seul sans consigne de température : vérifiez que le mode froid est bien actif.</li>
</ul>

<h2>Vérification 2 : le filtre de l'unité intérieure</h2>
<p>C'est la cause la plus fréquente de perte de performance. Un filtre encrassé réduit le débit d'air et donc la quantité de frigories soufflées dans la pièce. Résultat : la clim tourne mais refroidit peu ou mal.</p>
<p>Ouvrez la trappe frontale de l'unité intérieure, retirez le filtre et examinez-le. S'il est recouvert de poussière, nettoyez-le à l'eau tiède et laissez-le sécher avant de le remettre en place. Cette opération seule résout souvent le problème.</p>

<h2>Vérification 3 : l'unité extérieure</h2>
<ul class="gm-checklist">
  <li>L'unité extérieure est-elle bien alimentée électriquement (pas de disjoncteur sauté) ?</li>
  <li>Le ventilateur de l'unité extérieure tourne-t-il ? Si l'unité extérieure est silencieuse, le compresseur ne démarre pas.</li>
  <li>L'unité extérieure est-elle obstruée par de la végétation, des feuilles ou un objet ? Dégagez au moins 50 cm sur tous les côtés.</li>
  <li>L'unité extérieure est-elle exposée en plein soleil à 40 °C ? Cela réduit les performances (l'échangeur refoule sa chaleur dans un air déjà brûlant).</li>
</ul>

<h2>Les causes qui nécessitent un technicien</h2>
<table class="gm-compare">
  <thead><tr><th>Symptôme</th><th>Cause probable</th><th>Solution</th></tr></thead>
  <tbody>
    <tr><td>Ventilateur intérieur tourne mais air pas froid</td><td>Fuite de fluide frigorigène (pression basse), compresseur défaillant</td><td>Intervention obligatoire : contrôle d'étanchéité + recharge de fluide</td></tr>
    <tr><td>Givrage visible sur l'échangeur intérieur</td><td>Manque de fluide, filtre très encrassé, ventilateur interne défaillant</td><td>Arrêter l'appareil immédiatement, laisser décongeler, appeler le technicien</td></tr>
    <tr><td>Code erreur sur l'affichage</td><td>Capteur, carte électronique, surchauffe compresseur</td><td>Couper 5 min, redémarrer. Si code revient : appeler avec le code</td></tr>
    <tr><td>Unité extérieure ne démarre pas</td><td>Problème électrique, protection thermique déclenchée, compresseur bloqué</td><td>Vérifier le disjoncteur. Si OK : appeler le technicien</td></tr>
  </tbody>
</table>

<blockquote class="gm-pullquote">
  "Un givrage de l'échangeur intérieur, ça ressemble à une clim qui 'refroidit trop'. En réalité, c'est un signal d'alarme : quelque chose ne fonctionne pas. Arrêtez l'appareil et appelez."
</blockquote>

<h2>Groupe Merlin : 48 heures ouvrées même en juillet</h2>
<p>La panne de clim en plein été n'attend pas. Nos agences de Clamecy et Corbigny couvrent la Nièvre et l'Yonne avec un délai d'intervention garanti de <strong>48 heures ouvrées</strong>. Pour toutes les pannes courantes : <a href="/blog/pannes-climatisation-solutions">Les pannes courantes de climatisation et leurs solutions</a>. Pour prévenir les pannes à venir : <a href="/blog/entretien-climatisation-obligatoire">Entretien de votre climatisation</a>.</p>
<p>En cas d'urgence, <a href="/contact"><strong>contactez-nous directement</strong></a>. Précisez le code erreur affiché si vous en avez un : cela nous permet de préparer l'intervention.</p>
<p><em>Sources : retours techniciens Groupe Merlin, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>, documentation fabricants.</em></p>
`,
  },
  /* Silo 6 — Local */
  {
    slug: "installateur-climatisation-nievre",
    title: "Installateur de climatisation dans la Nièvre : comment bien choisir",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installateur-climatisation-nievre.jpg",
    imgDir: "blog",
    imgFocus: "90% center",
    excerpt:
      "Vous cherchez un installateur de climatisation dans la Nièvre (58) ? Voici les critères pour choisir un professionnel fiable, certifié et réactif, et pourquoi la proximité compte autant que la marque.",
    body: `

<p>Choisir un installateur de climatisation dans la Nièvre, c'est choisir un partenaire pour les 10 à 15 prochaines années. L'installation elle-même prend une journée. Mais l'entretien, le SAV et les éventuels dépannages dureront toute la vie de l'équipement. La proximité géographique n'est pas un détail.</p>

<h2>Les 4 critères pour choisir le bon installateur</h2>
<ul class="gm-checklist">
  <li><strong>L'habilitation fluide frigorigène</strong> : la manipulation des fluides frigorigènes est réglementée. Votre installateur doit être habilité (certificat délivré par un organisme agréé). C'est une obligation légale, pas un plus.</li>
  <li><strong>La certification RGE</strong> : QualiPAC ou Eco Artisan pour les climatisations réversibles. Indispensable si vous souhaitez bénéficier de primes CEE.</li>
  <li><strong>La visite préalable systématique</strong> : un bon installateur ne pose pas un devis à distance. Il vient chez vous, évalue le logement, les contraintes et vous propose la solution adaptée — pas la plus vendue.</li>
  <li><strong>Le SAV local</strong> : peut-il intervenir chez vous en moins de 48 heures en cas de panne ? En juillet ou en août, c'est la question qui compte vraiment.</li>
</ul>

<h2>Les spécificités de la Nièvre</h2>
<p>La Nièvre (58) présente des caractéristiques particulières que votre installateur doit connaître :</p>
<ul class="gm-checklist">
  <li><strong>Patrimoine bâti ancien</strong> : maisons en pierre, murs épais, configuration souvent atypique. Le percement pour la liaison frigorigène et le choix d'emplacement de l'unité extérieure nécessitent de l'expérience sur ce type de construction.</li>
  <li><strong>Étés chauds, hivers froids</strong> : la climatisation réversible est utile les deux saisons. Un installateur local connaît les conditions climatiques de Clamecy, Decize, Cosne-sur-Loire ou Nevers et dimensionne en conséquence.</li>
  <li><strong>Réseau de gaz peu développé</strong> : beaucoup de logements nivernais fonctionnent encore au fioul ou au bois. La clim réversible peut jouer un rôle de chauffage d'appoint efficace dans ce contexte.</li>
</ul>

<h2>Ce que propose Groupe Merlin dans la Nièvre</h2>
<p>Notre agence de Clamecy couvre l'ensemble du département de la Nièvre. Nous sommes certifiés <strong>RGE QualiPAC</strong> et <strong>RGE Eco Artisan</strong>, parmi cinq certifications RGE. Nos techniciens installent des climatisations <strong>Daikin, Mitsubishi Electric et Atlantic</strong> et assurent les entretiens annuels et les dépannages.</p>
<p>Délai d'intervention : <strong>48 heures ouvrées</strong>. Visite préalable gratuite. Devis sans engagement.</p>

<blockquote class="gm-pullquote">
  "Dans la Nièvre, les artisans locaux vous connaissent, connaissent votre logement et interviennent rapidement. Ce n'est pas du chauvinisme : c'est du pragmatisme."
</blockquote>

<h2>Comment vérifier les certifications d'un installateur</h2>
<p>Pour vérifier qu'un professionnel est bien certifié RGE, rendez-vous sur <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a> (annuaire des professionnels RGE). Pour l'habilitation fluide, demandez l'attestation à votre installateur.</p>
<p>Pour tout savoir sur la climatisation dans la Nièvre : <a href="/blog/climatisation-guide-complet">guide complet climatisation 2026</a>. Pour les prix : <a href="/blog/prix-climatisation-split">Prix d'une climatisation split</a>. Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>, réglementation F-Gas, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>.</em></p>
`,
  },
  {
    slug: "installateur-climatisation-yonne",
    title: "Installateur de climatisation dans l'Yonne : comment bien choisir",
    category: "Conseils",
    cocon: "climatisation",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installateur-climatisation-yonne.jpg",
    imgDir: "blog",
    excerpt:
      "Vous cherchez un installateur de climatisation dans l'Yonne (89) ? Voici les critères pour choisir un professionnel certifié et réactif dans un département aux étés de plus en plus chauds.",
    body: `

<p>L'Yonne (89) connaît des étés qui se réchauffent d'année en année. Les communes d'Auxerre, Sens, Avallon ou Joigny ont enregistré des températures records lors des canicules récentes. Le besoin de rafraîchissement résidentiel n'est plus anecdotique dans le département.</p>
<p>Choisir le bon installateur de climatisation dans l'Yonne, c'est s'assurer d'une installation correcte, d'un SAV réactif et d'un partenaire qui connaît votre région.</p>

<h2>Les critères de sélection dans l'Yonne</h2>
<ul class="gm-checklist">
  <li><strong>Habilitation fluide frigorigène</strong> : obligation légale pour tout technicien qui manipule un fluide frigorigène. Vérifiez l'attestation avant tout engagement.</li>
  <li><strong>Certification RGE</strong> : QualiPAC ou Eco Artisan pour la climatisation réversible. Indispensable pour les primes CEE et pour la qualité de l'installation.</li>
  <li><strong>Visite préalable</strong> : un devis sérieux ne s'établit pas à distance. L'installateur doit venir chez vous avant tout engagement.</li>
  <li><strong>Réactivité du SAV</strong> : un dépannage en plein mois d'août doit pouvoir se faire dans les 48 heures. Demandez explicitement le délai d'intervention avant de signer.</li>
</ul>

<h2>Particularités de l'Yonne à connaître</h2>
<ul class="gm-checklist">
  <li><strong>Patrimoine bâti varié</strong> : des maisons bourguignonnes en pierre du Morvan aux constructions plus récentes de la banlieue auxerroise. Chaque type de construction appelle des contraintes d'installation différentes.</li>
  <li><strong>Vallées et expositions multiples</strong> : la vallée de l'Yonne et du Serein crée des microclimats. Un installateur qui connaît le terrain dimensionne plus justement.</li>
  <li><strong>Réseau de chaleur limité en zone rurale</strong> : la climatisation réversible peut jouer un rôle de chauffage d'appoint dans les zones non raccordées au gaz.</li>
</ul>

<h2>Groupe Merlin dans l'Yonne : agence de Corbigny</h2>
<p>Depuis le 1er juin 2026, Groupe Merlin est présent dans l'Yonne avec notre agence de Corbigny (22 Grande Rue, 58800 Corbigny). Nos techniciens couvrent le secteur de l'Yonne pour les installations de climatisation, les entretiens annuels et les dépannages.</p>
<p>Certifiés <strong>RGE QualiPAC</strong> et <strong>RGE Eco Artisan</strong> (parmi cinq certifications RGE), nous installons des climatisations <strong>Daikin, Mitsubishi Electric et Atlantic</strong>. Délai d'intervention garanti : <strong>48 heures ouvrées</strong>.</p>

<blockquote class="gm-pullquote">
  "Avec notre agence de Corbigny ouverte en 2026, nous couvrons désormais l'Yonne avec le même niveau de service qu'en Nièvre. Même délais, mêmes équipes, mêmes engagements."
</blockquote>

<h2>Pour aller plus loin</h2>
<p>Tout comprendre sur la climatisation avant de décider : <a href="/blog/climatisation-guide-complet">guide complet climatisation 2026</a>. Choisir le bon système : <a href="/blog/quelle-climatisation-choisir">Quelle climatisation choisir pour votre logement</a>. Pour les prix détaillés : <a href="/blog/prix-climatisation-split">Prix d'une climatisation split</a>.</p>
<p>Pour démarrer votre projet dans l'Yonne, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Précisez votre commune pour que nous vous affections le technicien le plus proche.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>.</em></p>
`,
  },

  // ─── COCON : CHAUDIÈRES & POÊLE À GRANULÉS ──────────────────────────────────

  {
    slug: "chaudieres-granules-guide-complet",
    title: `Chaudière à granulés dans la Nièvre et l'Yonne : le guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "chaudieres-granules-guide-complet.jpg",
    imgDir: "blog",
    excerpt:
      `Chaudière à granulés dans la Nièvre et l'Yonne : fonctionnement, prix, aides d'État ${CONTENT_YEAR}, marques et conseils pour choisir votre installateur certifié RGE Qualibois.`,
    body: `
<p>Dans la Nièvre et l'Yonne, des centaines de maisons ne sont pas raccordées au gaz naturel. Pendant des décennies, le fioul et le propane ont été les solutions de chauffage central pour les maisons non raccordées au gaz. Aujourd'hui, les équipements à granulés de bois changent la donne. Renouvelables, performants et éligibles aux aides d'État, la chaudière à granulés et le poêle à granulés s'imposent comme les deux solutions de référence pour les maisons rurales des deux départements.</p>
<p>Ce guide vous donne toutes les clés pour décider quelle solution correspond à votre logement.</p>

<nav class="gm-sommaire" aria-label="Sommaire de l'article">
  <p class="gm-sommaire__titre">Sommaire</p>
  <ol class="gm-sommaire__liste">
    <li><a href="#compare">Chaudière à granulés ou poêle à granulés : deux solutions très différentes</a></li>
    <li><a href="#fonctionnement">Comment fonctionne une chaudière à granulés</a></li>
    <li><a href="#aides">Les aides disponibles en ${CONTENT_YEAR}</a></li>
    <li><a href="#prix">Prix d'une chaudière à granulés dans la Nièvre</a></li>
    <li><a href="#marques">Les marques que nous installons</a></li>
    <li><a href="#entretien">Entretien : obligations légales</a></li>
    <li><a href="#groupe-merlin">Le Groupe Merlin dans la Nièvre et l'Yonne</a></li>
  </ol>
</nav>

<h2 id="compare">Chaudière à granulés ou poêle à granulés : deux solutions très différentes</h2>
<p>Ces deux équipements utilisent le même combustible, mais leurs usages n'ont rien à voir.</p>

<table class="gm-compare">
<thead><tr><th></th><th>Chaudière à granulés</th><th>Poêle à granulés</th></tr></thead>
<tbody>
<tr><td>Rôle</td><td>Chauffage de toute la maison + eau chaude sanitaire</td><td>Chauffage d'une pièce ou appoint</td></tr>
<tr><td>Intégration</td><td>Remplace complètement votre ancienne chaudière</td><td>Se pose dans une pièce, indépendant</td></tr>
<tr><td>Prix installé</td><td>15 000 – 25 000 €</td><td>3 000 – 7 500 €</td></tr>
<tr><td>Aides disponibles</td><td>MaPrimeRénov', CEE, éco-PTZ cumulables</td><td>MaPrimeRénov' (sous conditions), CEE</td></tr>
<tr><td>Pour qui ?</td><td>Maison avec circuit hydraulique (radiateurs, plancher)</td><td>Appartement, maison en appoint ou sans circuit</td></tr>
</tbody>
</table>

<p>Pour aller plus loin dans la comparaison de ces deux solutions, consultez notre article : <a href="/blog/chaudiere-poele-granules-rentabilite">Chaudière à granulés ou poêle à granulés : laquelle choisir ?</a></p>

<h2 id="fonctionnement">Comment fonctionne une chaudière à granulés</h2>
<p>Une chaudière à granulés brûle des pellets de bois compressés pour produire de la chaleur. Celle-ci est transférée à un circuit d'eau chaude qui alimente vos radiateurs ou votre plancher chauffant, ainsi que votre ballon d'eau chaude sanitaire.</p>
<p>Les granulés sont stockés dans un silo (intégré ou externe) et acheminés automatiquement vers le brûleur. C'est ce fonctionnement automatisé qui distingue la chaudière à granulés d'un poêle à bûches : vous ne rechargez le silo que quelques fois par an.</p>

<h2 id="aides">Les aides disponibles en ${CONTENT_YEAR}</h2>
<p>La chaudière à granulés est l'un des systèmes de chauffage les mieux aidés en France. MaPrimeRénov', CEE et éco-PTZ se cumulent, et le montant de votre aide dépend principalement de vos revenus.</p>
<ul class="gm-checklist">
  <li><strong>MaPrimeRénov' Qualibois</strong> : aide de l'État selon vos revenus, conditionnée à un installateur certifié RGE Qualibois (ce que nous sommes). Les montants exacts sont disponibles sur <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>.</li>
  <li><strong>Prime CEE</strong> : versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'.</li>
  <li><strong>TVA à 5,5 %</strong> : sur la fourniture et la pose d'une chaudière biomasse (au lieu de 20 %).</li>
  <li><strong>Éco-PTZ</strong> : prêt à taux zéro pour financer le reste à charge, sans condition de revenus.</li>
</ul>
<p>Détail complet des montants et conditions : <a href="/blog/aides-chaudiere-granules">Aides pour une chaudière à granulés en ${CONTENT_YEAR}</a>.</p>

<h3 id="prix">Prix d'une chaudière à granulés dans la Nièvre</h3>
<p>Le coût d'une installation se situe entre 15 000 et 25 000 € selon la puissance nécessaire, le type de silo et les finitions. Après déduction des aides d'État, le reste à charge peut être significativement réduit pour les ménages modestes.</p>

<table class="gm-compare">
<thead><tr><th>Surface chauffée</th><th>Puissance recommandée</th><th>Prix installé (avec silo)</th></tr></thead>
<tbody>
<tr><td>Jusqu'à 100 m²</td><td>10-15 kW</td><td>15 000 – 18 000 €</td></tr>
<tr><td>100 à 150 m²</td><td>15-20 kW</td><td>17 000 – 21 000 €</td></tr>
<tr><td>150 à 250 m²</td><td>20-35 kW</td><td>20 000 – 25 000 €</td></tr>
</tbody>
</table>

<h2 id="marques">Les marques que nous installons</h2>
<p>Le Groupe Merlin installe trois marques reconnues pour leur fiabilité et leurs performances sur le marché de la biomasse :</p>
<ul class="gm-checklist">
  <li><strong>Froling</strong> : référence autrichienne de la chaudière biomasse, gamme T4 et P4, rendements parmi les plus élevés du marché.</li>
  <li><strong>Viessmann</strong> : groupe allemand, gamme Vitoligno reconnue pour sa robustesse et son SAV.</li>
  <li><strong>Frisquet</strong> : marque française, qualité de fabrication élevée et réseau SAV réactif.</li>
</ul>
<p>Pour découvrir un comparatif détaillé, consultez notre article : <a href="/blog/quelle-marque-chaudiere-granules-choisir">Quelle marque de chaudière à granulés choisir en ${CONTENT_YEAR}</a>.</p>

<h2 id="entretien">Entretien : obligations légales</h2>
<p>Une chaudière à granulés doit faire l'objet d'un <strong>entretien annuel obligatoire</strong> par un professionnel qualifié, et d'un <strong>ramonage deux fois par an</strong> (dont une fois pendant la période de chauffe). Ces obligations légales protègent votre équipement contre l'usure prématurée, maintiennent votre rendement et garantissent la sécurité de votre logement contre les risques d'incendie et d'intoxication au monoxyde de carbone.</p>
<p>Tout savoir sur les obligations : <a href="/blog/entretien-chaudiere-granules-obligatoire">Entretien chaudière à granulés : ce que la loi impose</a>.</p>

<div class="gm-stat-grid gm-stat-grid--losange">
  <div class="gm-stat"><span class="gm-stat__value">≥ 87 %</span><span class="gm-stat__label">rendement minimum exigé pour accéder aux aides d'État (label Flamme Verte)</span></div>
  <div class="gm-stat"><span class="gm-stat__value">CO₂ neutre</span><span class="gm-stat__label">le granulé de bois est une énergie renouvelable à bilan carbone quasi nul en cycle de vie</span></div>
  <div class="gm-stat"><span class="gm-stat__value">15-25 ans</span><span class="gm-stat__label">durée de vie d'une chaudière à granulés avec entretien annuel régulier</span></div>
  <div class="gm-stat"><span class="gm-stat__value">RGE Qualibois</span><span class="gm-stat__label">certification exigée pour accéder aux aides d'État. Groupe Merlin est certifié.</span></div>
</div>

<h2 id="groupe-merlin">Le Groupe Merlin dans la Nièvre et l'Yonne</h2>
<p>Nos équipes interviennent sur l'ensemble de la Nièvre (58) et de l'Yonne (89) pour l'installation, l'entretien et le dépannage de chaudières à granulés. Nous sommes certifiés <strong>RGE Qualibois</strong> et <strong>RGE Eco Artisan</strong>, parmi cinq certifications RGE.</p>
<p>Nous prenons en charge la création et le suivi de votre dossier MaPrimeRénov' de A à Z. Vous n'avez pas à vous occuper des démarches. Voici les étapes concrètes :</p>

<div class="gm-schema">
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des 5 étapes pour un projet chaudière à granulés avec Groupe Merlin">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <circle cx="70" cy="80" r="50" fill="#FAC864"/>
    <text x="70" y="75" font-weight="700" font-size="13">1</text>
    <text x="70" y="93" font-size="11">Visite</text>
    <text x="70" y="109" font-size="11">gratuite</text>
    <line x1="122" y1="80" x2="148" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-gran)"/>
    <circle cx="200" cy="80" r="50" fill="#FAC864"/>
    <text x="200" y="75" font-weight="700" font-size="13">2</text>
    <text x="200" y="93" font-size="11">Dossier</text>
    <text x="200" y="109" font-size="11">aides</text>
    <line x1="252" y1="80" x2="278" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-gran)"/>
    <circle cx="330" cy="80" r="50" fill="#EAE1CD"/>
    <text x="330" y="75" font-weight="700" font-size="13">3</text>
    <text x="330" y="93" font-size="11">Devis</text>
    <text x="330" y="109" font-size="11">signé</text>
    <line x1="382" y1="80" x2="408" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-gran)"/>
    <circle cx="460" cy="80" r="50" fill="#EAE1CD"/>
    <text x="460" y="75" font-weight="700" font-size="13">4</text>
    <text x="460" y="93" font-size="11">Pose</text>
    <text x="460" y="109" font-size="11">& mise en route</text>
    <line x1="512" y1="80" x2="538" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-gran)"/>
    <circle cx="590" cy="80" r="50" fill="#171723"/>
    <text x="590" y="75" fill="#FAC864" font-weight="700" font-size="13">5</text>
    <text x="590" y="93" fill="#fff" font-size="11">Versement</text>
    <text x="590" y="109" fill="#fff" font-size="11">des aides</text>
    <text x="340" y="175" font-size="12" font-style="italic" fill="#5a5a66">Le dossier MaPrimeRénov' doit être déposé avant la signature du devis — nous gérons l'intégralité des démarches.</text>
  </g>
  <defs>
    <marker id="ar-gran" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#171723"/>
    </marker>
  </defs>
</svg>
</div>

<p>Pour démarrer votre projet, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Un technicien se déplace chez vous, évalue vos besoins et vous présente les options avec les aides déduites, avant toute signature.</p>
<ul class="gm-checklist">
  <li><a href="/blog/comment-fonctionne-chaudiere-granules">Tout comprendre sur le fonctionnement d'une chaudière à granulés</a></li>
  <li><a href="/blog/prix-chaudiere-granules">Prix détaillés d'une chaudière à granulés en ${CONTENT_YEAR}</a></li>
</ul>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "comment-fonctionne-chaudiere-granules",
    title: "Comment fonctionne une chaudière à granulés ?",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "comment-fonctionne-chaudiere-granules.jpg",
    imgDir: "blog",
    excerpt:
      "Silo, brûleur, échangeur, régulation : tout comprendre sur le fonctionnement d'une chaudière à granulés de bois pour décider en connaissance de cause.",
    body: `

<p>La chaudière à granulés est souvent perçue comme complexe. En réalité, son principe de fonctionnement est simple : elle brûle du bois compressé pour produire de la chaleur, qu'elle distribue dans votre logement via votre circuit hydraulique. La sophistication tient dans l'automatisation, pas dans la mécanique.</p>

<h2>Les composants clés d'une chaudière à granulés</h2>

<div class="gm-schema">
<svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des composants d'une chaudière à granulés">
  <g font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">
    <!-- Silo -->
    <rect x="20" y="30" width="110" height="80" rx="6" fill="#EAE1CD"/>
    <text x="75" y="65" font-weight="700" font-size="13">Silo</text>
    <text x="75" y="83" font-size="10">Stockage</text>
    <text x="75" y="97" font-size="10">des granulés</text>
    <!-- Flèche silo → brûleur -->
    <line x1="130" y1="70" x2="175" y2="70" stroke="#171723" stroke-width="2" marker-end="url(#ar-sch)"/>
    <text x="152" y="62" font-size="9" fill="#5a5a66">vis sans fin</text>
    <!-- Brûleur -->
    <rect x="177" y="30" width="110" height="80" rx="6" fill="#FAC864"/>
    <text x="232" y="65" font-weight="700" font-size="13">Brûleur</text>
    <text x="232" y="83" font-size="10">Combustion</text>
    <text x="232" y="97" font-size="10">automatique</text>
    <!-- Flèche brûleur → échangeur -->
    <line x1="287" y1="70" x2="332" y2="70" stroke="#171723" stroke-width="2" marker-end="url(#ar-sch)"/>
    <text x="310" y="62" font-size="9" fill="#5a5a66">chaleur</text>
    <!-- Échangeur -->
    <rect x="334" y="30" width="110" height="80" rx="6" fill="#FAC864"/>
    <text x="389" y="65" font-weight="700" font-size="13">Échangeur</text>
    <text x="389" y="83" font-size="10">Transfert à</text>
    <text x="389" y="97" font-size="10">l'eau du circuit</text>
    <!-- Flèche échangeur → circuit -->
    <line x1="444" y1="70" x2="489" y2="70" stroke="#171723" stroke-width="2" marker-end="url(#ar-sch)"/>
    <!-- Circuit hydraulique -->
    <rect x="491" y="30" width="120" height="80" rx="6" fill="#171723"/>
    <text x="551" y="60" fill="#FAC864" font-weight="700" font-size="13">Circuit</text>
    <text x="551" y="78" fill="#fff" font-size="10">Radiateurs</text>
    <text x="551" y="94" fill="#fff" font-size="10">Plancher chauffant</text>
    <text x="551" y="108" fill="#fff" font-size="10">Eau chaude sanitaire</text>
    <!-- Régulation -->
    <rect x="200" y="160" width="250" height="60" rx="6" fill="#EAE1CD"/>
    <text x="325" y="188" font-weight="700" font-size="13">Régulation électronique</text>
    <text x="325" y="206" font-size="10">Programmation horaire, températures, alertes, Wi-Fi sur les modèles récents</text>
    <line x1="232" y1="110" x2="232" y2="158" stroke="#5a5a66" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="389" y1="110" x2="389" y2="158" stroke="#5a5a66" stroke-width="1.5" stroke-dasharray="4 3"/>
  </g>
  <defs>
    <marker id="ar-sch" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#171723"/>
    </marker>
  </defs>
</svg>
</div>

<h2>Le silo : le réservoir de combustible</h2>
<p>Le silo est le conteneur où sont stockés vos granulés. Il existe deux configurations : le silo intégré à la chaudière (capacité réduite, remplissage plus fréquent) et le silo externe (capacité de 1 à 10 tonnes, remplissage annuel possible).</p>
<p>Dans la Nièvre, où les hivers peuvent être rigoureux, nous recommandons généralement un silo d'au moins 3 tonnes pour une maison de 120-150 m². Cela permet de remplir une à deux fois par an, par livraison en vrac ou en big bag.</p>

<h2>La vis sans fin : l'alimentation automatique</h2>
<p>Les granulés sont acheminés du silo vers le brûleur par une vis sans fin motorisée. Ce mécanisme se déclenche automatiquement selon la demande de chaleur. C'est le cœur de l'automatisation : vous ne rechargez pas la chaudière manuellement chaque jour comme avec un poêle à bûches.</p>

<h2>Le brûleur : la chambre de combustion</h2>
<p>Le brûleur est l'endroit où les granulés s'enflamment et se consument. Il dispose d'un allumage électrique automatique (comme une résistance électrique) : au démarrage, la résistance chauffe et enflamme les granulés en quelques secondes. La combustion est pilotée en permanence par la régulation électronique pour maintenir le rendement optimal.</p>
<p>La qualité du brûleur détermine en grande partie le rendement de la chaudière et la fréquence de nettoyage nécessaire. Les chaudières label Flamme Verte (7 étoiles) atteignent des rendements supérieurs à 90 %, avec des émissions de particules fines très réduites.</p>

<h2>L'échangeur thermique</h2>
<p>La chaleur produite par la combustion est transférée à l'eau de votre circuit de chauffage via un échangeur thermique. L'eau chaude ainsi produite circule dans vos radiateurs, votre plancher chauffant ou votre ballon d'eau chaude sanitaire.</p>

<h2>La régulation électronique</h2>
<p>Le cerveau de la chaudière. Elle ajuste en permanence la quantité de granulés injectés, le débit d'air de combustion et la puissance de chauffe en fonction de la température demandée. Sur les modèles récents, la régulation est pilotable via une application smartphone, avec alertes en cas de panne ou de silo vide.</p>

<h2>Quel combustible utiliser ?</h2>
<p>Les granulés (ou pellets) doivent respecter la norme <strong>EN Plus A1</strong> pour garantir un bon rendement et limiter les dépôts dans le brûleur. Un granulé de mauvaise qualité encrassera plus vite la chaudière et réduira son rendement. Le prix des granulés varie selon le marché, la région et le mode de livraison (vrac ou sac).</p>
<p class="gm-pullquote">La qualité du granulé est aussi importante que la qualité de la chaudière. Un combustible certifié EN Plus A1 protège votre équipement et maintient votre rendement.</p>

<h2>Ce que vous n'avez pas à faire</h2>
<p>Par rapport à un poêle à bûches, la chaudière à granulés élimine la corvée quotidienne de chargement. Vous remplissez le silo quelques fois par an et la chaudière fait le reste : allumage, chauffe, extinction, programmation horaire. Le seul geste régulier côté utilisateur est le vidage du bac à cendres (une fois par semaine environ) et le remplissage du silo selon la saison.</p>

<p>Pour voir les chaudières que nous installons dans la Nièvre : <a href="/expertises/chaudieres-poele-granules">page expertise Chaudières & Granulés</a>. Pour démarrer votre projet : <a href="/contact"><strong>demandez votre devis gratuit</strong></a>.</p>
<p>Comparer les solutions de chauffage : <a href="/blog/chaudiere-poele-granules-rentabilite">Chaudière à granulés ou poêle à granulés : laquelle choisir ?</a></p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, norme EN Plus A1, label Flamme Verte (ADEME).</em></p>
`,
  },

  {
    slug: "quelle-marque-chaudiere-granules-choisir",
    title: `Quelle marque de chaudière à granulés choisir en ${CONTENT_YEAR} ?`,
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "quelle-marque-chaudiere-granules-choisir.jpg",
    imgDir: "blog",
    excerpt:
      "Froling, Viessmann, Frisquet : comparatif honnête des marques de chaudières à granulés installées par Groupe Merlin dans la Nièvre et l'Yonne.",
    body: `

<p>Choisir une marque de chaudière à granulés, c'est choisir un équipement pour 15 à 25 ans. La décision ne se prend pas à la légère, et le prix d'achat n'est pas le seul critère : la qualité du brûleur, la disponibilité des pièces, la réactivité du SAV et la compatibilité avec votre installation comptent tout autant.</p>
<p>Voici notre analyse honnête des trois marques que nous installons dans la Nièvre et l'Yonne.</p>

<h2>Froling : la référence européenne de la biomasse</h2>
<p>Froling est une entreprise autrichienne fondée en 1961. L'Autriche étant le pays où la chaudière à granulés a été inventée et le plus développé en Europe, Froling y occupe une position de leader. La marque exporte aujourd'hui dans toute l'Europe et ses équipements sont reconnus pour leur robustesse et leurs rendements élevés.</p>
<ul class="gm-checklist">
  <li><strong>Gamme T4</strong> : chaudière à granulés à alimentation automatique, puissances de 10 à 60 kW. Conception compacte, adaptée aux chaufferies de taille standard.</li>
  <li><strong>Gamme P4</strong> : chaudière à plaquettes ou granulés, puissances plus élevées, pour les projets importants.</li>
  <li><strong>Points forts</strong> : rendements > 90 %, technologie de combustion éprouvée, faible production de cendres.</li>
  <li><strong>Points à noter</strong> : marque moins connue du grand public que Viessmann, réseau SAV structuré via les installateurs agréés (dont Groupe Merlin).</li>
</ul>

<h2>Viessmann : la fiabilité allemande, la gamme Vitoligno</h2>
<p>Viessmann est l'un des plus grands fabricants mondiaux de systèmes de chauffage. La marque est connue en France avant tout pour ses chaudières à gaz et ses pompes à chaleur, mais sa gamme biomasse (Vitoligno) est solide et éprouvée.</p>
<ul class="gm-checklist">
  <li><strong>Vitoligno 300-H</strong> : chaudière à granulés combinée avec préparateur d'eau chaude sanitaire, puissances de 7 à 60 kW.</li>
  <li><strong>Points forts</strong> : intégration très soignée avec les autres équipements Viessmann (régulation, pompe à chaleur en appoint), interface utilisateur ergonomique, réseau SAV dense en France.</li>
  <li><strong>Points à noter</strong> : prix souvent légèrement supérieur à la concurrence, mais justifié par la qualité des finitions.</li>
</ul>

<h2>Frisquet : la marque française</h2>
<p>Frisquet est une entreprise française fondée en 1948, connue pour ses chaudières à gaz haut rendement. Elle s'est étendue au marché biomasse avec une gamme de chaudières à granulés fabriquées selon les mêmes standards de qualité.</p>
<ul class="gm-checklist">
  <li><strong>Points forts</strong> : fabrication française, réseau SAV réactif, service client disponible, bonne intégration avec les régulations Frisquet déjà en place chez certains clients.</li>
  <li><strong>Points à noter</strong> : gamme biomasse moins étendue que Froling ou Viessmann, positionnée sur des puissances moyennes (résidentiel standard).</li>
</ul>

<h2>Comparatif des trois marques</h2>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>Froling</th><th>Viessmann</th><th>Frisquet</th></tr></thead>
<tbody>
<tr><td>Origine</td><td>Autriche</td><td>Allemagne</td><td>France</td></div></td></tr>
<tr><td>Spécialité biomasse</td><td>Expertise historique</td><td>Gamme complète multi-énergie</td><td>Complémentaire gaz</td></tr>
<tr><td>Rendement</td><td>> 90 %</td><td>> 90 %</td><td>> 87 %</td></tr>
<tr><td>Label Flamme Verte</td><td>7 étoiles</td><td>7 étoiles</td><td>7 étoiles</td></tr>
<tr><td>Gamme de puissance résidentielle</td><td>10-60 kW</td><td>7-60 kW</td><td>15-35 kW</td></tr>
<tr><td>Réseau SAV France</td><td>Via installateurs agréés</td><td>Dense, national</td><td>Dense, national</td></tr>
</tbody>
</table>

<h2>Le label Flamme Verte : le critère commun</h2>
<p>Quelle que soit la marque choisie, <strong>exigez le label Flamme Verte 7 étoiles</strong>. C'est le label de référence en France pour les équipements biomasse. Il certifie un rendement élevé et des émissions de particules fines réduites. Sans ce label, vous n'accédez pas aux aides d'État les plus importantes (MaPrimeRénov', CEE).</p>
<p class="gm-pullquote">Le label Flamme Verte 7 étoiles est le passeport pour accéder à toutes les aides d'État. Aucun équipement sans ce label ne devrait être retenu pour un projet aidé.</p>

<h2>Comment on choisit pour vous chez Groupe Merlin</h2>
<p>Lors de notre visite préalable chez vous, nous évaluons la puissance nécessaire pour votre logement, la configuration de votre chaufferie, votre budget après aides et vos préférences. Nous vous présentons ensuite la marque et le modèle les plus adaptés à votre situation, sans préférence commerciale entre les marques.</p>
<p>Pour commencer votre projet : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>. Pour les prix détaillés : <a href="/blog/prix-chaudiere-granules">Prix d'une chaudière à granulés en ${CONTENT_YEAR}</a>. Pour le guide complet : <a href="/blog/chaudieres-granules-guide-complet">Guide complet chaudière à granulés dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (label Flamme Verte), sites fabricants Froling, Viessmann, Frisquet.</em></p>
`,
  },

  {
    slug: "prix-chaudiere-granules",
    title: `Prix d'une chaudière à granulés en ${CONTENT_YEAR} : la fourchette honnête`,
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prix-chaudiere-granules.jpg",
    imgDir: "blog",
    excerpt:
      "Prix d'une chaudière à granulés installée en 2026 : fourchettes selon la puissance, le type de silo et les aides disponibles pour réduire votre reste à charge.",
    body: `

<p>Le prix d'une chaudière à granulés effraie souvent au premier regard. C'est compréhensible : l'investissement initial est plus élevé que pour une chaudière à gaz classique. Mais ce chiffre brut sans les aides ne veut rien dire. Une fois MaPrimeRénov', prime CEE et TVA à 5,5 % déduits, la réalité est très différente.</p>

<h2>Fourchettes de prix selon la puissance</h2>

<table class="gm-compare">
<thead><tr><th>Surface chauffée</th><th>Puissance recommandée</th><th>Prix équipement seul</th><th>Prix installé (avec silo)</th></tr></thead>
<tbody>
<tr><td>Jusqu'à 100 m²</td><td>10-15 kW</td><td>8 000 – 12 000 €</td><td>15 000 – 18 000 €</td></tr>
<tr><td>100 à 150 m²</td><td>15-20 kW</td><td>10 000 – 14 000 €</td><td>17 000 – 21 000 €</td></tr>
<tr><td>150 à 250 m²</td><td>20-35 kW</td><td>12 000 – 18 000 €</td><td>20 000 – 25 000 €</td></tr>
</tbody>
</table>

<p>Ces fourchettes incluent la chaudière, le brûleur, le silo, les raccordements hydrauliques et électriques, la mise en service et la formation à l'utilisation. Elles peuvent varier selon la complexité de la chaufferie, la configuration du silo (intégré ou externe, avec alimentation souple ou rigide) et la distance entre le silo et la chaudière.</p>

<h2>Ce qui fait varier le prix</h2>
<ul class="gm-checklist">
  <li><strong>Le silo</strong> : un silo intégré de faible capacité coûte moins cher qu'un silo maçonné de 5 tonnes. Mais un silo de grande capacité réduit la fréquence de remplissage et peut être plus économique sur la durée.</li>
  <li><strong>La puissance</strong> : une puissance surdimensionnée augmente le coût sans bénéfice. Un dimensionnement précis nécessite une étude thermique du logement, que nous réalisons lors de notre visite.</li>
  <li><strong>La marque</strong> : Froling et Viessmann sont légèrement plus chers que des équipements d'entrée de gamme, mais leur durée de vie et leur rendement justifient généralement l'écart.</li>
  <li><strong>La configuration de la chaufferie</strong> : une chaufferie existante bien dimensionnée réduit les travaux. Une création ex nihilo augmente le budget.</li>
</ul>

<h2>Le coût d'usage : les granulés</h2>
<p>Au-delà de l'investissement initial, il faut intégrer le coût du combustible. Une maison de 150 m² correctement isolée consomme environ 5 à 8 tonnes de granulés par an. Au prix actuel des granulés (350 à 500 €/tonne selon le mode de livraison et le marché), cela représente 1 750 à 4 000 € de combustible par an.</p>
<p>Le prix des granulés fluctue selon les cours du marché international du bois. Il convient de le comparer au prix du fioul ou du gaz sur la même période pour évaluer l'économie réelle.</p>

<h2>Les aides qui réduisent votre reste à charge</h2>
<p>C'est là que la chaudière à granulés devient réellement attractive :</p>
<ul class="gm-checklist">
  <li><strong>MaPrimeRénov' Qualibois</strong> : aide conditionnée à votre niveau de revenus. Pour les montants exacts selon votre profil, consultez <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a> ou notre article dédié : <a href="/blog/aides-chaudiere-granules">Aides pour une chaudière à granulés en ${CONTENT_YEAR}</a>.</li>
  <li><strong>Prime CEE</strong> : prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'. Son montant varie selon le fournisseur et la période.</li>
  <li><strong>TVA à 5,5 %</strong> : au lieu de 20 %, sur la fourniture et la pose. Sur un projet à 20 000 €, cela représente environ 2 900 € d'économie.</li>
  <li><strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 50 000 € sur 20 ans pour financer le reste à charge.</li>
</ul>

<p class="gm-pullquote">Nous ne vous donnons jamais un devis sans avoir calculé les aides en amont. Votre reste à charge réel est ce qui compte, pas le prix brut de l'équipement.</p>

<h2>Ce que nous faisons lors de la visite préalable</h2>
<p>Avant tout devis, nous nous déplaçons chez vous pour mesurer la puissance nécessaire, évaluer la configuration de votre chaufferie et calculer vos aides selon vos revenus. Vous partez avec un chiffre réel : investissement total, aides déduites, reste à charge, et estimation du coût annuel en granulés.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour comparer avec un poêle à granulés : <a href="/blog/chaudiere-poele-granules-rentabilite">Chaudière vs poêle à granulés</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>, observations marché granulés EN Plus 2024-2026.</em></p>
`,
  },

  {
    slug: "aides-chaudiere-granules",
    title: `Aides pour une chaudière à granulés en ${CONTENT_YEAR} : MaPrimeRénov', CEE, éco-PTZ`,
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "aides-chaudiere-granules.jpg",
    imgDir: "blog",
    excerpt:
      "MaPrimeRénov' Qualibois, prime CEE, TVA à 5,5 % et éco-PTZ : toutes les aides pour financer votre chaudière à granulés en 2026, conditions et démarches expliquées.",
    body: `

<p>La chaudière à granulés est l'une des solutions de chauffage les plus fortement soutenues par l'État en France. Renouvelable, performante et sans émissions fossiles, elle cumule plusieurs aides qui peuvent représenter une part importante de l'investissement total. Voici comment les obtenir.</p>

<h2>MaPrimeRénov' Qualibois : l'aide principale</h2>
<p>MaPrimeRénov' est l'aide de l'État pilotée par l'Anah (Agence nationale de l'habitat). Pour une chaudière à granulés, elle est accordée sous l'appellation <strong>MaPrimeRénov' Qualibois</strong>, conditionnée à :</p>
<ul class="gm-checklist">
  <li><strong>L'installateur doit être certifié RGE Qualibois.</strong> Sans cette certification, aucune aide n'est accordée. Groupe Merlin est certifié RGE Qualibois.</li>
  <li><strong>La chaudière doit porter le label Flamme Verte 7 étoiles</strong> (ou équivalent EN Plus A1 pour les granulés) et afficher un rendement ≥ 87 %.</li>
  <li><strong>Le dossier doit être déposé et validé AVANT la signature du devis et le démarrage des travaux.</strong> C'est la règle la plus souvent ratée. Si vous signez d'abord, vous perdez l'aide.</li>
  <li><strong>Le logement doit être votre résidence principale</strong>, achevée depuis plus de deux ans.</li>
</ul>

<p>Le montant de MaPrimeRénov' dépend de votre niveau de revenus (revenu fiscal de référence de votre foyer). Les barèmes exacts et actualisés sont disponibles sur <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a> et sur <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>. Les ménages aux revenus très modestes et modestes bénéficient des montants les plus élevés.</p>

<h2>La prime CEE : cumulable avec MaPrimeRénov'</h2>
<p>Les primes CEE (Certificats d'Économies d'Énergie) sont versées par les fournisseurs d'énergie, qui ont l'obligation légale de financer des travaux d'économies d'énergie. Elles sont indépendantes de MaPrimeRénov' et se cumulent avec elle.</p>
<p>Le montant d'une prime CEE pour une chaudière à granulés varie selon le fournisseur, la période et la puissance de l'équipement. Nous vous aidons à obtenir la meilleure offre disponible au moment de votre projet.</p>

<h2>La TVA à 5,5 % : un avantage souvent négligé</h2>
<p>La fourniture et la pose d'une chaudière biomasse bénéficient d'une TVA réduite à 5,5 % au lieu de 20 %. Sur un projet à 20 000 €, cela représente une économie d'environ 2 900 €, sans démarche particulière : c'est votre installateur qui applique directement le taux réduit sur la facture.</p>

<h2>L'éco-prêt à taux zéro (éco-PTZ)</h2>
<p>Si vos aides ne couvrent pas la totalité de votre reste à charge, l'éco-PTZ vous permet d'emprunter jusqu'à 50 000 € à taux zéro sur 20 ans, sans condition de revenus. Il se cumule avec MaPrimeRénov' et les primes CEE.</p>

<div class="gm-schema">
<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des aides cumulables pour une chaudière à granulés">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <rect x="20" y="30" width="140" height="70" rx="8" fill="#FAC864"/>
    <text x="90" y="62" font-weight="700" font-size="13">MaPrimeRénov'</text>
    <text x="90" y="80" font-size="11">Qualibois</text>
    <rect x="180" y="30" width="140" height="70" rx="8" fill="#FAC864"/>
    <text x="250" y="62" font-weight="700" font-size="13">Prime CEE</text>
    <text x="250" y="80" font-size="11">Fournisseur énergie</text>
    <rect x="340" y="30" width="140" height="70" rx="8" fill="#EAE1CD"/>
    <text x="410" y="62" font-weight="700" font-size="13">TVA 5,5 %</text>
    <text x="410" y="80" font-size="11">Auto-appliquée</text>
    <rect x="500" y="30" width="140" height="70" rx="8" fill="#EAE1CD"/>
    <text x="570" y="62" font-weight="700" font-size="13">Éco-PTZ</text>
    <text x="570" y="80" font-size="11">Jusqu'à 50 000 €</text>
    <!-- cumul arrow -->
    <line x1="90" y1="100" x2="90" y2="140" stroke="#171723" stroke-width="2"/>
    <line x1="250" y1="100" x2="250" y2="140" stroke="#171723" stroke-width="2"/>
    <line x1="410" y1="100" x2="410" y2="140" stroke="#171723" stroke-width="2"/>
    <line x1="570" y1="100" x2="570" y2="140" stroke="#171723" stroke-width="2"/>
    <line x1="90" y1="140" x2="570" y2="140" stroke="#171723" stroke-width="2"/>
    <line x1="330" y1="140" x2="330" y2="165" stroke="#171723" stroke-width="2" marker-end="url(#ar-aides)"/>
    <rect x="170" y="167" width="320" height="40" rx="8" fill="#171723"/>
    <text x="330" y="192" fill="#FAC864" font-weight="700" font-size="14">Toutes ces aides se cumulent</text>
  </g>
  <defs>
    <marker id="ar-aides" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#171723"/>
    </marker>
  </defs>
</svg>
</div>

<h2>Les démarches : nous nous en occupons</h2>
<p>Le dossier MaPrimeRénov' est souvent perçu comme complexe. En pratique, nous prenons en charge l'intégralité des démarches pour nos clients :</p>
<ol>
  <li>Lors de la visite préalable, nous calculons vos aides selon vos revenus.</li>
  <li>Avant la signature du devis, nous déposons votre dossier MaPrimeRénov' sur votre espace France Rénov'.</li>
  <li>Une fois le dossier validé, vous signez le devis et les travaux commencent.</li>
  <li>Après la pose, nous constituons le dossier de clôture et le versement est déclenché.</li>
</ol>
<p>Vous n'avez aucune démarche administrative à réaliser vous-même. C'est un engagement que nous prenons pour tous nos projets de chaudières à granulés dans la Nièvre et l'Yonne.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour les prix : <a href="/blog/prix-chaudiere-granules">Prix d'une chaudière à granulés en ${CONTENT_YEAR}</a>. Guide complet : <a href="/blog/chaudieres-granules-guide-complet">Guide chaudière à granulés dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.anah.gouv.fr/" target="_blank" rel="noopener">anah.gouv.fr</a>, <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "entretien-chaudiere-granules-obligatoire",
    title: "Entretien chaudière à granulés : ce que la loi impose",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "entretien-chaudiere-granules-obligatoire.jpg",
    imgDir: "blog",
    excerpt:
      "Entretien annuel obligatoire, ramonage, attestation : tout ce que vous devez faire (et ne pas négliger) pour votre chaudière à granulés, par obligation légale et pour préserver votre installation.",
    body: `

<p>Une chaudière à granulés s'entretient. Ce n'est pas une option : c'est une obligation légale, et c'est aussi ce qui fait la différence entre une chaudière qui tient 20 ans et une qui tombe en panne après 8 ans. Voici ce que la loi impose, et pourquoi le respecter protège votre investissement.</p>

<h2>L'entretien annuel : obligation légale</h2>
<p>En France, l'entretien annuel des chaudières est encadré par l'arrêté du 15 septembre 2009 relatif à l'entretien annuel des chaudières dont la puissance nominale est comprise entre 4 kW et 400 kW. Cela concerne toutes les chaudières à granulés résidentielles.</p>
<p>L'entretien doit être réalisé par un professionnel qualifié (technicien certifié ou sous contrat avec le fabricant). Il comprend :</p>
<ul class="gm-checklist">
  <li><strong>Nettoyage du brûleur et du foyer</strong> : élimination des résidus de combustion pour maintenir le rendement.</li>
  <li><strong>Nettoyage de l'échangeur thermique</strong> : les dépôts sur l'échangeur réduisent le transfert de chaleur et augmentent la consommation.</li>
  <li><strong>Vérification et nettoyage de la vis sans fin et du système d'alimentation</strong> : prévenir les bourrages.</li>
  <li><strong>Contrôle des sécurités</strong> : détecteur de CO, pressostat, thermostat de sécurité.</li>
  <li><strong>Mesure du rendement et des rejets de combustion</strong> : vérification que la chaudière fonctionne dans les paramètres optimaux.</li>
  <li><strong>Contrôle du circuit hydraulique</strong> : pression, étanchéité, état des circulateurs.</li>
</ul>
<p>À l'issue de l'entretien, le technicien remet une <strong>attestation d'entretien</strong>. Ce document est obligatoire, à conserver précieusement : il est exigé par votre assurance en cas de sinistre et par l'acquéreur en cas de vente du logement.</p>

<h2>Le ramonage : deux fois par an</h2>
<p>Le ramonage du conduit de fumée est réglementé séparément. Les arrêtés préfectoraux (qui varient selon le département) imposent en général un ramonage mécanique du conduit deux fois par an, dont au moins une fois pendant la période de chauffe.</p>
<p>Dans la Nièvre (58) et l'Yonne (89), la réglementation locale peut préciser des obligations supplémentaires. Votre technicien d'entretien peut vous informer des exigences locales.</p>
<p>Le ramonage sert à éliminer les dépôts de suies et de créosote dans le conduit. Ces dépôts sont inflammables : un conduit encrassé est un risque d'incendie. C'est aussi un problème de rendement : un conduit partiellement obstrué crée un tirage insuffisant qui dégrade la combustion.</p>

<h2>Les interventions côté utilisateur</h2>
<p>Au-delà des interventions professionnelles annuelles, quelques gestes réguliers sont à votre charge :</p>
<ul class="gm-checklist">
  <li><strong>Vider le bac à cendres</strong> : environ une fois par semaine en pleine chauffe selon le modèle. Un bac trop plein empêche la bonne circulation des cendres et peut bloquer la combustion.</li>
  <li><strong>Vérifier le niveau du silo</strong> : prévoir la commande de granulés avant la rupture de stock, surtout en période froide.</li>
  <li><strong>Contrôler visuellement la vitre</strong> (sur les modèles avec hublot) : une vitre très encrassée après quelques heures de fonctionnement signale un réglage à vérifier.</li>
</ul>

<h2>Pourquoi l'entretien protège votre investissement</h2>
<p>Un entretien annuel rigoureux coûte 200 à 400 € par an. C'est le prix d'une panne évitée. Un brûleur encrassé non détecté peut nécessiter un remplacement à 800-1 500 €. Un échangeur détérioré par des dépôts successifs peut réduire le rendement de la chaudière de 10 à 15 % sur la durée, ce qui se traduit directement en surcoût de granulés.</p>
<p class="gm-pullquote">L'entretien annuel n'est pas un coût : c'est une assurance sur la durée de vie et le rendement de votre chaudière. Nos contrats d'entretien le prouvent sur la durée.</p>

<h2>Groupe Merlin assure l'entretien de votre chaudière</h2>
<p>Nous proposons des contrats d'entretien annuels pour les chaudières à granulés que nous installons, ainsi que pour les chaudières d'autres marques. Nos techniciens interviennent dans la Nièvre et l'Yonne avec une attestation remise en fin d'intervention.</p>
<p>Pour souscrire à un contrat d'entretien ou poser une question : <a href="/contact"><strong>contactez-nous</strong></a>. Pour en savoir plus sur la durée de vie d'une chaudière bien entretenue : <a href="/blog/duree-de-vie-chaudiere-granules">Durée de vie d'une chaudière à granulés</a>.</p>
<p><em>Sources : Arrêté du 15 septembre 2009 relatif à l'entretien annuel des chaudières, réglementation locale Nièvre et Yonne.</em></p>
`,
  },

  {
    slug: "duree-de-vie-chaudiere-granules",
    title: "Durée de vie d'une chaudière à granulés : ce qu'il faut savoir",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "duree-de-vie-chaudiere-granules.jpg",
    imgDir: "blog",
    excerpt:
      "Une chaudière à granulés bien entretenue peut durer 15 à 25 ans. Voici les facteurs qui allongent ou raccourcissent sa durée de vie, et comment maximiser votre investissement.",
    body: `

<p>La durée de vie d'une chaudière à granulés est souvent présentée comme une donnée fixe. En réalité, c'est une fourchette large qui dépend de plusieurs facteurs, dont certains sont entre vos mains. Voici les éléments qui font la différence.</p>

<h2>15 à 25 ans : pourquoi une telle fourchette ?</h2>
<p>Les fabricants de chaudières à granulés annoncent généralement des durées de vie de 15 à 25 ans. Cette fourchette s'explique par la combinaison de plusieurs variables :</p>
<ul class="gm-checklist">
  <li><strong>La qualité du combustible</strong> : un granulé humide ou mal pressé encrassera plus vite le brûleur et l'échangeur. Un granulé certifié EN Plus A1 garantit des caractéristiques stables (humidité < 10 %, pouvoir calorifique > 16,5 MJ/kg).</li>
  <li><strong>La régularité de l'entretien</strong> : une chaudière entretenue chaque année durera deux fois plus longtemps qu'une chaudière négligée. Ce n'est pas une métaphore : le brûleur et l'échangeur non nettoyés se dégradent par accumulation.</li>
  <li><strong>Le taux de charge</strong> : une chaudière très surdimensionnée par rapport à vos besoins fonctionnera en mode marche/arrêt permanent, ce qui use mécaniquement les pièces plus vite qu'une chaudière fonctionnant à puissance nominale prolongée.</li>
  <li><strong>La qualité de l'installation initiale</strong> : un raccordement hydraulique mal réalisé (pression incorrecte, vase d'expansion sous-dimensionné) crée des contraintes sur le circuit qui accélèrent l'usure.</li>
  <li><strong>La marque et la qualité de l'équipement</strong> : les matériaux du foyer, la qualité de l'acier de l'échangeur et la robustesse des composants électroniques varient selon les fabricants.</li>
</ul>

<h2>Les pièces d'usure à surveiller</h2>
<table class="gm-compare">
<thead><tr><th>Pièce</th><th>Durée de vie estimée</th><th>Signes d'usure</th></tr></thead>
<tbody>
<tr><td>Brûleur</td><td>8-15 ans selon utilisation</td><td>Allumages difficiles, consommation en hausse, dépôts excessifs</td></tr>
<tr><td>Résistance d'allumage</td><td>5-10 ans</td><td>Allumage lent ou nécessitant plusieurs tentatives</td></tr>
<tr><td>Capteurs de température</td><td>10-15 ans</td><td>Températures erratiques, déclenchements de sécurité inexpliqués</td></tr>
<tr><td>Pompe de circulation</td><td>10-20 ans</td><td>Bruit anormal, pression instable dans le circuit</td></tr>
<tr><td>Vase d'expansion</td><td>10-15 ans</td><td>Pression en baisse régulière, purges fréquentes nécessaires</td></tr>
</tbody>
</table>

<h2>Quand envisager le remplacement ?</h2>
<p>Une chaudière en fin de vie ne se signale pas toujours par une panne franche. Elle peut continuer à fonctionner en dégradant progressivement son rendement, ce qui augmente votre consommation de granulés sans que vous le remarquiez directement. Les signes à surveiller :</p>
<ul class="gm-checklist">
  <li><strong>Consommation de granulés en hausse constante</strong> sur plusieurs saisons pour une habitation et un usage identiques.</li>
  <li><strong>Pannes répétées</strong> sur des pièces différentes : c'est souvent le signe d'un équipement globalement fatigué.</li>
  <li><strong>Coût des réparations supérieur à 30-40 % du prix d'une chaudière neuve</strong> : le remplacement devient généralement plus économique.</li>
  <li><strong>Évolutions réglementaires</strong> : les futures normes environnementales pourraient rendre certains équipements anciens non conformes.</li>
</ul>

<p class="gm-pullquote">Une chaudière à granulés achetée aujourd'hui avec un bon entretien annuel a toutes les chances d'être encore en service en 2045 et au-delà. C'est un investissement sur le très long terme.</p>

<h2>Ce que nous recommandons</h2>
<p>Chez Groupe Merlin, nous conseillons de signer un contrat d'entretien annuel dès la mise en service de la chaudière. C'est le meilleur investissement pour préserver votre équipement. Nous réalisons une inspection complète chaque année et vous signalons les pièces à surveiller avant qu'elles ne tombent en panne.</p>
<p>Pour en savoir plus sur l'entretien : <a href="/blog/entretien-chaudiere-granules-obligatoire">Entretien chaudière à granulés : ce que la loi impose</a>. Pour les pannes courantes : <a href="/blog/pannes-chaudiere-granules-solutions">Pannes chaudière à granulés : les solutions</a>. Pour démarrer un projet : <a href="/contact"><strong>demandez votre devis gratuit</strong></a>.</p>
<p><em>Sources : données fabricants Froling, Viessmann, Frisquet, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (guide biomasse).</em></p>
`,
  },

  {
    slug: "pannes-chaudiere-granules-solutions",
    title: "Pannes chaudière à granulés : les problèmes fréquents et leurs solutions",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "pannes-chaudiere-granules-solutions.jpg",
    imgDir: "blog",
    excerpt:
      "Chaudière à granulés qui ne s'allume plus, silo vide, vis sans fin bloquée, code erreur : les pannes les plus fréquentes expliquées et ce qu'il faut faire avant d'appeler un technicien.",
    body: `

<p>Une chaudière à granulés peut tomber en panne. Avant d'appeler un technicien, certaines pannes sont facilement identifiables et parfois résolubles par l'utilisateur. D'autres nécessitent une intervention professionnelle. Voici les situations les plus fréquentes et ce qu'il faut faire dans chaque cas.</p>

<h2>La chaudière ne s'allume plus</h2>
<p><strong>Causes possibles et ordre de vérification :</strong></p>
<ul class="gm-checklist">
  <li><strong>Silo vide ou presque vide.</strong> Première vérification systématique avant tout appel. Certaines chaudières n'affichent pas d'alerte visible sur l'écran en cas de silo très bas.</li>
  <li><strong>Résistance d'allumage défectueuse.</strong> La résistance chauffe pour enflammer les granulés au démarrage. Si elle est grillée, l'allumage ne se produit pas. C'est une pièce d'usure normale après 5-10 ans. Intervention technicien nécessaire.</li>
  <li><strong>Brûleur encrassé.</strong> Un excès de cendres dans le brûleur empêche l'allumage. Vider le bac à cendres et nettoyer manuellement le cendrier du brûleur peut résoudre le problème.</li>
  <li><strong>Problème électrique (fusible, alimentation).</strong> Vérifier que la chaudière est bien alimentée électriquement et que les fusibles n'ont pas sauté.</li>
</ul>

<h2>La chaudière s'arrête en cours de fonctionnement</h2>
<ul class="gm-checklist">
  <li><strong>Bourrage de la vis sans fin.</strong> Un granulé humide ou une impureté peut bloquer la vis d'alimentation. Certaines chaudières indiquent ce problème par un code d'erreur spécifique. Solution : contacter votre technicien pour débloquer mécaniquement et vérifier la qualité des granulés.</li>
  <li><strong>Tirage insuffisant.</strong> Un conduit de fumée encrassé ou partiellement obstrué crée une contre-pression qui coupe la combustion. Solution : ramonage immédiat du conduit.</li>
  <li><strong>Température de fumées trop élevée.</strong> Signal d'un échangeur encrassé ou d'un réglage de combustion incorrect. Intervention technicien nécessaire.</li>
  <li><strong>Défaut de pression du circuit hydraulique.</strong> Si la pression du circuit tombe en dessous du seuil minimum (généralement 1 bar), la chaudière se met en sécurité. Vérifier le manomètre et ajouter de l'eau si nécessaire (ou appeler si la pression rechutte régulièrement).</li>
</ul>

<h2>Le chauffage chauffe mal ou ne monte pas en température</h2>
<ul class="gm-checklist">
  <li><strong>Echangeur encrassé.</strong> Les dépôts de suie sur l'échangeur réduisent le transfert thermique. Le rendement chute progressivement. Solution : entretien de la chaudière (nettoyage de l'échangeur).</li>
  <li><strong>Puissance de la chaudière insuffisante pour la demande.</strong> Rare si le dimensionnement initial était correct. Peut arriver si vous avez ajouté des pièces chauffées depuis l'installation.</li>
  <li><strong>Problème de régulation ou de programmation.</strong> Vérifier les paramètres de votre thermostat ou de votre régulation connectée.</li>
  <li><strong>Radiateurs à désengorger.</strong> Des radiateurs froids en haut et chauds en bas indiquent la présence d'air dans le circuit : purger les radiateurs.</li>
</ul>

<h2>Codes d'erreur courants</h2>
<p>Chaque marque a ses propres codes d'erreur, consultez votre notice. En général :</p>
<table class="gm-compare">
<thead><tr><th>Type d'erreur</th><th>Signification probable</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Erreur allumage (E1 ou similaire)</td><td>Échec d'allumage après X tentatives</td><td>Vérifier silo, nettoyer brûleur, puis technicien</td></tr>
<tr><td>Erreur alimentation/vis</td><td>Bourrage ou capteur de rotation défaillant</td><td>Technicien</td></tr>
<tr><td>Erreur pression eau</td><td>Pression du circuit trop basse</td><td>Regonfler le circuit, puis technicien si récurrent</td></tr>
<tr><td>Erreur température fumées</td><td>Conduit encrassé ou échangeur encrassé</td><td>Ramonage + entretien</td></tr>
<tr><td>Alarme CO</td><td>Présence de monoxyde de carbone détectée</td><td>Aérer immédiatement, couper la chaudière, appeler le 18</td></tr>
</tbody>
</table>

<p class="gm-pullquote">En cas d'alarme CO (monoxyde de carbone) : aérez immédiatement toutes les pièces, sortez du bâtiment, coupez la chaudière et appelez le 18. Ne revenez pas dans la maison avant intervention des secours.</p>

<h2>Groupe Merlin intervient en 48 h dans la Nièvre et l'Yonne</h2>
<p>Nos techniciens interviennent sur toutes les marques de chaudières à granulés pour diagnostic et réparation. En hiver, nous traitons les pannes de chauffage en priorité avec un délai d'intervention maximal de 48 heures ouvrées.</p>
<p>En cas de panne : <a href="/contact"><strong>contactez-nous</strong></a>. Pour prévenir les pannes : <a href="/blog/entretien-chaudiere-granules-obligatoire">Entretien chaudière à granulés : obligations légales</a>. Guide complet : <a href="/blog/chaudieres-granules-guide-complet">Guide chaudière à granulés dans la Nièvre</a>.</p>
<p><em>Sources : retours d'expérience techniciens Groupe Merlin, documentation fabricants Froling, Viessmann, Frisquet.</em></p>
`,
  },

  {
    slug: "installateur-chaudiere-granules-nievre",
    title: "Installateur chaudière à granulés dans la Nièvre et l'Yonne : comment bien choisir",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "installateur-chaudiere-granules-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Vous cherchez un installateur de chaudière à granulés dans la Nièvre (58) ou l'Yonne (89) ? Voici les critères pour choisir un professionnel certifié RGE Qualibois et sécuriser vos aides.",
    body: `

<p>Dans la Nièvre et l'Yonne, trouver un installateur de chaudière à granulés compétent et certifié n'est pas toujours simple. Ces départements ruraux sont moins desservis que les métropoles, et tous les professionnels qui se présentent ne sont pas forcément qualifiés pour ce type d'équipement. Voici comment évaluer un installateur avant de lui confier votre projet.</p>

<h2>La certification RGE Qualibois : le critère non négociable</h2>
<p>La première question à poser à tout installateur est : êtes-vous certifié RGE Qualibois ? Cette certification conditionne votre accès à MaPrimeRénov' et aux primes CEE. Sans elle, vous perdez les aides d'État — ce qui peut représenter plusieurs milliers d'euros.</p>
<p>Pour vérifier qu'un professionnel est bien certifié RGE, rendez-vous sur <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a> (annuaire des professionnels RGE). La certification doit être active à la date de votre devis, pas seulement au moment du premier contact.</p>

<h2>Les autres critères à évaluer</h2>
<ul class="gm-checklist">
  <li><strong>La visite préalable systématique.</strong> Un installateur sérieux ne fait pas de devis à distance. Il doit venir chez vous pour mesurer la puissance nécessaire, évaluer la configuration de votre chaufferie et vérifier le conduit de fumée. Un devis sans visite est un devis au doigt mouillé.</li>
  <li><strong>La prise en charge des dossiers d'aides.</strong> Demandez explicitement si l'installateur se charge de votre dossier MaPrimeRénov'. Certains laissent cette responsabilité au client, ce qui crée des risques d'erreur (notamment sur la règle du dépôt avant la signature du devis).</li>
  <li><strong>Le SAV et le contrat d'entretien.</strong> Votre chaudière aura besoin d'entretien annuel pendant 20 ans. Assurez-vous que l'installateur propose ce service et que son délai d'intervention en cas de panne est raisonnable (< 48-72 h ouvrées).</li>
  <li><strong>Les références et marques installées.</strong> Un installateur qui travaille avec des marques reconnues (Froling, Viessmann, Frisquet) a généralement accès aux pièces détachées et à la formation technique des fabricants.</li>
  <li><strong>La proximité géographique.</strong> Dans la Nièvre et l'Yonne, un installateur basé localement peut intervenir plus rapidement et connaît les spécificités du bâti local (pierres, caves voûtées, logements anciens).</li>
</ul>

<h2>Particularités des deux départements</h2>
<ul class="gm-checklist">
  <li><strong>La Nièvre (58)</strong> : département très rural, faiblement raccordé au gaz naturel. Les maisons anciennes en pierre (Morvan, Nivernais) sont souvent mal isolées et nécessitent un dimensionnement précis. La chaudière à granulés y est particulièrement pertinente pour remplacer le fioul.</li>
  <li><strong>L'Yonne (89)</strong> : profil mixte, avec des zones plus denses autour d'Auxerre et de Sens, et un tissu rural important dans le Morvan côté Yonne. Les besoins en chauffage sont comparables à la Nièvre.</li>
</ul>

<h2>Ce que vous devez demander avant de signer</h2>
<ul class="gm-checklist">
  <li>L'installateur est-il certifié RGE Qualibois (vérifiable sur france-renov.gouv.fr) ?</li>
  <li>Qui dépose le dossier MaPrimeRénov' — vous ou eux ?</li>
  <li>Le dossier sera-t-il déposé et validé avant la signature du devis ?</li>
  <li>Quel est le délai d'intervention SAV en cas de panne en plein hiver ?</li>
  <li>Proposent-ils un contrat d'entretien annuel avec attestation ?</li>
</ul>

<blockquote class="gm-pullquote">
  "Dans la Nièvre, les conditions hivernales peuvent être rudes. Un installateur local qui connaît votre terrain et peut intervenir en 48 heures, ce n'est pas un luxe — c'est une nécessité."
</blockquote>

<h2>Groupe Merlin dans la Nièvre et l'Yonne</h2>
<p>Nos deux agences (Clamecy et Corbigny) couvrent l'ensemble de la Nièvre et du secteur Yonne. Nos techniciens sont certifiés <strong>RGE Qualibois</strong> et <strong>RGE Eco Artisan</strong>, parmi cinq certifications RGE. Nous installons des chaudières Froling, Viessmann et Frisquet.</p>
<p>Nous prenons en charge la totalité des démarches MaPrimeRénov' et CEE. Nous proposons des contrats d'entretien annuels avec attestation. Délai d'intervention garanti : 48 heures ouvrées.</p>
<p>Pour un devis gratuit avec visite préalable : <a href="/contact"><strong>contactez-nous</strong></a>. Pour tout savoir sur les aides disponibles : <a href="/blog/aides-chaudiere-granules">Aides pour une chaudière à granulés en ${CONTENT_YEAR}</a>. Pour les prix : <a href="/blog/prix-chaudiere-granules">Prix d'une chaudière à granulés</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr" target="_blank" rel="noopener noreferrer">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr" target="_blank" rel="noopener noreferrer">ADEME</a>.</em></p>
`,
  },

  {
    slug: "prix-poele-granules",
    title: `Prix d'un poêle à granulés en ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "prix-poele-granules.jpg",
    imgDir: "blog",
    excerpt:
      "Prix d'un poêle à granulés en 2026 : fourchettes selon le type (à insert, autonome, à eau), coût de la pose et aides disponibles pour réduire votre investissement.",
    body: `

<p>Le poêle à granulés est une solution de chauffage plus accessible que la chaudière à granulés, tant en termes d'investissement initial que de travaux nécessaires. Il peut chauffer une pièce principale, un espace ouvert ou servir d'appoint à un système de chauffage central. Voici ce qu'il faut savoir sur les prix et les aides disponibles en ${CONTENT_YEAR}.</p>

<h2>Les trois types de poêles à granulés</h2>

<table class="gm-compare">
<thead><tr><th>Type</th><th>Usage</th><th>Prix équipement</th><th>Pose</th></tr></thead>
<tbody>
<tr><td>Poêle autonome</td><td>Chauffage d'une pièce ou d'un espace ouvert</td><td>1 500 – 4 000 €</td><td>500 – 1 500 €</td></tr>
<tr><td>Poêle à insert</td><td>S'intègre dans une cheminée existante</td><td>2 000 – 5 000 €</td><td>800 – 2 000 €</td></tr>
<tr><td>Poêle à eau (hydro)</td><td>Chauffe une pièce + alimente partiellement le circuit hydraulique</td><td>3 000 – 7 000 €</td><td>1 000 – 2 500 €</td></tr>
</tbody>
</table>

<h2>Ce qui fait varier le prix d'un poêle à granulés</h2>
<ul class="gm-checklist">
  <li><strong>La puissance</strong> : un poêle de 6 kW convient pour une pièce de 50-80 m². Un poêle de 12-15 kW peut chauffer une grande maison ouverte ou servir d'appoint significatif. Plus la puissance est élevée, plus le prix augmente.</li>
  <li><strong>Les fonctionnalités</strong> : thermostat intégré, programmation hebdomadaire, Wi-Fi, double combustion, finition acier ou céramique. Ces options peuvent ajouter 500 à 1 500 € au prix de base.</li>
  <li><strong>Le type de silo</strong> : certains poêles ont un réservoir intégré de 15-30 kg (remplissage en sac). D'autres peuvent être raccordés à un silo externe (plus pratique, plus cher à l'installation).</li>
  <li><strong>Les travaux de conduit</strong> : si vous n'avez pas de conduit de fumée adapté, la création d'un conduit inox double paroi est nécessaire. Cela représente en général 1 000 à 3 000 € supplémentaires selon la hauteur et la configuration.</li>
</ul>

<h2>Les aides disponibles pour un poêle à granulés</h2>
<p>Les aides pour un poêle à granulés existent mais sont généralement moins élevées que pour une chaudière à granulés. Conditions communes :</p>
<ul class="gm-checklist">
  <li><strong>Label Flamme Verte 7 étoiles</strong> : exigé pour accéder aux aides. Vérifiez ce label sur la fiche technique avant tout achat.</li>
  <li><strong>Installateur certifié RGE</strong> : pour MaPrimeRénov', l'installateur doit être certifié RGE (Eco Artisan ou Qualibois selon la certification).</li>
  <li><strong>Résidence principale</strong> : condition pour MaPrimeRénov'.</li>
  <li><strong>Prime CEE</strong> : disponible selon les offres en vigueur chez les fournisseurs d'énergie.</li>
</ul>
<p>Pour les montants exacts des aides selon vos revenus, consultez <a href="https://www.maprimerenov.gouv.fr/" target="_blank" rel="noopener">maprimerenov.gouv.fr</a>. Notre article sur les aides est également utile : <a href="/blog/aides-chaudiere-granules">Aides pour une chaudière à granulés en ${CONTENT_YEAR}</a> — certains dispositifs s'appliquent aussi aux poêles.</p>

<h2>Poêle ou chaudière : comment choisir ?</h2>
<p>Si votre logement dispose d'un circuit hydraulique central (radiateurs, plancher chauffant) : la chaudière à granulés est la solution la plus adaptée. Le poêle ne peut pas remplacer une chaudière pour tout le chauffage d'une maison raccordée à des radiateurs.</p>
<p>Si vous n'avez pas de circuit hydraulique, si vous voulez chauffer une grande pièce principale, ou si vous cherchez un appoint à votre chauffage existant : le poêle à granulés est la solution idéale.</p>
<p>Pour aller plus loin sur ce choix : <a href="/blog/chaudiere-poele-granules-rentabilite">Chaudière à granulés ou poêle à granulés : laquelle choisir ?</a></p>
<p>Pour démarrer votre projet : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour les prix d'une chaudière : <a href="/blog/prix-chaudiere-granules">Prix d'une chaudière à granulés en ${CONTENT_YEAR}</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ADEME</a> (label Flamme Verte).</em></p>
`,
  },

  // ─── COCON : SALLE DE BAIN CLÉ EN MAIN ──────────────────────────────────────

  {
    slug: "salle-de-bain-guide-complet",
    title: `Salle de bain clé en main dans la Nièvre et l'Yonne : le guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "salle-de-bain-guide-complet.jpg",
    imgDir: "blog",
    excerpt:
      "Rénovation de salle de bain clé en main dans la Nièvre et l'Yonne : ce que ça comprend, les étapes, les marques, le budget et pourquoi choisir un seul interlocuteur du début à la fin.",
    body: `
<p>Rénover une salle de bain est souvent vécu comme un projet compliqué. Vous devez faire appel à plusieurs artisans et les coordonner, vous faites face à des délais qui s'étirent, sans parler des surprises en cours de chantier. La formule clé en main existe justement pour supprimer cette complexité. Vous échangez avec un seul interlocuteur, du premier rendez-vous jusqu'à votre salle de bain, prête à être utilisée.</p>
<p>Voici ce que vous devez savoir avant de vous lancer pour votre salle de bain dans la Nièvre ou l'Yonne.</p>

<h2>Ce que comprend la formule clé en main</h2>
<p>Quand on parle de salle de bain clé en main chez le Groupe Merlin, on parle d'un projet complet, où nous prenons en charge :</p>
<ul class="gm-checklist">
  <li><strong>Le rendez-vous de conception</strong> : visite chez vous pour mesurer l'espace, comprendre votre usage quotidien et définir vos priorités (douche à l'italienne, baignoire, double vasque, WC suspendu, etc.).</li>
  <li><strong>Le plan de la salle de bain</strong> : proposition d'aménagement avec positionnement des équipements, choix des matériaux et estimation budgétaire détaillée.</li>
  <li><strong>La plomberie complète</strong> : dépose de l'existant, modification du réseau si nécessaire, installation des nouvelles alimentations et évacuations.</li>
  <li><strong>L'installation des équipements</strong> : pose de la douche ou baignoire, du meuble vasque, de la robinetterie, du WC, du carrelage et des finitions.</li>
  <li><strong>La coordination du chantier</strong> : nous gérons les intervenants (carreleur, électricien si nécessaire), les délais et la logistique. Vous n'avez aucune coordination à assurer.</li>
</ul>
<p><em>Nous disposons également d'un show-room de 600 m² où vous pouvez venir visiter des salles de bain aménagées et vous en inspirer librement pour votre projet.</em></p>

<h2>Les étapes d'un projet de A à Z</h2>

<div class="gm-schema">
<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma des 5 étapes d'un projet salle de bain clé en main">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <circle cx="70" cy="80" r="50" fill="#FAC864"/>
    <text x="70" y="72" font-weight="700" font-size="13">1</text>
    <text x="70" y="90" font-size="10">Visite</text>
    <text x="70" y="106" font-size="10">& conception</text>
    <line x1="122" y1="80" x2="148" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-sdb)"/>
    <circle cx="200" cy="80" r="50" fill="#FAC864"/>
    <text x="200" y="72" font-weight="700" font-size="13">2</text>
    <text x="200" y="90" font-size="10">Plan &</text>
    <text x="200" y="106" font-size="10">devis accepté</text>
    <line x1="252" y1="80" x2="278" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-sdb)"/>
    <circle cx="330" cy="80" r="50" fill="#EAE1CD"/>
    <text x="330" y="72" font-weight="700" font-size="13">3</text>
    <text x="330" y="90" font-size="10">Démolition</text>
    <text x="330" y="106" font-size="10">& plomberie</text>
    <line x1="382" y1="80" x2="408" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-sdb)"/>
    <circle cx="460" cy="80" r="50" fill="#EAE1CD"/>
    <text x="460" y="72" font-weight="700" font-size="13">4</text>
    <text x="460" y="90" font-size="10">Pose &</text>
    <text x="460" y="106" font-size="10">carrelage</text>
    <line x1="512" y1="80" x2="538" y2="80" stroke="#171723" stroke-width="2" marker-end="url(#ar-sdb)"/>
    <circle cx="590" cy="80" r="50" fill="#171723"/>
    <text x="590" y="72" fill="#FAC864" font-weight="700" font-size="13">5</text>
    <text x="590" y="90" fill="#fff" font-size="10">Finitions</text>
    <text x="590" y="106" fill="#fff" font-size="10">& réception</text>
  </g>
  <defs>
    <marker id="ar-sdb" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#171723"/>
    </marker>
  </defs>
</svg>
</div>

<p>Pour les détails de chaque étape, consultez notre article : <a href="/blog/etapes-renovation-salle-de-bain">Les étapes d'une rénovation de salle de bain clé en main</a>.</p>

<h2>Les marques que nous proposons</h2>
<p>Nous sommes partenaires de 3 marques sélectionnées pour leur qualité et leur durabilité :</p>
<ul class="gm-checklist">
  <li><strong>Aubade</strong> : marque française reconnue, gamme de céramiques, meubles vasques et accessoires. Fabriqué en France, design soigné, durabilité éprouvée.</li>
  <li><strong>Alterna</strong> : bon rapport qualité-prix sur les receveurs de douche, parois et cabines. Large choix de formats et de finitions.</li>
  <li><strong>Grohe</strong> : robinetterie et systèmes de douche allemands. Réputé pour la durabilité de ses mécanismes et la précision de ses finitions.</li>
</ul>
<p>Pour un comparatif détaillé des marques, consulter notre article : <a href="/blog/marques-salle-de-bain-aubade-alterna-grohe">Aubade, Alterna, Grohe : les marques que nous installons</a>.</p>

<h2>Le budget à prévoir</h2>
<p>Une salle de bain de 6 à 8 m² rénovée clé en main représente en général un investissement entre 8 000 et 18 000 € selon le niveau de finition et les équipements choisis. L'écart entre le bas et le haut de la fourchette tient principalement aux choix de matériaux (carrelage, mobilier, robinetterie) et à la complexité des travaux de plomberie.</p>
<p>Budget détaillé poste par poste : <a href="/blog/salle-de-bain-cle-en-main-budget">Salle de bain clé en main : à quoi s'attendre côté budget ?</a></p>

<h2>Pourquoi choisir le clé en main plutôt que de tout coordonner soi-même</h2>
<p>Coordonner soi-même sa rénovation de salle de bain, c'est gérer plusieurs artisans avec des disponibilités différentes, risquer des délais d'attente entre les corps de métier, et porter la responsabilité des éventuels problèmes d'interface (carreleur qui attend le plombier, plombier qui revient après le carreleur).</p>
<p>Avec la formule clé en main, vous avez un seul interlocuteur, un seul devis et un seul responsable. Si quelque chose ne va pas, vous appelez une seule personne. Ce confort a une valeur réelle, surtout pour un projet qui implique la seule salle de bain de la maison.</p>
<p class="gm-pullquote">Une salle de bain en travaux, c'est une contrainte quotidienne. Moins c'est long, mieux c'est.<br>Notre objectif est : un chantier propre, des délais tenus et un résultat à la hauteur de ce qu'on vous a présenté.</p>

<h2>Le Groupe Merlin dans la Nièvre et l'Yonne</h2>
<p>Nos équipes interviennent sur l'ensemble de la Nièvre (58) et de l'Yonne (89). Nous avons deux agences — Clamecy et Corbigny — qui couvrent la totalité des deux départements.</p>
<p>Pour démarrer votre projet : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Nous nous déplaçons chez vous, mesurons votre espace et vous remettons un plan et un devis complets.</p>
<p>Pour les questions de plomberie urgente : <a href="/blog/depannage-plomberie-salle-de-bain">Fuite, canalisation bouchée : nos interventions en plomberie</a>.</p>
`,
  },

  {
    slug: "etapes-renovation-salle-de-bain",
    title: "Les étapes d'une rénovation de salle de bain clé en main",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "etapes-renovation-salle-de-bain.jpg",
    imgDir: "blog",
    excerpt:
      "De la visite de conception à la réception du chantier : les 6 étapes d'une rénovation de salle de bain clé en main, ce qui se passe et combien de temps ça dure.",
    body: `

<p>La plupart des projets de rénovation de salle de bain se passent mal pour une raison simple : personne ne sait précisément ce qui va se passer et dans quel ordre. Voici les étapes d'un projet clé en main tel qu'on le conduit chez Groupe Merlin, pour que vous sachiez exactement à quoi vous attendre.</p>

<h2>Étape 1 — La visite de conception (gratuite)</h2>
<p>Tout commence par une visite à votre domicile. Nous venons mesurer votre salle de bain, observer les contraintes techniques (emplacement des évacuations, position des arrivées d'eau, hauteur sous plafond, murs porteurs), et surtout vous écouter sur votre usage quotidien.</p>
<p>Quelques questions utiles à préparer avant la visite :</p>
<ul class="gm-checklist">
  <li>Voulez-vous une douche, une baignoire, ou les deux ?</li>
  <li>Combien de personnes utilisent cette salle de bain quotidiennement ?</li>
  <li>Avez-vous des contraintes d'accessibilité (seniors, PMR) ?</li>
  <li>Quelle ambiance souhaitez-vous (contemporaine, classique, épurée) ?</li>
  <li>Quel est votre budget global ?</li>
</ul>
<p>À l'issue de la visite, nous avons toutes les informations pour concevoir votre projet.</p>

<h2>Étape 2 — Le plan et le devis</h2>
<p>Sur la base de la visite, nous vous préparons un plan d'aménagement avec le positionnement de chaque équipement, une sélection de matériaux adaptés à vos envies et à votre budget, et un devis détaillé poste par poste.</p>
<p>Ce devis distingue clairement :</p>
<ul class="gm-checklist">
  <li>Les équipements (receveur de douche, meuble vasque, WC, robinetterie, carrelage).</li>
  <li>La main d'œuvre (dépose, plomberie, carrelage, électricité si concernée, finitions).</li>
  <li>Les éventuels travaux de modification du réseau (déplacement d'évacuation, ajout d'une arrivée d'eau).</li>
</ul>
<p>Vous pouvez faire des allers-retours sur les choix de matériaux : c'est à cette étape qu'on ajuste jusqu'à ce que le projet corresponde exactement à ce que vous souhaitez, dans votre budget.</p>

<h2>Étape 3 — La commande et la planification</h2>
<p>Une fois le devis signé, nous commandons les équipements et planifions le chantier. Les délais de livraison des équipements (notamment Aubade, qui fabrique en France) peuvent prendre 3 à 6 semaines. Nous calons la date de début de chantier en fonction de la disponibilité de vos équipements.</p>

<h2>Étape 4 — La démolition et la plomberie</h2>
<p>C'est la phase la plus bruyante et la plus invasive. Nos équipes déposent l'ancienne salle de bain (démolition du carrelage mural et sol, dépose des équipements, décaissement éventuel pour une douche à l'italienne), puis réalisent les modifications de réseau et les nouvelles installations de plomberie.</p>
<p>La douche à l'italienne nécessite un travail particulier à cette étape : création du recueil, pose de l'étanchéité (système d'imperméabilisation des supports — SIS), mise en pente correcte vers la bonde. C'est une étape technique qui conditionne l'absence de fuites pour les 15-20 prochaines années.</p>

<h2>Étape 5 — Le carrelage et la pose des équipements</h2>
<p>Une fois la plomberie en place et contrôlée, le carrelage est posé (sol et murs). C'est l'étape qui prend le plus de temps et qui donne l'aspect final à votre salle de bain. Puis viennent la pose du meuble vasque, de la robinetterie, du WC, des parois de douche et des accessoires.</p>
<p>Si des travaux électriques sont nécessaires (déplacement d'une prise, ajout d'un spot étanche, raccordement d'un sèche-serviette), ils sont réalisés par un électricien coordonné par nos soins à cette étape.</p>

<h2>Étape 6 — Les finitions et la réception</h2>
<p>Joints de finition, silicone, raccords, nettoyage du chantier : les finitions demandent du soin et du temps. À l'issue, nous vous présentons le chantier terminé, pièce par pièce, et vous remettons les garanties des équipements installés.</p>
<p>Si quelque chose ne vous convient pas visuellement ou techniquement lors de la réception, c'est le moment de le dire. Notre engagement : vous remettez une salle de bain conforme à ce qui a été présenté dans le devis et le plan.</p>

<table class="gm-compare">
<thead><tr><th>Étape</th><th>Durée approximative</th><th>Votre rôle</th></tr></thead>
<tbody>
<tr><td>Visite + conception</td><td>1 visite + 1 semaine</td><td>Présent lors de la visite, validez le plan</td></tr>
<tr><td>Devis + commande</td><td>1-2 semaines</td><td>Signez le devis, choisissez les matériaux</td></tr>
<tr><td>Livraison équipements</td><td>3-6 semaines</td><td>Rien — on gère</td></tr>
<tr><td>Démolition + plomberie</td><td>2-4 jours</td><td>Accès au logement</td></tr>
<tr><td>Carrelage + pose équipements</td><td>5-8 jours</td><td>Accès au logement</td></tr>
<tr><td>Finitions + réception</td><td>1-2 jours</td><td>Présent à la réception</td></tr>
</tbody>
</table>

<p>Pour démarrer votre projet : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour le budget : <a href="/blog/salle-de-bain-cle-en-main-budget">Salle de bain clé en main : à quoi s'attendre côté budget ?</a> Guide complet : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>.</p>
`,
  },

  {
    slug: "douche-italienne-installation",
    title: "Douche à l'italienne : tout savoir avant de vous lancer",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "douche-italienne-installation.jpg",
    imgDir: "blog",
    excerpt:
      "Douche à l'italienne : contraintes techniques, types de bonde, étanchéité, prix et ce qui fait la différence entre une installation réussie et une qui fuit. Tout ce qu'il faut savoir avant de se décider.",
    body: `

<p>La douche à l'italienne est devenue l'élément le plus demandé dans les rénovations de salle de bain. Son succès tient à sa facilité d'entretien, son accessibilité et l'espace visuel qu'elle dégage. Mais c'est aussi l'élément qui génère le plus de problèmes quand il est mal installé. Voici ce qu'il faut savoir avant de vous décider.</p>

<h2>Qu'est-ce qu'une douche à l'italienne exactement ?</h2>
<p>Une douche à l'italienne, ou douche de plain-pied, est une douche sans receveur surélevé et sans seuil de retenue. Le sol de la salle de bain descend en légère pente vers une bonde d'évacuation. Il n'y a rien à enjamber pour entrer sous l'eau.</p>
<p>Ce type d'installation nécessite :</p>
<ul class="gm-checklist">
  <li><strong>Un décaissement du sol</strong> pour créer la dépression nécessaire à la pente d'écoulement (généralement 5 à 8 cm selon la configuration).</li>
  <li><strong>Une étanchéité parfaite</strong> du fond et des relevés muraux sur au moins 15 cm de hauteur.</li>
  <li><strong>Une pente calibrée</strong> vers la bonde (entre 1 et 2 % selon la surface).</li>
  <li><strong>Une bonde adaptée</strong> : centrale, linéaire ou au ras du mur.</li>
</ul>

<h2>Les types de bondes : centrale, linéaire, murale</h2>

<table class="gm-compare">
<thead><tr><th>Type de bonde</th><th>Esthétique</th><th>Contraintes techniques</th><th>Entretien</th></tr></thead>
<tbody>
<tr><td>Centrale (ronde ou carrée)</td><td>Classique, discrète sous carrelage</td><td>Pente 4 directions depuis la bonde</td><td>Nettoyage facile</td></tr>
<tr><td>Linéaire (caniveau)</td><td>Design contemporain, visible et décorative</td><td>Pente dans une seule direction, plus simple à careler</td><td>Démontage du caniveau pour nettoyage</td></tr>
<tr><td>Murale (bonde cachée)</td><td>Sol totalement lisse, invisible</td><td>Bonde intégrée dans la cloison, accès limité en cas de problème</td><td>Plus complexe à entretenir</td></tr>
</tbody>
</table>

<p>Chez Groupe Merlin, nous privilégions la bonde linéaire ou centrale selon la configuration de votre salle de bain et vos préférences esthétiques. La bonde murale est possible mais déconseillée si l'accès à la canalisation est difficile.</p>

<h2>L'étanchéité : l'étape qui fait tout</h2>
<p>C'est la partie la moins visible et la plus importante. Une douche à l'italienne dont l'étanchéité est insuffisante laissera passer l'eau derrière le carrelage, dans la dalle et potentiellement chez votre voisin du dessous si vous êtes en appartement.</p>
<p>Le système d'imperméabilisation des supports (SIS) est appliqué avant le carrelage sur le fond et les relevés muraux. Il existe deux techniques principales : les membranes en bande + enduit étanche, et les bacs à douche à carreler pré-formés (type Wedi ou Schlüter). Dans tous les cas, la qualité de la mise en œuvre prime sur la qualité du produit.</p>
<p class="gm-pullquote">On ne voit pas l'étanchéité une fois le carrelage posé. C'est pour ça qu'elle est souvent bâclée. Notre règle : on prend autant de soin sur ce qu'on ne voit pas que sur ce qu'on voit.</p>

<h2>La douche à l'italienne dans un appartement</h2>
<p>Dans un appartement, la création d'une douche à l'italienne nécessite de vérifier que la dalle peut être décaissée (épaisseur suffisante, absence de gaines techniques en dessous). Un diagnostic technique préalable est indispensable. Dans certains cas, des solutions techniques sans décaissement existent (receveur extra-plat à hauteur de sol).</p>

<h2>La douche à l'italienne pour les seniors</h2>
<p>L'absence de seuil rend la douche à l'italienne particulièrement adaptée aux personnes à mobilité réduite ou aux seniors souhaitant anticiper. Dans ce cadre, des aides peuvent être mobilisées (MaPrimeRénov' Sérénité ou aides de l'Anah pour l'adaptation du logement au vieillissement), sous conditions. Contactez-nous pour vérifier votre éligibilité.</p>

<h2>Prix d'une douche à l'italienne installée</h2>
<p>Le coût d'une douche à l'italienne installée (décaissement, étanchéité, bonde, carrelage sol et murs de la zone douche) se situe entre 2 500 et 5 000 € selon la surface, le choix du carrelage et la complexité du décaissement. Ce montant s'intègre dans le budget global de rénovation de votre salle de bain.</p>
<p>Pour l'ensemble du budget salle de bain : <a href="/blog/salle-de-bain-cle-en-main-budget">Salle de bain clé en main : à quoi s'attendre côté budget ?</a></p>
<p>Pour démarrer votre projet : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour tout comprendre sur les étapes : <a href="/blog/etapes-renovation-salle-de-bain">Les étapes d'une rénovation de salle de bain clé en main</a>. Guide : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>.</p>
`,
  },

  {
    slug: "marques-salle-de-bain-aubade-alterna-grohe",
    title: "Aubade, Alterna, Grohe : les marques que nous installons dans vos salles de bain",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "marques-salle-de-bain-aubade-alterna-grohe.jpg",
    imgDir: "blog",
    excerpt:
      "Aubade, Alterna, Grohe : pourquoi nous travaillons avec ces trois marques, ce qu'elles apportent et comment nous les choisissons selon votre projet et votre budget.",
    body: `

<p>Le choix des marques dans une salle de bain, c'est le choix d'équipements qu'on utilise deux fois par jour pendant 15 ans. On ne change pas de salle de bain tous les cinq ans. Ce critère de durabilité guide notre sélection.</p>
<p>Voici pourquoi nous avons retenu Aubade, Alterna et Grohe, et ce que chacune apporte dans votre projet.</p>

<h2>Aubade : la référence française du sanitaire</h2>
<p>Aubade est une entreprise française fondée en 1947. Elle est implantée à Mauges-sur-Loire (Maine-et-Loire) et fabrique la quasi-totalité de ses produits en France. C'est une référence reconnue chez les plombiers et carreleurs professionnels pour la qualité de ses céramiques et la solidité de ses meubles vasques.</p>
<ul class="gm-checklist">
  <li><strong>Céramiques sanitaires</strong> : WC, vasques, bidets — fabrication française, faïence de haute densité, émaillage résistant aux chocs et aux taches.</li>
  <li><strong>Mobilier de salle de bain</strong> : meubles vasques, colonnes, miroirs — gamme contemporaine et classique, grandes largeurs disponibles pour les doubles vasques.</li>
  <li><strong>Accessoires</strong> : porte-serviettes, barres, distributeurs — disponibles pour compléter un ensemble cohérent.</li>
  <li><strong>Gammes</strong> : d'entrée de gamme (Odéon Up, Start) à haut de gamme (Struktura, Eras) pour s'adapter à tous les budgets.</li>
</ul>
<p>Nous recommandons Aubade en priorité pour les projets où la durabilité et la qualité de fabrication priment. C'est la marque que nous mettons dans les salles de bain qu'on ne voudra pas rénover avant 20 ans.</p>

<h2>Alterna : la polyvalence sur le receveur et le carrelage</h2>
<p>Alterna est notre marque de référence pour les receveurs de douche, les parois et les carrelages de format standard. Elle offre un excellent rapport qualité-prix avec une gamme étendue de formats, de finitions et de couleurs.</p>
<ul class="gm-checklist">
  <li><strong>Receveurs de douche</strong> : extra-plats, résine, acrylique — largeur de choix de 70×70 cm à 120×90 cm et plus. Finition antidérapante sur demande.</li>
  <li><strong>Parois et cabines</strong> : parois pivotantes, coulissantes, fixes — profils aluminium, verre trempé.</li>
  <li><strong>Carrelages</strong> : larges formats, effets béton, marbre ou bois — pour les sols et les murs.</li>
</ul>
<p>Alterna est notre choix préférentiel pour les projets où le budget est maîtrisé sans sacrifier la qualité visuelle. Elle nous permet de proposer de beaux rendus à des prix accessibles.</p>

<h2>Grohe : la robinetterie qui dure</h2>
<p>Grohe est une marque allemande fondée en 1936. C'est une des références mondiales de la robinetterie haut de gamme. La qualité des mécanismes Grohe (cartouches céramiques, mitigeurs thermostatiques) justifie leur prix : on n'y touche généralement pas avant 15-20 ans.</p>
<ul class="gm-checklist">
  <li><strong>Robinetterie vasque et baignoire</strong> : mitigeurs, monotrous, becs verseurs — gamme Essence, Eurostyle, Lineare.</li>
  <li><strong>Systèmes de douche</strong> : colonnes de douche, têtes de douche, douchettes — du basique au thermostatique avec tête de douche à effet pluie.</li>
  <li><strong>Mitigeurs thermostatiques</strong> : règlent automatiquement la température de l'eau, très appréciés pour les douches partagées (enfants, seniors).</li>
  <li><strong>Garantie</strong> : les produits Grohe sont garantis 5 ans en standard, certains jusqu'à 10 ans.</li>
</ul>
<p>Grohe est notre marque par défaut pour la robinetterie. Le surcoût par rapport à des robinets d'entrée de gamme se justifie entièrement sur la durée : une cartouche qui ne fuit pas pendant 15 ans, ça évite de retoucher à l'installation.</p>

<h2>Comment on choisit pour vous</h2>
<p>Lors du rendez-vous de conception, nous vous montrons des échantillons et des références de réalisations avec chacune de ces marques. Nous ajustons la sélection à votre budget : il est tout à fait possible de combiner un mobilier Aubade avec une robinetterie Grohe et un receveur Alterna pour optimiser le budget total.</p>
<p>Pour voir l'ensemble du processus : <a href="/blog/etapes-renovation-salle-de-bain">Les étapes d'une rénovation de salle de bain</a>. Pour le budget : <a href="/blog/salle-de-bain-cle-en-main-budget">Budget salle de bain clé en main</a>. Pour démarrer : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>.</p>
`,
  },

  {
    slug: "petite-salle-de-bain-amenagement",
    title: "Petite salle de bain : nos conseils pour optimiser chaque mètre carré",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "petite-salle-de-bain-amenagement.jpg",
    imgDir: "blog",
    excerpt:
      "Salle de bain de moins de 5 m² : comment gagner de l'espace, quels équipements choisir et les erreurs à éviter. Nos conseils pour un résultat fonctionnel et esthétique dans un espace contraint.",
    body: `

<p>Une petite salle de bain est souvent perçue comme une contrainte. En réalité, c'est un défi de conception qui s'adore quand il est bien résolu. L'objectif : que chaque centimètre soit pensé, que rien ne gêne et que l'espace semble plus grand qu'il n'est.</p>

<h2>Les équipements qui libèrent de l'espace</h2>

<h3>Le WC suspendu</h3>
<p>Un WC suspendu libère 20 à 25 cm au sol par rapport à un WC classique. Ce dégagement au niveau du sol fait visuellement beaucoup : il allonge la perspective et facilite l'entretien. La bâti-support se pose dans la cloison ou contre un mur renforcé. C'est une installation légèrement plus complexe qu'un WC posé, mais le gain d'espace est immédiat.</p>

<h3>Le meuble vasque suspendu</h3>
<p>Un meuble vasque suspendu (sans pied au sol) produit le même effet que le WC suspendu : le sol est visible sous le meuble, ce qui agrandit visuellement la pièce. En plus, le sol est plus facile à nettoyer. À partir de 45 cm de profondeur, un meuble vasque suspendu peut accueillir une vasque à encastrer ou à poser.</p>

<h3>La colonne de douche plutôt que la baignoire</h3>
<p>Dans une salle de bain de moins de 5 m², une baignoire occupe en général entre 1,5 et 1,7 m². Une douche à l'italienne de 80×80 cm ou 90×90 cm en occupe entre 0,64 et 0,81 m². Le gain de surface est réel et peut changer complètement la sensation d'espace dans la pièce.</p>
<p>Si vous tenez à une baignoire pour les enfants ou pour vous, une baignoire îlot (60×100 cm) ou une baignoire d'angle peut être une solution dans certaines configurations.</p>

<h2>Les astuces visuelles qui agrandissent</h2>
<ul class="gm-checklist">
  <li><strong>Grands formats de carrelage</strong> : un carreau de 60×60 cm fait paraître l'espace plus grand qu'un carreau de 20×20 cm, car il y a moins de joints et donc moins de "coupures visuelles". En petite salle de bain, on privilégie les formats à partir de 45×45 cm.</li>
  <li><strong>Couleurs claires</strong> : blanc, gris clair, beige — ils réfléchissent la lumière et reculent les murs visuellement. Les couleurs sombres sont possibles si elles sont utilisées comme accent sur un seul mur.</li>
  <li><strong>Miroir large</strong> : un miroir qui court sur toute la largeur du mur au-dessus du meuble vasque double visuellement la profondeur perçue.</li>
  <li><strong>Éclairage indirect</strong> : une niche lumineuse, des spots encastrés ou un éclairage LED derrière le miroir évitent les ombres dures qui rapetissent l'espace.</li>
  <li><strong>Rangements intégrés</strong> : niches murales dans la douche, colonne de rangement entre meuble et plafond, étagères flottantes — tout ce qui range sans occuper l'espace de circulation.</li>
</ul>

<h2>Les erreurs à éviter dans une petite salle de bain</h2>
<ul class="gm-checklist">
  <li><strong>Choisir une porte battante</strong> : une porte battante mobilise l'espace devant elle. En petite salle de bain, préférez une porte coulissante ou une porte escamotable dans la cloison.</li>
  <li><strong>Multiplier les couleurs et les matériaux</strong> : deux, maximum trois couleurs ou matières distinctes. Au-delà, l'espace devient visuellement agité et semble encore plus petit.</li>
  <li><strong>Négliger la ventilation</strong> : une petite salle de bain qui ventile mal accumule l'humidité et favorise la moisissure. Un VMC (ventilation mécanique contrôlée) ou une grille de ventilation correctement dimensionnée est indispensable.</li>
</ul>

<p class="gm-pullquote">Une salle de bain de 3 m² bien conçue peut être plus agréable à utiliser qu'une salle de bain de 6 m² mal pensée. La surface compte moins que l'organisation et la qualité de réalisation.</p>

<h2>Ce qu'on vous propose dans ce contexte</h2>
<p>Lors de notre visite, nous réalisons un plan d'aménagement optimisé en fonction de votre configuration réelle. Nous vous montrons plusieurs options et vous expliquons les gains concrets de chaque choix d'équipement. L'objectif : que votre petite salle de bain soit fonctionnelle, belle et facile à entretenir.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Guide complet : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>. Pour la douche à l'italienne : <a href="/blog/douche-italienne-installation">Douche à l'italienne : tout savoir avant de vous lancer</a>.</p>
`,
  },

  {
    slug: "depannage-plomberie-salle-de-bain",
    title: "Fuite, canalisation bouchée : nos interventions en plomberie",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "depannage-plomberie-salle-de-bain.jpg",
    imgDir: "blog",
    excerpt:
      "Fuite d'eau, canalisation bouchée, robinet qui goutte, chasse d'eau défaillante : nos interventions en plomberie dans la Nièvre et l'Yonne, 48 h après votre appel.",
    body: `

<p>Un problème de plomberie, ça n'attend pas. Une fuite qui continue pendant 24 heures peut causer des dégâts importants dans les murs, le sol et potentiellement chez votre voisin. Voici les situations courantes et ce que nous faisons.</p>

<h2>Que faire en cas de fuite d'eau avant notre arrivée</h2>
<p>Première chose : <strong>couper l'eau au robinet d'arrêt de la pièce concernée</strong> (sous l'évier, derrière les WC, sous la baignoire). Si vous ne trouvez pas le robinet d'arrêt local, coupez l'eau générale au compteur. Cela stoppe les dégâts en attendant notre intervention.</p>
<p>Ensuite, si l'eau a coulé sur un plancher bois ou derrière un mur, aérez la pièce et absorbez ce qui est accessible. Plus vite la zone sèche, moins les dégâts sont importants.</p>

<h2>Les interventions courantes</h2>

<table class="gm-compare">
<thead><tr><th>Problème</th><th>Cause fréquente</th><th>Intervention</th></tr></thead>
<tbody>
<tr><td>Fuite robinet (goutte à goutte)</td><td>Joint de céramique usé, cartouche défaillante</td><td>Remplacement cartouche ou joint</td></tr>
<tr><td>Fuite sous évier ou vasque</td><td>Joint de raccord dégradé, siphon fissuré</td><td>Remplacement siphon ou raccords</td></tr>
<tr><td>Canalisation bouchée</td><td>Accumulation de graisses, cheveux, calcaire</td><td>Débouchage mécanique ou haute pression</td></tr>
<tr><td>Chasse d'eau défaillante</td><td>Mécanisme de chasse usé, flotteur défaillant</td><td>Remplacement mécanisme de chasse</td></tr>
<tr><td>Fuite après carrelage (douche)</td><td>Étanchéité insuffisante, joint de finition décollé</td><td>Diagnostic + reprise étanchéité</td></tr>
<tr><td>Pression d'eau insuffisante</td><td>Réducteur de pression mal réglé, entartrage</td><td>Contrôle et réglage ou remplacement</td></tr>
</tbody>
</table>

<h2>Le cas des fuites derrière le carrelage</h2>
<p>C'est la situation la plus délicate. Une fuite derrière le carrelage se manifeste souvent par une tache humide sur le mur, une auréole qui réapparaît après séchage, ou une odeur de moisissure persistante. Dans ce cas, le diagnostic est plus complexe : il faut localiser précisément la fuite avant d'intervenir.</p>
<p>Selon la localisation, l'intervention peut nécessiter la dépose de quelques carreaux, la réparation de l'étanchéité ou d'un raccord de plomberie, et la repose. C'est une intervention soignée que nous faisons en veillant à minimiser la casse carrelage.</p>

<h2>Canalisation bouchée : ne pas attendre</h2>
<p>Un lavabo ou une douche qui évacue mal annonce un bouchon en formation. Plus on attend, plus le bouchon se solidifie (graisses + cheveux + calcaire = bloc difficile à déloger). Un débouchage préventif à temps évite un débouchage d'urgence beaucoup plus laborieux.</p>
<p class="gm-pullquote">Dans la Nièvre, l'eau est calcaire. Cette dureté accélère l'entartrage des canalisations et des robinets. Un adoucisseur d'eau est souvent la solution à long terme pour réduire ces problèmes.</p>

<h2>Nos interventions dans la Nièvre et l'Yonne</h2>
<p>Nos équipes interviennent sur toutes les situations de plomberie dans la Nièvre (58) et l'Yonne (89), dans un délai maximal de 48 heures après votre appel. En cas de fuite active, nous priorisons l'intervention.</p>
<p>Pour une urgence ou une intervention : <a href="/contact"><strong>contactez-nous</strong></a>. Pour un projet de rénovation complète : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>.</p>
<p>À savoir : l'eau de la Nièvre est particulièrement calcaire, ce qui accélère l'usure des robinets et l'entartrage des canalisations. Un adoucisseur d'eau peut résoudre ces problèmes à la source. <a href="/expertises/adoucisseur">En savoir plus sur nos adoucisseurs</a>.</p>
`,
  },

  {
    slug: "renovation-salle-de-bain-nievre",
    title: "Rénovation de salle de bain dans la Nièvre et l'Yonne : ce qu'il faut savoir",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "renovation-salle-de-bain-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Vous cherchez un artisan pour rénover votre salle de bain dans la Nièvre (58) ou l'Yonne (89) ? Voici ce qui spécifie les chantiers dans ces deux départements et comment choisir le bon professionnel.",
    body: `

<p>Rénover une salle de bain dans la Nièvre ou l'Yonne, c'est souvent travailler dans un bâti ancien : maisons en pierre du Morvan, longères nivernaises, fermettes de l'Yonne. Ces constructions ont des caractéristiques spécifiques qui influencent la façon de concevoir et de réaliser les travaux.</p>

<h2>Le bâti ancien nivernais : ce que ça change pour votre salle de bain</h2>
<ul class="gm-checklist">
  <li><strong>Murs en pierre épais</strong> : la fixation des équipements (meuble suspendu, WC suspendu, bâti-support) nécessite des chevilles adaptées aux maçonneries anciennes. Les cloisons en plâtre ou en lambris sont rares, les murs porteurs nombreux — un diagnostic avant de percer est indispensable.</li>
  <li><strong>Planchers bois</strong> : un plancher bois ancien n'est pas aussi rigide qu'une dalle béton. La pose d'un carrelage lourd nécessite une vérification de la portance et parfois une consolidation. Une douche à l'italienne peut nécessiter une intervention sur la structure.</li>
  <li><strong>Réseaux existants souvent anciens</strong> : les tuyauteries en plomb (très fréquentes dans les logements construits avant 1950) doivent être remplacées lors d'une rénovation de salle de bain. C'est une obligation sanitaire, pas une option.</li>
  <li><strong>Humidité remontante</strong> : les maisons anciennes en pierre sans vide sanitaire sont parfois soumises à des remontées capillaires. Un diagnostic des murs avant la pose du carrelage permet d'éviter de recouvrir un problème structurel.</li>
</ul>

<h2>L'eau calcaire dans la Nièvre : un paramètre à intégrer</h2>
<p>La majorité du département de la Nièvre est alimentée par une eau calcaire (titre hydrotimétrique souvent supérieur à 25-30°f). Cette dureté de l'eau a des conséquences directes sur votre salle de bain :</p>
<ul class="gm-checklist">
  <li><strong>Entartrage de la robinetterie</strong> : les aérateurs, les pommes de douche et les mitigeurs s'entartrent plus vite avec une eau dure. Grohe propose des systèmes anti-calcaire (billes silicone) sur certaines têtes de douche, ce qui réduit le problème à la source.</li>
  <li><strong>Traces blanches sur le carrelage et le verre</strong> : les parois de douche et le carrelage nécessitent un entretien plus régulier pour éviter les dépôts calcaires.</li>
  <li><strong>Usure prématurée des joints</strong> : le calcaire fragilise les joints de silicone sur la durée.</li>
</ul>
<p>La solution à long terme est un adoucisseur d'eau : il traite l'eau à l'entrée du logement et élimine le calcaire pour toute l'installation. <a href="/expertises/adoucisseur">Découvrez nos solutions adoucisseur</a>.</p>

<h2>Trouver un professionnel de confiance dans la Nièvre</h2>
<p>La Nièvre et l'Yonne sont deux départements ruraux où les artisans sont moins nombreux qu'en zone urbaine. Quelques critères pour bien choisir :</p>
<ul class="gm-checklist">
  <li><strong>Visite préalable systématique</strong> : un artisan qui fait un devis à distance (par téléphone ou sans se déplacer) ne peut pas évaluer correctement les contraintes de votre logement. Méfiez-vous des devis établis sans visite.</li>
  <li><strong>Devis détaillé poste par poste</strong> : équipements, main d'œuvre, modifications réseau — tout doit être distingué. Un devis "forfait salle de bain" sans détail est un drapeau rouge.</li>
  <li><strong>Un seul interlocuteur</strong> : coordonner soi-même carreleur, plombier et électricien dans un département rural, avec les délais d'attente de chaque artisan, c'est un risque de chantier qui dure 4 mois au lieu d'un.</li>
  <li><strong>Garantie décennale</strong> : vérifiez que l'artisan est couvert par une assurance décennale pour les travaux d'étanchéité et les modifications de réseau.</li>
</ul>

<h2>Groupe Merlin dans la Nièvre et l'Yonne</h2>
<p>Nos deux agences de Clamecy et Corbigny couvrent l'ensemble des deux départements. Nos équipes connaissent le bâti local, ses contraintes et ses spécificités. Nous avons réalisé des projets dans des maisons en pierre du Morvan, des fermettes de la plaine nivernaise et des maisons de village de l'Yonne.</p>
<p>Nous nous déplaçons gratuitement chez vous pour la visite de conception. Le déplacement n'est jamais facturé dans les deux départements.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour tout comprendre sur le clé en main : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>. Pour le budget : <a href="/blog/salle-de-bain-cle-en-main-budget">Budget salle de bain clé en main</a>.</p>
`,
  },

  {
    slug: "salle-de-bain-cle-en-main-budget",
    title: "Salle de bain clé en main : à quoi s'attendre côté budget ?",
    category: "Conseils",
    cocon: "plomberie-salle-de-bain",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "salle-de-bain-cle-en-main-budget.jpg",
    imgDir: "blog",
    excerpt:
      "Budget salle de bain clé en main : fourchettes selon la taille et le niveau de finition, postes de dépense détaillés et pourquoi les prix varient autant d'un devis à l'autre.",
    body: `

<p>Le budget d'une salle de bain est souvent une source de surprise désagréable. Soit on sous-estime le projet et on se retrouve à devoir arbitrer en cours de chantier, soit on reçoit un devis beaucoup plus élevé que prévu. Voici comment comprendre ce qui détermine le prix et comment anticiper correctement.</p>

<h2>Fourchettes par taille de salle de bain</h2>

<table class="gm-compare">
<thead><tr><th>Surface</th><th>Niveau standard</th><th>Niveau confort</th><th>Niveau premium</th></tr></thead>
<tbody>
<tr><td>Petite (< 4 m²)</td><td>5 000 – 8 000 €</td><td>8 000 – 12 000 €</td><td>12 000 – 16 000 €</td></tr>
<tr><td>Moyenne (4-7 m²)</td><td>7 000 – 12 000 €</td><td>12 000 – 16 000 €</td><td>16 000 – 22 000 €</td></tr>
<tr><td>Grande (> 7 m²)</td><td>10 000 – 15 000 €</td><td>15 000 – 22 000 €</td><td>22 000 – 30 000 €</td></tr>
</tbody>
</table>

<p>Ces fourchettes incluent la dépose de l'existant, la plomberie, le carrelage sol et murs, les équipements sanitaires (douche ou baignoire, vasque, WC, robinetterie) et la main d'œuvre complète. Elles excluent les travaux électriques non liés à la salle de bain (tableau, gros œuvre).</p>

<h2>Les 4 postes de dépense à distinguer</h2>

<h3>1. Les équipements sanitaires</h3>
<p>Receveur de douche ou baignoire, meuble vasque, WC, robinetterie, paroi de douche, sèche-serviette. C'est le poste le plus visible et le plus facilement variable. La différence entre une vasque Aubade entrée de gamme et un modèle haut de gamme peut être de 300 à 1 500 €. La robinetterie Grohe représente un surcoût de 200 à 600 € par rapport à de l'entrée de gamme, mais dure 3 fois plus longtemps.</p>

<h3>2. La plomberie</h3>
<p>Dépose des tuyauteries existantes, remplacement si nécessaire (tuyaux plomb obligatoirement remplacés), nouvelles alimentations et évacuations, raccordements. Ce poste varie peu selon le niveau de finition — c'est surtout la complexité du réseau existant et les éventuelles modifications qui font varier le prix. Comptez entre 1 500 et 4 000 € selon la complexité.</p>

<h3>3. Le carrelage</h3>
<p>C'est le poste qui peut le plus faire varier le budget total. Un carrelage standard en 30×60 cm coûte 15 à 30 € le m². Un grand format rectifié (60×120 cm, effet marbre ou béton) coûte 60 à 150 € le m² et plus. La pose du carrelage représente 40 à 70 € le m² de main d'œuvre selon la complexité (découpes, formats). Pour une salle de bain de 6 m² avec murs carrelés sur 2 m de hauteur, la surface totale à carreler est d'environ 25 à 35 m².</p>

<h3>4. La main d'œuvre de coordination</h3>
<p>Dans une formule clé en main, la main d'œuvre inclut la coordination entre les intervenants, le suivi de chantier et la garantie du résultat. C'est ce qui justifie le fait qu'un devis clé en main soit légèrement supérieur à la somme des devis artisan par artisan : vous payez la garantie que tout s'enchaîne dans les délais et que vous n'êtes pas le lien entre les intervenants.</p>

<h2>Ce qui fait vraiment varier les prix</h2>
<ul class="gm-checklist">
  <li><strong>Le choix du carrelage</strong> : c'est le levier le plus fort. Opter pour un carrelage à 80 €/m² au lieu de 25 €/m² sur 30 m² représente 1 650 € de différence sur les seuls matériaux.</li>
  <li><strong>La douche à l'italienne vs receveur à poser</strong> : une douche à l'italienne nécessite un décaissement et une étanchéité spécifique (+ 800 à 1 500 € par rapport à un receveur à poser).</li>
  <li><strong>Les modifications de réseau</strong> : déplacer un WC ou déplacer une douche vers un autre mur implique des modifications de réseau qui peuvent coûter 500 à 2 000 € supplémentaires.</li>
  <li><strong>Le remplacement des tuyaux plomb</strong> : si votre logement est ancien (avant 1950), les canalisations en plomb doivent être remplacées lors de la rénovation. Ce remplacement représente un surcoût de 1 000 à 3 000 € selon la configuration.</li>
</ul>

<h2>Comment lire un devis de salle de bain</h2>
<p>Exigez un devis qui distingue clairement les équipements de la main d'œuvre, et qui détaille chaque équipement (marque, modèle, référence). Un devis "forfait salle de bain" sans détail ne vous permet pas de comparer et ne vous protège pas si quelque chose manque à la livraison.</p>
<p>Pour démarrer votre estimation : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour les étapes du projet : <a href="/blog/etapes-renovation-salle-de-bain">Les étapes d'une rénovation de salle de bain clé en main</a>. Pour les marques : <a href="/blog/marques-salle-de-bain-aubade-alterna-grohe">Aubade, Alterna, Grohe : nos marques partenaires</a>. Guide : <a href="/blog/salle-de-bain-guide-complet">Guide salle de bain clé en main dans la Nièvre</a>.</p>
`,
  },
  // ─── COCON : ADOUCISSEUR & EAU DE BOISSON ────────────────────────────────────

  {
    slug: "adoucisseur-guide-complet",
    title: `Adoucisseur d'eau dans la Nièvre et l'Yonne : le guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "adoucisseur",
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "detail-adoucisseur.jpg",
    imgDir: "expertises",
    excerpt:
      "L'eau calcaire de la Nièvre abîme vos équipements et altère le goût de votre eau. Adoucisseur BWT PerlaMaxx OPTI et eau de boisson filtrée MIXXO PRO : tout comprendre avant de décider.",
    body: `
<p>Dans la Nièvre et l'Yonne, l'eau du robinet est souvent calcaire. Ce calcaire n'est pas dangereux pour la santé, mais il laisse des traces blanches sur vos appareils, réduit l'efficacité de votre chauffe-eau et use prématurément vos équipements sanitaires. En parallèle, beaucoup de familles achètent encore de l'eau en bouteille parce qu'elles n'apprécient pas le goût de leur eau du robinet.</p>
<p>Deux solutions répondent à ces deux problèmes, et elles se cumulent. Voici ce que vous devez savoir pour votre eau.</p>

<h2>Comprendre l'eau calcaire : pourquoi c'est un problème</h2>
<p>Le calcaire dans l'eau, c'est du carbonate de calcium et de magnésium dissous. Il est invisible à l'œil nu quand l'eau est froide, mais il précipite dès qu'il est chauffé. C'est ce qui crée ce que l'on appelle de l'entartrage. Une résistance de chauffe-eau chauffe l'eau en permanence, à environ 60 °C. À cette température, le calcaire se dépose directement sur la résistance et forme peu à peu une croûte de calcaire. Cette croûte isole la résistance de l'eau qu'elle doit chauffer : la chaleur passe de moins en moins bien, la résistance doit travailler de plus en plus fort et finit par s'user bien plus tôt que prévu.</p>
<p>Sur les robinets et les pommes de douche, c'est l'eau qui s'évapore qui dépose le calcaire. Les traces blanches qui restent après séchage sont ces dépôts, et le détergent ordinaire ne les enlève pas facilement. Dans un lave-vaisselle ou une machine à laver, les mêmes dépôts se forment sur les résistances et dans les bras de lavage, ce qui réduit les performances de l'appareil et oblige à augmenter les doses de produit pour compenser.</p>
<p>Au-delà de nos outils électroménagers, c'est aussi notre corps qui est affecté par le calcaire. Sur la peau et les cheveux, une eau très calcaire laisse un film tenace après la douche : c'est la réaction des sels de calcium avec le savon. Elle irrite les peaux sensibles et ternit les cheveux.</p>
<p>Enfin, dans les canalisations, une accumulation de calcaire à long terme peut réduire le débit, surtout sur les tuyauteries plus anciennes.</p>
<p>En zone calcaire, un adoucisseur peut prolonger la durée de vie d'un chauffe-eau de 5 à 10 ans. La Nièvre présente des eaux très variables selon les secteurs : douce dans le Morvan granitique, nettement plus calcaire dans les plaines du Bazois et de la Puisaye. Pour savoir si votre commune est concernée et mesurer la dureté de votre eau : <a href="/blog/durete-eau-calcaire-nievre">L'eau de la Nièvre est-elle calcaire ? Ce qu'il faut savoir</a>.</p>

<h2>Solution 1 — L'adoucisseur d'eau pour toute la maison</h2>
<p>Un adoucisseur d'eau traite l'eau à l'entrée du logement, avant qu'elle ne se distribue dans toutes les pièces. Le principe est physique : l'eau dure traverse une cuve remplie de résine échangeuse d'ions, qui capte le calcium et le magnésium et les remplace par des ions sodium. L'eau qui ressort est adoucie, avec une dureté résiduelle réglée à la mise en service entre 8 et 15 °f.</p>
<p>Ce n'est pas une eau à zéro degré (une eau trop douce pouvant être légèrement agressive pour les canalisations en cuivre), mais une eau suffisamment douce pour supprimer les problèmes d'entartrage.</p>
<p>Dans le quotidien, le changement est rapide. Les traces blanches disparaissent des robinets et de la paroi de douche. Le linge ressort plus doux et les couleurs tiennent mieux. Le savon et le shampoing moussent plus facilement, ce qui réduit naturellement les doses utilisées. Et le chauffe-eau arrête de s'entartrer.</p>
<p>Notre adoucisseur de référence, le <strong>BWT PerlaMaxx OPTI</strong>, est connecté en Wi-Fi. Il envoie des alertes automatiques en cas de manque de sel ou de débit anormal, et sa régénération au sel est proportionnelle à votre consommation réelle d'eau. Il est dimensionné pour des foyers de 1 à 8 personnes et couvert par une garantie de 10 ans sur la résine et la cuve.</p>
<p>L'installation consiste à raccorder l'adoucisseur sur la canalisation principale d'entrée d'eau froide du logement. Le Groupe Merlin mesure la dureté de votre eau sur place avant de dimensionner l'équipement, le raccorde et règle la dureté résiduelle en sortie lors de la mise en service. Pour tous les détails techniques, consultez notre article : <a href="/blog/adoucisseur-bwt-perlamaxx-opti">L'adoucisseur BWT PerlaMaxx OPTI</a>.</p>

<h2>Solution 2 — L'eau de boisson filtrée et minéralisée</h2>
<p>L'adoucisseur protège vos équipements, mais il ne filtre pas le chlore résiduel, les micro-polluants ni les goûts et odeurs présents dans l'eau de certains réseaux. Et pour beaucoup de familles, c'est précisément ce qui les pousse à acheter de l'eau en bouteille : le goût. Le système <strong>BWT MIXXO PRO</strong> (ONE SOURCE PEARLWATER) répond à ce besoin.</p>
<p>Ce système s'installe sous votre évier et combine deux traitements que les filtres à carafe ordinaires ne font pas simultanément : une filtration poussée (chlore résiduel, goûts et odeurs, microplastiques, PFAS et pesticides selon les spécifications BWT) et une reminéralisation de l'eau avec du calcium, du magnésium et du bicarbonate. L'eau obtenue a un profil proche d'une eau de source de qualité.</p>
<p>Attention, cette solution ne ressemble en rien à de l'osmose inverse. Car le système ne retire pas les minéraux utiles, il les ajoute.</p>
<p>Le passage de l'eau standard à l'eau filtrée-minéralisée se fait d'une simple pression sur un bouton. Aucun robinet supplémentaire n'est nécessaire. Plus besoin d'acheter de l'eau en bouteille, et plus de bouteilles en plastique à stocker et à trier.</p>
<p>Pour tous les détails techniques et de maintenance : <a href="/blog/eau-boisson-filtre-mixxo-pro">Eau de boisson filtrée : le système BWT MIXXO PRO</a>.</p>

<h2>Peuvent-ils se combiner ?</h2>
<p>Oui, et c'est même la configuration que nous recommandons en priorité. L'adoucisseur traite l'eau de toute la maison (protection des équipements), le MIXXO PRO traite l'eau de boisson (qualité gustative et filtration fine). Les deux installations sont indépendantes et complémentaires.</p>

<table class="gm-compare">
<thead><tr><th></th><th>Adoucisseur PerlaMaxx OPTI</th><th>Eau boisson MIXXO PRO</th></tr></thead>
<tbody>
<tr><td>Traite</td><td>Toute l'eau de la maison</td><td>Eau du robinet cuisine uniquement</td></tr>
<tr><td>Effet</td><td>Élimine le calcaire (dureté)</td><td>Filtre + minéralise pour la boisson</td></tr>
<tr><td>Connexion</td><td>Sur la canalisation principale d'entrée</td><td>Sous l'évier, robinet dédié</td></tr>
<tr><td>Entretien</td><td>Remplissage sel + contrôle annuel</td><td>Remplacement cartouche périodique</td></tr>
<tr><td>Garantie</td><td>Jusqu'à 10 ans (bac, résine)</td><td>Selon contrat cartouche</td></tr>
</tbody>
</table>

<h2>BWT : notre partenaire exclusif</h2>
<p>BWT (Best Water Technology) est une entreprise autrichienne fondée en 1990 et le leader européen du traitement de l'eau pour les particuliers et les professionnels. Leurs produits sont conçus pour durer, avec une attention particulière portée à la connectivité et à la réparabilité : alertes automatiques, suivi à distance, données de consommation en temps réel depuis l'application ou via les techniciens.</p>
<p>Le Groupe Merlin est distributeur exclusif BWT sur son secteur d'intervention dans la Nièvre et l'Yonne. Ce partenariat exclusif a des conséquences concrètes : les équipements sont fournis directement par BWT, les pièces de rechange sont des pièces d'origine et la garantie constructeur (10 ans sur la résine et la cuve de la gamme One Source) s'applique dans son intégralité parce que l'installation est réalisée par un installateur certifié.</p>
<p>Deux produits constituent la gamme One Source Pearlwater que nous installons : le BWT PerlaMaxx OPTI pour le traitement de l'ensemble de l'eau de la maison et le BWT MIXXO PRO pour l'eau de boisson sous l'évier. Ils peuvent être installés séparément ou ensemble selon votre projet.</p>

<h2>Le Groupe Merlin dans la Nièvre et l'Yonne</h2>
<p>Les techniciens du Groupe Merlin interviennent pour l'installation, l'entretien et le dépannage des adoucisseurs BWT dans la Nièvre (58) et l'Yonne (89). Le service comprend le diagnostic de la dureté de l'eau sur place lors de la visite, le dimensionnement de l'équipement adapté à votre foyer, la pose et le raccordement sur la canalisation principale…</p>
<p>Le réglage de la dureté résiduelle à la mise en service, ainsi que la livraison de sel et le remplacement des cartouches eau de boisson lors des entretiens.</p>
<p>Les adoucisseurs PerlaMaxx OPTI étant connectés en Wi-Fi, le suivi à distance permet d'anticiper les besoins en sel et de détecter d'éventuelles anomalies de consommation avant qu'elles ne deviennent un problème. Nous intervenons généralement sous quelques jours en cas de besoin.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Pour les prix : <a href="/blog/prix-adoucisseur-eau">Prix d'un adoucisseur d'eau installé</a>. Pour l'entretien : <a href="/blog/entretien-adoucisseur-eau">Entretien adoucisseur : sel, régénération, durée de vie</a>.</p>
<p><em>Sources : <a href="https://www.bwt.com/fr-fr/" target="_blank" rel="noopener">bwt.com</a>, données qualité eau SIAEP locaux, <a href="https://www.vie-publique.fr/" target="_blank" rel="noopener">vie-publique.fr</a>.</em></p>
`,
  },

  {
    slug: "durete-eau-calcaire-nievre",
    title: "L'eau de la Nièvre est-elle calcaire ? Ce qu'il faut savoir",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "durete-eau-calcaire-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "TH, dureté, calcaire : comment fonctionne l'eau de la Nièvre et de l'Yonne, pourquoi elle attaque vos équipements et comment savoir si un adoucisseur est nécessaire chez vous.",
    body: `

<p>Avant d'investir dans un adoucisseur d'eau, la première question à poser est simple : mon eau est-elle vraiment calcaire ? La réponse varie selon votre commune dans la Nièvre et l'Yonne. Voici comment le savoir et comment interpréter ce que vous trouvez.</p>

<h2>Qu'est-ce que la dureté de l'eau ?</h2>
<p>La dureté de l'eau, aussi appelée titre hydrotimétrique (TH), mesure la concentration en calcium et en magnésium dans l'eau. Elle s'exprime en degrés français (°f). L'Organisation mondiale de la santé classe l'eau en quatre catégories :</p>

<table class="gm-compare">
<thead><tr><th>TH (°f)</th><th>Qualification</th><th>Impact sur les équipements</th></tr></thead>
<tbody>
<tr><td>0 – 7 °f</td><td>Eau très douce</td><td>Aucun dépôt calcaire. Peut être légèrement agressive pour les canalisations.</td></tr>
<tr><td>7 – 15 °f</td><td>Eau douce</td><td>Faible entartrage. Adoucisseur peu nécessaire.</td></tr>
<tr><td>15 – 25 °f</td><td>Eau modérément dure</td><td>Dépôts visibles sur les robinets. Adoucisseur conseillé au-delà de 20 °f.</td></tr>
<tr><td>> 25 °f</td><td>Eau dure à très dure</td><td>Entartrage significatif des équipements. Adoucisseur fortement recommandé.</td></tr>
</tbody>
</table>

<h2>La Nièvre : une dureté qui dépend de la géologie</h2>
<p>La Nièvre présente une grande variété géologique, ce qui se traduit par des eaux très différentes selon les secteurs :</p>
<ul class="gm-checklist">
  <li><strong>Le Morvan</strong> (granit, schistes) : eaux naturellement douces à légèrement dures. L'eau de granite dissout peu de calcium. Les communes du Morvan ont souvent un TH inférieur à 15 °f.</li>
  <li><strong>La plaine nivernaise et le Bazois</strong> (calcaires, marnes) : eaux plus dures. Les nappes phréatiques traversent des terrains calcaires et se chargent en calcium. Le TH peut dépasser 25-30 °f.</li>
  <li><strong>La Puisaye</strong> (argiles, sables) : profil intermédiaire, variable selon le captage.</li>
</ul>
<p>L'Yonne présente un profil similaire : le Morvan côté Yonne donne des eaux plus douces, tandis que les secteurs de l'Auxerrois ou du Sénonais sont souvent alimentés par des nappes plus calcaires.</p>

<h2>Comment connaître le TH de votre eau ?</h2>
<p>Trois méthodes, de la plus simple à la plus précise :</p>
<ul class="gm-checklist">
  <li><strong>Le rapport qualité d'eau de votre commune</strong> : chaque commune est tenue de publier chaque année son rapport sur la qualité de l'eau potable. Il contient le TH de votre réseau. Demandez-le à votre mairie ou consultez le site de votre syndicat d'eau.</li>
  <li><strong>Le site du ministère</strong> : <a href="https://www.eaufrance.fr/" target="_blank" rel="noopener">eaufrance.fr</a> centralise les données de qualité d'eau par commune.</li>
  <li><strong>Un test bandelette</strong> : des bandelettes de test de dureté de l'eau (vendues en pharmacie ou en magasin de bricolage) donnent une mesure approximative en quelques secondes.</li>
</ul>
<p>Lors de notre visite, nous mesurons également la dureté de votre eau sur place avant de vous proposer un dimensionnement d'adoucisseur.</p>

<h2>Les signes visibles d'une eau trop calcaire</h2>
<p>Pas besoin de test pour le savoir si vous observez :</p>
<ul class="gm-checklist">
  <li>Des traces blanches persistantes sur vos robinets, votre pomme de douche ou vos carreaux.</li>
  <li>Une résistance de chauffe-eau qui doit être remplacée tous les 3-4 ans.</li>
  <li>Un lave-vaisselle ou une machine à laver qui consomme beaucoup de sel ou de produit anti-calcaire.</li>
  <li>Un goût de chaux dans votre eau du robinet.</li>
  <li>De la mousse qui ne se forme pas facilement avec le savon ou le shampoing.</li>
</ul>

<h2>À partir de quel TH installer un adoucisseur ?</h2>
<p>La règle générale : un adoucisseur d'eau est pertinent à partir de 20 °f. En dessous de 15 °f, les bénéfices sont limités. Entre 15 et 20 °f, la décision dépend de votre installation et de vos usages.</p>
<p class="gm-pullquote">En zone calcaire (> 25 °f), un adoucisseur peut prolonger la durée de vie de votre chauffe-eau de 5 à 10 ans. C'est un investissement qui s'amortit rapidement sur le remplacement des équipements évité.</p>

<p>Pour savoir si un adoucisseur est adapté à votre logement : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>. Pour comprendre comment fonctionne un adoucisseur : <a href="/blog/comment-fonctionne-adoucisseur-eau">Comment fonctionne un adoucisseur d'eau</a>. Guide complet : <a href="/blog/adoucisseur-guide-complet">Guide adoucisseur d'eau dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.eaufrance.fr/" target="_blank" rel="noopener">eaufrance.fr</a>, OMS (classification dureté eau), données SIAEP locaux Nièvre.</em></p>
`,
  },

  {
    slug: "comment-fonctionne-adoucisseur-eau",
    title: "Comment fonctionne un adoucisseur d'eau ?",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "comment-fonctionne-adoucisseur-eau.jpg",
    imgDir: "blog",
    excerpt:
      "Résine échangeuse d'ions, régénération au sel, dureté en sortie : tout comprendre sur le fonctionnement d'un adoucisseur d'eau pour décider en connaissance de cause.",
    body: `

<p>Un adoucisseur d'eau est souvent perçu comme un équipement complexe. En réalité, son principe est simple et éprouvé depuis des décennies. Voici comment il fonctionne, étape par étape.</p>

<h2>Le principe : l'échange ionique</h2>
<p>L'eau dure contient du calcium (Ca²⁺) et du magnésium (Mg²⁺) dissous. Ce sont ces ions qui forment le calcaire quand l'eau est chauffée ou évapore.</p>
<p>L'adoucisseur contient une cuve remplie de résine — de petites billes de polymère chargées en ions sodium (Na⁺). Quand l'eau dure traverse la résine, un échange se produit : le calcium et le magnésium se fixent sur la résine, et des ions sodium sont libérés dans l'eau en échange. L'eau ressort adoucie.</p>

<div class="gm-schema">
<svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma du principe de l'échange ionique dans un adoucisseur">
  <g font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">
    <!-- Eau dure entrée -->
    <rect x="20" y="30" width="130" height="70" rx="8" fill="#EAE1CD"/>
    <text x="85" y="58" font-weight="700" font-size="13">Eau dure</text>
    <text x="85" y="76" font-size="11">Ca²⁺ + Mg²⁺</text>
    <text x="85" y="92" font-size="10">(calcaire dissous)</text>
    <!-- Flèche -->
    <line x1="152" y1="65" x2="190" y2="65" stroke="#171723" stroke-width="2" marker-end="url(#ar-ado)"/>
    <!-- Résine -->
    <rect x="192" y="20" width="270" height="160" rx="8" fill="#FAC864"/>
    <text x="327" y="80" font-weight="700" font-size="14">Résine échangeuse d'ions</text>
    <text x="327" y="100" font-size="12">Ca²⁺ et Mg²⁺ se fixent sur la résine</text>
    <text x="327" y="118" font-size="12">Na⁺ (sodium) est libéré dans l'eau</text>
    <text x="327" y="148" font-size="11" font-style="italic">→ l'eau ressort douce</text>
    <!-- Flèche -->
    <line x1="464" y1="65" x2="502" y2="65" stroke="#171723" stroke-width="2" marker-end="url(#ar-ado)"/>
    <!-- Eau douce sortie -->
    <rect x="504" y="30" width="130" height="70" rx="8" fill="#171723"/>
    <text x="569" y="58" fill="#FAC864" font-weight="700" font-size="13">Eau douce</text>
    <text x="569" y="76" fill="#fff" font-size="11">Na⁺ à faible dose</text>
    <text x="569" y="92" fill="#fff" font-size="10">(sans calcaire)</text>
    <!-- Sel régénération -->
    <rect x="192" y="195" width="270" height="20" rx="4" fill="#171723" opacity="0.15"/>
    <text x="327" y="210" font-size="11" fill="#5a5a66">La résine se régénère au sel (NaCl) — cycle automatique</text>
  </g>
  <defs>
    <marker id="ar-ado" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#171723"/>
    </marker>
  </defs>
</svg>
</div>

<h2>La régénération : le cycle automatique</h2>
<p>La résine a une capacité limitée. Au bout d'un certain volume d'eau traité, elle est saturée en calcium et magnésium et ne peut plus adoucir correctement. Il faut la régénérer.</p>
<p>La régénération se déclenche automatiquement selon la consommation d'eau du foyer. Le processus :</p>
<ol>
  <li>Une saumure concentrée (eau + sel) est créée dans le bac à sel de l'adoucisseur.</li>
  <li>La saumure traverse la résine en sens inverse : le calcium et le magnésium se détachent et partent à l'égout avec l'eau de régénération.</li>
  <li>Les ions sodium rechargent la résine, qui est à nouveau prête à adoucir.</li>
</ol>
<p>Ce cycle se produit en général la nuit pour ne pas interrompre la distribution d'eau. Sur les modèles modernes comme le BWT PerlaMaxx OPTI, la fréquence et la quantité de sel utilisée sont optimisées automatiquement selon la consommation réelle.</p>

<h2>Le bac à sel : le seul consommable</h2>
<p>Le sel d'adoucisseur (sel régénérant, sous forme de pastilles ou de granulés) est le seul consommable de l'adoucisseur. Il ne finit pas dans l'eau adoucie — il sert uniquement à régénérer la résine. La consommation de sel dépend de la dureté de l'eau et de votre consommation d'eau. Un foyer de 4 personnes avec une eau à 25 °f consomme en général 20 à 40 kg de sel par mois.</p>

<h2>Quelle dureté en sortie ?</h2>
<p>Un adoucisseur bien réglé ne produit pas une eau à zéro °f. On recommande une dureté résiduelle de 8 à 15 °f en sortie : suffisamment douce pour éliminer le calcaire problématique, mais pas trop douce (une eau trop douce peut devenir légèrement agressive pour les canalisations en cuivre). Ce réglage est effectué lors de l'installation et ajusté selon votre situation.</p>

<h2>Et l'eau de boisson ?</h2>
<p>Un adoucisseur augmente légèrement la teneur en sodium de l'eau. Cette eau adoucie reste tout à fait buvable pour la grande majorité des personnes. Cependant, pour les personnes suivant un régime hyposodé strict ou pour une eau vraiment de qualité gustative optimale, un système de filtration complémentaire sous l'évier (comme le BWT MIXXO PRO) est recommandé. Il traite l'eau de boisson indépendamment de l'adoucisseur.</p>

<p>Pour les produits que nous installons : <a href="/blog/adoucisseur-bwt-perlamaxx-opti">L'adoucisseur BWT PerlaMaxx OPTI</a>. Pour l'eau de boisson : <a href="/blog/eau-boisson-filtre-mixxo-pro">Le système BWT MIXXO PRO</a>. Pour démarrer : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://www.bwt.com/fr-fr/" target="_blank" rel="noopener">bwt.com</a>, données ANSES (Agence nationale de sécurité sanitaire).</em></p>
`,
  },

  {
    slug: "eau-boisson-filtre-mixxo-pro",
    title: "Eau de boisson filtrée et minéralisée : le système BWT MIXXO PRO",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "eau-boisson-filtre-mixxo-pro.jpg",
    imgDir: "blog",
    excerpt:
      "BWT MIXXO PRO (ONE SOURCE PEARLWATER) : filtration et minéralisation sous l'évier pour une eau de boisson de qualité source directement au robinet. Ce que c'est, ce que ça fait, ce que ça coûte.",
    body: `

<p>L'adoucisseur traite l'eau calcaire de toute la maison. Mais pour une eau de boisson de qualité, il faut un traitement complémentaire. Le système BWT MIXXO PRO (commercialisé sous le nom ONE SOURCE PEARLWATER) répond à ce besoin : installé sous votre évier, il délivre une eau filtrée et minéralisée directement à votre robinet cuisine.</p>

<h2>Qu'est-ce que le BWT MIXXO PRO fait exactement ?</h2>
<p>Le MIXXO PRO combine deux traitements en un :</p>
<ul class="gm-checklist">
  <li><strong>Filtration</strong> : réduit le chlore résiduel (responsable du goût désagréable de l'eau du robinet dans certaines communes), les goûts et odeurs, les microplastiques, les PFAS (polyfluoroalkylés) et certains pesticides selon les spécifications BWT.</li>
  <li><strong>Minéralisation</strong> : enrichit l'eau en calcium, magnésium et bicarbonate pour lui donner un profil proche d'une eau de source de bonne qualité. Cette étape est ce qui différencie le MIXXO PRO d'un simple filtre à carafe.</li>
</ul>

<h2>Comment ça s'installe ?</h2>
<p>Le système s'installe sous l'évier, en dérivation sur votre arrivée d'eau froide. Un robinet dédié (fourni) est posé sur l'évier à côté de votre robinetterie habituelle. Vous disposez alors de deux sorties : l'eau standard (pour la vaisselle, les légumes, etc.) et l'eau filtrée-minéralisée (pour la boisson, le café, la cuisson des pâtes).</p>
<p>Une télécommande fournie permet de basculer entre les deux modes. Le boîtier sous l'évier occupe un espace comparable à un filtre à osmose inverse classique, mais sans les inconvénients de ce dernier (pas de gaspillage d'eau, pas de pression réduite).</p>

<h2>Quelle différence avec un filtre à carafe ou un filtre à osmose ?</h2>
<table class="gm-compare">
<thead><tr><th></th><th>Carafe filtrante</th><th>Osmose inverse</th><th>BWT MIXXO PRO</th></tr></thead>
<tbody>
<tr><td>Filtration</td><td>Chlore, calcaire partiel</td><td>Quasi totale (y compris minéraux)</td><td>Chlore, goûts, microplastiques, PFAS</td></tr>
<tr><td>Minéralisation</td><td>Non</td><td>Non (eau très déminéralisée)</td><td>Oui (Ca, Mg, bicarbonate ajoutés)</td></tr>
<tr><td>Débit</td><td>Faible (remplissage manuel)</td><td>Lent (membrane sous pression)</td><td>Normal (robinet direct)</td></tr>
<tr><td>Entretien</td><td>Cartouche fréquente, carafe à laver</td><td>Membrane + post-filtre à changer</td><td>Cartouche périodique (BWT livre)</td></tr>
<tr><td>Confort</td><td>Pratique mais volume limité</td><td>Eau très plate, peu appréciée à la boisson</td><td>Eau goûteuse, débit direct</td></tr>
</tbody>
</table>

<h2>L'entretien : les cartouches</h2>
<p>Le système nécessite le remplacement périodique de la cartouche de filtration-minéralisation. La fréquence dépend de la consommation d'eau et de la qualité de l'eau initiale. BWT propose un service de livraison de cartouches directement à votre domicile selon la fréquence recommandée. Groupe Merlin peut également s'en charger lors des visites de maintenance.</p>

<h2>Ce que nos clients remarquent</h2>
<p>Les retours les plus fréquents après installation :</p>
<ul class="gm-checklist">
  <li>Le goût de l'eau change immédiatement — plus de goût de chlore ou de "robinet".</li>
  <li>Le café et les infusions ont un meilleur goût (la qualité de l'eau influence directement l'extraction).</li>
  <li>La consommation de bouteilles en plastique diminue ou disparaît.</li>
  <li>Les enfants boivent plus volontiers l'eau du robinet.</li>
</ul>

<p>Pour l'installation : <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Pour comprendre l'adoucisseur complémentaire : <a href="/blog/adoucisseur-bwt-perlamaxx-opti">L'adoucisseur BWT PerlaMaxx OPTI</a>. Guide : <a href="/blog/adoucisseur-guide-complet">Guide adoucisseur d'eau dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.bwt.com/fr-fr/" target="_blank" rel="noopener">bwt.com</a> — spécifications MIXXO PRO / ONE SOURCE PEARLWATER.</em></p>
`,
  },

  {
    slug: "prix-adoucisseur-eau",
    title: "Prix d'un adoucisseur d'eau installé : à quoi s'attendre",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "prix-adoucisseur-eau.jpg",
    imgDir: "blog",
    excerpt:
      "Prix d'un adoucisseur d'eau installé : fourchettes selon le modèle et la capacité, coût du sel, entretien annuel et comment évaluer le retour sur investissement.",
    body: `

<p>Le prix d'un adoucisseur d'eau est souvent perçu comme élevé au premier regard. Mais l'investissement doit se comparer à ce qu'il économise : chauffe-eau qui dure plus longtemps, machine à laver moins entartrée, moins de produits ménagers. Voici une vision complète du coût réel.</p>

<h2>Fourchettes de prix selon le type d'équipement</h2>

<table class="gm-compare">
<thead><tr><th>Équipement</th><th>Prix équipement seul</th><th>Prix installé</th></tr></thead>
<tbody>
<tr><td>Adoucisseur entrée de gamme (< 50 L/h)</td><td>600 – 1 000 €</td><td>1 000 – 1 500 €</td></tr>
<tr><td>Adoucisseur milieu de gamme (BWT PerlaMaxx compact)</td><td>1 200 – 1 800 €</td><td>1 800 – 2 500 €</td></tr>
<tr><td>Adoucisseur premium (BWT PerlaMaxx OPTI, Wi-Fi)</td><td>1 800 – 2 500 €</td><td>2 500 – 3 500 €</td></tr>
<tr><td>Système eau de boisson (BWT MIXXO PRO)</td><td>500 – 900 €</td><td>800 – 1 500 €</td></tr>
</tbody>
</table>

<p>Ces fourchettes incluent la fourniture et la pose, le raccordement sur la canalisation d'alimentation et la mise en service. Elles excluent les travaux de plomberie supplémentaires si votre chaufferie nécessite des modifications importantes.</p>

<h2>Le coût des consommables : le sel</h2>
<p>Le sel d'adoucisseur est le principal consommable. Son coût annuel dépend de la dureté de votre eau et de votre consommation d'eau :</p>
<ul class="gm-checklist">
  <li><strong>Foyer de 2 personnes, eau à 20 °f</strong> : environ 50-80 kg de sel par an.</li>
  <li><strong>Foyer de 4 personnes, eau à 30 °f</strong> : environ 100-180 kg de sel par an.</li>
</ul>
<p>Le sel d'adoucisseur coûte en moyenne 0,30 à 0,50 €/kg en pastilles. Le coût annuel de sel représente donc 15 à 90 € selon votre consommation. C'est le seul consommable récurrent de l'adoucisseur (hors entretien annuel).</p>

<h2>Le coût d'entretien annuel</h2>
<p>Un adoucisseur mérite un contrôle annuel par un technicien : vérification de la résine, réglage de la dureté en sortie, contrôle de la vanne de régénération. Ce contrôle coûte généralement entre 80 et 150 €/an selon le prestataire. Chez Groupe Merlin, nous proposons des contrats d'entretien annuels qui incluent ce contrôle et la livraison de sel.</p>

<h2>Le retour sur investissement</h2>
<p>L'amortissement d'un adoucisseur s'évalue principalement sur :</p>
<ul class="gm-checklist">
  <li><strong>La durée de vie du chauffe-eau</strong> : une résistance entartrée consomme davantage d'énergie et s'use plus vite. Un chauffe-eau en zone calcaire peut durer 8-10 ans au lieu de 15-20 ans avec une eau adoucie.</li>
  <li><strong>Les économies sur les produits ménagers</strong> : adoucissant lessive, produit lave-vaisselle, produit anti-calcaire robinets — la consommation est réduite avec une eau douce.</li>
  <li><strong>L'économie d'énergie</strong> : 1 mm de tartre sur une résistance augmente sa consommation électrique de 10-15 %.</li>
  <li><strong>L'arrêt des bouteilles d'eau</strong> (si combiné avec le MIXXO PRO) : une famille de 4 personnes qui achetait de l'eau en bouteille économise 500 à 1 000 €/an.</li>
</ul>

<p class="gm-pullquote">La question n'est pas "est-ce que ça coûte cher ?", c'est "combien me coûte de ne pas en avoir ?". En zone calcaire, un adoucisseur s'amortit généralement sur 5 à 8 ans.</p>

<h2>Ce que nous vous proposons chez Groupe Merlin</h2>
<p>Lors de la visite, nous mesurons la dureté de votre eau, évaluons votre consommation et vous recommandons le modèle le plus adapté. Nous vous présentons un devis clair avec le prix installé, le coût annuel estimé en sel et le délai d'amortissement estimé pour votre situation.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre devis gratuit</strong></a>. Pour comprendre le fonctionnement : <a href="/blog/comment-fonctionne-adoucisseur-eau">Comment fonctionne un adoucisseur d'eau</a>. Pour l'entretien : <a href="/blog/entretien-adoucisseur-eau">Entretien adoucisseur : sel, régénération, durée de vie</a>.</p>
`,
  },

  {
    slug: "entretien-adoucisseur-eau",
    title: "Entretien adoucisseur d'eau : sel, régénération et durée de vie",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "entretien-adoucisseur-eau.jpg",
    imgDir: "blog",
    excerpt:
      "Comment entretenir un adoucisseur d'eau, quelle quantité de sel utiliser, à quelle fréquence faire vérifier l'équipement et comment maximiser sa durée de vie — tout ce qu'il faut savoir.",
    body: `

<p>Un adoucisseur d'eau est un équipement robuste qui nécessite peu d'interventions. L'essentiel se résume à ne pas oublier de recharger le sel et à faire contrôler l'équipement une fois par an. Voici tout ce qu'il faut savoir pour que votre adoucisseur dure le plus longtemps possible.</p>

<h2>Le sel : le geste régulier incontournable</h2>
<p>Le sel d'adoucisseur est utilisé lors de la régénération de la résine. Il ne passe pas dans l'eau que vous buvez ou utilisez — il sert uniquement à "recharger" la résine pour qu'elle continue à capter le calcaire.</p>
<p>Deux types de sel sont utilisables :</p>
<ul class="gm-checklist">
  <li><strong>Pastilles de sel (sel en tablettes)</strong> : format le plus courant, facile à manipuler, dissolution régulière. Recommandé par BWT pour le PerlaMaxx OPTI.</li>
  <li><strong>Granulés de sel</strong> : dissolution légèrement plus rapide, format parfois moins disponible en zone rurale.</li>
</ul>
<p>Utilisez uniquement du sel spécial adoucisseur (sel régénérant), pas du sel de cuisine ni du sel de déneigement — leur pureté est insuffisante et peut endommager la résine.</p>

<h3>Fréquence de remplissage</h3>
<p>La fréquence dépend de votre consommation d'eau et de la dureté initiale. À titre indicatif, un foyer de 4 personnes avec une eau à 25 °f remplira le bac à sel environ une fois par mois (5-10 kg selon le modèle). Le BWT PerlaMaxx OPTI envoie une alerte Wi-Fi quand le niveau de sel est bas.</p>

<h2>Ce que vous n'avez pas à faire</h2>
<p>Contrairement à ce qu'on croit parfois, vous n'avez pas à :</p>
<ul class="gm-checklist">
  <li>Déclencher manuellement les régénérations — le système le fait automatiquement selon votre consommation réelle.</li>
  <li>Régler la fréquence de régénération — le BWT PerlaMaxx OPTI l'optimise en temps réel (selon la dureté détectée et la consommation).</li>
  <li>Contrôler la dureté en sortie quotidiennement — un test annuel lors de la visite technicien suffit.</li>
</ul>

<h2>Le contrôle annuel par un technicien</h2>
<p>Une fois par an, une vérification par un professionnel est recommandée. Elle comprend :</p>
<ul class="gm-checklist">
  <li><strong>Mesure de la dureté en sortie</strong> : vérification que l'adoucisseur produit bien une eau à la dureté cible (8-15 °f).</li>
  <li><strong>Contrôle de la vanne de régénération</strong> : c'est la pièce mécanique principale — elle pilote les cycles de régénération.</li>
  <li><strong>État de la résine</strong> : la résine dure normalement 10-15 ans, mais peut se dégrader plus vite en cas de chlore excessif dans l'eau d'entrée.</li>
  <li><strong>Inspection du bac à sel et du pont salin</strong> : détection des éventuels ponts de sel (croutage) qui empêchent le sel de se dissoudre correctement.</li>
  <li><strong>Désinfection périodique</strong> : selon les recommandations fabricant, une désinfection des résines peut être réalisée tous les 2-3 ans.</li>
</ul>

<h2>Les signes que quelque chose ne va pas</h2>
<ul class="gm-checklist">
  <li><strong>Traces de calcaire réapparaissent</strong> : la résine est épuisée, le sel est vide ou la vanne est défaillante.</li>
  <li><strong>Consommation de sel anormalement élevée</strong> : peut indiquer une fuite dans le circuit de régénération.</li>
  <li><strong>Pression d'eau réduite</strong> : peut indiquer un colmatage de la résine ou un problème de vanne.</li>
  <li><strong>Goût salé dans l'eau</strong> (rare) : indique un problème de rinçage lors de la régénération — intervention technicien nécessaire.</li>
</ul>

<h2>Durée de vie d'un adoucisseur</h2>
<p>Un adoucisseur de qualité (comme le BWT PerlaMaxx OPTI) dure 15 à 20 ans avec un entretien annuel régulier. Les composants qui s'usent en premier sont la vanne de régénération (10-15 ans) et éventuellement la résine (10-15 ans). Ces pièces sont remplaçables sans changer tout l'équipement.</p>
<p>BWT garantit le PerlaMaxx OPTI jusqu'à 10 ans sur le bac, les bouteilles et la résine.</p>

<h2>Groupe Merlin assure l'entretien de votre adoucisseur</h2>
<p>Nous proposons des contrats d'entretien annuels qui incluent la visite technicien, le contrôle de l'équipement et la livraison de sel à votre domicile. Nos techniciens interviennent dans la Nièvre et l'Yonne.</p>
<p>Pour souscrire ou poser une question : <a href="/contact"><strong>contactez-nous</strong></a>. Pour les prix d'installation : <a href="/blog/prix-adoucisseur-eau">Prix d'un adoucisseur d'eau installé</a>. Guide complet : <a href="/blog/adoucisseur-guide-complet">Guide adoucisseur d'eau dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.bwt.com/fr-fr/" target="_blank" rel="noopener">bwt.com</a>, documentation technique BWT PerlaMaxx OPTI.</em></p>
`,
  },

  {
    slug: "adoucisseur-eau-bwt-perlamaxx",
    title: "L'adoucisseur BWT PerlaMaxx OPTI : notre retour après des dizaines d'installations",
    category: "Conseils",
    cocon: "adoucisseur",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "adoucisseur-eau-bwt-perlamaxx.jpg",
    imgDir: "blog",
    excerpt:
      "BWT PerlaMaxx OPTI : notre analyse honnête après de nombreuses installations dans la Nièvre et l'Yonne. Connectivité Wi-Fi, garantie 10 ans, consommation optimisée — et ce qu'on observe vraiment.",
    body: `

<p>Nous travaillons en partenariat exclusif avec BWT depuis plusieurs années. Le PerlaMaxx OPTI est l'adoucisseur que nous installons par défaut dans les logements de la Nièvre et de l'Yonne. Voici notre retour honnête : ce qui fonctionne bien, ce qui est à connaître, et pourquoi nous avons retenu ce modèle.</p>

<h2>Ce que c'est exactement</h2>
<p>Le BWT PerlaMaxx OPTI est un adoucisseur résidentiel à échange ionique, connecté en Wi-Fi, conçu pour des foyers de 1 à 8 personnes. Il s'installe dans votre chaufferie ou sous votre évier technique, sur la canalisation d'alimentation principale de la maison.</p>
<p>Ses caractéristiques distinctives par rapport aux adoucisseurs classiques :</p>
<ul class="gm-checklist">
  <li><strong>Régénération optimisée</strong> : le système calcule en temps réel la quantité de sel et d'eau nécessaires à chaque régénération selon votre consommation réelle, ce qui réduit le gaspillage de sel et d'eau par rapport aux systèmes à minuterie fixe.</li>
  <li><strong>Connectivité Wi-Fi</strong> : l'application BWT envoie une alerte quand le niveau de sel est bas, signale un débit anormal (indicateur de fuite), et permet de suivre la consommation d'eau adoucie. Pour un équipement que vous n'avez pas envie de surveiller manuellement tous les jours, c'est un vrai confort.</li>
  <li><strong>Auto-désinfection des résines</strong> : le système désinfecte automatiquement ses résines à intervalles réguliers, sans intervention de votre part. C'est un point d'hygiène souvent négligé sur les adoucisseurs moins sophistiqués.</li>
  <li><strong>Garantie 10 ans</strong> : sur le bac, les bouteilles et la résine. C'est la garantie la plus longue que nous connaissons sur ce type d'équipement résidentiel.</li>
</ul>

<h2>Ce qu'on observe après installation</h2>
<p>Nos clients remarquent plusieurs changements dans les semaines qui suivent l'installation :</p>
<ul class="gm-checklist">
  <li><strong>Les traces blanches sur les robinets et la vaisselle disparaissent</strong> progressivement. Sur les surfaces déjà entartrées, un détartrage préalable accélère la transition.</li>
  <li><strong>La mousse du savon se forme plus facilement</strong> : en eau douce, vous pouvez réduire les doses de lessive et de produit lave-vaisselle de 30 à 50 %.</li>
  <li><strong>La peau et les cheveux</strong> : certains clients signalent une amélioration du confort cutané et de la tenue des cheveux. Ce point est subjectif mais fréquemment mentionné.</li>
  <li><strong>Le chauffe-eau</strong> : l'impact est réel mais invisible à court terme — il se mesure sur la durée via la réduction des interventions de détartrage.</li>
</ul>

<h2>Ce qu'il faut prévoir</h2>
<ul class="gm-checklist">
  <li><strong>Une connexion Wi-Fi atteignant la chaufferie</strong> : pour que la connectivité fonctionne, il faut que le signal Wi-Fi de votre box internet atteigne l'emplacement de l'adoucisseur. Dans les grandes maisons ou les chaufferies en sous-sol, un répéteur Wi-Fi peut être nécessaire.</li>
  <li><strong>Un accès pour le remplissage de sel</strong> : l'adoucisseur doit être accessible facilement. Une installation dans un recoin difficile d'accès complique le remplissage mensuel du sel.</li>
  <li><strong>Un by-pass prévu pour la robinetterie cuisine</strong> : l'eau adoucie (légèrement plus chargée en sodium) n'est pas recommandée pour la préparation des biberons ou pour les personnes suivant un régime très pauvre en sel. Un by-pass sur l'eau froide cuisine est prévu par BWT pour cette situation.</li>
</ul>

<h2>Notre position</h2>
<p>Nous avons sélectionné le PerlaMaxx OPTI comme référence principale pour ses performances, sa garantie longue et la qualité du SAV BWT. Ce n'est pas le moins cher du marché, mais c'est celui que nous serions prêts à installer dans notre propre maison.</p>
<p>Pour voir si ce modèle est adapté à votre logement : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>. Pour comprendre son fonctionnement : <a href="/blog/comment-fonctionne-adoucisseur-eau">Comment fonctionne un adoucisseur d'eau</a>. Pour les prix : <a href="/blog/prix-adoucisseur-eau">Prix d'un adoucisseur d'eau installé</a>. Guide : <a href="/blog/adoucisseur-guide-complet">Guide adoucisseur d'eau dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://www.bwt.com/fr-fr/" target="_blank" rel="noopener">bwt.com</a> — fiche technique BWT PerlaMaxx OPTI, retours d'expérience techniciens Groupe Merlin.</em></p>
`,
  },

  // ── COCON : PANNEAUX PHOTOVOLTAÏQUES ──────────────────────────────────────
  {
    slug: "panneaux-photovoltaiques-guide-complet",
    title: `Panneaux photovoltaïques dans la Nièvre et l'Yonne : guide complet ${CONTENT_YEAR}`,
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "panneaux-photovoltaiques-guide-complet.jpg",
    imgDir: "blog",
    excerpt:
      "Installer des panneaux photovoltaïques dans la Nièvre ou l'Yonne : fonctionnement, prix, aides, autoconsommation — tout ce qu'il faut savoir avant de se lancer, par votre installateur RGE QualiPV local.",
    body: `
<p>Le photovoltaïque consiste à transformer l'énergie du soleil en électricité que vous consommez directement dans votre maison. Ce que vous ne consommez pas peut être revendu au réseau.</p>
<p>Les panneaux photovoltaïques ont une durée de vie de 25 à 30 ans, avec une garantie de production constructeur sur la même durée. L'onduleur, l'équipement électronique qui convertit le courant produit par les panneaux en électricité utilisable dans votre maison, a une durée de vie de 10 à 15 ans. C'est le seul composant qui nécessitera un remplacement au cours de la vie de votre installation.</p>
<p>Ce guide rassemble tout ce que vous devez savoir avant d'investir : comment ça fonctionne, ce que ça coûte, quelles aides existent et comment choisir votre installateur dans la Nièvre ou l'Yonne.</p>

<h2>Comment ça fonctionne en résumé</h2>
<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" class="gm-schema" aria-label="Schéma du circuit photovoltaïque" style="max-width:700px;width:100%;display:block;margin:1.5rem auto">
  <defs>
    <marker id="arrowpv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#FAC864"/>
    </marker>
  </defs>
  <!-- Panneaux -->
  <rect x="10" y="30" width="110" height="60" rx="6" fill="#1a1a2e" stroke="#FAC864" stroke-width="1.5"/>
  <text x="65" y="56" text-anchor="middle" fill="#FAC864" font-size="11" font-weight="bold">Panneaux</text>
  <text x="65" y="72" text-anchor="middle" fill="#e2e8f0" font-size="10">Courant continu</text>
  <!-- Flèche 1 -->
  <line x1="122" y1="60" x2="168" y2="60" stroke="#FAC864" stroke-width="2" marker-end="url(#arrowpv)"/>
  <!-- Onduleur -->
  <rect x="170" y="30" width="110" height="60" rx="6" fill="#1a1a2e" stroke="#FAC864" stroke-width="1.5"/>
  <text x="225" y="56" text-anchor="middle" fill="#FAC864" font-size="11" font-weight="bold">Onduleur</text>
  <text x="225" y="72" text-anchor="middle" fill="#e2e8f0" font-size="10">Courant alternatif</text>
  <!-- Flèche 2 -->
  <line x1="282" y1="60" x2="328" y2="60" stroke="#FAC864" stroke-width="2" marker-end="url(#arrowpv)"/>
  <!-- Compteur Linky -->
  <rect x="330" y="30" width="110" height="60" rx="6" fill="#1a1a2e" stroke="#FAC864" stroke-width="1.5"/>
  <text x="385" y="56" text-anchor="middle" fill="#FAC864" font-size="11" font-weight="bold">Compteur</text>
  <text x="385" y="72" text-anchor="middle" fill="#e2e8f0" font-size="10">Linky bidirectionnel</text>
  <!-- Flèche 3 vers maison -->
  <line x1="442" y1="50" x2="488" y2="30" stroke="#FAC864" stroke-width="2" marker-end="url(#arrowpv)"/>
  <!-- Flèche 4 vers réseau -->
  <line x1="442" y1="70" x2="488" y2="90" stroke="#FAC864" stroke-width="2" marker-end="url(#arrowpv)"/>
  <!-- Maison -->
  <rect x="490" y="10" width="100" height="45" rx="6" fill="#0f4c35" stroke="#4ade80" stroke-width="1.5"/>
  <text x="540" y="32" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="bold">Votre maison</text>
  <text x="540" y="47" text-anchor="middle" fill="#e2e8f0" font-size="10">Autoconsommation</text>
  <!-- Réseau -->
  <rect x="490" y="70" width="100" height="45" rx="6" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="540" y="92" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="bold">Réseau EDF</text>
  <text x="540" y="107" text-anchor="middle" fill="#e2e8f0" font-size="10">Surplus revendu</text>
</svg>
<p>Les panneaux captent le rayonnement solaire et produisent un courant continu. L'onduleur, l'équipement électronique qui fait le lien entre vos panneaux et votre maison, transforme ce courant continu en courant alternatif à 230 V, utilisable directement dans votre foyer. Le compteur Linky mesure ce que vous consommez sur le réseau et ce que vous y injectez.</p>
<p>Pendant la journée, quand vos panneaux produisent plus que vous ne consommez, l'excédent est automatiquement injecté sur le réseau et racheté par EDF au tarif en vigueur. La nuit et les jours très couverts, vous retirez au réseau ce dont vous avez besoin, exactement comme avant l'installation.</p>
<p>Il n'y a rien à faire au quotidien. L'installation fonctionne de façon entièrement automatique. Un système de monitoring connecté vous permet de suivre votre production, votre consommation et les éventuelles alertes depuis votre smartphone.</p>

<h2>Les deux façons de valoriser votre production</h2>
<table class="gm-compare">
<thead><tr><th>Mode</th><th>Autoconsommation avec vente du surplus</th><th>Vente totale</th></tr></thead>
<tbody>
<tr><td>Principe</td><td>Vous consommez votre production, vous vendez ce qui reste</td><td>Toute la production est vendue au réseau, vous achetez ce que vous consommez</td></tr>
<tr><td>Usage principal</td><td>Résidentiel — maison individuelle</td><td>Plutôt grandes installations agricoles ou industrielles</td></tr>
<tr><td>Aide de l'État</td><td>Prime à l'autoconsommation + tarif d'achat du surplus</td><td>Tarif d'achat total (contrat EDF OA)</td></tr>
<tr><td>Cas de figure recommandé</td><td>La majorité des logements résidentiels</td><td>Cas spécifiques à étudier au cas par cas</td></tr>
</tbody>
</table>

<h2>Pourquoi passer par un installateur RGE</h2>
<p>La certification RGE QualiPV est la certification de référence pour les installateurs photovoltaïques en France. Elle est obligatoire pour que vous puissiez bénéficier des aides d'État (prime à l'autoconsommation, TVA réduite, éco-PTZ). Un installateur non certifié RGE vous prive de ces aides.</p>
<p>Le Groupe Merlin est certifié <strong>RGE QualiPV</strong> et <strong>RGE Eco Artisan</strong>. Nos techniciens réalisent l'installation complète, de l'étude de votre toiture à la mise en service et la déclaration Consuel, pour que vous puissiez bénéficier de toutes les aides auxquelles vous avez droit.</p>

<h2>Les articles de ce guide</h2>
<ul class="gm-checklist">
  <li><a href="/blog/comment-fonctionnent-panneaux-photovoltaiques"><strong>Comment fonctionnent les panneaux photovoltaïques</strong></a> — le principe technique, les composants, les types de panneaux</li>
  <li><a href="/blog/prix-installation-panneaux-photovoltaiques"><strong>Prix d'une installation photovoltaïque</strong></a> — fourchettes par puissance, ce qui est inclus, les facteurs de variation</li>
  <li><a href="/blog/aides-panneaux-photovoltaiques-nievre"><strong>Aides disponibles en ${new Date().getFullYear()}</strong></a> — prime à l'autoconsommation, TVA réduite, éco-PTZ</li>
  <li><a href="/blog/autoconsommation-ou-revente-surplus-solaire"><strong>Autoconsommation ou vente totale : que choisir ?</strong></a> — comparatif des deux modes de valorisation</li>
  <li><a href="/blog/installation-panneaux-solaires-nievre"><strong>Installer des panneaux solaires dans la Nièvre</strong></a> — particularités locales, ensoleillement, Groupe Merlin</li>
  <li><a href="/blog/entretien-panneaux-photovoltaiques"><strong>Entretien et maintenance des panneaux</strong></a> — nettoyage, surveillance, durée de vie des équipements</li>
</ul>

<p>Pour démarrer, <a href="/contact"><strong>demandez votre visite gratuite</strong></a>. Nos techniciens évaluent votre toiture, votre consommation et vous proposent une installation dimensionnée à vos besoins réels.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>, <a href="https://www.qualipv.fr/" target="_blank" rel="noopener">qualipv.fr</a>.</em></p>
`,
  },

  {
    slug: "comment-fonctionnent-panneaux-photovoltaiques",
    title: "Comment fonctionnent les panneaux photovoltaïques : de la cellule à votre prise de courant",
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "comment-fonctionnent-panneaux-photovoltaiques.jpg",
    imgDir: "blog",
    excerpt:
      "Cellules photovoltaïques, onduleur, compteur Linky, monitoring : comprendre comment fonctionne une installation solaire de A à Z, sans jargon inutile.",
    body: `

<p>L'énergie solaire photovoltaïque repose sur un principe physique découvert au XIXe siècle et industrialisé depuis les années 1970 : l'effet photoélectrique. Quand des photons frappent une cellule en silicium, ils libèrent des électrons qui se mettent en mouvement. Ce mouvement d'électrons, c'est le courant électrique.</p>

<h2>Le panneau : comment il produit du courant</h2>
<p>Un panneau photovoltaïque est composé de <strong>cellules en silicium</strong> (60 ou 72 cellules par panneau en standard résidentiel). Ces cellules sont reliées entre elles en série pour former une tension suffisante, puis assemblées sous verre trempé et encapsulées pour résister aux intempéries.</p>

<table class="gm-compare">
<thead><tr><th>Type de panneau</th><th>Monocristallin</th><th>Polycristallin</th></tr></thead>
<tbody>
<tr><td>Structure du silicium</td><td>Un seul cristal de silicium pur</td><td>Plusieurs cristaux fondus ensemble</td></tr>
<tr><td>Rendement typique</td><td>19 – 23 %</td><td>15 – 18 %</td></tr>
<tr><td>Apparence</td><td>Cellules uniformes noires</td><td>Cellules aux reflets bleutés</td></tr>
<tr><td>Encombrement à puissance égale</td><td>Moins de surface nécessaire</td><td>Plus de surface nécessaire</td></tr>
<tr><td>Usage recommandé</td><td>Standard pour le résidentiel aujourd'hui</td><td>Moins courant sur les nouvelles installations</td></tr>
</tbody>
</table>

<h2>L'onduleur : le cœur de l'installation</h2>
<p>Les panneaux produisent un <strong>courant continu</strong> (DC). Votre maison fonctionne en <strong>courant alternatif</strong> (AC) à 230 V. L'onduleur fait la conversion. C'est la pièce maîtresse de votre installation.</p>
<p>Il existe deux grandes familles :</p>
<ul class="gm-checklist">
  <li><strong>Onduleur centralisé</strong> : un seul onduleur pour tous les panneaux. Solution classique, robuste, adaptée aux toitures sans ombrage.</li>
  <li><strong>Micro-onduleurs</strong> : un onduleur par panneau. Plus coûteux, mais chaque panneau est optimisé indépendamment — intéressant si la toiture est partiellement ombragée (cheminée, vélux, arbre).</li>
</ul>
<p>La durée de vie d'un onduleur est de <strong>10 à 15 ans</strong> en moyenne — inférieure à celle des panneaux (25-30 ans). C'est le seul équipement qui nécessitera un remplacement dans la vie de votre installation.</p>

<h2>Le compteur Linky et le raccordement au réseau</h2>
<p>Le compteur Linky est bidirectionnel. Il mesure :</p>
<ul class="gm-checklist">
  <li>L'électricité que vous <strong>consommez</strong> depuis le réseau (quand vous produisez moins que ce que vous consommez, ou la nuit).</li>
  <li>L'électricité que vous <strong>injectez</strong> sur le réseau (votre surplus de production).</li>
</ul>
<p>Avant la mise en service, votre installateur dépose une demande de raccordement auprès d'Enedis et une demande de contrat d'achat auprès d'EDF OA. Ces démarches sont incluses dans l'offre clé en main de Groupe Merlin.</p>

<h2>Le monitoring : suivre votre production en temps réel</h2>
<p>Les onduleurs modernes sont connectés en Wi-Fi ou via un câble Ethernet. Une application smartphone vous permet de suivre en temps réel la production de vos panneaux, la consommation de votre maison, et les éventuelles alertes de maintenance.</p>
<p>Pour tout savoir sur l'installation dans votre département, consultez <a href="/blog/installation-panneaux-solaires-nievre">notre article sur l'installation dans la Nièvre</a>. Pour les prix, <a href="/blog/prix-installation-panneaux-photovoltaiques">notre article sur le budget complet</a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (guide du photovoltaïque), <a href="https://www.qualipv.fr/" target="_blank" rel="noopener">qualipv.fr</a>.</em></p>
`,
  },

  {
    slug: "prix-installation-panneaux-photovoltaiques",
    title: `Prix d'une installation photovoltaïque en ${CONTENT_YEAR} : budget et facteurs de variation`,
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "prix-installation-panneaux-photovoltaiques.jpg",
    imgDir: "blog",
    excerpt:
      "Combien coûte une installation solaire photovoltaïque ? Prix par puissance (3, 6, 9 kWc), ce qui est inclus dans une installation clé en main et les facteurs qui font varier le budget.",
    body: `

<p>Le prix d'une installation photovoltaïque dépend avant tout de la puissance installée, exprimée en kilowatt-crête (kWc). Plus la puissance est élevée, plus le nombre de panneaux est important, et plus l'installation produit d'électricité. Ces fourchettes sont données à titre indicatif pour une installation clé en main réalisée par un installateur RGE.</p>

<table class="gm-compare">
<thead><tr><th>Puissance</th><th>Nb de panneaux (environ)</th><th>Usage recommandé</th><th>Prix TTC (indicatif)</th></tr></thead>
<tbody>
<tr><td><strong>3 kWc</strong></td><td>7 – 9 panneaux</td><td>Petit logement, faible consommation</td><td>6 000 – 9 000 €</td></tr>
<tr><td><strong>6 kWc</strong></td><td>14 – 18 panneaux</td><td>Maison standard, famille</td><td>11 000 – 16 000 €</td></tr>
<tr><td><strong>9 kWc</strong></td><td>21 – 27 panneaux</td><td>Grande maison, forte consommation</td><td>16 000 – 22 000 €</td></tr>
</tbody>
</table>
<p><em>Fourchettes indicatives pour la France en résidentiel, TTC, TVA réduite incluse sous conditions. Les prix peuvent varier selon la région, la configuration de la toiture et les équipements choisis.</em></p>

<h2>Ce qui est inclus dans une installation clé en main</h2>
<ul class="gm-checklist">
  <li><strong>Étude préalable</strong> : visite du site, analyse de la toiture (orientation, inclinaison, structure), dimensionnement de l'installation selon votre consommation réelle.</li>
  <li><strong>Fourniture des équipements</strong> : panneaux, onduleur, câblage, système de fixation adapté au type de couverture (tuiles, ardoises, bacs acier).</li>
  <li><strong>Installation</strong> : pose des panneaux, raccordement électrique au tableau, installation de l'onduleur.</li>
  <li><strong>Démarches administratives</strong> : déclaration préalable en mairie (si nécessaire selon votre commune), demande de raccordement auprès d'Enedis, demande de contrat d'achat EDF OA.</li>
  <li><strong>Certificat Consuel</strong> : attestation de conformité de votre installation électrique, obligatoire pour la mise en service.</li>
  <li><strong>Mise en service et formation</strong> : démarrage de l'installation, paramétrage du monitoring, explication du fonctionnement.</li>
</ul>

<h2>Les facteurs qui font varier le prix</h2>

<table class="gm-compare">
<thead><tr><th>Facteur</th><th>Impact sur le prix</th></tr></thead>
<tbody>
<tr><td>Type de toiture</td><td>Une toiture en ardoise ou à plusieurs versants est plus complexe à équiper qu'une toiture en tuile plate à un seul pan</td></tr>
<tr><td>Hauteur et accessibilité</td><td>Un toit difficile d'accès nécessite des équipements de sécurité supplémentaires</td></tr>
<tr><td>Type d'onduleur</td><td>Les micro-onduleurs coûtent plus cher qu'un onduleur centralisé</td></tr>
<tr><td>Qualité des panneaux</td><td>Les panneaux haut de gamme (garantie 25 ans, rendement ≥ 21 %) sont plus chers que les entrées de gamme</td></tr>
<tr><td>Travaux électriques</td><td>Si votre tableau électrique est vétuste, une mise aux normes peut être nécessaire</td></tr>
<tr><td>Batterie de stockage</td><td>Ajouter une batterie augmente significativement le coût mais améliore l'autoconsommation</td></tr>
</tbody>
</table>

<h2>Après les aides, quel reste à charge ?</h2>
<p>La prime à l'autoconsommation et la TVA réduite réduisent le coût global. L'éco-PTZ peut financer une partie du reste à charge sans intérêts. Pour les montants exacts des aides, consultez <a href="/blog/aides-panneaux-photovoltaiques-nievre">notre article sur les aides disponibles</a>.</p>
<p>Pour un devis adapté à votre logement dans la Nièvre ou l'Yonne, <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>.</em></p>
`,
  },

  {
    slug: "aides-panneaux-photovoltaiques-nievre",
    title: `Aides pour panneaux photovoltaïques en ${CONTENT_YEAR} : ce à quoi vous avez droit dans la Nièvre`,
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "aides-panneaux-photovoltaiques-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Prime à l'autoconsommation, TVA réduite, éco-PTZ : les aides disponibles pour une installation solaire dans la Nièvre et l'Yonne. Conditions d'accès et rôle du RGE QualiPV.",
    body: `

<p>En France, plusieurs dispositifs permettent de réduire le coût d'une installation photovoltaïque. Ils sont conditionnés au fait de passer par un installateur certifié RGE QualiPV — ce qui est le cas de Groupe Merlin. Voici les principales aides disponibles.</p>

<h2>La prime à l'autoconsommation</h2>
<p>La prime à l'autoconsommation est le dispositif de soutien principal pour les installations résidentielles en autoconsommation avec vente du surplus. Elle est gérée par EDF dans le cadre de l'Obligation d'Achat (OA).</p>
<ul class="gm-checklist">
  <li><strong>Qui peut en bénéficier</strong> : tout propriétaire ou locataire (avec accord du bailleur) installant des panneaux en autoconsommation sur sa résidence principale ou secondaire.</li>
  <li><strong>Montant</strong> : le montant de la prime est fixé par arrêté ministériel, révisé chaque trimestre. Il varie selon la puissance de l'installation. Consultez les montants en vigueur sur <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</li>
  <li><strong>Quand elle est versée</strong> : en une seule fois, lors de la mise en service de l'installation.</li>
  <li><strong>Condition principale</strong> : l'installation doit être réalisée par un installateur certifié RGE QualiPV.</li>
</ul>
<p>En parallèle, EDF OA rachète votre surplus d'électricité à un tarif fixé par arrêté. Ce tarif de rachat est garanti pendant 20 ans à partir de la date de mise en service.</p>

<h2>La TVA à taux réduit</h2>
<p>Pour les installations réalisées sur une résidence principale ou secondaire construite depuis plus de 2 ans, la TVA applicable sur la fourniture et la pose des équipements photovoltaïques est réduite (par rapport au taux normal de 20 %). Les conditions exactes sont définies par le Code général des impôts et peuvent évoluer — votre installateur RGE vous confirmera le taux applicable à votre situation.</p>

<h2>L'éco-PTZ (prêt à taux zéro)</h2>
<p>L'éco-PTZ est un prêt bancaire sans intérêts, destiné à financer des travaux d'amélioration énergétique, dont l'installation de panneaux photovoltaïques en autoconsommation.</p>
<ul class="gm-checklist">
  <li><strong>Montant maximum</strong> : jusqu'à 50 000 € pour un bouquet de travaux (depuis la réforme de 2024).</li>
  <li><strong>Durée de remboursement</strong> : jusqu'à 20 ans.</li>
  <li><strong>Où le demander</strong> : auprès de votre banque (les banques partenaires de l'État proposent l'éco-PTZ).</li>
  <li><strong>Condition</strong> : travaux réalisés par un professionnel RGE.</li>
</ul>

<h2>Récapitulatif des aides</h2>
<table class="gm-compare">
<thead><tr><th>Aide</th><th>Nature</th><th>Condition principale</th><th>Où se renseigner</th></tr></thead>
<tbody>
<tr><td>Prime à l'autoconsommation</td><td>Prime versée en une fois</td><td>RGE QualiPV</td><td>france-renov.gouv.fr</td></tr>
<tr><td>Tarif de rachat du surplus</td><td>Revenu sur 20 ans</td><td>Contrat EDF OA</td><td>edf-oa.fr</td></tr>
<tr><td>TVA réduite</td><td>Réduction du prix TTC</td><td>Résidence > 2 ans + RGE</td><td>Votre installateur</td></tr>
<tr><td>Éco-PTZ</td><td>Prêt sans intérêts</td><td>RGE + banque partenaire</td><td>Votre banque</td></tr>
</tbody>
</table>

<h2>Le rôle du RGE QualiPV</h2>
<p>Sans installateur certifié RGE QualiPV, vous perdez l'accès à la quasi-totalité des aides listées ci-dessus. Groupe Merlin est certifié RGE QualiPV et RGE Eco Artisan. Nous gérons l'ensemble des démarches administratives liées à l'obtention des aides dans le cadre de notre offre clé en main.</p>
<p>Pour un bilan personnalisé des aides auxquelles vous avez droit : <a href="/contact"><strong>contactez-nous</strong></a>. Pour comprendre les deux modes de valorisation de votre production : <a href="/blog/autoconsommation-ou-revente-surplus-solaire">autoconsommation ou vente totale</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.service-public.fr/" target="_blank" rel="noopener">service-public.fr</a>.</em></p>
`,
  },

  {
    slug: "autoconsommation-ou-revente-surplus-solaire",
    title: "Autoconsommation ou revente du surplus : quelle stratégie pour votre installation solaire ?",
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "autoconsommation-ou-revente-surplus-solaire.jpg",
    imgDir: "blog",
    excerpt:
      "Faut-il vendre toute votre production solaire ou la consommer vous-même ? Comparatif honnête entre autoconsommation avec vente du surplus et vente totale pour une maison en Nièvre ou dans l'Yonne.",
    body: `

<p>Quand on installe des panneaux photovoltaïques, on doit choisir comment valoriser sa production. Il existe deux grandes options : l'autoconsommation avec vente du surplus, et la vente totale. Pour la grande majorité des logements résidentiels, la première option est la plus adaptée. Voici pourquoi.</p>

<h2>L'autoconsommation avec vente du surplus</h2>
<p>Dans ce mode, votre installation fonctionne ainsi :</p>
<ul class="gm-checklist">
  <li>Quand vos panneaux produisent, vous consommez <strong>en priorité votre propre production</strong>. Chaque kWh que vous consommez sans passer par le réseau, c'est un kWh que vous n'achetez pas à votre fournisseur d'électricité.</li>
  <li>Si votre production dépasse votre consommation en temps réel, le surplus est <strong>injecté sur le réseau</strong> et racheté par EDF OA à un tarif fixé par arrêté, garanti pendant 20 ans.</li>
  <li>La nuit ou par temps couvert, vous consommez normalement depuis le réseau.</li>
</ul>
<p>C'est le fonctionnement le plus courant pour les maisons individuelles. Il vous permet de réduire votre facture d'électricité sur les heures de production (typiquement la journée) tout en touchant un revenu sur votre surplus.</p>

<h2>La vente totale</h2>
<p>Dans ce mode, toute votre production est vendue au réseau, et vous achetez séparément toute votre consommation à votre fournisseur. Le tarif d'achat total (pour les installations résidentielles < 100 kWc) est fixé par arrêté. Ce mode est généralement moins adapté au résidentiel car le tarif de revente est souvent inférieur au prix d'achat de l'électricité.</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>Autoconsommation + vente du surplus</th><th>Vente totale</th></tr></thead>
<tbody>
<tr><td>Logement concerné</td><td>Résidentiel — maison individuelle</td><td>Cas spécifiques, grandes installations</td></tr>
<tr><td>Avantage principal</td><td>Réduction directe de la facture électrique</td><td>Revenu sur toute la production</td></tr>
<tr><td>Prime à l'autoconsommation</td><td>Oui</td><td>Non applicable</td></tr>
<tr><td>Tarif de rachat</td><td>Tarif surplus (fraction de la production)</td><td>Tarif d'achat total</td></tr>
<tr><td>Compteur Linky</td><td>Bidirectionnel — mesure entrée et sortie</td><td>Unidirectionnel en sortie</td></tr>
<tr><td>Recommandé pour</td><td>La quasi-totalité des maisons individuelles</td><td>À étudier au cas par cas</td></tr>
</tbody>
</table>

<h2>Faut-il ajouter une batterie de stockage ?</h2>
<p>Une batterie de stockage vous permet de conserver l'électricité produite en journée pour la consommer le soir, quand vos panneaux ne produisent plus. Cela améliore votre <strong>taux d'autoconsommation</strong> (la part de votre production que vous consommez vous-même).</p>
<ul class="gm-checklist">
  <li><strong>Avantage</strong> : vous consommez plus de votre propre production, réduisant davantage votre facture.</li>
  <li><strong>Coût</strong> : une batterie résidentielle représente un investissement supplémentaire significatif (quelques milliers d'euros selon la capacité).</li>
  <li><strong>Rentabilité</strong> : dépend de votre profil de consommation et du tarif de votre fournisseur. À étudier avec votre installateur.</li>
  <li><strong>Durée de vie</strong> : 10 à 15 ans selon la technologie (lithium-fer-phosphate LFP ou lithium-ion).</li>
</ul>

<h2>Notre recommandation</h2>
<p>Pour une maison individuelle dans la Nièvre ou l'Yonne, l'autoconsommation avec vente du surplus est le choix le plus adapté dans la très grande majorité des cas. C'est ce mode que nous dimensionnons par défaut lors de notre étude préalable.</p>
<p>La question de la batterie se pose surtout si votre consommation est décalée dans le temps par rapport à votre production (maison occupée surtout en soirée, appareils qui tournent la nuit). Nous en discutons lors de la visite de votre logement.</p>
<p>Pour démarrer : <a href="/contact"><strong>demandez votre visite gratuite</strong></a>. Pour les prix : <a href="/blog/prix-installation-panneaux-photovoltaiques">budget et fourchettes par puissance</a>. Guide complet : <a href="/blog/panneaux-photovoltaiques-guide-complet">guide photovoltaïque Groupe Merlin</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.edf.fr/edf-oa" target="_blank" rel="noopener">edf-oa.fr</a>.</em></p>
`,
  },

  {
    slug: "installation-panneaux-solaires-nievre",
    title: "Installer des panneaux solaires dans la Nièvre et l'Yonne : ce qu'il faut savoir",
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "installation-panneaux-solaires-nievre.jpg",
    imgDir: "blog",
    excerpt:
      "Ensoleillement, types de toitures, démarches locales, installateur RGE : tout ce qui est spécifique à une installation solaire dans la Nièvre (58) et l'Yonne (89).",
    body: `

<p>La Bourgogne n'est pas le Sud de la France. Mais contrairement à une idée reçue, elle bénéficie d'un ensoleillement suffisant pour rendre une installation photovoltaïque rentable. La Nièvre et l'Yonne présentent en outre des caractéristiques locales qui influencent le dimensionnement et la pose des installations.</p>

<h2>L'ensoleillement dans la Nièvre et l'Yonne</h2>
<p>La Bourgogne appartient aux zones climatiques H1 et H2 selon la classification française. L'ensoleillement y est modéré, sensiblement inférieur à celui du pourtour méditerranéen, mais supérieur à celui des régions du Nord et de l'Ouest. Les installations photovoltaïques y sont rentables, notamment en autoconsommation, où chaque kWh produit est valorisé au prix d'achat de l'électricité — qui augmente régulièrement.</p>
<p>L'orientation et l'inclinaison de la toiture jouent un rôle important. Un pan de toiture orienté plein sud à 30° d'inclinaison est idéal. Un pan orienté sud-est ou sud-ouest, ou à une inclinaison différente, reste exploitable avec une légère perte de rendement.</p>

<h2>Les types de toitures dans la Nièvre</h2>
<p>La Nièvre est une région de bâti rural ancien : longères en pierre, maisons de bourg, corps de ferme transformés. Les configurations de toitures varient significativement :</p>

<table class="gm-compare">
<thead><tr><th>Type de toiture</th><th>Compatibilité PV</th><th>Remarques</th></tr></thead>
<tbody>
<tr><td>Tuiles mécaniques (terra cotta)</td><td>Très bonne</td><td>Système de fixation standard, le plus courant dans la région</td></tr>
<tr><td>Ardoises naturelles</td><td>Bonne</td><td>Fixation adaptée, attention à l'état des ardoises avant pose</td></tr>
<tr><td>Bacs acier (toiture plate ou faible pente)</td><td>Bonne</td><td>Fixation par bacs ou lest selon la structure</td></tr>
<tr><td>Toiture zinc ou cuivre</td><td>Possible avec précautions</td><td>Compatibilité à vérifier selon l'état et l'âge de la couverture</td></tr>
<tr><td>Chaume ou couverture végétale</td><td>Non compatible</td><td>Pas d'installation possible</td></tr>
</tbody>
</table>

<h2>Les démarches administratives locales</h2>
<ul class="gm-checklist">
  <li><strong>Déclaration préalable en mairie</strong> : pour les installations sur toiture en zone urbaine ou dans les communes avec un PLU restrictif, une déclaration préalable de travaux est requise. Dans les zones protégées (abords de monument historique, ZPPAUP), l'avis des Architectes des Bâtiments de France peut être nécessaire. Groupe Merlin identifie ces contraintes lors de l'étude préalable.</li>
  <li><strong>Raccordement Enedis</strong> : la demande de raccordement est déposée par l'installateur. Le délai de traitement par Enedis peut varier selon la région et la période. Nous gérons cette démarche dans le cadre de notre offre clé en main.</li>
  <li><strong>Contrat EDF OA</strong> : la demande de contrat d'achat du surplus est déposée simultanément. Elle est nécessaire pour commencer à être rémunéré pour votre production injectée.</li>
</ul>

<h2>Pourquoi choisir un installateur local dans la Nièvre</h2>
<p>Groupe Merlin est implanté dans la Nièvre depuis plus de 14 ans. Nos équipes connaissent les configurations de toitures locales, les contraintes administratives des communes de la Nièvre et de l'Yonne, et les contraintes liées au bâti ancien. Nos techniciens interviennent en Nièvre (58) et dans l'Yonne (89).</p>
<p>Nous sommes certifiés <strong>RGE QualiPV</strong> et <strong>RGE Eco Artisan</strong>. Ces certifications sont obligatoires pour que vous puissiez bénéficier des aides d'État.</p>
<p>Pour un bilan de votre toiture et un devis adapté : <a href="/contact"><strong>demandez votre visite préalable gratuite</strong></a>. Pour les aides disponibles : <a href="/blog/aides-panneaux-photovoltaiques-nievre">notre article sur les aides</a>.</p>
<p><em>Sources : <a href="https://www.enedis.fr/" target="_blank" rel="noopener">enedis.fr</a>, <a href="https://www.qualipv.fr/" target="_blank" rel="noopener">qualipv.fr</a>, <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>.</em></p>
`,
  },

  {
    slug: "entretien-panneaux-photovoltaiques",
    title: "Entretien et maintenance des panneaux photovoltaïques : ce qu'il faut faire et quand",
    category: "Conseils",
    cocon: "panneaux-photovoltaiques",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-28",
    img: "entretien-panneaux-photovoltaiques.jpg",
    imgDir: "blog",
    excerpt:
      "Nettoyage, contrôle de l'onduleur, monitoring, durée de vie des équipements : le guide complet de l'entretien d'une installation photovoltaïque pour maximiser sa production sur le long terme.",
    body: `

<p>Une installation photovoltaïque bien conçue et installée par un professionnel RGE est un équipement très fiable. Il n'a pas de pièces mobiles (sauf l'onduleur qui a des condensateurs). Mais comme tout équipement technique, il bénéficie d'une surveillance régulière pour maintenir ses performances dans le temps.</p>

<h2>Les panneaux : auto-nettoyants dans la plupart des cas</h2>
<p>Dans la Nièvre et l'Yonne, les précipitations régulières entretiennent naturellement la surface des panneaux. La pluie rince la poussière et les dépôts légers. Dans la grande majorité des cas, aucun nettoyage spécifique n'est nécessaire.</p>
<p>Des situations particulières peuvent justifier un nettoyage ciblé :</p>
<ul class="gm-checklist">
  <li><strong>Dépôts de pollution</strong> : à proximité d'une route très fréquentée, d'une exploitation agricole (poussières, pulvérisations) ou d'une zone industrielle.</li>
  <li><strong>Fientes d'oiseaux</strong> : les fientes concentrées sur une cellule réduisent localement la production. Elles sont à nettoyer à l'eau claire et à la brosse douce.</li>
  <li><strong>Lichens ou mousses</strong> : sur des toitures peu inclinées ou en zone forestière humide, des lichens peuvent s'installer en bordure de panneau. Un traitement préventif peut être conseillé.</li>
</ul>
<p>Pour le nettoyage : eau claire, brosse douce, sans produits chimiques agressifs ni nettoyeur haute pression. Mieux vaut confier cette opération à un professionnel habilité à travailler en hauteur.</p>

<h2>L'onduleur : la pièce à surveiller</h2>
<p>L'onduleur est l'équipement qui a la durée de vie la plus courte dans une installation photovoltaïque : <strong>10 à 15 ans</strong> en moyenne contre 25 à 30 ans pour les panneaux. La plupart des onduleurs modernes sont équipés d'un système de monitoring qui signale automatiquement les anomalies.</p>

<table class="gm-compare">
<thead><tr><th>Signe à surveiller</th><th>Cause possible</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Production inférieure aux années précédentes (même météo)</td><td>Encrassement, défaut onduleur, ombrage nouveau (végétation)</td><td>Vérification par un technicien</td></tr>
<tr><td>Alerte sur l'application monitoring</td><td>Défaut onduleur, coupure réseau, défaut câblage</td><td>Vérifier le code d'erreur — contacter l'installateur</td></tr>
<tr><td>Onduleur éteint en journée</td><td>Surchauffe (ventilation insuffisante), défaut électrique</td><td>Vérifier la ventilation autour de l'onduleur — contacter l'installateur</td></tr>
<tr><td>Bruits inhabituels dans l'onduleur</td><td>Défaillance des condensateurs</td><td>Contacter l'installateur pour diagnostic</td></tr>
</tbody>
</table>

<h2>Checklist de maintenance annuelle recommandée</h2>
<ul class="gm-checklist">
  <li>Vérifier la production mensuelle via le monitoring et la comparer aux années précédentes.</li>
  <li>Contrôler visuellement les panneaux depuis le sol ou via une caméra : pas de panneau fissuré, pas de dépôt important.</li>
  <li>Vérifier que la ventilation autour de l'onduleur n'est pas obstruée (poussière, toiles d'araignée).</li>
  <li>Contrôler que les câbles apparents ne présentent pas de signe d'usure ou de rongeur (en zone rurale).</li>
  <li>Vérifier que les connexions au tableau électrique sont correctement serrées (à faire réaliser par un électricien).</li>
</ul>

<h2>Les garanties constructeur</h2>
<p>Les panneaux photovoltaïques de qualité bénéficient de deux types de garanties :</p>
<ul class="gm-checklist">
  <li><strong>Garantie produit</strong> : 10 à 12 ans sur les vices de fabrication (selon les fabricants).</li>
  <li><strong>Garantie de performance</strong> : 25 ans en général, avec un engagement de production minimale (ex. 80 % de la puissance nominale à 25 ans). C'est cette garantie qui protège votre investissement sur le long terme.</li>
</ul>
<p>L'onduleur est généralement garanti 5 à 10 ans (selon le fabricant), avec des extensions de garantie disponibles à l'achat.</p>

<h2>Faire appel à Groupe Merlin pour votre maintenance</h2>
<p>Nos techniciens RGE QualiPV interviennent dans la Nièvre et l'Yonne pour la maintenance préventive et curative de toutes les installations, y compris celles que nous n'avons pas posées. Nettoyage des panneaux, diagnostic onduleur, vérification du câblage : <a href="/contact"><strong>contactez-nous pour un diagnostic</strong></a>.</p>
<p>Pour tout comprendre sur votre installation : <a href="/blog/panneaux-photovoltaiques-guide-complet">guide complet photovoltaïque</a>. Pour les prix d'une nouvelle installation : <a href="/blog/prix-installation-panneaux-photovoltaiques">fourchettes et budget</a>.</p>
<p><em>Sources : <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a> (guide du photovoltaïque), <a href="https://www.qualipv.fr/" target="_blank" rel="noopener">qualipv.fr</a>.</em></p>
`,
  },
  // ── FIN COCON PANNEAUX PHOTOVOLTAÏQUES ────────────────────────────────────

  {
    slug: "climatisation-reversible-canicule",
    title: "Canicule : pourquoi la clim réversible est le bon choix",
    category: "Climatisation",
    excerpt:
      "Avec des étés de plus en plus chauds dans la Nièvre, la climatisation devient un confort essentiel. Pourquoi privilégier le réversible ?",
    img: "01-hero-bg-02-climatiseur.jpg",
    imgDir: "hero",
    isAdvice: true,
    body:
      "<p><em>Article en cours de rédaction par notre équipe.</em></p>" +
      "<p>La climatisation réversible (ou pompe à chaleur air/air) rafraîchit l'été ET chauffe en mi-saison. Trois avantages clés : double usage, consommation maîtrisée, confort instantané.</p>",
  },
  {
    slug: "chaudiere-poele-granules-rentabilite",
    title: "Chaudière à granulés ou poêle à granulés : laquelle choisir pour votre maison ?",
    category: "Conseils",
    cocon: "chaudieres-poele-granules",
    draft: true,
    isAdvice: true,
    datePublished: "2026-05-27",
    img: "chaudiere-poele-granules-rentabilite.jpg",
    imgDir: "blog",
    excerpt:
      "Chaudière à granulés ou poêle à granulés : comparatif honnête pour les maisons de la Nièvre et l'Yonne. Prix, aides, usage, installation — tout pour décider sans vous tromper.",
    body: `

<p>Chaudière à granulés ou poêle à granulés : la confusion est fréquente. Ces deux équipements utilisent le même combustible, mais leurs usages, leurs prix et leurs impacts sur votre logement n'ont rien à voir. Choisir l'un quand il faudrait l'autre, c'est risquer de faire un mauvais investissement. Voici le comparatif pour décider sans regret.</p>

<h2>La différence fondamentale</h2>
<p>La chaudière à granulés <strong>remplace votre système de chauffage central</strong>. Elle produit de l'eau chaude qui circule dans vos radiateurs ou votre plancher chauffant, et alimente votre ballon d'eau chaude sanitaire. Elle se pose dans votre chaufferie, à la place de votre ancienne chaudière fioul ou gaz.</p>
<p>Le poêle à granulés, lui, est un appareil indépendant. Il chauffe l'espace dans lequel il est installé par rayonnement et convection. Il ne modifie pas votre circuit de chauffage central.</p>

<table class="gm-compare">
<thead><tr><th>Critère</th><th>Chaudière à granulés</th><th>Poêle à granulés</th></tr></thead>
<tbody>
<tr><td>Rôle</td><td>Chauffage central complet + ECS</td><td>Chauffage d'une pièce ou appoint</td></tr>
<tr><td>Prérequis</td><td>Circuit hydraulique existant (radiateurs, plancher)</td><td>Aucun — s'installe partout avec un conduit</td></tr>
<tr><td>Travaux</td><td>Remplacement de chaudière + silo</td><td>Pose + conduit de fumée</td></tr>
<tr><td>Prix installé</td><td>15 000 – 25 000 €</td><td>3 000 – 7 500 €</td></tr>
<tr><td>Aides disponibles</td><td>MaPrimeRénov' élevée + CEE + TVA 5,5 % + éco-PTZ</td><td>MaPrimeRénov' (sous conditions) + CEE</td></tr>
<tr><td>Couverture</td><td>Toute la maison</td><td>La pièce d'installation (et zones ouvertes adjacentes)</td></tr>
<tr><td>Alimentation</td><td>Silo intégré ou externe, alimentation automatique</td><td>Réservoir intégré (15-30 kg), remplissage en sac</td></tr>
</tbody>
</table>

<h2>Quand choisir la chaudière à granulés</h2>
<p>La chaudière est le bon choix si votre maison dispose d'un circuit de chauffage central (des radiateurs ou un plancher chauffant raccordés à une chaudière). Dans ce cas, la chaudière à granulés remplace votre ancienne chaudière sans modifier vos émetteurs de chaleur.</p>
<p>C'est aussi la solution pour ceux qui veulent abandonner définitivement le fioul ou le gaz tout en gardant le même niveau de confort. Les aides d'État sont plus importantes pour la chaudière à granulés que pour le poêle, ce qui réduit significativement le reste à charge.</p>

<h2>Quand choisir le poêle à granulés</h2>
<p>Le poêle est la bonne solution si :</p>
<ul class="gm-checklist">
  <li>Vous n'avez pas de circuit hydraulique central (pas de radiateurs en eau, pas de plancher chauffant raccordé).</li>
  <li>Vous souhaitez chauffer prioritairement une grande pièce ouverte (séjour, cuisine-salon) sans toucher au reste du logement.</li>
  <li>Votre budget ne permet pas l'investissement d'une chaudière, et vous cherchez une solution d'appoint ou principale pour un espace ciblé.</li>
  <li>Vous avez déjà une chaudière PAC ou gaz satisfaisante et vous voulez un complément de chauffage d'ambiance.</li>
</ul>

<h2>Le cas particulier du poêle à eau</h2>
<p>Il existe un troisième équipement souvent oublié : le <strong>poêle à eau</strong> (ou poêle hydro). Il chauffe la pièce comme un poêle classique, mais transfère également une partie de la chaleur au circuit hydraulique. C'est une solution intermédiaire, mais elle nécessite un circuit existant et une installation plus complexe. Le coût est plus élevé qu'un poêle standard (3 000 à 7 000 € pour l'équipement) et les aides sont moins importantes que pour une vraie chaudière.</p>

<h2>Et par rapport à une pompe à chaleur ?</h2>
<p>La pompe à chaleur air/eau est une autre alternative pour remplacer une chaudière fioul. Elle fonctionne sur l'électricité (et non le bois), bénéficie d'aides d'État importantes (jusqu'à 10 800 € pour les ménages modestes) et est particulièrement adaptée aux maisons bien isolées. La chaudière à granulés est souvent plus adaptée aux maisons anciennes moins bien isolées de la Nièvre rurale, car elle produit une eau plus chaude (80-90°C) compatible avec des radiateurs anciens.</p>
<p>Pour comparer PAC et chaudière à granulés : <a href="/blog/pompe-a-chaleur-air-eau-ou-air-air">PAC air/eau ou air/air : deux technologies différentes</a>.</p>

<p class="gm-pullquote">La bonne question n'est pas "chaudière ou poêle ?" mais "est-ce que ma maison a des radiateurs en eau ?" Si oui, la chaudière. Sinon, le poêle peut être la bonne solution.</p>

<h2>Notre recommandation dans la Nièvre et l'Yonne</h2>
<p>La grande majorité des maisons individuelles de la Nièvre et de l'Yonne ont un circuit de radiateurs alimenté par une chaudière fioul. Pour ces logements, la chaudière à granulés est le remplacement naturel et le plus performant économiquement, une fois les aides prises en compte.</p>
<p>Le poêle à granulés trouve sa place dans les logements sans circuit central, dans les maisons récentes bien isolées qui veulent un chauffage d'ambiance, ou comme appoint dans des maisons très grandes.</p>

<h2>Décider avec une visite préalable</h2>
<p>La meilleure façon de décider, c'est de nous inviter chez vous. Nous évaluons votre logement, votre système de chauffage actuel et vos habitudes pour vous recommander la solution la plus adaptée, avec le calcul des aides déduites. <a href="/contact"><strong>Demandez votre visite préalable gratuite</strong></a>.</p>
<p>Pour les prix : <a href="/blog/prix-chaudiere-granules">Prix d'une chaudière à granulés</a> et <a href="/blog/prix-poele-granules">Prix d'un poêle à granulés</a>. Pour les aides : <a href="/blog/aides-chaudiere-granules">Aides pour une chaudière à granulés en ${CONTENT_YEAR}</a>. Guide complet : <a href="/blog/chaudieres-granules-guide-complet">Guide chaudière à granulés dans la Nièvre</a>.</p>
<p><em>Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener">france-renov.gouv.fr</a>, <a href="https://www.ademe.fr/" target="_blank" rel="noopener">ademe.fr</a>.</em></p>
`,
  },
];

/**
 * Déploiement preview : si NEXT_PUBLIC_SHOW_DRAFTS === 'true', les brouillons sont
 * affichés dans les listes (pour faire valider le design + tous les articles au client,
 * ex. repo `vue-blog-article-seo`). En prod cette variable est absente → comportement normal.
 */
const SHOW_DRAFTS = process.env.NEXT_PUBLIC_SHOW_DRAFTS === 'true';
const isVisible = (a: BlogArticle) => SHOW_DRAFTS || !a.draft;

/** Articles affichés sur la home (carousel S7) et la page /articles. Exclut les drafts (sauf preview). */
export const BLOG_NEWS = BLOG_ARTICLES.filter((a) => !a.isAdvice && isVisible(a));
/** Articles affichés sur la page /blog-conseil. Exclut les drafts (sauf preview). */
export const BLOG_ADVICE = BLOG_ARTICLES.filter((a) => a.isAdvice && isVisible(a));
/** Articles publiés (filtre uniquement les drafts, sauf preview) — utilisé par le sitemap.
 * `/blog/[slug]` n'utilise PAS ce filtre, pour que les drafts restent accessibles via leur URL. */
export const PUBLISHED_ARTICLES = BLOG_ARTICLES.filter((a) => isVisible(a));
