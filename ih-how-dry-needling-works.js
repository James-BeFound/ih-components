class IhHowDryNeedlingWorks extends HTMLElement {
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

          .process-wrap {
                  background: #F5F4F0;
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
            margin-bottom: 32px;
            max-width: 680px;
          }

          /* Scroll container — active on mobile */
          .steps-scroll-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -20px;
            padding: 0 20px 16px 20px;
          }

          .steps-scroll-wrap::-webkit-scrollbar { display: none; }

          /* Track — row on all sizes */
          .steps-list {
            display: flex;
            flex-direction: row;
            gap: 14px;
            width: max-content;
          }

          /* Card */
          .step-card {
            width: 260px;
            flex-shrink: 0;
            background: #fff;
            border-radius: 4px;
            padding: 24px 20px;
            border-left: 3px solid #ff6218;
            display: flex;
            flex-direction: column;
            gap: 14px;
            transition: background 0.2s ease, box-shadow 0.2s ease;
          }

          .step-card:hover {
            background: #fff;
            box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
          }

          .step-number {
            flex-shrink: 0;
            width: 38px;
            height: 38px;
            background: #ff6218;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1;
          }

          .step-title {
            font-size: 14px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
            letter-spacing: -0.2px;
          }

          .step-body {
            font-size: 13px;
            font-weight: 400;
            color: #666;
            line-height: 1.65;
          }

          /* Scroll hint dots — mobile only */
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

          /* Desktop: no scroll, 4 equal cards filling the row */
          @media (min-width: 768px) {
            .process-wrap { padding: 60px 48px 60px 48px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
            .underline-accent { margin-bottom: 24px; }
            .intro-text { margin-bottom: 40px; }

            .steps-scroll-wrap {
              overflow-x: visible;
              margin: 0;
              padding: 0;
            }

            .steps-list {
              width: 100%;
              gap: 20px;
            }

            .step-card {
              width: 0;
              flex: 1;
              padding: 28px 22px;
              gap: 16px;
            }

            .step-number {
              width: 42px;
              height: 42px;
              font-size: 16px;
            }

            .step-title { font-size: 15px; }
            .step-body { font-size: 13px; }

            .scroll-hint { display: none; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="process-wrap">
      <p class="eyebrow">Our Approach</p>
      <h2>How Dry Needling Works</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">
          Dry needling is a precise, evidence-based technique that targets myofascial trigger points to relieve pain, release muscle tension, and restore movement. Here is what to expect at your appointment.
        </p>
      <div class="steps-scroll-wrap">
      <div class="steps-list">
      <div class="step-card">
      <div class="step-number">1</div>
      <div>
      <h3 class="step-title">Trigger Point Assessment</h3>
      <p class="step-body">We map your movement patterns, identify areas of muscle tension, and locate the specific trigger points contributing to your pain before any needles are placed.</p>
      </div>
      </div>
      <div class="step-card">
      <div class="step-number">2</div>
      <div>
      <h3 class="step-title">Targeted Needle Placement</h3>
      <p class="step-body">Fine, sterile needles are inserted precisely into the trigger point. You may feel a brief local twitch response as the muscle releases — a sign the treatment is working.</p>
      </div>
      </div>
      <div class="step-card">
      <div class="step-number">3</div>
      <div>
      <h3 class="step-title">Muscle Release</h3>
      <p class="step-body">The needle stimulates blood flow, disrupts the pain cycle, and allows the muscle to fully relax. Most patients notice an immediate reduction in tension and improved range of movement.</p>
      </div>
      </div>
      <div class="step-card">
      <div class="step-number">4</div>
      <div>
      <h3 class="step-title">Ongoing Management</h3>
      <p class="step-body">We pair dry needling with targeted exercises and movement strategies to reinforce the results and prevent trigger points from returning.</p>
      </div>
      </div>
      </div>
      </div>
      <div class="scroll-hint">
      <div class="scroll-dot active"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      </div>
      </div>
    `;
  }
}

customElements.define('ih-how-dry-needling-works', IhHowDryNeedlingWorks);
