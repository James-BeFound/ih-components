class IhSportPhysiotherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-sport-physiotherapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-sport-physiotherapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What should I share with my sports physio at my first appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Share your sport, training load, fitness goals, and a clear description of your injury including when it started and what aggravates it. The more we understand about your activity level and performance goals, the more targeted your treatment plan will be. At your first appointment we will assess your movement, identify the affected muscles or joints, and begin building your personalised injury management plan."}}, {"@type": "Question", "name": "Is sports physiotherapy different from general physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "Sports physiotherapy is a focused branch of physiotherapy specifically targeted at injury prevention, performance recovery, and return-to-sport rehabilitation. It typically involves sport-specific exercise programming, advanced manual therapy, dry needling, and post-surgical rehab protocols tailored to athletic demands. At Infinite Health, our team delivers both general and sports physiotherapy across all of our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Lane Cove, Mosman, St Leonards, and Hornsby."}}, {"@type": "Question", "name": "Do I need to follow my treatment plan at home?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Your home exercise program or gym program is an essential part of your recovery. In-clinic sessions build the foundation, but consistent home and gym exercise accelerates your progress and reduces the risk of injury. If any exercise causes increased pain or discomfort, let your physio know so your plan can be adjusted."}}, {"@type": "Question", "name": "What is remedial sports massage and how does it help?", "acceptedAnswer": {"@type": "Answer", "text": "Remedial massage therapy targets specific damaged, tense, or restricted muscles to accelerate natural healing and recovery. It is particularly effective for musculoskeletal sports injuries, addressing both symptoms and underlying causes. Many of our sports physio programs incorporate remedial massage alongside exercise rehabilitation for faster results."}}, {"@type": "Question", "name": "Do I need a GP referral to see a sports physio?", "acceptedAnswer": {"@type": "Answer", "text": "No. You can book directly with our sports physiotherapists without a GP referral. If you have a WorkCover, DVA, or Medicare Enhanced Primary Care plan, a referral or care plan will be required."}}, {"@type": "Question", "name": "Do you treat both recreational and competitive athletes?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. We treat everyone from casual gym-goers and weekend warriors through to competitive club athletes and elite performers. Your treatment plan is built around your specific goals and activity level. Sports physiotherapy appointments are available across all of our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Lane Cove, Mosman, St Leonards, and Hornsby."}}]});
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

          /* ── Left column ── */
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

          /* ── Right column ── */
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

          /* ── Desktop: two columns ── */
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
      <h2>Sport Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first sport physiotherapy appointment.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>

      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What should I share with my sports physio at my first appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Share your sport, training load, fitness goals, and a clear description of your injury including when it started and what aggravates it. The more we understand about your activity level and performance goals, the more targeted your treatment plan will be. At your first appointment we will assess your movement, identify the affected muscles or joints, and begin building your personalised injury management plan.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is sports physiotherapy different from general physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Sports physiotherapy is a focused branch of physiotherapy specifically targeted at injury prevention, performance recovery, and return-to-sport rehabilitation. It typically involves sport-specific exercise programming, advanced manual therapy, dry needling, and post-surgical rehab protocols tailored to athletic demands. At Infinite Health, our team delivers both general and sports physiotherapy across all of our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Lane Cove, Mosman, St Leonards, and Hornsby.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need to follow my treatment plan at home?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Your home exercise program or gym program is an essential part of your recovery. In-clinic sessions build the foundation, but consistent home and gym exercise accelerates your progress and reduces the risk of injury. If any exercise causes increased pain or discomfort, let your physio know so your plan can be adjusted.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is remedial sports massage and how does it help?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Remedial massage therapy targets specific damaged, tense, or restricted muscles to accelerate natural healing and recovery. It is particularly effective for musculoskeletal sports injuries, addressing both symptoms and underlying causes. Many of our sports physio programs incorporate remedial massage alongside exercise rehabilitation for faster results.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a GP referral to see a sports physio?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No. You can book directly with our sports physiotherapists without a GP referral. If you have a WorkCover, DVA, or Medicare Enhanced Primary Care plan, a referral or care plan will be required.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do you treat both recreational and competitive athletes?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Absolutely. We treat everyone from casual gym-goers and weekend warriors through to competitive club athletes and elite performers. Your treatment plan is built around your specific goals and activity level. Sports physiotherapy appointments are available across all of our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Lane Cove, Mosman, St Leonards, and Hornsby.</p>
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

customElements.define('ih-sport-physiotherapy-faq', IhSportPhysiotherapyFaq);
