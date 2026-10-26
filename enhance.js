(() => {
  const EMAIL = 'johnsonprem2002@gmail.com';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

  // ---------- Project details (shown in the modal) ----------
  const D = {
    inline:{tools:['SolidWorks'],pts:['Multi-wheel chassis intended to hold position inside a pipe','Camera assembly for visual inspection of cracks, corrosion and blockages','Built as a physical prototype (shown) alongside the CAD design'],more:'Final-year B.E. project.'},
    radial:{pts:['Piston, connecting rod and crankshaft relationships','Four-cylinder crank layout','Assembly-level modelling'],more:'A focused study of how reciprocating motion becomes rotation.'},
    engineassembly:{pts:['Cylinder banks, intake and turbocharger components','Assembly arrangement of a complex multi-part model','Rendered for presentation'],more:'Shows component packaging in a dense assembly.'},
    radial2:{tools:['SolidWorks'],pts:['Five-cylinder radial arrangement around a central crankcase','Drawing sheet with a bill of materials','Title block and part numbering'],more:'Documentation-focused: the model is communicated as a drawing.'},
    joint:{tools:['SolidWorks','Ansys'],pts:['Fork, centre block and collar parts built as an assembly','Mates, fillets and keyed shaft details','Stress contour study in Ansys (see gallery)'],more:'Connects modelling with simulation fundamentals.',gallery:['universal-joint','universal-joint-ansys']},
    vice:{tools:['SolidWorks'],pts:['Assembly and detail views on one sheet','Parts list for the clamping mechanism','Screw-driven jaw motion'],more:'Practises drawing standards and clear technical communication.'},
    scissor:{pts:['Linkage geometry and pivot placement','Lead-screw style actuation','Platform motion study'],more:'A mechanism study where geometry drives the lift behaviour.'},
    fan:{tools:['AutoCAD'],pts:['Blade and housing geometry','Mounting features','Cable routing detail'],more:'A compact product-style model with practical features.'},
    propeller:{tools:['AutoCAD'],pts:['Six-blade geometry with twisted blade form','Hub and blade transition','Modelled as a rotating component'],more:'Focuses on curvature and blade-to-hub blending.'},
    helmet:{tools:['SolidWorks'],pts:['Shell geometry and visor integration','Surface transitions','Rendered and shown inside the CAD environment'],more:'A surface-modelling exercise on a familiar product.',gallery:['helmet-render','helmet-cad-screen','helmet-airflow']},
    helmetflow:{tools:['SolidWorks'],pts:['Flow trajectories coloured by velocity','Interaction between airflow and helmet surface','Simulation set up inside SolidWorks'],more:'Extends the helmet model into a basic flow study.'},
    lamp:{tools:['Fusion 360'],pts:['Twisted frame form','Lightweight lattice structure','Rendered in Fusion 360'],more:'A sculptural product concept.'},
    watch:{pts:['Case, dial and bezel','Strap layout','Consumer product study'],more:'Product-scale detailing in a small form factor.'},
    saw:{tools:['Fusion 360'],pts:['Ergonomic housing','Grip geometry and part split','Surface continuity'],more:'A handheld power-tool casing concept.'},
    jeep:{pts:['Body, wheel and accessory detail','Exterior form study','Rendered presentation'],more:'A vehicle exterior modelling exercise.'},
    bus:{tools:['AutoCAD'],pts:['Front, rear, side and plan views','Multi-view layout on one sheet','2D drafting accuracy'],more:'Shows orthographic projection and sheet organisation.'}
  };
  const pid = n => n.replace(/^assets\/|\.webp$/g,'');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  window.renderProject = (id, {title, type, image, lead}) => {
    const d = D[id] || {pts:[]}, tags = d.tools || ['CAD MODELLING'];
    const vis = [...document.querySelectorAll('.project-card:not([hidden])')].map(c => c.dataset.project);
    const i = vis.indexOf(id), prev = vis[(i - 1 + vis.length) % vis.length], next = vis[(i + 1) % vis.length];
    const g = d.gallery ? `<div class="modal-gallery">${d.gallery.map(n => `<button type="button" data-img="assets/${n}.webp" class="${'assets/'+n+'.webp'===image?'on':''}" aria-label="Show image ${esc(n)}"><img src="assets/${n}.webp" alt=""></button>`).join('')}</div>` : '';
    return `<div class="eyebrow">${esc(type)}</div><h2 id="modal-title">${esc(title)}</h2><p class="modal-lead">${esc(lead)}</p><img class="modal-image" id="modal-img" src="${esc(image)}" alt="${esc(title)}">${g}<div class="modal-tags">${tags.map(t => `<span>${esc(t.toUpperCase())}</span>`).join('')}</div><h3>What it shows</h3><ul class="modal-specs">${d.pts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>${d.more ? `<p>${esc(d.more)}</p>` : ''}<a class="button button-primary" href="mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio enquiry: ' + title)}">Discuss this project <span>↗</span></a><div class="modal-nav"><button type="button" data-go="${prev}">← PREVIOUS</button><button type="button" data-go="${next}">NEXT →</button></div>`;
  };
  const modal = document.querySelector('#project-modal');
  modal?.addEventListener('click', e => {
    const t = e.target.closest('[data-img],[data-go]'); if (!t) return;
    if (t.dataset.img) { document.querySelector('#modal-img').src = t.dataset.img; modal.querySelectorAll('.modal-gallery button').forEach(b => b.classList.toggle('on', b === t)); }
    else document.querySelector(`[data-open="${t.dataset.go}"]`)?.click();
  });
  // keyboard: arrows to navigate, Tab trapped inside the open modal
  document.addEventListener('keydown', e => {
    if (!modal?.classList.contains('open')) return;
    if (e.key === 'ArrowRight') modal.querySelector('[data-go]:last-child')?.click();
    if (e.key === 'ArrowLeft') modal.querySelector('[data-go]')?.click();
    if (e.key === 'Tab') {
      const f = [...modal.querySelectorAll('button,a[href]')].filter(x => x.offsetParent);
      if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { z.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === z) { a.focus(); e.preventDefault(); }
    }
  });

  // ---------- Cursor-reactive image animation ----------
  if (!reduce && fine) {
    document.querySelectorAll('.project-image,.about-image').forEach(el => {
      el.classList.add('fx');
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.classList.add('hot'); el.classList.remove('leaving');
        el.style.setProperty('--ry', `${(x - .5) * 10}deg`); el.style.setProperty('--rx', `${(.5 - y) * 8}deg`);
        el.style.setProperty('--px', `${(.5 - x) * 26}px`); el.style.setProperty('--py', `${(.5 - y) * 18}px`);
        el.style.setProperty('--mx', `${x * 100}%`); el.style.setProperty('--my', `${y * 100}%`);
      });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('hot'); el.classList.add('leaving');
        ['--rx','--ry','--px','--py'].forEach(p => el.style.setProperty(p, p[1] === 'r' ? '0deg' : '0px'));
      });
    });
    // magnetic buttons
    document.querySelectorAll('.button-primary,.nav-contact').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .15}px,${(e.clientY - r.top - r.height / 2) * .25}px)`; });
      b.addEventListener('pointerleave', () => b.style.transform = '');
    });
    // custom cursor
    const c = document.querySelector('.cursor'); let cx = 0, cy = 0, tx = 0, ty = 0, run = false;
    const loop = () => { cx += (tx - cx) * .2; cy += (ty - cy) * .2; c.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); };
    addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return; tx = e.clientX; ty = e.clientY; c.classList.add('on');
      if (!run) { run = true; cx = tx; cy = ty; loop(); }
      const t = e.target.closest?.('.project-image,.hero-card');
      c.classList.toggle('view', !!e.target.closest?.('.project-image'));
      c.classList.toggle('link', !t && !!e.target.closest?.('a,button,input,textarea'));
    }, { passive: true });
    document.addEventListener('pointerleave', () => c.classList.remove('on'));
  }

  // ---------- Stat counters ----------
  const nums = [...document.querySelectorAll('[data-count]')];
  const count = el => { const n = +el.dataset.count; if (reduce) { el.textContent = n; return; } const t0 = performance.now(); const step = t => { const p = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
  const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { count(e.target); cio.unobserve(e.target); } }), { threshold: .6 });
  nums.forEach(n => cio.observe(n));

  // ---------- Contact form (opens the visitor's email app) ----------
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault(); const f = new FormData(form);
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-note').textContent = 'Thanks! If nothing opened, email me directly at ' + EMAIL;
  });

  // ---------- Active nav link on scroll ----------
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.style.color = l.getAttribute('href') === '#' + e.target.id ? 'var(--mint)' : ''); }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const s = document.querySelector(l.getAttribute('href')); if (s) so.observe(s); });
})();
