export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: 'https://www.rjprint.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
