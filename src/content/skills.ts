import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type SkillEntry = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  installCmd: string;
  difficulty: LocalizedText;
  risk: LocalizedText;
  tags: LocalizedList;
  useCases: LocalizedList;
  starterFriendly: boolean;
  cta: CtaLink;
};

export type SkillTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  skills: SkillEntry[];
};

export const skillsIntro = {
  kicker: "HERMES SKILLS",
  title: {
    en: "Skills organized to match the official Hermes Skills Hub.",
    zh: "按 Hermes 官方 Skills Hub 方式重组的技能入口。",
  },
  summary: {
    en: "Use the official Hermes category map as the primary navigation model, then start from a smaller set of representative starter picks before jumping into the full live Skills Hub.",
    zh: "先用 Hermes 官方 Skills 分类方式做导航，再从一组更适合上手的代表性技能进入，最后跳转到官方 Skills Hub 查看完整实时目录。",
  },
};

export const officialSkillsHubUrl = "https://hermes-agent.nousresearch.com/docs/skills";

export const officialSkillsHubStats = {
  totalSkills: 647,
  builtIn: 79,
  optional: 47,
  community: 521,
  categories: 16,
};

export type OfficialSkillCard = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  status: LocalizedText;
  tags: LocalizedList;
};

export type OfficialSkillCategory = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  officialCount: number;
  skills: OfficialSkillCard[];
};

