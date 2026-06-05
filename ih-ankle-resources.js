class IHAnkleResources extends HTMLElement {
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
          width: 100%;
          padding: 40px 20px 40px 20px;
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
          cursor: pointer;
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
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
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

          .article-card {
            width: auto;
            flex-shrink: unset;
          }

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
      </style>

      <div class="resources-wrap">

        <div class="section-header">
          <div class="header-left">
            <p class="eyebrow">Ankle Health Resources</p>
            <h2>Exercises, Guides &amp; Tips for Your Ankle</h2>
            <div class="underline-accent"></div>
            <p class="intro-text">Expert-written articles from our ankle physiotherapy team, covering rehab exercises, condition guides, and recovery tips.</p>
          </div>
        </div>

        <div class="scroll-outer">
          <div class="articles-grid" id="articlesGrid">

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/physio-for-plantar-fasciitis">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/c1fc43_913cf20663be4157986e194c3a863ff5~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/c1fc43_913cf20663be4157986e194c3a863ff5~mv2.jpg" alt="Physio for Plantar Fasciitis">
              </div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Physio for Plantar Fasciitis</h3>
                <p class="article-excerpt">A complete guide to plantar fasciitis treatment, from load management and soft tissue therapy to progressive strengthening exercises that resolve heel pain for good.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
                  </div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2020/05/06/improve-your-ankle-movement">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_577539f0da2d430b8b46bcde26dca523~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_577539f0da2d430b8b46bcde26dca523~mv2.jpg" alt="Improve Your Ankle Movement">
              </div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Improve Your Ankle Movement</h3>
                <p class="article-excerpt">Targeted exercises to restore ankle mobility and reduce stiffness, ideal for runners, athletes, and anyone recovering from an ankle injury or sprain.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">May 2020</span></div>
                  </div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2020/06/14/achilles-prehab">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_16bbbcc52c56412c99ad25f381b14e30~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_16bbbcc52c56412c99ad25f381b14e30~mv2.jpg" alt="Achilles Tendon Prehab">
              </div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Achilles Tendon Prehab</h3>
                <p class="article-excerpt">A prehabilitation program to build Achilles tendon load tolerance, improve strength, and reduce the risk of Achilles tendinopathy and rupture.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jun 2020</span></div>
                  </div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2020/03/15/intermediate-stage-ankle-rehab">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_2977cb549c984ccabb1842e6434f7f43~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_2977cb549c984ccabb1842e6434f7f43~mv2.png" alt="Intermediate Stage Ankle Rehab">
              </div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Intermediate Stage Ankle Rehab</h3>
                <p class="article-excerpt">The second phase of ankle sprain rehabilitation, progressing from basic range of motion work to proprioception and strength exercises for a safe return to activity.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Mar 2020</span></div>
                  </div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/chronic-ankle-instability-repetitive-ankle-sprains">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/1b6104_99af1f627d97425e9737bf2119e003f1~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/1b6104_99af1f627d97425e9737bf2119e003f1~mv2.jpg" alt="Chronic Ankle Instability and Repetitive Ankle Sprains">
              </div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Chronic Ankle Instability and Repetitive Sprains</h3>
                <p class="article-excerpt">Why some people keep rolling the same ankle, and how targeted physiotherapy addresses the balance and strength deficits that drive chronic instability.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
                  </div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2018/12/02/strengthen-your-arches">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_a20b082fc16a4ecfbe8a03d55e450b1e~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_a20b082fc16a4ecfbe8a03d55e450b1e~mv2.jpg" alt="Strengthen Your Arches">
              </div>
              <div class="article-body">
                <span class="article-tag">Exercise Guide</span>
                <h3 class="article-title">Strengthen Your Arches</h3>
                <p class="article-excerpt">Practical exercises to build strength through the foot arch, improve load distribution, and reduce the risk of plantar fasciitis and flat foot-related pain.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Dec 2018</span></div>
                  </div>
                  <span class="read-time">⏱ 4 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/lateral-ankle-rehab-peroneal-strengthening">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_89907d66e7744e04a9baedd3dfd6eca9~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_89907d66e7744e04a9baedd3dfd6eca9~mv2.jpg" alt="Lateral Ankle Rehab: Peroneal Strengthening">
              </div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Lateral Ankle Rehab: Peroneal Strengthening</h3>
                <p class="article-excerpt">A targeted strengthening program for the peroneal muscles to restore lateral ankle stability and prevent re-injury after an ankle sprain.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date"></span></div>
                  </div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2019/11/10/ankle-pain-squats">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/1b6104_c31cdba324d049d8a09c9e7a3f22db11~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/1b6104_c31cdba324d049d8a09c9e7a3f22db11~mv2.jpg" alt="Ankle Pain While Squatting">
              </div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Ankle Pain While Squatting</h3>
                <p class="article-excerpt">Why ankle pain occurs during squats and what to do about it, including mobility work, technique corrections, and when to see a physiotherapist.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Nov 2019</span></div>
                  </div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link">Read Article →</button>
              </div>
            </div>

            <div class="article-card" data-url="https://www.infinitehealthgroup.com.au/single-post/2017/07/24/ankle-sprain-end-stage-rehab-1-basketball">
              <div class="article-image">
                <img src="https://static.wixstatic.com/media/607962_d6dc79517fbc414ea4fad79c7436c8af~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_d6dc79517fbc414ea4fad79c7436c8af~mv2.jpg" alt="Ankle Sprain End Stage Rehab">
              </div>
              <div class="article-body">
                <span class="article-tag">Rehab</span>
                <h3 class="article-title">Ankle Sprain End Stage Rehab</h3>
                <p class="article-excerpt">Sport-specific return-to-play exercises for the final phase of ankle sprain recovery, focusing on agility, reactive stability, and full activity readiness.</p>
                <div class="article-meta">
                  <div class="author">
                    <div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jul 2017</span></div>
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

customElements.define('ih-ankle-resources', IHAnkleResources);
