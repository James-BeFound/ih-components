class IhShockwaveTherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-shockwave-therapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-shockwave-therapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is shockwave therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Shockwave therapy is a non-invasive, drug-free treatment that uses high-energy sound waves to relieve pain and promote healing. It is a safe and effective alternative to surgery or pain relief medication for many conditions, including plantar fasciitis, Achilles tendinopathy, and chronic tendon conditions. The shock waves trigger the release of growth factors at a cellular level, promote the formation of new blood vessels, and increase blood flow to the area to speed up the healing process. Most people experience a significant reduction in pain after just a few sessions."}}, {"@type": "Question", "name": "What conditions does shockwave therapy treat?", "acceptedAnswer": {"@type": "Answer", "text": "Shockwave therapy is most effective for chronic tendon conditions and overuse injuries. Common conditions treated include Achilles tendinopathy, plantar fasciitis, tennis elbow, golfer's elbow, patellar tendonitis, rotator cuff tendinopathy, shin splints, and painful trigger points. It is particularly useful for conditions that have not responded to other conservative treatments. Your physiotherapist will assess your condition at your initial appointment to confirm whether shockwave therapy is appropriate for you."}}, {"@type": "Question", "name": "Is shockwave therapy painful?", "acceptedAnswer": {"@type": "Answer", "text": "Shockwave therapy is not very painful, although you may feel a brief sensation of pressure or vibration during treatment. Some patients report a mild tingling sensation afterwards, but this typically goes away within a few hours. Others may experience some bruising or redness in the treated area, which is usually temporary and resolves on its own within a few days. Each session should see your injured tendon become progressively less painful as treatment progresses."}}, {"@type": "Question", "name": "Are there side effects to shockwave therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Side effects are generally rare and, when they do occur, are usually mild. These may include mild tingling, numbness, swelling, bruising, or nerve irritation. These effects are typically short-lived and subside within a day or two. However, if you experience any of these symptoms for more than two days, you should contact your physiotherapist so they can assess and manage the effects appropriately."}}, {"@type": "Question", "name": "Will I be able to resume normal activities afterwards?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you should be able to resume your normal activities after shockwave therapy. There may be some soreness or bruising in the treatment area, but this should resolve within a few days. Your physiotherapist will advise you on any activity modifications following your session, particularly if your condition involves a tendon that needs to be gradually loaded as part of your recovery."}}, {"@type": "Question", "name": "Is shockwave therapy a stand-alone treatment?", "acceptedAnswer": {"@type": "Answer", "text": "It can often be used as a stand-alone treatment, particularly for minor injuries. However, for chronic tendon conditions it is typically used alongside other physiotherapy techniques such as soft tissue releases, mobilisations, exercise rehabilitation, and biomechanical corrections. At Infinite Health, we adopt a comprehensive treatment approach, and your physiotherapist will discuss the most appropriate combination of treatments for your condition at your assessment."}}, {"@type": "Question", "name": "How many shockwave therapy sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "On average, Infinite Health recommends between 4 and 6 sessions for optimal results. However, many patients experience significant pain relief after just one or two treatments. Sessions are typically spaced one week apart to allow the body time to respond and heal between treatments. Your physiotherapist will assess your progress at each session and adjust the plan accordingly."}}, {"@type": "Question", "name": "Will insurance cover the cost of shockwave therapy?", "acceptedAnswer": {"@type": "Answer", "text": "Shockwave therapy is administered by trained professionals including physiotherapists, chiropractors, and remedial massage therapists. As such, it is covered by private health insurance if you have physiotherapy, chiropractic, or remedial massage benefits on your policy. We recommend checking the details of your cover with your insurer before your first session. Our team can also assist you with any questions about claiming your treatment."}}]});
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
      <h2>Shockwave Therapy FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know about shockwave therapy for chronic pain and tendon conditions.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is shockwave therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Shockwave therapy is a non-invasive, drug-free treatment that uses high-energy sound waves to relieve pain and promote healing. It is a safe and effective alternative to surgery or pain relief medication for many conditions, including plantar fasciitis, Achilles tendinopathy, and chronic tendon conditions. The shock waves trigger the release of growth factors at a cellular level, promote the formation of new blood vessels, and increase blood flow to the area to speed up the healing process. Most people experience a significant reduction in pain after just a few sessions.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What conditions does shockwave therapy treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Shockwave therapy is most effective for chronic tendon conditions and overuse injuries. Common conditions treated include Achilles tendinopathy, plantar fasciitis, tennis elbow, golfer's elbow, patellar tendonitis, rotator cuff tendinopathy, shin splints, and painful trigger points. It is particularly useful for conditions that have not responded to other conservative treatments. Your physiotherapist will assess your condition at your initial appointment to confirm whether shockwave therapy is appropriate for you.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is shockwave therapy painful?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Shockwave therapy is not very painful, although you may feel a brief sensation of pressure or vibration during treatment. Some patients report a mild tingling sensation afterwards, but this typically goes away within a few hours. Others may experience some bruising or redness in the treated area, which is usually temporary and resolves on its own within a few days. Each session should see your injured tendon become progressively less painful as treatment progresses.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Are there side effects to shockwave therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Side effects are generally rare and, when they do occur, are usually mild. These may include mild tingling, numbness, swelling, bruising, or nerve irritation. These effects are typically short-lived and subside within a day or two. However, if you experience any of these symptoms for more than two days, you should contact your physiotherapist so they can assess and manage the effects appropriately.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will I be able to resume normal activities afterwards?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes, you should be able to resume your normal activities after shockwave therapy. There may be some soreness or bruising in the treatment area, but this should resolve within a few days. Your physiotherapist will advise you on any activity modifications following your session, particularly if your condition involves a tendon that needs to be gradually loaded as part of your recovery.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is shockwave therapy a stand-alone treatment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">It can often be used as a stand-alone treatment, particularly for minor injuries. However, for chronic tendon conditions it is typically used alongside other physiotherapy techniques such as soft tissue releases, mobilisations, exercise rehabilitation, and biomechanical corrections. At Infinite Health, we adopt a comprehensive treatment approach, and your physiotherapist will discuss the most appropriate combination of treatments for your condition at your assessment.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many shockwave therapy sessions will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">On average, Infinite Health recommends between 4 and 6 sessions for optimal results. However, many patients experience significant pain relief after just one or two treatments. Sessions are typically spaced one week apart to allow the body time to respond and heal between treatments. Your physiotherapist will assess your progress at each session and adjust the plan accordingly.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Will insurance cover the cost of shockwave therapy?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Shockwave therapy is administered by trained professionals including physiotherapists, chiropractors, and remedial massage therapists. As such, it is covered by private health insurance if you have physiotherapy, chiropractic, or remedial massage benefits on your policy. We recommend checking the details of your cover with your insurer before your first session. Our team can also assist you with any questions about claiming your treatment.</p>
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

customElements.define('ih-shockwave-therapy-faq', IhShockwaveTherapyFaq);
