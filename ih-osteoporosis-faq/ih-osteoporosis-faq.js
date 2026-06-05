class IhOsteoporosisFaq extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    if (!document.getElementById('ih-osteoporosis-faq-schema')) {
      const script = document.createElement('script');
      script.id = 'ih-osteoporosis-faq-schema';
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
      <h2>Osteoporosis Physio FAQ</h2>
      <div class="underline-accent"></div>
      <p class="intro-text">Everything you need to know about physiotherapy for osteoporosis and bone health management.</p>
      <button class="cta-btn">Book an Assessment</button>
      </div>

      <div class="faq-right">
      <ul class="faq-list">
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What is the difference between osteoporosis and osteopenia?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Both describe reduced bone density but at different stages of severity. Osteopenia is the earlier stage, where bones have become weaker than normal but are not yet fragile enough to classify as osteoporosis. It is diagnosed with a T-score between -1 and -2.5 on a DEXA scan. Osteoporosis is the more advanced stage, with a T-score below -2.5, where bones have become thin and fragile enough that even a minor fall or impact can cause a fracture. Both conditions benefit significantly from physiotherapy intervention, and early detection during the osteopenia stage gives you the best opportunity to slow or prevent progression.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What causes osteoporosis?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Osteoporosis occurs when the rate of bone breakdown (resorption) exceeds the rate of new bone formation over time, resulting in a gradual loss of bone density and strength. Key contributing factors include low calcium and vitamin D levels, physical inactivity, family history, smoking, excessive alcohol intake, and hormonal changes, particularly the decline in oestrogen during menopause. Age is also a significant factor, as peak bone mass is typically reached in the mid-30s and begins to decline gradually after that.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Does osteoporosis cause pain?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Osteoporosis itself is often painless, which is why it is commonly referred to as the silent disease. Most people are unaware they have it until a fracture occurs. However, fractures caused by osteoporosis, particularly vertebral compression fractures in the spine, can cause significant pain, loss of height, and postural changes such as a rounded upper back. Pain from osteoporosis is most commonly the result of a fracture or the structural changes that follow, rather than the bone loss itself.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Is osteoporosis hereditary?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Yes, genetics play a significant role in bone health. If a parent or sibling has been diagnosed with osteoporosis or has experienced a fragility fracture, your risk is meaningfully higher. However, hereditary risk does not mean osteoporosis is inevitable. Lifestyle factors including regular exercise, adequate calcium and vitamin D intake, and avoiding smoking and excessive alcohol can significantly reduce your risk even with a strong family history.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How can I prevent osteoporosis?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The most effective strategies for preventing osteoporosis are regular impact-based and resistance exercise, adequate calcium and vitamin D intake, avoiding smoking, limiting alcohol, and maintaining a healthy body weight. From a physiotherapy perspective, a structured progressive resistance training program is one of the most powerful tools for building and maintaining bone density. Bones respond to mechanical loading by producing new bone tissue, which is why regular strength training throughout life is the single most impactful lifestyle habit for long-term bone health.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">Can osteoporosis be reversed?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">Full reversal of established osteoporosis is not typically achievable, but significant improvements in bone density are possible with the right intervention. Research shows that progressive resistance training and weight-bearing exercise can meaningfully increase bone mineral density, particularly in the spine and hips. Combined with appropriate calcium and vitamin D supplementation and medication prescribed by your GP or specialist where needed, physiotherapy-led exercise programs are the most evidence-based approach to improving bone strength and reducing fracture risk. The earlier intervention begins, the better the outcomes.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">What exercises are good for osteoporosis?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">The two most effective categories of exercise for osteoporosis are progressive resistance training and weight-bearing activity. Resistance training using body weight, resistance bands, or weights creates a mechanical pressure on the bones through muscle contraction, directly stimulating new bone formation. impact-based activities such as walking, stair climbing, dancing, and low-impact aerobics create ground reaction forces that travel through the skeleton and similarly encourage bone remodelling. Balance exercises are also essential to reduce fall risk and protect fragile bones. The specific exercises recommended will depend on your T-score and bone fragility, so a personalised program from your physiotherapist is always the safest starting point.</p>
      </div>
      </li>
      <li class="faq-item">
      <button aria-expanded="false" class="faq-trigger">
      <span class="faq-question">How can a physiotherapist help with osteoporosis?</span>
      <span class="faq-icon">
      <svg class="icon-plus" fill="none" viewbox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      <svg class="icon-minus" fill="none" viewbox="0 0 14 14"><path d="M1 7h12" stroke="#ff6218" stroke-linecap="round" stroke-width="2"></path></svg>
      </span>
      </button>
      <div class="faq-panel" role="region">
      <p class="faq-answer">A physiotherapist plays a central role in osteoporosis management by designing and supervising personalised exercise programs that are safe, effective, and tailored to your level of bone fragility. At your initial assessment, your physiotherapist will review your DEXA scan results, medical history, and physical capacity to establish your safe exercise parameters. They will then build a progressive program combining resistance training, weight-bearing activity, and balance work, all grounded in the current evidence for bone health. Your program will be reviewed and progressed regularly to ensure you continue to make meaningful gains in bone density, strength, and fall prevention over time.</p>
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

customElements.define('ih-osteoporosis-faq', IhOsteoporosisFaq);
