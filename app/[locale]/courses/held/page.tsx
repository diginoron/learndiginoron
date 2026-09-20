import { redirect } from "next/navigation";
import { Locale, isValidLocale, getLocalizedPath } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CoursesHeldRedirect({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  redirect(getLocalizedPath("/services/held-courses", locale));
}
