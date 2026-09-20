export type Locale = "en" | "fa" | "ar";
export type Direction = "ltr" | "rtl";

export const LOCALES: Locale[] = ["en", "fa", "ar"];
export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  dir: Direction;
  flag: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    flag: "🇬🇧",
  },
  fa: {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    dir: "rtl",
    flag: "🇮🇷",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    flag: "🇸🇦",
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getDirection(locale: Locale): Direction {
  return LOCALE_CONFIG[locale]?.dir || "ltr";
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://diginoron.com";

/**
 * Returns localized path:
 * - en: /about (root, no prefix)
 * - fa: /fa/about
 * - ar: /ar/about
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // Normalize path to start with '/' and remove any existing locale prefix
  let cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith("/fa/") || cleanPath === "/fa") {
    cleanPath = cleanPath.replace(/^\/fa/, "") || "/";
  } else if (cleanPath.startsWith("/ar/") || cleanPath === "/ar") {
    cleanPath = cleanPath.replace(/^\/ar/, "") || "/";
  } else if (cleanPath.startsWith("/en/") || cleanPath === "/en") {
    cleanPath = cleanPath.replace(/^\/en/, "") || "/";
  }

  if (locale === "en") {
    return cleanPath;
  }

  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

/**
 * Returns alternate URLs for SEO hreflang tags:
 * en: https://diginoron.com/...
 * fa: https://diginoron.com/fa/...
 * ar: https://diginoron.com/ar/...
 * x-default: https://diginoron.com/...
 */
export function getAlternateUrls(path: string) {
  const enPath = getLocalizedPath(path, "en");
  const faPath = getLocalizedPath(path, "fa");
  const arPath = getLocalizedPath(path, "ar");

  return {
    canonical: `${SITE_URL}${getLocalizedPath(path, "en")}`,
    languages: {
      en: `${SITE_URL}${enPath}`,
      fa: `${SITE_URL}${faPath}`,
      ar: `${SITE_URL}${arPath}`,
      "x-default": `${SITE_URL}${enPath}`,
    },
  };
}
