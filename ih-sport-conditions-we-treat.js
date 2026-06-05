class IhSportConditionsWeTreat extends HTMLElement {
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

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1.5px solid #ff6218;
            border-radius: 100px;
            padding: 7px 16px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff6218;
            margin-bottom: 20px;
          }

          h2 {
            font-size: clamp(26px, 4vw, 38px);
            font-weight: 700;
            line-height: 1.15;
            color: #1a1a1a;
            letter-spacing: -0.5px;
            margin-bottom: 12px;
          }

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #ff6218;
            border-radius: 2px;
            margin-bottom: 18px;
          }

          .body-text {
            font-size: 14px;
            color: #555;
            line-height: 1.75;
            margin-bottom: 28px;
          }

          .body-text strong { color: #1a1a1a; font-weight: 600; }

          .cta-btn {
            display: inline-block;
            background: #ff6218;
            color: #fff;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 15px 28px;
            border-radius: 2px;
            transition: background 0.2s ease;
            cursor: pointer;
            border: none;
          }

          .cta-btn:hover { background: #c94e10; }

          .category-card {
            border-radius: 10px;
            overflow: hidden;
            background: #fff;
            text-decoration: none;
            color: inherit;
            display: block;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          }

          .category-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          }

          .card-header {
            background: #1e1e1e;
            padding: 14px 18px;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .card-icon { flex-shrink: 0; width: 28px; height: 28px; }
          .card-icon svg { width: 100%; height: 100%; }

          .card-title {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: #fff;
            line-height: 1.3;
          }

          .card-body { padding: 14px 18px 18px; }

          .checklist {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 9px;
          }

          .checklist li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            color: #333;
            line-height: 1.4;
          }

          .check-icon { flex-shrink: 0; width: 18px; height: 18px; }
          .check-icon svg { width: 100%; height: 100%; }

          .contact-banner {
            background: #fdf4ef;
            border-radius: 10px;
            padding: 18px 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .banner-text strong {
            display: block;
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 4px;
          }

          .banner-text p { font-size: 12px; color: #777; line-height: 1.5; }

          .banner-btn {
            flex-shrink: 0;
            background: #ff6218;
            color: #fff;
            text-decoration: none;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            padding: 13px 22px;
            border-radius: 4px;
            transition: background 0.2s ease;
            white-space: nowrap;
            cursor: pointer;
            border: none;
          }

          .banner-btn:hover { background: #c94e10; }

          /* ══════════════════════════════════════════════════
             DESKTOP (≥ 821px)
          ══════════════════════════════════════════════════ */
          @media (min-width: 821px) {

            .mobile-view { display: none; }

            .desktop-view {
                  background: #F5F4F0;
              display: grid;
              grid-template-columns: minmax(280px, 30%) 1fr;
              grid-template-rows: auto auto;
              column-gap: 48px;
              row-gap: 16px;
              padding: 60px 48px;
              align-items: start;
            }

            .col-left            { grid-column: 1; grid-row: 1 / 3; }
            .col-right           { grid-column: 2; grid-row: 1; }
            .contact-banner-wrap { grid-column: 2; grid-row: 2; }

            .conditions-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 14px;
            }
          }

          /* ══════════════════════════════════════════════════
             MOBILE (≤ 820px)
          ══════════════════════════════════════════════════ */
          @media (max-width: 820px) {

            .desktop-view { display: none; }

            .mobile-view {
              padding: 40px 0 0;
            }

            .mobile-header {
              padding: 0 20px 24px;
            }

            .carousel-section {
              position: relative;
            }

            .carousel {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              gap: 14px;
              padding: 4px 0 20px 20px;
              scroll-padding-left: 20px;
            }

            .carousel::-webkit-scrollbar { display: none; }

            .carousel .category-card {
              flex: 0 0 83%;
              max-width: 300px;
              scroll-snap-align: start;
            }

            .carousel::after {
              content: '';
              flex: 0 0 20px;
              display: block;
            }

            .arrow-prev,
            .arrow-next {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: #ff6218;
              border: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 3;
              box-shadow: 0 3px 10px rgba(255,98,24,0.4);
              opacity: 0;
              pointer-events: none;
              transition: background 0.2s ease, opacity 0.3s ease;
            }

            .carousel-section:hover .arrow-prev:not(.hidden),
            .carousel-section:hover .arrow-next:not(.hidden) {
              opacity: 1;
              pointer-events: auto;
            }

            .arrow-prev:hover,
            .arrow-next:hover { background: #c94e10; }

            .arrow-prev { left: 6px; }
            .arrow-next { right: 6px; }

            .arrow-prev svg,
            .arrow-next svg { width: 13px; height: 13px; }

            .mobile-banner {
              padding: 16px 20px 32px;
            }

            .contact-banner {
              flex-direction: column;
              align-items: flex-start;
            }

            .banner-btn { width: 100%; text-align: center; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <svg aria-hidden="true" style="display:none" xmlns="http://www.w3.org/2000/svg">
      <symbol id="chk" viewbox="0 0 18 18">
      <circle cx="9" cy="9" fill="#ff6218" r="9"></circle>
      <path d="M5 9l3 3 5-5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path>
      </symbol>
      </svg>

      <div class="desktop-view">
      <div class="col-left">
      <div class="badge">
      <svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14">
      <circle cx="7" cy="7" r="6" stroke="#ff6218" stroke-width="1.4"></circle>
      <path d="M4 7l2 2 4-4" stroke="#ff6218" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"></path>
      </svg>
            Sports Injuries
          </div>
      <h2>Conditions<br/>We Treat</h2>
      <div class="underline-accent"></div>
      <p class="body-text">
            Our sports physiotherapists treat a <strong>wide range of sports injuries</strong>, from ligament tears and muscle strains to overuse conditions and post-surgical rehab. Whether you play at an elite or recreational level, we get you back to full performance.
          </p>
      <button class="cta-btn" data-url="https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ">Book an Assessment</button>
      </div>
      <div class="col-right">
      <div class="conditions-grid">

      <div class="category-card" data-url="/knee-pain-injury">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M10 4c0 5.5 1.5 8 4 10s4 4.5 4 10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M8 14h12" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path><circle cx="14" cy="14" r="4" stroke="#fff" stroke-width="1.5"></circle></svg></span>
      <span class="card-title">Knee Injuries</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>ACL &amp; MCL Injuries</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Meniscus Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Patella Tendinopathy</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Runner's Knee</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/shoulder-pain">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><circle cx="14" cy="9" r="4" stroke="#fff" stroke-width="1.7"></circle><path d="M6 24c0-5 3.6-8 8-8s8 3 8 8" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M19 13l4 2" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path></svg></span>
      <span class="card-title">Shoulder Injuries</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Rotator Cuff Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Shoulder Impingement</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>AC Joint Sprains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Labral Tears</li>
      </ul>
      </div>
      </div>

      <div class="category-card">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M8 22c2-4 2-8 6-8s4 4 6 8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path><path d="M11 14c0-4 1.5-7 3-10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M17 14c0-4-1.5-7-3-10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M10 10h8" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Muscle Strains</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Calf Strains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Hamstring Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Quad &amp; Hip Flexor Strains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Groin Injuries</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/low-back-pain">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M14 3v22" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><rect height="5" rx="2" stroke="#fff" stroke-width="1.5" width="10" x="9" y="6"></rect><rect height="5" rx="2" stroke="#fff" stroke-width="1.5" width="10" x="9" y="13"></rect><path d="M9 8.5H6M19 8.5h3M9 15.5H6M19 15.5h3" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Spine &amp; Back</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Lower Back Pain</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Disc Bulge &amp; Herniation</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Sciatica</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Spondylolysis</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/ankle-pain-injury">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M9 6c0 6 2 9 5 11s5 3 5 8" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M7 22h14" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M9 14c2 0 4 .5 5 2" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Foot, Ankle &amp; Shin</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Ankle Sprains &amp; Instability</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Achilles Tendinopathy</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Plantar Fasciitis</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Shin Splints</li>
      </ul>
      </div>
      </div>

      <div class="category-card">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M14 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="#fff" stroke-linejoin="round" stroke-width="1.6"></path></svg></span>
      <span class="card-title">Return to Sport</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Post-Surgical Rehab</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Overuse Injuries</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Sports Concussion</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Performance Rehab</li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      <div class="contact-banner-wrap">
      <div class="contact-banner">
      <div class="banner-text">
      <strong>Not sure if we treat your condition?</strong>
      <p>Our sports physios treat a wide range of injuries and conditions. Call us to find out how we can help.</p>
      </div>
      <button class="banner-btn" data-url="https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ">Contact Us →</button>
      </div>
      </div>
      </div>

      <div class="mobile-view">
      <div class="mobile-header">
      <div class="badge">
      <svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14">
      <circle cx="7" cy="7" r="6" stroke="#ff6218" stroke-width="1.4"></circle>
      <path d="M4 7l2 2 4-4" stroke="#ff6218" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"></path>
      </svg>
            Sports Injuries
          </div>
      <h2>Conditions<br/>We Treat</h2>
      <div class="underline-accent"></div>
      <p class="body-text">
            Our sports physiotherapists treat a <strong>wide range of sports injuries</strong>, from ligament tears and muscle strains to overuse conditions and post-surgical rehab. Whether you play at an elite or recreational level, we get you back to full performance.
          </p>
      <button class="cta-btn" data-url="https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ">Book an Assessment</button>
      </div>
      <div class="carousel-section">
      <div class="carousel" id="carousel">

      <div class="category-card" data-url="/knee-pain-injury">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M10 4c0 5.5 1.5 8 4 10s4 4.5 4 10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M8 14h12" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path><circle cx="14" cy="14" r="4" stroke="#fff" stroke-width="1.5"></circle></svg></span>
      <span class="card-title">Knee Injuries</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>ACL &amp; MCL Injuries</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Meniscus Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Patella Tendinopathy</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Runner's Knee</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/shoulder-pain">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><circle cx="14" cy="9" r="4" stroke="#fff" stroke-width="1.7"></circle><path d="M6 24c0-5 3.6-8 8-8s8 3 8 8" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M19 13l4 2" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path></svg></span>
      <span class="card-title">Shoulder Injuries</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Rotator Cuff Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Shoulder Impingement</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>AC Joint Sprains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Labral Tears</li>
      </ul>
      </div>
      </div>

      <div class="category-card">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M8 22c2-4 2-8 6-8s4 4 6 8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"></path><path d="M11 14c0-4 1.5-7 3-10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M17 14c0-4-1.5-7-3-10" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M10 10h8" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Muscle Strains</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Calf Strains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Hamstring Tears</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Quad &amp; Hip Flexor Strains</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Groin Injuries</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/muscular-low-back-pain">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M14 3v22" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><rect height="5" rx="2" stroke="#fff" stroke-width="1.5" width="10" x="9" y="6"></rect><rect height="5" rx="2" stroke="#fff" stroke-width="1.5" width="10" x="9" y="13"></rect><path d="M9 8.5H6M19 8.5h3M9 15.5H6M19 15.5h3" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Spine &amp; Back</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Lower Back Pain</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Disc Bulge &amp; Herniation</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Sciatica</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Spondylolysis</li>
      </ul>
      </div>
      </div>

      <div class="category-card" data-url="/hip-pain-injury">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M9 6c0 6 2 9 5 11s5 3 5 8" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M7 22h14" stroke="#fff" stroke-linecap="round" stroke-width="1.7"></path><path d="M9 14c2 0 4 .5 5 2" stroke="#fff" stroke-linecap="round" stroke-width="1.5"></path></svg></span>
      <span class="card-title">Foot, Ankle &amp; Shin</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Ankle Sprains &amp; Instability</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Achilles Tendinopathy</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Plantar Fasciitis</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Shin Splints</li>
      </ul>
      </div>
      </div>

      <div class="category-card">
      <div class="card-header">
      <span aria-hidden="true" class="card-icon"><svg fill="none" viewbox="0 0 28 28"><path d="M14 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="#fff" stroke-linejoin="round" stroke-width="1.6"></path></svg></span>
      <span class="card-title">Return to Sport</span>
      </div>
      <div class="card-body">
      <ul class="checklist">
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Post-Surgical Rehab</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Overuse Injuries</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Sports Concussion</li>
      <li><span class="check-icon"><svg aria-hidden="true"><use href="#chk"></use></svg></span>Performance Rehab</li>
      </ul>
      </div>
      </div>
      </div>
      <button aria-label="Previous" class="arrow-prev" id="arrowPrev">
      <svg fill="none" viewbox="0 0 14 14"><path d="M9 7H5M6.5 5L5 7l1.5 2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg>
      </button>
      <button aria-label="Next" class="arrow-next" id="arrowNext">
      <svg fill="none" viewbox="0 0 14 14"><path d="M5 7h4M7.5 5L9 7l-1.5 2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></path></svg>
      </button>
      </div>
      <div class="mobile-banner">
      <div class="contact-banner">
      <div class="banner-text">
      <strong>Not sure if we treat your condition?</strong>
      <p>Our sports physios treat a wide range of injuries and conditions. Call us to find out how we can help.</p>
      </div>
      <button class="banner-btn" data-url="https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ">Contact Us →</button>
      </div>
      </div>
      </div>
    `;

    shadow.querySelectorAll('[data-url]:not(.article-card)').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const url = el.dataset.url;
        if (url) {
          this.dispatchEvent(new CustomEvent('navigate', {
            detail: { url },
            bubbles: true
          }));
        }
      });
    });

    const carousel  = shadow.getElementById('carousel');
      const arrowPrev = shadow.getElementById('arrowPrev');
      const arrowNext = shadow.getElementById('arrowNext');
    
      function cardStep() {
        const card = carousel.querySelector('.category-card');
        const gap  = parseFloat(getComputedStyle(carousel).gap) || 14;
        return card ? card.offsetWidth + gap : 260;
      }
    
      function updateArrows() {
        const atStart = carousel.scrollLeft < 10;
        const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;
        arrowPrev.classList.toggle('hidden', atStart);
        arrowNext.classList.toggle('hidden', atEnd);
      }
    
      arrowNext.addEventListener('click', () => {
        carousel.scrollBy({ left: cardStep(), behavior: 'smooth' });
      });
    
      arrowPrev.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardStep(), behavior: 'smooth' });
      });
    
      carousel.addEventListener('scroll', updateArrows);
      updateArrows();
  }
}

customElements.define('ih-sport-conditions-we-treat', IhSportConditionsWeTreat);
