class IhShoulderResources extends HTMLElement {
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
          cursor: pointer;
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
          border-bottom: 1px solid #e8ecf0;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .article-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .article-image::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
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
          width: 26px; height: 26px;
          border-radius: 50%;
          background: #e8ecf0;
          display: flex; align-items: center; justify-content: center;
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
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
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
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          transition: all 0.2s;
        }

        .scroll-dot.active { width: 18px; border-radius: 3px; background: #ff6218; }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pagination-controls { display: flex; align-items: center; gap: 8px; }

        .page-btn {
          width: 38px; height: 38px;
          border-radius: 2px;
          border: 1.5px solid #d1d5db;
          background: #ffffff;
          color: #1a1a1a;
          font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }

        .page-btn.active { background: #ff6218; border-color: #ff6218; color: #ffffff; }
        .page-btn:hover:not(.active):not(:disabled) { border-color: #ff6218; color: #ff6218; }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .pagination-info { font-size: 12px; color: #9ca3af; }

        @media (min-width: 640px) {
          .resources-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }

          .scroll-outer { overflow-x: visible; margin: 0; padding: 0; }

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
            <p class="eyebrow">Shoulder Health Resources</p>
            <h2>Exercises, Guides &amp; Tips for Your Shoulder</h2>
            <div class="underline-accent"></div>
            <p class="intro-text">Expert-written articles from our shoulder physiotherapy team, practical exercises, recovery tips, and condition guides.</p>
          </div>
        </div>

        <div class="scroll-outer">
          <div class="articles-grid" id="articlesGrid">

            <div class="article-card" data-url="/single-post/rotator-cuff-tear">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_456da106e87349618bec67f64f03634f~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/rotator-cuff.jpg" alt="Rotator Cuff Tear"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Rotator Cuff Tear: Symptoms, Diagnosis and Treatment</h3>
                <p class="article-excerpt">Everything you need to know about rotator cuff tears, from how they happen to conservative vs surgical management.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2022</span></div></div>
                  <span class="read-time">⏱ 7 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2018/05/01/stretch-sequence-for-shoulder-pain">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_bdacc63106484ab08a460c9376cb83dc~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/stretch-sequence.jpg" alt="Stretch Sequence for Shoulder Pain"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Stretch Sequence for Shoulder Pain</h3>
                <p class="article-excerpt">A step-by-step physio-designed stretch sequence to relieve shoulder pain and restore mobility at home.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">May 2018</span></div></div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2018/05/24/shoulder-activation-sequence">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_f1aeeb684b4d4a688f2c757119491324~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/shoulder-activation.jpg" alt="Shoulder Activation Sequence"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Shoulder Activation Sequence</h3>
                <p class="article-excerpt">A shoulder activation routine to switch on the key stabilising muscles before training or as part of your rehab program.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">May 2018</span></div></div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/shoulder-impingement">
              <div class="article-image"><img src="https://static.wixstatic.com/media/11062b_763b1ebbe10e4f68ac4fca12aa9ce4e9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/Runner-Stretching.jpg" alt="Shoulder Impingement"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Shoulder Impingement: Causes, Symptoms and Treatment</h3>
                <p class="article-excerpt">Why shoulder pain when lifting your arm overhead happens and how physiotherapy resolves subacromial impingement.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/shoulder-rotator-cuff-injuries">
              <div class="article-image"><img src="https://static.wixstatic.com/media/11062b_6219a29f9e63499680b96dc182e78ad1~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/Stretching.jpg" alt="Shoulder Rotator Cuff Injuries"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Shoulder Rotator Cuff Injuries: A Complete Guide</h3>
                <p class="article-excerpt">How rotator cuff injuries happen, what symptoms to expect, and when to seek physio treatment.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/shoulder-bursitis">
              <div class="article-image"><img src="https://static.wixstatic.com/media/11062b_763b1ebbe10e4f68ac4fca12aa9ce4e9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/Runner-Stretching.jpg" alt="Shoulder Bursitis"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Shoulder Bursitis: Signs, Symptoms and Treatment</h3>
                <p class="article-excerpt">How subacromial bursitis develops, why it causes shoulder pain at night, and the most effective treatment options.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2018/04/16/chronic-shoulder-pain-in-weightlifters">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_073b0dfdb655422c9da29228217c0234~mv2_d_2400_1600_s_2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/weightlifters.jpg" alt="Chronic Shoulder Pain in Weightlifters"></div>
              <div class="article-body">
                <span class="article-tag">Training Advice</span>
                <h3 class="article-title">Chronic Shoulder Pain in Weightlifters</h3>
                <p class="article-excerpt">Why gym-goers develop chronic shoulder pain and what you can do to fix it without stopping training.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Apr 2018</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/shoulder-dislocation-rehab-mid-vs-end-stage">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_8e5737f116814a21840dd0de4430ca23~mv2.jpg/v1/fill/w_420,h_220,fp_0.50_0.50,q_85,enc_avif,quality_auto/shoulder-dislocation.jpg" alt="Shoulder Dislocation Rehab: Mid vs End Stage"></div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Shoulder Dislocation Rehab: Mid vs End Stage</h3>
                <p class="article-excerpt">How rehab changes between the mid and end stages of shoulder dislocation recovery and what to focus on at each phase.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2022</span></div></div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2020/07/01/end-stage-shoulder-dislocation-rehab">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_22968405dad6460f85f60cf286a74474~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/end-stage-rehab.jpg" alt="End-Stage Shoulder Dislocation Rehab"></div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">End-Stage Shoulder Dislocation Rehab</h3>
                <p class="article-excerpt">What the final phase of shoulder dislocation rehabilitation looks like and how to prepare for a safe return to sport.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jul 2020</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
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

    // Wire up card clicks using data-url on each card
    shadow.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('navigate', {
          detail: { url: card.dataset.url },
          bubbles: true
        }));
      });
    });

    // Pagination
    const allCards = Array.from(shadow.querySelectorAll('.article-card'));
    const pageBtns = shadow.querySelectorAll('.page-btn[data-page]');
    const prevBtn  = shadow.getElementById('prevBtn');
    const nextBtn  = shadow.getElementById('nextBtn');
    const pageInfo = shadow.getElementById('pageInfo');
    const perPage  = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(allCards.length / perPage);

    function showPage(page) {
      currentPage = page;
      allCards.forEach((card, i) => {
        card.style.display = Math.floor(i / perPage) + 1 === page ? '' : 'none';
      });
      pageBtns.forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.page) === page));
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
      const from = (page - 1) * perPage + 1;
      const to = Math.min(page * perPage, allCards.length);
      pageInfo.textContent = `Showing ${from} to ${to} of ${allCards.length} articles`;
    }

    pageBtns.forEach(btn => btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page))));
    prevBtn.addEventListener('click', () => { if (currentPage > 1) showPage(currentPage - 1); });
    nextBtn.addEventListener('click', () => { if (currentPage < totalPages) showPage(currentPage + 1); });

    showPage(1);
  }
}

customElements.define('ih-shoulder-resources', IhShoulderResources);
