export const links = {
  linkedin: 'https://www.linkedin.com/in/javiers-barrera/',
  github: 'https://github.com/j4vierb',
  // Add a public address here to show it in the contact section.
  email: '',
};

export const home = {
  es: {
    meta: {
      title: 'Javier Barrera · AI Engineer',
      description:
        'AI Engineer. Construyo sistemas con LLMs y agentes de IA sobre AWS.',
    },
    nav: {
      work: 'Casos',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
      menu: 'Abrir menú',
      switchLabel: 'Read in English',
      switchText: 'EN',
    },
    hero: {
      name: 'Javier Barrera',
      role: 'AI Engineer',
      lead: 'Construyo sistemas con LLMs y agentes de IA sobre AWS. En Blend360 he trabajado en un motor de auditoría médica y en proyectos de datos e IA con clientes.',
      primary: 'Ver casos',
      photoAlt: 'Retrato de Javier Barrera',
    },
    metrics: [
      { value: '85%', label: 'F1 en componentes de auditoría médica, medido contra ground truth' },
      { value: '~60%', label: 'de ahorro estimado sobre todo el tiempo que tomaba elaborar cada acta de junta directiva a mano' },
      { value: '+25', label: 'sesiones presenciales con cliente, hasta junta directiva' },
    ],
    labels: {
      challenge: 'Reto',
      did: 'Qué hice',
      result: 'Resultado',
      role: 'Rol',
      certifications: 'Certificaciones',
      microcredentials: 'Microcredenciales AWS',
      education: 'Formación',
      languages: 'Idiomas',
      stack: 'Stack',
    },
    sections: {
      work: 'Casos',
      projects: 'Otros proyectos',
      experience: 'Experiencia',
      credentials: 'Credenciales',
      contact: 'Contacto',
    },
    cases: [
      {
        context: 'Entidad pública de salud · Colombia',
        title: 'Motor de auditoría médica con IA',
        role: 'Arquitecto y uno de los constructores principales, junto con el equipo',
        challenge:
          'Cada reclamación médica debe contrastarse con la historia clínica, las tarifas y la norma colombiana. El motor automatiza esa revisión con decisiones que se pueden sustentar.',
        result:
          'F1 del 85% en Estancias y Consultas. El ground truth dejó conocimiento de auditoría médica en el equipo y la evidencia para sustentar el funcionamiento del motor ante el cliente.',
        did: [
          'Clasificador de ítems de factura, diseñado con el equipo: reglas deterministas para los casos claros y un agente en AWS Bedrock para los complejos.',
          'Lideré el extractor que convierte los PDF de las reclamaciones en datos estructurados.',
          'Dentro de un equipo de alto rendimiento, participé en el diseño del motor de hallazgos clínicos con patrones Registry y Factory: más de 15 reglas que se agregan sin tocar el núcleo.',
          'Parte del equipo que construyó el ground truth. Revisé los falsos positivos y negativos del motor.',
          'Modelo de datos en PostgreSQL para detección de anomalías y tableros en QuickSight para priorizar la revisión.',
          'Respaldos en AWS con cifrado KMS y protección contra eliminación, empaquetados como componentes CDK reutilizables.',
        ],
        tags: ['Python', 'AWS Bedrock', 'Arquitectura hexagonal', 'AWS CDK'],
      },
      {
        context: 'Blend360 · Interno',
        title: 'Medición de ingeniería y adopción de IA',
        role: 'Ingeniero de automatización',
        challenge:
          'La gerencia necesitaba ver qué trabajo técnico aporta a cada objetivo de negocio y cómo se adopta la IA en la empresa, con cifras que se puedan auditar.',
        result:
          '154 personas reciben cada mes su reporte de contribuciones y uso de IA, con más de 600 reportes entregados.',
        did: [
          'Pipeline agéntico, desarrollado en equipo, que traza la actividad técnica en GitHub y SharePoint hasta el valor de negocio.',
          'Nos hicimos responsables de los reportes mensuales, un flujo que ya existía, y escribí el script que automatiza su ejecución.',
          'Portal de gobierno de TI con inicio de sesión corporativo y vistas por perfil, desplegado en AWS Amplify.',
          'Metodología de medición alineada con el código, para que cada cifra pueda auditarse.',
        ],
        tags: ['Agentes de IA', 'GitHub', 'SharePoint', 'Keycloak', 'AWS Amplify'],
      },
      {
        context: 'Cliente privado · Descubrimiento con IA',
        title: 'Actas de junta directiva con IA',
        role: 'Ingeniero de datos e IA y punto de contacto técnico',
        challenge:
          'Elaborar cada acta de junta directiva tomaba varios días y la operación del cliente estaba dispersa en correos y archivos.',
        result:
          'Estimamos que la elaboración de cada acta baja de 4 a 1,5 días. Quien usará el flujo calificó la demo como un muy buen trabajo.',
        did: [
          'Demo del flujo de generación de actas con IA, entregada con el equipo.',
          'Más de 25 sesiones presenciales con el cliente, desde la gerencia hasta la junta directiva, incluido el levantamiento del flujo de actas con IA, que dirigí.',
          'Prueba de concepto de un servicio que sincroniza buzones de forma incremental y sin duplicados con Microsoft Graph.',
        ],
        tags: ['LLMs', 'Microsoft Graph', 'Python', 'Ingesta de datos'],
      },
    ],
    projects: [
      {
        name: 'ANB',
        summary: 'Backend para procesar video de forma asíncrona en una aplicación tipo TikTok, migrado a AWS con autoescalado.',
        tags: ['FastAPI', 'Celery', 'FFmpeg', 'SQS', 'Auto Scaling'],
      },
      {
        name: 'Carryfy',
        summary: 'Plataforma logística de 6 microservicios con arquitectura hexagonal, desplegada en un clúster de Kubernetes.',
        tags: ['FastAPI', 'PostgreSQL', 'Terraform', 'EKS'],
      },
      {
        name: 'VictorIA',
        summary: 'Hackatón de 24 horas: sistema en WhatsApp con LLMs y RAG para apoyar a quienes cuidan a adultos mayores.',
        tags: ['LLMs', 'RAG', 'Speech-to-Text', 'HuggingFace'],
      },
    ],
    experience: [
      {
        date: 'Feb 2026 – Actualidad',
        role: 'Data Engineer, enfocado en LLMs y agentes',
        org: 'Blend360',
        text: 'Construcción de sistemas de IA en producción sobre AWS, automatización interna y trabajo directo con clientes.',
      },
      {
        date: 'Ago 2024 – May 2025',
        role: 'Desarrollador frontend',
        org: 'SinfonIA · Universidad de los Andes',
        text: 'Aplicación web en equipo de 4 personas para controlar un robot Pepper con ROS2.',
      },
    ],
    stack: [
      { group: 'IA y LLMs', items: 'AWS Bedrock, agentes de IA, RAG, HuggingFace' },
      { group: 'Agentes y harness', items: 'Uso avanzado de Claude Code, Codex y Antigravity' },
      { group: 'Backend', items: 'Python, FastAPI, Celery, NestJS' },
      { group: 'Nube', items: 'AWS, CDK, Terraform, Docker, Kubernetes' },
      { group: 'Datos', items: 'PostgreSQL, Snowflake, QuickSight, PySpark' },
      { group: 'Calidad', items: 'GitHub Actions, pruebas unitarias y de integración' },
    ],
    certifications: [
      { name: 'AWS Certified Solutions Architect – Associate', date: '2026' },
      { name: 'AWS Certified AI Practitioner', date: '2026' },
      { name: 'AWS Certified Cloud Practitioner', date: '2026' },
      { name: 'Snowflake SnowPro Core', date: '2026' },
    ],
    microcredentials: ['Data Visualization', 'Serverless', 'Data Lakehouse'],
    education: [
      'Ingeniería de Sistemas y Computación, Universidad de los Andes',
    ],
    languages: 'Español nativo · Inglés B2',
    contact: {
      text: 'Puedes encontrarme en LinkedIn y GitHub.',
    },
  },

  en: {
    meta: {
      title: 'Javier Barrera · AI Engineer',
      description:
        'AI Engineer. I build systems with LLMs and AI agents on AWS.',
    },
    nav: {
      work: 'Case studies',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      menu: 'Open menu',
      switchLabel: 'Leer en español',
      switchText: 'ES',
    },
    hero: {
      name: 'Javier Barrera',
      role: 'AI Engineer',
      lead: 'I build systems with LLMs and AI agents on AWS. At Blend360 I have worked on a medical audit engine and on data and AI projects with clients.',
      primary: 'See case studies',
      photoAlt: 'Portrait of Javier Barrera',
    },
    metrics: [
      { value: '85%', label: 'F1 on medical audit components, measured against ground truth' },
      { value: '~60%', label: 'estimated savings on all the time it took to write each set of board minutes by hand' },
      { value: '25+', label: 'on-site client sessions, up to board level' },
    ],
    labels: {
      challenge: 'Challenge',
      did: 'What I did',
      result: 'Result',
      role: 'Role',
      certifications: 'Certifications',
      microcredentials: 'AWS microcredentials',
      education: 'Education',
      languages: 'Languages',
      stack: 'Stack',
    },
    sections: {
      work: 'Case studies',
      projects: 'Other projects',
      experience: 'Experience',
      credentials: 'Credentials',
      contact: 'Contact',
    },
    cases: [
      {
        context: 'Public health agency · Colombia',
        title: 'AI-powered medical audit engine',
        role: 'Architect and one of the main builders, together with the team',
        challenge:
          'Every medical claim has to be checked against the clinical record, the rates and Colombian regulation. The engine automates that review with decisions that can be backed up.',
        result:
          '85% F1 on the inpatient and consultation components. The ground truth left the team with medical auditing knowledge and gave us the evidence to back up the engine in front of the client.',
        did: [
          'Invoice item classifier, designed with the team: deterministic rules for clear cases and an AWS Bedrock agent for complex ones.',
          'Led the extractor that turns claim PDFs into structured data.',
          'As part of a high-performing team, contributed to the design of the clinical findings engine using the Registry and Factory patterns: more than 15 rules added without touching the core.',
          'Part of the team that built the ground truth. Reviewed the engine’s false positives and negatives.',
          'PostgreSQL data model for anomaly detection and QuickSight dashboards to prioritize reviews.',
          'AWS backups with KMS encryption and deletion protection, packaged as reusable CDK components.',
        ],
        tags: ['Python', 'AWS Bedrock', 'Hexagonal architecture', 'AWS CDK'],
      },
      {
        context: 'Blend360 · Internal',
        title: 'Engineering and AI adoption measurement',
        role: 'Automation engineer',
        challenge:
          'Leadership needed to see which technical work contributes to each business goal and how AI is being adopted across the company, with figures that can be audited.',
        result:
          '154 people receive their monthly contributions and AI usage report, with more than 600 reports delivered.',
        did: [
          'Agentic pipeline, built as a team, that traces technical activity in GitHub and SharePoint to business value.',
          'We took ownership of the monthly reports, an existing flow, and I wrote the script that automates their execution.',
          'IT governance portal with corporate sign-in and role-based views, deployed on AWS Amplify.',
          'Measurement methodology aligned with the code, so every figure can be audited.',
        ],
        tags: ['AI agents', 'GitHub', 'SharePoint', 'Keycloak', 'AWS Amplify'],
      },
      {
        context: 'Private client · AI discovery',
        title: 'AI-generated board minutes',
        role: 'Data and AI engineer and technical point of contact',
        challenge:
          'Writing each set of board minutes took several days, and the client’s operational knowledge was scattered across emails and files.',
        result:
          'We estimate that writing each set of minutes drops from 4 days to 1.5. The person who will use the flow rated the demo as very good work.',
        did: [
          'Demo of the AI minutes generation flow, delivered with the team.',
          'More than 25 on-site client sessions, from management to the board, including the discovery of the AI minutes flow, which I led.',
          'Proof of concept for a service that syncs mailboxes incrementally and without duplicates through Microsoft Graph.',
        ],
        tags: ['LLMs', 'Microsoft Graph', 'Python', 'Data ingestion'],
      },
    ],
    projects: [
      {
        name: 'ANB',
        summary: 'Backend for asynchronous video processing in a TikTok-style app, migrated to AWS with auto scaling.',
        tags: ['FastAPI', 'Celery', 'FFmpeg', 'SQS', 'Auto Scaling'],
      },
      {
        name: 'Carryfy',
        summary: 'Logistics platform with 6 microservices and hexagonal architecture, deployed on a Kubernetes cluster.',
        tags: ['FastAPI', 'PostgreSQL', 'Terraform', 'EKS'],
      },
      {
        name: 'VictorIA',
        summary: '24-hour hackathon: a WhatsApp system with LLMs and RAG to support people caring for older adults.',
        tags: ['LLMs', 'RAG', 'Speech-to-Text', 'HuggingFace'],
      },
    ],
    experience: [
      {
        date: 'Feb 2026 – Present',
        role: 'Data Engineer, focused on LLMs and agents',
        org: 'Blend360',
        text: 'Building production AI systems on AWS, internal automation and working directly with clients.',
      },
      {
        date: 'Aug 2024 – May 2025',
        role: 'Frontend developer',
        org: 'SinfonIA · Universidad de los Andes',
        text: 'Web application, built in a team of 4, to control a Pepper robot with ROS2.',
      },
    ],
    stack: [
      { group: 'AI and LLMs', items: 'AWS Bedrock, AI agents, RAG, HuggingFace' },
      { group: 'Agents and harnesses', items: 'Advanced use of Claude Code, Codex and Antigravity' },
      { group: 'Backend', items: 'Python, FastAPI, Celery, NestJS' },
      { group: 'Cloud', items: 'AWS, CDK, Terraform, Docker, Kubernetes' },
      { group: 'Data', items: 'PostgreSQL, Snowflake, QuickSight, PySpark' },
      { group: 'Quality', items: 'GitHub Actions, unit and integration testing' },
    ],
    certifications: [
      { name: 'AWS Certified Solutions Architect – Associate', date: '2026' },
      { name: 'AWS Certified AI Practitioner', date: '2026' },
      { name: 'AWS Certified Cloud Practitioner', date: '2026' },
      { name: 'Snowflake SnowPro Core', date: '2026' },
    ],
    microcredentials: ['Data Visualization', 'Serverless', 'Data Lakehouse'],
    education: [
      'B.S. in Systems and Computing Engineering, Universidad de los Andes',
    ],
    languages: 'Spanish (native) · English (B2)',
    contact: {
      text: 'You can find me on LinkedIn and GitHub.',
    },
  },
};
