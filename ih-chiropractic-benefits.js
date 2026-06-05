class IhChiropracticBenefits extends HTMLElement {
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

          .benefits-wrap {
                  background: #F5F4F0;
            width: 100%;
            padding: 40px 20px 40px 20px;
          }

          /* ── Header ── */
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
            background: #C0622A;
            margin-bottom: 20px;
            border-radius: 2px;
          }

          .intro-text {
            font-size: clamp(14px, 3vw, 15px);
            font-weight: 400;
            color: #555;
            line-height: 1.75;
            margin-bottom: 36px;
            max-width: 640px;
          }

          /* ── Scroll indicator wrapper (mobile) ── */
          .scroll-indicator-wrap {
            position: relative;
            margin: 0 -20px;
          }

          /* ── Fades ── */
          .scroll-fade-right,
          .scroll-fade-left {
            position: absolute;
            top: 0;
            bottom: 16px;
            width: 120px;
            pointer-events: none;
            z-index: 2;
            transition: opacity 0.35s ease;
          }

          .scroll-fade-right {
            right: 0;
            background: linear-gradient(to right, transparent, #F5F4F0 75%);
          }

          .scroll-fade-left {
            left: 0;
            background: linear-gradient(to left, transparent, #F5F4F0 75%);
          }

          .scroll-fade-right.hidden,
          .scroll-fade-left.hidden { opacity: 0; }

          /* Hide fades while actively scrolling */
          .scroll-indicator-wrap.scrolling .scroll-fade-right:not(.hidden),
          .scroll-indicator-wrap.scrolling .scroll-fade-left:not(.hidden) { opacity: 0; }

          /* ── Arrows ── */
          .scroll-arrow-right,
          .scroll-arrow-left {
            position: absolute;
            top: 50%;
            width: 36px;
            height: 36px;
            background: #ff6218;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            cursor: pointer;
            box-shadow: 0 3px 12px rgba(255, 98, 24, 0.4);
            transition: opacity 0.35s ease, background 0.2s ease, transform 0.2s ease;
          }

          .scroll-arrow-right {
            right: 14px;
            transform: translateY(-65%);
            animation: nudge-right 1.8s ease-in-out infinite;
          }

          .scroll-arrow-left {
            left: 14px;
            transform: translateY(-65%);
            animation: nudge-left 1.8s ease-in-out infinite;
          }

          .scroll-arrow-right:hover,
          .scroll-arrow-left:hover {
            background: #c94e10;
            animation: none;
            transform: translateY(-65%) scale(1.1);
          }

          .scroll-arrow-right.hidden,
          .scroll-arrow-left.hidden {
            opacity: 0;
            pointer-events: none;
          }

          .scroll-arrow-right svg,
          .scroll-arrow-left svg {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
          }

          @keyframes nudge-right {
            0%, 100% { transform: translateY(-65%) translateX(0); }
            50%       { transform: translateY(-65%) translateX(3px); }
          }

          @keyframes nudge-left {
            0%, 100% { transform: translateY(-65%) translateX(0); }
            50%       { transform: translateY(-65%) translateX(-3px); }
          }

          /* ── Scroll container (mobile) ── */
          .steps-scroll-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 0 20px 16px 20px;
          }

          .steps-scroll-wrap::-webkit-scrollbar { display: none; }

          /* ── Card list — flex row on mobile ── */
          .benefits-grid {
            display: flex;
            flex-direction: row;
            gap: 14px;
            width: max-content;
          }

          /* ── Cards ── */
          .benefit-card {
            width: 260px;
            flex-shrink: 0;
            background: #fff;
            border-radius: 4px;
            padding: 28px 24px;
            border-left: 3px solid #ff6218;
            transition: background 0.2s ease, box-shadow 0.2s ease;
          }

          .benefit-card:hover {
            background: #fff;
            box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
          }

          .card-number {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #C0622A;
            margin-bottom: 10px;
          }

          .card-title {
            font-size: clamp(15px, 3vw, 16px);
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            margin-bottom: 10px;
            letter-spacing: -0.2px;
          }

          .card-body {
            font-size: clamp(13px, 2.8vw, 14px);
            font-weight: 400;
            color: #666;
            line-height: 1.7;
          }

          /* ── Scroll hint dots ── */
          .scroll-hint {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-top: 16px;
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

          /* ── Desktop: revert to grid ── */
          @media (min-width: 768px) {

            .benefits-wrap { padding: 60px 48px 60px 48px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
            .underline-accent { margin-bottom: 24px; }
            .intro-text { margin-bottom: 44px; }

            /* Kill the scroll mechanism */
            .scroll-indicator-wrap {
              margin: 0;
              position: static;
            }

            .steps-scroll-wrap {
              overflow: visible;
              padding: 0;
            }

            /* Switch to 2-column grid */
            .benefits-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              width: auto;
            }

            .benefit-card {
              width: auto;
              flex-shrink: unset;
            }

            /* Hide all scroll UI */
            .scroll-fade-right,
            .scroll-fade-left,
            .scroll-arrow-right,
            .scroll-arrow-left,
            .scroll-hint { display: none !important; }
          }

          /* ── 3-column grid ── */
          @media (min-width: 900px) {
            .benefits-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="benefits-wrap">
      <p class="eyebrow">Why Chiropractic Works</p>
      <h2>Benefits of Chiropractic Care</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">
          Chiropractic treatment offers a range of short and long-term benefits for a multitude of musculoskeletal conditions, as well as improving overall wellbeing and quality of life.
        </p>
      <div class="scroll-indicator-wrap" id="indicatorWrap">
      <div class="steps-scroll-wrap" id="stepsScroll">
      <div class="benefits-grid">
      <div class="benefit-card">
      <p class="card-number">01</p>
      <h3 class="card-title">Get rid of stubborn pain</h3>
      <p class="card-body">Regular sessions with a Sydney chiropractor can help to provide lasting relief from chronic pain in affected areas.</p>
      </div>
      <div class="benefit-card">
      <p class="card-number">02</p>
      <h3 class="card-title">Understand the root of the issue</h3>
      <p class="card-body">An expert chiropractor will not only provide treatment to address the issue, but help you gain a clear understanding of what is causing it, and how to avoid future occurrences and injuries.</p>
      </div>
      <div class="benefit-card">
      <p class="card-number">03</p>
      <h3 class="card-title">Gain increased mobility and flexibility</h3>
      <p class="card-body">Chiropractic treatment can help to gradually reduce stiffness and swelling, resulting in greater mobility and flexibility in joints and across the body.</p>
      </div>
      <div class="benefit-card">
      <p class="card-number">04</p>
      <h3 class="card-title">Reduce stress and recovery time</h3>
      <p class="card-body">Attending professional chiropractic treatment helps to reduce the stress involved with trying out remedies that don't work, while helping individuals to get back to full health sooner.</p>
      </div>
      <div class="benefit-card">
      <p class="card-number">05</p>
      <h3 class="card-title">Do the activities you want</h3>
      <p class="card-body">Regain the freedom to pursue activities without being hindered by pain, whether it's running, practising yoga, lifting weights, or simply sitting comfortably.</p>
      </div>
      <div class="benefit-card">
      <p class="card-number">06</p>
      <h3 class="card-title">Improve overall wellbeing</h3>
      <p class="card-body">Experience better health in body and mind as the musculoskeletal system is aligned to relieve pain and restore function.</p>
      </div>
      </div>
      </div>

      <div class="scroll-fade-left hidden" id="scrollFadeLeft"></div>
      <button aria-label="Scroll left" class="scroll-arrow-left hidden" id="scrollArrowLeft">
      <svg fill="none" viewbox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7H3M6.5 3.5L3 7l3.5 3.5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>

      <div class="scroll-fade-right" id="scrollFadeRight"></div>
      <button aria-label="Scroll right" class="scroll-arrow-right" id="scrollArrowRight">
      <svg fill="none" viewbox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>
      </div>
      <div class="scroll-hint">
      <div class="scroll-dot active"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      </div>
      </div>
    `;

    const scroller      = shadow.getElementById('stepsScroll');
      const fadeRight     = shadow.getElementById('scrollFadeRight');
      const fadeLeft      = shadow.getElementById('scrollFadeLeft');
      const arrowRight    = shadow.getElementById('scrollArrowRight');
      const arrowLeft     = shadow.getElementById('scrollArrowLeft');
      const indicatorWrap = shadow.getElementById('indicatorWrap');
    
      function isDesktop() {
        return window.innerWidth >= 768;
      }
    
      function getCardWidth() {
        const card = scroller.querySelector('.benefit-card');
        const gap  = parseFloat(getComputedStyle(scroller.querySelector('.benefits-grid')).gap) || 14;
        return card ? card.offsetWidth + gap : 274;
      }
    
      arrowRight.addEventListener('click', () => {
        scroller.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
      });
    
      arrowLeft.addEventListener('click', () => {
        scroller.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
      });
    
      function checkScroll() {
        if (isDesktop()) return;
        const atStart = scroller.scrollLeft <= 8;
        const atEnd   = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8;
        fadeLeft.classList.toggle('hidden', atStart);
        arrowLeft.classList.toggle('hidden', atStart);
        fadeRight.classList.toggle('hidden', atEnd);
        arrowRight.classList.toggle('hidden', atEnd);
      }
    
      let scrollTimer;
      scroller.addEventListener('scroll', () => {
        checkScroll();
        indicatorWrap.classList.add('scrolling');
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          indicatorWrap.classList.remove('scrolling');
        }, 400);
      }, { passive: true });
    
      window.addEventListener('resize', () => {
        if (isDesktop()) {
          fadeLeft.classList.add('hidden');
          arrowLeft.classList.add('hidden');
          fadeRight.classList.add('hidden');
          arrowRight.classList.add('hidden');
        } else {
          checkScroll();
        }
      });
    
      checkScroll();
  }
}

customElements.define('ih-chiropractic-benefits', IhChiropracticBenefits);