export const officialSkillCategories: OfficialSkillCategory[] = [
  {
    id: "other",
    label: { en: "Other", zh: "Other" },
    intro: {
      en: "Catch-all utilities that do not fit a narrower skill lane but still expand the agent in useful ways.",
      zh: "不属于更窄垂直类别的通用能力，适合补足 Hermes 的长尾执行面。",
    },
    officialCount: 348,
    skills: [
      {
        slug: "web-access",
        name: { en: "web-access", zh: "web-access" },
        summary: {
          en: "Representative browsing and network-access capability for search, page reading, and web operations.",
          zh: "代表性的联网与浏览能力，用于搜索、读网页和执行网页交互。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Utility", "Browsing", "Network"], zh: ["通用能力", "浏览", "联网"] },
      },
      {
        slug: "automation-update",
        name: { en: "automation workflows", zh: "automation workflows" },
        summary: {
          en: "Recurring tasks, scheduled follow-ups, and lightweight operational automations.",
          zh: "适合定时任务、跟进提醒和轻量级运营自动化。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Automation", "Ops", "Scheduling"], zh: ["自动化", "运维", "定时"] },
      },
      {
        slug: "spreadsheet",
        name: { en: "spreadsheet", zh: "spreadsheet" },
        summary: {
          en: "Structured spreadsheet work for CSV/XLSX analysis, edits, and data reshaping.",
          zh: "用于 CSV/XLSX 的结构化分析、编辑和整理。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Data", "Sheets", "Operations"], zh: ["数据", "表格", "运营"] },
      },
    ],
  },
  {
    id: "software-dev",
    label: { en: "Software Dev", zh: "软件开发" },
    intro: {
      en: "Coding, review, repo workflows, and implementation support for engineering delivery.",
      zh: "面向编码、评审、仓库协作和工程交付的技能集合。",
    },
    officialCount: 69,
    skills: [
      {
        slug: "claude-code",
        name: { en: "claude-code", zh: "claude-code" },
        summary: {
          en: "Delegate feature work, refactors, and PR review to Claude Code from within Hermes workflows.",
          zh: "在 Hermes 工作流里把功能开发、重构和 PR 评审委派给 Claude Code。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Coding", "Delegation", "CLI"], zh: ["编码", "委派", "CLI"] },
      },
      {
        slug: "codex",
        name: { en: "codex", zh: "codex" },
        summary: {
          en: "Delegate coding tasks to OpenAI Codex CLI for implementation, reviews, and batch fixes.",
          zh: "把实现、评审和批量修复类编码任务委派给 OpenAI Codex CLI。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Coding", "Delegation", "Repo"], zh: ["编码", "委派", "仓库"] },
      },
      {
        slug: "github-pr-workflow",
        name: { en: "github-pr-workflow", zh: "github-pr-workflow" },
        summary: {
          en: "Handle the full pull request lifecycle: branch, commit, open PR, check CI, and merge.",
          zh: "覆盖分支、提交、开 PR、看 CI 和合并的完整 PR 生命周期。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["GitHub", "PR", "Delivery"], zh: ["GitHub", "PR", "交付"] },
      },
      {
        slug: "github-code-review",
        name: { en: "github-code-review", zh: "github-code-review" },
        summary: {
          en: "Review diffs, inspect changes, and leave higher-signal feedback before pushing code.",
          zh: "用于审查 diff、检查改动，并在推送前给出更高信号的反馈。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Review", "Diffs", "Quality"], zh: ["评审", "Diff", "质量"] },
      },
    ],
  },
  {
    id: "creative",
    label: { en: "Creative", zh: "Creative" },
    intro: {
      en: "Visual, diagramming, motion, and generative output skills for expressive work.",
      zh: "偏视觉、图解、动效和生成式表达的技能集合。",
    },
    officialCount: 56,
    skills: [
      {
        slug: "architecture-diagram",
        name: { en: "architecture-diagram", zh: "architecture-diagram" },
        summary: {
          en: "Generate self-contained architecture diagrams as standalone HTML or SVG files.",
          zh: "生成独立可用的系统架构图，输出为 HTML 或 SVG。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Diagram", "Architecture", "Visual"], zh: ["图解", "架构", "可视化"] },
      },
      {
        slug: "ascii-video",
        name: { en: "ascii-video", zh: "ascii-video" },
        summary: {
          en: "Turn images, audio, or video into animated ASCII output with retro terminal aesthetics.",
          zh: "把图片、音频或视频转成带复古终端风格的 ASCII 动画输出。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Motion", "ASCII", "Video"], zh: ["动效", "ASCII", "视频"] },
      },
      {
        slug: "excalidraw",
        name: { en: "excalidraw", zh: "excalidraw" },
        summary: {
          en: "Create hand-drawn style diagrams in Excalidraw JSON for quick explanation and collaboration.",
          zh: "使用 Excalidraw JSON 生成手绘风格图示，适合快速解释和协作。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Excalidraw", "Diagram", "Collaboration"], zh: ["Excalidraw", "图示", "协作"] },
      },
      {
        slug: "p5js",
        name: { en: "p5js", zh: "p5js" },
        summary: {
          en: "Create generative art, interactive visuals, and browser-based creative coding sketches.",
          zh: "生成互动视觉、创意编码草图和浏览器端生成艺术。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Creative coding", "Interactive", "Canvas"], zh: ["创意编码", "互动", "Canvas"] },
      },
    ],
  },
  {
    id: "mlops",
    label: { en: "MLOps", zh: "MLOps" },
    intro: {
      en: "Model training, evaluation, serving, observability, and deployment workflows.",
      zh: "覆盖模型训练、评测、服务化、观测和部署的能力集合。",
    },
    officialCount: 42,
    skills: [
      {
        slug: "dspy",
        name: { en: "dspy", zh: "dspy" },
        summary: {
          en: "Build modular AI systems with declarative programming and prompt optimization.",
          zh: "用声明式方式构建模块化 AI 系统，并自动优化提示词。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Pipelines", "Optimization", "Framework"], zh: ["流水线", "优化", "框架"] },
      },
      {
        slug: "evaluating-llms-harness",
        name: { en: "evaluating-llms-harness", zh: "evaluating-llms-harness" },
        summary: {
          en: "Benchmark model quality across standard academic and engineering evaluation sets.",
          zh: "用标准学术与工程评测集去比较模型质量。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Evaluation", "Benchmarks", "Quality"], zh: ["评测", "基准", "质量"] },
      },
      {
        slug: "llama-cpp",
        name: { en: "llama-cpp", zh: "llama-cpp" },
        summary: {
          en: "Run local inference on CPU, Apple Silicon, and consumer hardware without CUDA dependence.",
          zh: "在 CPU、Apple Silicon 和消费级硬件上运行本地推理，不依赖 CUDA。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Inference", "Local", "Quantization"], zh: ["推理", "本地", "量化"] },
      },
      {
        slug: "weights-and-biases",
        name: { en: "weights-and-biases", zh: "weights-and-biases" },
        summary: {
          en: "Track experiments, compare runs, and manage model registry with collaborative MLOps workflows.",
          zh: "跟踪实验、比较训练过程，并用协作式 MLOps 方式管理模型注册表。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Experiment tracking", "Observability", "Registry"], zh: ["实验跟踪", "可观测性", "注册表"] },
      },
    ],
  },
  {
    id: "research",
    label: { en: "Research", zh: "研究" },
    intro: {
      en: "Discovery, monitoring, ingestion, and long-lived knowledge building for research-heavy work.",
      zh: "用于发现、监测、采集和长期知识沉淀的研究类技能。",
    },
    officialCount: 38,
    skills: [
      {
        slug: "arxiv",
        name: { en: "arxiv", zh: "arxiv" },
        summary: {
          en: "Search and retrieve academic papers from arXiv by keyword, author, category, or ID.",
          zh: "按关键词、作者、分类或 ID 搜索并获取 arXiv 论文。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Papers", "Search", "Academic"], zh: ["论文", "搜索", "学术"] },
      },
      {
        slug: "blogwatcher",
        name: { en: "blogwatcher", zh: "blogwatcher" },
        summary: {
          en: "Monitor blogs and RSS/Atom feeds for updates, scan for fresh posts, and track read status.",
          zh: "监控博客与 RSS/Atom 更新，扫描新内容并跟踪阅读状态。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Feeds", "Monitoring", "RSS"], zh: ["订阅源", "监控", "RSS"] },
      },
      {
        slug: "llm-wiki",
        name: { en: "llm-wiki", zh: "llm-wiki" },
        summary: {
          en: "Build and maintain a persistent, interlinked markdown knowledge base for ongoing research.",
          zh: "把调研沉淀成可持续维护、互相关联的 markdown 知识库。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Knowledge base", "Markdown", "Persistence"], zh: ["知识库", "Markdown", "沉淀"] },
      },
      {
        slug: "ocr-and-documents",
        name: { en: "ocr-and-documents", zh: "ocr-and-documents" },
        summary: {
          en: "Extract text from PDFs and scanned documents to feed research, drafting, or review loops.",
          zh: "从 PDF 和扫描文档里抽取文本，接入调研、写作和复核流程。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["OCR", "Docs", "Extraction"], zh: ["OCR", "文档", "抽取"] },
      },
    ],
  },
  {
    id: "translation",
    label: { en: "Translation", zh: "Translation" },
    intro: {
      en: "Bilingual translation and localization workflows for content, docs, and publications.",
      zh: "面向内容、文档和发布流程的双语翻译与本地化能力。",
    },
    officialCount: 24,
    skills: [
      {
        slug: "baoyu-translate",
        name: { en: "baoyu-translate", zh: "baoyu-translate" },
        summary: {
          en: "Translate articles and documents between languages with quick, normal, and refined modes.",
          zh: "支持快翻、常规和精修三种模式的双语文档翻译工作流。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Bilingual", "Localization", "Docs"], zh: ["双语", "本地化", "文档"] },
      },
      {
        slug: "whisper",
        name: { en: "whisper", zh: "whisper" },
        summary: {
          en: "Transcribe multilingual speech and translate to English from audio-heavy inputs.",
          zh: "把多语言语音转成文本，并支持翻译到英文。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Speech", "Transcription", "Multilingual"], zh: ["语音", "转录", "多语言"] },
      },
      {
        slug: "youtube-content",
        name: { en: "youtube-content", zh: "youtube-content" },
        summary: {
          en: "Turn YouTube transcripts into structured summaries and reusable localized content.",
          zh: "把 YouTube 转录内容整理成结构化摘要，并进一步本地化输出。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Transcripts", "Video", "Repurposing"], zh: ["转录", "视频", "改写"] },
      },
    ],
  },
  {
    id: "productivity",
    label: { en: "Productivity", zh: "生产率" },
    intro: {
      en: "Workspace-native tools for documents, notes, tasks, and recurring operating routines.",
      zh: "适合文档、笔记、任务和日常工作节奏的工作空间型技能。",
    },
    officialCount: 12,
    skills: [
      {
        slug: "google-workspace",
        name: { en: "google-workspace", zh: "google-workspace" },
        summary: {
          en: "Integrate Gmail, Calendar, Drive, Sheets, Docs, and Contacts into Hermes workflows.",
          zh: "把 Gmail、Calendar、Drive、Sheets、Docs 和 Contacts 接入 Hermes。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Workspace", "Google", "Docs"], zh: ["工作空间", "Google", "文档"] },
      },
      {
        slug: "linear",
        name: { en: "linear", zh: "linear" },
        summary: {
          en: "Manage Linear issues, teams, and projects via GraphQL from terminal-driven agent flows.",
          zh: "在终端驱动的 agent 流程里管理 Linear issue、团队和项目。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Tickets", "Projects", "Planning"], zh: ["任务", "项目", "规划"] },
      },
      {
        slug: "notion",
        name: { en: "notion", zh: "notion" },
        summary: {
          en: "Create, update, query, and manage pages and databases directly through the Notion API.",
          zh: "直接通过 Notion API 创建、更新、查询和管理页面与数据库。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Notes", "Knowledge", "Databases"], zh: ["笔记", "知识库", "数据库"] },
      },
      {
        slug: "powerpoint",
        name: { en: "powerpoint", zh: "powerpoint" },
        summary: {
          en: "Read, create, or edit slide decks when presentation files are part of the workflow.",
          zh: "当流程涉及演示文稿时，用来读、写和修改 PPT 文件。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Slides", "Decks", "Presentations"], zh: ["幻灯片", "Deck", "演示"] },
      },
    ],
  },
  {
    id: "gaming",
    label: { en: "Gaming", zh: "Gaming" },
    intro: {
      en: "Game automation, server setup, and player-facing utility workflows.",
      zh: "覆盖游戏自动化、服务端搭建和面向玩家的工具型流程。",
    },
    officialCount: 11,
    skills: [
      {
        slug: "minecraft-modpack-server",
        name: { en: "minecraft-modpack-server", zh: "minecraft-modpack-server" },
        summary: {
          en: "Set up modded Minecraft servers from server pack zips with install, JVM tuning, and backups.",
          zh: "从服务端整合包搭建 Minecraft 模组服务器，并处理安装、JVM 调优和备份。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Minecraft", "Server", "Setup"], zh: ["Minecraft", "服务器", "搭建"] },
      },
      {
        slug: "pokemon-player",
        name: { en: "pokemon-player", zh: "pokemon-player" },
        summary: {
          en: "Play Pokemon autonomously through headless emulation with structured game-state decisions.",
          zh: "通过无头模拟器和结构化状态决策自动玩 Pokemon。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Automation", "Emulation", "Gameplay"], zh: ["自动化", "模拟器", "玩法"] },
      },
      {
        slug: "roblox-game-data-scraper",
        name: { en: "roblox-game-data-scraper", zh: "roblox-game-data-scraper" },
        summary: {
          en: "Representative player-data and game-intel workflow for Roblox-oriented utility projects.",
          zh: "代表性的 Roblox 数据抓取与游戏情报工作流能力。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Roblox", "Data", "Utility"], zh: ["Roblox", "数据", "工具"] },
      },
    ],
  },
  {
    id: "health",
    label: { en: "Health", zh: "Health" },
    intro: {
      en: "Health tracking, record keeping, and structured personal data workflows.",
      zh: "适合健康记录、数据追踪和结构化个人健康流程。",
    },
    officialCount: 8,
    skills: [
      {
        slug: "apple-notes",
        name: { en: "apple-notes", zh: "apple-notes" },
        summary: {
          en: "Manage Apple Notes on macOS for lightweight logging, capture, and retrieval.",
          zh: "在 macOS 上管理 Apple Notes，适合轻量记录、采集和检索。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Notes", "Logging", "macOS"], zh: ["笔记", "记录", "macOS"] },
      },
      {
        slug: "spreadsheet-health",
        name: { en: "spreadsheet", zh: "spreadsheet" },
        summary: {
          en: "Track structured health metrics, logs, and trends in spreadsheets over time.",
          zh: "在表格里持续追踪健康指标、记录和趋势变化。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Tracking", "Metrics", "Structured data"], zh: ["追踪", "指标", "结构化数据"] },
      },
      {
        slug: "notion-health",
        name: { en: "notion", zh: "notion" },
        summary: {
          en: "Use Notion databases for care plans, habit records, and structured personal dashboards.",
          zh: "把 Notion 数据库用于习惯记录、照护计划和个人看板。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Databases", "Habits", "Dashboard"], zh: ["数据库", "习惯", "看板"] },
      },
    ],
  },
  {
    id: "social-media",
    label: { en: "Social Media", zh: "社交媒体" },
    intro: {
      en: "Channel-native publishing, repurposing, and distribution workflows.",
      zh: "适合平台原生发布、内容改写和渠道分发的技能集合。",
    },
    officialCount: 7,
    skills: [
      {
        slug: "baoyu-post-to-x",
        name: { en: "baoyu-post-to-x", zh: "baoyu-post-to-x" },
        summary: {
          en: "Publish posts and long-form content to X with browser-driven reliability.",
          zh: "以浏览器驱动的方式更稳地把内容发布到 X。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["X", "Publishing", "Distribution"], zh: ["X", "发布", "分发"] },
      },
      {
        slug: "baoyu-post-to-weibo",
        name: { en: "baoyu-post-to-weibo", zh: "baoyu-post-to-weibo" },
        summary: {
          en: "Publish posts and article-style content to Weibo from structured inputs.",
          zh: "把结构化内容发布到微博，支持普通动态和文章式输出。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Weibo", "China", "Publishing"], zh: ["微博", "中文平台", "发布"] },
      },
      {
        slug: "baoyu-post-to-wechat",
        name: { en: "baoyu-post-to-wechat", zh: "baoyu-post-to-wechat" },
        summary: {
          en: "Push markdown or HTML content into WeChat Official Account workflows.",
          zh: "把 markdown 或 HTML 内容接入微信公众号发布流程。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["WeChat", "Publishing", "Official account"], zh: ["微信", "发布", "公众号"] },
      },
    ],
  },
  {
    id: "ai-agents",
    label: { en: "AI Agents", zh: "AI Agents" },
    intro: {
      en: "Agent-to-agent delegation, orchestration, and specialist expansion inside Hermes workflows.",
      zh: "面向 agent 委派、编排和专家型能力扩展的技能集合。",
    },
    officialCount: 6,
    skills: [
      {
        slug: "claude-code-ai",
        name: { en: "claude-code", zh: "claude-code" },
        summary: {
          en: "Use Claude Code as a delegated coding specialist from within Hermes.",
          zh: "在 Hermes 内部把 Claude Code 当成编码型专家 agent 使用。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Delegation", "Agent", "Coding"], zh: ["委派", "Agent", "编码"] },
      },
      {
        slug: "codex-ai",
        name: { en: "codex", zh: "codex" },
        summary: {
          en: "Route bounded coding tasks to Codex CLI when you want specialist execution help.",
          zh: "把边界清晰的编码任务路由给 Codex CLI 执行。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Delegation", "Agent", "Execution"], zh: ["委派", "Agent", "执行"] },
      },
      {
        slug: "hermes-agent-core",
        name: { en: "hermes-agent", zh: "hermes-agent" },
        summary: {
          en: "The built-in core reference for Hermes usage, setup, extension points, and contributor guidance.",
          zh: "Hermes 自身的核心参考能力，覆盖使用、配置、扩展点和贡献者说明。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Core", "Reference", "Setup"], zh: ["核心", "参考", "配置"] },
      },
      {
        slug: "opencode",
        name: { en: "opencode", zh: "opencode" },
        summary: {
          en: "Delegate feature implementation and long-running autonomous sessions to OpenCode CLI.",
          zh: "把功能实现和长时 автономous session 委派给 OpenCode CLI。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Delegation", "Autonomous", "Coding"], zh: ["委派", "自主执行", "编码"] },
      },
    ],
  },
  {
    id: "github",
    label: { en: "GitHub", zh: "GitHub" },
    intro: {
      en: "Repo management, auth, issue triage, and review flows centered on GitHub workflows.",
      zh: "围绕 GitHub 仓库、认证、Issue 和代码评审的技能集合。",
    },
    officialCount: 6,
    skills: [
      {
        slug: "codebase-inspection",
        name: { en: "codebase-inspection", zh: "codebase-inspection" },
        summary: {
          en: "Inspect codebase size, language composition, and LOC breakdown for repo orientation.",
          zh: "用于快速掌握仓库规模、语言构成和 LOC 结构。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Repo stats", "Inspection", "Analysis"], zh: ["仓库统计", "检查", "分析"] },
      },
      {
        slug: "github-auth",
        name: { en: "github-auth", zh: "github-auth" },
        summary: {
          en: "Set up GitHub authentication using git, gh CLI, SSH, or token-based flows.",
          zh: "用 git、gh CLI、SSH 或 token 流程配置 GitHub 认证。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Auth", "SSH", "Token"], zh: ["认证", "SSH", "Token"] },
      },
      {
        slug: "github-issues",
        name: { en: "github-issues", zh: "github-issues" },
        summary: {
          en: "Create, search, triage, and manage issues from within agent workflows.",
          zh: "在 agent 工作流里创建、搜索、分拣和管理 Issue。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Issues", "Triage", "Workflow"], zh: ["Issue", "分拣", "流程"] },
      },
      {
        slug: "github-repo-management",
        name: { en: "github-repo-management", zh: "github-repo-management" },
        summary: {
          en: "Clone, create, fork, configure, and manage repositories and related GitHub settings.",
          zh: "覆盖 clone、create、fork、配置和仓库管理的 GitHub 能力。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Repos", "Forks", "Management"], zh: ["仓库", "Fork", "管理"] },
      },
    ],
  },
  {
    id: "media",
    label: { en: "Media", zh: "Media" },
    intro: {
      en: "Audio, video, transcript, and media-generation workflows.",
      zh: "用于音频、视频、转录和媒体生成的技能集合。",
    },
    officialCount: 6,
    skills: [
      {
        slug: "gif-search",
        name: { en: "gif-search", zh: "gif-search" },
        summary: {
          en: "Search and download reaction GIFs for lightweight media and communication workflows.",
          zh: "用于检索和下载 GIF，适合轻量传播和沟通场景。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["GIF", "Search", "Communication"], zh: ["GIF", "搜索", "沟通"] },
      },
      {
        slug: "heartmula",
        name: { en: "heartmula", zh: "heartmula" },
        summary: {
          en: "Set up and run open-source music generation workflows for full-song creation.",
          zh: "搭建和运行开源音乐生成流程，用于完整歌曲生成。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Music", "Generation", "Audio"], zh: ["音乐", "生成", "音频"] },
      },
      {
        slug: "songsee",
        name: { en: "songsee", zh: "songsee" },
        summary: {
          en: "Generate spectrograms and audio feature visualizations for analysis and debugging.",
          zh: "生成频谱图和音频特征可视化，适合分析和调试。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Audio", "Visualization", "Analysis"], zh: ["音频", "可视化", "分析"] },
      },
      {
        slug: "youtube-content",
        name: { en: "youtube-content", zh: "youtube-content" },
        summary: {
          en: "Fetch YouTube transcripts and reshape them into summaries, chapters, threads, or posts.",
          zh: "抓取 YouTube 转录，并转成摘要、章节、线程或文章。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["YouTube", "Transcripts", "Repurposing"], zh: ["YouTube", "转录", "改写"] },
      },
    ],
  },
  {
    id: "security",
    label: { en: "Security", zh: "安全" },
    intro: {
      en: "Auth, hardening, safer review, and security-oriented engineering support.",
      zh: "覆盖认证、系统加固、更稳的评审流程和安全导向工程支持。",
    },
    officialCount: 6,
    skills: [
      {
        slug: "security-and-hardening",
        name: { en: "security-and-hardening", zh: "security-and-hardening" },
        summary: {
          en: "Harden code that handles user input, auth, data storage, and third-party integrations.",
          zh: "加强涉及用户输入、认证、存储和第三方集成的代码安全性。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Hardening", "Auth", "Integrations"], zh: ["加固", "认证", "集成"] },
      },
      {
        slug: "github-auth-security",
        name: { en: "github-auth", zh: "github-auth" },
        summary: {
          en: "Practical GitHub authentication setup with SSH, tokens, and safer credential handling.",
          zh: "通过 SSH、token 和更稳的凭证管理方式配置 GitHub 认证。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Auth", "Credentials", "GitHub"], zh: ["认证", "凭证", "GitHub"] },
      },
      {
        slug: "code-review-and-quality",
        name: { en: "code-review-and-quality", zh: "code-review-and-quality" },
        summary: {
          en: "Run a multi-axis code review focused on quality, regressions, and risky assumptions.",
          zh: "执行多维度代码评审，重点看质量、回归风险和薄弱假设。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Review", "Risk", "Quality"], zh: ["评审", "风险", "质量"] },
      },
      {
        slug: "verification-before-completion",
        name: { en: "verification-before-completion", zh: "verification-before-completion" },
        summary: {
          en: "Require test and command evidence before claiming a task is complete or fixed.",
          zh: "要求先有测试和命令验证证据，再声称任务已完成或修复。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Verification", "Tests", "Guardrails"], zh: ["验证", "测试", "护栏"] },
      },
    ],
  },
  {
    id: "apple",
    label: { en: "Apple", zh: "Apple" },
    intro: {
      en: "macOS-native notes, reminders, messaging, and device workflows.",
      zh: "面向 macOS 原生笔记、提醒、消息和设备类工作流。",
    },
    officialCount: 4,
    skills: [
      {
        slug: "apple-notes-core",
        name: { en: "apple-notes", zh: "apple-notes" },
        summary: {
          en: "Manage Apple Notes on macOS for capture, retrieval, and structured note operations.",
          zh: "在 macOS 上管理 Apple Notes，适合记录、检索和结构化笔记操作。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["macOS", "Notes", "Capture"], zh: ["macOS", "笔记", "记录"] },
      },
      {
        slug: "apple-reminders",
        name: { en: "apple-reminders", zh: "apple-reminders" },
        summary: {
          en: "Manage Apple Reminders via CLI for task creation, completion, and cleanup.",
          zh: "通过 CLI 管理 Apple Reminders，适合任务创建、完成和清理。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["macOS", "Tasks", "Reminders"], zh: ["macOS", "任务", "提醒"] },
      },
      {
        slug: "findmy",
        name: { en: "findmy", zh: "findmy" },
        summary: {
          en: "Track Apple devices and AirTags from macOS through screen-assisted workflows.",
          zh: "从 macOS 端追踪 Apple 设备和 AirTag。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Devices", "Tracking", "macOS"], zh: ["设备", "追踪", "macOS"] },
      },
      {
        slug: "imessage",
        name: { en: "imessage", zh: "imessage" },
        summary: {
          en: "Send and receive iMessages or SMS through command-line mediated workflows.",
          zh: "通过命令行中介流程发送和接收 iMessage 或 SMS。",
        },
        status: { en: "Built-in", zh: "内置" },
        tags: { en: ["Messaging", "macOS", "Comms"], zh: ["消息", "macOS", "沟通"] },
      },
    ],
  },
  {
    id: "copywriting",
    label: { en: "Copywriting", zh: "Copywriting" },
    intro: {
      en: "Content drafting, polishing, repurposing, and channel-aware writing workflows.",
      zh: "适合写作、润色、改写和渠道化内容输出的技能集合。",
    },
    officialCount: 4,
    skills: [
      {
        slug: "content-drafting",
        name: { en: "content-drafting", zh: "content-drafting" },
        summary: {
          en: "Turn a usable brief into article angles, outlines, or full drafts for publication.",
          zh: "把可执行 brief 转成文章角度、提纲或完整初稿。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Drafting", "Articles", "Publishing"], zh: ["写作", "文章", "发布"] },
      },
      {
        slug: "content-polishing",
        name: { en: "content-polishing", zh: "content-polishing" },
        summary: {
          en: "Review and improve factual accuracy, structure, and editorial quality before publication.",
          zh: "在发布前提升内容的事实准确性、结构和编辑质量。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Editing", "Quality", "Review"], zh: ["编辑", "质量", "复核"] },
      },
      {
        slug: "content-repurpose",
        name: { en: "content-repurpose", zh: "content-repurpose" },
        summary: {
          en: "Adapt a finished article into WeChat, SEO blog, or platform-specific repackaged versions.",
          zh: "把已完成文章改造成微信公众号、SEO 博客或平台定制版本。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Repurposing", "Channels", "Distribution"], zh: ["改写", "渠道", "分发"] },
      },
      {
        slug: "content-humanizing",
        name: { en: "content-humanizing", zh: "content-humanizing" },
        summary: {
          en: "Reduce formulaic AI tone and make drafts feel more natural before final publication.",
          zh: "减少 AI 味和公式感，让稿件在发布前更自然可信。",
        },
        status: { en: "Starter pick", zh: "代表性推荐" },
        tags: { en: ["Tone", "Editing", "Humanization"], zh: ["语气", "润色", "去 AI 味"] },
      },
    ],
  },
];

