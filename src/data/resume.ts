// Single source of truth for resume content.
// Rendered by the page sections and by the Terminal's resume.txt / skills.txt.

export interface Tag {
  name: string;
  favorite?: boolean; // shows a star, e.g. favorite course
}

export interface Job {
  title: string;
  org: string;
  dates: string;
  mode: string;
  bullets: string[];
  tags: string[];
}

export interface EducationItem {
  title: string;
  dates: string;
  issuer?: string;       // degrees/programs
  credentialId?: string; // certifications
  recent?: boolean;      // highlighted date badge
  bullets?: string[];    // makes the entry collapsible
  tags?: Tag[];
}

export interface SkillGroup {
  title: string;
  icon: 'code' | 'cloud' | 'server' | 'globe' | 'users' | 'chat';
  items: (string | { name: string; note: string })[];
}

export interface Project {
  title: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
}

// Most recent first — the first entry is highlighted and expanded.
export const experience: Job[] = [
  {
    title: 'Senior Director of Salesforce & Technology',
    org: 'Delta Tau Delta Educational Foundation',
    dates: 'Oct 2026 - Present',
    mode: 'Remote',
    bullets: [
      'Lead Salesforce and technology strategy across both the Fraternity and Foundation as sole technical administrator of the enterprise Salesforce NPSP org and its connected platforms, including Account Engagement, GoFundMe Pro, Linvio and myDelt.',
      "Serve on the Foundation's Executive Team, contributing to organizational strategy in advancement of the mission.",
      'Act as lead enterprise representative with all technology vendors, including primary point of contact for the outsourced IT support provider.',
      'Oversee platform security and configuration (profiles, permission sets, object and field access) alongside declarative automation using Flows, custom rollups and formula fields.',
      'Implementing an enterprise ticketing system so projects across the organization are submitted, executed and billed consistently.',
      'Develop and manage the organization\'s AI policy, ensuring responsible and secure use of large language models and other AI tools.',
      'Build and manage the annual technology budget, and run event technology for Karnea, including Cvent Events, Attendee Hub and OnArrival registration and check-in.',
    ],
    tags: ['Salesforce Architecture', 'Technology Strategy', 'Executive Leadership', 'Vendor Management'],
  },
  {
    title: 'Director of Enterprise Technology',
    org: 'Delta Tau Delta Central Office',
    dates: 'Jun 2022 - Oct 2026',
    mode: 'Remote',
    bullets: [
      'Delivered enterprise-grade Salesforce solutions as sole platform owner at a 35-person nonprofit, managing the full lifecycle from architecture and development to user enablement and data governance.',
      'Led the successful migration of 600,000+ constituent and donation records from two legacy CRMs to Salesforce NPSP, ensuring data integrity and system reliability.',
      'Managed all technical aspects of Account Engagement (Pardot) platform, optimizing list email segmentation, automation, deliverability and seamless syncing with Salesforce to empower fundraising efforts.',
      'Developed and implemented an internal lead scoring engine using Declarative Lookup Rollup Summaries (DLRS) and record-triggered flows to identify high-value fundraising targets based on custom and standard fields.',
      'Built and maintained custom objects, flows, reports and dashboards to fully leverage Salesforce data and seamlessly integrate with external systems, including GoFundMe Pro donation platform.',
      'Drove user enablement by training staff on Salesforce best practices, creating comprehensive documentation, and establishing standard operating procedures.',
      'Upheld rigorous data hygiene standards by implementing duplicate management rules and leveraging third-party enrichment tools.',
      'Developed an automated Python script to apply random offset (jitter) to Salesforce Maps data and generate embeddable heatmaps, ensuring data privacy compliance while enabling geographic analysis of constituent records.',
      'Managed platform environments utilizing Partial Copy sandboxes for configuration testing, and executed deployment to production using Change Sets.',
    ],
    tags: ['Salesforce Administration', 'Data Management', 'Workflow Automation', 'IT Strategy'],
  },
  {
    title: 'Volunteer Recruitment Coordinator',
    org: 'Delta Tau Delta Central Office',
    dates: 'Jun 2020 - Jun 2022',
    mode: 'Remote',
    bullets: [
      'Utilized internal CRM, LinkedIn Sales Navigator and Asana to efficiently manage recruitment pipelines and track strong leads.',
      'Qualified, recruited and trained 50+ high-impact volunteers over 24 months, overseeing all stages of the onboarding process.',
    ],
    tags: ['Targeted Recruiting', 'Sales', 'Project Management', 'Training & Onboarding'],
  },
  {
    title: 'Leadership Consultant',
    org: 'Delta Tau Delta Central Office',
    dates: 'Jun 2019 - May 2020',
    mode: 'Hybrid',
    bullets: [
      'Provided in-person consulting to 17 university branches across 7 states, representing over $2.7M in budgeted revenue.',
      'Identified operational gaps and collaborated with branch officers to design and implement actionable improvement plans.',
    ],
    tags: ['Process Improvement', 'Consulting', 'Stakeholder Engagement', 'Revenue Management'],
  },
];

