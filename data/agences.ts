export type Agence = {
  title: string;
  name: string;
  address: string;
  phoneFixe: string;
  phoneFixeHref: string;
  phoneMob: string;
  phoneMobHref: string;
  email: string;
  emailHref: string;
  hours: string;
  description: string;
  mapsQuery: string;
  coords: { lat: number; lon: number };
  /**
   * Si true → l'agence est en standby (pas affichée publiquement, route 404,
   * pas de routing CP vers cette agence). Pour la réactiver, passer à false.
   */
  archived?: boolean;
};

export const AGENCES: Record<string, Agence> = {
  clamecy: {
    title: 'Agence de Clamecy',
    name: 'Clamecy',
    address: '10 Avenue Saint-Exupéry, 58500 CLAMECY',
    phoneFixe: '03 86 20 31 17',
    phoneFixeHref: 'tel:+33386203117',
    phoneMob: '06 49 47 97 60',
    phoneMobHref: 'tel:+33649479760',
    email: 'agence.clamecy@groupe-merlin.fr',
    emailHref: 'mailto:agence.clamecy@groupe-merlin.fr',
    hours: 'Lun–Ven 8h–12h et 13h30–18h · Fermé le samedi',
    description:
      "Agence historique du Groupe Merlin. C'est à Clamecy que sont implantés le siège et le showroom du groupe. Équipe complète : installateurs, plombiers, chauffagistes, accompagnée de spécialistes pour chacune de nos expertises.",
    mapsQuery: '10 Avenue Saint-Exupéry, 58500 Clamecy',
    coords: { lat: 47.4602, lon: 3.5215 },
  },
  corbigny: {
    title: 'Agence de Corbigny',
    name: 'Corbigny',
    address: '22 Grande Rue, 58800 CORBIGNY',
    phoneFixe: '03 86 22 01 48',
    phoneFixeHref: 'tel:+33386220148',
    phoneMob: '06 38 75 24 08',
    phoneMobHref: 'tel:+33638752408',
    email: 'agence.corbigny@groupe-merlin.fr',
    emailHref: 'mailto:agence.corbigny@groupe-merlin.fr',
    hours: 'Lun–Ven 8h–12h et 13h30–18h · Fermé le samedi',
    description:
      "Deuxième agence du Groupe Merlin ouverte le 1er juin 2026. Nous intervenons rapidement dans les départements de la Nièvre et de la Yonne pour l'ensemble de nos expertises.",
    mapsQuery: '22 Grande Rue, 58800 Corbigny',
    coords: { lat: 47.2553, lon: 3.6797 },
  },
  'mailly-la-ville': {
    title: 'Agence de Mailly-la-Ville',
    name: 'Mailly-la-Ville',
    address: '[Adresse à confirmer], 89270 Mailly-la-Ville',
    phoneFixe: '[À confirmer]',
    phoneFixeHref: '#',
    phoneMob: '[À confirmer]',
    phoneMobHref: '#',
    email: 'contact@groupe-merlin.fr',
    emailHref: 'mailto:contact@groupe-merlin.fr',
    hours: 'Lun–Ven 8h–18h · Sam 9h–12h',
    description:
      "Première agence du groupe dans le département de la Yonne. Ouverture en juillet 2026. Nous intervenons rapidement dans tout le département pour l'ensemble de nos expertises.",
    mapsQuery: 'Mailly-la-Ville, Yonne, France',
    coords: { lat: 47.6128, lon: 3.6564 },
    archived: true,
  },
};

/** Slugs des agences ACTIVES (les archivées sont exclues). */
export const AGENCE_SLUGS = Object.entries(AGENCES)
  .filter(([, ag]) => !ag.archived)
  .map(([slug]) => slug);
