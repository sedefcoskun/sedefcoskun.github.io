/* Bilingual, filterable portfolio. No build step or external JS libraries. */
(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const grid = $('#project-grid');
  const dialog = $('#project-dialog');
  const menu = $('#menu-toggle');
  const nav = $('#nav-links');
  const translations = {
    en: {
      skip: 'Skip to content', navAbout: 'About', navWork: 'Projects', navExperience: 'Experience', navSkills: 'Skills', navContact: 'Contact',
      heroEyebrow: 'COMPUTER ENGINEERING · PORTFOLIO', heroRole: 'Computer Engineering Student',
      heroDescription: "I'm a final-year Computer Engineering student with experience in software development, data analysis, machine learning, deep learning, and academic research.",
      viewProjects: 'View projects', aboutMeLink: 'About me', basedIn: 'BASED IN ISTANBUL, TÜRKİYE', openTo: 'OPEN TO OPPORTUNITIES',
      orbitLabel: 'PORTFOLIO · 2026', orbitTop: 'SOFTWARE & DATA', orbitBottom: 'ML / DL / RESEARCH',
      aboutKicker: 'ABOUT', aboutHeading: 'About me',
      aboutP1: "I'm a final-year Computer Engineering student at Biruni University, studying in English on a full merit scholarship. My background includes software development, data analysis, machine learning, deep learning, and research projects.",
      aboutP2: 'I completed a research internship at the University of Twente and an IT internship at Türkiye Finans. My projects range from biomedical signal analysis and cybersecurity to web applications and forecasting.',
      university: 'UNIVERSITY', degree: 'DEGREE', degreeValue: 'B.Sc. Computer Engineering (English)', graduation: 'EXPECTED GRADUATION',
      aboutNote: '100% merit scholarship · TEKNOFEST Community and BirUp management teams (2025)',
      workKicker: 'PROJECTS', workHeading: 'Projects', workDescription: 'Selected academic, research, and software development work.',
      filterAll: 'All projects', filterAi: 'AI / ML / Research', filterSoftware: 'Software', filterSecurity: 'Cybersecurity',
      experienceKicker: 'EXPERIENCE', experienceHeading: 'Experience', experienceDescription: 'Research, industry, training, and teaching experience.',
      expResearchLabel: 'RESEARCH INTERNSHIP', expTwenteDate: 'AUG–OCT 2026', expTwenteTitle: 'Computer Science Research Intern',
      expTwenteBody: 'Worked on ECG representation learning, biomedical data processing, and deep learning experiments in a research environment.',
      expBankLabel: 'IT INTERNSHIP', expBankDate: 'JUL–AUG 2026', expBankTitle: 'IT Intern', expBankOrg: 'Türkiye Finans · Data Centers & Operations',
      expBankBody: 'Gained exposure to enterprise IT operations, technical support processes, VDI, and virtualization technologies in banking.',
      expTrainingLabel: 'TECHNICAL TRAINING', expGoogleDate: 'DEC 2025–AUG 2026', expGoogleTitle: 'Data Science Trainee',
      expGoogleBody: 'Completed structured training and project work in Python, data analysis, machine learning, and AI.',
      expManagementLabel: 'MANAGEMENT INTERNSHIP', expClinicDate: 'OCT–DEC 2024', expClinicTitle: 'Management Intern',
      expClinicBody: 'Observed management processes and gained experience in communication, presentations, and organizational work.',
      expTeachingLabel: 'TEACHING', expTutorDate: 'OCT 2022–MAY 2023', expTutorTitle: 'Mathematics Tutor', expTutorOrg: 'Private Education Center',
      expTutorBody: 'Provided individual mathematics lessons at a private education center, supporting students with concepts and problem-solving.',
      skillsKicker: 'SKILLS', skillsHeading: 'Technical skills', skillsDescription: 'A focused selection of the tools I use most across projects.',
      skillsLabel1: '01 / PROGRAMMING', skillsLabel2: '02 / MACHINE LEARNING', skillsLabel3: '03 / DEVELOPMENT & DATA', skillsLanguagesLabel: 'LANGUAGES',
      skillsLabel4: '04 / DEVELOPMENT TOOLS', skillsLabel5: '05 / LANGUAGES',
      languageValues: 'Turkish (Native) · English (Advanced) · German (Beginner)',
      trainingIntro: 'Additional training & certifications:', trainingLink: 'LinkedIn profile ↗',
      contactKicker: 'CONTACT', contactHeading: 'Contact',
      contactDescription: 'For professional opportunities or project-related conversations, you can reach me by email or LinkedIn.',
      emailMe: 'Email me', backToTop: 'Back to top ↑', dialogSubheading: 'Project overview',
      projectsCount: n => `${String(n).padStart(2, '0')} ${n === 1 ? 'PROJECT' : 'PROJECTS'}`,
      viewDetails: 'View details ↗', ariaView: title => `View details for ${title}`, repository: 'GitHub repository ↗', demo: 'Live demo ↗',
      mailLabel: 'Email ↗', themeDark: 'Switch to dark theme', themeLight: 'Switch to light theme', menuLabel: 'Toggle navigation', closeLabel: 'Close project details'
    },
    tr: {
      skip: 'İçeriğe atla', navAbout: 'Hakkımda', navWork: 'Projeler', navExperience: 'Deneyim', navSkills: 'Yetkinlikler', navContact: 'İletişim',
      heroEyebrow: 'BİLGİSAYAR MÜHENDİSLİĞİ · PORTFOLYO', heroRole: 'Bilgisayar Mühendisliği Öğrencisi',
      heroDescription: 'Yazılım geliştirme, veri analizi, makine öğrenimi, derin öğrenme ve akademik araştırma alanlarında deneyim sahibi, son sınıf Bilgisayar Mühendisliği öğrencisiyim.',
      viewProjects: 'Projelerim', aboutMeLink: 'Hakkımda', basedIn: 'İSTANBUL, TÜRKİYE', openTo: 'İŞ FIRSATLARINA AÇIK',
      orbitLabel: 'PORTFOLYO · 2026', orbitTop: 'YAZILIM VE VERİ', orbitBottom: 'ML / DL / ARAŞTIRMA',
      aboutKicker: 'HAKKIMDA', aboutHeading: 'Hakkımda',
      aboutP1: 'Biruni Üniversitesi İngilizce Bilgisayar Mühendisliği bölümünde %100 başarı bursuyla son sınıfta okuyorum. Yazılım geliştirme, veri analizi, makine öğrenimi, derin öğrenme ve araştırma projelerinde deneyim sahibiyim.',
      aboutP2: 'Twente Üniversitesinde araştırma, Türkiye Finansta ise bilişim teknolojileri stajı yaptım. Projelerim biyomedikal sinyal analizinden siber güvenliğe, web uygulamalarından tahmin modellerine uzanıyor.',
      university: 'ÜNİVERSİTE', degree: 'BÖLÜM', degreeValue: 'Bilgisayar Mühendisliği (İngilizce)', graduation: 'TAHMİNİ MEZUNİYET',
      aboutNote: '%100 başarı bursu · TEKNOFEST Topluluğu ve BirUp yönetim ekipleri (2025)',
      workKicker: 'PROJELER', workHeading: 'Projeler', workDescription: 'Akademik, araştırma ve yazılım geliştirme çalışmalarından seçmeler.',
      filterAll: 'Tüm projeler', filterAi: 'YZ / ML / Araştırma', filterSoftware: 'Yazılım', filterSecurity: 'Siber Güvenlik',
      experienceKicker: 'DENEYİM', experienceHeading: 'Deneyim', experienceDescription: 'Araştırma, sektör, eğitim ve öğretim deneyimlerim.',
      expResearchLabel: 'ARAŞTIRMA STAJI', expTwenteDate: 'AĞU–EKİ 2026', expTwenteTitle: 'Bilgisayar Bilimleri Araştırma Stajyeri',
      expTwenteBody: 'Araştırma ortamında EKG temsil öğrenimi, biyomedikal veri işleme ve derin öğrenme deneyleri üzerinde çalıştım.',
      expBankLabel: 'BT STAJI', expBankDate: 'TEM–AĞU 2026', expBankTitle: 'BT Stajyeri', expBankOrg: 'Türkiye Finans · Veri Merkezleri ve Operasyon',
      expBankBody: 'Bankacılıkta kurumsal BT operasyonları, teknik destek süreçleri, VDI ve sanallaştırma teknolojilerini tanıma fırsatı buldum.',
      expTrainingLabel: 'TEKNİK EĞİTİM', expGoogleDate: 'ARA 2025–AĞU 2026', expGoogleTitle: 'Veri Bilimi Katılımcısı',
      expGoogleBody: 'Python, veri analizi, makine öğrenimi ve yapay zekâ alanlarında yapılandırılmış eğitim ve proje çalışmaları tamamladım.',
      expManagementLabel: 'YÖNETİM STAJI', expClinicDate: 'EKİ–ARA 2024', expClinicTitle: 'Yönetim Stajyeri',
      expClinicBody: 'Yönetim süreçlerini gözlemledim; iletişim, sunum ve organizasyon konularında deneyim kazandım.',
      expTeachingLabel: 'ÖĞRETMENLİK', expTutorDate: 'EKİ 2022–MAY 2023', expTutorTitle: 'Matematik Özel Ders Öğretmeni', expTutorOrg: 'Özel Eğitim Kurumu',
      expTutorBody: 'Bir dershanede birebir matematik dersleri vererek öğrencilerin konu öğrenimini ve problem çözme becerilerini destekledim.',
      skillsKicker: 'YETKİNLİKLER', skillsHeading: 'Teknik yetkinlikler', skillsDescription: 'Projelerimde en sık kullandığım temel teknolojiler.',
      skillsLabel1: '01 / PROGRAMLAMA', skillsLabel2: '02 / MAKİNE ÖĞRENİMİ', skillsLabel3: '03 / GELİŞTİRME VE VERİ', skillsLanguagesLabel: 'DİLLER',
      skillsLabel4: '04 / GELİŞTİRME ARAÇLARI', skillsLabel5: '05 / DİLLER',
      languageValues: 'Türkçe (Ana dil) · İngilizce (İleri) · Almanca (Başlangıç)',
      trainingIntro: 'Diğer eğitimler ve sertifikalar:', trainingLink: 'LinkedIn profili ↗',
      contactKicker: 'İLETİŞİM', contactHeading: 'İletişim',
      contactDescription: 'İş fırsatları veya projelerle ilgili görüşmeler için e-posta veya LinkedIn üzerinden iletişime geçebilirsiniz.',
      emailMe: 'E-posta gönder', backToTop: 'Başa dön ↑', dialogSubheading: 'Projeye genel bakış',
      projectsCount: n => `${String(n).padStart(2, '0')} PROJE`,
      viewDetails: 'Detaylar ↗', ariaView: title => `${title} için detayları gör`, repository: 'GitHub deposu ↗', demo: 'Canlı demo ↗',
      mailLabel: 'E-posta ↗', themeDark: 'Koyu temaya geç', themeLight: 'Açık temaya geç', menuLabel: 'Menüyü aç/kapat', closeLabel: 'Proje detaylarını kapat'
    }
  };

  function create(tag, className, value) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined) el.textContent = value;
    return el;
  }
  function urlAllowed(url) {
    try { return ['https:', 'http:'].includes(new URL(url).protocol); }
    catch { return false; }
  }
  function readPref(key, fallback) {
    try { return localStorage.getItem(key) || fallback; }
    catch { return fallback; }
  }
  function storePref(key, value) {
    try { localStorage.setItem(key, value); }
    catch { /* file:// or private mode may block storage; UI still works */ }
  }
  let language = readPref('sedef-portfolio-language', 'en') === 'tr' ? 'tr' : 'en';
  let activeFilter = 'all';
  let openProject = null;
  const t = key => translations[language][key];
  const localized = field => typeof field === 'string' ? field : field[language];

  function renderProjects() {
    const selected = PORTFOLIO.projects.filter(p => activeFilter === 'all' || p.categories.includes(activeFilter));
    grid.replaceChildren();
    $('#work-counter').textContent = t('projectsCount')(selected.length);
    selected.forEach(project => {
      const card = create('article', 'project-card');
      const art = create('div', `project-art art-${project.aesthetic}`);
      art.setAttribute('aria-hidden', 'true');
      art.append(create('span', 'art-number', project.number));
      art.append(create('span', 'art-corner', project.year));
      art.append(create('span', 'art-title', project.artLabel));
      const body = create('div', 'project-body');
      const meta = create('div', 'project-meta');
      meta.append(create('span', '', localized(project.type)));
      body.append(meta, create('h3', '', localized(project.title)), create('p', 'project-subtitle', localized(project.subtitle)));
      const tags = create('div', 'project-tags');
      project.tools.slice(0, 3).forEach(tech => tags.append(create('span', '', tech)));
      body.append(tags);
      const footer = create('div', 'project-footer');
      footer.append(create('span', 'project-status', localized(project.status)));
      const button = create('button', 'details-btn', t('viewDetails'));
      button.type = 'button';
      button.setAttribute('aria-label', t('ariaView')(localized(project.title)));
      button.addEventListener('click', () => showDetails(project));
      footer.append(button);
      body.append(footer);
      card.append(art, body);
      grid.append(card);
    });
  }
  function showDetails(project) {
    openProject = project;
    $('#dialog-kicker').textContent = `${localized(project.type)} · ${project.year}`;
    $('#dialog-title').textContent = localized(project.title);
    $('#dialog-description').textContent = localized(project.description);
    const points = $('#dialog-points');
    points.replaceChildren();
    localized(project.points).forEach(line => points.append(create('li', '', line)));
    const tags = $('#dialog-tags');
    tags.replaceChildren();
    project.tools.forEach(tech => tags.append(create('span', '', tech)));
    const bottom = $('#dialog-bottom');
    bottom.replaceChildren();
    [['repo', 'repository'], ['demo', 'demo']].forEach(([key, label]) => {
      if (urlAllowed(project[key])) {
        const link = create('a', '', t(label));
        link.href = project[key];
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        bottom.append(link);
      }
    });
    if (!dialog.open) dialog.showModal();
  }
  function renderSocials() {
    const socials = $('#social-links');
    socials.replaceChildren();
    [['github', 'GitHub ↗'], ['linkedin', 'LinkedIn ↗']].forEach(([key, label]) => {
      if (urlAllowed(PORTFOLIO[key])) {
        const link = create('a', '', label);
        link.href = PORTFOLIO[key];
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        socials.append(link);
      }
    });
  }
  function renderCv() {
    if (!PORTFOLIO.cv) return;
    const cv = PORTFOLIO.cv;
    if (!(cv.startsWith('assets/') || urlAllowed(cv))) return;
    const button = create('a', 'button button-secondary', language === 'tr' ? 'CV’yi görüntüle ↗' : 'View CV ↗');
    button.href = cv;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.dataset.cv = 'true';
    $('.hero-actions').append(button);
  }
  function setLanguage(nextLanguage) {
    language = nextLanguage === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = language;
    $$('[data-i18n]').forEach(node => {
      if (translations[language][node.dataset.i18n] !== undefined) node.textContent = t(node.dataset.i18n);
    });
    $$('[data-lang]').forEach(button => {
      const selected = button.dataset.lang === language;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    $('#menu-toggle').setAttribute('aria-label', t('menuLabel'));
    $('#dialog-close').setAttribute('aria-label', t('closeLabel'));
    $('#theme-toggle').setAttribute('aria-label', t(document.documentElement.dataset.theme === 'light' ? 'themeDark' : 'themeLight'));
    storePref('sedef-portfolio-language', language);
    renderProjects();
    renderSocials();
    $$('[data-cv]').forEach(node => node.remove());
    renderCv();
    if (openProject && dialog.open) showDetails(openProject);
  }
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    $$('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects();
  }));
  $$('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
  $('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { openProject = null; });
  const themeButton = $('#theme-toggle');
  document.documentElement.dataset.theme = readPref('sedef-portfolio-theme', 'dark') === 'light' ? 'light' : 'dark';
  const setThemeIcon = () => {
    themeButton.querySelector('.theme-icon').textContent = document.documentElement.dataset.theme === 'light' ? '☀' : '☾';
    themeButton.setAttribute('aria-label', t(document.documentElement.dataset.theme === 'light' ? 'themeDark' : 'themeLight'));
  };
  themeButton.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme !== 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    storePref('sedef-portfolio-theme', document.documentElement.dataset.theme);
    setThemeIcon();
  });
  setThemeIcon();
  setLanguage(language);
})();
