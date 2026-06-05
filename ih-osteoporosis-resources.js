class IhOsteoporosisResources extends HTMLElement {
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

          /* Mobile: horizontal scroll */
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
            text-decoration: none;
            transition: gap 0.2s ease;
          }

          .read-link:hover { gap: 10px; }

          /* Scroll hint dots — mobile only */
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

          /* Desktop: revert to grid */
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

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="resources-wrap">
      <div class="section-header">
      <div class="header-left">
      <p class="eyebrow">Osteoporosis Health Resources</p>
      <h2>Guides &amp; Resources for Bone Health</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Expert-written articles from our physiotherapy team covering osteoporosis management, resistance training for bone density, and nutrition for healthy ageing.</p>
      </div>
      </div>
      <div class="scroll-outer">
      <div class="articles-grid" id="articlesGrid">
      <div class="article-card">
      <div class="article-image">
      <img alt="Strength Training for Bone Health" loading="lazy" src="https://static.wixstatic.com/media/607962_8d72cb5cf8d74cb7860055514634c9ab~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_8d72cb5cf8d74cb7860055514634c9ab~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Exercise Guide</span>
      <h3 class="article-title">Strength Training for Bone Health</h3>
      <p class="article-excerpt">Why resistance training is the most effective tool for stimulating bone formation and protecting long-term bone density, with guidance on getting started safely.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Aug 2016</span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <a class="read-link" href="https://www.infinitehealthgroup.com.au/single-post/2016/08/26/strength-training-for-bone-health" rel="noopener" target="_blank">Read Article →</a>
      </div>
      </div>
      <div class="article-card">
      <div class="article-image">
      <img alt="Nutrition for Older Adults" loading="lazy" src="https://static.wixstatic.com/media/607962_4e02c61981ff474eadaac6fd25906d62~mv2_d_5508_4500_s_4_2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/607962_4e02c61981ff474eadaac6fd25906d62~mv2_d_5508_4500_s_4_2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Health Guide</span>
      <h3 class="article-title">Nutrition for Older Adults: Eat Well to Age Well</h3>
      <p class="article-excerpt">Evidence-based nutrition guidance for older adults covering calcium, vitamin D, and the dietary habits that support healthy ageing and strong bones.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Sep 2016</span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <a class="read-link" href="https://www.infinitehealthgroup.com.au/single-post/2016/09/24/nutrition-for-older-adults-eat-well-to-age-well" rel="noopener" target="_blank">Read Article →</a>
      </div>
      </div>
      <div class="article-card">
      <div class="article-image">
      <img alt="Do you have Diabetes or Osteoporosis?" loading="lazy" src="https://static.wixstatic.com/media/1b6104_7cdc955810934305b49eb1f21823677e~mv2.jpg/v1/fill/w_420,h_220,al_c,q_85,enc_avif,quality_auto/1b6104_7cdc955810934305b49eb1f21823677e~mv2.jpg"/>
      </div>
      <div class="article-body">
      <span class="article-tag">Condition Guide</span>
      <h3 class="article-title">Do You Have Diabetes or Osteoporosis?</h3>
      <p class="article-excerpt">How Medicare-rebated physiotherapy sessions can help older Australians manage chronic conditions like osteoporosis through evidence-based exercise therapy.</p>
      <div class="article-meta">
      <div class="author">
      <div class="author-avatar"><svg fill="none" viewbox="0 0 16 16"><circle cx="8" cy="5" fill="#d1d5db" r="3"></circle><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#d1d5db" stroke-linecap="round" stroke-width="1.5"></path></svg></div>
      <div class="author-info"><span class="author-name">Infinite Health Team</span><span class="author-date">Dec 2022</span></div>
      </div>
      <span class="read-time">⏱ 5 min</span>
      </div>
      <a class="read-link" href="https://www.infinitehealthgroup.com.au/single-post/do-you-have-diabetes-or-osteoporosis" rel="noopener" target="_blank">Read Article →</a>
      </div>
      </div>
      </div>
      </div>
      <div class="scroll-hint">
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      </div>
      </div>
    `;
  }
}

customElements.define('ih-osteoporosis-resources', IhOsteoporosisResources);
