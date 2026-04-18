import type { APIRoute } from "astro";
import { buildLocalizedRss } from "@/lib/rss";

export const GET: APIRoute = (context) => buildLocalizedRss(context, "en");
