/* No framework or build tools needed. Update project content in data.js. */
(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const grid = $('#project-grid');
  const dialog = $('#project-dialog');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const menu = $('#menu-toggle');
  const nav = $('#nav-links');

  function create(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  // Only include safe, explicit https/http URLs in publicly exposed project links.
  function validLink(url) {
    try { return ['https:', 'http:'].includes(new URL(url).protocol); }
    catch { return false; }
  }
  function renderProjects(filter = 'all') {
    const selected = PORTFOLIO.projects.filter(p => filter === 'all' || p.categories.includes(filter));
    grid.replaceChildren();
    $('#work-counter').textContent = `${String(selected.length).padStart(2, '0')} PROJECT${selected.length === 1 ? '' : 'S'}`;
    selected.forEach((project) => {
      const card = create('article', 'project-card');
      const art = create('div', `project-art art-${project.aesthetic}`);
      art.append(create('span', 'art-number', project.number));
      art.append(create('span', 'art-corner', project.year));
      art.append(create('span', 'art-title', project.title));
      const body = create('div', 'project-body');
      const meta = create('div', 'project-meta');
      meta.append(create('span', '', project.type));
      body.append(meta, create('h3', '', project.title), create('p', 'project-subtitle', project.subtitle));
      const tags = create('div', 'project-tags');
      project.tools.slice(0, 3).forEach(t => tags.append(create('span', '', t)));
      body.append(tags);
      const footer = create('div', 'project-footer');
      footer.append(create('span', 'project-status', project.status));
      const btn = create('button', 'details-btn', 'View details ↗');
      btn.type = 'button'; btn.setAttribute('aria-label', `View details for ${project.title}`);
      btn.addEventListener('click', () => showDetails(project));
      footer.append(btn);body.append(footer);card.append(art, body);grid.append(card);
    });
  }
  function showDetails(p) {
    $('#dialog-kicker').textContent = `${p.type} · ${p.year}`;
    $('#dialog-title').textContent = p.title;
    $('#dialog-description').textContent = p.description;
    const points = $('#dialog-points'); points.replaceChildren();
    p.points.forEach(s => points.append(create('li', '', s)));
    const tags = $('#dialog-tags'); tags.replaceChildren();
    p.tools.forEach(s => tags.append(create('span', '', s)));
    const bottom = $('#dialog-bottom'); bottom.replaceChildren();
    [['repo', 'GitHub repository ↗'], ['demo', 'Live demo ↗']].forEach(([key, label]) => {
      if (validLink(p[key])) {
        const link = create('a', '', label);
        link.href = p[key]; link.target = '_blank'; link.rel = 'noopener noreferrer'; bottom.append(link);
      }
    });
    dialog.showModal();
  }
  $('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  filters.forEach(f => f.addEventListener('click', () => {
    filters.forEach(b => {const active = b === f;b.classList.toggle('active', active);b.setAttribute('aria-pressed', String(active));});
    renderProjects(f.dataset.filter);
  }));
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open');menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded', 'false');}));
  const themeBtn = $('#theme-toggle');
  themeBtn.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme !== 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    themeBtn.querySelector('.theme-icon').textContent = light ? '☀' : '☾';
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  });
  const socials = $('#social-links');
  if (PORTFOLIO.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(PORTFOLIO.email)) {
    const a = create('a', '', 'Email ↗'); a.href = `mailto:${PORTFOLIO.email}`;socials.append(a);
  }
  [['github', 'GitHub ↗'], ['linkedin', 'LinkedIn ↗']].forEach(([k, label]) => {
    if (validLink(PORTFOLIO[k])) {
      const a = create('a', '', label);a.href = PORTFOLIO[k];a.target = '_blank';a.rel = 'noopener noreferrer';socials.append(a);
    }
  });
  if (PORTFOLIO.cv && PORTFOLIO.cv.trim()) {
    const a = create('a', 'button button-secondary', 'View CV ↗');a.href = PORTFOLIO.cv;
    a.target = '_blank';a.rel = 'noopener noreferrer';
    document.querySelector('.hero-actions').append(a);
  }
  renderProjects();
})();
