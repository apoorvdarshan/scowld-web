import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://scowld.vercel.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://scowld.vercel.app/privacy", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://scowld.vercel.app/terms", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
