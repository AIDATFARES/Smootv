import { article1Speed } from "./articles/article1-speed";
import { article2Firestick } from "./articles/article2-firestick";
import { article3SmartTv } from "./articles/article3-smart-tv";
import { article4Troubleshooting } from "./articles/article4-troubleshooting";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  article1Speed,
  article2Firestick,
  article3SmartTv,
  article4Troubleshooting,
];
