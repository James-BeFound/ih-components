class IhKneeResources extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .resources-wrap { width: 100%; padding: 40px 20px; background: #ffffff; }

        .section-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 36px; }
        .header-left { flex: 1; min-width: 240px; }

        .eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #000000; margin-bottom: 16px; }

        h2 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.15; color: #ff6218; margin-bottom: 12px; letter-spacing: -0.5px; }

        .underline-accent { width: 48px; height: 3px; background: #FF6218; margin-bottom: 16px; border-radius: 2px; }

        .intro-text { font-size: clamp(13px, 3vw, 14px); color: #555; line-height: 1.7; max-width: 520px; }

        .scroll-outer { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; margin: 0 -20px; padding: 0 20px 16px 20px; margin-bottom: 8px; }
        .scroll-outer::-webkit-scrollbar { display: none; }

        .articles-grid { display: flex; flex-direction: row; gap: 16px; width: max-content; }

        .article-card {
          width: 280px; flex-shrink: 0; background: #ffffff; border: 1px solid #e8ecf0;
          border-radius: 4px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          cursor: pointer; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          display: flex; flex-direction: column;
        }

        .article-card:hover { box-shadow: 0 8px 28px rgba(255,98,24,0.1); transform: translateY(-2px); border-color: #ffd0b0; }

        .article-image { width: 100%; height: 160px; background: #f5f4f0; border-bottom: 1px solid #e8ecf0; position: relative; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .article-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .article-image::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: #ff6218; }
        .image-placeholder-text { font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #bbb; }

        .article-body { padding: 16px 16px 20px 16px; display: flex; flex-direction: column; flex: 1; }

        .article-tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #ff6218; border: 1px solid rgba(255,98,24,0.3); padding: 4px 10px; border-radius: 2px; margin-bottom: 10px; width: fit-content; }

        .article-title { font-size: 14px; font-weight: 700; color: #1a1a1a; line-height: 1.4; margin-bottom: 10px; letter-spacing: -0.2px; }

        .article-excerpt { font-size: 12px; color: #666; line-height: 1.7; flex: 1; margin-bottom: 14px; }

        .article-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 14px; }

        .author { display: flex; align-items: center; gap: 8px; }
        .author-avatar { width: 26px; height: 26px; border-radius: 50%; background: #e8ecf0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .author-avatar svg { width: 13px; height: 13px; }
        .author-info { display: flex; flex-direction: column; gap: 1px; }
        .author-name { font-size: 11px; font-weight: 600; color: #1a1a1a; }
        .author-date { font-size: 10px; color: #9ca3af; }
        .read-time { font-size: 10px; color: #9ca3af; white-space: nowrap; }

        .read-link { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #ff6218; background: none; border: none; padding: 0; cursor: pointer; font-family: 'Inter', sans-serif; transition: gap 0.2s ease; }
        .read-link:hover { gap: 10px; }

        .scroll-hint { display: flex; justify-content: center; gap: 6px; margin-bottom: 24px; }
        .scroll-dot { width: 6px; height: 6px; border-radius: 50%; background: #d1d5db; transition: all 0.2s; }
        .scroll-dot.active { width: 18px; border-radius: 3px; background: #ff6218; }

        .pagination { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .pagination-controls { display: flex; align-items: center; gap: 8px; }

        .page-btn { width: 38px; height: 38px; border-radius: 2px; border: 1.5px solid #d1d5db; background: #ffffff; color: #1a1a1a; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
        .page-btn.active { background: #ff6218; border-color: #ff6218; color: #ffffff; }
        .page-btn:hover:not(.active):not(:disabled) { border-color: #ff6218; color: #ff6218; }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .pagination-info { font-size: 12px; color: #9ca3af; }

        @media (min-width: 640px) {
          .resources-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .scroll-outer { overflow-x: visible; margin: 0; padding: 0; }
          .articles-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; width: 100%; margin-bottom: 32px; }
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

        @media (min-width: 900px) { .articles-grid { grid-template-columns: repeat(3, 1fr); } }
      </style>

      <div class="resources-wrap">

        <div class="section-header">
          <div class="header-left">
            <p class="eyebrow">Knee Health Resources</p>
            <h2>Exercises, Guides &amp; Tips for Your Knee</h2>
            <div class="underline-accent"></div>
            <p class="intro-text">Expert-written articles from our knee physiotherapy team, covering rehab exercises, condition guides, and recovery tips.</p>
          </div>
        </div>

        <div class="scroll-outer">
          <div class="articles-grid" id="articlesGrid">

            <div class="article-card" data-url="/single-post/how-to-fix-medial-knee-pain">
              <div class="article-image"><img src="https://static.wixstatic.com/media/78d045_634fe225a107441ca6a9ddfc58bd28f9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/78d045_634fe225a107441ca6a9ddfc58bd28f9~mv2.jpg" alt="How to Fix Medial Knee Pain" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">How to Fix Medial Knee Pain</h3>
                <p class="article-excerpt">Step-by-step physio exercises for medial knee pain, with strengthening and mobility drills to address the root cause of inner knee symptoms.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Aug 2022</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2020/06/24/beginner-level-knee-rehab">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_fda2b31905c2424c8b4d37fcd54a750f~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_fda2b31905c2424c8b4d37fcd54a750f~mv2.png" alt="Beginner Level Knee Rehab" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Beginner Level Knee Rehab</h3>
                <p class="article-excerpt">A beginner-friendly knee rehab program from our physiotherapists, covering the foundational knee strengthening exercises to start your recovery safely.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jun 2020</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/treating-runners-knee">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_aac1967325724d149e21e4829d7e96d1~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/c1fc43_aac1967325724d149e21e4829d7e96d1~mv2.png" alt="Treating Runner's Knee" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Treating Runner's Knee</h3>
                <p class="article-excerpt">How to treat patellofemoral pain syndrome with targeted physio exercises for knee pain, load management, and a step-by-step return to running.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2021</span></div></div><span class="read-time">⏱ 6 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/pain-in-the-inside-of-your-knee-learn-what-the-causes-are-and-what-to-do-about-it">
              <div class="article-image"><img src="https://static.wixstatic.com/media/1b6104_4a94b039f9e74b699fa275f1710db2fc~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/1b6104_4a94b039f9e74b699fa275f1710db2fc~mv2.jpg" alt="Pain on the Inside of Your Knee" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Pain on the Inside of Your Knee</h3>
                <p class="article-excerpt">The most common causes of inner knee pain, what structures are involved, and the medial knee pain exercises most likely to help.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2020</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2019/01/27/anteromedial-front-and-inside-knee-pain">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_136c7bbca4934d91aa83a8b3a9be6eea~mv2_d_1920_1458_s_2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_136c7bbca4934d91aa83a8b3a9be6eea~mv2_d_1920_1458_s_2.jpg" alt="Anteromedial Knee Pain" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Anteromedial (Front and Inside) Knee Pain</h3>
                <p class="article-excerpt">A detailed guide to front and inside knee pain, covering the structures involved, how it is assessed, and the physiotherapy exercises that help most.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jan 2019</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/acl-vs-mcl-tear-whats-the-difference">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_06106b3994934abe99035fc9f03ea2c8~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/c1fc43_06106b3994934abe99035fc9f03ea2c8~mv2.jpg" alt="ACL vs MCL Tear" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">ACL vs MCL Tear: What's the Difference?</h3>
                <p class="article-excerpt">How an ACL and MCL tear differ in mechanism, symptoms, and diagnosis, and what MCL rehab exercises and ACL rehabilitation look like for each.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2022</span></div></div><span class="read-time">⏱ 6 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/2020/11/21/lateral-collateral-ligament-rehab-early-stage">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_2197708afdce48148b6b2be7e33e31d5~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_2197708afdce48148b6b2be7e33e31d5~mv2.jpg" alt="Lateral Collateral Ligament Rehab" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Lateral Collateral Ligament Rehab: Early Stage</h3>
                <p class="article-excerpt">The early-stage knee rehab exercises our physios use for lateral ligament injuries, progressing safely from acute management to active loading.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Nov 2020</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/single-post/knee-pain-while-squatting-learn-from-the-experts">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_1e8c6009e2834c41a30dea67f9d4251a~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_1e8c6009e2834c41a30dea67f9d4251a~mv2.jpg" alt="Knee Pain While Squatting" loading="lazy"></div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Knee Pain While Squatting</h3>
                <p class="article-excerpt">Why squatting causes knee pain and what our physios recommend to fix your movement pattern, build load tolerance, and squat pain-free.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2021</span></div></div><span class="read-time">⏱ 5 min</span></div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="/knee-pain-injury">
              <div class="article-image"><span class="image-placeholder-text">Blog Image · 420 x 220px</span></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Knee Pain &amp; Injury: A Complete Guide</h3>
                <p class="article-excerpt">An overview of the most common knee injuries and conditions treated at Infinite Health, with guidance on symptoms, diagnosis, and treatment options.</p>
                <div class="article-meta"><div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">2023</span></div></div><span class="read-time">⏱ 6 min</span></div>
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

    // Wire up card clicks
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

customElements.define('ih-knee-resources', IhKneeResources);
