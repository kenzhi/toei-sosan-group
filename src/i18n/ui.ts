export const defaultLang = 'ja' as const;
export type Lang = 'ja' | 'zh' | 'en';

export const ui = {
  ja: {
    nav: { home: 'ホーム', about: '私たちについて', services: 'サービス', blog: 'ブログ', contact: 'お問い合わせ', cta: 'お問い合わせ' },
    langSwitch: { next: '中文', path: '/zh/' },
    servicesMenu: {
      overview: 'サービス概要',
      factory: '東莞工廠',
      products: '製品カテゴリ',
      pastProducts: '過去の製品',
      productItems: [
        { slug: '01-precision-metal-part', label: '精密金属部品' },
        { slug: '02-injection-mold-housing', label: '射出成形ハウジング' },
        { slug: '03-pcb-assembly', label: 'PCB 実装・電子機器組立' },
        { slug: '04-cosmetic-bottle', label: '化粧品ボトル・パッケージ' },
        { slug: '05-carton-packaging', label: '紙カートン・化粧箱' },
        { slug: '06-electronic-component', label: 'カスタム電子部品' },
      ],
    },
    footer: {
      servicesTitle: 'サービス',
      companyTitle: '会社',
      resourcesTitle: 'リソース',
      contactTitle: '連絡',
      casesLink: 'ケース',
      insightsLink: '業界知見',
      newsLink: 'ニュース',
      address: '日本本社：〒343-0828 埼玉県越谷市レイクタウン八丁目8番地125号<br />中国拠点：広東省東莞市東城街道',
      brandTag: '東栄創産グループ株式会社<br/>日本と中国を結ぶ実業の架け橋',
      email: 'info@toei-sosan.com',
      hours: '営業時間：平日 9:00 - 18:00',
    },
  },
  zh: {
    nav: { home: '首页', about: '关于我们', services: '服务', blog: '博客', contact: '联系我们', cta: '联系我们' },
    langSwitch: { next: 'English', path: '/en/' },
    servicesMenu: {
      overview: '服务总览',
      factory: '东莞工厂',
      products: '产品类别',
      pastProducts: '过往产品',
      productItems: [
        { slug: '01-precision-metal-part', label: '精密金属部件' },
        { slug: '02-injection-mold-housing', label: '注塑成型外壳' },
        { slug: '03-pcb-assembly', label: 'PCB 贴装 / 电子组装' },
        { slug: '04-cosmetic-bottle', label: '化妆品瓶 / 包装' },
        { slug: '05-carton-packaging', label: '纸箱 / 礼盒' },
        { slug: '06-electronic-component', label: '定制电子元件' },
      ],
    },
    footer: {
      servicesTitle: '服务',
      companyTitle: '公司',
      resourcesTitle: '资源',
      contactTitle: '联系',
      casesLink: '案例',
      insightsLink: '行业洞察',
      newsLink: '新闻',
      address: '日本总部：〒343-0828 埼玉县越谷市 Lake Town 八丁目8番地125号<br />中国据点：广东省东莞市东城街道',
      brandTag: '东荣创产集团株式会社<br/>架起日本与中国实业的桥梁',
      email: 'info@toei-sosan.com',
      hours: '营业时间：工作日 9:00 - 18:00',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', contact: 'Contact', cta: 'Contact Us' },
    langSwitch: { next: '日本語', path: '/' },
    servicesMenu: {
      overview: 'Services Overview',
      factory: 'Dongguan Factory',
      products: 'Product Categories',
      pastProducts: 'Past Products',
      productItems: [
        { slug: '01-precision-metal-part', label: 'Precision Metal Parts' },
        { slug: '02-injection-mold-housing', label: 'Injection-Molded Housing' },
        { slug: '03-pcb-assembly', label: 'PCB Assembly' },
        { slug: '04-cosmetic-bottle', label: 'Cosmetic Bottles' },
        { slug: '05-carton-packaging', label: 'Carton & Gift Boxes' },
        { slug: '06-electronic-component', label: 'Custom Electronic Components' },
      ],
    },
    footer: {
      servicesTitle: 'Services',
      companyTitle: 'Company',
      resourcesTitle: 'Resources',
      contactTitle: 'Contact',
      casesLink: 'Case Studies',
      insightsLink: 'Insights',
      newsLink: 'News',
      address: 'Japan HQ: 8-125 Lake-Town 8-chome, Koshigaya, Saitama 343-0828<br />China: Dongcheng Subdistrict, Dongguan, Guangdong',
      brandTag: 'TOEI SOSAN GROUP CO., LTD.<br/>A bridge of real industry between Japan and China',
      email: 'info@toei-sosan.com',
      hours: 'Hours: Mon-Fri 9:00 - 18:00 (JST)',
    },
  },
} as const;

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  if (pathname.startsWith('/zh/') || pathname === '/zh') return 'zh';
  return 'ja';
}

export function cleanSlug(slug: string): string {
  // Astro 把 "foo.en" 的 slug normalize 成 "fooen"（无分隔点），所以匹配无点后缀
  return slug.replace(/(zh|en)$/, '');
}

export function getSwitchTarget(currentPath: string, currentLang: Lang): { path: string; label: string } {
  // ja → zh → en → ja (循环)
  let nextLang: Lang;
  if (currentLang === 'ja') nextLang = 'zh';
  else if (currentLang === 'zh') nextLang = 'en';
  else nextLang = 'ja';

  const t = ui[nextLang].langSwitch;
  // 计算切换后的路径
  let newPath: string;
  if (nextLang === 'ja') {
    newPath = currentPath.replace(/^\/(zh|en)/, '') || '/';
    if (currentPath === '/zh' || currentPath === '/en') newPath = '/';
  } else {
    let stripped = currentPath.replace(/^\/(zh|en)/, '') || '/';
    if (!stripped.endsWith('/')) stripped += '/';
    newPath = `/${nextLang}${stripped}`;
  }
  return { path: newPath, label: t.next };
}
