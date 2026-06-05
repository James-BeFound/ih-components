class IhSydneyCbdFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-sydney-cbd-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-sydney-cbd-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need a referral to book in with Infinite Health Sydney CBD?", "acceptedAnswer": {"@type": "Answer", "text": "No, you don't need a medical referral to schedule an appointment. To make a booking, just give our Sydney CBD clinic a call or make an online booking using our form on this website."}}, {"@type": "Question", "name": "What conditions do you treat in the Sydney CBD clinic?", "acceptedAnswer": {"@type": "Answer", "text": "We treat a wide range of musculoskeletal and movement-related conditions, including back, neck, shoulder, hip and knee pain, sports injuries and tendon injuries, post-surgery rehabilitation, work-related injuries and ergonomic issues, chronic pain and osteoarthritis, and postural and desk-work related strains."}}, {"@type": "Question", "name": "Where is Infinite Health Physiotherapy Sydney CBD located?", "acceptedAnswer": {"@type": "Answer", "text": "You'll find us conveniently located at Suite 103, Level 1, 74 Pitt Street, Sydney NSW 2000 \u2014 in the building to the right of Mitre 10. We're a 4-minute walk from Wynyard Station and a 3-minute walk from Martin Place Station."}}, {"@type": "Question", "name": "What's involved in an initial consult at the CBD clinic?", "acceptedAnswer": {"@type": "Answer", "text": "At your first appointment, we will identify the source of your pain, provide hands-on treatment to relieve pain and get you moving in the right direction, and create a personalised exercise program and recovery plan to help you progress between sessions."}}, {"@type": "Question", "name": "What should I wear to my physio appointment?", "acceptedAnswer": {"@type": "Answer", "text": "We recommend wearing comfortable, flexible clothing \u2014 such as shorts, leggings or a t-shirt \u2014 so we can easily assess your movement and demonstrate exercises."}}, {"@type": "Question", "name": "How long are physio appointments?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your injury and what treatment is required. We offer three appointment lengths: Short (25 minutes) for simpler conditions or existing patients; Standard (40 minutes), recommended for most conditions; and Long (55 minutes) for complex or multiple injuries requiring comprehensive assessment and treatment."}}, {"@type": "Question", "name": "How many appointments will I need?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on the severity of your injury. Most of our patients experience improvements after 2 to 3 sessions. After your initial consultation, your physiotherapist will provide a treatment plan outlining the expected number of sessions and a realistic timeline for recovery."}}, {"@type": "Question", "name": "Does health insurance cover physio at the Sydney CBD clinic?", "acceptedAnswer": {"@type": "Answer", "text": "Many private health insurance policies include cover for physiotherapy, subject to your plan's level of cover. We accept all major health funds via HICAPS for on-the-spot claiming, and we also accept WorkCover and CTP claims with the required documentation. We're happy to check your fund and let you know your out-of-pocket cost before you book."}}]});
      document.head.appendChild(script);
    }
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          .faq-wrap {
                  background: #f5f4f0;
            width: 100%;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
          }

          /* ── Left column ──────────────────────────────────── */
          .faq-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .eyebrow {
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #ff6218;
            margin-bottom: 16px;
          }

          h2 {
            font-size: clamp(24px, 5vw, 36px);
            font-weight: 700;
            line-height: 1.15;
            color: #1a1a1a;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #ff6218;
            border-radius: 2px;
            margin-bottom: 20px;
          }

          .intro-text {
            font-size: clamp(13px, 3vw, 14px);
            color: #555;
            line-height: 1.7;
            margin-bottom: 28px;
          }

          .cta-btn {
            display: inline-block;
            background: #ff6218;
            color: #ffffff;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 16px 28px;
            border-radius: 2px;
            transition: background 0.2s ease;
            white-space: nowrap;
          }

          .cta-btn:hover { background: #a3521f; }

          /* ── Right column ─────────────────────────────────── */
          .faq-right { flex: 1; }

          .faq-list {
            list-style: none;
            border-top: 1px solid rgba(0,0,0,0.1);
          }

          .faq-item { border-bottom: 1px solid rgba(0,0,0,0.1); }

          .faq-trigger {
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 16px 0;
            text-align: left;
            -webkit-tap-highlight-color: transparent;
          }

          .faq-question {
            font-size: clamp(13px, 2.8vw, 14px);
            font-weight: 600;
            color: #1a1a1a;
            line-height: 1.4;
            flex: 1;
          }

          .faq-trigger[aria-expanded="true"] .faq-question { color: #ff6218; }

          .faq-icon {
            flex-shrink: 0;
            width: 24px; height: 24px;
            display: flex; align-items: center; justify-content: center;
          }

          .faq-icon svg { width: 14px; height: 14px; }
          .faq-icon .icon-minus { display: none; }
          .faq-trigger[aria-expanded="true"] .faq-icon .icon-plus  { display: none; }
          .faq-trigger[aria-expanded="true"] .faq-icon .icon-minus { display: block; }

          .faq-panel {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .faq-panel.open { max-height: 500px; }

          .faq-answer {
            font-size: clamp(12px, 2.8vw, 13px);
            font-weight: 400;
            color: #666;
            line-height: 1.75;
            padding-bottom: 16px;
            padding-right: 24px;
          }

          /* ── Desktop: two columns ─────────────────────────── */
          @media (min-width: 768px) {
            .faq-wrap {
              flex-direction: row;
              align-items: flex-start;
              gap: 60px;
              padding: 60px 48px;
            }

            .faq-left {
              width: 450px;
              flex-shrink: 0;
              position: sticky;
              top: 40px;
            }

            .eyebrow { font-size: 11px; letter-spacing: 3px; margin-bottom: 20px; }
            .underline-accent { margin-bottom: 24px; }
            .intro-text { margin-bottom: 32px; }
            .faq-trigger { padding: 18px 0; }
            .faq-answer { padding-bottom: 18px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="faq-wrap">

      <div class="faq-left">
      <p class="eyebrow">Common Questions</p>
      <h2>Sydney CBD Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first visit to our Sydney CBD clinic.</p>
      <button class="cta-btn">Book at Sydney CBD →</button>
      </div>

      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a referral to book in with Infinite Health Sydney CBD?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No, you don't need a medical referral to schedule an appointment. To make a booking, just give our Sydney CBD clinic a call or make an online booking using our form on this website.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What conditions do you treat in the Sydney CBD clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">We treat a wide range of musculoskeletal and movement-related conditions, including back, neck, shoulder, hip and knee pain, sports injuries and tendon injuries, post-surgery rehabilitation, work-related injuries and ergonomic issues, chronic pain and osteoarthritis, and postural and desk-work related strains.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where is Infinite Health Physiotherapy Sydney CBD located?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">You'll find us conveniently located at Suite 103, Level 1, 74 Pitt Street, Sydney NSW 2000 — in the building to the right of Mitre 10. We're a 4-minute walk from Wynyard Station and a 3-minute walk from Martin Place Station.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What's involved in an initial consult at the CBD clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">At your first appointment, we will identify the source of your pain, provide hands-on treatment to relieve pain and get you moving in the right direction, and create a personalised exercise program and recovery plan to help you progress between sessions.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What should I wear to my physio appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">We recommend wearing comfortable, flexible clothing — such as shorts, leggings or a t-shirt — so we can easily assess your movement and demonstrate exercises.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long are physio appointments?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">It depends on your injury and what treatment is required. We offer three appointment lengths: Short (25 minutes) for simpler conditions or existing patients attending a lunch-break session; Standard (40 minutes), recommended for most conditions; and Long (55 minutes) for complex or multiple injuries requiring comprehensive assessment and treatment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many appointments will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">It depends on the severity of your injury. Most of our patients experience improvements after 2 to 3 sessions. After your initial consultation, your physiotherapist will provide a treatment plan outlining the expected number of sessions and a realistic timeline for recovery.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does health insurance cover physio at the Sydney CBD clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Many private health insurance policies include cover for physiotherapy, subject to your plan's level of cover. We accept all major health funds via HICAPS for on-the-spot claiming, and we also accept WorkCover and CTP claims with the required documentation. We're happy to check your fund and let you know your out-of-pocket cost before you book.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ?location=8' },
        bubbles: true
      }));
    });

    shadow.querySelectorAll('.faq-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        shadow.querySelectorAll('.faq-trigger').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.classList.remove('open');
        });

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          trigger.nextElementSibling.classList.add('open');
        }
      });
    });
  }
}

customElements.define('ih-sydney-cbd-faq', IhSydneyCbdFaq);