export type HomeSkillScenario = {
  id: string;
  label: LocalizedText;
  summary: LocalizedText;
  skills: LocalizedList;
};

export const homeSkillScenarios: HomeSkillScenario[] = [
  {
    id: "software-development",
    label: { en: "Software Development", zh: "软件开发" },
    summary: {
      en: "Code generation, review, repository workflows, and engineering delivery loops.",
      zh: "覆盖代码生成、代码评审、仓库工作流和工程交付闭环。",
    },
    skills: {
      en: ["claude-code", "codex", "github-code-review", "github-pr-workflow"],
      zh: ["claude-code", "codex", "github-code-review", "github-pr-workflow"],
    },
  },
  {
    id: "research",
    label: { en: "Research", zh: "研究" },
    summary: {
      en: "Paper search, feed monitoring, document extraction, and persistent knowledge building.",
      zh: "适合论文搜索、信息源追踪、文档抽取和长期知识沉淀。",
    },
    skills: {
      en: ["arxiv", "blogwatcher", "llm-wiki", "ocr-and-documents"],
      zh: ["arxiv", "blogwatcher", "llm-wiki", "ocr-and-documents"],
    },
  },
  {
    id: "productivity",
    label: { en: "Productivity", zh: "生产率" },
    summary: {
      en: "Workspace tools for docs, tickets, notes, and recurring internal operations.",
      zh: "面向文档、任务、笔记和日常内部运作的工作空间型技能。",
    },
    skills: {
      en: ["google-workspace", "linear", "notion", "powerpoint"],
      zh: ["google-workspace", "linear", "notion", "powerpoint"],
    },
  },
  {
    id: "social-media",
    label: { en: "Social Media", zh: "社交媒体" },
    summary: {
      en: "Channel-native posting, distribution, and platform-specific publishing loops.",
      zh: "适合社交平台的内容分发、发布和渠道原生运营闭环。",
    },
    skills: {
      en: ["baoyu-post-to-x", "baoyu-post-to-weibo", "baoyu-post-to-wechat", "x-mastery-mentor"],
      zh: ["baoyu-post-to-x", "baoyu-post-to-weibo", "baoyu-post-to-wechat", "x-mastery-mentor"],
    },
  },
  {
    id: "security",
    label: { en: "Security", zh: "安全" },
    summary: {
      en: "Security review, hardening, auth setup, and safer production guardrails.",
      zh: "关注安全审查、系统加固、认证配置和更稳的生产防护。",
    },
    skills: {
      en: ["security-and-hardening", "github-auth", "code-review-and-quality", "verification-before-completion"],
      zh: ["security-and-hardening", "github-auth", "code-review-and-quality", "verification-before-completion"],
    },
  },
  {
    id: "mlops",
    label: { en: "MLOps", zh: "MLOps" },
    summary: {
      en: "Model evaluation, fine-tuning, experiment tracking, and inference operations.",
      zh: "适合模型评测、微调训练、实验跟踪和推理部署运维。",
    },
    skills: {
      en: ["dspy", "evaluating-llms-harness", "fine-tuning-with-trl", "weights-and-biases"],
      zh: ["dspy", "evaluating-llms-harness", "fine-tuning-with-trl", "weights-and-biases"],
    },
  },
  {
    id: "creative",
    label: { en: "Creative", zh: "Creative" },
    summary: {
      en: "Visual, motion, diagramming, and creative coding workflows for expressive output.",
      zh: "偏视觉、动效、图解和创意编码的表达型工作流。",
    },
    skills: {
      en: ["ascii-video", "excalidraw", "manim-video", "p5js"],
      zh: ["ascii-video", "excalidraw", "manim-video", "p5js"],
    },
  },
  {
    id: "gaming",
    label: { en: "Gaming", zh: "Gaming" },
    summary: {
      en: "Game operations, automation, content support, and player-oriented utility flows.",
      zh: "适合游戏运维、自动化、内容支持和面向玩家的工具链流程。",
    },
    skills: {
      en: ["minecraft-modpack-server", "pokemon-player", "roblox-game-data-scraper", "multi-game-codes-hub"],
      zh: ["minecraft-modpack-server", "pokemon-player", "roblox-game-data-scraper", "multi-game-codes-hub"],
    },
  },
  {
    id: "health",
    label: { en: "Health", zh: "Health" },
    summary: {
      en: "Health tracking, structured records, analysis, and personal-care oriented workflows.",
      zh: "适合健康记录、结构化追踪、分析整理和个人健康类流程。",
    },
    skills: {
      en: ["spreadsheet", "apple-notes", "notion", "google-workspace"],
      zh: ["spreadsheet", "apple-notes", "notion", "google-workspace"],
    },
  },
];

