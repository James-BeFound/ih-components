class IhHowItWorks extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          /* ── Wrap ─────────────────────────────────────── */

          .process-wrap {
                  background: #fff;
            padding: 60px 48px 64px;
            width: 100%;
          }

          /* ── Eyebrow ──────────────────────────────────── */

          .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #ff6218;
            margin-bottom: 12px;
          }

          /* ── Heading ──────────────────────────────────── */

          h2 {
            font-size: clamp(28px, 5vw, 42px);
            font-weight: 700;
            line-height: 1.15;
            color: #1a1a1a;
            letter-spacing: -0.5px;
            margin-bottom: 10px;
          }

          /* ── Accent bar ───────────────────────────────── */

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #ff6218;
            border-radius: 2px;
            margin-bottom: 48px;
          }

          /* ── Timeline outer ───────────────────────────── */

          .timeline-outer {
            position: relative;
          }

          /* ── Steps row ────────────────────────────────── */

          .steps-row {
            display: flex;
            position: relative;
          }

          /* Connecting line — spans between centres of first & last badge */
          .steps-row::before {
            content: '';
            position: absolute;
            top: 24px; /* half of 48px badge height */
            left: 10%; /* centre of first step (100% / 5 steps / 2 = 10%) */
            right: 10%;
            height: 1px;
            background: #d1d5db;
            z-index: 0;
          }

          /* ── Individual step ──────────────────────────── */

          .step {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 12px;
          }

          /* ── Number badge ─────────────────────────────── */

          .step-num {
            width: 48px;
            height: 48px;
            background: #ff6218;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            position: relative;
            z-index: 1;
            flex-shrink: 0;
            margin-bottom: 18px;
          }

          /* ── Step title ───────────────────────────────── */

          .step-title {
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            margin-bottom: 8px;
          }

          /* ── Step description ─────────────────────────── */

          .step-desc {
            font-size: 12px;
            color: #ff6218;
            line-height: 1.65;
          }

          /* ── Mobile: carousel ─────────────────────────── */

          .scroll-fade-right,
          .scroll-fade-left,
          .scroll-arrow-right,
          .scroll-arrow-left { display: none; }

          @media (max-width: 768px) {

            .process-wrap {
              padding: 40px 20px 40px;
            }

            .underline-accent {
              margin-bottom: 32px;
            }

            .timeline-outer {
              margin: 0 -20px;
            }

            .steps-row {
              overflow-x: auto;
              scrollbar-width: none;
              -webkit-overflow-scrolling: touch;
              padding: 14px 20px 16px;
              gap: 14px;
              scroll-snap-type: x mandatory;
              flex-wrap: nowrap;
            }

            .steps-row::before { display: none; }
            .steps-row::-webkit-scrollbar { display: none; }

            .step {
              flex: 0 0 auto;
              width: 200px;
              scroll-snap-align: start;
              background: #F5F4F0;
              border-radius: 10px;
              padding: 24px 16px 20px;
            }

            /* Right fade */
            .scroll-fade-right {
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 16px;
              width: 80px;
              pointer-events: none;
              z-index: 2;
              background: linear-gradient(to right, transparent, #fff 95%);
              transition: opacity 0.3s ease;
            }

            .scroll-fade-right.hidden { opacity: 0; }

            /* Right arrow */
            .scroll-arrow-right {
              display: flex;
              position: absolute;
              top: 50%;
              right: 12px;
              transform: translateY(-70%);
              width: 24px;
              height: 24px;
              background: #ff6218;
              border-radius: 50%;
              border: none;
              align-items: center;
              justify-content: center;
              z-index: 3;
              cursor: pointer;
              box-shadow: 0 3px 10px rgba(255, 98, 24, 0.4);
              transition: opacity 0.3s ease, background 0.2s ease;
              animation: nudge-right 1.8s ease-in-out infinite;
            }

            .scroll-arrow-right:hover {
              background: #c94e10;
              animation: none;
            }

            .scroll-arrow-right.hidden {
              opacity: 0;
              pointer-events: none;
            }

            .scroll-arrow-right svg { width: 13px; height: 13px; }

            @keyframes nudge-right {
              0%, 100% { transform: translateY(-70%) translateX(0); }
              50%       { transform: translateY(-70%) translateX(3px); }
            }
          }

          @media (min-width: 769px) and (max-width: 960px) {
            .process-wrap { padding: 48px 32px 56px; }
            .step-title { font-size: 13px; }
            .step-desc { font-size: 11px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="process-wrap">
      <p class="eyebrow">Our Process</p>
      <h2>How It Works</h2>
      <div class="underline-accent"></div>
      <div class="timeline-outer" id="timelineOuter">
      <div class="steps-row" id="stepsRow">
      <div class="step">
      <div class="step-num">1</div>
      <div class="step-title">Book Online or Call</div>
      <p class="step-desc">No GP referral needed. Choose your nearest clinic location and time.</p>
      </div>
      <div class="step">
      <div class="step-num">2</div>
      <div class="step-title">Initial Assessment</div>
      <p class="step-desc">Thorough history, movement tests &amp; root-cause diagnosis.</p>
      </div>
      <div class="step">
      <div class="step-num">3</div>
      <div class="step-title">Treatment Plan</div>
      <p class="step-desc">Clear goals, realistic timeline &amp; home exercise program.</p>
      </div>
      <div class="step">
      <div class="step-num">4</div>
      <div class="step-title">Hands-On Treatment</div>
      <p class="step-desc">Manual therapy, needling, shockwave, or exercise rehab.</p>
      </div>
      <div class="step">
      <div class="step-num">5</div>
      <div class="step-title">Progress &amp; Discharge</div>
      <p class="step-desc">Reassessments &amp; long-term prevention strategies.</p>
      </div>
      </div>

      <div class="scroll-fade-right" id="fadeRight"></div>
      <button aria-label="Scroll right" class="scroll-arrow-right" id="arrowRight">
      <svg fill="none" viewbox="0 0 14 14"><path d="M5 7h4M7.5 5L9 7l-1.5 2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg>
      </button>
      </div>
      </div>
    `;

    const row        = shadow.getElementById('stepsRow');
      const fadeRight  = shadow.getElementById('fadeRight');
      const arrowRight = shadow.getElementById('arrowRight');
    
      function cardStep() {
        const step = row.querySelector('.step');
        const gap  = parseFloat(getComputedStyle(row).gap) || 14;
        return step ? step.offsetWidth + gap : 214;
      }
    
      arrowRight.addEventListener('click', () => {
        row.scrollBy({ left: cardStep(), behavior: 'smooth' });
      });
    
      row.addEventListener('touchstart', () => {
        arrowRight.classList.add('hidden');
        fadeRight.classList.add('hidden');
      }, { passive: true, once: true });
  }
}

customElements.define('ih-how-it-works', IhHowItWorks);
