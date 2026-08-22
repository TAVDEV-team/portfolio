const projects = [
  {
    id: 1,
    slug: "narayanpur-high-school",

    title: "Narayanpur High School",

    description:
      "A modern school website built to centralize academic and institutional information, featuring class routines, teacher profiles, notices, school history, photo galleries, and essential contact information for students, parents, and visitors.",

    image: "/narayan.png",

    live: "https://www.narayanpurhighschool.edu.bd/",

    overview:
      "A digital platform for Narayanpur High School designed to bring essential academic and institutional information into one accessible online experience for students, parents, teachers, and visitors.",

    problem:
      "The school needed a central online presence where students, parents, and visitors could easily access institutional information, notices, academic resources, teacher information, and other important updates.",

    solution:
      "We built a structured school website that organises academic and institutional content into a clear and accessible interface, making important information easier to discover and maintain.",

    stack: [
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
    ],

    contributors: [
      "md_abdullah_all_mamun",
      "trisha_pal",
    ],
  },

  {
    id: 2,
    slug: "tavdev-monitor",

    title: "TAVDEV Monitor",

    description:
      "A full-stack uptime monitoring platform with configurable health checks, built with a concurrency-safe quota system using atomic database updates to eliminate race conditions under simultaneous monitor-creation requests.",

    image: "/tavdev_monitor.png",

    live: "https://monitor.tavdev.com/",

    github:
      "https://github.com/mamun700263/Tavdev_tools",

    overview:
      "TAVDEV Monitor is an uptime monitoring platform designed to continuously check websites and APIs, track availability and response performance, and provide developers with actionable monitoring data.",

    problem:
      "Applications can become unavailable because of server failures, deployment issues, suspended infrastructure, or other unexpected problems. Developers need continuous monitoring without manually checking every service.",

    solution:
      "We built a monitoring platform capable of scheduling configurable health checks, distributing monitoring workloads through background processing, recording monitoring results, and enforcing user quotas safely under concurrent requests.",

    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Docker",
    ],

    engineeringHighlights: [
      {
        title: "Concurrency-Safe Quotas",
        description:
          "Atomic database updates are used to enforce monitor quotas safely when multiple monitor-creation requests arrive simultaneously.",
      },
      {
        title: "Background Processing",
        description:
          "Monitoring workloads are executed independently from normal API requests so health checks can run continuously without blocking the application layer.",
      },
      {
        title: "Redis-Based Task Distribution",
        description:
          "Redis is used to organise and distribute monitoring workloads according to configured monitoring intervals.",
      },
    ],

    contributors: [
      "md_abdullah_all_mamun",
    ],
  },

  {
    id: 3,
    slug: "advocate-depankar-chakraborty",

    title: "Advocate Depankar Chakraborty",

    description:
      "A modern legal-services platform built to establish professional credibility and generate client enquiries, with structured practice areas, case results, legal content, advocate profiles, and consultation workflows.",

    image: "/advocate.png",

    live:
      "https://portfolio1-depankar-chakraborty-adv.vercel.app",

    overview:
      "A professional digital presence designed for Advocate Depankar Chakraborty, providing prospective clients with clear information about legal services, professional experience, and consultation options.",

    problem:
      "Legal professionals need a credible online presence that communicates expertise clearly while making it easy for potential clients to understand available services and initiate a consultation.",

    solution:
      "We created a professional legal-services website that organises practice areas, case information, legal content, professional credentials, and contact workflows into a focused client-facing experience.",

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    contributors: [
      "trisha_pal",
      "md_abdullah_all_mamun",
    ],
  },

  {
    id: 4,
    slug: "sanjoy-dental-care",

    title: "Sanjoy Dental Care",

    description:
      "A modern dental clinic website designed to build patient trust and drive appointment bookings, featuring comprehensive dental services, treatment information, patient testimonials, clinic details, working hours, and clear contact and appointment call-to-actions.",

    image: "/dentist.png",

    live:
      "https://portfolio2-sanjay-paul-dentist.vercel.app/",

    overview:
      "A patient-focused digital presence for Sanjoy Dental Care designed to communicate the clinic's services, establish trust, and make it easier for prospective patients to learn about treatments and schedule appointments.",

    problem:
      "Patients need quick access to information about available treatments, clinic details, opening hours, and ways to contact the dental practice before deciding to book an appointment.",

    solution:
      "We designed a modern clinic website that presents dental services, treatment information, testimonials, clinic details, and appointment-oriented contact options through a clear and accessible interface.",

    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    contributors: [
      "trisha_pal",
    ],
  },
];

export default projects;