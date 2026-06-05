class IhOsteoporosisConditions extends HTMLElement {
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

          .conditions-wrap {
                  background: #f5f4f0;
            width: 100%;
            padding: 40px 20px 40px 20px;
          }

          .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 16px;
          }

          h2 {
            font-size: clamp(26px, 6vw, 42px);
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
            margin-bottom: 20px;
            border-radius: 2px;
          }

          .intro-text {
            font-size: clamp(14px, 3vw, 15px);
            font-weight: 400;
            color: #555;
            line-height: 1.75;
            margin-bottom: 28px;
            max-width: 680px;
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

          .conditions-grid {
            display: flex;
            flex-direction: row;
            gap: 14px;
            width: max-content;
            margin-bottom: 0;
          }

          .condition-card {
            width: 260px;
            flex-shrink: 0;
            background: #ffffff;
            border-radius: 4px;
            padding: 22px 18px;
            border-left: 3px solid #ff6218;
            transition: background 0.2s ease, box-shadow 0.2s ease;
          }

          .condition-card:hover {
            background: #fafaf8;
            box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
          }

          .condition-card.hidden { display: none; }

          .card-number {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #C0622A;
            margin-bottom: 10px;
          }

          .card-title {
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            margin-bottom: 8px;
            letter-spacing: -0.2px;
          }

          .card-body {
            font-size: 13px;
            font-weight: 400;
            color: #666;
            line-height: 1.6;
          }

          .grid-wrapper {
            position: relative;
          }

          .grid-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 70px;
            background: linear-gradient(to bottom, transparent, #f5f4f0);
            pointer-events: none;
            transition: opacity 0.3s ease;
          }

          .grid-fade.hidden { opacity: 0; }

          .scroll-hint {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-bottom: 20px;
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

          .load-more-wrap { text-align: center; }

          .load-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: none;
            border: 1.5px solid #ff6218;
            color: #ff6218;
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 14px 32px;
            border-radius: 2px;
            cursor: pointer;
            transition: background 0.2s ease, color 0.2s ease;
            -webkit-tap-highlight-color: transparent;
          }

          .load-more-btn:hover { background: #ff6218; color: #fff; }
          .load-more-btn.hidden { display: none; }

          @media (min-width: 560px) {
            .scroll-outer {
              overflow-x: visible;
              margin: 0;
              padding: 0;
              margin-bottom: 0;
            }

            .conditions-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              width: 100%;
              margin-bottom: 28px;
            }

            .condition-card {
              width: auto;
              flex-shrink: unset;
              padding: 26px 22px;
            }

            .card-title { font-size: clamp(14px, 3vw, 15px); }
            .card-body { font-size: clamp(13px, 2.8vw, 14px); }

            .scroll-hint { display: none; }
          }

          @media (min-width: 900px) {
            .conditions-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }

          @media (min-width: 640px) {
            .conditions-wrap { padding: 60px 48px 60px 48px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
            .underline-accent { margin-bottom: 24px; }
            .intro-text { margin-bottom: 44px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="conditions-wrap">
      <p class="eyebrow">Osteoporosis Management</p>
      <h2>Osteoporosis Conditions We Treat</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">
          Our physiotherapists specialise in evidence-based osteoporosis management, treating everything from early-stage osteopenia and falls prevention through to post-fracture rehabilitation and long-term bone density programs.
        </p>
      <div class="grid-wrapper">
      <div class="scroll-outer">
      <div class="conditions-grid" id="conditionsGrid">
      <div class="condition-card">
      <p class="card-number">01</p>
      <h3 class="card-title">Osteoporosis Management</h3>
      <p class="card-body">Progressive resistance and impact-based exercise programs designed to stimulate bone formation, improve strength, and reduce fracture risk. Your program is tailored to your T-score, physical capacity, and lifestyle to ensure safe and effective loading.</p>
      </div>
      <div class="condition-card">
      <p class="card-number">02</p>
      <h3 class="card-title">Osteopenia</h3>
      <p class="card-body">Early intervention for low bone density before it progresses to osteoporosis. Targeted resistance training and impact-based activity at this stage can significantly slow or reverse bone loss when started early.</p>
      </div>
      <div class="condition-card">
      <p class="card-number">03</p>
      <h3 class="card-title">Falls Prevention</h3>
      <p class="card-body">Balance training, strength exercises, and environmental risk assessment to reduce your risk of falling and protect fragile bones. Falls prevention is a core component of every osteoporosis management program at Infinite Health.</p>
      </div>
      <div class="condition-card">
      <p class="card-number">04</p>
      <h3 class="card-title">Vertebral Compression Fractures</h3>
      <p class="card-body">Rehabilitation following spinal fractures caused by osteoporotic bone, addressing pain, postural changes, and safe return to daily activities. Your physiotherapist will guide you through a graded program that respects healing tissue while restoring function.</p>
      </div>
      <div class="condition-card">
      <p class="card-number">05</p>
      <h3 class="card-title">Hip Fracture Rehabilitation</h3>
      <p class="card-body">Post-surgical and conservative rehabilitation following hip fractures, one of the most serious consequences of osteoporosis. Programs focus on restoring strength, balance, and independence with walking and daily activities.</p>
      </div>
      <div class="condition-card">
      <p class="card-number">06</p>
      <h3 class="card-title">Post-Fracture Rehabilitation</h3>
      <p class="card-body">Structured recovery programs following wrist, forearm, rib, or other osteoporosis-related fractures. Treatment addresses pain, stiffness, and progressive return to full strength and function.</p>
      </div>
      <div class="condition-card hidden">
      <p class="card-number">07</p>
      <h3 class="card-title">Exercise for Bone Density</h3>
      <p class="card-body">Personalised progressive resistance and impact-loading programs that directly stimulate new bone formation. Programs are designed to be safe, effective, and progressively challenging to maximise long-term bone health outcomes.</p>
      </div>
      <div class="condition-card hidden">
      <p class="card-number">08</p>
      <h3 class="card-title">Postural Management</h3>
      <p class="card-body">Assessment and treatment of postural changes associated with vertebral fractures and osteoporosis, including thoracic kyphosis and height loss. Targeted exercise and manual therapy help reduce discomfort and slow postural deterioration.</p>
      </div>
      </div>
      </div>
      <div class="grid-fade" id="gridFade"></div>
      </div>
      <div class="scroll-hint">
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      </div>
      <div class="load-more-wrap">
      <button class="load-more-btn" id="loadMoreBtn">Show More Conditions +</button>
      </div>
      </div>
    `;

    const loadMoreBtn = shadow.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        shadow.querySelectorAll('.condition-card.hidden').forEach(card => {
          card.classList.remove('hidden');
        });
        const gridFade = shadow.getElementById('gridFade');
        if (gridFade) gridFade.classList.add('hidden');
        loadMoreBtn.classList.add('hidden');
      });
    }
  }
}

customElements.define('ih-osteoporosis-conditions', IhOsteoporosisConditions);
