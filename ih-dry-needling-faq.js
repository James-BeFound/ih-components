class IhDryNeedlingFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-dry-needling-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-dry-needling-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is dry needling?", "acceptedAnswer": {"@type": "Answer", "text": "Dry needling is a technique used by physiotherapists and chiropractors to treat muscle pain, trigger points, and movement dysfunction. A fine, sterile needle is inserted into a tight band of muscle to stimulate a local twitch response, release tension, and improve blood flow to the area. It is called dry needling because no medication is injected. The technique is used to reduce pain, improve range of motion, and support recovery from injury."}}, {"@type": "Question", "name": "What conditions does dry needling treat?", "acceptedAnswer": {"@type": "Answer", "text": "Dry needling can help manage back pain, sciatica, calf and hamstring tightness, rotator cuff and shoulder injuries, hip impingement, neck pain, and many other musculoskeletal conditions. It is also effective for referred pain, where needling an area away from the site of pain has a widespread effect on surrounding structures. Your physiotherapist or chiropractor will assess which areas are most appropriate to treat during your appointment."}}, {"@type": "Question", "name": "Does dry needling hurt?", "acceptedAnswer": {"@type": "Answer", "text": "The needle is very fine, so insertion is usually well tolerated. You may feel a brief local twitch response when the needle reaches the trigger point, which can produce a dull ache or cramping sensation for a few seconds. This is a normal and often desirable response. Some muscle soreness for 24 to 48 hours after treatment is common, similar to how muscles feel after exercise. Most patients find the technique manageable and notice meaningful improvement after their first session."}}, {"@type": "Question", "name": "How is dry needling different from acupuncture?", "acceptedAnswer": {"@type": "Answer", "text": "Both use fine needles, but they are based on different principles. Acupuncture is rooted in traditional Chinese medicine and uses meridian points to balance energy flow. Dry needling is based on Western anatomy and neuroscience, targeting specific trigger points in muscles and connective tissue identified through a clinical assessment. Physiotherapists and chiropractors use dry needling as one tool within a broader treatment plan, combined with manual therapy, exercise, and education."}}, {"@type": "Question", "name": "Who is dry needling suitable for?", "acceptedAnswer": {"@type": "Answer", "text": "Dry needling is frequently used with athletes, office workers, and gym goers for pain modulation and to improve recovery. Before treatment, your physiotherapist or chiropractor will conduct a thorough screening to confirm you are an appropriate candidate. It is generally not recommended during pregnancy, for patients with blood clotting disorders, or for those with a needle phobia. Your physio or chiropractor will review your full medical history at your initial assessment."}}, {"@type": "Question", "name": "Is a screening required before dry needling?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Dry needling is an invasive procedure and a thorough clinical screening is required before treatment begins. Your physiotherapist or chiropractor will review your medical history, current medications, and any relevant conditions to confirm the treatment is appropriate for you. If dry needling is not suitable, your physio or chiropractor will recommend alternative options that can achieve similar results."}}, {"@type": "Question", "name": "Where on the body can dry needling be applied?", "acceptedAnswer": {"@type": "Answer", "text": "Dry needling can be applied to the shoulders, hips, thighs, back, ankles, neck, and many other areas. It is not always applied directly to the painful area. Your physiotherapist or chiropractor may treat points away from the site of pain if trigger points in those areas are contributing to your symptoms. This approach addresses the root cause rather than just the location of pain and can significantly improve your outcomes."}}, {"@type": "Question", "name": "How many dry needling sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your condition and how long you have had symptoms. Many patients notice improvement within 2 to 4 sessions. For acute injuries or trigger point release, results are often felt quickly. More complex or chronic conditions may require 6 to 8 sessions as part of a broader rehabilitation program. Dry needling is most effective when combined with manual therapy and a targeted exercise program. Your physiotherapist or chiropractor will give you a clear estimate at your initial assessment."}}]});
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
      <h2>Dry Needling FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first dry needling appointment.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is dry needling?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Dry needling is a technique used by physiotherapists and chiropractors to treat muscle pain, trigger points, and movement dysfunction. A fine, sterile needle is inserted into a tight band of muscle to stimulate a local twitch response, release tension, and improve blood flow to the area. It is called dry needling because no medication is injected. The technique is used to reduce pain, improve range of motion, and support recovery from injury.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What conditions does dry needling treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Dry needling can help manage back pain, sciatica, calf and hamstring tightness, rotator cuff and shoulder injuries, hip impingement, neck pain, and many other musculoskeletal conditions. It is also effective for referred pain, where needling an area away from the site of pain has a widespread effect on surrounding structures. Your physiotherapist or chiropractor will assess which areas are most appropriate to treat during your appointment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does dry needling hurt?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The needle is very fine, so insertion is usually well tolerated. You may feel a brief local twitch response when the needle reaches the trigger point, which can produce a dull ache or cramping sensation for a few seconds. This is a normal and often desirable response. Some muscle soreness for 24 to 48 hours after treatment is common, similar to how muscles feel after exercise. Most patients find the technique manageable and notice meaningful improvement after their first session.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How is dry needling different from acupuncture?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Both use fine needles, but they are based on different principles. Acupuncture is rooted in traditional Chinese medicine and uses meridian points to balance energy flow. Dry needling is based on Western anatomy and neuroscience, targeting specific trigger points in muscles and connective tissue identified through a clinical assessment. Physiotherapists and chiropractors use dry needling as one tool within a broader treatment plan, combined with manual therapy, exercise, and education.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Who is dry needling suitable for?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Dry needling is frequently used with athletes, office workers, and gym goers for pain modulation and to improve recovery. Before treatment, your physiotherapist or chiropractor will conduct a thorough screening to confirm you are an appropriate candidate. It is generally not recommended during pregnancy, for patients with blood clotting disorders, or for those with a needle phobia. Your physio or chiropractor will review your full medical history at your initial assessment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is a screening required before dry needling?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Dry needling is an invasive procedure and a thorough clinical screening is required before treatment begins. Your physiotherapist or chiropractor will review your medical history, current medications, and any relevant conditions to confirm the treatment is appropriate for you. If dry needling is not suitable, your physio or chiropractor will recommend alternative options that can achieve similar results.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Where on the body can dry needling be applied?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Dry needling can be applied to the shoulders, hips, thighs, back, ankles, neck, and many other areas. It is not always applied directly to the painful area. Your physiotherapist or chiropractor may treat points away from the site of pain if trigger points in those areas are contributing to your symptoms. This approach addresses the root cause rather than just the location of pain and can significantly improve your outcomes.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many dry needling sessions will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">It depends on your condition and how long you have had symptoms. Many patients notice improvement within 2 to 4 sessions. For acute injuries or trigger point release, results are often felt quickly. More complex or chronic conditions may require 6 to 8 sessions as part of a broader rehabilitation program. Dry needling is most effective when combined with manual therapy and a targeted exercise program. Your physiotherapist or chiropractor will give you a clear estimate at your initial assessment.</p>
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

customElements.define('ih-dry-needling-faq', IhDryNeedlingFaq);
