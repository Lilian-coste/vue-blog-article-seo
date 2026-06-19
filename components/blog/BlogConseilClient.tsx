'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import type { BlogArticle } from '@/data/blog';

// ── Ordre d'affichage des 6 articles guides (toujours en haut) ──────────────
const HUB_SLUGS = [
  'pompe-a-chaleur-guide-complet',
  'climatisation-guide-complet',
  'salle-de-bain-guide-complet',
  'adoucisseur-guide-complet',
  'chaudieres-granules-guide-complet',
  'panneaux-photovoltaiques-guide-complet',
];
const HUB_SET = new Set(HUB_SLUGS);

const EXPERTISE_LABELS: Record<string, string> = {
  'pompe-a-chaleur': 'Pompe à chaleur',
  'climatisation': 'Climatisation',
  'plomberie-salle-de-bain': 'Salle de bain',
  'adoucisseur': 'Adoucisseur & eau',
  'chaudieres-poele-granules': 'Chaudières & Granulés',
  'panneaux-photovoltaiques': 'Photovoltaïque',
};

const THEMES = ['Guide complet', 'Comprendre', 'Aides', 'Prix', 'Installation', 'Entretien', 'Pannes', 'Local'];

function getTheme(slug: string): string {
  if (HUB_SET.has(slug)) return 'Guide complet';
  if (/aides|maprimerenov|cee|eco-ptz/.test(slug)) return 'Aides';
  if (/(^|-)prix-|budget(-|$)/.test(slug)) return 'Prix';
  if (/entretien|duree-de-vie/.test(slug)) return 'Entretien';
  if (/pannes|ne-chauffe|ne-refroidit|depannage/.test(slug)) return 'Pannes';
  if (/installateur|nievre|yonne|bourgogne|maison-pierre/.test(slug)) return 'Local';
  if (/installation|etapes|renovation|dimensionnement|douche|marques|petite-salle|autoconsommation/.test(slug)) return 'Installation';
  return 'Comprendre';
}

const PAGE_SIZE = 6;

// ── Chevron SVG ─────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      width="10"
      height="10"
      aria-hidden="true"
      className="gm-conseil-filters__chevron"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
    >
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Card article ─────────────────────────────────────────────────────────────
function ArticleCard({ article }: { article: BlogArticle }) {
  const imgDir = article.imgDir || 'hero';
  return (
    <Link className="gm-articles-page__card" href={`/blog/${article.slug}`}>
      <div className="gm-articles-page__media">
        <img
          className="gm-articles-page__img"
          src={`/images/${imgDir}/${article.img}`}
          alt=""
          loading="lazy"
        />
        <span className="gm-articles-page__read-btn">Lire</span>
      </div>
      <span className="gm-articles-page__category">{article.category}</span>
      <h2 className="gm-articles-page__card-title">{article.title}</h2>
      <p className="gm-articles-page__card-excerpt">{article.excerpt}</p>
    </Link>
  );
}

