import { defineCollection, z } from 'astro:content';

// 案例集合（过往项目）
const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    lang: z.enum(['ja', 'zh', 'en']).default('ja'),
    client: z.string().optional(),
    industry: z.string().optional(),
    service: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 产品集（实物作品 showcase）
const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    lang: z.enum(['ja', 'zh', 'en']).default('ja'),
    category: z.string().optional(),         // 金属加工 / 樹脂成形 / 電子組立 / 包装 / 表面処理
    industry: z.string().optional(),
    client: z.string().optional(),
    specs: z.record(z.string()).optional(),  // 材質 / 加工 / 寸法 / 重量 etc.
    gallery: z.array(z.string()).default([]),// 详情页轮播图
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedCase: z.string().optional(),      // 关联案例的 slug
    draft: z.boolean().default(false),
  }),
});

// 行业洞察集合
const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    lang: z.enum(['ja', 'zh', 'en']).default('ja'),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 新闻 / 解决方案更新集合
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    lang: z.enum(['ja', 'zh', 'en']).default('ja'),
    type: z.enum(['announcement', 'service', 'partnership']).default('announcement'),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases, products, insights, news };
