import rss from "@astrojs/rss";
import { siteConfig, type Locale } from "@/config/site";
import { getLocalizedCollection, getRouteSlug, sortByPublication } from "@/lib/content";
import { localizePath } from "@/lib/i18n";

type FeedCollection = "quickStart" | "learn" | "templates" | "troubleshoot";

const feedCollections: FeedCollection[] = ["quickStart", "learn", "templates", "troubleshoot"];

export async function buildLocalizedRss(context: Parameters<typeof rss>[0]["context"], locale: Locale) {
  const entries = (
    await Promise.all(feedCollections.map((collection) => getLocalizedCollection(collection, locale)))
  ).flat();

  const items = sortByPublication(entries).map((entry) => {
    const slug = getRouteSlug(entry);
    const normalizedId = entry.id.replace(/\\/g, "/");
    const collection = normalizedId.split("/")[0] as FeedCollection;
    const href = collection === "quickStart" ? `/quick-start/${slug}/` : `/${collection}/${slug}/`;

    return {
      description: entry.data.summary,
      link: localizePath(href, locale),
      pubDate: entry.data.publishedAt ?? entry.data.updatedAt,
      title: entry.data.title,
    };
  });

  const feedTitle = locale === "zh" ? `${siteConfig.name} 中文更新` : `${siteConfig.name} Updates`;
  const feedDescription = locale === "zh"
    ? "Hermes Agent Playbook 中文内容订阅，覆盖 Quick Start、Learn、Templates 和 Troubleshoot。"
    : "Subscribe to Hermes Agent Playbook updates across Quick Start, Learn, Templates, and Troubleshoot.";

  return rss({
    context,
    customData: `<language>${locale === "zh" ? "zh-cn" : "en-us"}</language>`,
    description: feedDescription,
    items,
    site: siteConfig.domain,
    stylesheet: false,
    title: feedTitle,
  });
}
