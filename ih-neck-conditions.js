class IhNeckConditions extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .conditions-wrap {
          width: 100%;
          padding: 40px 20px;
          background: #f5f4f0;
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
          margin-bottom: 28px;
          max-width: 680px;
        }

        .scroll-outer {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin: 0 -20px;
          padding: 0 20px 16px 20px;
          margin-bottom: 8px;
        }

        .scroll-outer::-webkit-scrollbar { display: none; }

        .conditions-grid {
          display: flex;
          flex-direction: row;
          gap: 14px;
          width: max-content;
        }

        .condition-card {
          width: 260px;
          flex-shrink: 0;
          background: #ffffff;
          border-radius: 4px;
          padding: 22px 18px;
          border-left: 3px solid #ff6218;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .condition-card:hover {
          background: #fafaf8;
          box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
        }

        .condition-card.hidden { display: none; }

        .card-number {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #C0622A;
          margin-bottom: 10px;
        }

        .card-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          margin-bottom: 8px;
          letter-spacing: -0.2px;
        }

        .card-body {
          font-size: 13px;
          font-weight: 400;
          color: #666;
          line-height: 1.6;
        }

        .grid-wrapper { position: relative; }

        .grid-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: linear-gradient(to bottom, transparent, #f5f4f0);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .grid-fade.hidden { opacity: 0; }

        .scroll-hint {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 12px;
          margin-bottom: 20px;
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

        .load-more-wrap { text-align: center; }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1.5px solid #ff6218;
          color: #ff6218;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .load-more-btn:hover { background: #ff6218; color: #fff; }
        .load-more-btn.hidden { display: none; }

        @media (min-width: 560px) {
          .scroll-outer {
            overflow-x: visible;
            margin: 0;
            padding: 0;
          }

          .conditions-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            width: 100%;
            margin-bottom: 28px;
          }

          .condition-card {
            width: auto;
            flex-shrink: unset;
            padding: 26px 22px;
          }

          .condition-card.hidden { display: block; }
          .load-more-wrap { display: none; }
          .grid-fade { display: none; }
          .scroll-hint { display: none; }
        }

        @media (min-width: 900px) {
          .conditions-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 640px) {
          .conditions-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .underline-accent { margin-bottom: 24px; }
          .intro-text { margin-bottom: 44px; }
        }
      </style>

      <div class="conditions-wrap">

        <p class="eyebrow">Neck Conditions</p>
        <h2>Neck Conditions We Treat</h2>
        <div class="underline-accent"></div>
        <p class="intro-text">
          Our neck physiotherapists are trained to diagnose and treat the full range of neck injuries and conditions, from everyday sprains and strains to complex disc, nerve and postural cases.
        </p>

        <div class="grid-wrapper">
          <div class="scroll-outer">
            <div class="conditions-grid">

              <div class="condition-card">
                <p class="card-number">01</p>
                <h3 class="card-title">Wry Neck Treatment</h3>
                <p class="card-body">Hands-on wry neck treatment to relieve sudden-onset pain and stiffness, restore range of motion and resolve the muscle spasm causing the head to tilt to one side.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">02</p>
                <h3 class="card-title">Tech Neck Treatment</h3>
                <p class="card-body">Assessment and tech neck treatment for postural neck pain caused by prolonged screen use and forward head posture, with exercises to correct alignment and reduce recurring strain.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">03</p>
                <h3 class="card-title">Physio for Whiplash</h3>
                <p class="card-body">Physio for whiplash following motor vehicle accidents, sports injuries or falls, to reduce pain, restore movement and prevent long-term stiffness and referred arm symptoms.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">04</p>
                <h3 class="card-title">Cervical Radiculopathy</h3>
                <p class="card-body">Cervical radiculopathy physio to relieve nerve root compression causing pain, pins and needles, or weakness radiating into the arms, hands or fingers.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">05</p>
                <h3 class="card-title">Neck Sprain and Strain</h3>
                <p class="card-body">Manual therapy and targeted rehabilitation for neck sprains and strains caused by poor posture, sudden movements, sports activity or workplace injury.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">06</p>
                <h3 class="card-title">Cervical Disc Injury</h3>
                <p class="card-body">Evidence-based treatment for cervical bulging and herniated discs compressing spinal nerves and causing localised neck pain or referred pain into the arms.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">07</p>
                <h3 class="card-title">Cervicogenic Headaches</h3>
                <p class="card-body">Physiotherapy for headaches originating from the cervical spine, addressing the underlying joint and muscle dysfunction that drives recurring head pain.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">08</p>
                <h3 class="card-title">Cervical Spondylosis</h3>
                <p class="card-body">Conservative management of age-related cervical joint degeneration to reduce stiffness, nerve irritation and improve long-term neck mobility and function.</p>
              </div>

            </div>
          </div>
          <div class="grid-fade" id="gridFade"></div>
        </div>

        <div class="scroll-hint">
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
          <div class="scroll-dot"></div>
        </div>

        <div class="load-more-wrap">
          <button class="load-more-btn" id="loadMoreBtn">Show More Conditions +</button>
        </div>

      </div>
    `;

    shadow.getElementById('loadMoreBtn').addEventListener('click', function () {
      shadow.querySelectorAll('.condition-card.hidden').forEach(card => {
        card.classList.remove('hidden');
      });
      shadow.getElementById('gridFade').classList.add('hidden');
      this.classList.add('hidden');
    });
  }
}

customElements.define('ih-neck-conditions', IhNeckConditions);
