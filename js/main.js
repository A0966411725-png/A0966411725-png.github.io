/**
 * 個人作品集主要互動邏輯 (Main Interaction Logic)
 * 負責資料渲染、主題切換、打字機動態、作品篩選、彈窗與極客微終端機
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndAccent();
  initDynamicContent();
  initTypewriter();
  initNavbarAndScroll();
  initProjectsFilter();
  initProjectModal();
  initTerminal();
  initContactFormAndCopy();
  initFooterClock();
  initDynamicGreeting();
});

/* ==========================================================================
   1. 主題與強調色切換 (Theme & Accent Color Engine)
   ========================================================================== */
function initThemeAndAccent() {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const accentDots = document.querySelectorAll('.accent-dot');

  // 讀取 localStorage 偏好
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  const savedAccent = localStorage.getItem('portfolio-accent') || 'cyan';

  setTheme(savedTheme);
  setAccent(savedAccent);

  // 主題按鈕切換
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // 強調色切換點
  accentDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const color = dot.getAttribute('data-color');
      setAccent(color);
    });
  });

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  }

  function setAccent(color) {
    root.setAttribute('data-accent', color);
    localStorage.setItem('portfolio-accent', color);
    accentDots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-color') === color);
    });
  }

  // 全域導出供終端機呼叫
  window.setPortfolioAccent = setAccent;
}

/* ==========================================================================
   2. 資料動態渲染 (Dynamic Content Render)
   ========================================================================== */
