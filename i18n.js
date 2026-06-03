const I18N = {
  zh: {
    meta: {
      description: "建筑设计 · 平面设计 · AIGC — 陆宇婧个人作品集",
      title: "陆宇婧 · 作品集",
    },
    skipLink: "跳到主要内容",
    nav: {
      main: "主导航",
      mobile: "移动端导航",
      work: "作品",
      about: "关于",
      contact: "联系",
      menuOpen: "打开菜单",
    },
    lang: {
      switchToEn: "切换为英文",
      switchToZh: "切换为中文",
      en: "EN",
      zh: "中文",
    },
    hero: {
      label: "Portfolio · 2026",
      title:
        '建筑、平面与<br /><em>生成式</em> 视觉实践',
      desc:
        "设计师 / 创作者。关注空间叙事、品牌视觉与 AI 辅助创作，用克制的方式呈现复杂想法。",
      ctaWork: "浏览作品",
      ctaContact: "联系我",
    },
    work: {
      title: "作品",
      sub: "按类别筛选，点击查看详情",
      filterLabel: "作品分类",
      filters: {
        all: "全部",
        architecture: "建筑设计",
        graphic: "平面设计",
        aigc: "AIGC",
      },
    },
    about: {
      title: "关于我",
      p1: "建筑学背景，兼具空间设计与视觉传达经验。擅长从概念到落地的完整表达——无论是实体空间、品牌系统，还是借助 AI 工具探索的新媒介形态。",
      p2: '求职方向：<strong>建筑 / 室内设计、品牌与视觉设计、创意与 AIGC 相关岗位</strong>。欢迎通过邮件或 <a href="#contact">LinkedIn</a> 进一步交流。',
      education: "教育",
      educationValue: "温州大学 · 建筑学",
      skills: "技能",
      skillsValue: "Rhino / SU / PS / AI / Midjourney",
      languages: "语言",
      languagesValue: "中文 · English",
      location: "所在地",
      locationValue: "中国",
    },
    contact: {
      title: "联系",
      lead: "有合适的机会或合作，欢迎来信。",
    },
    footer: {
      rights: "保留所有权利。",
      copyrightNotice:
        "本站作品版权归陆宇婧所有，未经授权不得用于商业用途或再传播。",
    },
    copyright: {
      watermark: "陆宇婧",
    },
    modal: {
      close: "关闭",
      viewPdf: "在新标签页打开完整 PDF",
      pdfPreview: "方案册预览",
      videoPreview: "视频预览",
    },
    social: {
      linkedin: "LinkedIn",
      linkedinProfile: "LinkedIn",
      xiaohongshuProfile: "小红书",
    },
    categories: {
      architecture: "建筑设计",
      graphic: "平面设计",
      aigc: "AIGC",
    },
  },
  en: {
    meta: {
      description:
        "Architecture · Graphic Design · AIGC — Portfolio of Lu Yujing",
      title: "Lu Yujing · Portfolio",
    },
    skipLink: "Skip to main content",
    nav: {
      main: "Main navigation",
      mobile: "Mobile navigation",
      work: "Work",
      about: "About",
      contact: "Contact",
      menuOpen: "Open menu",
    },
    lang: {
      switchToEn: "Switch to English",
      switchToZh: "Switch to Chinese",
      en: "EN",
      zh: "中文",
    },
    hero: {
      label: "Portfolio · 2026",
      title:
        'Architecture, graphic &amp;<br /><em>generative</em> visual practice',
      desc:
        "Designer and creator focused on spatial narrative, brand visuals, and AI-assisted workflows—presenting complex ideas with restraint.",
      ctaWork: "View work",
      ctaContact: "Get in touch",
    },
    work: {
      title: "Work",
      sub: "Filter by category · click for details",
      filterLabel: "Work categories",
      filters: {
        all: "All",
        architecture: "Architecture",
        graphic: "Graphic Design",
        aigc: "AIGC",
      },
    },
    about: {
      title: "About",
      p1: "With an architecture background, I work across spatial design and visual communication—from concept to deliverable, whether built environments, brand systems, or new media explored with AI tools.",
      p2: 'Open to roles in <strong>architecture / interior design, branding &amp; visual design, and creative / AIGC positions</strong>. Reach out via email or <a href="#contact">LinkedIn</a> below.',
      education: "Education",
      educationValue: "Wenzhou University · Architecture",
      skills: "Tools",
      skillsValue: "Rhino / SU / PS / AI / Midjourney",
      languages: "Languages",
      languagesValue: "Chinese · English",
      location: "Based in",
      locationValue: "China",
    },
    contact: {
      title: "Contact",
      lead: "For opportunities or collaboration, feel free to write.",
    },
    footer: {
      rights: "All rights reserved.",
      copyrightNotice:
        "All works on this site are © Lu Yujing. No commercial use or redistribution without permission.",
    },
    copyright: {
      watermark: "Lu Yujing",
    },
    modal: {
      close: "Close",
      viewPdf: "Open full PDF in new tab",
      pdfPreview: "Portfolio preview",
      videoPreview: "Video preview",
    },
    social: {
      linkedin: "LinkedIn",
      linkedinProfile: "LinkedIn",
      xiaohongshuProfile: "Xiaohongshu",
    },
    categories: {
      architecture: "Architecture",
      graphic: "Graphic Design",
      aigc: "AIGC",
    },
  },
};

function getLang() {
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "zh" || saved === "en") return saved;
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("zh") ? "zh" : "en";
}

function setLang(lang) {
  localStorage.setItem("portfolio-lang", lang);
}

function t(lang, key) {
  const parts = key.split(".");
  let node = I18N[lang];
  for (const part of parts) {
    node = node?.[part];
  }
  return node ?? key;
}

function categoryLabel(lang, category) {
  return t(lang, `categories.${category}`);
}

function projectField(project, field, lang) {
  const val = project[field];
  if (val && typeof val === "object" && (val.zh || val.en)) {
    return val[lang] ?? val.zh ?? val.en;
  }
  return val;
}
