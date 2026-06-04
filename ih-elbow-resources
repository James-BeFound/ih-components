class IhElbowResources extends HTMLElement {
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

        @media (min-width: 640px) {
          .resources-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }

          .scroll-outer {
            overflow-x: visible;
            margin: 0;
            padding: 0;
          }

          .articles-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 100%;
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
      </style>

      <div class="resources-wrap">

        <div class="section-header">
          <div class="header-left">
            <p class="eyebrow">Elbow Health Resources</p>
            <h2>Exercises, Guides &amp; Tips for Your Elbow</h2>
            <div class="underline-accent"></div>
            <p class="intro-text">Expert-written articles from our elbow physiotherapy team, covering condition guides, rehab exercises, and recovery tips.</p>
          </div>
        </div>

        <div class="scroll-outer">
          <div class="articles-grid">

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/607962_680cb8b87df94ef79f0fce61d6920470.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_680cb8b87df94ef79f0fce61d6920470.jpg" alt="Elbow Pain and Injury"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Elbow Pain and Injury: A Physio Guide</h3>
                <p class="article-excerpt">A complete overview of elbow conditions, from tennis elbow and golfer's elbow to bursitis and acute injuries, including how physiotherapy diagnoses and treats each one.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Infinite Health</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" data-url="/elbow-pain-injury">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_30164f86fd794edfa6fe3de0dd4c29b5~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/c1fc43_30164f86fd794edfa6fe3de0dd4c29b5~mv2.png" alt="What is Golfer's Elbow"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">What is Golfer's Elbow? Causes, Symptoms and Treatment</h3>
                <p class="article-excerpt">How repetitive forearm motions cause medial epicondylitis, the resulting inner elbow pain and grip weakness, and why physiotherapy gets better long-term results than rest alone.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Jan 2024</span></div></div>
                  <span class="read-time">⏱ 5 min</span>
                </div>
                <button class="read-link" data-url="/single-post/what-is-golfers-elbow">Read Article →</button>
              </div>
            </div>

            <div class="article-card">
              <div class="article-image"><img src="https://static.wixstatic.com/media/c1fc43_78531448bf584ab09dc7832e972c9b5d~mv2.png/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/c1fc43_78531448bf584ab09dc7832e972c9b5d~mv2.png" alt="Torn Bicep Injury"></div>
              <div class="article-body">
                <span class="article-tag">Condition Guide</span>
                <h3 class="article-title">Torn Bicep Injury: Causes, Symptoms and Treatment</h3>
                <p class="article-excerpt">The three types of bicep tears including the distal tendon at the elbow, what causes them, symptoms to look out for, and when physiotherapy versus surgery is the right path to recovery.</p>
                <div class="article-meta">
                  <div class="author"><div class="author-avatar"><svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" fill="#d1d5db"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-width="1.5" stroke-linecap="round"/></svg></div><div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Mar 2025</span></div></div>
                  <span class="read-time">⏱ 6 min</span>
                </div>
                <button class="read-link" data-url="/single-post/torn-bicep-injury-causes-symptoms-treatment-for-recovery">Read Article →</button>
              </div>
            </div>

          </div>
        </div>

        <div class="scroll-hint">
          <div class="scroll-dot active"></div>
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>

      </div>
    `;

    // Wire up all read-link buttons
    shadow.querySelectorAll('.read-link').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('navigate', {
          detail: { url: btn.dataset.url },
          bubbles: true
        }));
      });
    });
  }
}

customElements.define('ih-elbow-resources', IhElbowResources);
