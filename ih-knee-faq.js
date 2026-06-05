class IhKneeFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

        .faq-wrap { width: 100%; padding: 40px 20px; background: #f5f4f0; display: flex; flex-direction: column; gap: 40px; }

        .faq-left { display: flex; flex-direction: column; align-items: flex-start; }

        .eyebrow { font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #ff6218; margin-bottom: 16px; }

        h2 { font-size: clamp(24px, 5vw, 36px); font-weight: 700; line-height: 1.15; color: #1a1a1a; margin-bottom: 12px; letter-spacing: -0.5px; }

        .underline-accent { width: 48px; height: 3px; background: #ff6218; border-radius: 2px; margin-bottom: 20px; }

        .intro-text { font-size: clamp(13px, 3vw, 14px); color: #555; line-height: 1.7; margin-bottom: 28px; }

        .cta-btn { display: inline-block; background: #ff6218; color: #ffffff; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 16px 28px; border-radius: 2px; border: none; cursor: pointer; font-family: 'Inter', sans-serif; transition: background 0.2s ease; white-space: nowrap; }
        .cta-btn:hover { background: #a3521f; }

        .faq-right { flex: 1; }

        .faq-list { list-style: none; border-top: 1px solid rgba(0,0,0,0.1); }

        .faq-item { border-bottom: 1px solid rgba(0,0,0,0.1); }

        .faq-trigger { width: 100%; background: none; border: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 0; text-align: left; -webkit-tap-highlight-color: transparent; font-family: 'Inter', sans-serif; }

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
          <h2>Knee Physio FAQ</h2>
          <div class="underline-accent"></div>
          <p class="intro-text">Everything you need to know before your first knee physiotherapy appointment.</p>
          <button class="cta-btn" id="ctaBtn">Book an Assessment</button>
        </div>

        <div class="faq-right">
          <ul class="faq-list">

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help knee pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, and the evidence is strong. Physiotherapy is the recommended first-line treatment for the majority of knee pain conditions, including patellofemoral pain, tendinopathy, ligament injuries, IT band syndrome, and osteoarthritis. Multiple clinical guidelines confirm that a combination of manual therapy and progressive exercise rehabilitation outperforms rest or pain medication alone. The key is an accurate diagnosis first, so the right treatment is matched to the right cause.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What does a physio do for knee pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Your physio begins with a thorough assessment to identify the exact structure at fault, whether that is a ligament, tendon, meniscus, cartilage, or the patella tracking mechanism. Treatment is then tailored to your diagnosis and typically includes manual therapy and joint mobilisation to restore movement, soft tissue release and dry needling to address muscle tension, shockwave therapy for tendon-related conditions, and a progressive strengthening program to rebuild load capacity and reduce the risk of recurrence.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How can physio help after an ACL injury?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">ACL physio rehab is structured in phases: early management focuses on reducing swelling and restoring range of motion, the middle phase rebuilds quad and hamstring strength, and the late phase progresses to sport-specific movement, agility, and neuromuscular control. Whether you are managing an ACL injury conservatively or recovering from reconstruction surgery, evidence strongly supports physiotherapy as the cornerstone of a successful return to full function and sport.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help after a knee replacement?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes. Physio after knee replacement is essential for a full recovery. In the early post-operative phase, your physiotherapist will work on restoring range of motion, managing swelling, and getting you mobile safely. Rehabilitation then progresses to rebuilding quadriceps and hip strength, improving gait mechanics, and returning to everyday activities such as stairs, walking, and low-impact exercise. Starting physio promptly after surgery consistently leads to faster recovery and better long-term outcomes.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Should I see a physio for knee pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, particularly if your knee pain has not improved within a few days, is affecting your ability to walk, climb stairs, or exercise, or came on following a specific injury. Seeing a physio early prevents minor issues from becoming chronic and gives you an accurate diagnosis rather than guessing at the cause. Physiotherapy is the recommended first-line treatment for most knee conditions by both the Australian Physiotherapy Association and international orthopaedic guidelines.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is the difference between an ACL and MCL injury?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">The ACL (anterior cruciate ligament) runs diagonally through the centre of the knee and controls rotational stability. It is commonly torn in twisting movements or pivoting sports. The MCL (medial collateral ligament) runs along the inner side of the knee and resists sideways force, and MCL injuries typically result from a direct blow to the outer knee or a valgus stress. ACL tears often require surgical consideration and a 9 to 12 month rehabilitation. Most MCL injuries respond well to conservative physio management over 6 to 12 weeks, depending on severity.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How long does knee pain take to heal with physiotherapy?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Recovery time depends on the diagnosis and how long the pain has been present. Acute muscle strains and minor ligament sprains often resolve in 4 to 8 weeks. Patellofemoral pain and IT band syndrome typically improve within 6 to 12 weeks with consistent physio and exercise. Tendon-related conditions such as patella tendinopathy may take 3 to 6 months. ACL reconstruction rehabilitation is generally 9 to 12 months. Your physiotherapist will give you a realistic timeline at your initial assessment.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How many physio sessions will I need for knee pain?</span>
                <span class="faq-icon"><svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg><svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">For straightforward knee pain such as patellofemoral pain or a minor MCL sprain, most patients see significant improvement in 6 to 8 sessions over 4 to 6 weeks. More complex presentations such as meniscus injuries, chronic tendinopathy, or post-surgical rehab typically require 10 to 16 sessions across 8 to 16 weeks. Your physiotherapist will outline an estimated treatment plan at your first appointment and adjust it based on how you respond.</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    `;

    shadow.getElementById('ctaBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' },
        bubbles: true
      }));
    });

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

customElements.define('ih-knee-faq', IhKneeFaq);
