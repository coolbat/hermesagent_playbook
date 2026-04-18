import { learnTabs } from "@/content/learn";
import { skillTabs } from "@/content/skills";
import { quickStartEntries } from "@/content/site";
import { templateTabs } from "@/content/templates";
import { troubleshootTabs } from "@/content/troubleshoot";
import type { LocalizedText } from "@/content/types";

export const quickStartDirectory = quickStartEntries;

export const learnDirectory = learnTabs.flatMap((tab) =>
  tab.tutorials.map((tutorial) => ({
    ...tutorial,
    category: tab.label,
  })),
);

export const templateDirectory = templateTabs.flatMap((tab) =>
  tab.templates.map((entry) => ({
    ...entry,
    category: tab.label,
  })),
);

export const troubleshootDirectory = troubleshootTabs.flatMap((tab) =>
  tab.entries.map((entry) => ({
    ...entry,
    category: tab.label,
  })),
);

export const skillDirectory = skillTabs.flatMap((tab) =>
  tab.skills.map((skill) => ({
    ...skill,
    category: tab.label,
  })),
);

type SupportedCollection = "quickStart" | "learn" | "templates" | "troubleshoot";

function syntheticPublishedAt(index: number, total: number) {
  return new Date(Date.UTC(2025, 0, total - index));
}

export function getCollectionEntryFallback(
  collection: SupportedCollection,
  slug: string,
  locale: "en" | "zh",
) {
  if (collection === "quickStart") {
    const index = quickStartDirectory.findIndex((item) => item.slug === slug);
    const item = quickStartDirectory[index];
    if (!item) return undefined;
    return {
      category: locale === "zh" ? "Quick Start" : "Quick Start",
      publishedAt: syntheticPublishedAt(index, quickStartDirectory.length),
      updatedAt: syntheticPublishedAt(index, quickStartDirectory.length),
      tags: [],
    };
  }

  if (collection === "learn") {
    const index = learnDirectory.findIndex((item) => item.slug === slug);
    const item = learnDirectory[index];
    if (!item) return undefined;
    return {
      category: localizedCategory(item.category, locale),
      publishedAt: syntheticPublishedAt(index, learnDirectory.length),
      updatedAt: syntheticPublishedAt(index, learnDirectory.length),
      tags: item.tags?.[locale] ?? [],
    };
  }

  if (collection === "templates") {
    const index = templateDirectory.findIndex((item) => item.slug === slug);
    const item = templateDirectory[index];
    if (!item) return undefined;
    return {
      category: localizedCategory(item.category, locale),
      publishedAt: syntheticPublishedAt(index, templateDirectory.length),
      updatedAt: syntheticPublishedAt(index, templateDirectory.length),
      tags: item.tags?.[locale] ?? [],
    };
  }

  const index = troubleshootDirectory.findIndex((item) => item.slug === slug);
  const item = troubleshootDirectory[index];
  if (!item) return undefined;
  return {
    category: localizedCategory(item.category, locale),
    publishedAt: syntheticPublishedAt(index, troubleshootDirectory.length),
    updatedAt: syntheticPublishedAt(index, troubleshootDirectory.length),
    tags: localizedCategory(item.category, locale) ? [localizedCategory(item.category, locale)!] : [],
  };
}

function findBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}

function getNeighbors<T extends { slug: string }>(items: T[], slug: string) {
  const index = items.findIndex((item) => item.slug === slug);
  return {
    previous: index > 0 ? items[index - 1] : undefined,
    next: index >= 0 && index < items.length - 1 ? items[index + 1] : undefined,
  };
}

export function getQuickStartMeta(slug: string) {
  return findBySlug(quickStartDirectory, slug);
}

export function getLearnMeta(slug: string) {
  return findBySlug(learnDirectory, slug);
}

export function getTemplateMeta(slug: string) {
  return findBySlug(templateDirectory, slug);
}

export function getTroubleshootMeta(slug: string) {
  return findBySlug(troubleshootDirectory, slug);
}

export function getSkillMeta(slug: string) {
  return findBySlug(skillDirectory, slug);
}

export function getQuickStartNeighbors(slug: string) {
  return getNeighbors(quickStartDirectory, slug);
}

export function getLearnNeighbors(slug: string) {
  return getNeighbors(learnDirectory, slug);
}

export function getTemplateNeighbors(slug: string) {
  return getNeighbors(templateDirectory, slug);
}

export function getTroubleshootNeighbors(slug: string) {
  return getNeighbors(troubleshootDirectory, slug);
}

export function localizedCategory(value?: LocalizedText, locale?: "en" | "zh") {
  if (!value || !locale) {
    return undefined;
  }

  return value[locale];
}
