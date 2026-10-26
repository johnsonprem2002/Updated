/* Featured case studies: cards, full project view, interactive workflow, gallery + lightbox.
   To use REAL screenshots: put files in assets/ and change `src` (and set actual:true) in the gallery lists below. */
(() => {
  const IC = {gear:'M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM3 12h3M18 12h3M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',layers:'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5',tree:'M10 3h4v4h-4zM3 16h4v4H3zM10 16h4v4h-4zM17 16h4v4h-4zM12 7v4M5 16v-5h14v5M12 11v5',sliders:'M4 7h10M18 7h2M4 17h2M10 17h10M14 5v4M6 15v4',list:'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',check:'M4 12l5 5L20 6',box:'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5',file:'M7 3h7l5 5v13H7zM14 3v5h5',cell:'M9 3h6v2H9zM7 5h10v16H7z',grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',ruler:'M3 17L17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2'};
  const ico = (k, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${IC[k]}"/></svg>`;
  const A = 'assets/';
  const CASES = {
    ov: {
      no:'01', kind:'PRODUCT CONFIGURATION', short:'SmartStack O&V', cover:A+'ov-bess.svg', coverAlt:'Illustrative industrial battery energy storage enclosures on a pad',
      title:'SmartStack Product Configuration Using PTC Windchill Options & Variants',
      summary:'Configurable SKID and POD product structures managed through structured configuration rules, reusable modules and configurable BOMs.',
      meta:[['Client / product','Fluence Energy · SmartStack Battery Energy Storage System (BESS)'],['Implementation context','CADOpt Technologies Private Limited'],['Focus','SKID and POD models']],
      overview:'Worked on configurable product structures for SmartStack SKID and POD models using PTC Windchill Options & Variants. The objective was to manage product variations through structured configuration rules, reusable modules, and configurable BOMs.',
      role:[['CAD data restructuring and product structure','CAD data restructuring and organization; component naming and description consistency; reusable component and subassembly structures; product structure alignment for configurable products.'],['Options & Variants framework','Option Pool and Option Set setup; definition and organization of configurable choices; Include, Enable and Exclude rule management; management of product configuration dependencies.'],['Configurable BOM management','150% BOM structure development and management for SKID and POD product structures; modular product architecture; reusable modules and configurable components.'],['Variant specification','Configuration by certification, region, duration, battery module, corrosion rating, seismic requirements, network mode, fire detection, inverter/PCS make, PCS capabilities, thermal management and thermal supplier; variant configuration, validation and configured product structure review.'],['Validation','Review of configuration rules; verification of component inclusion and exclusion; product structure consistency checks; support for extending the framework to future revisions such as SSTK V2.']],
      tools:['PTC Windchill','Options & Variants','CAD data restructuring','Configurable product structures','150% BOM','Variant Specifications'],
      wf:[['CAD Data Restructuring','layers','Organizing CAD data with consistent component naming and descriptions.'],['Product Structure Organization','tree','Aligning the structure for configurable products, with reusable components and subassemblies.'],['Option Pool and Option Set','sliders','Defining and organizing the configurable choices.'],['Configuration Rules','list','Managing Include, Enable and Exclude rules and the dependencies between choices.'],['150% BOM','grid','Developing and managing the 150% BOM for the SKID and POD product structures.'],['Variant Specification','file','Configuring variants by certification, region, duration, battery module, corrosion rating, seismic requirements, network mode, fire detection, inverter/PCS make and capabilities, thermal management and thermal supplier.'],['Configured Product Structure','box','Reviewing the product structure generated for a given variant specification.'],['Validation','check','Reviewing configuration rules, verifying component inclusion and exclusion, and checking structure consistency.']],
      gallery:[['ov-bess','Illustrative industrial battery energy storage enclosures with HVAC units on a foundation pad','SmartStack-style BESS installation. Generic illustration, not a client drawing.'],['ov-skid-pod','Illustrative SKID base with three configurable POD modules and reusable battery modules','SKID and POD product architecture (conceptual).'],['ov-workflow','Eight-step Options and Variants configuration workflow diagram','Windchill Options & Variants configuration workflow.'],['ov-bom-tree','Tree diagram of a 150 percent BOM with Include, Enable and Exclude rule badges','Configurable BOM tree with rule badges (conceptual).'],['ov-cad-restructure','Unstructured CAD blocks restructured into grouped reusable subassemblies','CAD restructuring and modular assembly visualization (conceptual).'],['ov-decision-tree','Decision tree with Region, Certification and Duration branches and a list of variant parameters','Product configuration decision tree and variant parameters.']],
      challenges:['Keeping component naming and descriptions consistent across restructured CAD data.','Designing reusable modules that serve several SKID and POD variants.','Managing dependencies between configuration choices so rules stay consistent.','Verifying that each variant includes and excludes the intended components.','Structuring the framework so it can be extended to future product revisions such as SSTK V2.'],
      deliverables:['Configurable SKID and POD product structures','Option Pool and Option Set setup','Include / Enable / Exclude configuration rules','150% BOM structure','Variant specifications and configured product structure reviews','Review of rules, component inclusion/exclusion and structure consistency'],
      skills:['PTC Windchill Options & Variants','Configuration rule management','150% BOM management','CAD data organization','Modular product architecture','Variant specification','Validation and consistency checks'],
      note:'Diagrams on this page are illustrative and were created to explain the approach. They are not client deliverables or screenshots of Fluence or Windchill systems.'
    },
    ev: {
      no:'02', kind:'CONCEPT DESIGN', short:'EV Battery Pack', cover:A+'ev-pack-render.svg', coverAlt:'Conceptual EV battery pack with two rows of cells inside an enclosure with a lifted cover',
      title:'EV Battery Pack Concept Design and Modular Packaging',
      summary:'A modular EV battery pack concept covering cell arrangement, battery holder design, sheet metal enclosure components and packaging.',
      meta:[['Type','Concept design and modular packaging'],['Tools','Creo Parametric · SolidWorks (where applicable)'],['Stage','Concept. No validated performance is claimed.']],
      overview:'Worked on an EV battery pack concept involving battery cell arrangement, battery holder design, sheet metal enclosure components, and packaging considerations using mechanical CAD tools.',
      role:[['Concept development','Battery pack layout and packaging concept; cell arrangement and space utilization; design exploration for a modular battery pack.'],['Battery cell and holder design','Battery cells arranged in two rows; battery holder and support structure concept; cell spacing and packaging considerations.'],['Sheet metal enclosure design','Battery enclosure and cover concept; sheet metal component development; evaluation of different sheet thicknesses (0.8 mm, 1.0 mm and 1.2 mm) where applicable to the concept; mounting, assembly and enclosure layout considerations.'],['CAD modelling','3D part modelling and assembly development; component positioning and fit considerations; assembly visualization and design refinement.'],['Engineering considerations','Packaging efficiency; mechanical support and enclosure arrangement; serviceability and assembly access; preliminary thermal management and electrical safety considerations.']],
      tools:['Creo Parametric','SolidWorks (where applicable)','3D CAD modelling','Assembly design','Sheet metal design','Product packaging','Concept development'],
      wf:[['Design Requirements','file','Capturing the packaging and modular-pack requirements for the concept.'],['Battery Cell Layout','cell','Arranging the battery cells in two rows and studying spacing and space utilization.'],['Holder Design','grid','Concept for the battery holder and support structure.'],['Enclosure Concept','box','Sheet metal enclosure and cover concept, including mounting and assembly considerations.'],['3D CAD Assembly','gear','3D part modelling and assembly development with component positioning and fit.'],['Packaging Review','ruler','Reviewing packaging efficiency, support, serviceability and assembly access.'],['Concept Refinement','check','Refining the concept from the review, including sheet thickness options of 0.8, 1.0 and 1.2 mm where applicable.']],
      gallery:[['ev-pack-render','Conceptual EV battery pack with two rows of cells in a cutaway tray and a lifted translucent cover','EV battery pack concept render. Conceptual illustration, not an actual CAD model.'],['ev-cell-layout','Cylindrical battery cells arranged in two rows with cell pitch and row spacing callouts','Battery cells arranged in two rows (conceptual).'],['ev-holder','Battery holder plate with two rows of cell sockets, support ribs and end blocks','Battery holder concept (conceptual).'],['ev-enclosure','Sheet metal enclosure tray with mounting tabs and a lifted cover, with 0.8, 1.0 and 1.2 millimetre thickness options','Sheet metal enclosure and cover (conceptual).'],['ev-exploded','Exploded view of tray, holder, cells and cover along an assembly axis','Exploded battery pack assembly (conceptual).'],['ev-relationship','Nested diagram showing cells inside a holder inside an enclosure with a cover above','Relationship between cells, holder, enclosure and cover (conceptual).']],
      challenges:['Balancing packaging efficiency with spacing between cells.','Providing mechanical support for the cells through the holder and enclosure arrangement.','Choosing among sheet thickness options of 0.8 mm, 1.0 mm and 1.2 mm for the concept.','Keeping the assembly serviceable, with access for assembly and maintenance.','Leaving room for preliminary thermal management and electrical safety considerations. These are not validated by analysis.'],
      deliverables:['Battery pack layout and packaging concept','Two-row cell arrangement','Battery holder and support structure concept','Sheet metal enclosure and cover concept','3D CAD parts and assembly','Packaging review and concept refinement'],
      skills:['Creo Parametric','SolidWorks','3D part and assembly modelling','Sheet metal design','Product packaging','Concept development','Design for assembly and serviceability'],
      note:'The images here are conceptual illustrations, not actual CAD models or completed engineering deliverables. This is concept-stage work; no thermal, electrical or structural validation is claimed.'
    }
  };
  const el = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; };
  const esc = s => s.replace(/&/g, '&amp;');

  // ----- featured section -----
  const root = document.querySelector('#featured');
  root.innerHTML = `<div class="section-heading"><div><div class="eyebrow">FEATURED CASE STUDIES</div><h2>Real-world<br><span class="muted">engineering work.</span></h2></div><p>Two projects in detail: configurable product structures and EV battery pack concept design.</p></div><div class="feature-grid">${Object.entries(CASES).map(([k, c]) => `
  <article class="feature-card" data-case="${k}"><button class="feature-media" data-open-case="${k}" aria-label="Open ${esc(c.short)} project"><img src="${c.cover}" alt="${c.coverAlt}" loading="lazy" decoding="async"></button>
  <div class="feature-body"><span class="project-type">PROJECT ${c.no} · ${c.kind}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><div class="chips">${c.tools.slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('')}</div><button class="button button-primary" data-open-case="${k}">View Project <span>↗</span></button></div></article>`).join('')}</div>`;

  // ----- overlays -----
  const view = el('<div class="case-view" id="case-view" role="dialog" aria-modal="true" aria-label="Project details" hidden><div class="case-panel" tabindex="-1"></div></div>');
  const lb = el(`<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden><button class="lb-btn lb-close" aria-label="Close image">✕</button><button class="lb-btn lb-prev" aria-label="Previous image">‹</button><figure><div class="lb-stage"><img alt=""></div><figcaption></figcaption></figure><button class="lb-btn lb-next" aria-label="Next image">›</button><div class="lb-bar"><button class="lb-zoom" aria-label="Zoom in">⊕ Zoom</button><span class="lb-count"></span></div></div>`);
  document.body.append(view, lb);
  const panel = view.firstChild; let cur = null, lastFocus = null, gi = 0;

  const render = k => {
    const c = CASES[k], other = k === 'ov' ? 'ev' : 'ov';
    panel.innerHTML = `
    <div class="case-top"><button class="case-close" aria-label="Close project">← Back to portfolio</button><span>PROJECT ${c.no} / 02</span><button class="case-switch" data-open-case="${other}">Next: ${esc(CASES[other].short)} →</button></div>
    <header class="case-hero"><div><div class="eyebrow">PROJECT ${c.no} · ${c.kind}</div><h2 id="case-title">${esc(c.title)}</h2><dl class="case-meta">${c.meta.map(m => `<div><dt>${m[0]}</dt><dd>${esc(m[1])}</dd></div>`).join('')}</dl></div><img src="${c.cover}" alt="${c.coverAlt}"></header>
    <section><h3>${ico('file')} Project overview</h3><p class="lead">${esc(c.overview)}</p></section>
    <section><h3>${ico('gear')} My role and contributions</h3><div class="role-grid">${c.role.map((r, i) => `<div class="role"><b>${String(i + 1).padStart(2, '0')}</b><h4>${esc(r[0])}</h4><p>${esc(r[1])}</p></div>`).join('')}</div></section>
    <section><h3>${ico('ruler')} Tools and technologies</h3><div class="chips big">${c.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div></section>
    <section><h3>${ico('tree')} Technical workflow</h3><div class="wf" role="tablist" aria-label="Workflow stages">${c.wf.map((s, i) => `<button class="wf-step${i ? '' : ' on'}" role="tab" aria-selected="${!i}" data-i="${i}"><span class="wf-ic">${ico(s[1])}</span><small>${String(i + 1).padStart(2, '0')}</small><b>${esc(s[0])}</b></button>`).join('')}</div><div class="wf-detail" aria-live="polite"><b>${esc(c.wf[0][0])}</b><p>${esc(c.wf[0][2])}</p></div></section>
    <section><h3>${ico('grid')} Project images and gallery</h3><p class="hint">Click an image to open it full size and zoom.</p><div class="gallery">${c.gallery.map((g, i) => `<figure><button class="g-thumb" data-g="${i}" aria-label="Open image: ${esc(g[2])}"><img src="${A}${g[0]}.svg" alt="${esc(g[1])}" loading="lazy"></button><figcaption>${esc(g[2])}</figcaption></figure>`).join('')}</div></section>
    <div class="two"><section><h3>${ico('sliders')} Engineering challenges and design considerations</h3><ul class="tick">${c.challenges.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section><section><h3>${ico('box')} Key deliverables</h3><ul class="tick">${c.deliverables.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section></div>
    <section><h3>${ico('check')} Skills demonstrated</h3><div class="chips big">${c.skills.map(t => `<span>${esc(t)}</span>`).join('')}</div></section>
    <p class="case-note"><b>Note:</b> ${esc(c.note)}</p>
    <div class="case-foot"><a class="button button-primary" href="mailto:johnsonprem2002@gmail.com?subject=${encodeURIComponent('Portfolio enquiry: ' + c.short)}">Discuss this project <span>↗</span></a><button class="case-close">Close</button></div>`;
  };
  const open = k => {
    if (view.hidden) { lastFocus = document.activeElement; document.body.style.overflow = 'hidden'; }
    cur = k; render(k); view.hidden = false; panel.scrollTop = 0; panel.focus({preventScroll: true});
  };
  const close = () => { view.hidden = true; document.body.style.overflow = ''; lastFocus?.focus?.(); };

  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open-case]'); if (o) { open(o.dataset.openCase); return; }
    if (e.target.closest('.case-close')) { close(); return; }
    const s = e.target.closest('.wf-step');
    if (s) { const c = CASES[cur], i = +s.dataset.i; panel.querySelectorAll('.wf-step').forEach(b => { b.classList.toggle('on', b === s); b.setAttribute('aria-selected', b === s); }); panel.querySelector('.wf-detail').innerHTML = `<b>${esc(c.wf[i][0])}</b><p>${esc(c.wf[i][2])}</p>`; return; }
    const g = e.target.closest('.g-thumb'); if (g) showLb(+g.dataset.g);
  });
  document.addEventListener('mouseover', e => { const s = e.target.closest?.('.wf-step'); if (s && !s.classList.contains('on') && matchMedia('(hover:hover)').matches) s.click(); });

  // ----- lightbox with zoom -----
  const img = lb.querySelector('img'), cap = lb.querySelector('figcaption'), cnt = lb.querySelector('.lb-count'), stage = lb.querySelector('.lb-stage');
  let zoomed = false;
  const setZoom = z => { zoomed = z; stage.classList.toggle('zoom', z); lb.querySelector('.lb-zoom').textContent = z ? '⊖ Fit' : '⊕ Zoom'; if (!z) img.style.transformOrigin = '50% 50%'; };
  const showLb = i => { const G = CASES[cur].gallery; gi = (i + G.length) % G.length; img.src = `${A}${G[gi][0]}.svg`; img.alt = G[gi][1]; cap.textContent = G[gi][2] + ' · Illustrative visual'; cnt.textContent = `${gi + 1} / ${G.length}`; setZoom(false); lb.hidden = false; lb.querySelector('.lb-close').focus(); };
  stage.addEventListener('click', e => { setZoom(!zoomed); if (zoomed) pos(e); });
  const pos = e => { const r = stage.getBoundingClientRect(); img.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`; };
  stage.addEventListener('pointermove', e => { if (zoomed) pos(e); });
  lb.addEventListener('click', e => {
    if (e.target.closest('.lb-close') || e.target === lb) lb.hidden = true;
    else if (e.target.closest('.lb-prev')) showLb(gi - 1); else if (e.target.closest('.lb-next')) showLb(gi + 1); else if (e.target.closest('.lb-zoom')) setZoom(!zoomed);
  });
  document.addEventListener('keydown', e => {
    if (!lb.hidden) { if (e.key === 'Escape') { lb.hidden = true; e.stopImmediatePropagation(); } else if (e.key === 'ArrowRight') showLb(gi + 1); else if (e.key === 'ArrowLeft') showLb(gi - 1); else if (e.key === '+' || e.key === ' ') { e.preventDefault(); setZoom(!zoomed); } return; }
    if (!view.hidden) { if (e.key === 'Escape') close(); if (e.key === 'Tab') { const f = [...view.querySelectorAll('button,a[href]')].filter(x => x.offsetParent); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && (document.activeElement === a || document.activeElement === panel)) { z.focus(); e.preventDefault(); } else if (!e.shiftKey && document.activeElement === z) { a.focus(); e.preventDefault(); } } }
  }, true);
})();
