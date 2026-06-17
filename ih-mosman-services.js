class IhMosmanServices extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>

          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          * { margin: 0; padding: 0; box-sizing: border-box; }

          :host {
                  display: block;
                  font-family: 'Inter', sans-serif;
                }

          .section-wrap {
                  background: transparent; width: 100%; padding: 64px 24px 56px; }

          .eyebrow {
            font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
            text-transform: uppercase; color: #ff6218; margin-bottom: 14px;
          }

          h2 {
            font-size: clamp(24px, 5vw, 36px); font-weight: 700;
            line-height: 1.15; color: #1a1a1a; margin-bottom: 12px;
            letter-spacing: -0.5px;
          }

          .underline-accent {
            width: 48px; height: 3px; background: #ff6218;
            border-radius: 2px; margin-bottom: 40px;
          }

          #categories-wrap {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .category-block { margin-bottom: 0; }

          .category-heading {
            font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
            text-transform: uppercase; color: #1a1a1a;
            margin-bottom: 14px;
          }

          .table-wrap {
            border: 1.5px solid #e8e6e0;
            border-radius: 12px;
            overflow: hidden;
            background: #fff;
          }

          table { width: 100%; border-collapse: collapse; }

          thead th {
            padding: 14px 20px;
            font-size: 11px; font-weight: 700;
            letter-spacing: 1.5px; text-transform: uppercase;
            color: #fff; text-align: left;
          }

          thead th:last-child { text-align: center; }

          tbody tr {
            border-bottom: 1px solid #f0ede8;
            transition: background 0.15s;
          }

          tbody tr:last-child { border-bottom: none; }
          tbody tr:hover { background: #fafaf8; }

          tbody tr.extra-row { display: none; opacity: 0; }

          tbody tr.extra-row.visible {
            display: table-row;
            animation: fadeRow 0.25s ease forwards;
          }

          @keyframes fadeRow {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          td { padding: 13px 20px; font-size: 13px; }

          td.service-name { color: #2d2d2d; font-weight: 500; }

          td.service-name a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s;
          }
          td.service-name a:hover { color: #ff6218; }

          td.service-status { text-align: center; width: 160px; }

          .tick-icon {
            display: inline-flex; align-items: center; justify-content: center;
            width: 22px; height: 22px;
            background: #ff6218; border-radius: 50%;
          }

          .tick-icon svg { width: 11px; height: 11px; }

          .toggle-wrap { margin-top: 14px; display: flex; justify-content: center; }

          .show-more-btn {
            display: inline-flex; align-items: center; gap: 6px;
            background: none;
            border: 1.5px solid #e0ddd8;
            border-radius: 8px;
            padding: 11px 22px;
            font-family: 'Inter', sans-serif;
            font-size: 12px; font-weight: 700;
            letter-spacing: 1px; text-transform: uppercase;
            color: #555; cursor: pointer;
            transition: border-color 0.2s, color 0.2s;
          }

          .show-more-btn:hover { border-color: #ff6218; color: #ff6218; }

          .footnote {
            font-size: 11px; color: #aaa; margin-top: 24px; line-height: 1.6;
          }

          @media (min-width: 768px) {
            .section-wrap { padding: 72px 48px 64px; }
            .eyebrow { font-size: 11px; letter-spacing: 3px; }
            td { font-size: 14px; }
            thead th { font-size: 12px; }
            .category-heading { font-size: 14px; }
            #categories-wrap { grid-template-columns: 1fr; gap: 28px; }
          }

          button { outline: none; }
          button:focus { outline: none; }
          button:focus-visible { outline: none; }
          button.read-link { background: none; border: none; padding: 0; cursor: pointer; font-family: inherit; }
          button.cta-btn { cursor: pointer; border: none; outline: none; }
      </style>

      <div class="section-wrap">
      <p class="eyebrow">Services</p>
      <h2>Services at Our Mosman Clinic</h2>
      <div class="underline-accent"></div>
      <div id="categories-wrap">

      </div>
      <p class="footnote">Services confirmed at this location. Contact us to discuss specific treatment options.</p>
      </div>
    `;

    const PHYSIO = 'https://www.infinitehealthgroup.com.au/physiotherapy';

    const CATEGORIES = [
        {
          label: 'Physiotherapy Services',
          headerColor: '#ff6218',
          services: [
            { name: 'Physiotherapy',                  url: PHYSIO                                                                         },
            { name: 'Sports Physiotherapy',            url: 'https://www.infinitehealthgroup.com.au/sport-physiotherapist'                 },
            { name: 'Orthopaedic Rehabilitation',      url: PHYSIO                                                                         },
            { name: 'Exercise Rehabilitation',         url: 'https://www.infinitehealthgroup.com.au/exercise-physiology'                  },
            { name: 'Dry Needling',                    url: 'https://www.infinitehealthgroup.com.au/dry-needling'                         },
            { name: 'Corporate Occupational Services', url: PHYSIO                                                                         },
            { name: 'WorkCover NSW',                   url: 'https://www.infinitehealthgroup.com.au/workcover-physiotherapy'               },
            { name: 'CTP Claims'                                                                                                           },
            { name: 'NDIS',                            url: 'https://www.infinitehealthgroup.com.au/ndis-physiotherapy'                   },
            { name: 'Telehealth / Online Physio',      url: 'https://www.infinitehealthgroup.com.au/online-consultations-physiotherapy'   },
          ],
        },
      ];
    
      const VISIBLE = 6;
    
      const wrap = shadow.getElementById('categories-wrap');
    
      CATEGORIES.forEach(cat => {
        if (!cat.services.length) return;
    
        const block = document.createElement('div');
        block.className = 'category-block';
    
        const heading = document.createElement('p');
        heading.className = 'category-heading';
        heading.textContent = cat.label;
        block.appendChild(heading);
    
        const tableWrap = document.createElement('div');
        tableWrap.className = 'table-wrap';
    
        const table = document.createElement('table');
        table.innerHTML = `
          <thead>
            <tr style="background:${cat.headerColor};">
              <th>Service</th>
              <th>Available at Mosman</th>
            </tr>
          </thead>
        `;
    
        const tbody = document.createElement('tbody');
    
        cat.services.forEach((svc, i) => {
          const tr = document.createElement('tr');
          if (i >= VISIBLE) tr.classList.add('extra-row');
          const nameCell = svc.url
            ? `<a href="${svc.url}" target="_blank" rel="noopener noreferrer">${svc.name}</a>`
            : svc.name;
          tr.innerHTML = `
            <td class="service-name">${nameCell}</td>
            <td class="service-status">
              <span class="tick-icon">
                <svg viewBox="0 0 11 11" fill="none">
                  <path d="M1.5 5.5l3 3 5-5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </td>
          `;
          tbody.appendChild(tr);
        });
    
        table.appendChild(tbody);
        tableWrap.appendChild(table);
        block.appendChild(tableWrap);
    
        if (cat.services.length > VISIBLE) {
          const toggleWrap = document.createElement('div');
          toggleWrap.className = 'toggle-wrap';
    
          const btn = document.createElement('button');
          btn.className = 'show-more-btn';
          btn.innerHTML = '<span class="btn-label">Show More Services</span><span class="btn-arrow"> ↓</span>';
    
          let expanded = false;
    
          btn.addEventListener('click', () => {
            expanded = !expanded;
            const extraRows = tbody.querySelectorAll('tr.extra-row');
    
            if (expanded) {
              extraRows.forEach((row, i) => {
                row.style.animationDelay = `${i * 40}ms`;
                row.classList.add('visible');
              });
              btn.querySelector('.btn-label').textContent = 'Show Less';
              btn.querySelector('.btn-arrow').textContent = ' ↑';
            } else {
              extraRows.forEach(row => {
                row.classList.remove('visible');
                row.style.animationDelay = '';
              });
              btn.querySelector('.btn-label').textContent = 'Show More Services';
              btn.querySelector('.btn-arrow').textContent = ' ↓';
            }
    
            setTimeout(syncHeight, 300);
          });
    
          toggleWrap.appendChild(btn);
          block.appendChild(toggleWrap);
        }
    
        wrap.appendChild(block);
      });
    
      function syncHeight() {
        var h = document.documentElement.scrollHeight;
        if (window.Wix) window.Wix.setHeight(h);
      }
      if (window.ResizeObserver) new ResizeObserver(syncHeight).observe(document.body);
      window.addEventListener('load', syncHeight);
  }
}

customElements.define('ih-mosman-services', IhMosmanServices);
