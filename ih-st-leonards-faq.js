class IhStLeonardsFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-st-leonards-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-st-leonards-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Do I need a referral to book at your St Leonards clinic?", "acceptedAnswer": {"@type": "Answer", "text": "No referral is required. Infinite Health physiotherapists are Primary Health Practitioners, so you can book directly online or by calling (02) 9412 2222. If you have a GP referral for a Medicare Chronic Disease Management plan, we accept those too, entitling you to up to 5 subsidised sessions per calendar year."}}, {"@type": "Question", "name": "Where is your St Leonards clinic and how do I get there?", "acceptedAnswer": {"@type": "Answer", "text": "Our St Leonards clinic is located at Suite 304, Level 3, 69 Christie Street, St Leonards NSW 2065. St Leonards Train Station (North Shore Line) and Crows Nest Metro Station are both a short walk away. If you are driving, free 2-hour parking is available at Mall 88, a 4-minute walk from the clinic, with street parking also available nearby."}}, {"@type": "Question", "name": "What are your St Leonards clinic opening hours?", "acceptedAnswer": {"@type": "Answer", "text": "Our St Leonards clinic is open Monday to Thursday 8am to 7pm, Friday 8am to 6pm, and Saturday 8am to 4pm. We are closed on Sundays. Same-day and next-day appointments are often available. Book online 24/7 or call us to find a time that suits you."}}, {"@type": "Question", "name": "What services are available at your St Leonards clinic?", "acceptedAnswer": {"@type": "Answer", "text": "Our St Leonards clinic offers physiotherapy, sports physiotherapy, dry needling, and Telehealth consultations. We also support WorkCover and NDIS participants."}}, {"@type": "Question", "name": "What should I bring to my first appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Bring any relevant scans, X-rays, or imaging results if you have them, along with any referral letters and your private health or Medicare card. Wear comfortable clothing that allows your practitioner to access the area being treated."}}, {"@type": "Question", "name": "Can I get a same-day appointment at St Leonards?", "acceptedAnswer": {"@type": "Answer", "text": "Same-day and next-day appointments are often available at our St Leonards clinic. Book online 24/7 or call us directly on (02) 9412 2222 and we will do our best to find you an appointment as soon as possible."}}, {"@type": "Question", "name": "Do you accept private health insurance and WorkCover at St Leonards?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We accept all major Australian health funds via HICAPS, including Medibank, Bupa, NIB, HCF, HBF, AHM, CBHS, and Australian Unity, so you can claim your rebate on the spot with no paperwork. We are also WorkCover approved. WorkCover appointments require a doctor's certificate with written indication that physiotherapy is necessary. Medicare rebates are available with a valid GP referral for a Chronic Disease Management plan, providing up to 5 subsidised sessions per calendar year."}}]});
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
      <h2>St Leonards Clinic FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first visit to our St Leonards physiotherapy clinic.</p>
      <button class="cta-btn">Book at St Leonards</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a referral to book at your St Leonards clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No referral is required. Infinite Health physiotherapists are Primary Health Practitioners, so you can book directly online or by calling (02) 9412 2222. If you have a GP referral for a Medicare Chronic Disease Management plan, we accept those too, entitling you to up to 5 subsidised sessions per calendar year.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where is your St Leonards clinic and how do I get there?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our St Leonards clinic is located at Suite 304, Level 3, 69 Christie Street, St Leonards NSW 2065. St Leonards Train Station (North Shore Line) and Crows Nest Metro Station are both a short walk away. If you are driving, free 2-hour parking is available at Mall 88, a 4-minute walk from the clinic, with street parking also available nearby.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What are your St Leonards clinic opening hours?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our St Leonards clinic is open Monday to Thursday 8am to 7pm, Friday 8am to 6pm, and Saturday 8am to 4pm. We are closed on Sundays. Same-day and next-day appointments are often available. Book online 24/7 or call us to find a time that suits you.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What services are available at your St Leonards clinic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our St Leonards clinic offers physiotherapy, sports physiotherapy, dry needling, and Telehealth consultations. We also support WorkCover and NDIS participants.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What should I bring to my first appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Bring any relevant scans, X-rays, or imaging results if you have them, along with any referral letters and your private health or Medicare card. Wear comfortable clothing that allows your practitioner to access the area being treated.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can I get a same-day appointment at St Leonards?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Same-day and next-day appointments are often available at our St Leonards clinic. Book online 24/7 or call us directly on (02) 9412 2222 and we will do our best to find you an appointment as soon as possible.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do you accept private health insurance and WorkCover at St Leonards?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. We accept all major Australian health funds via HICAPS, including Medibank, Bupa, NIB, HCF, HBF, AHM, CBHS, and Australian Unity, so you can claim your rebate on the spot with no paperwork. We are also WorkCover approved. WorkCover appointments require a doctor's certificate with written indication that physiotherapy is necessary. Medicare rebates are available with a valid GP referral for a Chronic Disease Management plan, providing up to 5 subsidised sessions per calendar year.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/org_2wfUwagaVRVTSC9Ax7BQav3hbSZ?location=793' },
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

customElements.define('ih-st-leonards-faq', IhStLeonardsFaq);
