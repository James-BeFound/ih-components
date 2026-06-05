class IhNorthSydneyClinicDetails extends HTMLElement {
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
                  background: transparent; width: 100%; padding: 64px 24px 56px; }

          /* ── Header ───────────────────────────────────────── */
          .eyebrow {
            font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
            text-transform: uppercase; color: #ff6218; margin-bottom: 14px;
          }

          h2 {
            font-size: clamp(24px, 5vw, 36px); font-weight: 700;
            line-height: 1.15; color: #1a1a1a; margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px; height: 3px; background: #ff6218;
            border-radius: 2px; margin-bottom: 18px;
          }

          .intro-text {
            font-size: clamp(13px, 2.5vw, 15px); color: #666;
            line-height: 1.7; margin-bottom: 36px; max-width: 660px;
          }

          .intro-text strong { color: #1a1a1a; font-weight: 600; }

          /* ── Accordion card ───────────────────────────────── */
          .acc-card {
            border: 1.5px solid #e8e6e0;
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
          }

          .acc-header {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 24px;
            cursor: pointer;
            user-select: none;
          }

          .acc-header:hover { background: #fafaf8; }

          .acc-badge {
            flex-shrink: 0;
            width: 36px; height: 36px;
            background: #ff6218; border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            font-size: 15px; font-weight: 700; color: #fff;
          }

          .acc-meta { flex: 1; min-width: 0; }

          .acc-meta h3 {
            font-size: 16px; font-weight: 700; color: #1a1a1a;
            margin-bottom: 4px; line-height: 1.2;
          }

          .acc-address {
            font-size: 12px; color: #888; display: flex;
            align-items: center; gap: 4px; flex-wrap: wrap;
          }

          .pin-icon {
            flex-shrink: 0; width: 11px; height: 11px;
            fill: #ff6218;
          }

          .acc-toggle {
            flex-shrink: 0; background: none; border: none;
            cursor: pointer; padding: 4px; color: #ff6218;
            font-size: 14px; line-height: 1;
            transition: transform 0.25s ease;
          }

          .acc-toggle.open { transform: rotate(0deg); }
          .acc-toggle.closed { transform: rotate(180deg); }

          .acc-divider {
            height: 1px; background: #eeece8;
            margin: 0 24px;
          }

          .acc-body {
            overflow: hidden;
            max-height: 1000px;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            opacity: 1;
          }

          .acc-body.collapsed {
            max-height: 0;
            opacity: 0;
          }

          /* 3-column content grid */
          .acc-cols {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
            padding: 28px 24px 32px;
          }

          .acc-col {
            padding: 0 24px 0 0;
            border-right: 1px solid #eeece8;
          }

          .acc-col:last-child {
            border-right: none;
            padding-right: 0;
            padding-left: 24px;
            display: flex;
            flex-direction: column;
          }

          .acc-col:first-child { padding-left: 0; }

          .acc-col:nth-child(2) { padding-left: 24px; }

          .col-label {
            font-size: 10px; font-weight: 700; letter-spacing: 2px;
            text-transform: uppercase; color: #ff6218; margin-bottom: 14px;
          }

          .addr-block { margin-bottom: 14px; }

          .addr-block p {
            font-size: 13px; color: #2d2d2d; line-height: 1.7;
          }

          .hours-row {
            display: flex; justify-content: space-between;
            font-size: 13px; line-height: 1.7;
            border-bottom: 1px solid #f0ede8; padding: 3px 0;
          }

          .hours-row .day { color: #2d2d2d; font-weight: 500; }
          .hours-row .time { color: #555; }
          .hours-row .closed { color: #bbb; }

          .contact-line {
            display: flex; align-items: center; gap: 7px;
            font-size: 13px; color: #555; margin-top: 4px; line-height: 1.6;
          }

          .contact-line svg { flex-shrink: 0; width: 13px; height: 13px; }
          .contact-line a { color: #555; text-decoration: none; }
          .contact-line a:hover { color: #ff6218; }

          .transport-item {
            display: flex; align-items: flex-start;
            gap: 10px; margin-bottom: 10px;
          }

          .transport-item svg { flex-shrink: 0; width: 18px; height: 18px; margin-top: 1px; }

          .transport-item p {
            font-size: 13px; color: #2d2d2d; line-height: 1.6;
          }

          .transport-item p span { color: #888; display: block; font-size: 12px; }

          .transport-note {
            font-size: 12px; color: #888; line-height: 1.65;
            margin-top: 12px; padding-top: 12px;
            border-top: 1px solid #f0ede8;
          }

          .services-tags {
            display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;
          }

          .tag {
            font-size: 11px; font-weight: 500; color: #555;
            background: #F5F4F0; border-radius: 5px;
            padding: 4px 9px; white-space: nowrap;
          }

          .booking-note {
            font-size: 12px; color: #888; line-height: 1.65;
            margin-bottom: 18px; flex: 1;
          }

          .cta-btn {
            display: inline-flex; align-items: center; gap: 6px;
            background: #ff6218; color: #fff;
            font-family: 'Inter', sans-serif; font-size: 12px;
            font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
            text-decoration: none; padding: 14px 20px; border-radius: 7px;
            border: none; cursor: pointer; align-self: flex-start;
            transition: background 0.2s;
            white-space: nowrap;
          }

          .cta-btn:hover { background: #e0541a; }

          /* ── Mobile ────────────────────────────────────────── */
          @media (max-width: 767px) {
            .section-wrap { padding: 48px 16px 48px; }

            .acc-cols {
              grid-template-columns: 1fr;
              gap: 28px;
              padding: 24px 20px 28px;
            }

            .acc-col {
              padding: 0 !important;
              border-right: none;
              border-bottom: 1px solid #eeece8;
              padding-bottom: 24px !important;
            }

            .acc-col:last-child {
              border-bottom: none;
              padding-bottom: 0 !important;
            }

            .acc-header { padding: 18px 20px; }
            .acc-divider { margin: 0 20px; }
          }

          @media (min-width: 768px) {
            .section-wrap { padding: 72px 48px 64px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="section-wrap">
      <p class="eyebrow">Clinic Details</p>
      <h2>Everything You Need to Know About Our North Sydney Clinic</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">
          Full address, transport links, <strong>physiotherapy and chiropractic services</strong>, and direct booking. Everything you need before your first visit.
        </p>
      <div class="acc-card">
      <div aria-controls="acc-body" aria-expanded="true" class="acc-header" id="acc-header" role="button">
      <div class="acc-badge">1</div>
      <div class="acc-meta">
      <h3>North Sydney Physiotherapy &amp; Chiropractic Clinic</h3>
      <p class="acc-address">
      <svg class="pin-icon" viewbox="0 0 12 16"><path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                107 Walker Street, North Sydney NSW 2060  ·  Mon–Sat
              </p>
      </div>
      <button aria-label="Toggle clinic details" class="acc-toggle open" id="acc-toggle">▲</button>
      </div>
      <div class="acc-divider"></div>
      <div class="acc-body" id="acc-body">
      <div class="acc-cols">

      <div class="acc-col">
      <p class="col-label">Address &amp; Hours</p>
      <div class="addr-block">
      <p>Suite 303, Level 3<br/>107 Walker Street<br/>North Sydney NSW 2060</p>
      </div>
      <div style="margin-bottom:14px;">
      <div class="hours-row"><span class="day">Mon – Thu</span><span class="time">8am – 7pm</span></div>
      <div class="hours-row"><span class="day">Friday</span><span class="time">8am – 6pm</span></div>
      <div class="hours-row"><span class="day">Saturday</span><span class="time">8am – 2pm</span></div>
      <div class="hours-row" style="border-bottom:none;"><span class="day">Sunday</span><span class="closed">Closed</span></div>
      </div>
      <div class="contact-line">
      <svg fill="none" viewbox="0 0 14 14"><path d="M2 1h3l1 3-1.5 1.5A9 9 0 0 0 8 9l1.5-1.5 3 1v3a1 1 0 0 1-1 1C5.4 13 1 8.6 1 3a1 1 0 0 1 1-2z" fill="#ccc"></path></svg>
      <div data-url="tel:0294122222">(02) 9412 2222</div>
      </div>
      <div class="contact-line">
      <svg fill="none" viewbox="0 0 14 14"><rect height="8" rx="1.5" stroke="#ccc" stroke-width="1.2" width="12" x="1" y="3"></rect><path d="M1 4l6 4 6-4" stroke="#ccc" stroke-linecap="round" stroke-width="1.2"></path></svg>
      <div data-url="mailto:reception@infinitehealthgroup.com.au">reception@infinitehealthgroup.com.au</div>
      </div>
      </div>

      <div class="acc-col">
      <p class="col-label">Getting Here</p>
      <div class="transport-item">
      <svg fill="none" viewbox="0 0 18 18">
      <rect fill="#ff6218" height="14" opacity=".15" rx="3" width="12" x="3" y="2"></rect>
      <rect height="14" rx="3" stroke="#ff6218" stroke-width="1.3" width="12" x="3" y="2"></rect>
      <rect fill="#ff6218" height="4" opacity=".5" rx="1" width="6" x="6" y="5"></rect>
      <circle cx="6.5" cy="13" fill="#ff6218" r="1"></circle>
      <circle cx="11.5" cy="13" fill="#ff6218" r="1"></circle>
      </svg>
      <p>
      <strong>Victoria Cross Metro Station</strong>
      <span>2-minute walk</span>
      </p>
      </div>
      <div class="transport-item">
      <svg fill="none" viewbox="0 0 18 18">
      <rect fill="#ff6218" height="14" opacity=".15" rx="3" width="12" x="3" y="2"></rect>
      <rect height="14" rx="3" stroke="#ff6218" stroke-width="1.3" width="12" x="3" y="2"></rect>
      <rect fill="#ff6218" height="4" opacity=".5" rx="1" width="6" x="6" y="5"></rect>
      <circle cx="6.5" cy="13" fill="#ff6218" r="1"></circle>
      <circle cx="11.5" cy="13" fill="#ff6218" r="1"></circle>
      </svg>
      <p>
      <strong>North Sydney Train Station</strong>
      <span>6-minute walk</span>
      </p>
      </div>
      <p class="transport-note">
                  1 hour free parking at Greenwood Plaza. Paid street parking available on Walker Street and Little Walker Street.
                </p>
      </div>

      <div class="acc-col">
      <p class="col-label">Services &amp; Booking</p>
      <div class="services-tags">
      <span class="tag">Physiotherapy</span>
      <span class="tag">Sports Physio</span>
      <span class="tag">Chiropractic</span>
      <span class="tag">Sports Chiro</span>
      <span class="tag">Dry Needling</span>
      <span class="tag">Remedial Massage</span>
      <span class="tag">Exercise Rehab</span>
      <span class="tag">Cupping</span>
      <span class="tag">WorkCover</span>
      <span class="tag">NDIS</span>
      <span class="tag">Telehealth</span>
      </div>
      <p class="booking-note">
                  No referral required. All major health funds accepted via HICAPS. Medicare available with a GP referral. Book online 24/7 or call us directly.
                </p>
      <button class="cta-btn">Book at North Sydney →</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ?location=7' },
        bubbles: true
      }));
    });

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

    const header = shadow.getElementById('acc-header');
      const body   = shadow.getElementById('acc-body');
      const toggle = shadow.getElementById('acc-toggle');
    
      header.addEventListener('click', () => {
        const isOpen = !body.classList.contains('collapsed');
        body.classList.toggle('collapsed', isOpen);
        toggle.classList.toggle('open',   !isOpen);
        toggle.classList.toggle('closed',  isOpen);
        header.setAttribute('aria-expanded', String(!isOpen));
      });
    
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

customElements.define('ih-north-sydney-clinic-details', IhNorthSydneyClinicDetails);
