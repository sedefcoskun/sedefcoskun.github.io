// EDIT HERE: Replace empty values with your public professional contact details.
// The website automatically hides links that are empty.
const PORTFOLIO = {
  email: "",
  github: "",
  linkedin: "",
  cv: "", // e.g. "assets/Sedef_Coskun_CV.pdf" (put the PDF there first)
  projects: [
    {
      id: "ecg-jepa",
      number: "01",
      title: "ECG-JEPA",
      subtitle: "Self-supervised ECG representation learning",
      type: "RESEARCH · UNIVERSITY OF TWENTE",
      status: "Research experiment",
      year: "2026",
      categories: ["ai"],
      aesthetic: "signal",
      description: "Explored representation learning from multi-lead ECG signals using a JEPA-style architecture and training experiments on an HPC cluster.",
      points: [
        "Prepared and tested multi-lead ECG data pipelines with patient-level dataset splits.",
        "Worked with PyTorch training, checkpoint/resume workflows, and HPC job execution.",
        "Investigated model variations and representation diagnostics for biosignal learning."
      ],
      tools: ["Python", "PyTorch", "ECG", "HPC / Slurm"],
      repo: "", // add public project URL if you have permission to share
      demo: ""
    },
    {
      id: "adhd-eeg",
      number: "02",
      title: "AI-Driven ADHD EEG Analysis",
      subtitle: "Research on neurophysiological subtypes",
      type: "TÜBİTAK 2209-A · ACCEPTED",
      status: "Research project",
      year: "2025–2026",
      categories: ["ai"],
      aesthetic: "brain",
      description: "An accepted undergraduate research project investigating EEG-derived features and machine learning for ADHD subtype discovery.",
      points: [
        "Defined a research pipeline for EEG cleaning, feature extraction, clustering, and classification.",
        "Planned analyses of frequency-domain, connectivity, and signal complexity features.",
        "Designed an evaluation strategy; results are not presented as completed findings."
      ],
      tools: ["EEG", "MNE", "Machine Learning", "Feature Engineering"],
      repo: "",
      demo: ""
    },
    {
      id: "musin-g",
      number: "03",
      title: "Music & Brain Activity",
      subtitle: "EEG-based music enjoyment prediction",
      type: "MACHINE LEARNING · COURSE PROJECT",
      status: "Course project",
      year: "2026",
      categories: ["ai"],
      aesthetic: "waves",
      description: "Built an experimental machine-learning workflow to explore how EEG features relate to music enjoyment ratings.",
      points: [
        "Preprocessed EEG recordings, created overlapping epochs, and extracted frequency-band features.",
        "Compared traditional ML models and deep-learning approaches for enjoyment classification.",
        "Used within-subject and cross-subject splits to examine generalization."
      ],
      tools: ["Python", "MNE", "scikit-learn", "XGBoost"],
      repo: "",
      demo: ""
    },
    {
      id: "malware-agent",
      number: "04",
      title: "Malware Analysis AI Agent",
      subtitle: "Evidence-based ATT&CK technique mapping",
      type: "CYBERSECURITY · CAPSTONE",
      status: "In progress · research/design",
      year: "2026",
      categories: ["security", "ai"],
      aesthetic: "grid",
      description: "A graduation capstone investigating how an evidence-aware AI agent can convert sandbox observations into structured threat intelligence and MITRE ATT&CK mappings.",
      points: [
        "Defined the project problem, system goals, and evaluation criteria.",
        "Reviewed literature on automated malware analysis, CTI extraction, and grounded technique mapping.",
        "Planned comparison against rule-based and non-retrieval baselines; implementation results pending."
      ],
      tools: ["Threat Intelligence", "MITRE ATT&CK", "LLMs", "RAG"],
      repo: "",
      demo: ""
    },
    {
      id: "fastapi",
      number: "05",
      title: "FastAPI Conversion API",
      subtitle: "A practical Python backend exercise",
      type: "SOFTWARE ENGINEERING · CASE PROJECT",
      status: "Technical case",
      year: "2026",
      categories: ["software"],
      aesthetic: "terminal",
      description: "Developed a Python API endpoint for conversion tasks, focusing on robust request handling and reusable application logic.",
      points: [
        "Implemented a FastAPI GET endpoint for conversion requests.",
        "Added caching and error handling for a more dependable API experience.",
        "Practiced clean endpoint design and backend implementation workflows."
      ],
      tools: ["Python", "FastAPI", "REST API", "Caching"],
      repo: "",
      demo: ""
    }
  ]
};
