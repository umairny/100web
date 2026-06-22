const images = import.meta.glob("./images/**/*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

export function imageUrl(path: string) {
  const image = images[`./images/${path}`];

  if (!image) {
    console.warn(`Missing image asset: ${path}`);
    return "";
  }

  return image;
}