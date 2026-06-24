import type { Metadata } from 'next';
import { BLOG_ADVICE } from '@/data/blog';
import BlogConseilClient from '@/components/blog/BlogConseilClient';

export const metadata: Metadata = {
  title: 'Le blog — Tous les articles · Groupe Merlin',
  description: "Conseils pratiques, retours d'expérience et actualités du Groupe Merlin.",
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return (
    <section className="gm-articles-page gm-articles-page--conseil">
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
