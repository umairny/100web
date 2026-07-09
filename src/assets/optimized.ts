const images = import.meta.glob("./optimized/**/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

export function imageUrl(path: string) {
  const image = images[`./optimized/${path}`];

  if (!image) {
    console.warn(`Missing image asset: ${path}`);
    return "";
  }

  return image;
}