import { writeFileSync } from "fs"
import { globby } from "globby"
import prettier from "prettier"

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js")

  // Base URL of your website
  const baseUrl = "https://nylongaming.com"

  // Pages that should be excluded from the sitemap
  const excludedPaths = ["/auth/*", "/admin/*", "/api/*", "/dashboard/*", "/_*", "/404", "/500"]

  // Priority mapping based on path depth and importance
  const getPriority = (path: string): number => {
    if (path === "/") return 1.0
    if (path.startsWith("/game-servers")) {
      if (path === "/game-servers") return 0.9
      return 0.8
    }
    if (path === "/community" || path === "/pricing") return 0.8
    if (path === "/blog" || path === "/faq") return 0.7
    if (path.startsWith("/blog/")) return 0.6

    // Default priority decreases with path depth
    const depth = path.split("/").filter(Boolean).length
    return Math.max(0.3, 1 - depth * 0.2)
  }

  // Change frequency mapping based on content type
  const getChangeFreq = (path: string): string => {
    if (path === "/status") return "hourly"
    if (path === "/community" || path.startsWith("/blog/")) return "daily"
    if (path === "/" || path === "/blog" || path === "/game-servers") return "weekly"
    if (path.includes("/terms") || path.includes("/privacy")) return "yearly"
    return "monthly"
  }

  // Get all page paths from the Next.js app
  const pages = await globby([
    "app/**/page.tsx",
    "app/**/page.jsx",
    "app/**/page.js",
    "app/**/page.ts",
    "!app/api/**/*",
    "!app/auth/**/*",
    "!app/admin/**/*",
    "!app/dashboard/**/*",
  ])

  // Convert file paths to URL paths
  const paths = pages
    .map((page) => {
      // Remove 'app' prefix and file extension
      const path = page
        .replace("app", "")
        .replace(/\/page\.(tsx|jsx|js|ts)$/, "")
        .replace(/\/$$.*$$\//, "/") // Remove route groups
        .replace(/\/\[(.+)\]/, "/$1") // Convert dynamic routes to placeholders

      // Convert to URL path format
      return path === "" ? "/" : path
    })
    .filter((path) => {
      // Filter out excluded paths
      return !excludedPaths.some((exclude) => {
        if (exclude.endsWith("*")) {
          return path.startsWith(exclude.slice(0, -1))
        }
        return path === exclude
      })
    })

  // Generate sitemap items
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((path) => {
          return `
            <url>
              <loc>${baseUrl}${path}</loc>
              <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
              <changefreq>${getChangeFreq(path)}</changefreq>
              <priority>${getPriority(path)}</priority>
            </url>
          `
        })
        .join("")}
    </urlset>
  `

  // Format the XML
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  })

  // Write the sitemap to the public directory
  writeFileSync("public/sitemap.xml", formatted)

  console.log("Sitemap generated successfully!")
}

generateSitemap()

