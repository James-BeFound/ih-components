class IhHipConditions extends HTMLElement {
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
          font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
          text-transform: uppercase; color: #000000; margin-bottom: 16px;
        }

        h2 {
          font-size: clamp(26px, 6vw, 42px); font-weight: 700;
          line-height: 1.15; color: #ff6218; margin-bottom: 12px; letter-spacing: -0.5px;
        }

        .underline-accent {
          width: 48px; height: 3px; background: #FF6218;
          margin-bottom: 20px; border-radius: 2px;
        }

        .intro-text {
          font-size: clamp(14px, 3vw, 15px); font-weight: 400;
          color: #555; line-height: 1.75; margin-bottom: 28px; max-width: 680px;
        }

        .scroll-outer {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          scrollbar-width: none; margin: 0 -20px;
          padding: 0 20px 16px 20px; margin-bottom: 8px;
        }

        .scroll-outer::-webkit-scrollbar { display: none; }

        .conditions-grid {
          display: flex; flex-direction: row; gap: 14px; width: max-content;
        }

        .condition-card {
          width: 260px; flex-shrink: 0; background: #ffffff;
          border-radius: 4px; padding: 22px 18px;
          border-left: 3px solid #ff6218;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .condition-card:hover {
          background: #fafaf8;
          box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
        }

        .condition-card.hidden { display: none; }

        .card-number {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #C0622A; margin-bottom: 10px;
        }

        .card-title {
          font-size: 14px; font-weight: 700; color: #1a1a1a;
          line-height: 1.3; margin-bottom: 8px; letter-spacing: -0.2px;
        }

        .card-body {
          font-size: 13px; font-weight: 400; color: #666; line-height: 1.6;
        }

        .grid-wrapper { position: relative; }

        .grid-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 70px;
          background: linear-gradient(to bottom, transparent, #f5f4f0);
          pointer-events: none; transition: opacity 0.3s ease;
        }

        .grid-fade.hidden { opacity: 0; }

        .scroll-hint {
          display: flex; justify-content: center; gap: 6px; margin-bottom: 20px;
        }

        .scroll-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #d1d5db;
        }

        .scroll-dot:first-child {
          width: 18px; border-radius: 3px; background: #ff6218;
        }

        .load-more-wrap { text-align: center; }

        .load-more-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: none; border: 1.5px solid #ff6218; color: #ff6218;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; padding: 14px 32px;
          border-radius: 2px; cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .load-more-btn:hover { background: #ff6218; color: #fff; }
        .load-more-btn.hidden { display: none; }

        @media (max-width: 559px) {
          .condition-card.hidden { display: block; }
          .load-more-wrap { display: none; }
          .grid-fade { display: none; }
        }

        @media (min-width: 560px) {
          .scroll-outer { overflow-x: visible; margin: 0; padding: 0; }
          .conditions-grid {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 16px; width: 100%; margin-bottom: 28px;
          }
          .condition-card { width: auto; flex-shrink: unset; padding: 26px 22px; }
          .condition-card.hidden { display: none; }
          .load-more-wrap { display: block; }
          .grid-fade { display: block; }
          .card-title { font-size: clamp(14px, 3vw, 15px); }
          .card-body { font-size: clamp(13px, 2.8vw, 14px); }
          .scroll-hint { display: none; }
        }

        @media (min-width: 900px) {
          .conditions-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }

        @media (min-width: 640px) {
          .conditions-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .underline-accent { margin-bottom: 24px; }
          .intro-text { margin-bottom: 44px; }
        }
      </style>

      <div class="conditions-wrap">

        <p class="eyebrow">Hip Conditions</p>
        <h2>Hip Conditions We Treat</h2>
        <div class="underline-accent"></div>
        <p class="intro-text">
          Our hip physiotherapists diagnose and treat the full range of hip injuries and conditions, from bursitis and impingement to tendinopathy, osteoarthritis, and post-surgical rehab.
        </p>

        <div class="grid-wrapper">
          <div class="scroll-outer">
            <div class="conditions-grid">

              <div class="condition-card">
                <p class="card-number">01</p>
                <h3 class="card-title">Physio for Hip Bursitis</h3>
                <p class="card-body">Inflammation of the fluid-filled sac cushioning the outer hip, causing side-of-hip pain that improves with rest and returns with activity. Treatment addresses contributing factors through hands-on therapy, targeted exercises, and where needed, referral for an injection to relieve swelling.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">02</p>
                <h3 class="card-title">Physio for Hip Impingement</h3>
                <p class="card-body">Abnormal contact between the ball and socket of the hip joint, causing groin or front-of-hip pain with flexion and rotation. Physiotherapy targets mobility restrictions, muscle control deficits, and movement patterns to reduce joint load and restore pain-free movement.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">03</p>
                <h3 class="card-title">Hip Dysplasia Physio</h3>
                <p class="card-body">A condition where the hip socket does not fully cover the femoral head, leading to instability, groin pain, and increased risk of labral tears. Physiotherapy focuses on strengthening the surrounding muscles to improve joint control and reduce pain during daily activities.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">04</p>
                <h3 class="card-title">Hip Sprain</h3>
                <p class="card-body">Stretching or tearing of the hip ligaments causing front-of-hip pain that worsens with backward leg movement, often linked to weakness across the glutes, hamstrings, and hip flexors. Treatment combines manual therapy with progressive strengthening to restore stability.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">05</p>
                <h3 class="card-title">Gluteal Tendinopathy</h3>
                <p class="card-body">Degeneration or irritation of the gluteal tendons at the outer hip, causing persistent lateral pain that worsens with prolonged sitting, stairs, or walking. A progressive loading program targeting the gluteal muscles is the most effective long-term treatment approach.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">06</p>
                <h3 class="card-title">Hip Osteoarthritis</h3>
                <p class="card-body">Gradual breakdown of hip joint cartilage causing deep groin or buttock pain, stiffness, and reduced range of motion. Targeted exercise, manual therapy, and load management help maintain function and can delay the need for surgical intervention.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">07</p>
                <h3 class="card-title">Hip Labral Tear</h3>
                <p class="card-body">A tear of the cartilage ring lining the hip socket, causing sharp groin pain, clicking, or a feeling of giving way, often linked to impingement or dysplasia. Physiotherapy aims to reduce pain, improve joint mechanics, and build muscular support around the joint.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">08</p>
                <h3 class="card-title">Post-Op Hip Rehab</h3>
                <p class="card-body">Structured rehabilitation following hip surgery, including total hip replacement or labral repair, to restore range of motion, strength, and functional independence. Programs are individually tailored and progressively advanced toward your specific return-to-activity goals.</p>
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

    shadow.getElementById('loadMoreBtn').addEventListener('click', () => {
      shadow.querySelectorAll('.condition-card.hidden').forEach(card => {
        card.classList.remove('hidden');
      });
      shadow.getElementById('gridFade').classList.add('hidden');
      shadow.getElementById('loadMoreBtn').classList.add('hidden');
    });
  }
}

customElements.define('ih-hip-conditions', IhHipConditions);
