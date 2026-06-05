class IhMosmanFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-mosman-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-mosman-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need a referral to book at your Mosman clinic?", "acceptedAnswer": {"@type": "Answer", "text": "No referral is required. You can book directly online or call us at (02) 9412 2222. If you have a GP referral for a Medicare Care Plan (CDM), we accept those too, which allows you to claim a Medicare rebate on up to 5 physio sessions per year."}}, {"@type": "Question", "name": "Where is your Mosman clinic located?", "acceptedAnswer": {"@type": "Answer", "text": "Our Mosman clinic is located at Suite 2, 884 Military Road, Mosman NSW 2088. There is on-street parking available directly outside on Military Road, with additional parking at the Raglan Street East Carpark just behind the building."}}, {"@type": "Question", "name": "Where can I park near your Mosman clinic?", "acceptedAnswer": {"@type": "Answer", "text": "On-street parking is available on Military Road directly outside the clinic. The Raglan Street East Carpark is located directly behind the building and provides additional parking options. Both options are convenient for most appointment lengths."}}, {"@type": "Question", "name": "What are your Mosman clinic opening hours?", "acceptedAnswer": {"@type": "Answer", "text": "Our Mosman clinic is open Monday to Thursday 8am to 7pm, Friday 8am to 6pm, and Saturday 8am to 3pm. We are closed on Sundays. Book online 24/7 or call us to find a time that suits you."}}, {"@type": "Question", "name": "What services are available at your Mosman clinic?", "acceptedAnswer": {"@type": "Answer", "text": "Our Mosman clinic offers physiotherapy, sports physiotherapy, orthopaedic rehabilitation, exercise rehabilitation, dry needling, shockwave therapy, and corporate occupational services. We also accept WorkCover, CTP claims, NDIS, and offer Telehealth consultations."}}, {"@type": "Question", "name": "What happens at my first appointment at the Mosman clinic?", "acceptedAnswer": {"@type": "Answer", "text": "Your first appointment begins with a personal meeting with your physio, covering your injury, medical background, daily routine, and goals. A thorough physical assessment follows, after which your practitioner develops a personalised treatment plan including an exercise program. Follow-up sessions are then scheduled to support your recovery."}}, {"@type": "Question", "name": "How many sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients at our Mosman clinic experience meaningful improvement after 2 to 3 sessions. The total number depends on your injury and how long you have had it. Your practitioner will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment. Acute injuries typically resolve faster than chronic or complex conditions."}}, {"@type": "Question", "name": "Do you accept private health insurance and WorkCover at Mosman?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We accept all major Australian health funds via HICAPS, including Medibank, HCF, Bupa, NIB, and Australian Unity, so you can claim your rebate on the spot. We are also WorkCover approved and accept CTP claims. A doctor's WorkCover certificate with written indication that physiotherapy is required is needed for WorkCover appointments. Medicare rebates are available with a valid GP referral for a Chronic Disease Management plan."}}]});
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
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .faq-icon svg { width: 14px; height: 14px; }
          .faq-icon .icon-minus { display: none; }
          .faq-trigger[aria-expanded="true"] .faq-icon .icon-plus { display: none; }
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
      <h2>Mosman Clinic FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first visit to our Mosman physiotherapy and chiropractic clinic.</p>
      <button class="cta-btn">Book at Mosman</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a referral to book at your Mosman clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No referral is required. You can book directly online or call us at (02) 9412 2222. If you have a GP referral for a Medicare Care Plan (CDM), we accept those too, which allows you to claim a Medicare rebate on up to 5 physio sessions per year.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where is your Mosman clinic located?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our Mosman clinic is located at Suite 2, 884 Military Road, Mosman NSW 2088. There is on-street parking available directly outside on Military Road, with additional parking at the Raglan Street East Carpark just behind the building.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where can I park near your Mosman clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">On-street parking is available on Military Road directly outside the clinic. The Raglan Street East Carpark is located directly behind the building and provides additional parking options. Both are convenient for most appointment lengths.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What are your Mosman clinic opening hours?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our Mosman clinic is open Monday to Thursday 8am to 7pm, Friday 8am to 6pm, and Saturday 8am to 3pm. We are closed on Sundays. Book online 24/7 or call us to find a time that suits you.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What services are available at your Mosman clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our Mosman clinic offers physiotherapy, sports physiotherapy, orthopaedic rehabilitation, exercise rehabilitation, dry needling, shockwave therapy, and corporate occupational services. We also accept WorkCover, CTP claims, NDIS, and offer Telehealth consultations.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What happens at my first appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Your first appointment begins with a personal meeting with your physio, covering your injury, medical background, daily routine, and goals. A thorough physical assessment follows, after which your practitioner develops a personalised treatment plan including an exercise program. Follow-up sessions are then scheduled to support your recovery.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many sessions will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Most patients at our Mosman clinic experience meaningful improvement after 2 to 3 sessions. The total number depends on your injury and how long you have had it. Your practitioner will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment. Acute injuries typically resolve faster than chronic or complex conditions.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do you accept private health insurance and WorkCover at Mosman?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. We accept all major Australian health funds via HICAPS, including Medibank, HCF, Bupa, NIB, and Australian Unity, so you can claim your rebate on the spot. We are also WorkCover approved and accept CTP claims. A doctor's WorkCover certificate with written indication that physiotherapy is required is needed for WorkCover appointments. Medicare rebates are available with a valid GP referral for a Chronic Disease Management plan.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ?location=9' },
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

customElements.define('ih-mosman-faq', IhMosmanFaq);
