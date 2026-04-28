import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://franquias.becomagico.com.br"
const siteName = "Beco M\u00e1gico Franquias"
const defaultImage = "/og-image.png"

type SeoConfig = {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}

export const seo = {
  siteUrl,
  siteName,
  defaultImage,
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString()
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
  noIndex = false,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
                    alt: "Beco M\u00e1gico Franquias",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  }
}
