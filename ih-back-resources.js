class IhBackResources extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          .resources-wrap {
                  background: #ffffff;
            width: 100%;
            padding: 40px 20px 40px 20px;
          }

          .section-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
            margin-bottom: 36px;
          }

          .header-left { flex: 1; min-width: 240px; }

          .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 16px;
          }

          h2 {
            font-size: clamp(24px, 5vw, 36px);
            font-weight: 700;
            line-height: 1.15;
            color: #ff6218;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #FF6218;
            margin-bottom: 16px;
            border-radius: 2px;
          }

          .intro-text {
            font-size: clamp(13px, 3vw, 14px);
            color: #555;
            line-height: 1.7;
            max-width: 520px;
          }

          .scroll-outer {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -20px;
            padding: 0 20px 16px 20px;
            margin-bottom: 8px;
          }

          .scroll-outer::-webkit-scrollbar { display: none; }

          .articles-grid {
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: max-content;
          }

          .article-card {
            width: 280px;
            flex-shrink: 0;
            background: #ffffff;
            border: 1px solid #e8ecf0;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.04);
            transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
            display: flex;
            flex-direction: column;
          }

          .article-card:hover {
            box-shadow: 0 8px 28px rgba(255, 98, 24, 0.1);
            transform: translateY(-2px);
            border-color: #ffd0b0;
          }

          .article-image {
            width: 100%;
            height: 160px;
            background: #f5f4f0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #e8ecf0;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
          }

          .article-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .article-image::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: #ff6218;
          }

          .article-body {
            padding: 16px 16px 20px 16px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .article-tag {
            display: inline-block;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff6218;
            border: 1px solid rgba(255, 98, 24, 0.3);
            padding: 4px 10px;
            border-radius: 2px;
            margin-bottom: 10px;
            width: fit-content;
          }

          .article-title {
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.4;
            margin-bottom: 10px;
            letter-spacing: -0.2px;
          }

          .article-excerpt {
            font-size: 12px;
            color: #666;
            line-height: 1.7;
            flex: 1;
            margin-bottom: 14px;
          }

          .article-meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 14px;
          }

          .author { display: flex; align-items: center; gap: 8px; }

          .author-avatar {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: #e8ecf0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .author-avatar svg { width: 13px; height: 13px; }

          .author-info { display: flex; flex-direction: column; gap: 1px; }
          .author-name { font-size: 11px; font-weight: 600; color: #1a1a1a; }
          .author-date { font-size: 10px; color: #9ca3af; }
          .read-time { font-size: 10px; color: #9ca3af; white-space: nowrap; }

          .read-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #ff6218;
            text-decoration: none;
            transition: gap 0.2s ease;
          }

          .read-link:hover { gap: 10px; }

          .scroll-hint {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-bottom: 24px;
          }

          .scroll-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #d1d5db;
          }

          .scroll-dot:first-child {
            width: 18px;
            border-radius: 3px;
            background: #ff6218;
          }

          .pagination {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
          }

          .pagination-controls { display: flex; align-items: center; gap: 8px; }

          .page-btn {
            width: 38px;
            height: 38px;
            border-radius: 2px;
            border: 1.5px solid #d1d5db;
            background: #ffffff;
            color: #1a1a1a;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            -webkit-tap-highlight-color: transparent;
          }

          .page-btn.active { background: #ff6218; border-color: #ff6218; color: #ffffff; }
          .page-btn:hover:not(.active):not(:disabled) { border-color: #ff6218; color: #ff6218; }
          .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
          .pagination-info { font-size: 12px; color: #9ca3af; }

          @media (min-width: 640px) {
            .scroll-outer {
              overflow-x: visible;
              margin: 0;
              padding: 0;
              margin-bottom: 0;
            }

            .articles-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              width: 100%;
              margin-bottom: 32px;
            }

            .article-card { width: auto; flex-shrink: unset; }
            .article-image { height: 180px; }
            .article-body { padding: 20px 20px 24px 20px; }
            .article-title { font-size: clamp(14px, 3vw, 15px); }
            .article-excerpt { font-size: clamp(12px, 2.8vw, 13px); }
            .author-name { font-size: 12px; }
            .author-date { font-size: 11px; }
            .read-time { font-size: 11px; }
            .read-link { font-size: 12px; }
            .scroll-hint { display: none; }
            .resources-wrap { padding: 60px 48px 60px 48px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          }

          @media (min-width: 900px) {
            .articles-grid { grid-template-columns: repeat(3, 1fr); }
          }

          button { outline: none; border: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
      </style>

      <div class="resources-wrap">
      <div class="section-header">
      <div class="header-left">
      <p class="eyebrow">Back Health Resources</p>
      <h2>Exercises, Guides &amp; Tips for Your Back</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Expert-written articles from our back physiotherapy team, practical exercises, recovery tips, and condition guides.</p>
      </div>
      </div>
      <div class="scroll-outer">
      <div class="articles-grid" id="articlesGrid">
      <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2018/02/02/glute-bridge-low-back-pain">
      <div class="article-image">
      <img alt="Glute Bridge for Low Back Pain" loading="lazy" src="https://static.wixstatic.com/media/607962_1bf32bc3036e470094ded58bc7d9c430~mv2_d_2000_1333_s_2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/607962_1bf32bc3036e470094ded58bc7d9c430~mv2_d_2000_1333_s_2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">Glute Bridge for Low Back Pain</h3>
      <p class="article-excerpt">Step-by-step glute bridge progressions to strengthen the posterior chain and reduce lower back pain.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Feb 2018</span></div>
      </div>
      <span class="read-time">⏱ 4 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/lumbar-extension-strength">
      <div class="article-image">
      <img alt="Lumbar Extension Strength" loading="lazy" src="https://static.wixstatic.com/media/607962_bf1d7b18380b43be9f5adb3cbfc9921bf000.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">Lumbar Extension Strength</h3>
      <p class="article-excerpt">Build strength in the lumbar extensors to improve spinal stability and reduce the risk of recurring lower back pain.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 4 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/how-to-train-around-lower-back-pain">
      <div class="article-image">
      <img alt="How to Train Around Lower Back Pain" loading="lazy" src="https://static.wixstatic.com/media/607962_1e8c6009e2834c41a30dea67f9d4251a~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/607962_1e8c6009e2834c41a30dea67f9d4251a~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">How to Train Around Lower Back Pain</h3>
      <p class="article-excerpt">Practical strategies for staying active and maintaining fitness while managing lower back pain safely.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="2" data-url="https://www.infinitehealthgroup.com.au/single-post/2018/02/21/4-point-kneeling-exercise-for-trunk-stability" style="display:none">
      <div class="article-image">
      <img alt="4 Point Kneeling Exercise for Trunk Stability" loading="lazy" src="https://static.wixstatic.com/media/607962_15622419770148508ec693aec8eeb11a~mv2_d_4443_2966_s_4_2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/607962_15622419770148508ec693aec8eeb11a~mv2_d_4443_2966_s_4_2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">4 Point Kneeling Exercise for Trunk Stability</h3>
      <p class="article-excerpt">A foundational core stability exercise used by physios to rebuild trunk control and protect the lower back.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Feb 2018</span></div>
      </div>
      <span class="read-time">⏱ 4 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="2" data-url="https://www.infinitehealthgroup.com.au/single-post/back-pain-when-deadlifting-top-3-causes-their-fix" style="display:none">
      <div class="article-image">
      <img alt="Back Pain When Deadlifting" loading="lazy" src="https://static.wixstatic.com/media/1b6104_e5ffcbabc5094108905f5e7c51e42659~mv2.png/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1b6104_e5ffcbabc5094108905f5e7c51e42659~mv2.png"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">Back Pain When Deadlifting: Top 3 Causes and Their Fix</h3>
      <p class="article-excerpt">Identify the most common reasons deadlifts cause back pain and how to correct your technique to lift safely.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="2" data-url="https://www.infinitehealthgroup.com.au/single-post/how-to-handle-acute-low-back-pain" style="display:none">
      <div class="article-image">
      <img alt="How to Handle Acute Low Back Pain" loading="lazy" src="https://static.wixstatic.com/media/607962_f532b21068ec4ff9a3601d119d028422~mv2.jpg/v1/fill/w_600,h_602,al_c,lg_1,q_85,enc_avif,quality_auto/607962_f532b21068ec4ff9a3601d119d028422~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Advice</span>
      <h3 class="article-title">How to Handle Acute Low Back Pain</h3>
      <p class="article-excerpt">What to do in the first 48 to 72 hours after an acute back flare-up to manage pain and support recovery.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jul 2019</span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="3" data-url="https://www.infinitehealthgroup.com.au/lower-back-bulging-disc" style="display:none">
      <div class="article-image">
      <img alt="Lower Back Bulging Disc" loading="lazy" src="https://static.wixstatic.com/media/607962_7c8cd3e852b743a1be9763c7457f5d40~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/607962_7c8cd3e852b743a1be9763c7457f5d40~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Condition Guide</span>
      <h3 class="article-title">Lower Back Bulging Disc: Causes, Symptoms and Treatment</h3>
      <p class="article-excerpt">An in-depth look at bulging discs in the lower back, including what causes them and how physiotherapy helps.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 6 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="3" data-url="https://www.infinitehealthgroup.com.au/muscular-low-back-pain" style="display:none">
      <div class="article-image">
      <img alt="Muscular Low Back Pain" loading="lazy" src="https://static.wixstatic.com/media/607962_7c8cd3e852b743a1be9763c7457f5d40~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/607962_7c8cd3e852b743a1be9763c7457f5d40~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Condition Guide</span>
      <h3 class="article-title">Muscular Low Back Pain: Strains, Sprains and Recovery</h3>
      <p class="article-excerpt">Understanding muscle strains and ligament sprains of the lower back, and how physiotherapy helps you recover faster.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      <div class="article-card" data-page="3" data-url="https://www.infinitehealthgroup.com.au/single-post/ease-lower-back-pain-whilst-at-work" style="display:none">
      <div class="article-image">
      <img alt="Ease Lower Back Pain at Work" loading="lazy" src="https://static.wixstatic.com/media/607962_0d7ef9e846fe4f21828c8e3e252d90dff000.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Advice</span>
      <h3 class="article-title">Ease Lower Back Pain at Work</h3>
      <p class="article-excerpt">Simple ergonomic adjustments and movement habits to reduce lower back pain and tension during the workday.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
      </div>
      <span class="read-time">⏱ 4 min</span>
      </div>
      <button class="read-link">Read Article →</button>
      </div>
      </div>
      </div>
      </div>
      <div class="scroll-hint">
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      </div>
      <div class="pagination">
      <div class="pagination-controls">
      <button aria-label="Previous" class="page-btn" disabled="" id="prevBtn">←</button>
      <button class="page-btn active" data-page="1">1</button>
      <button class="page-btn" data-page="2">2</button>
      <button class="page-btn" data-page="3">3</button>
      <button aria-label="Next" class="page-btn" id="nextBtn">→</button>
      </div>
      <span class="pagination-info" id="pageInfo">Showing 1 to 3 of 9 articles</span>
      </div>
      </div>
    `;

    const allCards  = Array.from(shadow.querySelectorAll('.article-card'));
    const pageBtns  = shadow.querySelectorAll('.page-btn[data-page]');
    const prevBtn   = shadow.getElementById('prevBtn');
    const nextBtn   = shadow.getElementById('nextBtn');
    const pageInfo  = shadow.getElementById('pageInfo');

    const perPage    = 3;
    const totalPages = Math.ceil(allCards.length / perPage);
    let currentPage  = 1;

    const showPage = (page) => {
      currentPage = page;
      allCards.forEach((card, i) => {
        card.style.display = Math.floor(i / perPage) + 1 === page ? '' : 'none';
      });
      pageBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
      });
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
      const from = (page - 1) * perPage + 1;
      const to   = Math.min(page * perPage, allCards.length);
      pageInfo.textContent = `Showing ${from} to ${to} of ${allCards.length} articles`;
    };

    allCards.forEach(card => {
      card.addEventListener('click', () => {
        const url = card.dataset.url;
        if (url) {
          this.dispatchEvent(new CustomEvent('navigate', {
            detail: { url },
            bubbles: true
          }));
        }
      });
    });

    pageBtns.forEach(btn => {
      btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
    });

    prevBtn.addEventListener('click', () => { if (currentPage > 1) showPage(currentPage - 1); });
    nextBtn.addEventListener('click', () => { if (currentPage < totalPages) showPage(currentPage + 1); });

    showPage(1);
  }
}

customElements.define('ih-back-resources', IhBackResources);
