class IhPhysiotherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-physiotherapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-physiotherapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "Physiotherapy is an evidence-based allied health discipline focused on diagnosing, treating, and preventing conditions that affect movement, function, and physical performance. Physiotherapists are trained to work across musculoskeletal, neurological, sports, and chronic disease management. At Infinite Health, our physios combine hands-on treatment, exercise rehabilitation, and clinical education to identify the root cause of your condition and build a personalised plan to resolve it."}}, {"@type": "Question", "name": "Do I need a GP referral to see a physiotherapist?", "acceptedAnswer": {"@type": "Answer", "text": "No. You can book directly with a physiotherapist without a GP referral. If you have private health insurance with extras cover, you can claim your sessions directly. A referral may be required if you are attending under a Medicare chronic disease management plan or WorkCover NSW. Our team will guide you through any funding or referral requirements at your first appointment."}}, {"@type": "Question", "name": "What conditions does physiotherapy treat?", "acceptedAnswer": {"@type": "Answer", "text": "Physiotherapists treat a wide range of musculoskeletal, neurological, and chronic conditions. Common presentations include back pain, neck pain, disc injuries, sciatica, shoulder injuries, rotator cuff tears, knee injuries, ACL rehabilitation, sports injuries, tendinopathy, hip pain, ankle sprains, headaches, and post-surgical recovery. At Infinite Health, we also offer specialised services including women's health physiotherapy, NDIS physiotherapy, and WorkCover rehabilitation."}}, {"@type": "Question", "name": "How many physio sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your diagnosis and how long you have had the condition. Acute soft tissue injuries such as muscle strains or ankle sprains may resolve in 4 to 6 sessions over 2 to 4 weeks. More complex presentations such as disc injuries, tendinopathy, or post-surgical rehab typically require 8 to 12 sessions over 6 to 12 weeks. Your physiotherapist will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment."}}, {"@type": "Question", "name": "What is the difference between physiotherapy and chiropractic?", "acceptedAnswer": {"@type": "Answer", "text": "Both professions treat musculoskeletal conditions, but their approaches differ. Chiropractors focus primarily on spinal manipulation and joint adjustments to address vertebral dysfunction. Physiotherapists take a broader clinical approach, combining manual therapy, exercise rehabilitation, dry needling, shockwave therapy, and patient education to address the root cause and build long-term resilience. At Infinite Health, we offer both services and our practitioners work together to provide the most comprehensive care."}}, {"@type": "Question", "name": "Does private health insurance cover physiotherapy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Most private health insurance policies with extras cover include physiotherapy. The amount you can claim depends on your insurer and level of cover. We accept all major private health funds and our reception team can check your entitlements before your appointment. If you are attending under WorkCover, NDIS, or a Medicare chronic disease management plan, additional funding options may also be available."}}, {"@type": "Question", "name": "Does physiotherapy hurt?", "acceptedAnswer": {"@type": "Answer", "text": "Physiotherapy should not be painful, though some techniques such as deep tissue massage, dry needling, or joint mobilisation may cause temporary soreness during or after treatment. This is a normal response and usually settles within 24 to 48 hours. Your physiotherapist will always explain what to expect and adjust the treatment intensity based on your comfort and tolerance. Open communication with your physio ensures treatment remains effective and manageable throughout your recovery."}}, {"@type": "Question", "name": "How do I know if I need physiotherapy or surgery?", "acceptedAnswer": {"@type": "Answer", "text": "The majority of musculoskeletal conditions, including disc injuries, rotator cuff tears, and ligament sprains, respond well to physiotherapy without requiring surgery. Surgery is generally only considered when conservative treatment has been trialled without sufficient improvement, or when there is a structural injury that cannot heal on its own. Your physiotherapist will conduct a thorough assessment and, if surgery may be warranted, will refer you to an appropriate specialist and support pre- and post-operative rehabilitation."}}]});
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
      <h2>Physiotherapy FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first physiotherapy appointment at Infinite Health.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>

      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Physiotherapy is an evidence-based allied health discipline focused on diagnosing, treating, and preventing conditions that affect movement, function, and physical performance. Physiotherapists are trained to work across musculoskeletal, neurological, sports, and chronic disease management. At Infinite Health, our physios combine hands-on treatment, exercise rehabilitation, and clinical education to identify the root cause of your condition and build a personalised plan to resolve it.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a GP referral to see a physiotherapist?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No. You can book directly with a physiotherapist without a GP referral. If you have private health insurance with extras cover, you can claim your sessions directly. A referral may be required if you are attending under a Medicare chronic disease management plan or WorkCover NSW. Our team will guide you through any funding or referral requirements at your first appointment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What conditions does physiotherapy treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Physiotherapists treat a wide range of musculoskeletal, neurological, and chronic conditions. Common presentations include back pain, neck pain, disc injuries, sciatica, shoulder injuries, rotator cuff tears, knee injuries, ACL rehabilitation, sports injuries, tendinopathy, hip pain, ankle sprains, headaches, and post-surgical recovery. At Infinite Health, we also offer specialised services including women's health physiotherapy, NDIS physiotherapy, and WorkCover rehabilitation.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many physio sessions will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">It depends on your diagnosis and how long you have had the condition. Acute soft tissue injuries such as muscle strains or ankle sprains may resolve in 4 to 6 sessions over 2 to 4 weeks. More complex presentations such as disc injuries, tendinopathy, or post-surgical rehab typically require 8 to 12 sessions over 6 to 12 weeks. Your physiotherapist will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is the difference between physiotherapy and chiropractic?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Both professions treat musculoskeletal conditions, but their approaches differ. Chiropractors focus primarily on spinal manipulation and joint adjustments to address vertebral dysfunction. Physiotherapists take a broader clinical approach, combining manual therapy, exercise rehabilitation, dry needling, shockwave therapy, and patient education to address the root cause and build long-term resilience. At Infinite Health, we offer both services and our practitioners work together to provide the most comprehensive care.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does private health insurance cover physiotherapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Most private health insurance policies with extras cover include physiotherapy. The amount you can claim depends on your insurer and level of cover. We accept all major private health funds and our reception team can check your entitlements before your appointment. If you are attending under WorkCover, NDIS, or a Medicare chronic disease management plan, additional funding options may also be available.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does physiotherapy hurt?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Physiotherapy should not be painful, though some techniques such as deep tissue massage, dry needling, or joint mobilisation may cause temporary soreness during or after treatment. This is a normal response and usually settles within 24 to 48 hours. Your physiotherapist will always explain what to expect and adjust the treatment intensity based on your comfort and tolerance. Open communication with your physio ensures treatment remains effective and manageable throughout your recovery.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How do I know if I need physiotherapy or surgery?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The majority of musculoskeletal conditions, including disc injuries, rotator cuff tears, and ligament sprains, respond well to physiotherapy without requiring surgery. Surgery is generally only considered when conservative treatment has been trialled without sufficient improvement, or when there is a structural injury that cannot heal on its own. Your physiotherapist will conduct a thorough assessment and, if surgery may be warranted, will refer you to an appropriate specialist and support pre- and post-operative rehabilitation.</p>
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

customElements.define('ih-physiotherapy-faq', IhPhysiotherapyFaq);
