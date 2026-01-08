const isProd = process.env.NODE_ENV === "production";
const defaultSiteUrl = isProd ? "https://gobai.app" : "http://localhost:3000";

const readEnv = (key: string, fallback: string) => {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value : fallback;
};

const normalizeUrl = (value: string) => value.replace(/\/$/, "");

const siteUrl = normalizeUrl(readEnv("NEXT_PUBLIC_SITE_URL", defaultSiteUrl));
const appUrl = normalizeUrl(readEnv("NEXT_PUBLIC_APP_URL", `${siteUrl}/customers`));
const rawFacebookUrl = readEnv("NEXT_PUBLIC_FACEBOOK_URL", "");
const facebookUrl = rawFacebookUrl ? normalizeUrl(rawFacebookUrl) : "";

export const site = {
  name: readEnv("NEXT_PUBLIC_SITE_NAME", "GOBAI"),
  legalName: readEnv("NEXT_PUBLIC_SITE_LEGAL_NAME", "GOBAI Delivery Services"),
  url: siteUrl,
  appUrl,
  facebookUrl,
  locale: readEnv("NEXT_PUBLIC_SITE_LOCALE", "en-PH"),
  description: readEnv(
    "NEXT_PUBLIC_SITE_DESCRIPTION",
    "GOBAI connects customers, merchants, and drivers for rides, parcel delivery, and food delivery - built for local communities."
  ),
  services: ["ride", "parcel", "food"],
  themeColor: readEnv("NEXT_PUBLIC_SITE_THEME_COLOR", "#16a34a"),
  contact: {
    email: readEnv("NEXT_PUBLIC_CONTACT_EMAIL", "support@gobai.app"),
    city: readEnv("NEXT_PUBLIC_CONTACT_CITY", "Mati City, Davao Oriental"),
    country: readEnv("NEXT_PUBLIC_CONTACT_COUNTRY", "PH"),
  },
};
