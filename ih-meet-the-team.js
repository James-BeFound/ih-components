class IhMeetTheTeam extends HTMLElement {
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

          .carousel-outer {
            position: relative;
            margin: 0 -48px;
          }

          .carousel-track {
            display: flex;
            gap: 18px;
            padding: 4px 48px 24px;
            overflow-x: auto;
            scroll-behavior: smooth;
            scrollbar-width: none;
          }

          .carousel-track::-webkit-scrollbar {
            display: none;
          }

          .team-card {
            flex: 0 0 calc(25% - 14px);
            min-width: 180px;
            position: relative;
            display: block;
            border-radius: 10px;
            overflow: hidden;
            text-decoration: none;
            aspect-ratio: 3 / 4;
            background: #1a1a1a;
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

          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 20px 16px 18px;
          }

          .card-name {
            font-size: 15px;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 4px;
          }

          .card-role {
            font-size: 11px;
            font-weight: 500;
            color: #ff6218;
            line-height: 1.3;
            margin-bottom: 6px;
          }

          .card-location {
            font-size: 10px;
            font-weight: 500;
            color: rgba(255,255,255,0.75);
            letter-spacing: 0.3px;
          }

          /* ---- NAV ARROWS ----
             Hidden by default. CSS :hover on .carousel-outer shows them.
             No JavaScript touches opacity — that was causing all previous conflicts. */
          .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 20;
            background: #ff6218;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.25s ease, background 0.2s ease;
            box-shadow: 0 3px 12px rgba(255,98,24,0.45);
          }

          /* Both arrows appear together whenever the mouse is anywhere over the carousel area */
          .carousel-outer:hover .nav-btn {
            opacity: 1;
          }

          .nav-btn:hover {
            background: #c94e10;
          }

          .nav-btn.prev { left: 10px; }
          .nav-btn.next { right: 10px; }

          .nav-btn svg {
            width: 14px;
            height: 14px;
            stroke: #fff;
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
            fill: none;
          }

          /* Fades — always visible on both sides because the carousel is infinite */
          .fade-edge {
            position: absolute;
            top: 0;
            bottom: 24px;
            width: 80px;
            pointer-events: none;
            z-index: 5;
          }

          .fade-edge.left {
            left: 0;
            background: linear-gradient(to left, transparent, #F5F4F0 80%);
          }

          .fade-edge.right {
            right: 0;
            background: linear-gradient(to right, transparent, #F5F4F0 80%);
          }

          @media (max-width: 768px) {
            .team-section { padding: 40px 0 0; }
            .section-header { padding: 0 20px 28px; margin-bottom: 0; }
            .carousel-outer { margin: 0; }
            .carousel-track { padding: 4px 0 24px 20px; gap: 14px; }
            .team-card { flex: 0 0 72%; max-width: 260px; }

            .nav-btn.prev { display: none; }

            .nav-btn.next {
              opacity: 1;
              right: 10px;
              animation: nudge 1.8s ease-in-out infinite;
            }
            .nav-btn.next:hover { animation: none; }

            @keyframes nudge {
              0%, 100% { transform: translateY(-50%) translateX(0); }
              50%       { transform: translateY(-50%) translateX(3px); }
            }

            .fade-edge.left { display: none; }
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
      <p class="subtitle">Meet our physiotherapists and where you can find them.</p>
      </div>
      <div class="carousel-outer" id="carouselOuter">
      <div class="carousel-track" id="carouselTrack">
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/aaron-james" target="_blank">
      <img alt="Aaron James" loading="lazy" src="https://static.wixstatic.com/media/607962_573942fe62c64e4abd24aee1844fcc89~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Aaron James</p>
      <p class="card-role">Senior Physiotherapist</p>
      <p class="card-location">Chatswood &amp; Mosman</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/john-lee" target="_blank">
      <img alt="John Lee" loading="lazy" src="https://static.wixstatic.com/media/607962_a627fb500bb14243bc88b0bc1632344b~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">John Lee</p>
      <p class="card-role">Founder / Principal Physiotherapist</p>
      <p class="card-location">Chatswood &amp; Sydney CBD</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/beth-mclean" target="_blank">
      <img alt="Beth McLean" loading="lazy" src="https://static.wixstatic.com/media/607962_d02b83d4ce2b40d6ac77a5d5c04cba6a~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Beth McLean</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Sydney CBD &amp; Mosman</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/jonathan-chong" target="_blank">
      <img alt="Jonathan Chong" loading="lazy" src="https://static.wixstatic.com/media/607962_29762fceca9d43079e73451146f0ed65~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Jonathan Chong</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Chatswood &amp; North Sydney</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/kaiser-leung" target="_blank">
      <img alt="Kaiser Leung" loading="lazy" src="https://static.wixstatic.com/media/607962_65e90f25d2044abbb48debd86197df09~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Kaiser Leung</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Chatswood &amp; Hornsby</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/won-choi" target="_blank">
      <img alt="Won Choi" loading="lazy" src="https://static.wixstatic.com/media/607962_b24c6b315d334eae96fbf7249fa25bec~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Won Choi</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Sydney CBD &amp; North Sydney</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/brian-chan" target="_blank">
      <img alt="Brian Chan" loading="lazy" src="https://static.wixstatic.com/media/607962_d490ed60b62046beb8c6542cfb4c68d1~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Brian Chan</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Chatswood</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/jack-mcfadden" target="_blank">
      <img alt="Jack McFadden" loading="lazy" src="https://static.wixstatic.com/media/607962_c64eb5720f364fd2ac6d4b537ffd9ce9~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Jack McFadden</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Mosman &amp; Lane Cove</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/tate-ip" target="_blank">
      <img alt="Tate IP" loading="lazy" src="https://static.wixstatic.com/media/607962_d3c07706b3f345a1876b86b357b8fa03~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Tate IP</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Chatswood</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/hannah-rawlins" target="_blank">
      <img alt="Hannah Rawlins" loading="lazy" src="https://static.wixstatic.com/media/607962_026cfca2b61e47b8a088f4961d323d2e~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">Hannah Rawlins</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Sydney CBD &amp; North Sydney</p>
      </div>
      </a>
      <a class="team-card" href="https://www.infinitehealthgroup.com.au/mckenzie-k" target="_blank">
      <img alt="McKenzie K" loading="lazy" src="https://static.wixstatic.com/media/607962_abba940c69c34537ade97ddc0f103ba1~mv2.jpg/v1/fill/w_480,h_640,al_c,q_90,enc_auto/photo.jpg"/>
      <div class="card-overlay">
      <p class="card-name">McKenzie K</p>
      <p class="card-role">Associate Physiotherapist</p>
      <p class="card-location">Chatswood</p>
      </div>
      </a>
      </div>
      <button aria-label="Previous team members" class="nav-btn prev" id="prevBtn">
      <svg viewbox="0 0 14 14"><path d="M9 7H5M6.5 5L5 7l1.5 2"></path></svg>
      </button>
      <button aria-label="Next team members" class="nav-btn next" id="nextBtn">
      <svg viewbox="0 0 14 14"><path d="M5 7h4M7.5 5L9 7l-1.5 2"></path></svg>
      </button>
      <div class="fade-edge left"></div>
      <div class="fade-edge right"></div>
      </div>
      </div>
    `;

    const allCards  = Array.from(shadow.querySelectorAll('.article-card'));
    const pageBtns  = shadow.querySelectorAll('.page-btn[data-page]');
    const prevBtn   = shadow.getElementById('prevBtn');
    const nextBtn   = shadow.getElementById('nextBtn');
    const pageInfo  = shadow.getElementById('pageInfo');

    const perPage    = 3;
    const totalPages = Math.ceil(allCards.length / perPage);
    let currentPage  = 1;

    const showPage = (page) => {
      currentPage = page;
      allCards.forEach((card, i) => {
        card.style.display = Math.floor(i / perPage) + 1 === page ? '' : 'none';
      });
      pageBtns.forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
      });
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
      const from = (page - 1) * perPage + 1;
      const to   = Math.min(page * perPage, allCards.length);
      pageInfo.textContent = `Showing ${from} to ${to} of ${allCards.length} articles`;
    };

    allCards.forEach(card => {
      card.addEventListener('click', () => {
        const url = card.dataset.url;
        if (url) {
          this.dispatchEvent(new CustomEvent('navigate', {
            detail: { url },
            bubbles: true
          }));
        }
      });
    });

    pageBtns.forEach(btn => {
      btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
    });

    prevBtn.addEventListener('click', () => { if (currentPage > 1) showPage(currentPage - 1); });
    nextBtn.addEventListener('click', () => { if (currentPage < totalPages) showPage(currentPage + 1); });

    showPage(1);
  }
}

customElements.define('ih-meet-the-team', IhMeetTheTeam);
