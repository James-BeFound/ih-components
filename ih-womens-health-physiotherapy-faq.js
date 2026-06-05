class IhWomen'sHealthPhysiotherapyFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-women's-health-physiotherapy-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-women's-health-physiotherapy-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Can I attend a women's health physio session if I am pregnant?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A core focus of women's health physiotherapy is prenatal and postnatal care. It is often recommended during pregnancy to address common issues such as back pain, pelvic girdle pain, and pelvic floor dysfunction. Our physiotherapists have the specialised expertise to provide safe and effective treatments tailored to pregnancy, including exercises, manual therapy, and guidance on posture and body mechanics to alleviate discomfort, prepare for childbirth, and promote overall well-being."}}, {"@type": "Question", "name": "Can you help me to strengthen my pelvic floor?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. The pelvic floor is a group of muscles that supports key organs including the bladder, bowel, and uterus. A strong pelvic floor helps prevent incontinence and pelvic organ prolapse. The pelvic floor can weaken during pregnancy, childbirth, with age, weight gain, chronic illness, and menopause. Our physiotherapists can guide you through targeted exercises to rebuild pelvic floor strength, leaving you feeling more confident and comfortable in your body."}}, {"@type": "Question", "name": "What conditions does women's health physiotherapy treat?", "acceptedAnswer": {"@type": "Answer", "text": "Women's health physiotherapy covers a wide range of conditions specific to female anatomy and life stages. These include pelvic girdle pain, pelvic floor dysfunction, abdominal muscle separation, urinary and faecal incontinence, prolapse, pain during sexual intercourse, pregnancy-related pain and trauma, and post-partum recovery. Many of these conditions relate to the musculoskeletal health of the pelvis, including the pelvic floor, pelvic organs, muscles, ligaments, and connective tissue."}}, {"@type": "Question", "name": "What is pelvic girdle pain?", "acceptedAnswer": {"@type": "Answer", "text": "Pelvic girdle pain is pain in and around the pelvic joints, most commonly experienced during or after pregnancy. It occurs when the joints of the pelvis become stiff or move unevenly, causing discomfort in the lower back, hips, groin, and inner thighs. Activities such as walking, climbing stairs, and turning in bed can become very uncomfortable. Physiotherapy is an effective treatment, using manual therapy, targeted exercises, and load management strategies to reduce pain and restore function."}}, {"@type": "Question", "name": "Can physio help with prolapse?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Physiotherapy is one of the primary treatments for pelvic organ prolapse, particularly in mild to moderate cases. Your physiotherapist will assess the degree of prolapse, identify contributing factors, and develop a program to strengthen the pelvic floor and reduce symptoms. This includes targeted exercises, load management strategies, and advice on activity modification. Many patients experience significant symptom improvement without the need for surgery."}}, {"@type": "Question", "name": "What happens at a women's health physio appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Your first appointment begins with a thorough consultation covering your medical history, current symptoms, and goals. Your physiotherapist will then conduct a physical assessment, which may include an internal pelvic floor assessment if appropriate and with your full consent. Based on the findings, a tailored treatment plan will be developed. This may include manual therapy, pelvic floor exercises, education, and lifestyle advice. You will always be informed before any assessment and can withdraw consent at any time."}}, {"@type": "Question", "name": "Is women's health physiotherapy covered under Medicare?", "acceptedAnswer": {"@type": "Answer", "text": "In Australia, Medicare provides limited coverage for physiotherapy under the Chronic Disease Management plan, which requires a GP referral. Individuals can receive up to five allied health services per year under this plan. Check with your GP and Medicare guidelines to understand whether your specific condition qualifies. We also accept all private health funds, and WorkCover and NDIS patients are welcome at all of our Sydney clinics."}}, {"@type": "Question", "name": "How many sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your condition and how long you have had symptoms. Many patients notice improvement within 4 to 6 sessions for conditions like pelvic girdle pain or mild pelvic floor dysfunction. Post-partum recovery and prolapse management may require a longer program of 8 or more sessions. Your physiotherapist will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment."}}]});
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
      <h2>Women's Health Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first women's health physiotherapy appointment.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can I attend a women's health physio session if I am pregnant?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. A core focus of women's health physiotherapy is prenatal and postnatal care. It is often recommended during pregnancy to address common issues such as back pain, pelvic girdle pain, and pelvic floor dysfunction. Our physiotherapists have the specialised expertise to provide safe and effective treatments tailored to pregnancy, including exercises, manual therapy, and guidance on posture and body mechanics to alleviate discomfort, prepare for childbirth, and promote overall well-being.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can you help me to strengthen my pelvic floor?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Absolutely. The pelvic floor is a group of muscles that supports key organs including the bladder, bowel, and uterus. A strong pelvic floor helps prevent incontinence and pelvic organ prolapse. The pelvic floor can weaken during pregnancy, childbirth, with age, weight gain, chronic illness, and menopause. Our physiotherapists can guide you through targeted exercises to rebuild pelvic floor strength, leaving you feeling more confident and comfortable in your body.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What conditions does women's health physiotherapy treat?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Women's health physiotherapy covers a wide range of conditions specific to female anatomy and life stages. These include pelvic girdle pain, pelvic floor dysfunction, abdominal muscle separation, urinary and faecal incontinence, prolapse, pain during sexual intercourse, pregnancy-related pain and trauma, and post-partum recovery. Many of these conditions relate to the musculoskeletal health of the pelvis, including the pelvic floor, pelvic organs, muscles, ligaments, and connective tissue.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is pelvic girdle pain?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Pelvic girdle pain is pain in and around the pelvic joints, most commonly experienced during or after pregnancy. It occurs when the joints of the pelvis become stiff or move unevenly, causing discomfort in the lower back, hips, groin, and inner thighs. Activities such as walking, climbing stairs, and turning in bed can become very uncomfortable. Physiotherapy is an effective treatment, using manual therapy, targeted exercises, and load management strategies to reduce pain and restore function.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can physio help with prolapse?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. Physiotherapy is one of the primary treatments for pelvic organ prolapse, particularly in mild to moderate cases. Your physiotherapist will assess the degree of prolapse, identify contributing factors, and develop a program to strengthen the pelvic floor and reduce symptoms. This includes targeted exercises, load management strategies, and advice on activity modification. Many patients experience significant symptom improvement without the need for surgery.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What happens at a women's health physio appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Your first appointment begins with a thorough consultation covering your medical history, current symptoms, and goals. Your physiotherapist will then conduct a physical assessment, which may include an internal pelvic floor assessment if appropriate and with your full consent. Based on the findings, a tailored treatment plan will be developed, which may include manual therapy, pelvic floor exercises, education, and lifestyle advice. You will always be informed before any assessment and can withdraw consent at any time.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is women's health physiotherapy covered under Medicare?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">In Australia, Medicare provides limited coverage for physiotherapy under the Chronic Disease Management plan, which requires a GP referral. Individuals can receive up to five allied health services per year under this plan. Check with your GP and Medicare guidelines to understand whether your specific condition qualifies. We also accept all private health funds, and WorkCover and NDIS patients are welcome at all of our Sydney clinics.</p>
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
      <p class="faq-answer">It depends on your condition and how long you have had symptoms. Many patients notice improvement within 4 to 6 sessions for conditions like pelvic girdle pain or mild pelvic floor dysfunction. Post-partum recovery and prolapse management may require a longer program of 8 or more sessions. Your physiotherapist will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment.</p>
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

customElements.define('ih-women's-health-physiotherapy-faq', IhWomen'sHealthPhysiotherapyFaq);
