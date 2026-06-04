class IhNeckFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :host { display: block; font-family: 'Inter', sans-serif; }

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
          font-family: 'Inter', sans-serif;
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
          font-family: 'Inter', sans-serif;
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
          <h2>Neck Physio FAQ</h2>
          <div class="underline-accent"></div>
          <p class="intro-text">Everything you need to know before your first neck physiotherapy appointment.</p>
          <button class="cta-btn" id="ctaBtn">Book an Assessment</button>
        </div>

        <div class="faq-right">
          <ul class="faq-list">

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is whiplash?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Whiplash is a neck injury caused by a rapid back-and-forth movement of the head, most commonly from car accidents, a sports collision, or a fall. The sudden acceleration-deceleration forces the neck beyond its normal range, straining the muscles, ligaments, joints, and sometimes nerves. Symptoms include neck pain and stiffness, headaches, reduced movement, and occasionally arm tingling or numbness. Most cases respond well to physiotherapy, with early treatment helping to reduce pain, restore movement, and prevent symptoms from becoming chronic.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is wry neck?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Wry neck is a condition where the neck becomes suddenly and painfully fixed in a rotated or tilted position, often appearing overnight or after a quick movement. It is typically caused by a facet joint locking in the cervical spine or a muscle spasm that holds the neck in that position. The result is significant pain on one side, a marked loss of rotation, and a visible postural deformity. Physiotherapy is highly effective, using joint mobilisation, soft tissue release, and gentle movement exercises to unlock the joint and restore normal neck movement.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What does a physio do for neck pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Your physiotherapist starts with a thorough assessment to identify the exact source of your neck pain, whether it is a muscle, joint, disc, or nerve. Treatment is then tailored to your diagnosis and typically includes manual therapy and joint mobilisation to restore movement, soft tissue therapy and dry needling to release muscle tension, postural education to address contributing factors, and a targeted exercise program to strengthen and support the neck. The goal is to resolve your current pain and give you the tools to keep your neck healthy long term.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Should I see a physiotherapist for neck pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes. Physiotherapists are highly skilled in diagnosing and treating neck pain. At Infinite Health, your assessment begins with a thorough history and physical examination, looking at joint movement, muscle function, and postural patterns to establish an accurate diagnosis. If a more serious condition is suspected, your physio can refer you for further investigations such as x-rays or an MRI. Importantly, scan findings do not always reflect symptoms, so results are always interpreted alongside your clinical assessment to ensure the right treatment plan is established.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Do I need to see a physio for all neck pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Not always. Most cases of neck pain are muscular and will settle on their own within a few days. Staying active and avoiding aggravating factors is the best approach in the short term. However, if your pain has not improved within a few days, is recurring, or has become chronic, seeing a physiotherapist is strongly recommended. Research shows that a combination of joint and muscle treatment alongside targeted stretching and strengthening exercises is an effective way to eliminate neck pain and stiffness.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How is neck pain treated with physio?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Treatment varies depending on the cause but typically covers several areas: pain relief through soft tissue therapy, mobilisation, and dry needling; postural education to address habits and positions contributing to your symptoms; sleeping position and pillow advice to ensure your neck rests properly overnight; a targeted exercise program to build neck and shoulder strength; and prevention planning to reduce the risk of recurrence. Your physiotherapist will also provide self-management strategies so you can stay on top of your neck health between appointments.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How can I prevent neck pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Keeping your spine flexible and strong is the key. Regular exercise, ideally around 30 minutes most days, improves posture, muscle strength, and overall load capacity. Good postural habits when sitting at a desk, driving, or using your phone make a significant difference. Avoid sleeping on your stomach, choose a supportive pillow and mattress, and take regular stretch breaks throughout the day. Addressing your work ergonomics is also important, as a well-set-up workstation reduces cumulative strain on the neck and upper back.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How many physio sessions will I need for neck pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">It depends on your diagnosis and how long you have had the problem. Acute muscle strains and wry neck often resolve within 4 to 6 sessions. Disc injuries, nerve irritation, or whiplash typically require 8 to 12 sessions over 6 to 10 weeks. Chronic neck pain or postural conditions may need a longer program. Your physiotherapist will give you a clear estimate at your initial assessment and adjust the plan based on how you respond to treatment.</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    `;

    // CTA button
    shadow.getElementById('ctaBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', { detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' }, bubbles: true }));
    });

    // Accordion
    shadow.querySelectorAll('.faq-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        const panel = trigger.nextElementSibling;

        shadow.querySelectorAll('.faq-trigger').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.classList.remove('open');
        });

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.classList.add('open');
        }

        // Notify Wix of height change
        setTimeout(() => {
          window.parent.postMessage(
            JSON.stringify({ height: this.scrollHeight }), '*'
          );
        }, 400);
      });
    });

    // Initial height report
    const reportHeight = () => {
      window.parent.postMessage(
        JSON.stringify({ height: this.scrollHeight }), '*'
      );
    };
    window.addEventListener('load', reportHeight);
    new ResizeObserver(reportHeight).observe(shadow.querySelector('.faq-wrap'));
  }
}

customElements.define('ih-neck-faq', IhNeckFaq);
