/**
 * High-performance image URL resolver.
 * Serves optimized WebP assets directly from Vite's public static directory (/public/images)
 * instead of eagerly globbing and bundling 1,000+ image module records into JavaScript memory.
 */
export function imageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  // Normalize path by stripping leading slashes and any leading 'images/' or 'optimized/'
  const cleanPath = path
    .replace(/^\/+/, "")
    .replace(/^images\//, "")
    .replace(/^optimized\//, "");

  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}images/${cleanPath}`;
}