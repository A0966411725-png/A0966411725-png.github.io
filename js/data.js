/**
 * 個人作品集資料配置檔 (PORTFOLIO_DATA)
 * 您可以隨時在此檔案直接修改文字、技能、專案與經歷，網站將自動同步更新！
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "YENKAI",
    chineseName: "陳彥愷",
    tagline: "電機工程學系學生",
    typewriterTitles: [
      "電機工程學系 (Electrical Engineering)",
      "Web Developer",
      "Tech Enthusiast"
    ],
    availability: "Available for Projects",
    statusText: "🟢 歡迎來到我的個人網站",
    bioShort: "你好！我是中興大學電機工程學系的陳彥愷。熱愛學習新技術與打造創新的網頁應用。",
    bioDetailed: "目前就讀於中興大學電機工程學系，對軟體開發、網頁設計以及硬體控制皆有濃厚的興趣。期待能將所學應用於實際專案中，創造有價值的系統。",
    location: "Taichung, Taiwan (GMT+8)",
    email: "yenkai@example.com",
    avatar: "assets/images/avatar.jpg",
    resumeUrl: "#", // 可替換為您的 PDF 履歷連結
    stats: [
      { number: "5+", label: "年全端開發經驗" },
      { number: "35+", label: "成功交付專案" },
      { number: "120k+", label: "開源社群使用者" },
      { number: "99.9%", label: "系統穩定運行率" }
    ],
    socialLinks: [
      { name: "GitHub", url: "https://github.com/A0966411725-png", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "X (Twitter)", url: "https://x.com", icon: "twitter" },
      { name: "Discord", url: "https://discord.com", icon: "discord" },
      { name: "Email", url: "mailto:alex.chen.dev@example.com", icon: "mail" }
    ]
  },

  skills: [
    {
      category: "Programming Languages 程式語言",
      icon: "tool",
      description: "熟悉多種程式語言，能夠針對不同需求選擇最合適的工具。",
      items: [
        { name: "Python", level: "Advanced", hot: true },
        { name: "C / C++", level: "Advanced", hot: true },
        { name: "JavaScript / HTML / CSS", level: "Intermediate" }
      ]
    },
    {
      category: "Professional Domains 專業領域",
      icon: "cpu",
      description: "在人工智慧與資料分析等領域有深入的學習與實作經驗。",
      items: [
        { name: "Artificial Intelligence (AI)", level: "Advanced", hot: true },
        { name: "Machine Learning", level: "Intermediate" },
        { name: "Data Analysis", level: "Intermediate" },
        { name: "Internet of Things (IoT)", level: "Intermediate" }
      ]
    }
  ],

  projects: [
    {
      id: "5g-antenna-transmission",
      title: "5G陣列天線傳輸",
      category: "research",
      categoryLabel: "Research & Development",
      shortDesc: "利用改變陣列天線的波束方向，使天線傳輸達到最佳化。",
      fullDesc: "本專案聚焦於通訊領域中的陣列天線技術。透過演算法計算與模擬，動態調整天線陣列的波束方向（Beamforming），藉此減少訊號干擾並大幅提升天線傳輸的效率與覆蓋範圍，達到最佳化的通訊品質。",
      image: "assets/images/project-ai.jpg",
      tags: ["Python", "C++", "5G Communication", "Beamforming", "Signal Processing"],
      metrics: ["優化波束成形演算法", "提升傳輸效率", "降低訊號干擾"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com/A0966411725-png",
      featured: true
    }
  ],

  experiences: [
    {
      period: "2023 — 現職",
      role: "資深全端工程師 (Senior Full-Stack Engineer)",
      company: "Apex HyperScale Technologies",
      location: "Taipei, Taiwan",
      description: "帶領 6 人前端與架構小組，重構核心 SaaS 雲端平台。引入微前端架構與自動化 CI/CD 流程，將產品平均首屏加載時間由 3.8s 縮短至 0.9s。",
      achievements: [
        "主導跨國資料庫讀寫分離與 Redis 多級快取策略，系統併發吞吐量提升 300%",
        "推動全團隊 TypeScript 遷移，程式碼覆蓋率提升至 91%，線上錯誤率下降 45%",
        "建置內部 AI 輔助開發工具，加速團隊 Sprint 交付速度"
      ],
      skills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      period: "2021 — 2023",
      role: "全端開發工程師 (Full-Stack Engineer)",
      company: "Horizon Digital Studio",
      location: "Taipei, Taiwan",
      description: "負責多個大型企業客戶的 Web 應用系統設計與開發，涵蓋高頻金融交易後台、供應鏈管理平台與互動行銷網站。",
      achievements: [
        "獨立設計並實作即時 WebSocket 交易行情推播服務，穩定支撐每日千萬次訊息傳輸",
        "建立公司標準化 UI 元件庫與前端規範，減少新專案 40% 的樣板程式碼時間",
        "協助團隊導入 Docker 容器化測試與自動化部署"
      ],
      skills: ["Vue.js", "Node.js", "Express", "MongoDB", "Redis", "Tailwind CSS"]
    },
    {
      period: "2019 — 2021",
      role: "前端工程師 (Frontend Developer)",
      company: "Spark Wave Media",
      location: "Taipei, Taiwan",
      description: "專注於現代響應式 Web 介面開發、動畫特效優化與跨裝置瀏覽器相容性調整。",
      achievements: [
        "負責數十個數位行銷專案，實現高幀率 CSS/Canvas 動態視覺，專案均獲得客戶高度好評",
        "優化網站 Core Web Vitals 指標，SEO 搜尋排名顯著提升"
      ],
      skills: ["JavaScript (ES6+)", "CSS3 / Sass", "React", "Webpack", "REST APIs"]
    }
  ],

  terminalHelp: [
    { command: "about", desc: "查看個人簡介與專業背景" },
    { command: "skills", desc: "印出核心技術棧一覽" },
    { command: "projects", desc: "列出最新精選專案" },
    { command: "contact", desc: "顯示 Email 與社交聯絡管道" },
    { command: "theme <cyan|violet|emerald|sunset>", desc: "更換主題強調色" },
    { command: "clear", desc: "清除終端機螢幕內容" },
    { command: "sudo", desc: "嘗試獲取管理員特權（彩蛋）" }
  ]
};

// 支援瀏覽器全域載入
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
