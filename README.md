# 🚀 現代高質感個人作品集網站 (Modern Personal Portfolio)

一個兼具未來極客美學與極致效能的現代工程師個人品牌網站／作品集。採用原生 HTML5、CSS3（自訂變數設計系統）與 Vanilla JavaScript 打造，免繁瑣環境設定，秒速載入。

---

## ✨ 核心特色與亮點

- **🎨 現代設計系統 (Modern Design System)**：
  - 深邃暗黑科技底色搭配流動漸層光暈 (Ambient Glow Mesh)。
  - 高級玻璃擬態質感 (Glassmorphism)。
  - **4 款霓虹強調色即時切換**：Cyber Cyan（科技青）、Electric Violet（電幻紫）、Emerald Pulse（極光綠）、Sunset Rose（暖陽橘）。
  - **日光／暗黑模式切換 (Light / Dark Mode)**，偏好設定自動儲存於 `localStorage`。
- **⚡ 動態打字機特效 (Typewriter Effect)**：首頁標題多角色自動打字輪播。
- **📂 專案展示與即時分類篩選 (Portfolio Filter)**：
  - 支援「全部」、「AI & SaaS」、「FinTech 全端」、「DevOps 工具」、「創意 3D」分類標籤切換。
  - 專案細節彈窗 (Interactive Modal)，可詳細檢視架構重點與技術指標。
- **⏱️ 職涯經歷時光軸 (Career Journey Timeline)**：發光節點與成果清單。
- **💻 極客微終端機 (Interactive Mini CLI)**：支援輸入 `help`、`skills`、`about`、`theme <name>` 等指令進行探索。
- **📬 互動式聯絡表單 & 一鍵複製 Email**：內建剪貼簿複製回饋與表單發送 Toast 提示。
- **🕰️ 台北當地即時數位時鐘 (Taipei GMT+8)**。
- **📱 跨裝置完美響應 (Responsive Design)**：支援桌面、平板與手機端排版。
- **🛠️ 零維護負擔**：所有個人資訊、技能、專案與社群連結均集中於 `js/data.js`，修改超輕鬆！

---

## 📁 專案目錄結構

```text
personal-website/
├── index.html              # 網站主頁面結構 (語意化 HTML5 + SEO Meta)
├── css/
│   └── style.css           # 現代設計系統、CSS 變數、玻璃擬態與動畫
├── js/
│   ├── data.js             # 【核心】個人資料配置檔 (文字、技能、專案集中於此)
│   └── main.js             # 動態資料渲染、主題切換、篩選器與微終端機邏輯
└── assets/
    └── images/             # 視覺資源 (高解析度頭像與專案模擬展示圖)
        ├── avatar.jpg
        ├── project-ai.jpg
        ├── project-fintech.jpg
        ├── project-devtools.jpg
        └── project-creative.jpg
```

---

## 🛠️ 如何自訂您的個人資料？

您只需要打開 `js/data.js`，修改相應欄位即可：

1. **基本簡介**：修改 `PORTFOLIO_DATA.profile` 中的姓名、標語、打字機職稱、簡介與 Email。
2. **社群連結**：修改 `socialLinks` 中的 GitHub、LinkedIn、X (Twitter) 網址。
3. **技能樹**：在 `PORTFOLIO_DATA.skills` 自由增減分類與技術項目。
4. **專案成果**：在 `PORTFOLIO_DATA.projects` 新增或替換您的作品名稱、技術標籤與展示連結。
5. **工作經歷**：在 `PORTFOLIO_DATA.experiences` 填入您的工作年資與里程碑。

---

## 🌐 如何在本機運行與預覽？

### 方式一：直接以瀏覽器開啟
直接雙擊點擊 `index.html` 即可在瀏覽器開啟。

### 方式二：使用本機 HTTP 伺服器 (推薦)
在專案根目錄下使用命令提示字元或 PowerShell：

```bash
# 使用 Python 內建 HTTP 伺服器
python -m http.server 3000

# 或使用 Node.js npx serve
npx serve .
```
接著在瀏覽器打開 `http://localhost:3000` 即可預覽。

---

## 🚀 如何免費部署上線 (Deploy to Web)？

### 1. 部署到 GitHub Pages (最簡單)
1. 在 GitHub 上建立一個新的公開儲存庫，命名為 `<您的帳號>.github.io`。
2. 將此目錄下的所有檔案推送到儲存庫的 `main` 分支。
3. 幾秒後即可透過 `https://<您的帳號>.github.io` 存取您的個人網站！

### 2. 部署到 Vercel 或 Netlify
直接將此專案連結至 Vercel 或 Netlify，選擇根目錄即可實現全球 CDN 秒開加速。
