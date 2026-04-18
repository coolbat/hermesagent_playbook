export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
const siteUrl = import.meta.env.SITE_URL ?? "https://hermes-agent-playbook.example.com";

export const siteConfig = {
  name: "Hermes Agent Playbook",
  tagline: {
    en: "Independent bilingual onboarding and workflow guidance for Hermes Agent.",
    zh: "独立维护的 Hermes Agent 双语入门与工作流指南。",
  },
  description: {
    en: "A bilingual Hermes Agent learning site covering Quick Start, Learn, Templates, Skills, and Troubleshoot.",
    zh: "一个围绕 Hermes Agent 构建的双语学习站，覆盖 Quick Start、Learn、Templates、Skills 和 Troubleshoot。",
  },
  domain: siteUrl,
  socialImage: "/icon.svg",
  navigation: [
    { href: "/learn/", label: "Learn", key: "learn" },
    { href: "/templates/", label: "Templates", key: "templates" },
    { href: "/skills/", label: "Skills", key: "skills" },
    { href: "/troubleshoot/", label: "Troubleshoot", key: "troubleshoot" },
  ],
  footerLinks: [
    { href: "/about/", en: "About", zh: "关于" },
    { href: "/editorial/", en: "Editorial Policy", zh: "编辑政策" },
    { href: "/privacy/", en: "Privacy", zh: "隐私" },
    { href: "/terms/", en: "Terms", zh: "条款" },
  ],
  officialLinks: [
    { href: "https://hermes-agent.nousresearch.com/docs", label: "Hermes Agent Docs" },
    { href: "https://hermes-agent.nousresearch.com/docs/skills", label: "Skills Hub" },
    { href: "https://github.com/NousResearch/hermes-agent", label: "GitHub" },
  ],
};
