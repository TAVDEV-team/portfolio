const contributors = [
  {
    slug: "mamun",
    name: "Md Abdullah All Mamun",
    role: "Backend Engineer",
    image: "/md_abdullah_all_mamun.jpeg",

    bio: "Backend engineer focused on building reliable APIs, scalable backend systems, automation workflows, and production-ready infrastructure.",

    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "SQLAlchemy",
      "Docker",
      "Pytest",
    ],

    contributions: [
      {
        project: "TAVDEV Monitor",
        role: "Backend Engineer",
        description:
          "Worked on the backend architecture and core monitoring infrastructure, including API development, background processing, Redis-based task distribution, and concurrency-safe quota management.",

        responsibilities: [
          "Designed backend API architecture",
          "Implemented monitor management and health-check logic",
          "Worked with PostgreSQL and SQLAlchemy",
          "Implemented Redis-based task distribution",
          "Designed background monitoring workflows",
          "Implemented concurrency-safe quota enforcement",
          "Used atomic database updates to prevent race conditions",
        ],
      },

      {
        project: "Narayanpur High School",
        role: "Backend Developer",
        description:
          "Contributed to the backend development of the school's web platform, building application functionality and supporting the underlying data and API workflows.",

        responsibilities: [
          "Developed backend functionality with Django",
          "Designed database models and application logic",
          "Implemented API endpoints",
          "Worked on authentication and data management",
        ],
      },
    ],

    projects: [
      {
        id: 1,
        title: "Narayanpur High School",
        role: "Backend Developer",
      },
      {
        id: 2,
        title: "TAVDEV Monitor",
        role: "Backend Engineer",
      },
    ],

    links: {
      github: "https://github.com/mamun700263",
      linkedin: "https://www.linkedin.com/",
    },
  },

  {
    slug: "trisha",
    name: "Trisha",
    role: "Frontend Developer",
    image: "/trisha_pal.jpeg",

    bio: "Frontend developer focused on building responsive, accessible, and user-friendly interfaces for modern web applications.",

    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],

    contributions: [
      {
        project: "TAVDEV Monitor",
        role: "Frontend Developer",
        description:
          "Worked on the frontend experience of the monitoring platform, translating backend functionality into a clear and responsive user interface.",

        responsibilities: [
          "Built responsive React interfaces",
          "Implemented monitoring dashboards",
          "Integrated frontend components with backend APIs",
          "Designed reusable UI components",
        ],
      },

      {
        project: "Narayanpur High School",
        role: "Frontend Developer",
        description:
          "Contributed to the frontend implementation of the school website, focusing on responsive layouts and accessible presentation of institutional information.",

        responsibilities: [
          "Implemented responsive page layouts",
          "Built reusable React components",
          "Integrated frontend pages with backend data",
          "Improved mobile usability",
        ],
      },
    ],

    projects: [
      {
        id: 1,
        title: "Narayanpur High School",
        role: "Frontend Developer",
      },
      {
        id: 2,
        title: "TAVDEV Monitor",
        role: "Frontend Developer",
      },
    ],

    links: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export default contributors;