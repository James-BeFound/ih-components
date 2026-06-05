class IhPhysiotherapyServices extends HTMLElement {
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
            cursor: pointer;
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

          .card-cta {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #ff6218;
            margin-top: 6px;
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
      <p class="eyebrow">What We Offer</p>
      <h2>Our Physiotherapy Services</h2>
      <div class="underline-accent"></div>
      <p class="subtitle">Comprehensive care across 10 specialist services, all under one roof.</p>
      <div class="carousel-outer">
      <div class="carousel-track" id="carouselTrack">

      <div class="service-card" onclick="navigate('/remedial-massage-therapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 19c0-2.8 2-5 5-5h5c2.2 0 4 1.7 4 4v2c0 2.8-2.2 5-5 5h-4c-2.8 0-5-2.2-5-5v-1z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"></path>
      <path d="M12 14v-4a2 2 0 0 1 4 0v4" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M16 14V9a2 2 0 0 1 4 0v6" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M20 15V11a2 2 0 0 1 4 0v7" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Remedial Massage</div>
      <div class="card-body">Targeted deep-tissue massage to relieve muscle tension, reduce pain, and support injury recovery.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/sport-physiotherapist')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="9" r="3.5" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M7 22h5l2-5 4 8 3-6 3 3h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Sports Physiotherapy</div>
      <div class="card-body">Specialised assessment and rehabilitation for sports injuries, from acute sprains to full return-to-sport programs.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/dry-needling')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="17" x2="17" y1="5" y2="29"></line>
      <path d="M14 7.5L17 4l3 3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      <ellipse cx="17" cy="13" rx="3.5" ry="1.5" stroke="currentColor" stroke-width="1.5"></ellipse>
      </svg>
      <div class="card-title">Dry Needling</div>
      <div class="card-body">Fine-needle technique that targets muscle trigger points to reduce pain, release tension, and restore movement.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/shockwave-therapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 5L12 19h8L14 30" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
      </svg>
      <div class="card-title">Shockwave Therapy</div>
      <div class="card-body">High-energy acoustic wave treatment for tendinopathy, calcification, and chronic soft tissue conditions.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/womens-health-physiotherapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="13" r="7" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M17 20v8M13 26h8" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Women's Health Physiotherapy</div>
      <div class="card-body">Pelvic floor assessment and treatment for pregnancy, postpartum recovery, and pelvic health conditions.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/chiropractic')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 5v24" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
      <path d="M13 9h8M12 14h10M13 19h8M14 24h6" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">Chiropractic</div>
      <div class="card-body">Spinal adjustment and joint mobilisation to correct alignment, relieve nerve compression, and reduce pain.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/workcover-physiotherapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <rect height="16" rx="2" stroke="currentColor" stroke-width="1.7" width="24" x="5" y="13"></rect>
      <path d="M11 13v-3a6 6 0 0 1 12 0v3" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M17 19v4M15 21h4" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      </svg>
      <div class="card-title">WorkCover Physiotherapy</div>
      <div class="card-body">Approved WorkCover NSW treatment and return-to-work rehabilitation for workplace injuries.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/ndis-physiotherapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="10" r="4" stroke="currentColor" stroke-width="1.7"></circle>
      <path d="M9 29c0-5 3.6-8 8-8s8 3 8 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M23 20l3 2.5-3 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      <div class="card-title">NDIS Physiotherapy</div>
      <div class="card-body">Registered NDIS provider delivering functional physiotherapy support for participants of all ages and abilities.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/cupping-therapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17c0-4.4 3.6-8 8-8s8 3.6 8 8v4H9v-4z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.7"></path>
      <path d="M7 21h20" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <path d="M11 21v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" stroke="currentColor" stroke-width="1.5"></path>
      </svg>
      <div class="card-title">Cupping Therapy</div>
      <div class="card-body">Myofascial decompression using suction cups to improve blood flow and release soft tissue restrictions.</div>
      <div class="card-cta">Learn More →</div>
      </div>

      <div class="service-card" onclick="navigate('/online-consultations-physiotherapy')">
      <svg aria-hidden="true" class="card-icon" fill="none" viewbox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <rect height="18" rx="2" stroke="currentColor" stroke-width="1.7" width="28" x="3" y="7"></rect>
      <path d="M11 25h12M17 25v2" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"></path>
      <circle cx="15" cy="16" r="3.5" stroke="currentColor" stroke-width="1.5"></circle>
      <path d="M20 13l4-2v10l-4-2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
      </svg>
      <div class="card-title">Online Consultations</div>
      <div class="card-body">Remote physiotherapy assessment and exercise prescription via secure video appointment, from anywhere.</div>
      <div class="card-cta">Learn More →</div>
      </div>
      </div>
      <div class="fade-right" id="fadeRight"></div>
      </div>
      <div class="carousel-nav">
      <button aria-label="Previous" class="nav-btn" disabled="" id="navPrev">
      <svg fill="none" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3.5L6 8l4 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>
      <span class="nav-counter" id="navCounter">1 / 10</span>
      <button aria-label="Next" class="nav-btn" id="navNext">
      <svg fill="none" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3.5L10 8l-4 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path>
      </svg>
      </button>
      </div>
      </div>
    `;
  }
}

customElements.define('ih-physiotherapy-services', IhPhysiotherapyServices);
