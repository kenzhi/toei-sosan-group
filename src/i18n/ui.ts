export const defaultLang = 'ja' as const;
export type Lang = 'ja' | 'zh' | 'en';

export const ui = {
  ja: {
    nav: { home: 'ホーム', about: '私たちについて', services: 'サービス', factory: '工場・製造', contact: 'お問い合わせ', cta: 'お問い合わせ' },
    langSwitch: { next: '中文', path: '/zh/' },
    footer: {
      servicesTitle: 'サービス',
      companyTitle: '会社',
      resourcesTitle: 'リソース',
      contactTitle: '連絡',
      casesLink: 'ケース',
      insightsLink: '業界知見',
      newsLink: 'ニュース',
      address: '日本本社：東京都品川区東品川4-12-4<br />品川インターシティC棟 6F<br />中国拠点：広東省東莞市',
      brandTag: '東栄創産グループ株式会社<br/>日本と中国を結ぶ実業の架け橋',
      email: 'info@toei-sosan.com',
      hours: '営業時間：平日 9:00 - 18:00',
    },
  },
  zh: {
    nav: { home: '首页', about: '关于我们', services: '服务', factory: '工厂实力', contact: '联系我们', cta: '联系我们' },
    langSwitch: { next: 'English', path: '/en/' },
    footer: {
      servicesTitle: '服务',
      companyTitle: '公司',
      resourcesTitle: '资源',
      contactTitle: '联系',
      casesLink: '案例',
      insightsLink: '行业洞察',
      newsLink: '新闻',
      address: '日本总部：东京都品川区东品川 4-12-4<br />品川 Intercity C 栋 6F<br />中国据点：广东省东莞市',
      brandTag: '东荣创产集团株式会社<br/>架起日本与中国实业的桥梁',
      email: 'info@toei-sosan.com',
      hours: '营业时间：工作日 9:00 - 18:00',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', factory: 'Factory', contact: 'Contact', cta: 'Contact Us' },
    langSwitch: { next: '日本語', path: '/' },
    footer: {
      servicesTitle: 'Services',
      companyTitle: 'Company',
      resourcesTitle: 'Resources',
      contactTitle: 'Contact',
      casesLink: 'Case Studies',
      insightsLink: 'Insights',
      newsLink: 'News',
      address: 'Japan HQ: 4-12-4 Higashi-Shinagawa, Shinagawa-ku, Tokyo<br />Shinagawa Intercity C Bldg. 6F<br />China: Dongguan, Guangdong',
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