function initDynamicContent() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // 渲染個人基本資料
  const profile = data.profile;
  const heroName = document.getElementById('hero-name');
  const heroBio = document.getElementById('hero-bio');
  const heroStatus = document.getElementById('hero-status-text');
  const heroAvatar = document.getElementById('hero-avatar');
  const heroStatsContainer = document.getElementById('hero-stats-container');
  const contactEmailText = document.getElementById('contact-email-text');

  if (heroName) heroName.textContent = profile.name;
  if (heroBio) heroBio.textContent = profile.bioShort;
  if (heroStatus) heroStatus.textContent = profile.statusText;
  if (heroAvatar && profile.avatar) heroAvatar.src = profile.avatar;
  if (contactEmailText) contactEmailText.textContent = profile.email;

  // 渲染 Hero 統計指標
  if (heroStatsContainer && profile.stats) {
    heroStatsContainer.innerHTML = profile.stats.map(stat => `
      <div class="stat-item">
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  // 渲染技能分類
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills.map(cat => `
      <div class="skill-card">
        <div class="skill-card-header">
          <div class="skill-icon-wrapper">
            ${getCategoryIconSvg(cat.icon)}
          </div>
          <div>
            <h3 class="skill-card-title">${cat.category}</h3>
          </div>
        </div>
        <p class="skill-card-desc">${cat.description}</p>
        <div class="skill-chips">
          ${cat.items.map(item => `
            <span class="skill-chip ${item.hot ? 'hot' : ''}">
              ${item.hot ? '<span class="hot-dot"></span>' : ''}
              ${item.name}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 渲染作品集
  renderProjects(data.projects);

  // 渲染時光軸經歷
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer && data.experiences) {
    timelineContainer.innerHTML = data.experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-company">${exp.company} · ${exp.location}</div>
          <p class="timeline-desc">${exp.description}</p>
          <ul class="timeline-achievements">
            ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
          <div class="timeline-skills">
            ${exp.skills.map(sk => `<span class="skill-chip">${sk}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
}

// 輔助 SVG 圖示
function getCategoryIconSvg(name) {
  switch (name) {
    case 'layout':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
    case 'server':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`;
    case 'cpu':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
  }
}

/* ==========================================================================
   3. 作品渲染與篩選功能 (Projects Filter)
   ========================================================================== */
function renderProjects(projectsList) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsList.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <span class="project-category-badge">${project.categoryLabel}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="project-detail-btn" data-project-id="${project.id}">
            查看細節
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <div class="project-links">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="查看原始碼" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="即時預覽" aria-label="Live Demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allProjects = window.PORTFOLIO_DATA.projects;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const filtered = filter === 'all' 
        ? allProjects 
        : allProjects.filter(p => p.category === filter);

      renderProjects(filtered);
      bindProjectDetailTriggers();
    });
  });

  bindProjectDetailTriggers();
}

/* ==========================================================================
   4. 專案詳情彈窗 (Project Detail Modal)
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  closeBtn?.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function bindProjectDetailTriggers() {
  const detailButtons = document.querySelectorAll('.project-detail-btn');
  const modalOverlay = document.getElementById('project-modal');
  const allProjects = window.PORTFOLIO_DATA.projects;

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      const project = allProjects.find(p => p.id === pid);
      if (!project || !modalOverlay) return;

      document.getElementById('modal-img').src = project.image;
      document.getElementById('modal-category').textContent = project.categoryLabel;
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-desc').textContent = project.fullDesc;
      
      const metricsList = document.getElementById('modal-metrics-list');
      if (metricsList && project.metrics) {
        metricsList.innerHTML = project.metrics.map(m => `<li>${m}</li>`).join('');
      }

      const tagsContainer = document.getElementById('modal-tags');
      if (tagsContainer) {
        tagsContainer.innerHTML = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
      }

      const demoLink = document.getElementById('modal-demo-link');
      const githubLink = document.getElementById('modal-github-link');
      if (demoLink) demoLink.href = project.demoUrl;
      if (githubLink) githubLink.href = project.githubUrl;

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* ==========================================================================
   5. 動態打字機特效 (Typewriter Effect)
   ========================================================================== */
function initTypewriter() {
  const textElement = document.getElementById('typewriter-text');
  const titles = window.PORTFOLIO_DATA?.profile?.typewriterTitles || [
    "Full-Stack Software Engineer",
    "Cloud & AI Systems Builder"
  ];

  if (!textElement) return;

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      textElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      textElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typingSpeed = 1800; // 停頓時間
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   6. 導航欄滾動監聽與平滑滾動 (Navbar & ScrollSpy)
   ========================================================================== */
function initNavbarAndScroll() {
  const navbar = document.querySelector('.navbar');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // 吸頂玻璃效果
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 40);
    }

    // 回到頂端按鈕
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // ScrollSpy 標記活躍章節
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${secId}`);
        });
      }
    });
  });

  // 回到頂部點擊
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 手機版選單切換
  mobileBtn?.addEventListener('click', () => {
    navLinksContainer?.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer?.classList.remove('open');
    });
  });
}

