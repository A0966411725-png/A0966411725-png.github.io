/**
 * 個人作品集資料配置檔 (PORTFOLIO_DATA)
 * 您可以隨時在此檔案直接修改文字、技能、專案與經歷，網站將自動同步更新！
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "YENKAI",
    chineseName: "您的中文名字",
    tagline: "全端工程師 & 雲端架構愛好者",
    typewriterTitles: [
      "Full-Stack Software Engineer",
      "Cloud & AI Systems Builder",
      "Creative Web Developer",
      "Open Source Contributor"
    ],
    availability: "Available for Projects & Full-time Roles",
    statusText: "🟢 目前開放接案與全端合作",
    bioShort: "熱愛打造高擴展性分散式架構與極致使用者體驗的現代網頁應用。專注於 React、TypeScript、Node.js 與雲端 AI 應用整合。",
    bioDetailed: "擁有超過 5 年全端開發與微服務系統建構經驗，曾主導數個百萬級用戶 SaaS 平台的前後端重構與效能優化。擅長在優雅簡約的 UI/UX 設計與堅固耐用的系統底層架構之間取得完美平衡。",
    location: "Taipei, Taiwan (GMT+8)",
    email: "alex.chen.dev@example.com",
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
      category: "Frontend 前端架構",
      icon: "layout",
      description: "以元件化、高效能與無障礙為核心的使用者介面開發",
      items: [
        { name: "React / Next.js", level: "Expert", hot: true },
        { name: "TypeScript", level: "Expert", hot: true },
        { name: "Vue.js / Nuxt", level: "Advanced" },
        { name: "Tailwind CSS / Vanilla CSS", level: "Expert" },
        { name: "Three.js / WebGL", level: "Intermediate", hot: true },
        { name: "State Management (Zustand / Redux)", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Cloud 後端與雲端",
      icon: "server",
      description: "具備高併發處理能力與容錯設計的微服務系統",
      items: [
        { name: "Node.js / Express / NestJS", level: "Expert", hot: true },
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "PostgreSQL / Redis / MongoDB", level: "Expert", hot: true },
        { name: "Docker & Kubernetes", level: "Advanced" },
        { name: "AWS (Lambda, S3, ECS, CloudFront)", level: "Advanced" },
        { name: "REST & GraphQL APIs", level: "Expert" }
      ]
    },
    {
      category: "AI & Innovation 人工智慧應用",
      icon: "cpu",
      description: "現代生成式 AI 與大型語言模型工程整合",
      items: [
        { name: "LLM API & Prompt Engineering", level: "Advanced", hot: true },
        { name: "LangChain / LlamaIndex", level: "Intermediate" },
        { name: "Vector Database (Pinecone, Chroma)", level: "Advanced" },
        { name: "RAG 檢索增強生成架構", level: "Advanced", hot: true }
      ]
    },
    {
      category: "DevOps & Tools 工具與工程化",
      icon: "tool",
      description: "自動化部署管線與敏捷軟體工程流程",
      items: [
        { name: "Git / GitHub Actions CI/CD", level: "Expert" },
        { name: "Linux / Shell Scripting", level: "Advanced" },
        { name: "Jest / Playwright E2E", level: "Advanced" },
        { name: "Figma UI/UX Prototyping", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "ai-workflow-studio",
      title: "Cognitix // AI Workflow Studio",
      category: "ai",
      categoryLabel: "AI & SaaS",
      shortDesc: "視覺化神經網路管線調度平台，支援即時節點拖曳、模型微調訓練監控與 Token 消耗即時分析。",
      fullDesc: "Cognitix 是一個專為企業開發團隊打造的視覺化 AI 管線工作流平台。整合 LangChain 與自建分散式 Worker 節點，使用者可藉由直觀的畫布拉取資料前處理、向量嵌入與多模型 (GPT-4, Claude, Llama 3) 串接流程，並提供端對端即時延遲、成本與模型效能儀表板。",
      image: "assets/images/project-ai.jpg",
      tags: ["Next.js", "TypeScript", "FastAPI", "LangChain", "Redis", "Tailwind"],
      metrics: ["降低 60% 管線部署時間", "支援每秒 1,200+ 請求", "即時 Token 監控"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "nexus-analytics",
      title: "Nexus // 高頻金融資產戰情室",
      category: "fullstack",
      categoryLabel: "FinTech & Full-Stack",
      shortDesc: "次毫秒級即時行情串流與加密資產組合管理平台，內建流暢的互動式 K 線圖與損益預測模組。",
      fullDesc: "Nexus 是一套面向專業投資者與量化交易團隊的現代化資產分析平台。採用 WebSocket 實現零延遲市場行情推送，並運用 Web Workers 處理百萬筆歷史分時資料運算。具備自訂技術指標、多幣種即時清算與自動資產負債報表匯出功能。",
      image: "assets/images/project-fintech.jpg",
      tags: ["React", "Go (Golang)", "WebSocket", "PostgreSQL", "ECharts", "Docker"],
      metrics: ["< 50ms 資料更新延遲", "百萬級資料繪圖 60FPS", "安全雙重認證"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "aether-cloud-studio",
      title: "Aether Cloud // 雲端架構視覺化編排器",
      category: "tools",
      categoryLabel: "DevOps & Cloud",
      shortDesc: "架構圖即程式碼 (Diagram-as-Code) 視覺化工具，拉取雲端組件並直接編譯匯出標準 Terraform 與 K8s 清單。",
      fullDesc: "Aether Cloud 縮短了系統架構師與 DevOps 工程師之間的鴻溝。使用者只需在互動式畫布上繪製微服務架構，系統便會即時校驗網路安全群組規則、計算預估 AWS 月費用，並一鍵自動產生無語法錯誤的 Terraform 腳本與 Kubernetes YAML 部署清單。",
      image: "assets/images/project-devtools.jpg",
      tags: ["TypeScript", "React Flow", "Terraform", "Node.js", "AWS SDK", "Jest"],
      metrics: ["支援 40+ 種 AWS 核心服務", "省去 85% 腳本除錯工時", "GitHub 2.4k Stars"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: "fluid-art-lab",
      title: "Fluid.Art // 3D 流體動態生成實驗室",
      category: "creative",
      categoryLabel: "Creative Coding & 3D",
      shortDesc: "基於 WebGL 與 GLSL Shader 打造的即時流體動力學模擬畫布，榮獲 Awwwards 每日佳作 (Site of the Day)。",
      fullDesc: "探索數值演算法與數位美學的極限體驗。Fluid.Art 運用 WebGL 2.0 與自訂物理著色器，在瀏覽器端流暢演算納維-斯托克斯 (Navier-Stokes) 流體方程。支援滑鼠引力互動、自訂光照波長、粒子擴散與 4K 解析度即時錄製匯出功能。",
      image: "assets/images/project-creative.jpg",
      tags: ["Three.js", "WebGL", "GLSL Shaders", "Web Audio API", "Vite"],
      metrics: ["Awwwards Site of the Day", "全端 60FPS 流暢渲染", "跨載具自適應"],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: false
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
