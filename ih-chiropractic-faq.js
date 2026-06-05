class IhChiropracticFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-chiropractic-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-chiropractic-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is the difference between a chiropractor and a physiotherapist for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Both can help with back pain but through different approaches. Chiropractors focus primarily on spinal manipulation and adjustments to address joint dysfunction. Physiotherapists take a broader clinical approach, combining manual therapy, exercise rehabilitation, dry needling, shockwave therapy, and patient education to address the underlying cause of pain and build long-term resilience. At Infinite Health, we offer both chiropractic and physiotherapy, and our practitioners often work together to give you the most comprehensive care."}}, {"@type": "Question", "name": "What does a physiotherapist do?", "acceptedAnswer": {"@type": "Answer", "text": "Physiotherapists are university-trained allied health professionals who assess, diagnose, and treat conditions affecting movement and function. In a back pain context, your physio will take a detailed history, perform a physical assessment to identify the cause of your pain, and design a personalised treatment plan. This typically includes hands-on therapy, targeted exercises, and education on how to manage and prevent your condition long term."}}, {"@type": "Question", "name": "When should I see a physio for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "You should see a physio if your back pain has lasted more than a few days without improvement, is affecting your ability to work or move, or is accompanied by nerve symptoms such as pain, numbness, or tingling in the legs. Seek urgent assessment if you experience sudden severe pain following an injury, weakness in your legs, or any changes to bladder or bowel function, as these may indicate a more serious condition requiring immediate attention."}}, {"@type": "Question", "name": "Does physio help sciatica?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, physiotherapy is one of the most effective treatments for sciatica. Most cases are caused by a disc pressing on the sciatic nerve, and research consistently shows that targeted physio can reduce nerve irritation, restore movement, and resolve symptoms without surgery. Treatment typically includes nerve mobilisation techniques, joint mobilisation, manual therapy, and a progressive strengthening program to reduce load on the affected disc."}}, {"@type": "Question", "name": "What does a physio do for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "For back pain specifically, your physio begins with a thorough assessment to identify the exact structure at fault, whether that is a muscle, disc, joint, or nerve. Treatment is then tailored to your diagnosis and typically includes manual therapy to restore joint movement, soft tissue release and dry needling to address muscle tension and spasm, shockwave therapy where disc or tendon pathology is involved, and a personalised exercise program to rebuild strength and stability in the spine."}}, {"@type": "Question", "name": "Should I see a physio for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "In most cases, yes. Physiotherapy is the recommended first-line treatment for back pain by both the Australian Physiotherapy Association and international clinical guidelines. Seeing a physio early, rather than waiting it out or relying solely on pain medication, significantly improves recovery outcomes and reduces the risk of back pain becoming chronic. Most acute back injuries that receive proper physio care resolve within weeks rather than months."}}, {"@type": "Question", "name": "Does physiotherapy help back pain?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and the evidence is strong. Multiple systematic reviews and clinical guidelines confirm that physiotherapy is one of the most effective treatments for acute, subacute, and chronic lower back pain. A combination of manual therapy and targeted exercise rehabilitation consistently outperforms rest or pain medication alone. The key is identifying the right treatment approach for your specific diagnosis, which is why a thorough assessment always comes first."}}, {"@type": "Question", "name": "How many physio sessions will I need for back pain?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your diagnosis and how long you have had the pain. Acute muscle strains may resolve in 4 to 6 sessions over 2 to 4 weeks. Disc-related injuries or sciatica typically require 8 to 12 sessions over 6 to 12 weeks. Chronic or complex back pain may need a longer program. Your physiotherapist will give you a realistic session estimate at your initial assessment and adjust the plan based on how you respond to treatment."}}]});
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
              width:450px;
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
      <h2>Chriopractic FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first chiropractic appointment.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>

      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What does a chiropractor do?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Chiropractors are allied healthcare professionals who treat issues pertaining to the Musculoskeletal and Nervous systems. They aim to reduce pain, improve joint range of motion and function, and restore normal joint position and posture through the use of chiropractic adjustments, mobilisations, soft tissue therapies, and rehabilitation exercises.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What can a chiropractor treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Chiropractors are well equipped with clinician knowledge and techniques to treat a range of musculoskeletal conditions. This includes, but is not limited to, back pain, neck pain, headaches, sciatica, disc irritation, sports injuries, postural imbalances, osteoarthritis, muscle strains and tightness, and more.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can a chiropractor fix my posture?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Chiropractors are well-versed at assessing and treating postural imbalances, as well as dysfunctions and injuries that can occur as a result of long-term postural issues. A chiropractor can help improve your posture with spinal adjustments, soft tissue therapy, and tailored stretches and exercises to improve mobility and stability of the spine and surrounding joints. While we want to ensure you get back feeling great, we understand that the best results come down to a long-term plan that treats the root cause of bad posture.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What are the benefits of chiropractic care?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Chiropractic can offer a range of benefits, including but not limited to pain relief, improved joint mobility, enhanced kinematic function, prevention of injuries, postural management, stress reduction, muscle strengthening and more.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is an adjustment and does it hurt?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">A chiropractic adjustment is a high velocity, low amplitude mobilisation technique aimed to restore normal range of motion to a restricted joint. Although brief discomfort may occur after an adjustment, pain is rare — in fact most people find having an adjustment relieving and relaxing. With some adjustments you may sometimes hear or feel a 'pop' or 'crack' sound. This is simply the result of a change in pressure in the joint and is a harmless noise.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What can I expect in my first session?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">We have different treatment options to suit every body. For those who enjoy longer hands-on treatment or suffer from more complex conditions, you can expect a personalised consultation consisting of a detailed history taking and tailored physical exam to accurately diagnose your condition, followed by treatment consisting of chiropractic adjustments, soft tissue therapy, dry needling (if required) and specific exercises to relieve pain and improve function. We also offer shorter initial consultations to cater to those with less complicated conditions, busier schedules, or those requiring maintenance work only.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will I be adjusted on my first visit?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Depending on the condition that you present with, and in the absence of any contraindication you may have, you will be adjusted on your first visit.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need a referral to see a chiropractor?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No — you can book directly with our chiropractors without a referral. If you have a relevant diagnosis or additional information about your injury, such as X-rays, we encourage you to bring it along so our team can take it into consideration. Chiropractors are a great first point of contact for many conditions, and also have the capabilities to refer outwards where appropriate.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do I need X-rays before my first consultation?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">No — you do not need any imaging before your first visit. If imaging is required, chiropractors can refer for bulk billed X-rays, as well as other imaging modalities or tests where appropriate. If you have any existing images and/or reports, please bring them to your first appointment so your clinician can take them into consideration.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What should I wear to my appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">We recommend wearing comfortable, loose-fitting clothing so we can properly visualise and assess your injury and the problem areas. If you're a runner, walker, or sportsperson, it is a good idea to wear the footwear that you typically wear when exercising.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will I need to do anything after my appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Our chiropractors may suggest some exercises to relieve pain and provide recommendations on things you should avoid, such as slouching or improper posture. Our patients that attend regular appointments and complete the recommended exercises see better, longer-lasting results than those that visit us for a once-off appointment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will I have to keep coming back again and again?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The short answer is no. While many conditions respond positively to a maintenance style of care, it is not always the most effective way to manage an injury. Your chiropractor will work with you to develop the most appropriate care plan and discuss the best options for you as an individual to help get you back to optimal health.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long are chiropractic appointments?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">We offer the following appointments to suit your condition and budget:</p>
      <ul class="faq-answer" style="padding-bottom: 18px; padding-right: 44px;">
      <li><strong>Short (25 mins)</strong> — Suitable for simpler conditions or more budget-conscious patients.</li>
      <li><strong>Standard (40 mins)</strong> — Suitable for most conditions.</li>
      <li><strong>Long (55 mins)</strong> — Suitable for multiple injuries or chronic and severe pain.</li>
      <li><strong>Adjustment only (15–20 mins)</strong> — Ideal for ongoing management of stable conditions.</li>
      </ul>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will my private health insurance cover chiropractic treatment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Chiro is one of the most popular services used by members of private health insurance. At Infinite Health, all chiropractic claims are processed through HICAPS which works with 100% of Australian private health funds. You will only have to pay the gap between how much your health plan provides for each visit.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is it safe to see a chiropractor when pregnant?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#1a1a1a" stroke-linecap="round" stroke-width="1.8"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 12 12"><path d="M1 6h10" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes, our Sydney chiropractors are qualified to provide chiropractic care for pregnant women. Chiropractic treatments are beneficial for addressing common pregnancy-related back issues such as chronic pain and aches, poor posture, and conditions like lumbar spine hyperlordosis. You should seek advice from your doctor before receiving chiropractic care to check for any potential risks.</p>
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

customElements.define('ih-chiropractic-faq', IhChiropracticFaq);