/* ==========================================================================
   7. 互動極客微終端機 (Interactive Mini Terminal)
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalInput || !terminalBody) return;

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim();
      if (command) {
        handleTerminalCommand(command);
        terminalInput.value = '';
      }
    }
  });

  function handleTerminalCommand(rawCmd) {
    appendLine(`alex@portfolio:~$ ${rawCmd}`, 'prompt');
    const parts = rawCmd.toLowerCase().split(' ');
    const cmd = parts[0];
    const arg = parts[1];

    switch (cmd) {
      case 'help':
        appendLine("可執行的指令列表：", "accent");
        window.PORTFOLIO_DATA.terminalHelp.forEach(h => {
          appendLine(`  ${h.command.padEnd(16)} - ${h.desc}`);
        });
        break;

      case 'about':
        appendLine(`【${window.PORTFOLIO_DATA.profile.name} // ${window.PORTFOLIO_DATA.profile.tagline}】`, 'accent');
        appendLine(window.PORTFOLIO_DATA.profile.bioDetailed);
        break;

      case 'skills':
        appendLine("核心技術棧一覽：", "accent");
        window.PORTFOLIO_DATA.skills.forEach(c => {
          const names = c.items.map(i => i.name).join(', ');
          appendLine(`• ${c.category}: ${names}`);
        });
        break;

      case 'projects':
        appendLine("最新精選開源專案：", "accent");
        window.PORTFOLIO_DATA.projects.forEach((p, idx) => {
          appendLine(`[0${idx + 1}] ${p.title} -> ${p.categoryLabel}`);
        });
        appendLine("提示：可在頁面作品集區塊查看即時展示與原始碼！");
        break;

      case 'contact':
        appendLine("聯絡管道：", "accent");
        appendLine(`Email: ${window.PORTFOLIO_DATA.profile.email}`);
        appendLine(`GitHub: https://github.com/A0966411725-png`);
        appendLine(`LinkedIn: https://linkedin.com`);
        break;

      case 'theme':
        if (['cyan', 'violet', 'emerald', 'sunset'].includes(arg)) {
          window.setPortfolioAccent(arg);
          appendLine(`主題強調色已切換為：${arg.toUpperCase()}`, 'success');
        } else {
          appendLine("無效的主題色！可選值: cyan, violet, emerald, sunset", "error");
        }
        break;

      case 'clear':
        terminalBody.innerHTML = '';
        return;

      case 'sudo':
        appendLine("權限被拒絕：此處僅供友善訪客探索，若需深度合作請發送 Email ☕", "error");
        break;

      default:
        appendLine(`找不到指令: '${cmd}'。請輸入 'help' 查看所有支援指令。`, "error");
        break;
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function appendLine(text, type = 'output') {
    const div = document.createElement('div');
    div.className = `terminal-line ${type}`;
    div.textContent = text;
    terminalBody.appendChild(div);
  }
}

/* ==========================================================================
   8. 聯絡表單與複製 Email (Contact & Toast)
   ========================================================================== */
function initContactFormAndCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');

  copyBtn?.addEventListener('click', () => {
    const email = window.PORTFOLIO_DATA?.profile?.email || 'alex.chen.dev@example.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email 地址已成功複製至剪貼簿！ ✨");
    }).catch(() => {
      showToast(`複製失敗，請手動複製: ${email}`);
    });
  });

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value;
    const email = document.getElementById('form-email')?.value;
    const message = document.getElementById('form-message')?.value;

    if (!name || !email || !message) {
      showToast("請完整填寫所有欄位！");
      return;
    }

    // 模擬送出成功
    showToast(`感謝您的來信，${name}！我將會盡快與您聯繫。 🚀`);
    contactForm.reset();
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   9. 頁尾當地時鐘 (Footer Taipei Local Clock)
   ========================================================================== */
function initFooterClock() {
  const clockElement = document.getElementById('footer-clock-time');
  const heroClockElement = document.getElementById('hero-clock-time');
  if (!clockElement && !heroClockElement) return;

  // 讀取 localStorage 設定，預設為 24 小時制
  let use12Hour = localStorage.getItem('timeFormat') === '12';

  // 綁定點擊事件以切換 12H / 24H
  const heroBadge = document.getElementById('hero-clock-badge');
  const footerBadge = document.getElementById('footer-clock-badge');
  const toggleFormat = () => {
    use12Hour = !use12Hour;
    localStorage.setItem('timeFormat', use12Hour ? '12' : '24');
    updateClock();
  };
  if (heroBadge) heroBadge.addEventListener('click', toggleFormat);
  if (footerBadge) footerBadge.addEventListener('click', toggleFormat);

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Taipei',
      hour12: use12Hour,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeString = `Taipei, GMT+8 · ${now.toLocaleTimeString('en-US', options)}`;
    
    if (clockElement) clockElement.textContent = timeString;
    if (heroClockElement) heroClockElement.textContent = timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   10. 動態時間問候語 (Dynamic Greeting based on Time)
   ========================================================================== */
function initDynamicGreeting() {
  const greetingEl = document.getElementById('hero-greeting');
  if (!greetingEl) return;
  
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    greetingEl.textContent = '早安';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingEl.textContent = '午安';
  } else {
    greetingEl.textContent = '晚安';
  }
}
