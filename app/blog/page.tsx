import type { Metadata } from 'next';
import ArticlesPage from '../articles/page';

export const metadata: Metadata = {
  title: 'Le blog — Tous les articles · Groupe Merlin',
  description: "Conseils pratiques, retours d'expérience et actualités du Groupe Merlin.",
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return <ArticlesPage />;
}
