
const CONFIG = {
  name: 'Amalia llamas',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'AstroWind — Free template for create a website with Astro + Tailwind CSS',
  description:
    '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