export const skillTabs: SkillTab[] = [
  {
    id: "starter-core",
    label: { en: "Starter Core", zh: "核心起步" },
    intro: {
      en: "These are the first skills and commands worth understanding when you are still building your first healthy Hermes loop.",
      zh: "当你还在建立第一条健康的 Hermes 闭环时，最值得先理解的是这些核心技能和命令。",
    },
    skills: [
      {
        slug: "hermes-agent",
        name: { en: "hermes-agent", zh: "hermes-agent" },
        summary: {
          en: "Built-in reference skill for Hermes Agent itself: CLI usage, setup, configuration, skills, gateway platforms, and contributor guidance.",
          zh: "Hermes Agent 自带的核心参考技能，覆盖 CLI 用法、配置、skills、gateway 平台和贡献者指南。",
        },
        installCmd: "Built in · ask for /hermes-agent",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: {
          en: ["Built-in", "Reference", "Setup"],
          zh: ["内置", "参考", "配置"],
        },
        useCases: {
          en: ["Setup help", "Troubleshooting", "Feature discovery"],
          zh: ["配置排查", "Troubleshooting", "能力发现"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in Quick Start", zh: "用于 Quick Start" }, href: "/quick-start/what-is-hermes-agent", variant: "primary" },
      },
      {
        slug: "plan",
        name: { en: "plan", zh: "plan" },
        summary: {
          en: "A built-in planning skill that inspects context and writes a markdown plan before execution.",
          zh: "Hermes 内置的规划技能，会先检查上下文并写出 markdown 计划，再进入执行。",
        },
        installCmd: "Built in · use /plan",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Planning", "Built-in", "Safe"], zh: ["规划", "内置", "安全"] },
        useCases: {
          en: ["Spec creation", "Task breakdown", "Pre-flight design"],
          zh: ["写计划", "任务拆解", "执行前设计"],
        },
        starterFriendly: true,
        cta: { label: { en: "Learn workflow design", zh: "理解工作流设计" }, href: "/learn/design-first-workflow", variant: "secondary" },
      },
      {
        slug: "skills-hub",
        name: { en: "Skills Hub", zh: "Skills Hub" },
        summary: {
          en: "The official discovery surface for built-in, optional, and community skills. Use it to browse or search before installing anything heavier.",
          zh: "官方技能发现入口，聚合内置、可选和社区技能。在安装更重的能力之前，先在这里搜索和筛选。",
        },
        installCmd: "CLI · /skills browse · /skills search",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Hub", "Discovery", "Official"], zh: ["Hub", "发现", "官方"] },
        useCases: {
          en: ["Find optional skills", "Compare categories", "Search by task"],
          zh: ["找可选技能", "比较分类", "按任务搜索"],
        },
        starterFriendly: true,
        cta: { label: { en: "Browse the hub", zh: "浏览技能中心" }, href: "/skills", variant: "secondary" },
      },
    ],
  },
  {
    id: "hub-installed",
    label: { en: "Hub Installed", zh: "Hub 安装" },
    intro: {
      en: "Official optional skills are heavier or more niche. Install them deliberately from the Hub when your workflow genuinely needs them.",
      zh: "官方可选技能通常更重、更偏场景化。只有当工作流真的需要时，再从 Hub 里明确安装。",
    },
    skills: [
      {
        slug: "arxiv",
        name: { en: "official/research/arxiv", zh: "official/research/arxiv" },
        summary: {
          en: "A research-oriented optional skill for finding and structuring academic papers from arXiv.",
          zh: "用于查找和结构化 arXiv 论文的官方研究类可选技能。",
        },
        installCmd: "hermes skills install official/research/arxiv",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Optional", "Research", "Hub"], zh: ["可选", "研究", "Hub"] },
        useCases: {
          en: ["Paper scouting", "Literature briefs", "Research pipelines"],
          zh: ["论文筛选", "文献摘要", "研究工作流"],
        },
        starterFriendly: false,
        cta: { label: { en: "Pair with templates", zh: "搭配模板使用" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "songwriting-and-ai-music",
        name: { en: "official/creative/songwriting-and-ai-music", zh: "official/creative/songwriting-and-ai-music" },
        summary: {
          en: "An example official optional skill from the Hub that shows how Hermes extends into niche creative workflows.",
          zh: "一个来自官方 Hub 的创意类可选技能示例，能帮助你理解 Hermes 如何扩展到更垂直的任务。",
        },
        installCmd: "/skills install official/creative/songwriting-and-ai-music",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Creative", "Optional", "Hub"], zh: ["创意", "可选", "Hub"] },
        useCases: {
          en: ["Creative drafting", "Media experiments", "Skill discovery demos"],
          zh: ["创意草稿", "媒体实验", "技能探索演示"],
        },
        starterFriendly: false,
        cta: { label: { en: "Understand safe expansion", zh: "理解安全扩展" }, href: "/learn/choose-safer-starter-skills", variant: "secondary" },
      },
      {
        slug: "community-search",
        name: { en: "Community skills", zh: "社区技能" },
        summary: {
          en: "Hermes can surface community and registry-backed skills. Use search before installing to confirm platform fit and maintenance quality.",
          zh: "Hermes 还可以发现社区技能和外部 registry。安装前先搜索和确认平台适配、维护质量。",
        },
        installCmd: "/skills search <topic>",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Community", "Registry", "Discovery"], zh: ["社区", "Registry", "发现"] },
        useCases: {
          en: ["Niche integrations", "Platform-specific workflows", "Capability gaps"],
          zh: ["垂直集成", "平台专属工作流", "补能力缺口"],
        },
        starterFriendly: false,
        cta: { label: { en: "Check capability boundaries", zh: "看能力边界" }, href: "/learn/skills-change-boundaries", variant: "secondary" },
      },
    ],
  },
  {
    id: "coding-and-agents",
    label: { en: "Coding & Agents", zh: "编码与多 Agent" },
    intro: {
      en: "Hermes ships with agent-facing skills that can delegate specialized coding work and structure reviews around real repositories.",
      zh: "Hermes 自带面向 agent 的技能，可以把专业编码任务委派出去，并围绕真实代码库组织评审。",
    },
    skills: [
      {
        slug: "codex",
        name: { en: "codex", zh: "codex" },
        summary: {
          en: "Built-in delegation skill for OpenAI Codex CLI. Best for bounded code changes, refactors, and batch issue fixing.",
          zh: "面向 OpenAI Codex CLI 的内置委派技能，适合边界清晰的代码改动、重构和批量修复。",
        },
        installCmd: "Built in · use /codex",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Coding", "Delegation", "Built-in"], zh: ["编码", "委派", "内置"] },
        useCases: {
          en: ["Feature slices", "PR cleanup", "Patch generation"],
          zh: ["功能切片", "PR 清理", "补丁生成"],
        },
        starterFriendly: false,
        cta: { label: { en: "See multi-agent template", zh: "查看多 Agent 模板" }, href: "/templates/multi-agent-feishu-setup", variant: "secondary" },
      },
      {
        slug: "claude-code",
        name: { en: "claude-code", zh: "claude-code" },
        summary: {
          en: "Built-in delegation skill for Claude Code. Useful when you need a second coding worker inside a Hermes-driven workflow.",
          zh: "面向 Claude Code 的内置委派技能，适合在 Hermes 工作流里引入第二个编码执行者。",
        },
        installCmd: "Built in · use /claude-code",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Coding", "Parallel work", "Built-in"], zh: ["编码", "并行工作", "内置"] },
        useCases: {
          en: ["Refactors", "Code review loops", "Parallel issue resolution"],
          zh: ["重构", "代码评审回路", "并行问题处理"],
        },
        starterFriendly: false,
        cta: { label: { en: "Learn sub-agent patterns", zh: "学习子 Agent 模式" }, href: "/learn/sub-agent-parallel-tasks", variant: "secondary" },
      },
      {
        slug: "requesting-code-review",
        name: { en: "requesting-code-review", zh: "requesting-code-review" },
        summary: {
          en: "A review-centric built-in skill for validating work before merge or handoff.",
          zh: "面向代码复核的内置技能，适合在合并或交付前做系统化验证。",
        },
        installCmd: "Built in · ask for /requesting-code-review",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Review", "Quality", "Built-in"], zh: ["评审", "质量", "内置"] },
        useCases: {
          en: ["Pre-merge checks", "Regression review", "Risk surfacing"],
          zh: ["合并前检查", "回归审查", "风险暴露"],
        },
        starterFriendly: false,
        cta: { label: { en: "Read review guidance", zh: "看复盘与复核" }, href: "/learn/review-before-expanding", variant: "secondary" },
      },
    ],
  },
  {
    id: "platform-utilities",
    label: { en: "Platform Utilities", zh: "平台工具" },
    intro: {
      en: "These skills become powerful once your base Hermes loop is healthy and you need to land output in real platforms or device-native surfaces.",
      zh: "当 Hermes 基础链路已经健康，这些技能能帮助你把结果落到真实平台、设备原生能力或消息表面中。",
    },
    skills: [
      {
        slug: "imessage",
        name: { en: "imessage", zh: "imessage" },
        summary: {
          en: "Built-in macOS skill for sending and receiving iMessage or SMS via the terminal.",
          zh: "面向 macOS 的内置技能，可通过终端发送和接收 iMessage 或短信。",
        },
        installCmd: "Built in on macOS · use /imessage",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Apple", "Messaging", "Built-in"], zh: ["Apple", "消息", "内置"] },
        useCases: {
          en: ["Personal alerts", "Device-native automation", "Message routing"],
          zh: ["个人提醒", "系统原生自动化", "消息路由"],
        },
        starterFriendly: false,
        cta: { label: { en: "See messaging workflows", zh: "查看消息类工作流" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "apple-notes",
        name: { en: "apple-notes", zh: "apple-notes" },
        summary: {
          en: "Built-in macOS notes integration for creating, editing, and searching Apple Notes from Hermes.",
          zh: "macOS 下的 Apple Notes 内置集成，可让 Hermes 创建、编辑和搜索备忘内容。",
        },
        installCmd: "Built in on macOS · use /apple-notes",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Apple", "Notes", "Built-in"], zh: ["Apple", "笔记", "内置"] },
        useCases: {
          en: ["Note capture", "Summaries", "Personal knowledge workflows"],
          zh: ["笔记记录", "摘要沉淀", "个人知识流"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in note workflows", zh: "用于笔记工作流" }, href: "/templates/meeting-notes-dispatcher", variant: "secondary" },
      },
      {
        slug: "voice-mode",
        name: { en: "Voice mode", zh: "Voice mode" },
        summary: {
          en: "Hermes voice features are configured at the platform layer rather than through one single skill, but they follow the same principle: confirm the text loop first, then add voice.",
          zh: "Hermes 的 voice 能力更多属于平台特性而不是单个 skill，但遵循同一个原则：先把文本闭环跑通，再叠加语音。",
        },
        installCmd: "Feature path · hermes · /voice on",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Voice", "Platform", "Gateway"], zh: ["语音", "平台", "Gateway"] },
        useCases: {
          en: ["CLI voice mode", "Telegram audio reply", "Discord voice"],
          zh: ["CLI 语音模式", "Telegram 语音回复", "Discord 语音"],
        },
        starterFriendly: false,
        cta: { label: { en: "Read setup first", zh: "先看配置路径" }, href: "/quick-start/deploy-install", variant: "secondary" },
      },
    ],
  },
];
