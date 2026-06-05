class IhRemedialMassageConditions extends HTMLElement {
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

          .section-wrap {
                  background: #F5F4F0;
            padding: 48px 24px 40px;
            width: 100%;
          }

          .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #ff6218;
            margin-bottom: 12px;
          }

          h2 {
            font-size: clamp(26px, 5vw, 40px);
            font-weight: 700;
            line-height: 1.15;
            color: #1a1a1a;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #ff6218;
            border-radius: 2px;
            margin-bottom: 16px;
          }

          .subtitle {
            font-size: clamp(14px, 2vw, 16px);
            color: #555;
            line-height: 1.65;
            margin-bottom: 32px;
            max-width: 560px;
          }

          /* ── Carousel ─────────────────────────────────── */

          .carousel-outer {
            margin: 0 -24px;
            position: relative;
          }

          .carousel-track {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 4px 24px 24px;
            scroll-snap-type: x mandatory;
          }

          .carousel-track::-webkit-scrollbar { display: none; }

          /* ── Service card ─────────────────────────────── */

          .service-card {
            flex-shrink: 0;
            width: 260px;
            background: #fff;
            border-radius: 4px;
            border-top: 3px solid #ff6218;
            padding: 24px 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: inherit;
            scroll-snap-align: start;
            transition: box-shadow 0.2s ease, background 0.2s ease;
          }

          .service-card:hover {
            box-shadow: 0 6px 24px rgba(255, 98, 24, 0.1);
            background: #fdfcfa;
          }

          .card-icon {
            width: 34px;
            height: 34px;
            color: #ff6218;
            flex-shrink: 0;
          }

          .card-title {
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            letter-spacing: -0.1px;
          }

          .card-body {
            font-size: 13px;
            color: #666;
            line-height: 1.65;
            flex: 1;
          }

          /* ── Right fade ───────────────────────────────── */

          .fade-right {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 24px;
            width: 100px;
            background: linear-gradient(to right, transparent, #F5F4F0 80%);
            pointer-events: none;
            z-index: 2;
            transition: opacity 0.3s ease;
          }

          /* ── Navigation ───────────────────────────────── */

          .carousel-nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: 4px;
          }

          .nav-btn {
            width: 44px;
            height: 44px;
            border: 2px solid #ff6218;
            background: transparent;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #ff6218;
            transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
            flex-shrink: 0;
          }

          .nav-btn svg {
            width: 16px;
            height: 16px;
          }

          .nav-btn:hover:not(:disabled) {
            background: #ff6218;
            color: #fff;
          }

          .nav-btn:disabled {
            border-color: #d1d5db;
            color: #d1d5db;
            cursor: default;
          }

          .nav-counter {
            font-size: 13px;
            font-weight: 500;
            color: #555;
            min-width: 72px;
            text-align: center;
            letter-spacing: 0.2px;
          }

          /* ── Responsive ───────────────────────────────── */

          @media (min-width: 768px) {
            .section-wrap { padding: 64px 48px 48px; }
            .carousel-outer { margin: 0 -48px; }
            .carousel-track { padding: 4px 48px 24px; gap: 20px; }
            .service-card { width: 280px; }
          }

          @media (max-width: 400px) {
            .service-card { width: calc(100vw - 72px); }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="section-wrap">
      <p class="eyebrow">What We Treat</p>
      <h2>What Remedial Massage Can Help With</h2>
      <div class="underline-accent"></div>
      <p class="subtitle">Delivered by Kevin Jensen at our North Sydney and Chatswood clinics, remedial massage targets the root cause of muscle pain — not just the symptoms.</p>
      <div class="carousel-outer">
      <div class="carousel-track" id="carouselTrack">

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <path d="M17 5v24" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
      <path d="M13 9h8M12 14h10M13 19h8M14 24h6" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Back &amp; Neck Pain</div>
      <div class="card-body">Targeted deep-tissue work to release chronic muscle tension, restore mobility, and ease pain along the spine and neck.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <circle cx="17" cy="9" r="3.5" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M7 22h5l2-5 4 8 3-6 3 3h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Sports Recovery &amp; Performance</div>
      <div class="card-body">Accelerates muscle recovery after training or competition, reduces delayed onset soreness, and prepares the body for peak performance.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <path d="M7 19c0-2.8 2-5 5-5h5c2.2 0 4 1.7 4 4v2c0 2.8-2.2 5-5 5h-4c-2.8 0-5-2.2-5-5v-1z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"></path>
      <path d="M12 14v-4a2 2 0 0 1 4 0v4" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M16 14V9a2 2 0 0 1 4 0v6" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Muscle Tension &amp; Trigger Points</div>
      <div class="card-body">Precise pressure applied to tight bands and trigger points to break the pain cycle and restore normal muscle function.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <circle cx="17" cy="13" r="7" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M17 20v4" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M14 11.5c0-1.7 1.3-3 3-3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></path>
      </svg>
      <div class="card-title">Headaches &amp; Migraines</div>
      <div class="card-body">Massage of the neck, shoulders, and upper back can significantly reduce the frequency and severity of tension headaches and migraines.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <circle cx="17" cy="9" r="4" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M6 24c0-5 3.6-8 8-8h6c4.4 0 8 3 8 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M21 13l4 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Shoulder &amp; Upper Back Pain</div>
      <div class="card-body">Addresses the muscle imbalances and postural patterns contributing to shoulder tightness and persistent upper back discomfort.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <path d="M14 4c-2.5 0-4.5 2-4.5 4.5v7.5L7 23h5l2-4 2 4h5l-2.5-7V8.5C18.5 6 16.5 4 14 4z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.6"></path>
      <path d="M14 23v6" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Sciatica &amp; Referred Pain</div>
      <div class="card-body">Soft tissue release in the glutes, piriformis, and lower back to reduce pressure on the sciatic nerve and ease referred leg pain.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <path d="M17 5v24" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M10 12l7-3 7 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      <path d="M10 20l7 3 7-3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Postural Correction</div>
      <div class="card-body">Identifies and treats the muscle groups contributing to poor posture, rounded shoulders, and forward head position.</div>
      </div>

      <div class="service-card">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34">
      <path d="M19 5L12 19h8L14 30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
      </svg>
      <div class="card-title">Injury Rehabilitation</div>
      <div class="card-body">Supports recovery from musculoskeletal injuries by improving circulation, reducing scar tissue formation, and restoring tissue mobility.</div>
      </div>
      </div>
      <div class="fade-right" id="fadeRight"></div>
      </div>
      <div class="carousel-nav">
      <button aria-label="Previous" class="nav-btn" disabled="" id="navPrev">
      <svg fill="none" viewbox="0 0 16 16">
      <path d="M10 3.5L6 8l4 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>
      <span class="nav-counter" id="navCounter">1 / 8</span>
      <button aria-label="Next" class="nav-btn" id="navNext">
      <svg fill="none" viewbox="0 0 16 16">
      <path d="M6 3.5L10 8l-4 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>
      </div>
      </div>
    `;

    const track   = shadow.getElementById('carouselTrack');
      const counter = shadow.getElementById('navCounter');
      const prevBtn = shadow.getElementById('navPrev');
      const nextBtn = shadow.getElementById('navNext');
      const fadeEl  = shadow.getElementById('fadeRight');
      const TOTAL   = 8;
    
      function cardStep() {
        const card = track.querySelector('.service-card');
        const gap  = parseFloat(getComputedStyle(track).gap) || 16;
        return card ? card.offsetWidth + gap : 276;
      }
    
      function currentIndex() {
        return Math.round(track.scrollLeft / cardStep());
      }
    
      function updateState() {
        const idx     = currentIndex();
        const atEnd   = track.scrollLeft + track.clientWidth >= track.scrollWidth - 6;
        const atStart = track.scrollLeft <= 6;
    
        counter.textContent  = `${idx + 1} / ${TOTAL}`;
        prevBtn.disabled     = atStart;
        nextBtn.disabled     = atEnd;
        fadeEl.style.opacity = atEnd ? '0' : '1';
      }
    
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: cardStep(), behavior: 'smooth' });
      });
    
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
      });
    
      track.addEventListener('scroll', updateState, { passive: true });
      window.addEventListener('resize', updateState);
      updateState();
  }
}

customElements.define('ih-remedial-massage-conditions', IhRemedialMassageConditions);
