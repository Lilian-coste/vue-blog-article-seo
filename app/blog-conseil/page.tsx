import type { Metadata } from 'next';
import { BLOG_ADVICE } from '@/data/blog';
import ScrollToTopOnMount from '@/components/globals/ScrollToTopOnMount';
import BlogConseilClient from '@/components/blog/BlogConseilClient';

export const metadata: Metadata = {
  title: 'Blog conseil — Groupe Merlin',
  description:
    "Conseils pratiques sur le chauffage, la climatisation, l'eau et les aides de l'État pour vos travaux.",
  alternates: { canonical: '/blog-conseil' },
};

export default function BlogConseilPage() {
  return (
    <section className="gm-articles-page gm-articles-page--conseil">
      <ScrollToTopOnMount />
      <header className="gm-articles-page__head">
        <span className="gm-articles-page__eyebrow">Le blog · Conseils</span>
        <h1 className="gm-articles-page__title">
          Conseils pratiques et <em>retours d&apos;expérience</em>
        </h1>
      </header>

      <BlogConseilClient allArticles={BLOG_ADVICE} />
    </section>
  );
}
