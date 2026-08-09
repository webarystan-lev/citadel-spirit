import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Цитадель Духа | Shekinah Mission',
  tagline: 'Shekinah Mission Kazakhstan & The School of Christ International — Подготовка миссионеров и пастырей',
  favicon: 'https://pub-eb64310187344c16be3fdbb9b74d75dc.r2.dev/img/logo-ms-sock.webp',

  // Меры предосторожности: предупреждать, но не прерывать билд
  onBrokenLinks: 'warn',

  // ⚠️ В v3 ещё работает, но готовим к v4
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  url: 'https://citadel-spirit.pages.dev',
  baseUrl: '/',
  organizationName: 'webarystan-lev',
  projectName: 'citadel-spirit',

  i18n: {
    defaultLocale: 'ru',
      locales: ['ru'],
  },

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.unshift(require("@tailwindcss/postcss"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/webarystan-lev/citadel-spirit/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/webarystan-lev/citadel-spirit/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
        respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Цитадель Духа',
      logo: { src: 'https://pub-eb64310187344c16be3fdbb9b74d75dc.r2.dev/img/logo-ms-sock.webp' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Обучение и Летопись' },
        { to: '/blog', label: 'Блог Мыслей', position: 'left' },
        { href: 'https://schoolofchrist.org/history/', label: 'Школа Христа Int.', position: 'right' },
        { href: 'https://github.com/webarystan-lev/citadel-spirit', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Экосистема Shekinah',
          items: [
            { label: 'Shekinah Mission Kazakhstan', href: 'https://web-shekinah.vercel.app' },
            { label: 'School of Christ International', href: 'https://schoolofchrist.org/history/' },
            { label: 'Shekinah Cloud', href: 'https://shekinah-6sz.pages.dev' },
            { label: 'Shekinah School', href: 'https://citadel-school.pages.dev/' },
            { label: 'Shekinah Blog', href: 'https://shekinah-6sz.pages.dev/blog' },
            { label: 'Austin Sparks (Остин Спаркс)', href: 'https://www.austin-sparks.net/russian/' },
          ],
        },
        {
          title: 'Цифровые Архивы',
          items: [
            { label: 'SaaS Web Arystan', href: 'https://web-mission.vercel.app' },
            { label: 'Next.js Mantine', href: 'https://shekinah-sock.vercel.app' },
            { label: 'Astro Svelte', href: 'https://shekinah-cloud.vercel.app' },
            { label: 'TailwindBlog 2.0', href: 'https://shekinah-blog.vercel.app' },
            { label: 'Astro DocKit', href: 'https://mission-shekinah.vercel.app' },
            { label: 'AI Vercels', href: 'https://ai-lev.vercel.app' },
            { label: 'История Школы Христа', href: 'https://schoolofchrist.org/history/' },
          ],
        },
        {
          title: 'Поддержка и Разработка',
          items: [
            { label: 'webarystan-lev GitHub', href: 'https://github.com/webarystan-lev/citadel-spirit' },
            { label: 'Gemini CLI', href: 'https://geminicli.com' },
            { label: 'AI Google', href: 'https://ai.google.dev/' },
            { label: 'Gemini Code Assist', href: 'https://console.cloud.google.com/gemini?project=sock-172206' },
            { label: 'Console Cloudflare', href: 'https://dash.cloudflare.com/d236134971b30a4db3c418481c4d7eaa/home/overview' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Цитадель Духа | Shekinah Mission Kazakhstan & The School of Christ International | WDS Web Arystan. Слава одному Богу!`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
