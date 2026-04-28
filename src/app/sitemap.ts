import type { MetadataRoute } from "next"
import { seo } from "./seo"

const routes = ["", "/privacidade", "/termos", "/cookies", "/lgpd"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${seo.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.3,
  }))
}
