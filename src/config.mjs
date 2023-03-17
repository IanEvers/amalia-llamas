
const CONFIG = {
  name: 'Amalia llamas',

  origin: 'https://amalia-llamas.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Amalia llamas - Artista',
  description:
    '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
