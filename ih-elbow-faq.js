class IhElbowFaq extends HTMLElement {
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
          font-family: 'Inter', sans-serif;
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
          <h2>Elbow Physio FAQ</h2>
          <div class="underline-accent"></div>
          <p class="intro-text">Everything you need to know before your first elbow physiotherapy appointment.</p>
          <button class="cta-btn" id="ctaBtn">Book an Assessment</button>
        </div>

        <div class="faq-right">
          <ul class="faq-list">

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is tennis elbow and how do you treat it?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Tennis elbow (lateral epicondylalgia) is a condition involving degeneration of the tendons that attach the forearm extensor muscles to the bony prominence on the outer elbow. Despite the name, it is most commonly caused by repetitive gripping, lifting, or wrist extension activities in work or daily life, not just tennis. Symptoms include outer elbow pain and tenderness that worsens with gripping and lifting tasks. Treatment focuses on a progressive tendon loading program, which is the most evidence-supported approach, combined with manual therapy, dry needling, and shockwave therapy where indicated to stimulate tendon healing and reduce pain.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How can physio help with tennis elbow?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Physiotherapy addresses tennis elbow by identifying the contributing factors driving the condition, whether that is muscle weakness, technique issues, or overload from work or sport, and targeting these directly. Treatment begins with hands-on therapy including soft tissue release and dry needling to reduce pain and muscle tension, followed by a progressive loading program to stimulate tendon healing. Your physio will also advise on load management, activity modification, and bracing where appropriate to protect the tendon and prevent the condition from returning.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Can physio help tennis elbow?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, and research strongly supports it. Progressive tendon loading exercise combined with manual therapy is recommended as the first-line treatment for tennis elbow by clinical guidelines. Studies consistently show physiotherapy produces better long-term outcomes than rest, cortisone injections, or anti-inflammatories alone. Tennis elbow has a reputation for being slow to heal when not properly managed, which is why addressing the contributing factors early with physiotherapy significantly improves recovery time and reduces the risk of recurrence.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What causes tennis elbow?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Tennis elbow is caused by repetitive overloading of the forearm extensor tendons, leading to microscopic damage at their attachment point on the outer elbow. Common causes include repetitive gripping tasks, keyboard and mouse use, painting, carpentry, and racquet sports. Contributing factors include forearm muscle weakness, tightness, poor technique, and sudden increases in workload or training volume. It is usually a gradual condition that builds over weeks or months before becoming noticeably painful.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">What is golfer's elbow and how is it different from tennis elbow?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Golfer's elbow (medial epicondylalgia) affects the tendons on the inner elbow where the forearm flexor muscles attach, while tennis elbow affects the outer elbow where the extensor muscles attach. Both involve tendon overload from repetitive use, but the pain location and aggravating movements differ. Golfer's elbow is provoked by gripping and wrist flexion, while tennis elbow is aggravated by gripping and wrist extension. Both conditions respond well to physiotherapy, with progressive tendon loading and manual therapy as the cornerstones of treatment.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">Should I see a physio for elbow pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Yes, particularly if your pain has persisted for more than one to two weeks or is affecting your ability to grip, lift, or perform daily tasks. Tennis elbow and golfer's elbow are notorious for dragging on for months when self-managed with rest alone, as tendon conditions require progressive loading to heal properly. A physiotherapist will identify the exact source and contributing factors, give you a realistic recovery timeline, and build a structured program that addresses the cause rather than just managing symptoms.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How long does tennis elbow take to heal with physio?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">Most cases resolve within 6 to 12 weeks with consistent physiotherapy. Mild to moderate presentations often show meaningful improvement within 4 to 6 sessions. More chronic cases can take 3 to 6 months, particularly if the tendon has been irritated for a long time before treatment began. The key to faster recovery is starting a progressive loading program early. Avoiding all activity and waiting for it to settle on its own is one of the most common reasons tennis elbow recovery stalls.</p>
              </div>
            </li>

            <li class="faq-item">
              <button class="faq-trigger" aria-expanded="false">
                <span class="faq-question">How many physio sessions will I need for elbow pain?</span>
                <span class="faq-icon">
                  <svg class="icon-plus" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                  <svg class="icon-minus" viewBox="0 0 14 14" fill="none"><path d="M1 7h12" stroke="#ff6218" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
              </button>
              <div class="faq-panel" role="region">
                <p class="faq-answer">It depends on your diagnosis and how long you have had the problem. Tennis elbow and golfer's elbow typically require 6 to 10 sessions over 8 to 12 weeks. Acute sprains or strains may resolve in 4 to 6 sessions. More complex conditions involving nerve entrapment or post-surgical rehab may require a longer program. Your physiotherapist will give you a realistic estimate at your initial assessment and adjust the plan based on how your tendon responds to loading.</p>
              </div>
            </li>

          </ul>
        </div>

      </div>
    `;

    // CTA button
    shadow.getElementById('ctaBtn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('navigate', {
        detail: { url: 'https://app.halth.com/booking/73fa5497-c5be-47d5-b4f9-f8d512431346' },
        bubbles: true
      }));
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
      });
    });
  }
}

customElements.define('ih-elbow-faq', IhElbowFaq);
