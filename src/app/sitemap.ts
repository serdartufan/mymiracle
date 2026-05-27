import { MetadataRoute } from 'next';
import { siteUrl, kennisbank } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/over-mij', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/behandelingen', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/behandelingen/lichaam', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/behandelingen/gezicht', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/lpg-endermologie', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/kennisbank', priority: 0.8, changeFrequency: 'weekly' as const },
    ...kennisbank.map((artikel) => ({
      path: `/kennisbank/${artikel.slug}`,
      priority: 0.7 as const,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/prijzen', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/algemene-voorwaarden', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
