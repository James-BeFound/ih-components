class IHAnkleFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    // Inject FAQ schema into document head for SEO
    if (!document.getElementById('ih-ankle-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-ankle-faq-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can physio help ankle pain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Physiotherapy is the first-line treatment for the full range of ankle and foot conditions, from acute sprains to chronic tendinopathy. Your physiotherapist will identify the exact structure at fault, whether that is a ligament, tendon, plantar fascia, or joint, and design a treatment plan combining manual therapy, progressive loading, and targeted ankle exercises to resolve pain and prevent recurrence." } },
          { "@type": "Question", "name": "Can physio help a sprained ankle?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and early physiotherapy makes a significant difference to recovery time. A structured ankle sprain rehab program guides you from initial swelling management through to proprioception training and a full return to sport. Without proper rehabilitation, a sprained ankle commonly leads to chronic ankle instability and repeated re-injury, so appropriate physio is important even for grade one sprains." } },
          { "@type": "Question", "name": "What is the best treatment for plantar fasciitis?", "acceptedAnswer": { "@type": "Answer", "text": "Physiotherapy is the most effective treatment for plantar fasciitis. Your physio will combine load management strategies, soft tissue release, taping, and progressive plantar fasciitis exercises to reduce heel pain and allow the fascia to heal. Most cases improve significantly within 6 to 12 weeks with the right physiotherapy program, though the timeline depends on how long you have had symptoms." } },
          { "@type": "Question", "name": "What are shin splints and can physio help?", "acceptedAnswer": { "@type": "Answer", "text": "Shin splints, medically known as medial tibial stress syndrome, refers to pain along the shinbone caused by repetitive impact activity such as running or jumping. It results from excessive bone stress and inflammation of the surrounding tissue. Physio for shin splints is highly effective: your physiotherapist will identify the training errors, footwear issues, or biomechanical factors driving your symptoms and design a program to reduce load, settle inflammation, and rebuild your capacity to train without pain." } },
          { "@type": "Question", "name": "What does a physio do for ankle pain?", "acceptedAnswer": { "@type": "Answer", "text": "Your physiotherapist starts with a comprehensive ankle assessment, including gait analysis, range of motion, strength, balance testing, and orthopaedic special tests to identify the structure at fault. Treatment is tailored to your diagnosis and typically includes joint mobilisation, soft tissue release, dry needling, taping or bracing, shockwave therapy for stubborn tendinopathies, and a progressive strengthening and proprioception program." } },
          { "@type": "Question", "name": "How long does a sprained ankle take to heal?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the grade of the sprain. Grade one sprains involving minor ligament overstretching typically settle in 1 to 3 weeks with appropriate rehab. Grade two sprains with partial ligament tears may take 3 to 6 weeks. Grade three sprains involving complete ligament rupture can take 3 to 6 months, particularly if surgery is required. Starting physiotherapy early, rather than waiting for symptoms to improve on their own, consistently leads to faster and more complete recovery." } },
          { "@type": "Question", "name": "Can physio help Achilles tendinopathy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and progressive tendon loading through physiotherapy is the gold-standard treatment for Achilles tendinopathy. Your physio will design a graduated loading program that builds the tendon's capacity to handle load without aggravating symptoms. Both mid-portion and insertional Achilles tendinopathy respond well to a structured physiotherapy approach, though the exercise prescription differs between the two. Shockwave therapy is also commonly used alongside loading programs to accelerate tissue response." } },
          { "@type": "Question", "name": "How many physio sessions will I need for ankle physiotherapy?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your diagnosis and severity. An acute ankle sprain typically requires 4 to 8 sessions over 3 to 6 weeks. Plantar fasciitis and Achilles tendinopathy often require 8 to 12 sessions over 8 to 12 weeks, with home exercise compliance playing a significant role in the outcome. Chronic ankle instability or post-surgical rehab may involve a longer program of 12 to 16 sessions. Your physiotherapist will give you a clear estimate at your initial assessment." } }
        ]
      });
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
          width: 100%;
          padding: 40px 20px;
          background: #f5f4f0;
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
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
          white-space: nowrap;
        }

        .cta-btn:hover { background: #a3521f; }

        .faq-right { flex: 1; }

        .faq-list {
          list-style: none;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .faq-item { border-bottom: 1px solid rgba(0,0,0,0.1); }

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

        .faq-trigger[aria-expanded="true"] .faq-question { color: #ff6218; }

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

        .faq-panel.open { max-height: 600px; }

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
      </style>

      <div class="faq-wrap">

        <div class="faq-left">
          <p class="eyebrow">Common Questions</p>
          <h2>Ankle Physio FAQ</h2>
          <div class="underline-accent"></div>
          <p class="intro-text">Everything you need to know before your first ankle physiotherapy appointment.</p>
          <button class="cta-btn">Book an Assessment</button>
        </div>

        <div class="faq-right">
          <ul class="faq-list">

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help ankle pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes. Physiotherapy is the first-line treatment for the full range of ankle and foot conditions, from acute sprains to chronic tendinopathy. Your physiotherapist will identify the exact structure at fault, whether that is a ligament, tendon, plantar fascia, or joint, and design a treatment plan combining manual therapy, progressive loading, and targeted ankle exercises to resolve pain and prevent recurrence.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help a sprained ankle?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, and early physiotherapy makes a significant difference to recovery time. A structured ankle sprain rehab program guides you from initial swelling management through to proprioception training and a full return to sport. Without proper rehabilitation, a sprained ankle commonly leads to chronic ankle instability and repeated re-injury, so appropriate physio is important even for grade one sprains.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is the best treatment for plantar fasciitis?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Physiotherapy is the most effective treatment for plantar fasciitis. Your physio will combine load management strategies, soft tissue release, taping, and progressive plantar fasciitis exercises to reduce heel pain and allow the fascia to heal. Most cases improve significantly within 6 to 12 weeks with the right physiotherapy program, though the timeline depends on how long you have had symptoms.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What are shin splints and can physio help?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Shin splints, medically known as medial tibial stress syndrome, refers to pain along the shinbone caused by repetitive impact activity such as running or jumping. It results from excessive bone stress and inflammation of the surrounding tissue. Physio for shin splints is highly effective: your physiotherapist will identify the training errors, footwear issues, or biomechanical factors driving your symptoms and design a program to reduce load, settle inflammation, and rebuild your capacity to train without pain.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What does a physio do for ankle pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Your physiotherapist starts with a comprehensive ankle assessment, including gait analysis, range of motion, strength, balance testing, and orthopaedic special tests to identify the structure at fault. Treatment is tailored to your diagnosis and typically includes joint mobilisation, soft tissue release, dry needling, taping or bracing, shockwave therapy for stubborn tendinopathies, and a progressive strengthening and proprioception program.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How long does a sprained ankle take to heal?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">It depends on the grade of the sprain. Grade one sprains involving minor ligament overstretching typically settle in 1 to 3 weeks with appropriate rehab. Grade two sprains with partial ligament tears may take 3 to 6 weeks. Grade three sprains involving complete ligament rupture can take 3 to 6 months, particularly if surgery is required. Starting physiotherapy early, rather than waiting for symptoms to improve on their own, consistently leads to faster and more complete recovery.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help Achilles tendinopathy?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, and progressive tendon loading through physiotherapy is the gold-standard treatment for Achilles tendinopathy. Your physio will design a graduated loading program that builds the tendon's capacity to handle load without aggravating symptoms. Both mid-portion and insertional Achilles tendinopathy respond well to a structured physiotherapy approach, though the exercise prescription differs between the two. Shockwave therapy is also commonly used alongside loading programs to accelerate tissue response.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How many physio sessions will I need for ankle physiotherapy?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">It depends on your diagnosis and severity. An acute ankle sprain typically requires 4 to 8 sessions over 3 to 6 weeks. Plantar fasciitis and Achilles tendinopathy often require 8 to 12 sessions over 8 to 12 weeks, with home exercise compliance playing a significant role in the outcome. Chronic ankle instability or post-surgical rehab may involve a longer program of 12 to 16 sessions. Your physiotherapist will give you a clear estimate at your initial assessment.</p>
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

customElements.define('ih-ankle-faq', IHAnkleFaq);
