class IhElbowConditions extends HTMLElement {
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

        @media (max-width: 559px) {
          .condition-card.hidden { display: block; }
          .load-more-wrap { display: none; }
          .grid-fade { display: none; }
        }

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

          .condition-card.hidden { display: none; }
          .load-more-wrap { display: block; }
          .grid-fade { display: block; }

          .card-title { font-size: clamp(14px, 3vw, 15px); }
          .card-body { font-size: clamp(13px, 2.8vw, 14px); }
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

        <p class="eyebrow">Elbow Conditions</p>
        <h2>Elbow Conditions We Treat</h2>
        <div class="underline-accent"></div>
        <p class="intro-text">
          Our elbow physiotherapists diagnose and treat the full range of elbow injuries, from tennis elbow and golfer's elbow to nerve entrapment, bursitis, and acute trauma.
        </p>

        <div class="grid-wrapper">
          <div class="scroll-outer">
            <div class="conditions-grid">

              <div class="condition-card">
                <p class="card-number">01</p>
                <h3 class="card-title">Tennis Elbow Physio</h3>
                <p class="card-body">Pain on the outer elbow during gripping, wrist extension, or twisting tasks. Caused by overload of the forearm tendons at their lateral attachment point. Weakness, tightness, and poor joint mechanics are common contributing factors.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">02</p>
                <h3 class="card-title">Golfer's Elbow Physio</h3>
                <p class="card-body">Pain on the inner elbow during gripping and wrist flexion tasks. Results from overload of the forearm tendons at the medial epicondyle, often driven by repetitive strain, muscle weakness, or tightness in the forearm.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">03</p>
                <h3 class="card-title">Elbow Bursitis</h3>
                <p class="card-body">Inflammation of the olecranon bursa at the bony tip of the elbow. Symptoms develop gradually over weeks or months and can include a visible fluid-filled swelling, localised tenderness, and pain with pressure or movement.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">04</p>
                <h3 class="card-title">Cubital Tunnel Syndrome</h3>
                <p class="card-body">Compression of the ulnar nerve at the elbow causing tingling, numbness, or weakness in the ring and little fingers. Symptoms often worsen with prolonged elbow bending and can progressively affect grip strength if left untreated.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">05</p>
                <h3 class="card-title">Acute Elbow Injuries</h3>
                <p class="card-body">Fractures, dislocations, ligament sprains, and muscle strains from sudden traumatic loading of the elbow. Treatment depends on the location and severity of the injury and may include referral to an orthopaedic specialist where required.</p>
              </div>

              <div class="condition-card">
                <p class="card-number">06</p>
                <h3 class="card-title">Referred Elbow Pain</h3>
                <p class="card-body">Elbow pain that originates from the neck or shoulder rather than the joint itself. Your physiotherapist will assess for specific clinical indicators, test the relevant structures, and treat the true source of pain accordingly.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">07</p>
                <h3 class="card-title">Post-Op Elbow Rehab</h3>
                <p class="card-body">Structured rehabilitation following elbow surgery to restore range of motion, strength, and function. Programs are individually tailored to your procedure and progressively advanced toward your sport or daily activity goals.</p>
              </div>

              <div class="condition-card hidden">
                <p class="card-number">08</p>
                <h3 class="card-title">Repetitive Strain Injury</h3>
                <p class="card-body">Overuse injuries of the elbow tendons and muscles from repeated movements in work or sport. Early physiotherapy intervention helps break the pain cycle, address contributing factors, and prevent the condition from becoming chronic.</p>
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

    // Load more button
    shadow.getElementById('loadMoreBtn').addEventListener('click', () => {
      shadow.querySelectorAll('.condition-card.hidden').forEach(card => {
        card.classList.remove('hidden');
      });
      shadow.getElementById('gridFade').classList.add('hidden');
      shadow.getElementById('loadMoreBtn').classList.add('hidden');
    });
  }
}

customElements.define('ih-elbow-conditions', IhElbowConditions);
