import { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { BLOG_POSTS } from "@/data/blog";
import { LOCALES, SITE_URL, getLocalizedPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core base paths without prefix
  const corePaths: { path: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/enterprise-ai", changeFrequency: "weekly", priority: 0.95 },
    { path: "/services/corporate", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/kids-and-teens", changeFrequency: "weekly", priority: 0.85 },
    { path: "/services/held-courses", changeFrequency: "weekly", priority: 0.9 },
    { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", changeFrequency: "daily", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  // Course paths
  const coursePaths = COURSES.map((course) => ({
    path: `/courses/${course.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Blog paths
  const blogPaths = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: (post.slug === "ai-extinction-warnings-and-risks" || post.featured) ? "daily" as const : "weekly" as const,
    priority: post.slug === "ai-extinction-warnings-and-risks" ? 0.95 : post.featured ? 0.9 : 0.8,
  }));

  const allPaths = [...corePaths, ...coursePaths, ...blogPaths];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const item of allPaths) {
    // Generate alternate languages map for this path
    const languages: Record<string, string> = {};
    for (const loc of LOCALES) {
      languages[loc] = `${SITE_URL}${getLocalizedPath(item.path, loc)}`;
    }
    languages["x-default"] = `${SITE_URL}${getLocalizedPath(item.path, "en")}`;

    // Add entry for each language locale
    for (const loc of LOCALES) {
      const localizedUrl = `${SITE_URL}${getLocalizedPath(item.path, loc)}`;
      
      // Higher priority for root (en) and core fa/ar entries
      const localePriority = loc === "en" ? item.priority : Math.max(item.priority - 0.05, 0.7);

      sitemapEntries.push({
        url: localizedUrl,
        lastModified: currentDate,
        changeFrequency: item.changeFrequency,
        priority: Number(localePriority.toFixed(2)),
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