// ── Composant principal ──────────────────────────────────────────────────────
export default function BlogConseilClient({ allArticles }: { allArticles: BlogArticle[] }) {
  const [expertiseFilter, setExpertiseFilter] = useState('');
  const [themeFilter, setThemeFilter] = useState('');
  // Démarre à 0 : les extras s'affichent seulement après un clic sur "Plus d'articles"
  const [visibleCount, setVisibleCount] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<'expertise' | 'theme' | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Ferme les dropdowns au clic en dehors
  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const hubArticles = useMemo(
    () => HUB_SLUGS.map(s => allArticles.find(a => a.slug === s)).filter(Boolean) as BlogArticle[],
    [allArticles],
  );

  const nonHubArticles = useMemo(
    () => allArticles.filter(a => !HUB_SET.has(a.slug)),
    [allArticles],
  );

  const isFiltered = Boolean(expertiseFilter || themeFilter);

  const filteredPool = useMemo(() => {
    const pool = isFiltered ? allArticles : nonHubArticles;
    return pool.filter(a => {
      if (expertiseFilter && a.cocon !== expertiseFilter) return false;
      if (themeFilter && getTheme(a.slug) !== themeFilter) return false;
      return true;
    });
  }, [allArticles, nonHubArticles, expertiseFilter, themeFilter, isFiltered]);

  const visibleExtras = filteredPool.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPool.length;

  function pickExpertise(val: string) {
    const next = expertiseFilter === val ? '' : val;
    setExpertiseFilter(next);
    // En mode filtre → montre d'emblée les 6 premiers résultats ; sinon reset à 0
    setVisibleCount(next || themeFilter ? PAGE_SIZE : 0);
    setOpenDropdown(null);
  }

  function pickTheme(val: string) {
    const next = themeFilter === val ? '' : val;
    setThemeFilter(next);
    setVisibleCount(expertiseFilter || next ? PAGE_SIZE : 0);
    setOpenDropdown(null);
  }

  function clearFilters() {
    setExpertiseFilter('');
    setThemeFilter('');
    setVisibleCount(0);
    setOpenDropdown(null);
  }

  return (
    <>
      {/* ── Barre de filtres ──────────────────────────────────────────────── */}
      <div className="gm-conseil-filters" ref={barRef}>
        <div className="gm-conseil-filters__inner">

          {/* Filtre Expertise */}
          <div className="gm-conseil-filters__item">
            <button
              className={`gm-conseil-filters__btn${expertiseFilter ? ' is-active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'expertise' ? null : 'expertise')}
              aria-expanded={openDropdown === 'expertise'}
              aria-haspopup="listbox"
            >
              <span>{expertiseFilter ? EXPERTISE_LABELS[expertiseFilter] : 'Expertise'}</span>
              <Chevron open={openDropdown === 'expertise'} />
            </button>
            {openDropdown === 'expertise' && (
              <div className="gm-conseil-filters__dropdown" role="listbox">
                {Object.entries(EXPERTISE_LABELS).map(([value, label]) => (
                  <button
                    key={value}
                    role="option"
                    aria-selected={expertiseFilter === value}
                    className={`gm-conseil-filters__option${expertiseFilter === value ? ' is-active' : ''}`}
                    onClick={() => pickExpertise(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="gm-conseil-filters__sep" aria-hidden="true" />

          {/* Filtre Thématique */}
          <div className="gm-conseil-filters__item">
            <button
              className={`gm-conseil-filters__btn${themeFilter ? ' is-active' : ''}`}
              onClick={() => setOpenDropdown(openDropdown === 'theme' ? null : 'theme')}
              aria-expanded={openDropdown === 'theme'}
              aria-haspopup="listbox"
            >
              <span>{themeFilter || 'Thématique'}</span>
              <Chevron open={openDropdown === 'theme'} />
            </button>
            {openDropdown === 'theme' && (
              <div className="gm-conseil-filters__dropdown" role="listbox">
                {THEMES.map(theme => (
                  <button
                    key={theme}
                    role="option"
                    aria-selected={themeFilter === theme}
                    className={`gm-conseil-filters__option${themeFilter === theme ? ' is-active' : ''}`}
                    onClick={() => pickTheme(theme)}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            )}
          </div>

          {isFiltered && (
            <button className="gm-conseil-filters__clear" onClick={clearFilters} aria-label="Réinitialiser les filtres">
              × Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* ── Grille d'articles ─────────────────────────────────────────────── */}
      <div className="gm-articles-page__grid gm-articles-page__grid--conseil">
        {/* 6 guides complets — toujours en tête, masqués si filtre actif */}
        {!isFiltered && hubArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
        {/* Articles additionnels / résultats filtrés */}
        {visibleExtras.map(a => <ArticleCard key={a.slug} article={a} />)}
      </div>

      {/* ── État vide ─────────────────────────────────────────────────────── */}
      {isFiltered && filteredPool.length === 0 && (
        <p className="gm-conseil-empty">
          Aucun article pour cette sélection.{' '}
          <button className="gm-conseil-empty__reset" onClick={clearFilters}>
            Voir tous les articles
          </button>
        </p>
      )}

      {/* ── Plus d'articles ───────────────────────────────────────────────── */}
      {hasMore && (
        <div className="gm-conseil-load-more">
          <button
            className="gm-conseil-load-more__btn"
            onClick={() => setVisibleCount(v => v + PAGE_SIZE)}
          >
            <span className="gm-conseil-load-more__arrow" aria-hidden="true">↗</span>
            Plus d&apos;articles
          </button>
        </div>
      )}
    </>
  );
}
