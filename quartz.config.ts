import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Leonardo's notes 😸",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "leddaz.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Plus Jakarta Sans",
        body: "Work Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",
          lightgray: "#ccd0da",
          gray: "#5c5f77",
          darkgray: "#4c4f69",
          dark: "#df8e1d",
          secondary: "#df8e1d",
          tertiary: "#40a02b",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#1e1e2e",
          lightgray: "#313244",
          gray: "#bac2de",
          darkgray: "#cdd6f4",
          dark: "#f9e2af",
          secondary: "#f9e2af",
          tertiary: "#a6e3a1",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "mathjax" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
