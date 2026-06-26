export const site = {
  url: 'https://tylersibley.dev',
  meta: {
    title: 'Tyler Sibley | Cloud & Identity Security Portfolio',
    description:
      'Portfolio of Tyler Sibley — FSU IT senior and Okta Customer Success Intern specializing in IAM, serverless cloud architecture, and AI-powered security tooling.',
  },
  hero: {
    name: 'Tyler Sibley',
    role: 'IT Student & Okta Customer Success Intern',
    tagline: 'FSU Senior building in IAM, serverless cloud architecture, and AI-powered security tooling.',
    contact: 'Okta Customer Success Intern · FSU Information Technology · Targeting Solutions Engineering & Architecture roles.',
    avatarSrc: '/headshot1.jpg',
    avatarAlt: 'Tyler Sibley',
  },
  about: {
    paragraphs: [
      'Senior IT student at Florida State University and current Okta Customer Success Intern. I build real IAM systems with live Okta federation, serverless cloud architectures on AWS, and AI-powered security tooling. I care about systems that are secure by design, not patched after the fact.',
      'Currently at Okta supporting enterprise customers with SSO, MFA, and lifecycle management implementations. Co-Captain of the FSU AWS Cloud Club. Okta Certified Administrator, Okta Certified Professional, CompTIA Security+, AWS AI Practitioner, and AWS Cloud Practitioner certified.',
      {
        heading: 'What I work with',
        bullets: [
          'Identity & Access Management — Okta OIDC/SAML, RBAC, JWT, PKCE, AWS IAM federation',
          'Cloud architecture — AWS serverless (Lambda, S3, API Gateway, DynamoDB, Cognito, Rekognition)',
          'Security tooling — Python, FastAPI, React, scikit-learn, OpenAI API, agentic AI pipelines',
        ],
      },
    ],
  },
  experiences: [
    {
      period: 'Summer 2026',
      title: 'Customer Success Intern',
      company: 'Okta',
      summary:
        'Supporting enterprise customers implementing Okta identity solutions — SSO, MFA, and lifecycle management.',
      highlights: [],
      tech: ['Okta', 'SSO', 'MFA', 'SAML', 'OIDC'],
    },
    {
      period: 'Spring 2026',
      title: 'DevOps Project Manager',
      company: 'AWS Cloud Club at FSU — SmartGallery',
      summary:
        'Led the DevOps team for SmartGallery, a serverless AWS image recognition app built by 35+ contributors over nine weeks.',
      highlights: [],
      tech: ['AWS', 'Lambda', 'S3', 'DynamoDB', 'IAM', 'CloudWatch'],
    },
    {
      period: 'Feb. 2026 — Present',
      title: 'Co-Captain',
      company: 'AWS Cloud Club at FSU',
      summary:
        'Co-leading a 65-member organization focused on cloud computing education, AWS certification prep, and career development.',
      highlights: [],
      tech: ['AWS', 'IAM', 'Lambda', 'S3'],
    },
  ],
  featuredProjects: [
    {
      title: 'Zero Trust Security Dashboard',
      period: 'Summer 2026',
      link: 'https://zerotrust.tylersibley.dev',
      github: 'https://github.com/tylersibley/zero-trust-dashboard',
      summary:
        'A full-stack security operations dashboard built on Okta\'s identity platform — real-time threat detection, behavioral analytics, and ML-powered anomaly detection. Live data from a real Okta org.',
      solution:
        'Built a FastAPI backend deployed on AWS Lambda that pulls live authentication events from the Okta System Log API, scores user risk in real time, and detects anomalies using an Isolation Forest ML model trained on per-user behavioral baselines (login hours, known IPs, failure rates). The React frontend — deployed on Vercel with a custom domain — includes six pages: Overview, User Drilldown, Live Feed, Risk Simulator, Anomaly Detection, and Analytics. The Risk Simulator lets you input any user and context (IP, country, action) and returns an ALLOW/CHALLENGE/DENY policy decision with full reasoning.',
      impact:
        'Fully live at zerotrust.tylersibley.dev with real Okta org data. Backend on AWS Lambda + API Gateway, frontend on Vercel. Demonstrates the full Zero Trust stack — identity telemetry, behavioral baselines, ML anomaly scoring, and adaptive policy simulation — in a single working product.',
      image: 'zeroTrustDashboard.jpg',
      imageAlt: 'Zero Trust Security Dashboard — Overview page showing org risk score and at-risk users',
      techCategories: [
        {
          category: 'Backend & ML',
          items: ['Python', 'FastAPI', 'scikit-learn', 'Isolation Forest', 'AWS Lambda', 'DynamoDB', 'Mangum'],
        },
        {
          category: 'Identity & APIs',
          items: ['Okta System Log API', 'Okta Users API', 'Event Hooks', 'Zero Trust', 'SSWS Auth'],
        },
        {
          category: 'Frontend & Infra',
          items: ['React', 'Vite', 'Recharts', 'Vercel', 'API Gateway', 'S3'],
        },
      ],
    },
    {
      title: 'Enterprise IAM Demo — Okta + AWS Federation',
      period: '2025',
      link: 'https://tylersibley.github.io/okta-iam-architecture-lab/',
      github: 'https://github.com/tylersibley/okta-iam-architecture-lab',
      summary:
        'A fully deployed enterprise IAM simulation with real Okta SSO, JWT-based role enforcement on a live backend, and actual AWS Console access via SAML federation.',
      solution:
        'Built Okta OIDC Authorization Code Flow with PKCE for browser-safe login. After authentication, the app decodes the JWT and reads Okta group claims (App-Admin, App-Engineer, App-Sales) to control what each user sees in the UI. A Node.js/Express backend independently validates the JWT and returns 200 or 403 — enforcing RBAC at the API layer, not just the frontend. Real AWS Console access is granted via Okta SAML federation into an IAM role, which is exactly how enterprises grant cloud access without long-term credentials. Every event — login, API call, access granted/denied, AWS federation — is captured in an audit log.',
      impact:
        'Fully live: real Okta login, real JWT validation, real AWS SAML federation. Frontend on GitHub Pages, backend on Render. Demonstrates the full enterprise IAM stack — authentication, authorization, federation, and audit — in a single working demo.',
      image: 'okta_sso_new.png',
      imageAlt: 'Enterprise IAM Architecture: Okta + AWS Federation',
      techCategories: [
        {
          category: 'Identity & Protocols',
          items: ['Okta', 'OIDC', 'SAML 2.0', 'OAuth 2.0', 'PKCE', 'JWT', 'RBAC'],
        },
        {
          category: 'Stack',
          items: ['JavaScript', 'Node.js', 'Express', 'AWS IAM', 'GitHub Pages', 'Render'],
        },
      ],
    },
    {
      title: 'SmartGallery — Serverless AI Image Platform',
      period: 'Spring 2026',
      link: 'https://lnkd.in/eH9rAu2A',
      github: '',
      summary:
        'Full-stack serverless AWS application where users upload images and get AI-generated tags automatically — built across 9 weeks with 35+ contributors in the FSU AWS Cloud Club.',
      solution:
        'Served as DevOps Project Manager leading a team of 5. Designed the AWS architecture end-to-end: S3 for storage, Lambda for compute, API Gateway for routing, Cognito for auth, DynamoDB for metadata, Rekognition for AI tagging, Amplify for the frontend, and CloudWatch for monitoring. All services secured with IAM least-privilege roles.',
      impact:
        'Delivered a working live demo integrating 8+ AWS services with zero server management. The most valuable lesson: making cloud services work together as a system — not just individually — is a different skill than knowing each service in isolation.',
      image: 'smartgallery.PNG',
      imageAlt: 'SmartGallery AWS Architecture',
      techCategories: [
        {
          category: 'AWS Services',
          items: ['S3', 'Lambda', 'API Gateway', 'Cognito', 'DynamoDB', 'Rekognition', 'Amplify', 'CloudWatch'],
        },
        {
          category: 'Security',
          items: ['IAM Least Privilege', 'Cognito Auth', 'Serverless Security'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Full archive of projects, labs, and security research.',
    intro: 'A running record of builds, experiments, and things learned.',
  },
  projectArchive: [
    { date: '2026', project: 'Zero Trust Security Dashboard', role: 'Solo Build', techStack: 'Python, FastAPI, React, AWS Lambda, DynamoDB, Okta APIs, scikit-learn' },
    { date: '2026', project: 'CertIQ — Cybersecurity Certification Intelligence', role: 'Solo Build', techStack: 'JavaScript, JSearch API, 914 job postings, 32 certs analyzed' },
    { date: '2026', project: 'Agentic AI Threat Hunting Simulation', role: 'Security / AI', techStack: 'Python, OpenAI API, Agentic AI' },
    { date: '2026', project: 'SmartGallery — Serverless AI Image Platform', role: 'DevOps PM', techStack: 'AWS Lambda, S3, Rekognition, Cognito, DynamoDB, Amplify' },
    { date: '2025', project: 'Enterprise IAM Demo — Okta + AWS Federation', role: 'Solo Build', techStack: 'Okta, OIDC, SAML, PKCE, JWT, Node.js, AWS IAM' },
  ],
  contact: {
    email: 'tcs23d@fsu.edu',
    github: 'https://github.com/tylersibley',
    linkedin: 'https://www.linkedin.com/in/tylersibley/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
