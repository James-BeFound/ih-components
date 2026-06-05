class IhWorkcoverPhysiotherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-workcover-physiotherapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-workcover-physiotherapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WorkCover physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "WorkCover physiotherapy refers to physiotherapy treatment provided to individuals who have sustained a workplace injury and are covered under the NSW workers compensation scheme. If you have been injured at work or in the course of your employment, you are entitled to claim reimbursement for your physiotherapy sessions, or have them billed directly to your employer's workers compensation insurer. Our physiotherapists at Infinite Health are WorkCover approved and can provide treatment for a wide range of work-related injuries and conditions."}}, {"@type": "Question", "name": "Am I eligible for WorkCover physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "You are eligible if you have sustained an injury as a result of an on-the-job accident or in the course of your employment. This includes physical injuries from lifting, falls, or repetitive tasks, as well as conditions that develop gradually due to your working environment. To access WorkCover physiotherapy, you will generally need to have lodged a workers compensation claim with your employer and received approval from the insurer. Your physiotherapist can help guide you through this process."}}, {"@type": "Question", "name": "What injuries and conditions does WorkCover physio treat?", "acceptedAnswer": {"@type": "Answer", "text": "Our WorkCover physiotherapists treat a broad range of workplace injuries, including musculoskeletal strains and sprains in the hands, arms, legs, back and neck from repeated heavy lifting; back and neck pain from prolonged sitting or improper lifting techniques; overuse injuries such as tendinitis and bursitis; postural imbalances from prolonged standing or sitting; and joint pain or injuries from workplace falls and accidents. We also treat general muscle tightness and headaches caused by work-related stress and fatigue."}}, {"@type": "Question", "name": "Do I need a GP referral for WorkCover physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "In most cases you do not need a GP referral to see a physiotherapist under the NSW workers compensation scheme. However, you will need to have an accepted workers compensation claim in place. It is advisable to inform your employer of your injury as soon as possible and follow the correct reporting process. Your employer's insurer will then advise on the approved treatment pathway. If you are unsure, contact us directly and we can help clarify the process."}}, {"@type": "Question", "name": "How do I book a WorkCover physiotherapy appointment?", "acceptedAnswer": {"@type": "Answer", "text": "You can book directly through our website or by calling your nearest Infinite Health clinic. When booking, let us know that your appointment is under a WorkCover claim so we can prepare the appropriate paperwork. You will need to bring your claim number, insurer details, and any relevant documentation from your employer or treating doctor. Our team will handle the billing directly with your insurer so there is no out-of-pocket cost for approved treatment."}}, {"@type": "Question", "name": "What happens at my first WorkCover physio appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Your first appointment will begin with a thorough assessment of your injury, including a review of how it occurred, your current symptoms, and any impact on your ability to work. Your physiotherapist will then carry out a physical examination and develop a tailored treatment plan with clear goals around pain reduction, functional recovery, and safe return to work. Regular progress reports can be provided to your insurer or employer as required."}}, {"@type": "Question", "name": "How long will my WorkCover physio treatment take?", "acceptedAnswer": {"@type": "Answer", "text": "The duration of treatment depends on the nature and severity of your injury. Minor soft tissue injuries and sprains may resolve within 4 to 8 sessions. More complex injuries, such as those involving joints, discs, or significant muscle damage, may require a longer program. Your physiotherapist will provide a clear treatment estimate at your initial assessment and keep your insurer updated on your progress and expected return-to-work timeline."}}, {"@type": "Question", "name": "Can I choose my own physiotherapist under WorkCover?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Under the NSW workers compensation scheme, you generally have the right to choose your own treating physiotherapist. Infinite Health physiotherapists are WorkCover approved across our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Mosman, Hornsby, and Lane Cove. If you are unsure whether treatment at one of our clinics will be covered under your claim, contact your insurer directly or reach out to us and we will assist you."}}]});
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
      <h2>WorkCover Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know about claiming physiotherapy under the NSW workers compensation scheme.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is WorkCover physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">WorkCover physiotherapy refers to physiotherapy treatment provided to individuals who have sustained a workplace injury and are covered under the NSW workers compensation scheme. If you have been injured at work or in the course of your employment, you are entitled to claim reimbursement for your physiotherapy sessions, or have them billed directly to your employer's workers compensation insurer. Our physiotherapists at Infinite Health are WorkCover approved and can provide treatment for a wide range of work-related injuries.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Am I eligible for WorkCover physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">You are eligible if you have sustained an injury as a result of an on-the-job accident or in the course of your employment. This includes physical injuries from lifting, falls, or repetitive tasks, as well as conditions that develop gradually due to your working environment. To access WorkCover physiotherapy, you will generally need to have lodged a workers compensation claim with your employer and received approval from the insurer. Your physiotherapist can help guide you through this process.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What injuries and conditions does WorkCover physio treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our WorkCover physiotherapists treat a broad range of workplace injuries, including musculoskeletal strains and sprains in the hands, arms, legs, back and neck from repeated heavy lifting; back and neck pain from prolonged sitting or improper lifting techniques; overuse injuries such as tendinitis and bursitis; postural imbalances from prolonged standing or sitting; and joint pain from workplace falls and accidents. We also treat muscle tightness and headaches caused by work-related stress and fatigue.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a GP referral for WorkCover physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">In most cases you do not need a GP referral to see a physiotherapist under the NSW workers compensation scheme. However, you will need to have an accepted workers compensation claim in place. It is advisable to inform your employer of your injury as soon as possible and follow the correct reporting process. Your employer's insurer will then advise on the approved treatment pathway. If you are unsure, contact us directly and we can help clarify the process.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How do I book a WorkCover physiotherapy appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">You can book directly through our website or by calling your nearest Infinite Health clinic. When booking, let us know that your appointment is under a WorkCover claim so we can prepare the appropriate paperwork. You will need to bring your claim number, insurer details, and any relevant documentation from your employer or treating doctor. Our team will handle the billing directly with your insurer so there is no out-of-pocket cost for approved treatment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What happens at my first WorkCover physio appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Your first appointment will begin with a thorough assessment of your injury, including a review of how it occurred, your current symptoms, and any impact on your ability to work. Your physiotherapist will then carry out a physical examination and develop a tailored treatment plan with clear goals around pain reduction, functional recovery, and safe return to work. Regular progress reports can be provided to your insurer or employer as required.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long will my WorkCover physio treatment take?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The duration of treatment depends on the nature and severity of your injury. Minor soft tissue injuries and sprains may resolve within 4 to 8 sessions. More complex injuries involving joints, discs, or significant muscle damage may require a longer program. Your physiotherapist will provide a clear treatment estimate at your initial assessment and keep your insurer updated on your progress and expected return-to-work timeline.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can I choose my own physiotherapist under WorkCover?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Under the NSW workers compensation scheme, you generally have the right to choose your own treating physiotherapist. Infinite Health physiotherapists are WorkCover approved across our Sydney clinics, including Chatswood, North Sydney, Sydney CBD, Mosman, Hornsby, and Lane Cove. If you are unsure whether treatment at one of our clinics will be covered under your claim, contact your insurer directly or reach out to us and we will assist you.</p>
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

customElements.define('ih-workcover-physiotherapy-faq', IhWorkcoverPhysiotherapyFaq);
