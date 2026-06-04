class IhNeckResources extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .resources-wrap {
          width: 100%;
          padding: 40px 20px;
          background: #ffffff;
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
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: 'Inter', sans-serif;
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
          transition: all 0.2s;
        }

        .scroll-dot.active {
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
          font-family: 'Inter', sans-serif;
        }

        .page-btn.active { background: #ff6218; border-color: #ff6218; color: #ffffff; }
        .page-btn:hover:not(.active):not(:disabled) { border-color: #ff6218; color: #ff6218; }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .pagination-info { font-size: 12px; color: #9ca3af; }

        @media (min-width: 640px) {
          .resources-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }

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
          .author-date, .read-time { font-size: 11px; }
          .read-link { font-size: 12px; }
          .scroll-hint { display: none; }
        }

        @media (min-width: 900px) {
          .articles-grid { grid-template-columns: repeat(3, 1fr); }
        }
      </style>

      <div class="resources-wrap">

        <div class="section-header">
          <div class="header-left">
            <p class="eyebrow">Neck Health Resources</p>
            <h2>Exercises, Guides &amp; Tips for Your Neck</h2>
            <div class="underline-accent"></div>
            <p class="intro-text">Expert-written articles from our neck physiotherapy team, covering exercises, condition guides, recovery tips, and answers to the questions we hear most.</p>
          </div>
        </div>

        <div class="scroll-outer" id="scrollOuter">
          <div class="articles-grid" id="articlesGrid">

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/67ec1c_7f84c965686749ee8243241d4f7c32a9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/ShoulderNeckReferredPain.jpg" alt="Tech Neck Exercises"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Tech Neck Exercises: Fix Your Posture and Relieve Pain</h3>
                <p class="article-excerpt">What text neck is, why it causes pain, and the physio-recommended exercises to correct forward head posture and relieve symptoms.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" onclick="navigate('/text-neck-poke-neck')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_765617ff745d405582be3e8afa7ab9c0~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/neck-sleeping.png" alt="How to Relieve Neck Pain from Sleeping"></div>
              <div class="article-body">
                <span class="article-tag">Recovery Tips</span>
                <h3 class="article-title">How to Relieve Neck Pain from Sleeping</h3>
                <p class="article-excerpt">Why you wake up with a stiff neck, which sleeping positions cause it, and how to relieve the pain and stop it happening again.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link" onclick="navigate('/single-post/how-to-relieve-neck-pain-from-sleeping')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_82f89181a1da423a86ccaffd14096766~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/wry-neck.jpg" alt="Acute Wry Neck"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Acute Wry Neck: Causes, Symptoms and How to Unlock It</h3>
                <p class="article-excerpt">What causes the neck to suddenly lock to one side, how to identify wry neck, and what physiotherapy treatment looks like.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Mar 2018</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" onclick="navigate('/single-post/2018/03/06/neck-pain-series-part-1-acute-wry-neck')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_8e5737f116814a21840dd0de4430ca23~mv2.jpg/v1/fill/w_420,h_220,fp_0.50_0.50,q_85,enc_avif,quality_auto/neck-rehab.jpg" alt="6 Neck Rehab Exercises"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">6 Neck Rehab Exercises from Our Physiotherapists</h3>
                <p class="article-excerpt">A physio-prescribed sequence of six rehabilitation exercises to restore neck and shoulder strength, mobility and reduce pain.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" onclick="navigate('/single-post/neck-rehab-6-exercises')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/67ec1c_7f84c965686749ee8243241d4f7c32a9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/ShoulderNeckReferredPain.jpg" alt="Neck and Shoulder Pain"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Neck and Shoulder Pain: Causes and Treatment</h3>
                <p class="article-excerpt">Why neck and shoulder pain so often occur together, the structures involved, and how physiotherapy addresses both in one treatment plan.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" onclick="navigate('/neck-shoulder-pain')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/93f780cd9e7d41929777baeed6ccc93e.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/neck-pain.jpg" alt="Physio for Neck Pain"></div>
              <div class="article-body">
                <span class="article-tag">Patient Guide</span>
                <h3 class="article-title">Physio for Neck Pain: What to Expect at Infinite Health</h3>
                <p class="article-excerpt">How physiotherapy for neck pain works, what to expect at your first appointment, and how a physio differs from a chiropractor.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link" onclick="navigate('/neck-pain')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_9edd3397307e4f09bb0552f1c6ed8038~mv2_d_2466_1828_s_2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/neck-sprain.jpg" alt="Neck Sprain and Strain"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Neck Sprain and Strain: Symptoms, Causes and Treatment</h3>
                <p class="article-excerpt">What happens when you sprain or strain the neck, common causes including poor posture and sport, and how physiotherapy helps.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" onclick="navigate('/neck-sprain-strain')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_9edd3397307e4f09bb0552f1c6ed8038~mv2_d_2466_1828_s_2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/cervical-disc.jpg" alt="Cervical Bulging Disc"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Cervical Bulging Disc: Symptoms, Diagnosis and Treatment</h3>
                <p class="article-excerpt">What a bulging or herniated cervical disc is, how it causes neck and arm pain, and how physiotherapy manages recovery without surgery.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link" onclick="navigate('/cervical-bulging-disc-herniated-dis')">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_ff2b0e2d0a384f1dad4c25f7f095f0d3~mv2.jpg/v1/fill/w_420,h_220,fp_0.50_0.50,q_85,enc_avif,quality_auto/tight-neck.jpg" alt="Tight Neck"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Tight Neck: Causes, Relief and Exercises to Try at Home</h3>
                <p class="article-excerpt">Why the neck becomes chronically tight, the muscles and joints involved, and physio-recommended stretches and exercises for relief.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link" onclick="navigate('/single-post/tight-neck')">Read Article →</button>
              </div>
            </div>

          </div>
        </div>

        <div class="scroll-hint">
          <div class="scroll-dot active"></div>
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>

        <div class="pagination">
          <div class="pagination-controls">
            <button class="page-btn" id="prevBtn" disabled aria-label="Previous">←</button>
            <button class="page-btn active" data-page="1">1</button>
            <button class="page-btn" data-page="2">2</button>
            <button class="page-btn" data-page="3">3</button>
            <button class="page-btn" id="nextBtn" aria-label="Next">→</button>
          </div>
          <span class="pagination-info" id="pageInfo">Showing 1 to 3 of 9 articles</span>
        </div>

      </div>
    `;

    // Navigation via postMessage
    const navigate = (url) => window.parent.postMessage({ url }, '*');

    // Attach navigate to all read-link buttons
    shadow.querySelectorAll('.read-link').forEach(btn => {
      // onclick already set inline — but we expose navigate to shadow scope
    });

    // Override inline onclick to use shadow-scoped navigate
    shadow.querySelectorAll('[onclick]').forEach(el => {
      const onclickVal = el.getAttribute('onclick');
      el.removeAttribute('onclick');
      el.addEventListener('click', () => {
        const match = onclickVal.match(/navigate\('([^']+)'\)/);
        if (match) navigate(match[1]);
      });
    });

    // Pagination
    const allCards = Array.from(shadow.querySelectorAll('.article-card'));
    const pageBtns = shadow.querySelectorAll('.page-btn[data-page]');
    const prevBtn  = shadow.getElementById('prevBtn');
    const nextBtn  = shadow.getElementById('nextBtn');
    const pageInfo = shadow.getElementById('pageInfo');

    const perPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(allCards.length / perPage);

    function showPage(page) {
      currentPage = page;
      allCards.forEach((card, i) => {
        const cardPage = Math.floor(i / perPage) + 1;
        card.style.display = cardPage === page ? '' : 'none';
      });
      pageBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
      });
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
      const from = (page - 1) * perPage + 1;
      const to   = Math.min(page * perPage, allCards.length);
      pageInfo.textContent = `Showing ${from} to ${to} of ${allCards.length} articles`;
    }

    pageBtns.forEach(btn => {
      btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
    });

    prevBtn.addEventListener('click', () => { if (currentPage > 1) showPage(currentPage - 1); });
    nextBtn.addEventListener('click', () => { if (currentPage < totalPages) showPage(currentPage + 1); });

    showPage(1);
  }
}

customElements.define('ih-neck-resources', IhNeckResources);
