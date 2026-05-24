/* builds.js — AI Builds card data and DOM renderer */

const builds = [
  {
    icon: '📅',
    title: 'Aura Pro v3',
    type: 'React App',
    desc: 'Weekly scheduling app built in React. Mobile-first interface with NSS-aware scheduling logic — blocks recovery-only time when nervous system state drops below 6. In real-world daily testing.',
    stack: ['React', 'Firestore', 'Mobile-First', 'NSS Logic'],
    status: 'Live Testing',
    statusColor: 'teal',
    accent: '#00F5C4',
  },
  {
    icon: '🏋️',
    title: 'Exercise Library',
    type: 'React + Firebase',
    desc: 'Mobile-first exercise database built on React + Firebase. Designed for NASM OPT Model programming — filterable by phase, muscle group, movement pattern. Built for client delivery.',
    stack: ['React', 'Firebase', 'Firestore', 'OPT Model'],
    status: 'In Development',
    statusColor: 'amber',
    accent: '#FFB547',
  },
  {
    icon: '📊',
    title: 'OPT Client Tracker',
    type: 'Prototype',
    desc: 'Client tracking prototype aligned to the NASM OPT Model periodization phases. Tracks progressive overload, phase transitions, and session logs. Built for TrainSmart coaching operations.',
    stack: ['Firestore', 'React', 'NASM OPT', 'Coaching'],
    status: 'Prototype',
    statusColor: 'amber',
    accent: '#FFB547',
  },
  {
    icon: '🎙️',
    title: 'NotebookLM Learning Library',
    type: 'AI Workflow',
    desc: '16+ curated notebooks across certification material, performance psychology, business design, and holistic health. Each generates podcast-format audio for passive consumption during valet shifts.',
    stack: ['NotebookLM', 'Audio Learning', 'NASM-CNC', 'Obsidian'],
    status: 'Active Daily Use',
    statusColor: 'teal',
    accent: '#A78BFA',
  },
  {
    icon: '🤖',
    title: 'Gemini Coaching Gems',
    type: 'Custom AI Roles',
    desc: 'Three distinct Gemini Gems built for specialized coaching roles: Tony (Tony Robbins methodology), Elara (evidence-based performance coach), Elora (somatic/emotional coach). Each has a custom system prompt trained on curated sources.',
    stack: ['Gemini', 'Prompt Engineering', 'Google AI Studio', 'Custom Roles'],
    status: 'Active',
    statusColor: 'teal',
    accent: '#4285F4',
  },
  {
    icon: '🧠',
    title: 'Multi-AI Learning OS',
    type: 'Orchestrated Workflow',
    desc: 'Five-platform workflow for certification prep while working full-time: NotebookLM for passive audio → Claude for terminology flashcards → DeepSeek for nutrition depth → Gemini Tony for mindset → NSS protocol for readiness gating. Documented as Playbook Cards in Obsidian.',
    stack: ['Claude', 'NotebookLM', 'DeepSeek', 'Gemini', 'Obsidian'],
    status: 'Core System',
    statusColor: 'teal',
    accent: '#00F5C4',
  },
  {
    icon: '⚡',
    title: 'AI System Prompts Library',
    type: 'Prompt Engineering',
    desc: 'Custom system prompts engineered for Google AI Studio, Claude Projects, and Gemini Gems. Role-specific instructions that define behavior, tone, knowledge scope, and output format for each AI in the stack.',
    stack: ['Google AI Studio', 'Claude Projects', 'System Design', 'Prompt Eng.'],
    status: 'Ongoing',
    statusColor: 'blue',
    accent: '#60A5FA',
  },
  {
    icon: '📋',
    title: 'Life Time Capstone Document',
    type: 'Professional Deliverable',
    desc: 'Full internship capstone project built with Claude — OPT-based programming framework, client identity architecture (Strong, Screened, Sustainable), session templates, and fitness philosophy. Submitted to PT Leader John Cwiok.',
    stack: ['Claude', 'Google Docs', 'NASM OPT', 'Professional Writing'],
    status: 'Submitted',
    statusColor: 'teal',
    accent: '#00F5C4',
  },
];

function renderBuilds() {
  const grid = document.getElementById('builds-grid');
  if (!grid) return;

  builds.forEach((build, i) => {
    const card = document.createElement('div');
    card.className = 'build-card reveal';
    card.style.setProperty('--card-accent', build.accent);
    card.style.transitionDelay = `${i * 0.06}s`;

    const dotClass = build.statusColor === 'amber' ? 'amber' : build.statusColor === 'blue' ? 'blue' : build.statusColor === 'purple' ? 'purple' : '';

    card.innerHTML = `
      <div class="build-card-top">
        <div class="build-icon">${build.icon}</div>
        <div class="build-type-badge" style="color:${build.accent};background:${build.accent}18;border-color:${build.accent}30;">${build.type}</div>
      </div>
      <div class="build-title">${build.title}</div>
      <div class="build-desc">${build.desc}</div>
      <div class="build-stack">
        ${build.stack.map(s => `<span class="build-stack-item">${s}</span>`).join('')}
      </div>
      <div class="build-status">
        <span class="build-status-dot ${dotClass}" style="background:${build.accent}"></span>
        ${build.status}
      </div>
    `;

    grid.appendChild(card);
  });
}

renderBuilds();
