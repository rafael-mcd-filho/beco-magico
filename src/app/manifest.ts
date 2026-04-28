import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beco M\u00e1gico Franquias",
    short_name: "Beco M\u00e1gico",
    description: "P\u00e1gina oficial de franquias do Beco M\u00e1gico.",
    start_url: "/",
    display: "standalone",
    background_color: "#2A1810",
    theme_color: "#2A1810",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
