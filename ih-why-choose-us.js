class IhWhyChooseUs extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          .section-wrap {
                  background: transparent;
            width: 100%;
            padding: 64px 24px 56px;
            background: transparent;
          }

          .eyebrow {
            font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
            text-transform: uppercase; color: #ff6218; margin-bottom: 14px;
          }

          h2 {
            font-size: clamp(26px, 5vw, 38px); font-weight: 700;
            line-height: 1.15; color: #1a1a1a; margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px; height: 3px; background: #ff6218;
            border-radius: 2px; margin-bottom: 40px;
          }

          /* ── Cards grid (desktop) ─────────────────────────── */
          .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .card {
            background: #F5F4F0;
            border-radius: 14px;
            padding: 28px 24px 30px;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .icon-wrap {
            width: 52px; height: 52px;
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }

          .icon-wrap svg { width: 26px; height: 26px; }

          .card h3 {
            font-size: 15px; font-weight: 700;
            color: #1a1a1a; line-height: 1.3;
          }

          .card p {
            font-size: 13px; color: #666;
            line-height: 1.65; flex: 1;
          }

          /* ── Dots (mobile only, hidden on desktop) ────────── */
          .dots-row {
            display: none;
            justify-content: center;
            gap: 8px;
            margin-top: 22px;
          }

          .dot {
            width: 8px; height: 8px; border-radius: 50%;
            background: #d8d6d0;
            cursor: pointer;
            transition: background 0.25s, transform 0.25s;
            border: none; padding: 0;
          }

          .dot.active {
            background: #ff6218;
            transform: scale(1.25);
          }

          /* ── Mobile carousel ──────────────────────────────── */
          @media (max-width: 767px) {
            .section-wrap { padding: 48px 0 48px; }

            h2, .eyebrow, .underline-accent { padding: 0 20px; }

            .cards-container {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              gap: 12px;
              padding: 4px 20px 8px;
            }

            .cards-container::-webkit-scrollbar { display: none; }

            .card {
              flex: 0 0 calc(100vw - 56px);
              scroll-snap-align: center;
            }

            .dots-row { display: flex; }
          }

          @media (min-width: 768px) {
            .section-wrap { padding: 72px 48px 64px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; }
            .card h3 { font-size: 16px; }
            .card p { font-size: 14px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="section-wrap">
      <p class="eyebrow">Why Infinite Health</p>
      <h2>Why Patients Choose Us Across Sydney</h2>
      <div class="underline-accent"></div>
      <div class="cards-container" id="carousel">

      <div class="card">
      <div class="icon-wrap" style="background:#FFE9E2;">
      <svg fill="none" viewbox="0 0 26 26">
      <path d="M13 2C9.13 2 6 5.13 6 9c0 5.57 7 15 7 15s7-9.43 7-15c0-3.87-3.13-7-7-7z" fill="#ff6218"></path>
      <circle cx="13" cy="9" fill="#fff" r="2.5"></circle>
      </svg>
      </div>
      <h3>7 Convenient Locations</h3>
      <p>Clinics across the North Shore, CBD, and surrounding suburbs. Always one near home, work, or school.</p>
      </div>

      <div class="card">
      <div class="icon-wrap" style="background:#E4EDFF;">
      <svg fill="none" viewbox="0 0 26 26">

      <rect fill="#5B7EF5" height="2.5" rx="1.25" width="20" x="3" y="22"></rect>

      <rect fill="#5B7EF5" height="15" rx="1.5" width="3" x="15" y="7"></rect>

      <line stroke="#5B7EF5" stroke-linecap="round" stroke-width="3" x1="16.5" x2="9.5" y1="8" y2="4"></line>

      <rect fill="#5B7EF5" height="5.5" rx="1.5" width="3" x="7.5" y="2"></rect>

      <rect fill="#5B7EF5" height="2" rx="1" width="9" x="7" y="14"></rect>

      <rect fill="#7B9EFF" height="4" rx="1.25" width="2.5" x="10" y="16"></rect>
      </svg>
      </div>
      <h3>Evidence-Based Treatment</h3>
      <p>Every treatment plan is grounded in the latest clinical research: care built on what actually works.</p>
      </div>

      <div class="card">
      <div class="icon-wrap" style="background:#FFF4E0;">
      <svg fill="none" viewbox="0 0 26 26">
      <path d="M13 3l2.47 5.01 5.53.8-4 3.9.94 5.51L13 15.77l-4.94 2.45.94-5.51-4-3.9 5.53-.8L13 3z" fill="none" stroke="#C9A84C" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </div>
      <h3>Hundreds of 5-Star Reviews Across Sydney</h3>
      <p>Trusted by thousands of patients. See why we're one of Sydney's highest rated physio clinics.</p>
      </div>

      <div class="card">
      <div class="icon-wrap" style="background:#E8F8EE;">
      <svg fill="none" viewbox="0 0 26 26">
      <rect fill="#3ABF7A" height="14" rx="3" width="22" x="2" y="7"></rect>
      <rect fill="#2EA366" height="4" width="22" x="2" y="11"></rect>
      <rect fill="#fff" height="2" rx="1" width="5" x="5" y="15"></rect>
      </svg>
      </div>
      <h3>All Funds, NDIS &amp; WorkCover</h3>
      <p>All major health funds with on-the-spot HICAPS. NDIS and WorkCover NSW approved at every location.</p>
      </div>

      <div class="card">
      <div class="icon-wrap" style="background:#E0F5F3;">
      <svg fill="none" viewbox="0 0 26 26">
      <rect fill="#3ABFB8" height="18" rx="3" width="22" x="2" y="4"></rect>
      <rect fill="#2EA3A0" height="6" rx="3" width="22" x="2" y="4"></rect>
      <line stroke="#2EA3A0" stroke-width="1.5" x1="2" x2="24" y1="14" y2="14"></line>
      <rect fill="#fff" height="2" opacity=".6" rx="1" width="4" x="5" y="7"></rect>
      <rect fill="#fff" height="2" rx="1" width="3" x="6" y="17"></rect>
      <rect fill="#fff" height="2" rx="1" width="3" x="11.5" y="17"></rect>
      <rect fill="#fff" height="2" rx="1" width="3" x="17" y="17"></rect>
      </svg>
      </div>
      <h3>Advanced Technology &amp; Treatment</h3>
      <p>Shockwave therapy, dry needling, exercise rehab, and the latest diagnostic tools at every clinic.</p>
      </div>

      <div class="card">
      <div class="icon-wrap" style="background:#E4F7EC;">
      <svg fill="none" viewbox="0 0 26 26">
      <rect fill="#3ABF7A" height="18" rx="3" width="20" x="3" y="5"></rect>
      <rect fill="#2EA366" height="6" rx="3" width="20" x="3" y="5"></rect>
      <rect fill="#2EA366" height="4" rx="1.25" width="2.5" x="8" y="3"></rect>
      <rect fill="#2EA366" height="4" rx="1.25" width="2.5" x="15.5" y="3"></rect>
      <path d="M9 17l2.5 2.5L17 14" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
      </svg>
      </div>
      <h3>Same-Day &amp; Flexible Appointments</h3>
      <p>Early morning, evening, and Saturday sessions. Book online 24/7: no waiting, no phone queues.</p>
      </div>
      </div>

      <div aria-label="Carousel position" class="dots-row" id="dots-row" role="tablist"></div>
      </div>
    `;

    const track  = shadow.getElementById('carousel');
      const dotsEl = shadow.getElementById('dots-row');
      const cards  = Array.from(track.children);
      const TOTAL  = cards.length;
      const DELAY  = 4000;
    
      let current   = 0;
      let autoTimer = null;
      let touching  = false;
    
      
      cards.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', `Slide ${i + 1}`);
        btn.addEventListener('click', () => { goTo(i); resetAuto(); });
        dotsEl.appendChild(btn);
      });
    
      const dots = Array.from(dotsEl.children);
    
      function setActiveDot(i) {
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
      }
    
      function goTo(n) {
        current = (n + TOTAL) % TOTAL;
        const cardW = cards[0].offsetWidth + 12; // width + gap
        track.scrollTo({ left: current * cardW, behavior: 'smooth' });
        setActiveDot(current);
      }
    
      
      let scrollTimer;
      track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          const cardW = cards[0].offsetWidth + 12;
          current = Math.round(track.scrollLeft / cardW);
          setActiveDot(current);
        }, 80);
      }, { passive: true });
    
      
      function isMobile() { return window.innerWidth < 768; }
    
      function startAuto() {
        clearInterval(autoTimer);
        if (!isMobile()) return;
        autoTimer = setInterval(() => {
          if (!touching) goTo(current + 1);
        }, DELAY);
      }
    
      function resetAuto() { startAuto(); }
    
      
      track.addEventListener('touchstart', () => { touching = true;  }, { passive: true });
      track.addEventListener('touchend',   () => {
        touching = false;
        resetAuto();
      }, { passive: true });
    
      
      window.addEventListener('resize', startAuto);
    
      startAuto();
    
      
      (function () {
        function syncHeight() {
          var h = document.documentElement.scrollHeight;
          if (window.Wix) window.Wix.setHeight(h);
        }
        if (window.ResizeObserver) new ResizeObserver(syncHeight).observe(document.body);
        window.addEventListener('load', syncHeight);
      })();
  }
}

customElements.define('ih-why-choose-us', IhWhyChooseUs);
