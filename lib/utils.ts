/**
 * Get the base path for static assets
 * This handles GitHub Pages deployment with basePath
 */
export function getBasePath(): string {
  // In production with basePath, use the basePath from next.config.js
  // For GitHub Pages, this will be '/Zaymar'
  if (typeof window !== 'undefined') {
    // Client-side: use the basePath from the URL or config
    return process.env.NEXT_PUBLIC_BASE_PATH || '/Zaymar'
  }
  // Server-side: use from config
  return process.env.NEXT_PUBLIC_BASE_PATH || '/Zaymar'
}

/**
 * Get the full path for a static asset
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash from path if basePath already has trailing handling
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

