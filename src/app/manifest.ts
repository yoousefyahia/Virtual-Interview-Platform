import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Virtual Interview Platform",
    short_name: "VU Platform",
    description:
      "Practice, schedule, and conduct virtual interviews online.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F172A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}