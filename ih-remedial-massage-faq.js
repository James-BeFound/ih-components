class IhRemedialMassageFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-remedial-massage-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-remedial-massage-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How long is a remedial massage appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Appointment length depends on your chosen treatment and the severity of your condition. We offer 60-minute appointments covering two to four muscle groups, 90-minute appointments ideal for more complex issues or those who haven't had a massage in a long time, and 120-minute appointments best suited to full body treatment or extensive work on specific muscle groups. Some practitioners are also trained in dry needling and myofascial cupping, which can be administered alongside your massage."}}, {"@type": "Question", "name": "What are the benefits of remedial massage?", "acceptedAnswer": {"@type": "Answer", "text": "Remedial massage therapy aims to relieve and treat muscles that are tense, damaged, knotted, or immobile. It can be beneficial for neck pain relief, releasing tension, breaking up scar tissue, and improving overall health. The techniques used increase blood flow to the musculoskeletal system, allowing myofascial release, improving mobility and flexibility. The massage also encourages the release of endorphins and a reduction in stress hormones, which can improve immune function and general wellbeing."}}, {"@type": "Question", "name": "What should I wear to my remedial massage appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Depending on the area being treated, you will be asked to remove your clothing but not your underwear. Your therapist will leave the room while you undress, lie on the treatment bed, and cover yourself with the towel provided. If you are uncomfortable with this, let your therapist know and they will accommodate you. In this case, we recommend wearing loose, comfortable, light clothing that allows your therapist to access the affected areas."}}, {"@type": "Question", "name": "How many remedial massage sessions will I need?", "acceptedAnswer": {"@type": "Answer", "text": "The number of sessions required depends on your condition and how your initial appointment goes. After your first session, your therapist will discuss their findings and provide a recommended treatment plan, including how many sessions may be needed and what you can do between appointments."}}, {"@type": "Question", "name": "How much does remedial massage in Sydney cost?", "acceptedAnswer": {"@type": "Answer", "text": "Costs depend on your appointment type, condition, and therapist. A 60-minute appointment is $150 on weekdays and $160 on weekends. A 90-minute appointment is $225 on weekdays and $235 on weekends. Complementary treatments such as dry needling or cupping are an additional $20."}}, {"@type": "Question", "name": "How can I book a remedial massage in Sydney?", "acceptedAnswer": {"@type": "Answer", "text": "Booking is easy via our online booking platform. You can make an appointment at our Chatswood or North Sydney clinics. If you would like to speak with our team before booking, you can reach us on (02) 9412 2222."}}, {"@type": "Question", "name": "Do you accept private health insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We have HICAPS facilities that accept most Australian private health funds, so you will only need to pay the gap between your fund's cover and the cost of your appointment. Accepted funds include Medibank, Bupa, HCF, NIB, AHM, Australian Unity, HBF, CBHS, Teachers Health, and many more."}}]});
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
      <h2>Remedial Massage FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know before your first remedial massage appointment in Sydney.</p>
      <button class="cta-btn">Book an Appointment</button>
      </div>
      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How long is a remedial massage appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Appointment length depends on your chosen treatment and the severity of your condition. We offer 60-minute appointments covering two to four muscle groups, 90-minute appointments ideal for more complex issues or those who have not had a massage in a long time, and 120-minute appointments best suited to full body treatment or extensive work on specific muscle groups. Some practitioners are also trained in dry needling and myofascial cupping, which can be administered alongside your massage.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What are the benefits of remedial massage?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Remedial massage therapy aims to relieve and treat muscles that are tense, damaged, knotted, or immobile. It can be beneficial for neck pain relief, releasing tension, breaking up scar tissue, and improving overall health. The techniques used increase blood flow to the musculoskeletal system, allowing myofascial release and improving mobility and flexibility. The massage also encourages the release of endorphins and a reduction in stress hormones, which can improve immune function and general wellbeing.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What should I wear to my remedial massage appointment?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Depending on the area being treated, you will be asked to remove your clothing but not your underwear. Your therapist will leave the room while you undress, lie on the treatment bed, and cover yourself with the towel provided. If you are uncomfortable with this, let your therapist know and they will accommodate you. In this case, we recommend wearing loose, comfortable, light clothing that allows your therapist to access the affected areas.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How many remedial massage sessions will I need?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The number of sessions required depends on your condition and how your initial appointment goes. After your first session, your therapist will discuss their findings and provide a recommended treatment plan, including how many sessions may be needed and what you can do between appointments.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How much does remedial massage in Sydney cost?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Costs depend on your appointment type, condition, and therapist. A 60-minute appointment is $150 on weekdays and $160 on weekends. A 90-minute appointment is $225 on weekdays and $235 on weekends. Complementary treatments such as dry needling or cupping are an additional $20.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How can I book a remedial massage in Sydney?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Booking is easy via our online booking platform. You can make an appointment at our Chatswood or North Sydney clinics. If you would like to speak with our team before booking, you can reach us on (02) 9412 2222.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Do you accept private health insurance?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes. We have HICAPS facilities that accept most Australian private health funds, so you will only need to pay the gap between your fund's cover and the cost of your appointment. Accepted funds include Medibank, Bupa, HCF, NIB, AHM, Australian Unity, HBF, CBHS, Teachers Health, and many more.</p>
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

customElements.define('ih-remedial-massage-faq', IhRemedialMassageFaq);
