class IhNdisPhysiotherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-ndis-physiotherapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-ndis-physiotherapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Are you a registered NDIS service provider?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Infinite Health is a registered NDIS service provider. All our offered treatments and NDIS physiotherapists are in line with the NDIS Practice Standards and Code of Conduct. We will always treat our clients with the utmost respect and care regardless of age, race, or personal conditions."}}, {"@type": "Question", "name": "What types of physiotherapy services are covered by the NDIS?", "acceptedAnswer": {"@type": "Answer", "text": "NDIS physiotherapy can help improve mobility, strength, coordination, and overall physical function. Covered services include comprehensive assessments to understand your physical condition, limitations, and goals; personalised treatment plans that may include exercises, manual therapy, and other techniques; financial support for assistive equipment; home exercise programs to maintain and improve physical capabilities; and expert advice for individuals and their support networks on managing disability."}}, {"@type": "Question", "name": "What does a typical NDIS physio session look like?", "acceptedAnswer": {"@type": "Answer", "text": "During an appointment, your physiotherapist will first assess and discuss your current concerns, goals, and ideal outcomes from physiotherapy. In the initial session, this will also include a review of your medical history and disability condition. After which, the customised treatment plan will be applied throughout the session, taking care to ensure your safety and comfort. Sessions are carried out in a private environment and can also include the attendance of support individuals if necessary. Your physiotherapist will also provide specific advice for performing exercises at home."}}, {"@type": "Question", "name": "How often will I need to see a physio?", "acceptedAnswer": {"@type": "Answer", "text": "This will depend on the treatment plan and schedule that your physio has created for you. In some cases, you can expect sessions to be as frequent as once every one to two weeks. For less urgent conditions, less frequent sessions may be appropriate. Your physiotherapist will discuss the recommended frequency at your initial assessment and adjust the plan as your condition progresses."}}, {"@type": "Question", "name": "Will I get exercises to do at home?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our physiotherapists may guide you in performing specialised stretching and strengthening exercises during your sessions. They may also prescribe sets of exercises to be carried out at home between appointments to help maintain and improve your physical condition. It is important to do them as prescribed as they will factor into your ongoing progress."}}, {"@type": "Question", "name": "Do I need a referral to access NDIS physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need a GP referral to see a physiotherapist under the NDIS. You simply need an active NDIS plan with funding allocated to the relevant support category. If you are unsure whether your plan includes funding for physiotherapy, your support coordinator or plan manager can help clarify. You are also welcome to contact us directly and we will assist you in confirming your eligibility and getting you booked in."}}, {"@type": "Question", "name": "What NDIS funding category covers physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "Physiotherapy is funded under the Improved Daily Living category (Support Category 15) of your NDIS plan. This category covers capacity building supports that help you develop skills and independence, including assessments, treatment sessions, and home exercise programs. In some cases, physiotherapy may also be funded under the Improved Health and Wellbeing category (Support Category 8), depending on your plan goals and how your supports are allocated."}}, {"@type": "Question", "name": "Can I choose my own NDIS physiotherapist?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. As an NDIS participant, you have the right to choose your own service providers, including your physiotherapist. Infinite Health is a registered NDIS provider with clinics across Central and North Sydney, including Chatswood, North Sydney, Sydney CBD, and Mosman. We welcome self-managed, plan-managed, and NDIA-managed participants. Contact us to discuss your plan and we will work with you or your support coordinator to arrange the right care."}}]});
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

          .faq-right {
            flex: 1;
          }

          .faq-list {
            list-style: none;
            border-top: 1px solid rgba(0,0,0,0.1);
          }

          .faq-item {
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }

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

          .faq-trigger[aria-expanded="true"] .faq-question {
            color: #ff6218;
          }

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

          .faq-panel.open { max-height: 400px; }

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
      <h2>NDIS Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know about accessing physiotherapy through your NDIS plan.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Are you a registered NDIS service provider?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes, Infinite Health is a registered NDIS service provider. All our offered treatments and NDIS physiotherapists are in line with the NDIS Practice Standards and Code of Conduct. We will always treat our clients with the utmost respect and care regardless of age, race, or personal conditions.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What types of physiotherapy services are covered by the NDIS?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">NDIS physiotherapy can help improve mobility, strength, coordination, and overall physical function. Covered services include comprehensive assessments to understand your physical condition, limitations, and goals; personalised treatment plans that may include exercises, manual therapy, and other techniques; financial support for assistive equipment; home exercise programs to maintain and improve physical capabilities; and expert advice for individuals and their support networks on managing disability.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What does a typical NDIS physio session look like?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">During an appointment, your physiotherapist will first assess and discuss your current concerns, goals, and ideal outcomes from physiotherapy. In the initial session, this will also include a review of your medical history and disability condition. After which, the customised treatment plan will be applied throughout the session, taking care to ensure your safety and comfort. Sessions are carried out in a private environment and can also include the attendance of support individuals if necessary. Your physiotherapist will also provide specific advice for performing exercises at home.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How often will I need to see a physio?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">This will depend on the treatment plan and schedule that your physio has created for you. In some cases, you can expect sessions to be as frequent as once every one to two weeks. For less urgent conditions, less frequent sessions may be appropriate. Your physiotherapist will discuss the recommended frequency at your initial assessment and adjust the plan as your condition progresses.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will I get exercises to do at home?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Our physiotherapists may guide you in performing specialised stretching and strengthening exercises during your sessions. They may also prescribe sets of exercises to be carried out at home between appointments to help maintain and improve your physical condition. It is important to do them as prescribed as they will factor into your ongoing progress.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a referral to access NDIS physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No, you do not need a GP referral to see a physiotherapist under the NDIS. You simply need an active NDIS plan with funding allocated to the relevant support category. If you are unsure whether your plan includes funding for physiotherapy, your support coordinator or plan manager can help clarify. You are also welcome to contact us directly and we will assist you in confirming your eligibility and getting you booked in.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What NDIS funding category covers physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Physiotherapy is funded under the Improved Daily Living category (Support Category 15) of your NDIS plan. This category covers capacity building supports that help you develop skills and independence, including assessments, treatment sessions, and home exercise programs. In some cases, physiotherapy may also be funded under the Improved Health and Wellbeing category (Support Category 8), depending on your plan goals and how your supports are allocated.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can I choose my own NDIS physiotherapist?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. As an NDIS participant, you have the right to choose your own service providers, including your physiotherapist. Infinite Health is a registered NDIS provider with clinics across Central and North Sydney, including Chatswood, North Sydney, Sydney CBD, and Mosman. We welcome self-managed, plan-managed, and NDIA-managed participants. Contact us to discuss your plan and we will work with you or your support coordinator to arrange the right care.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
    `;

    shadow.querySelector('.cta-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' },
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

customElements.define('ih-ndis-physiotherapy-faq', IhNdisPhysiotherapyFaq);
