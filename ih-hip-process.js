class IhHipProcess extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .process-wrap {
          width: 100%;
          padding: 40px 20px;
          background: #ffffff;
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
          color: #555; line-height: 1.75; margin-bottom: 32px; max-width: 680px;
        }

        .steps-scroll-wrap {
          overflow-x: auto; -webkit-overflow-scrolling: touch;
          scrollbar-width: none; margin: 0 -20px; padding: 0 20px 16px 20px;
        }

        .steps-scroll-wrap::-webkit-scrollbar { display: none; }

        .steps-list {
          display: flex; flex-direction: row; gap: 14px; width: max-content;
        }

        .step-card {
          width: 260px; flex-shrink: 0; background: #f5f4f0;
          border-radius: 4px; padding: 24px 20px; border-left: 3px solid #ff6218;
          display: flex; flex-direction: column; gap: 14px;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .step-card:hover {
          background: #fff;
          box-shadow: 0 4px 20px rgba(255, 98, 24, 0.08);
        }

        .step-number {
          flex-shrink: 0; width: 38px; height: 38px; background: #ff6218;
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 700; color: #ffffff; line-height: 1;
        }

        .step-title {
          font-size: 14px; font-weight: 700; color: #1a1a1a;
          line-height: 1.3; letter-spacing: -0.2px; margin-bottom: 6px;
        }

        .step-body {
          font-size: 13px; font-weight: 400; color: #666; line-height: 1.65;
        }

        .scroll-hint {
          display: flex; justify-content: center; gap: 6px; margin-top: 16px;
        }

        .scroll-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #d1d5db; transition: all 0.2s;
        }

        .scroll-dot.active { width: 18px; border-radius: 3px; background: #ff6218; }

        @media (min-width: 768px) {
          .process-wrap { padding: 60px 48px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .underline-accent { margin-bottom: 24px; }
          .intro-text { margin-bottom: 40px; }
          .steps-scroll-wrap { overflow-x: visible; margin: 0; padding: 0; }
          .steps-list { width: 100%; gap: 20px; }
          .step-card { width: 0; flex: 1; padding: 28px 22px; gap: 16px; }
          .step-number { width: 42px; height: 42px; font-size: 16px; }
          .step-title { font-size: 15px; }
          .scroll-hint { display: none; }
        }
      </style>

      <div class="process-wrap">

        <p class="eyebrow">Our Approach</p>
        <h2>How We Treat Your Hip</h2>
        <div class="underline-accent"></div>
        <p class="intro-text">
          Every hip presentation is different. Our evidence-based process identifies the root cause of your pain and builds a clear pathway back to full function.
        </p>

        <div class="steps-scroll-wrap" id="scrollWrap">
          <div class="steps-list">

            <div class="step-card">
              <div class="step-number">1</div>
              <div>
                <h3 class="step-title">Comprehensive Hip Assessment</h3>
                <p class="step-body">We assess gait, range of motion, strength, and muscle control, and apply orthopaedic special tests to accurately identify the structure at fault, whether it is a tendon, bursa, labrum, or joint.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div>
                <h3 class="step-title">Personalised Treatment Plan</h3>
                <p class="step-body">We build an evidence-based plan tailored to your diagnosis and goals, combining manual therapy, dry needling, shockwave, and progressive loading in the right sequence for your condition.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div>
                <h3 class="step-title">Hands-On Treatment</h3>
                <p class="step-body">One-on-one sessions using joint mobilisation, soft tissue release, taping, and targeted exercises. Where relevant, treatment extends to the lower back, knee, and surrounding structures, as all of these can influence the hip.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div>
                <h3 class="step-title">Return to Full Function</h3>
                <p class="step-body">We progress you through sport or activity specific benchmarks and equip you with an independent program so your hip stays strong and pain-free long term.</p>
              </div>
            </div>

          </div>
        </div>

        <div class="scroll-hint" id="scrollHint">
          <div class="scroll-dot active" data-index="0"></div>
          <div class="scroll-dot" data-index="1"></div>
          <div class="scroll-dot" data-index="2"></div>
          <div class="scroll-dot" data-index="3"></div>
        </div>

      </div>
    `;

    const scrollWrap = shadow.getElementById('scrollWrap');
    const dots = shadow.querySelectorAll('.scroll-dot');

    scrollWrap.addEventListener('scroll', () => {
      const cards = shadow.querySelectorAll('.step-card');
      const cardWidth = cards[0] ? cards[0].offsetWidth + 14 : 274;
      const activeIndex = Math.round(scrollWrap.scrollLeft / cardWidth);
      dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
    }, { passive: true });
  }
}

customElements.define('ih-hip-process', IhHipProcess);
