class IhCuppingTherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-cupping-therapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-cupping-therapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is cupping therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Cupping therapy is a treatment originating from traditional Chinese medicine that involves placing special cups on the skin to create suction. The suction relieves muscle tension and increases blood flow, which promotes cellular healing and the formation of new connective tissue. A 2023 review published in the Journal of Back and Musculoskeletal Rehabilitation, evaluating 2,214 studies, concluded that cupping offers measurable benefits for soft tissue flexibility, neck and back pain, and a range of musculoskeletal and sports-related conditions."}}, {"@type": "Question", "name": "Does cupping therapy hurt?", "acceptedAnswer": {"@type": "Answer", "text": "Infinite Health's approach to cupping therapy is as pain-free as possible. Patients may experience mild to strong pressure where the cups are placed, similar in sensation to a deep tissue massage. This is caused by the superficial muscle layer being drawn into the cup, which is how the therapy is so effective in providing relief. Most patients find the sensation manageable and report significant relief after their session."}}, {"@type": "Question", "name": "Are there any side effects of cupping therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Cupping is a very safe procedure, backed by sports scientists in Australia and used by Olympic athletes worldwide. The therapy will leave some markings and bruising on the skin where the cups were placed. This discolouration is a completely normal reaction and is typically mild. Unlike actual bruises, the marks from cupping will not be as tender to the touch. For first-time patients, you might experience some mild discomfort in the treated areas, which is often a sign of the treatment working."}}, {"@type": "Question", "name": "Where are the most common areas for cupping?", "acceptedAnswer": {"@type": "Answer", "text": "Cupping therapy is most commonly applied to the back, buttocks, groin, legs, chest, and abdomen. These areas are where muscle tension and stagnation most frequently accumulate, particularly for those with back pain, neck pain, shoulder pain, and sports-related injuries. Your therapist will assess your condition and identify the most appropriate areas to target during your session."}}, {"@type": "Question", "name": "How long will I have cupping marks for?", "acceptedAnswer": {"@type": "Answer", "text": "The minor discolouration caused by the cups typically fades within seven days of your appointment. Cupping marks are not permanent. The bruising results directly from increased blood being drawn to the surface of the skin as tiny vessels break open. The extent of the marks varies from person to person depending on skin type and the degree of tension in the treated area."}}, {"@type": "Question", "name": "When should I avoid cupping therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Cupping is not appropriate for every patient. You should avoid cupping if you are on blood-thinning medication, have deep wounds or skin ulcers, sunburn, thinning skin, internal organ disorders, or have experienced recent trauma to the body. At Infinite Health, we will not apply cupping directly on veins, nerves, inflamed skin, eyes, varicose veins, or lymph nodes. If you have any blood conditions or circumstances that might affect how you respond to treatment, please raise them with your therapist before your session."}}, {"@type": "Question", "name": "How often should I get cupping treatments?", "acceptedAnswer": {"@type": "Answer", "text": "The optimal frequency varies from person to person and depends on your condition and treatment plan. For some patients, sessions as frequent as two to three times per week are appropriate. Cupping is applied as part of your remedial massage session, so the frequency will be guided by your overall massage treatment plan. If you are unsure about how often you should come in, or whether cupping is the right treatment for your condition, get in touch with the Infinite Health team and we will advise you."}}, {"@type": "Question", "name": "How long is a cupping therapy session?", "acceptedAnswer": {"@type": "Answer", "text": "Cupping is applied as part of your remedial massage session rather than as a standalone appointment. Remedial massage sessions run for either 60 or 90 minutes, and cupping is incorporated within that time based on your treatment needs. Kevin Jensen, our Remedial Massage Therapist, will discuss how cupping fits into your session at your first appointment."}}]});
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
      <h2>Cupping Therapy FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know about cupping therapy for pain relief and muscle recovery.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is cupping therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Cupping therapy is a treatment originating from traditional Chinese medicine that involves placing special cups on the skin to create suction. The suction relieves muscle tension and increases blood flow, which promotes cellular healing and the formation of new connective tissue. A 2023 review published in the Journal of Back and Musculoskeletal Rehabilitation, evaluating 2,214 studies, concluded that cupping offers measurable benefits for soft tissue flexibility, neck and back pain, and a range of musculoskeletal and sports-related conditions.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does cupping therapy hurt?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Infinite Health's approach to cupping therapy is as pain-free as possible. Patients may experience mild to strong pressure where the cups are placed, similar in sensation to a deep tissue massage. This is caused by the superficial muscle layer being drawn into the cup, which is how the therapy is so effective in providing relief. Most patients find the sensation manageable and report significant relief after their session.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Are there any side effects of cupping therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Cupping is a very safe procedure, backed by sports scientists in Australia and used by Olympic athletes worldwide. The therapy will leave some markings and bruising on the skin where the cups were placed. This discolouration is a completely normal reaction and is typically mild. Unlike actual bruises, the marks from cupping will not be as tender to the touch. For first-time patients, you might experience some mild discomfort in the treated areas, which is often a sign of the treatment working.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where are the most common areas for cupping?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Cupping therapy is most commonly applied to the back, buttocks, groin, legs, chest, and abdomen. These areas are where muscle tension and stagnation most frequently accumulate, particularly for those with back pain, neck pain, shoulder pain, and sports-related injuries. Your therapist will assess your condition and identify the most appropriate areas to target during your session.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long will I have cupping marks for?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The minor discolouration caused by the cups typically fades within seven days of your appointment. Cupping marks are not permanent. The bruising results directly from increased blood being drawn to the surface of the skin as tiny vessels break open. The extent of the marks varies from person to person depending on skin type and the degree of tension in the treated area.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">When should I avoid cupping therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Cupping is not appropriate for every patient. You should avoid cupping if you are on blood-thinning medication, have deep wounds or skin ulcers, sunburn, thinning skin, internal organ disorders, or have experienced recent trauma to the body. At Infinite Health, we will not apply cupping directly on veins, nerves, inflamed skin, eyes, varicose veins, or lymph nodes. If you have any blood conditions or circumstances that might affect how you respond to treatment, please raise them with your therapist before your session.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How often should I get cupping treatments?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The optimal frequency varies from person to person and depends on your condition and treatment plan. For some patients, sessions as frequent as two to three times per week are appropriate. Cupping is applied as part of your remedial massage session, so the frequency will be guided by your overall massage treatment plan. If you are unsure about how often you should come in, or whether cupping is the right treatment for your condition, get in touch with the Infinite Health team and we will advise you.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long is a cupping therapy session?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Cupping is applied as part of your remedial massage session rather than as a standalone appointment. Remedial massage sessions run for either 60 or 90 minutes, and cupping is incorporated within that time based on your treatment needs. Kevin Jensen, our Remedial Massage Therapist, will discuss how cupping fits into your session at your first appointment.</p>
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

customElements.define('ih-cupping-therapy-faq', IhCuppingTherapyFaq);
