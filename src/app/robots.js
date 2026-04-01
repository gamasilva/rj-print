export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      // ✅ Motores de busca tradicionais — acesso total (SEO não é afetado)
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot"],
        allow: "/",
      },
      // ✅ Crawlers legítimos de SEO e ferramentas de análise
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        allow: "/",
      },
      // 🚫 Bots de IA para treinamento — bloqueio completo
      // Fontes: https://darkvisitors.com / documentação oficial de cada empresa
      {
        userAgent: [
          "GPTBot",           // OpenAI
          "ChatGPT-User",     // OpenAI (browsing plugin)
          "OAI-SearchBot",    // OpenAI Search
          "Google-Extended",  // Google Bard / Gemini (treinamento)
          "anthropic-ai",     // Anthropic / Claude
          "ClaudeBot",        // Anthropic / Claude
          "PerplexityBot",    // Perplexity AI
          "Applebot-Extended",// Apple (treinamento de modelos)
          "cohere-ai",        // Cohere
          "CCBot",            // Common Crawl (base de dados de treinamento)
          "Bytespider",       // ByteDance / TikTok
          "Meta-ExternalAgent", // Meta AI
          "Meta-ExternalFetcher",
          "Diffbot",          // Diffbot AI
          "Timpibot",         // Timpi
          "omgilibot",        // omgili / Webz.io
          "facebookexternalhit", // Meta (rastreamento de conteúdo)
        ],
        disallow: "/",
      },
      // ✅ Todos os outros crawlers desconhecidos têm acesso ao conteúdo público
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: "https://www.rjprint.com.br/sitemap.xml",
  };
}
