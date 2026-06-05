class IHAnkleSymptoms extends HTMLElement {
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

        .symptoms-wrap {
          width: 100%;
          padding: 40px 20px 40px 20px;
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
        }

        .scroll-dot:first-child {
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
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
          width: 100%;
          text-align: center;
        }

        .cta-btn:hover { background: #a3521f; }

        @media (min-width: 640px) {
          .symptoms-wrap { padding: 60px 48px 60px 48px; }
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
          Ankle pain can range from a nagging ache that builds over weeks to a sudden injury that stops you mid-stride. Here is how to tell what you are dealing with and when to act.
        </p>

        <div class="columns-scroll-wrap">
          <div class="columns-track">

            <div class="symptom-col common">
              <div class="col-heading">
                <span class="col-tag common">Common Symptoms</span>
                <h3 class="col-title">Common Ankle Symptoms</h3>
                <p class="col-subtitle">These symptoms suggest you should book a physio assessment soon.</p>
              </div>
              <div class="col-divider"></div>
              <ul class="symptom-list">
                <li><span class="dot"></span>Heel or arch pain that is worst with your first steps in the morning and eases after a few minutes of walking (plantar fasciitis)</li>
                <li><span class="dot"></span>Aching or burning along the shinbone that worsens during or after running or impact activity (shin splints)</li>
                <li><span class="dot"></span>Pain at the back of the heel or along the Achilles tendon, particularly in the morning or after prolonged activity</li>
                <li><span class="dot"></span>Outer ankle pain, weakness, or a feeling of instability after a previous sprain</li>
                <li><span class="dot"></span>Ankle swelling or stiffness after a sprain that has not fully settled within a few days</li>
                <li><span class="dot"></span>Ankle that gives way or feels unreliable on uneven ground</li>
                <li><span class="dot"></span>Pain that has been present for more than one to two weeks without improvement</li>
              </ul>
            </div>

            <div class="symptom-col urgent">
              <div class="col-heading">
                <span class="col-tag urgent">Urgent Symptoms</span>
                <h3 class="col-title">Urgent Ankle Symptoms</h3>
                <p class="col-subtitle">These symptoms require prompt assessment. Same-day appointments are available.</p>
              </div>
              <div class="col-divider"></div>
              <ul class="symptom-list">
                <li><span class="dot"></span>A pop or snap at the time of injury followed by immediate swelling and inability to weight-bear (possible ligament rupture or Achilles tear)</li>
                <li><span class="dot"></span>Sudden severe pain and inability to walk after a fall, twist, or direct impact (possible fracture)</li>
                <li><span class="dot"></span>Visible deformity, significant bruising, or bones that appear out of place following ankle trauma</li>
                <li><span class="dot"></span>Heel pain that is severe, constant, and not relieved by rest (possible stress fracture)</li>
                <li><span class="dot"></span>Numbness or tingling in the foot or toes following an acute ankle injury (possible nerve involvement)</li>
                <li><span class="dot"></span>Hot, red, and swollen ankle with no clear injury and accompanied by fever (possible infection or gout)</li>
              </ul>
            </div>

          </div>
        </div>

        <div class="scroll-hint">
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>

        <div class="cta-block">
          <p class="cta-text">Not sure which category you fall into? Book an assessment and let our ankle physios work it out for you.</p>
          <button class="cta-btn">Book Now →</button>
        </div>

      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' },
        bubbles: true
      }));
    });
  }
}

customElements.define('ih-ankle-symptoms', IHAnkleSymptoms);
