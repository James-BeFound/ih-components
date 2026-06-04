class IhNeckSymptoms extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .symptoms-wrap {
          width: 100%;
          padding: 40px 20px;
          background: #F5F4F0;
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
          font-size: clamp(24px, 5vw, 38px);
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

        .columns-scroll-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin: 0 -20px;
          padding: 0 20px 16px 20px;
          margin-bottom: 8px;
        }

        .columns-scroll-wrap::-webkit-scrollbar { display: none; }

        .columns-track {
          display: flex;
          flex-direction: row;
          gap: 16px;
          width: max-content;
        }

        .symptom-col {
          width: 300px;
          flex-shrink: 0;
          border-radius: 4px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .symptom-col.common {
          background: #fff;
          border-left: 3px solid #ff6218;
        }

        .symptom-col.urgent {
          background: #fff5f0;
          border-left: 3px solid #C0622A;
        }

        .col-heading {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .col-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .col-tag.common { color: #ff6218; }
        .col-tag.urgent { color: #C0622A; }

        .col-title {
          font-size: clamp(14px, 3vw, 16px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          letter-spacing: -0.2px;
        }

        .col-subtitle {
          font-size: clamp(12px, 2.8vw, 13px);
          font-weight: 400;
          color: #666;
          line-height: 1.5;
        }

        .col-divider {
          height: 1px;
          background: rgba(0,0,0,0.08);
        }

        .symptom-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .symptom-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(12px, 2.8vw, 13px);
          color: #333;
          line-height: 1.55;
        }

        .symptom-list li .dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 6px;
        }

        .common .symptom-list li .dot { background: #ff6218; }
        .urgent .symptom-list li .dot { background: #C0622A; }

        .scroll-hint {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 28px;
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

        .cta-block {
          background: #fff;
          border-left: 3px solid #ff6218;
          border-radius: 4px;
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cta-text {
          font-size: clamp(13px, 3vw, 14px);
          color: #444;
          line-height: 1.65;
        }

        .cta-btn {
          display: inline-block;
          background: #ff6218;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 2px;
          cursor: pointer;
          border: none;
          transition: background 0.2s ease;
          width: 100%;
          text-align: center;
        }

        .cta-btn:hover { background: #a3521f; }

        @media (min-width: 640px) {
          .symptoms-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .underline-accent { margin-bottom: 24px; }
          .intro-text { margin-bottom: 32px; }
        }

        @media (min-width: 680px) {
          .columns-scroll-wrap {
            overflow-x: visible;
            margin: 0;
            padding: 0;
            margin-bottom: 24px;
          }

          .columns-track {
            width: 100%;
            gap: 20px;
          }

          .symptom-col {
            width: 0;
            flex: 1;
            padding: 28px 24px;
          }

          .scroll-hint { display: none; }

          .cta-block {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .cta-btn {
            width: auto;
            white-space: nowrap;
            flex-shrink: 0;
          }
        }
      </style>

      <div class="symptoms-wrap">

        <p class="eyebrow">Know Your Symptoms</p>
        <h2>When to See a Physio: Know Your Symptoms</h2>
        <div class="underline-accent"></div>
        <p class="intro-text">
          Neck pain can range from a mild, nagging stiffness to a sudden and debilitating injury. Here's how to tell what you're dealing with and when to act.
        </p>

        <div class="columns-scroll-wrap" id="scrollWrap">
          <div class="columns-track">

            <div class="symptom-col common">
              <div class="col-heading">
                <span class="col-tag common">Common Symptoms</span>
                <h3 class="col-title">Common Neck Symptoms</h3>
                <p class="col-subtitle">These symptoms suggest you should book a physio assessment soon.</p>
              </div>
              <div class="col-divider"></div>
              <ul class="symptom-list">
                <li><span class="dot"></span>Dull ache or stiffness in the neck after prolonged sitting, screen use, or looking down</li>
                <li><span class="dot"></span>Sharp or grabbing pain when turning the head to one side</li>
                <li><span class="dot"></span>Neck that feels locked, blocked, or restricted through part of its range</li>
                <li><span class="dot"></span>Tension headaches originating from the base of the skull</li>
                <li><span class="dot"></span>Muscle tightness or spasm across the neck and upper shoulders</li>
                <li><span class="dot"></span>Neck pain that is worse in the morning and eases gradually with movement</li>
                <li><span class="dot"></span>Pain that has been present for more than 1 to 2 weeks without improvement</li>
              </ul>
            </div>

            <div class="symptom-col urgent">
              <div class="col-heading">
                <span class="col-tag urgent">Urgent Symptoms</span>
                <h3 class="col-title">Urgent Neck Symptoms</h3>
                <p class="col-subtitle">These symptoms require prompt assessment. Same-day appointments are available.</p>
              </div>
              <div class="col-divider"></div>
              <ul class="symptom-list">
                <li><span class="dot"></span>Sudden severe neck pain following a fall, collision, or whiplash-type impact</li>
                <li><span class="dot"></span>Pain, tingling, or numbness radiating into the arms, hands, or fingers</li>
                <li><span class="dot"></span>Weakness in the arms or hands, or difficulty gripping objects</li>
                <li><span class="dot"></span>Dizziness, difficulty with balance, or loss of coordination alongside neck pain</li>
                <li><span class="dot"></span>Severe headache of sudden onset combined with neck stiffness</li>
                <li><span class="dot"></span>Neck pain accompanied by fever, unexplained weight loss, or night sweats</li>
              </ul>
            </div>

          </div>
        </div>

        <div class="scroll-hint" id="scrollHint">
          <div class="scroll-dot active" data-index="0"></div>
          <div class="scroll-dot" data-index="1"></div>
        </div>

        <div class="cta-block">
          <p class="cta-text">Not sure which category you fall into? Book an assessment and let our neck physios work it out for you.</p>
          <button class="cta-btn" onclick="window.parent.postMessage({ url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' }, '*')">Book Now →</button>
        </div>

      </div>
    `;

    // Update active dot on scroll
    const scrollWrap = shadow.getElementById('scrollWrap');
    const dots = shadow.querySelectorAll('.scroll-dot');

    scrollWrap.addEventListener('scroll', () => {
      const cols = shadow.querySelectorAll('.symptom-col');
      const scrollLeft = scrollWrap.scrollLeft;
      const colWidth = cols[0] ? cols[0].offsetWidth + 16 : 316;
      const activeIndex = Math.round(scrollLeft / colWidth);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
      });
    }, { passive: true });
  }
}

customElements.define('ih-neck-symptoms', IhNeckSymptoms);
