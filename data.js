/* Content for the bilingual portfolio. Update project descriptions here. */
const PORTFOLIO = {
  email: 'sedefcoskuun6@gmail.com',
  github: 'https://github.com/sedefcoskun',
  linkedin: 'https://www.linkedin.com/in/sedef-coskun',
  cv: '', // When the CV PDF is ready: 'assets/Sedef_Coskun_CV.pdf'
  projects: [
    {
      id: 'ecg-jepa', number: '01', year: '2026', aesthetic: 'signal', artLabel: 'ECG · RESEARCH',
      categories: ['ai'],
      title: { en: 'ECG-JEPA — Self-Supervised ECG Representation Learning', tr: 'ECG-JEPA — Öz Denetimli EKG Temsil Öğrenimi' },
      subtitle: { en: 'University of Twente · Research Internship', tr: 'Twente Üniversitesi · Araştırma Stajı' },
      type: { en: 'RESEARCH · UNIVERSITY OF TWENTE', tr: 'ARAŞTIRMA · TWENTE ÜNİVERSİTESİ' },
      status: { en: 'Research experience', tr: 'Araştırma deneyimi' },
      description: {
        en: 'Research on learning representations from multi-lead ECG recordings, carried out during my internship with the Biomedical Signals & Systems group at the University of Twente.',
        tr: 'Twente Üniversitesi Biyomedikal Sinyaller ve Sistemler grubundaki stajım kapsamında, çok kanallı EKG kayıtlarından temsil öğrenimi üzerine yürütülen araştırma.'
      },
      points: {
        en: ['Worked on ECG data preparation, model experiments, and evaluation.', 'Gained practical experience with deep learning workflows and research computing.'],
        tr: ['EKG verilerinin hazırlanması, model deneyleri ve değerlendirme üzerinde çalıştım.', 'Derin öğrenme süreçleri ve araştırma amaçlı hesaplama altyapılarında deneyim kazandım.']
      },
      tools: ['Python', 'PyTorch', 'ECG', 'HPC / Slurm'], repo: '', demo: ''
    },
    {
      id: 'adhd-eeg', number: '02', year: '2025–', aesthetic: 'brain', artLabel: 'EEG · RESEARCH',
      categories: ['ai'],
      title: {
        en: 'AI-Based Multimodal EEG Feature Analysis for ADHD Neurophysiological Subtype Detection and Personalized Treatment',
        tr: 'Yapay Zekâ Destekli Çok Modlu EEG Öznitelik Analizi ile DEHB Nörofizyolojik Alt Tiplerinin Tespiti ve Kişiselleştirilmiş Tedavi'
      },
      subtitle: { en: 'TÜBİTAK 2209-A · Accepted Undergraduate Research Project', tr: 'TÜBİTAK 2209-A · Kabul Edilen Öğrenci Araştırma Projesi' },
      type: { en: 'TÜBİTAK 2209-A · ACCEPTED', tr: 'TÜBİTAK 2209-A · KABUL EDİLDİ' },
      status: { en: 'Research project', tr: 'Araştırma projesi' },
      description: {
        en: 'An accepted TÜBİTAK 2209-A project investigating how EEG-derived features and machine learning may support the identification of neurophysiological ADHD subtypes.',
        tr: 'EEG öznitelikleri ve makine öğrenimi yöntemleriyle DEHB’nin nörofizyolojik alt tiplerinin belirlenmesini araştıran, TÜBİTAK 2209-A kapsamında kabul edilmiş bir proje.'
      },
      points: {
        en: ['Developed the research approach and reviewed related scientific literature.', 'Defined the data strategy and planned model evaluation; final research outcomes are not claimed here.'],
        tr: ['Araştırma yaklaşımını oluşturdum ve ilgili bilimsel literatürü inceledim.', 'Veri stratejisini ve değerlendirme planını belirledim; henüz tamamlanmamış sonuçları elde edilmiş gibi sunmuyorum.']
      },
      tools: ['Python', 'MNE-Python', 'EEG', 'Machine Learning'], repo: '', demo: ''
    },
    {
      id: 'malware-agent', number: '03', year: '2026–', aesthetic: 'grid', artLabel: 'SECURITY · AI',
      categories: ['security', 'ai'],
      title: {
        en: 'AI Agent for Automated Malware Analysis, Threat Classification, and MITRE ATT&CK Mapping',
        tr: 'Otomatik Zararlı Yazılım Analizi, Tehdit Sınıflandırması ve MITRE ATT&CK Eşlemesi için Yapay Zekâ Ajanı'
      },
      subtitle: { en: 'Graduation Project · In Progress', tr: 'Bitirme Projesi · Devam Ediyor' },
      type: { en: 'GRADUATION PROJECT · CYBERSECURITY', tr: 'BİTİRME PROJESİ · SİBER GÜVENLİK' },
      status: { en: 'In progress', tr: 'Devam ediyor' },
      description: {
        en: 'An ongoing graduation project exploring AI-assisted malware behavior analysis, threat classification, and evidence-supported mapping to MITRE ATT&CK.',
        tr: 'Zararlı yazılım davranışlarının yapay zekâ destekli analizi, tehdit sınıflandırması ve kanıta dayalı MITRE ATT&CK eşlemesi üzerine devam eden bitirme projesi.'
      },
      points: {
        en: ['Prepared the problem definition and research scope.', 'Reviewing related work and evaluating approaches to reliable threat intelligence.'],
        tr: ['Problem tanımını ve araştırma kapsamını hazırladım.', 'İlgili çalışmaları inceliyor ve güvenilir tehdit istihbaratı yaklaşımlarını değerlendiriyorum.']
      },
      tools: ['Cybersecurity', 'Threat Intelligence', 'MITRE ATT&CK', 'AI'], repo: '', demo: ''
    },
    {
      id: 'electricity-forecasting', number: '04', year: '2026–', aesthetic: 'energy', artLabel: 'ENERGY · DATA',
      categories: ['ai', 'software'],
      title: {
        en: 'Short-Term Regional Electricity Load Forecasting and Decision-Support Dashboard Using Weather-Enriched Machine Learning',
        tr: 'Hava Durumu Verileriyle Desteklenen Makine Öğrenimi Kullanarak Kısa Vadeli Bölgesel Elektrik Yükü Tahmini ve Karar Destek Paneli'
      },
      subtitle: { en: 'Computer Project I · Course Project · In Progress', tr: 'Computer Project I · Ders Projesi · Devam Ediyor' },
      type: { en: 'COURSE PROJECT · TIME SERIES', tr: 'DERS PROJESİ · ZAMAN SERİLERİ' },
      status: { en: 'In progress', tr: 'Devam ediyor' },
      description: {
        en: 'An ongoing project investigating short-term electricity demand forecasting using historical consumption and weather-related information, with a planned visualization dashboard.',
        tr: 'Geçmiş tüketim ve hava durumu verilerinden yararlanarak kısa vadeli elektrik talebi tahminini inceleyen, görselleştirme paneli planlanan devam eden bir proje.'
      },
      points: {
        en: ['Completed initial data preparation, exploratory analysis, and baseline forecasting.', 'Further model comparisons, regional data verification, and the dashboard remain planned.'],
        tr: ['İlk veri hazırlama, keşifsel analiz ve temel tahmin modelini tamamladım.', 'Diğer modellerin karşılaştırılması, bölgesel veri doğrulaması ve panel sonraki aşamalar arasında.']
      },
      tools: ['Python', 'Time Series', 'Machine Learning', 'Streamlit (planned)'], repo: '', demo: ''
    },
    {
      id: 'musin-g', number: '05', year: '2026', aesthetic: 'waves', artLabel: 'EEG · DATA',
      categories: ['ai'],
      title: { en: 'EEG-Based Music Enjoyment Classification', tr: 'EEG Tabanlı Müzik Beğenisi Sınıflandırması' },
      subtitle: { en: 'Machine Learning · Course Project', tr: 'Makine Öğrenimi · Ders Projesi' },
      type: { en: 'COURSE PROJECT · MACHINE LEARNING', tr: 'DERS PROJESİ · MAKİNE ÖĞRENİMİ' },
      status: { en: 'Completed project', tr: 'Tamamlanan proje' },
      description: {
        en: 'A machine learning project examining the relationship between EEG recordings and music enjoyment through signal analysis and predictive modeling.',
        tr: 'EEG kayıtları ile müzik beğenisi arasındaki ilişkiyi sinyal analizi ve tahmin modelleriyle inceleyen makine öğrenimi projesi.'
      },
      points: {
        en: ['Prepared EEG signals and extracted relevant features.', 'Compared machine learning and deep learning approaches for classification.'],
        tr: ['EEG sinyallerini hazırladım ve ilgili öznitelikleri çıkardım.', 'Sınıflandırma için makine öğrenimi ve derin öğrenme yaklaşımlarını karşılaştırdım.']
      },
      tools: ['Python', 'MNE-Python', 'scikit-learn', 'Deep Learning'], repo: '', demo: ''
    },
    {
      id: 'smart-library', number: '06', year: '2026', aesthetic: 'terminal', artLabel: 'WEB · SOFTWARE',
      categories: ['software'],
      title: { en: 'Smart Library Seat Management System', tr: 'Akıllı Kütüphane Koltuk Yönetim Sistemi' },
      subtitle: { en: 'Full-Stack Web Development', tr: 'Full-Stack Web Geliştirme' },
      type: { en: 'SOFTWARE DEVELOPMENT · FULL-STACK', tr: 'YAZILIM GELİŞTİRME · FULL-STACK' },
      status: { en: 'Completed project', tr: 'Tamamlanan proje' },
      description: {
        en: 'A full-stack web application for managing library seat availability, check-ins, user sessions, and occupancy monitoring.',
        tr: 'Kütüphane koltuklarının kullanılabilirliğini, giriş doğrulamayı, kullanıcı oturumlarını ve doluluk durumunu yönetmeye yönelik full-stack web uygulaması.'
      },
      points: {
        en: ['Developed application features and the client–server structure.', 'Implemented seat and occupancy views supported by APIs.'],
        tr: ['Uygulama özelliklerini ve istemci–sunucu yapısını geliştirdim.', 'API destekli koltuk ve doluluk görüntüleme özellikleri uyguladım.']
      },
      tools: ['JavaScript', 'Node.js', 'Express.js', 'Chart.js'], repo: '', demo: ''
    }
  ]
};
