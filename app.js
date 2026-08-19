// --- DORKSCOPE CORE APPLICATION LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    let currentCategory = 'ALL';
    let searchQuery = '';
    let bookmarks = JSON.parse(localStorage.getItem('dorkscope_bookmarks') || localStorage.getItem('cyberrecon_bookmarks') || '[]');
    let isLightMode = (localStorage.getItem('dorkscope_theme') || localStorage.getItem('cyberrecon_theme')) === 'light';

    // --- UI ELEMENTS ---
    const targetInput = document.getElementById('target-domain');
    const scanTriggerBtn = document.getElementById('scan-trigger-btn');
    const clearTargetBtn = document.getElementById('clear-target-btn');
    const targetError = document.getElementById('target-error');
    const targetInfoBar = document.getElementById('target-info-bar');
    const parsedHostEl = document.getElementById('parsed-host');
    const parsedRootEl = document.getElementById('parsed-root');
    const copyTargetBtn = document.getElementById('copy-target-btn');

    const categoriesContainer = document.getElementById('categories-container');
    const searchInput = document.getElementById('search-filter');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const toolsGrid = document.getElementById('tools-grid');
    const emptyResults = document.getElementById('empty-results');
    const resetSearchBtn = document.getElementById('reset-search-btn');

    const openStudioBtn = document.getElementById('open-studio-btn');
    const closeStudioBtn = document.getElementById('close-studio-btn');
    const studioModal = document.getElementById('custom-studio-modal');
    const studioScope = document.getElementById('studio-scope');
    const studioOperator = document.getElementById('studio-operator');
    const studioKeyword = document.getElementById('studio-keyword');
    const studioPreview = document.getElementById('studio-query-preview');
    const studioCopyBtn = document.getElementById('studio-copy-btn');
    const studioLaunchBtn = document.getElementById('studio-launch-btn');

    const exportBtn = document.getElementById('export-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const externalToolsContainer = document.getElementById('external-tools-container');

    // --- DOMAIN PARSER & SANITIZER ---
    function cleanDomain(input) {
        if (!input) return { host: '', root: '' };
        let str = input.trim().toLowerCase();
        
        // Remove scheme
        if (str.includes('://')) {
            str = str.split('://')[1];
        }
        // Remove path and query string
        if (str.includes('/')) {
            str = str.split('/')[0];
        }
        if (str.includes('?')) {
            str = str.split('?')[0];
        }
        if (str.includes('#')) {
            str = str.split('#')[0];
        }
        // Remove port
        if (str.includes(':')) {
            str = str.split(':')[0];
        }

        // Calculate Root Domain
        const parts = str.split('.');
        let root = str;
        if (parts.length > 2) {
            root = parts.slice(-2).join('.');
        }

        return { host: str, root: root };
    }

    function getActiveTarget() {
        const raw = targetInput.value.trim();
        const parsed = cleanDomain(raw);
        return parsed.host || null;
    }

    function updateTargetUI() {
        const raw = targetInput.value.trim();
        if (raw) {
            clearTargetBtn.classList.remove('hidden');
            targetError.classList.add('hidden');
            const { host, root } = cleanDomain(raw);
            if (host) {
                parsedHostEl.textContent = host;
                parsedRootEl.textContent = root;
                targetInfoBar.classList.remove('hidden');
            } else {
                targetInfoBar.classList.add('hidden');
            }
        } else {
            clearTargetBtn.classList.add('hidden');
            targetInfoBar.classList.add('hidden');
        }
        renderToolsGrid(true);
    }

    targetInput.addEventListener('input', updateTargetUI);

    clearTargetBtn.addEventListener('click', () => {
        targetInput.value = '';
        updateTargetUI();
        targetInput.focus();
    });

    copyTargetBtn.addEventListener('click', () => {
        const host = getActiveTarget();
        if (host) {
            navigator.clipboard.writeText(host);
            showToast(`Copied domain: ${host}`, 'info');
        }
    });

    scanTriggerBtn.addEventListener('click', () => {
        const host = getActiveTarget();
        if (!host) {
            targetError.classList.remove('hidden');
            targetInput.focus();
            showToast('Please enter a target domain first', 'error');
            return;
        }
        targetError.classList.add('hidden');
        showToast(`Target set to ${host}. Select a dork module below!`, 'info');
        toolsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    targetInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') scanTriggerBtn.click();
    });

    // --- CATEGORY PILLS RENDER ---
    function renderCategoryTabs() {
        categoriesContainer.innerHTML = '';
        
        Object.keys(CATEGORIES).forEach(catKey => {
            const catName = CATEGORIES[catKey];
            let count = 0;
            
            if (catKey === 'ALL') {
                count = DORKS_DATABASE.length;
            } else if (catKey === 'BOOKMARKS') {
                count = bookmarks.length;
            } else {
                count = DORKS_DATABASE.filter(t => t.category === catKey).length;
            }

            const pill = document.createElement('button');
            pill.className = `filter-pill ${catKey === currentCategory ? 'active' : ''}`;
            pill.innerHTML = `
                <span>${catName}</span>
                <span class="pill-count">${count}</span>
            `;

            pill.addEventListener('click', () => {
                currentCategory = catKey;
                renderCategoryTabs();
                renderToolsGrid();
            });

            categoriesContainer.appendChild(pill);
        });
    }

    // --- TOOLS GRID RENDER ---
    function renderToolsGrid(skipAnimation = false) {
        toolsGrid.innerHTML = '';
        const targetHost = getActiveTarget() || 'example.com';

        let filtered = DORKS_DATABASE.filter(item => {
            // Category check
            if (currentCategory === 'BOOKMARKS') {
                if (!bookmarks.includes(item.id)) return false;
            } else if (currentCategory !== 'ALL' && item.category !== currentCategory) {
                return false;
            }

            // Search query check
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const matchTitle = item.title.toLowerCase().includes(q);
                const matchDesc = item.desc.toLowerCase().includes(q);
                const matchCat = item.category.toLowerCase().includes(q);
                const matchDork = item.dork(targetHost).toLowerCase().includes(q);
                return matchTitle || matchDesc || matchCat || matchDork;
            }

            return true;
        });

        if (filtered.length === 0) {
            emptyResults.classList.remove('hidden');
            toolsGrid.classList.add('hidden');
            return;
        }

        emptyResults.classList.add('hidden');
        toolsGrid.classList.remove('hidden');

        filtered.forEach((tool, index) => {
            const isBookmarked = bookmarks.includes(tool.id);
            const formattedDork = tool.dork(targetHost);

            const card = document.createElement('div');
            card.className = 'tool-card group';
            if (skipAnimation) {
                card.style.opacity = '1';
            } else {
                card.style.animation = `slideInRight 0.3s ease-out forwards ${Math.min(index * 0.03, 0.5)}s`;
                card.style.opacity = '0';
            }

            card.innerHTML = `
                <div>
                    <!-- Top Header -->
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                                ${tool.icon}
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors line-clamp-1">${tool.title}</h3>
                                <span class="badge-tag">${tool.category}</span>
                            </div>
                        </div>

                        <!-- Bookmark Button -->
                        <button class="btn-icon bookmark-btn ${isBookmarked ? 'active-star' : ''}" title="${isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}">
                            ${isBookmarked ? '★' : '☆'}
                        </button>
                    </div>

                    <!-- Description -->
                    <p class="text-xs text-slate-400 mb-3 line-clamp-2">${tool.desc}</p>

                    <!-- Syntax Preview -->
                    <div class="p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] text-slate-300 break-all select-all flex items-center justify-between gap-2">
                        <span class="truncate text-emerald-300/90">${formattedDork}</span>
                    </div>
                </div>

                <!-- Action Controls -->
                <div class="flex items-center gap-2 pt-2 border-t border-white/5">
                    <button class="copy-dork-btn btn-icon flex-1 text-xs py-2" title="Copy Dork String">
                        📋 Copy String
                    </button>
                    <button class="launch-dork-btn btn-primary flex-1 text-xs py-2" title="Open Google Search">
                        🚀 Launch
                    </button>
                </div>
            `;

            // Bookmark Toggle
            const starBtn = card.querySelector('.bookmark-btn');
            starBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleBookmark(tool.id);
            });

            // Copy Dork
            const copyBtn = card.querySelector('.copy-dork-btn');
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const host = getActiveTarget();
                if (!host) {
                    showToast('Please enter a target domain first!', 'error');
                    targetInput.focus();
                    return;
                }
                navigator.clipboard.writeText(formattedDork);
                showToast(`Copied string for ${tool.title}`, 'info');
            });

            // Launch Dork
            const launchBtn = card.querySelector('.launch-dork-btn');
            launchBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const host = getActiveTarget();
                if (!host) {
                    showToast('Please enter a target domain first!', 'error');
                    targetInput.focus();
                    return;
                }
                const url = tool.getUrl(host);
                window.open(url, '_blank');
                showToast(`Launching ${tool.title}...`, 'success');
            });

            toolsGrid.appendChild(card);
        });
    }

    function toggleBookmark(toolId) {
        if (bookmarks.includes(toolId)) {
            bookmarks = bookmarks.filter(id => id !== toolId);
            showToast('Removed from bookmarks', 'info');
        } else {
            bookmarks.push(toolId);
            showToast('Saved to bookmarks ★', 'success');
        }
        localStorage.setItem('dorkscope_bookmarks', JSON.stringify(bookmarks));
        renderCategoryTabs();
        renderToolsGrid();
    }

    // --- SEARCH FILTER HANDLERS ---
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        if (searchQuery) {
            searchClearBtn.classList.remove('hidden');
        } else {
            searchClearBtn.classList.add('hidden');
        }
        renderToolsGrid();
    });

    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClearBtn.classList.add('hidden');
        renderToolsGrid();
    });

    resetSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        currentCategory = 'ALL';
        searchClearBtn.classList.add('hidden');
        renderCategoryTabs();
        renderToolsGrid();
    });

    // --- EXTERNAL TOOLS DIRECTORY ---
    function renderExternalTools() {
        externalToolsContainer.innerHTML = '';
        EXTERNAL_TOOLS.forEach(tool => {
            const item = document.createElement('a');
            item.href = tool.url;
            item.target = '_blank';
            item.className = 'p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-between group';
            
            item.innerHTML = `
                <div>
                    <div class="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">${tool.name}</div>
                    <div class="text-[10px] font-mono text-slate-400">${tool.tag}</div>
                </div>
                <span class="text-slate-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all text-xs">➜</span>
            `;
            externalToolsContainer.appendChild(item);
        });
    }

    // --- CUSTOM DORK STUDIO MODAL ---
    function updateStudioPreview() {
        const scope = studioScope.value.trim() || 'example.com';
        const operator = studioOperator.value;
        const kw = studioKeyword.value.trim() || 'admin';

        let query = `site:${scope} ${operator}"${kw}"`;
        if (operator === 'site:') {
            query = `site:${scope} ${kw}`;
        } else if (operator === 'cache:') {
            query = `cache:${scope}`;
        }
        studioPreview.textContent = query;
    }

    openStudioBtn.addEventListener('click', () => {
        const host = getActiveTarget() || 'example.com';
        studioScope.value = host;
        updateStudioPreview();
        studioModal.classList.add('open');
    });

    closeStudioBtn.addEventListener('click', () => {
        studioModal.classList.remove('open');
    });

    studioModal.addEventListener('click', (e) => {
        if (e.target === studioModal) studioModal.classList.remove('open');
    });

    [studioScope, studioOperator, studioKeyword].forEach(el => {
        el.addEventListener('input', updateStudioPreview);
        el.addEventListener('change', updateStudioPreview);
    });

    studioCopyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(studioPreview.textContent);
        showToast('Custom query copied to clipboard!', 'info');
    });

    studioLaunchBtn.addEventListener('click', () => {
        const query = studioPreview.textContent;
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
        showToast('Launching custom query on Google...', 'success');
    });

    // --- EXPORT FUNCTIONALITY ---
    exportBtn.addEventListener('click', () => {
        const host = getActiveTarget();
        if (!host) {
            showToast('Please enter a target domain to export queries!', 'error');
            targetInput.focus();
            return;
        }

        let content = `# DORKSCOPE DORK LIST FOR ${host.toUpperCase()}\n`;
        content += `# Author: Mariya Shaikh\n`;
        content += `# Generated on: ${new Date().toISOString()}\n\n`;

        DORKS_DATABASE.forEach(item => {
            content += `## [${item.category}] ${item.title}\n`;
            content += `Description: ${item.desc}\n`;
            content += `Query: ${item.dork(host)}\n`;
            content += `URL: ${item.getUrl(host)}\n\n`;
        });

        const blob = new Blob([content], { type: 'text/markdown' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `DorkScope_${host}_Dorks.md`;
        link.click();
        showToast(`Exported Markdown list for ${host}!`, 'success');
    });

    // --- THEME SWITCHER ---
    function applyTheme() {
        if (isLightMode) {
            document.body.classList.add('light-mode');
            themeIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.textContent = '🌙';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        isLightMode = !isLightMode;
        localStorage.setItem('dorkscope_theme', isLightMode ? 'light' : 'dark');
        applyTheme();
        showToast(`Switched to ${isLightMode ? 'Light' : 'Dark'} Mode`, 'info');
    });

    // --- TOAST NOTIFICATIONS ---
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '⚠️';

        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'fadeOutDown 0.3s forwards';
            toast.addEventListener('animationend', () => toast.remove());
        }, 3200);
    }

    // --- URL PARAMETERS AUTO-FILL ---
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const domain = urlParams.get('d') || urlParams.get('target');
        if (domain) {
            targetInput.value = domain;
            updateTargetUI();
            showToast(`Auto-loaded target: ${domain}`, 'success');
        }
    }

    // --- AMBIENT CANVAS ANIMATION ---
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    function initParticles() {
        particles = [];
        const count = Math.floor((width * height) / 25000);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1,
                color: isLightMode ? '#059669' : '#00ff9d'
            });
        }
    }

    function drawCanvas() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.fillStyle = p.color;
            ctx.globalAlpha = isLightMode ? 0.15 : 0.25;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(drawCanvas);
    }

    window.addEventListener('resize', resizeCanvas);

    // --- INITIALIZE APP ---
    applyTheme();
    checkUrlParams();
    renderCategoryTabs();
    renderToolsGrid();
    renderExternalTools();
    resizeCanvas();
    drawCanvas();
});
