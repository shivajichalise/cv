import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shivaji Chalise",
  initials: "SC",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/Kathmandu",
  about:
    "Detail-oriented Backend Engineer dedicated to building high-quality applications.",
  summary: (
    <>
      Backend Engineer with 3+ years of experience designing and developing
      scalable and efficient server-side applications. Skilled in databases,
      APIs, and system architecture, ensuring secure and optimized data
      processing.
    </>
  ),
  avatarUrl:
    "https://raw.githubusercontent.com/shivajichalise/shivajichalise/refs/heads/main/images/shivaji_dp_left.png",
  personalWebsiteUrl: "https://shivajichalise.com.np",
  contact: {
    email: "respond2shivaji@gmail.com",
    tel: "+977-9840610177",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shivajichalise",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivajichalise/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Gandaki College of Engineering and Science",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2019",
      end: "2024",
    },
    {
      school: "Pokhara Engineering College",
      degree: "Diploma in Computer Engineering",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Mantra IT Solutions",
      link: "https://mantrait.com.np",
      badges: ["On Site", "PHP", "Laravel"],
      title: "Backend Engineer",
      start: "2024",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li className="pb-2">
            Designed and developed RESTful APIs for E-Grow’s closed/open
            marketplace, supporting mobile app integration for marketplace
            access and transactions.
          </li>

          <li className="pb-2">
            Built an admin dashboard for marketplace management, featuring
            multi-campaign management, order tracking, subsidy module, and
            automated invoice and purchase order generation.
          </li>

          <li className="pb-2">
            Developed a dynamic form builder with APIs, allowing admins to
            create customizable forms for real-time ren- dering in the mobile
            app, cutting delivery time by 80% by eliminating the need for app
            rebuilds.
          </li>

          <li className="pb-2">
            Created an order summary and analytics section, providing insights
            into sales performance and marketplace activity.
          </li>

          <li className="pb-2">
            Optimized API performance and security, resulting in faster response
            times and improved data protection.
          </li>

          <li className="pb-2">
            Implemented a CI/CD pipeline, automating deployment processes.
          </li>
        </ul>
      ),
    },
    {
      company: "Zerone Technology",
      link: "https://zeronetechnology.com.np",
      badges: ["On Site", "PHP", "Laravel", "React", "Bootstrap CSS"],
      title: "Software Developer",
      start: "2022",
      end: "2024",
      description: (
        <ul className="list-inside list-disc">
          <li className="pb-2">
            Developed admin dashboard for Pokhara Marathon that allows
            organizers to create and manage events, tickets, participants
            efficiently.
          </li>

          <li className="pb-2">
            Implemented automated certificate generation module for dynamic
            certificate creation.
          </li>

          <li className="pb-2">
            Designed and integrated a discount and coupon logic, enabling
            organizers to create customizable early-bird discounts, and special
            offers for event registrations.
          </li>

          <li className="pb-2">
            Integrated payment gateways, enabling secure online transactions for
            event registrations and ticket purchases.
          </li>

          <li className="pb-2">
            Developed and maintained a Content Management System (CMS) to
            enhance content creation and management processes.
          </li>

          <li className="pb-2">
            Maintained and improved existing projects, ensuring stability and
            functionality.
          </li>
        </ul>
      ),
    },
    {
      company: "Zerone Technology",
      link: "https://zeronetechnology.com.np",
      badges: ["On Site", "PHP", "Laravel"],
      title: "Intern",
      start: "2019",
      end: "2019",
      description: (
        <ul className="list-inside list-disc">
          <li className="pb-2">Interned as a web developer.</li>

          <li className="">
            Gained proficiency in JavaScriot, PHP/Laravel while working on
            various web development tasks.
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "PHP/Laravel",
    "MySQL",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Go",
  ],
  projects: [
    {
      title: "Event Mate",
      techStack: ["PHP", "Laravel", "React", "Inertia", "MySQL"],
      description: "An event management web app.",
      link: {
        label: "Event Mate",
        href: "https://github.com/shivajichalise/eventmate",
      },
    },
    {
      title: "Blockure",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Solidity",
        "Web3",
      ],
      description:
        "Platform for blockchain certificate generation and validation.",
      link: {
        label: "Blockure",
        href: "https://github.com/shivajichalise/blockure",
      },
    },
    {
      title: "RSS Aggregator",
      techStack: ["Go", "SQLc", "PostgreSQL", "Goose"],
      description: "A RSS Aggregator .",
      link: {
        label: "RSS Aggregator",
        href: "https://github.com/shivajichalise/rssagg",
      },
    },
    {
      title: "Snippy Snapy Suu",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      description: "A code snippet web app.",
      link: {
        label: "Snippy Snapy Suu",
        href: "https://github.com/shivajichalise/snippysnapysuu",
      },
    },
    {
      title: "Bola na bola",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Socket.io",
        "PostgreSQL",
      ],
      description: "A dead simple real time chat application.",
      link: {
        label: "Bola na bola",
        href: "https://github.com/shivajichalise/bolanabola",
      },
    },
    {
      title: "Rays Motors",
      techStack: ["React", "Styled Components"],
      description: "Website for ISUZU vehicle showroom.",
      link: {
        label: "raysmotors.com.np",
        href: "https://raysmotors.com.np",
      },
    },
    {
      title: "Forex",
      techStack: ["Rust"],
      description:
        "Console applicate to consume Nepal Rastra Bank's Foreign Exchange Rates API.",
      link: {
        label: "Foxex",
        href: "https://github.com/shivajichalise/forex",
      },
    },
    {
      title: "Go TCP",
      techStack: ["Go"],
      description: "A very simple multi-user chat server.",
      link: {
        label: "Go TCP",
        href: "https://github.com/shivajichalise/go-tcp",
      },
    },
    {
      title: "NRB Forex",
      techStack: ["PHP"],
      description:
        "A laravel package to consume Nepal Rastra Bank's forex api.",
      link: {
        label: "NRB Forex",
        href: "https://github.com/kodefarmers/nrb-forex",
      },
    },
    {
      title: "Nepal Data",
      techStack: ["PHP"],
      description:
        "A laravel package to get Nepal data (Provinces, Districts, Municipalities).",
      link: {
        label: "Nepal Data",
        href: "https://github.com/kodefarmers/nepaldata",
      },
    },
  ],
} as const;
