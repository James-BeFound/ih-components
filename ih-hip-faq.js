class IhHipFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .faq-wrap {
          width: 100%; padding: 40px 20px; background: #f5f4f0;
          display: flex; flex-direction: column; gap: 40px;
        }

        .faq-left { display: flex; flex-direction: column; align-items: flex-start; }

        .eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #ff6218; margin-bottom: 16px; }

        h2 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.15; color: #1a1a1a; margin-bottom: 12px; letter-spacing: -0.5px; }

        .underline-accent { width: 48px; height: 3px; background: #ff6218; border-radius: 2px; margin-bottom: 20px; }

        .intro-text { font-size: clamp(13px, 3vw, 14px); color: #555; line-height: 1.7; margin-bottom: 28px; }

        .cta-btn {
          display: inline-block; background: #ff6218; color: #ffffff;
          font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          padding: 16px 28px; border-radius: 2px; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; transition: background 0.2s ease; white-space: nowrap;
        }

        .cta-btn:hover { background: #a3521f; }

        .faq-right { flex: 1; }

        .faq-list { list-style: none; border-top: 1px solid rgba(0,0,0,0.1); }

        .faq-item { border-bottom: 1px solid rgba(0,0,0,0.1); }

        .faq-trigger {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 16px 0; text-align: left;
          -webkit-tap-highlight-color: transparent; font-family: 'Inter', sans-serif;
        }

        .faq-question { font-size: clamp(13px, 2.8vw, 14px); font-weight: 600; color: #1a1a1a; line-height: 1.4; flex: 1; }

        .faq-trigger[aria-expanded="true"] .faq-question { color: #ff6218; }

        .faq-icon { flex-shrink: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }

        .faq-icon svg { width: 14px; height: 14px; }
        .faq-icon .icon-minus { display: none; }
        .faq-trigger[aria-expanded="true"] .faq-icon .icon-plus { display: none; }
        .faq-trigger[aria-expanded="true"] .faq-icon .icon-minus { display: block; }

        .faq-panel { overflow: hidden; max-height: 0; transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1); }

        .faq-panel.open { max-height: 600px; }

        .faq-answer { font-size: clamp(12px, 2.8vw, 13px); font-weight: 400; color: #666; line-height: 1.75; padding-bottom: 16px; padding-right: 24px; }

        @media (min-width: 768px) {
          .faq-wrap { flex-direction: row; align-items: flex-start; gap: 60px; padding: 60px 48px; }
          .faq-left { width: 450px; flex-shrink: 0; position: sticky; top: 40px; }
          .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
          .underline-accent { margin-bottom: 24px; }
          .intro-text { margin-bottom: 32px; }
          .faq-trigger { padding: 18px 0; }
          .faq-answer { padding-bottom: 18px; }
        }
      </style>

      <div class="faq-wrap">

        <div class="faq-left">
          <p class="eyebrow">Common Questions</p>
          <h2>Hip Physio FAQ</h2>
          <div class="underline-accent"></div>
          <p class="intro-text">Everything you need to know before your first hip physiotherapy appointment.</p>
          <button class="cta-btn" id="ctaBtn">Book an Assessment</button>
        </div>

        <div class="faq-right">
          <ul class="faq-list">

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What to wear to physio for hip?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Wear loose, comfortable clothing that allows easy access to the hip, groin, and thigh. Shorts are ideal, as your physiotherapist will need to assess the hip joint directly, observe your gait, and perform hands-on treatment. Avoid jeans or tight-fitting pants, as these restrict both movement and clinical assessment. Comfortable, flat-soled shoes are also recommended, as your physio will likely assess how you walk and load the joint during the appointment.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What causes hip misalignment?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Hip misalignment, where one hip sits higher or rotated differently to the other, is rarely a structural problem with the pelvis itself. It is most commonly caused by muscle imbalances, particularly tightness or weakness in the hip flexors, glutes, or spinal muscles, which pull the pelvis into an asymmetrical position. Habitual postures, leg length differences, and previous injuries that have altered movement patterns are also common contributing factors. Physiotherapy addresses these underlying imbalances rather than simply trying to force the joint into a different position.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help hip pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, physiotherapy is one of the most effective treatments for hip pain across a wide range of conditions. Whether your pain is coming from a tendon, bursa, joint, muscle, or labrum, a physiotherapist will identify the exact source and build a targeted treatment plan. Research consistently supports physiotherapy as a first-line treatment for hip bursitis, gluteal tendinopathy, hip impingement, and hip osteoarthritis. Most people experience meaningful improvement within the first few weeks of starting treatment.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help arthritis in the hip?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, and the evidence is strong. Physiotherapy is recommended as a core treatment for hip osteoarthritis by both Australian and international clinical guidelines. While it cannot reverse the structural changes of arthritis, it can significantly reduce pain, improve joint mobility, and slow functional decline. Treatment typically includes manual therapy to maintain joint movement, a targeted strengthening program to reduce load on the joint, and education on activity modification and self-management. A well-structured physio program can, in many cases, delay or reduce the need for hip replacement surgery.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Should I see a physio for hip pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, in most cases. Whether your hip pain came on gradually or after an injury, a physiotherapist can identify the source, provide a clear diagnosis, and build a targeted treatment plan. Many people manage hip pain with rest and anti-inflammatories without addressing the underlying cause, which often leads to recurring or worsening symptoms over time. Early physiotherapy intervention leads to better outcomes and significantly reduces the risk of the condition becoming chronic.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What does a physio do for hip pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Your physiotherapist begins with a thorough assessment including gait analysis, joint range of motion testing, strength assessment, and orthopaedic special tests to identify the structure at fault. Treatment is then tailored to your diagnosis and may include joint mobilisation, soft tissue therapy, dry needling, shockwave therapy, taping, and a progressive exercise program. Treatment often extends beyond the hip to include the lower back, knee, and surrounding structures, as all of these can directly influence hip mechanics and pain.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How is hip pain treated with physio?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Treatment follows a staged approach depending on your diagnosis. The initial phase focuses on reducing pain and restoring movement through hands-on therapy, soft tissue release, and dry needling. This is followed by a progressive strengthening program targeting the glutes, hip stabilisers, and surrounding muscles. The final phase focuses on returning to full function, whether sport, work, or daily activities, and addressing contributing factors to prevent the problem from coming back.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How many physio sessions will I need for hip pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">It depends on your diagnosis and how long you have had the problem. Acute hip strains and bursitis flare-ups often resolve within 6 to 8 sessions. Tendinopathy and impingement typically require 8 to 12 sessions over 8 to 12 weeks. Hip osteoarthritis and post-surgical rehab may involve a longer ongoing program. Your physiotherapist will give you a realistic session estimate at your initial assessment and adjust the plan based on how you respond to treatment.</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    `;

    // CTA button
    shadow.getElementById('ctaBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' },
        bubbles: true
      }));
    });

    // Accordion
    shadow.querySelectorAll('.faq-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        const panel = trigger.nextElementSibling;

        shadow.querySelectorAll('.faq-trigger').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.classList.remove('open');
        });

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.classList.add('open');
        }
      });
    });
  }
}

customElements.define('ih-hip-faq', IhHipFaq);