// Most recent first.
export const education: EducationItem[] = [
  {
    title: 'Salesforce Certified Business Analyst',
    dates: 'August 2026',
    credentialId: '8071182',
    recent: true,
  },
  {
    title: 'Salesforce Certified Advanced Administrator',
    dates: 'July 2026',
    credentialId: '7945935',
    recent: true,
  },
  {
    title: 'Salesforce Certified Platform App Builder',
    dates: 'June 2026',
    credentialId: '7879651',
    recent: true,
  },
  {
    title: 'Salesforce Certified Administrator',
    dates: 'May 2026',
    credentialId: '77987255',
    recent: true,
  },
  {
    title: 'Pathway to Computing Graduate Certificate',
    dates: 'Jan 2025 - May 2026 · GPA: 4.0',
    issuer: 'University of South Florida',
    recent: true,
    bullets: [
      "Pathway to Computing is USF's intensive 8-course bridge program, designed to cover all fundamental topics of computer science and prepare students for graduate studies or a career shift.",
      'Courses are a mix of theory and practical application, with a strong emphasis on hands-on projects and assignments.',
      "After graduating, students receive priority admission to USF's Master of Science in Computer Science, Cybersecurity, Computer Engineering, or Artificial Intelligence programs.",
    ],
    tags: [
      { name: 'C Programming', favorite: true },
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Object-Oriented Programming' },
      { name: 'Python' },
      { name: 'Computer Networks' },
      { name: 'Computer Systems' },
    ],
  },
  {
    title: 'B.S. in Integrative Animal Biology',
    dates: 'Aug 2015 - May 2019',
    issuer: 'University of South Florida',
    tags: [
      { name: 'Organic Chemistry I & II' },
      { name: 'Calculus' },
      { name: 'Statistics' },
      { name: 'Principles of Immunology' },
      { name: 'Human Anatomy and Physiology I & II' },
      { name: 'General Genetics' },
      { name: 'Medical and Applied Entomology' },
      { name: 'General Microbiology' },
      { name: 'Physics I & II' },
      { name: 'Principles of Ecology' },
      { name: 'Parasitology' },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Machine Languages',
    icon: 'code',
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML / CSS', 'SQL', 'Bash', 'PowerShell'],
  },
  {
    title: 'Salesforce',
    icon: 'cloud',
    items: ['Custom Objects', 'Schema Design', 'Flows & Automations', 'Reports & Dashboards', 'Data Loader', 'Account Engagement (Pardot)', 'DLRS', 'Salesforce APIs', 'Apex', 'SOQL', 'NPSP', 'CRM Management'],
  },
  {
    title: 'Infrastructure',
    icon: 'server',
    items: ['Linux (Ubuntu)', 'Docker', 'Git', 'GitHub', 'Server Administration', 'AWS S3', 'Microsoft 365'],
  },
  {
    title: 'Web & Software',
    icon: 'globe',
    items: ['Astro', 'React', 'Node.js', 'REST APIs', 'Tailwind CSS', 'AWS', 'Cloudflare'],
  },
  {
    title: 'Leadership & Comms',
    icon: 'users',
    items: ['Stakeholder Management', 'Technical Writing', 'Training & Onboarding', 'Project Management', 'Budget Development'],
  },
  {
    title: 'Human Languages',
    icon: 'chat',
    items: [{ name: 'English', note: 'Native' }, { name: 'Spanish', note: 'Fluent, C1' }],
  },
];

export const projects: Project[] = [
  {
    title: 'Simple Anonymized Heatmap',
    href: 'https://github.com/npidgeon/Simple-Anonymized-Heatmap',
    image: '/heatmap.png',
    alt: 'Anonymized Heatmap Tool',
    description: 'A privacy-focused Python web application that dynamically jitters coordinate datasets to protect user anonymity while retaining geographic density patterns. Supports interactive modification and data fetching from AWS S3 buckets.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Geopandas'],
  },
  {
    title: 'Portfolio/Resume Website',
    href: 'https://github.com/npidgeon/personal-site',
    image: '/portfolio.png',
    alt: 'Developer Portfolio Website',
    description: "A lightning-fast personal website constructed with Astro (you're on it!). Features a custom interactive terminal widget using pure vanilla Javascript to emulate bash commands, paired with elegant and responsive styling via Tailwind.",
    tags: ['Astro', 'Tailwind CSS', 'Vanilla JS'],
  },
];

// ---- Plain-text renderings for the Terminal ----

const skillText = (item: SkillGroup['items'][number]) =>
  typeof item === 'string' ? item : `${item.name} (${item.note})`;

export function resumeText(): string {
  const jobs = experience.map((j) =>
    [`${j.title} @ ${j.org} (${j.dates} · ${j.mode})`, ...j.bullets.map((b) => `- ${b}`)].join('\n'),
  );
  const edu = education.map((e) => `- ${e.title}${e.issuer ? ` @ ${e.issuer}` : ''} (${e.dates})`);
  return ['Nick Pidgeon', ...jobs, ['Education & Certifications:', ...edu].join('\n')].join('\n\n');
}

export function skillsText(): string {
  const width = Math.max(...skills.map((s) => s.title.length)) + 2;
  return skills.map((s) => `${(s.title + ':').padEnd(width)}${s.items.map(skillText).join(', ')}`).join('\n');
}
