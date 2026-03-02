/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl", "fr"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
}

export default nextI18NextConfig
