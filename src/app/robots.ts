import type { MetadataRoute } from "next"
import { seo } from "./seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/obrigado"],
    },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
    host: seo.siteUrl,
  }
}
