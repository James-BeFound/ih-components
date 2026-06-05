class IhMeetTheTeamSport extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          .team-section {
                  background: #F5F4F0;
            padding: 60px 48px 64px;
          }

          .section-header {
            margin-bottom: 36px;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1.5px solid #ff6218;
            border-radius: 100px;
            padding: 7px 16px;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff6218;
            margin-bottom: 20px;
          }

          h2 {
            font-size: clamp(26px, 4vw, 38px);
            font-weight: 700;
            line-height: 1.15;
            color: #1a1a1a;
            letter-spacing: -0.5px;
            margin-bottom: 10px;
          }

          .underline-accent {
            width: 48px;
            height: 3px;
            background: #ff6218;
            border-radius: 2px;
            margin-bottom: 14px;
          }

          .subtitle {
            font-size: 14px;
            color: #555;
            line-height: 1.65;
          }

          /* ── Carousel wrapper ─────────────────────────────── */
          .carousel-wrapper {
            position: relative;
          }

          .carousel-outer {
            overflow: hidden;
            clip-path: inset(0);
            position: relative;
          }

          /* ── Track: slides placed side by side ───────────── */
          .carousel-track {
            display: flex;
            flex-wrap: nowrap;
            will-change: transform;
          }

          /* ── Each slide is a full-width 3-column grid ─────── */
          .slide {
            flex: 0 0 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          /* ── Card ─────────────────────────────────────────── */
          .team-card {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            aspect-ratio: 3 / 4;
            background: #1a1a1a;
            cursor: pointer;
          }

          .team-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
            transition: transform 0.4s ease;
          }

          .team-card:hover img {
            transform: scale(1.04);
          }

          .card-info {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 24px 20px 20px;
            pointer-events: none;
          }

          .card-name {
            font-size: 17px;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 4px;
          }

          .card-role {
            font-size: 12px;
            font-weight: 500;
            color: #ff6218;
            line-height: 1.3;
          }

          /* ── Bio overlay ──────────────────────────────────── */
          .card-bio {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #ff6218;
            padding: 20px 18px 22px;
            transform: translateY(100%);
            transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 0 0 10px 10px;
          }

          .team-card:hover .card-bio,
          .team-card.bio-open .card-bio {
            transform: translateY(0);
          }

          .bio-text {
            font-size: 12.5px;
            color: #fff;
            line-height: 1.6;
            margin-bottom: 12px;
            font-style: italic;
          }

          .bio-detail-label {
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.65);
            margin-bottom: 5px;
            margin-top: 10px;
          }

          .bio-detail-label:first-of-type { margin-top: 0; }

          .bio-list {
            list-style: none;
            padding: 0;
            margin-bottom: 14px;
          }

          .bio-list li {
            font-size: 11.5px;
            color: #fff;
            line-height: 1.5;
            padding-left: 10px;
            position: relative;
          }

          .bio-list li::before {
            content: '·';
            position: absolute;
            left: 0;
            color: rgba(255,255,255,0.6);
          }

          .learn-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: transparent;
            color: #fff;
            border: 1.5px solid #fff;
            border-radius: 5px;
            padding: 9px 16px;
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
            transition: background 0.2s ease, color 0.2s ease;
          }

          .learn-more-btn:hover {
            background: #fff;
            color: #ff6218;
          }

          /* ── Nav arrows (desktop only) ────────────────────── */
          .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            background: #ff6218;
            border: none;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.25s ease, background 0.2s ease;
            box-shadow: 0 3px 14px rgba(255,98,24,0.45);
          }

          .carousel-wrapper:hover .nav-btn { opacity: 1; }
          .nav-btn:hover { background: #c94e10; }
          .nav-btn.prev { left: 10px; }
          .nav-btn.next { right: 10px; }

          .nav-btn svg {
            width: 14px; height: 14px;
            stroke: #fff; stroke-width: 2;
            stroke-linecap: round; stroke-linejoin: round;
            fill: none;
          }

          /* ── Dots (mobile only) ───────────────────────────── */
          .dots-row {
            display: none;
            justify-content: center;
            gap: 8px;
            margin-top: 18px;
            padding: 0 20px;
          }

          .dot {
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #d8d6d0;
            border: none; padding: 0;
            cursor: pointer;
            transition: background 0.25s, transform 0.25s;
          }

          .dot.active {
            background: #ff6218;
            transform: scale(1.25);
          }

          /* ── Desktop: breathing room on each side ────────── */
          @media (min-width: 769px) {
            .carousel-wrapper {
              margin: 0 20px;
            }
          }

          /* ── Mobile ───────────────────────────────────────── */
          @media (max-width: 768px) {
            .team-section { padding: 40px 0 48px; }
            .section-header { padding: 0 20px 28px; margin-bottom: 0; }

            .carousel-outer {
              overflow: visible;
              clip-path: none;
            }

            .carousel-track {
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              padding: 4px 20px 8px;
              gap: 14px;
              transform: none !important;
              transition: none !important;
            }

            .carousel-track::-webkit-scrollbar { display: none; }

            /* Dissolve slide wrappers — cards become direct flex children */
            .slide {
              display: contents;
            }

            .team-card {
              flex: 0 0 72% !important;
              width: auto !important;
              max-width: 260px;
              scroll-snap-align: start;
              aspect-ratio: 3 / 5;
            }

            .team-card:hover .card-bio { transform: translateY(100%); }
            .team-card.bio-open .card-bio { transform: translateY(0); }

            .bio-text { display: none; }

            .nav-btn { display: none; }
            .dots-row { display: flex; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="team-section">
      <div class="section-header">
      <div class="badge">
      <svg aria-hidden="true" fill="none" height="14" viewbox="0 0 14 14" width="14">
      <circle cx="7" cy="7" r="6" stroke="#ff6218" stroke-width="1.4"></circle>
      <path d="M4 7l2 2 4-4" stroke="#ff6218" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"></path>
      </svg>
            Our Team
          </div>
      <h2>Meet the Physiotherapists</h2>
      <div class="underline-accent"></div>
      <p class="subtitle">Our sports physiotherapists and where you can find them.</p>
      </div>
      <div class="carousel-wrapper">
      <div class="carousel-outer" id="carouselOuter">
      <div class="carousel-track" id="carouselTrack">

      <div class="slide">

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/aaron-james">
      <img alt="Aaron James" loading="lazy" src="https://static.wixstatic.com/media/607962_573942fe62c64e4abd24aee1844fcc89~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">Aaron James</p>
      <p class="card-role">Principal Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"Having experienced multiple painful injuries myself, I'm empathetic when it comes to helping my patients recover from pain so it doesn't disrupt their daily life."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Neck pain, back pain and stiffness</li>
      <li>Bulging discs, pinched nerve and sciatica</li>
      <li>Shoulder and knee pain</li>
      <li>Sporting and gym-based injuries</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/aaron-james" rel="noopener" target="_blank">Book with Aaron →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/john-lee">
      <img alt="John Lee" loading="lazy" src="https://static.wixstatic.com/media/607962_a627fb500bb14243bc88b0bc1632344b~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">John Lee</p>
      <p class="card-role">Principal Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"Most of us get used to living with our ailments and accept this as the norm. I enjoy getting my patients pain free and helping them realise the full potential of their body."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Neck and back pain</li>
      <li>Knee conditions and injuries</li>
      <li>Shoulder injuries</li>
      <li>All-round pain relief</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/john-lee" rel="noopener" target="_blank">Book with John →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/jonathan-chong">
      <img alt="Jonathan Chong" loading="lazy" src="https://static.wixstatic.com/media/607962_29762fceca9d43079e73451146f0ed65~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">Jonathan Chong</p>
      <p class="card-role">Senior Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"I use a combination of hands-on treatment to help reduce my patient's pain and combine them with an exercise program to help them get back to pre-injury function."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Shoulder and neck pain</li>
      <li>Back pain</li>
      <li>Tennis elbow injuries</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/jonathan-chong" rel="noopener" target="_blank">Book with Jonathan →</div>
      </div>
      </div>
      </div>

      <div class="slide">

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/brian-chan">
      <img alt="Brian Chan" loading="lazy" src="https://static.wixstatic.com/media/607962_d490ed60b62046beb8c6542cfb4c68d1~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">Brian Chan</p>
      <p class="card-role">Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"The goal isn't just recovery. It's helping you move better, feel stronger and perform at your best, every day."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Running injuries: shin splints, knee pain and tight calves</li>
      <li>Pain from overtraining</li>
      <li>Legs, hips and lower back pain</li>
      <li>Ongoing niggles that won't go away</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/brian-chan" rel="noopener" target="_blank">Book with Brian →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/kaiser-leung">
      <img alt="Kaiser Leung" loading="lazy" src="https://static.wixstatic.com/media/607962_42a8b8b0da7a4572a644e208b6bc5872~mv2.png/v1/crop/x_210,y_201,w_1400,h_1992/fill/w_390,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20250722_103317_edited_edited_edited_edited.png"/>
      <div class="card-info">
      <p class="card-name">Kaiser Leung</p>
      <p class="card-role">Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"I am empathetic by nature and love to help my patients become pain free, return to doing what they love, and to take control of their physical health."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Neck and shoulder pain</li>
      <li>Lower back pain and sciatica</li>
      <li>Weight lifting injuries</li>
      <li>Sports related knee, shoulder and ankle injuries</li>
      <li>Bone health and concussions</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/kaiser-leung" rel="noopener" target="_blank">Book with Kaiser →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/mckenzie-k">
      <img alt="McKenzie K" loading="lazy" src="https://static.wixstatic.com/media/607962_abba940c69c34537ade97ddc0f103ba1~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">McKenzie K</p>
      <p class="card-role">Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"I'm here to support you through your unique recovery journey, help you move better, feel stronger and get back to the activities you love."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Neck, upper back and lower back pain</li>
      <li>Sports related pain and injuries</li>
      <li>Shoulder, knee and ankle injuries</li>
      <li>Chronic pain</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/mckenzie-k" rel="noopener" target="_blank">Book with McKenzie →</div>
      </div>
      </div>
      </div>

      <div class="slide">

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/jack-mcfadden">
      <img alt="Jack McFadden" loading="lazy" src="https://static.wixstatic.com/media/607962_c64eb5720f364fd2ac6d4b537ffd9ce9~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">Jack McFadden</p>
      <p class="card-role">Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"My treatment style includes manual therapy techniques such as soft tissue release and joint mobilisation, with targeted rehab exercises to reduce pain, restore function and build long-term resilience."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Running-related and overuse injuries</li>
      <li>Lower, upper back and neck pain</li>
      <li>Sports-related pain and injuries</li>
      </ul>
      <p class="bio-detail-label">Sports Background</p>
      <ul class="bio-list">
      <li>Elite-level track and field</li>
      <li>Weight training, rugby and basketball</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/jack-mcfadden" rel="noopener" target="_blank">Book with Jack →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/beth-mclean">
      <img alt="Beth McLean" loading="lazy" src="https://static.wixstatic.com/media/607962_d02b83d4ce2b40d6ac77a5d5c04cba6a~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-info">
      <p class="card-name">Beth McLean</p>
      <p class="card-role">Associate Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"Beth regularly treats lower-back, upper-back and neck pain, and provides shoulder rehabilitation and tailored strength and conditioning."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Lower, upper back and neck pain</li>
      <li>Shoulder rehabilitation</li>
      <li>Strength and conditioning</li>
      <li>Sports-related injuries</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/beth-mclean" rel="noopener" target="_blank">Book with Beth →</div>
      </div>
      </div>

      <div class="team-card" data-href="https://www.infinitehealthgroup.com.au/atticus-gordon">
      <img alt="Atticus Gordon" loading="lazy" src="https://static.wixstatic.com/media/607962_a0e1508363854b578360e7187f75117d~mv2.jpg/v1/fill/w_463,h_701,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/607962_a0e1508363854b578360e7187f75117d~mv2.jpg"/>
      <div class="card-info">
      <p class="card-name">Atticus Gordon</p>
      <p class="card-role">Physiotherapist</p>
      </div>
      <div class="card-bio">
      <p class="bio-text">"My treatment style involves hands-on treatment and exercises with a movement-focused approach, offering support that helps patients move freely and return to what they enjoy."</p>
      <p class="bio-detail-label">Clinical Focus</p>
      <ul class="bio-list">
      <li>Shoulder injuries</li>
      <li>Weightlifting related injuries</li>
      <li>Lower, upper back and neck pain</li>
      <li>Sports-related pain and injuries</li>
      </ul>
      <p class="bio-detail-label">Sports Background</p>
      <ul class="bio-list">
      <li>Rugby league and union</li>
      <li>Weight training and snowboarding</li>
      </ul>
      <div class="learn-more-btn" data-url="https://www.infinitehealthgroup.com.au/atticus-gordon" rel="noopener" target="_blank">Book with Atticus →</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <button aria-label="Previous practitioners" class="nav-btn prev" id="prevBtn">
      <svg viewbox="0 0 14 14"><path d="M9 7H5M6.5 5L5 7l1.5 2"></path></svg>
      </button>
      <button aria-label="Next practitioners" class="nav-btn next" id="nextBtn">
      <svg viewbox="0 0 14 14"><path d="M5 7h4M7.5 5L9 7l-1.5 2"></path></svg>
      </button>
      </div>
      <div class="dots-row" id="dotsRow"></div>
      </div>
    `;

    shadow.querySelectorAll('[data-url]:not(.article-card)').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const url = el.dataset.url;
        if (url) {
          this.dispatchEvent(new CustomEvent('navigate', {
            detail: { url },
            bubbles: true
          }));
        }
      });
    });

    var outer        = shadow.getElementById('carouselOuter');
      var track        = shadow.getElementById('carouselTrack');
      var dotsEl       = shadow.getElementById('dotsRow');
      var allCards     = Array.from(track.querySelectorAll('.team-card'));
      var totalSlides  = 3;
      var currentSlide = 0;
      var isAnimating  = false;
    
      var isMobile = function() { return window.matchMedia('(max-width: 768px)').matches; };
    
      
      function goToSlide(index, animate) {
        currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
        track.style.transition = animate
          ? 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          : 'none';
        track.style.transform = 'translateX(-' + (currentSlide * outer.offsetWidth) + 'px)';
      }
    
      shadow.getElementById('prevBtn').addEventListener('click', function() {
        if (isMobile() || isAnimating) return;
        isAnimating = true;
        goToSlide(currentSlide - 1, true);
        setTimeout(function() { isAnimating = false; }, 570);
      });
    
      shadow.getElementById('nextBtn').addEventListener('click', function() {
        if (isMobile() || isAnimating) return;
        isAnimating = true;
        goToSlide(currentSlide + 1, true);
        setTimeout(function() { isAnimating = false; }, 570);
      });
    
      window.addEventListener('resize', function() {
        if (!isMobile()) goToSlide(currentSlide, false);
      });
    
      
      function initCarousel() {
        requestAnimationFrame(function() {
          if (!isMobile()) goToSlide(0, false);
        });
      }
    
      if (document.readyState === 'complete') {
        initCarousel();
      } else {
        window.addEventListener('load', initCarousel);
      }
    
      
      allCards.forEach(function(_, i) {
        var btn = document.createElement('button');
        btn.className = 'dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        btn.addEventListener('click', function() {
          var cardW = allCards[0].offsetWidth + 14;
          track.scrollTo({ left: i * cardW, behavior: 'smooth' });
        });
        dotsEl.appendChild(btn);
      });
    
      var dots = Array.from(dotsEl.querySelectorAll('.dot'));
    
      function setActiveDot(i) {
        dots.forEach(function(d, idx) { d.classList.toggle('active', idx === i); });
      }
    
      var scrollTimer;
      track.addEventListener('scroll', function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
          var cardW = allCards[0].offsetWidth + 14;
          setActiveDot(Math.round(track.scrollLeft / cardW));
        }, 60);
      }, { passive: true });
    
      
      track.addEventListener('click', function(e) {
        var card = e.target.closest('.team-card');
        if (!card) return;
        if (e.target.closest('.learn-more-btn')) return;
    
        if (isMobile()) {
          var isOpen = card.classList.contains('bio-open');
          allCards.forEach(function(c) { c.classList.remove('bio-open'); });
          if (!isOpen) card.classList.add('bio-open');
        } else {
          var href = card.dataset.href;
          if (href) window.open(href, '_blank', 'noopener');
        }
      });
    
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.team-card')) {
          allCards.forEach(function(c) { c.classList.remove('bio-open'); });
        }
      });
  }
}

customElements.define('ih-meet-the-team-sport', IhMeetTheTeamSport);
