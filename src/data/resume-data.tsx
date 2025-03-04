<<<<<<< HEAD
// import {
//   BarepapersLogo,
//   ConsultlyLogo,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MonitoLogo,
//   NSNLogo,
//   YearProgressLogo,
// } from "@/images/logos";
import {
  GitHubIcon,
  LinkedInIcon,
  // XIcon
} from "@/components/icons";
=======
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
>>>>>>> demo

export const RESUME_DATA = {
  name: "Shivaji Chalise",
  initials: "SC",
<<<<<<< HEAD
  location: "Pokhara, Nepal",
  locationLink: "https://www.google.com/maps/place/Pokhara",
  about:
    "Full Stack Engineer with a strong focus on crafting clean, well-tested, and performant code.",
  summary:
    "As a Full Stack Engineer, I specialize in end-to-end project development, primarily using Laravel/Node.js, TypeScript, and React. With over 2 years of experience in this field, I am dedicated to ongoing learning and staying current with industry trends.",
  avatarUrl:
    "https://raw.githubusercontent.com/shivajichalise/shivajichalise/main/images/square-dp-shivaji.png",
=======
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
>>>>>>> demo
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
<<<<<<< HEAD
      degree: "Bachelors in Software Engineering",
=======
      degree: "Bachelor's Degree in Software Engineering",
>>>>>>> demo
      start: "2019",
      end: "2024",
    },
    {
      school: "Pokhara Engineering College",
      degree: "Diploma in Computer Engineering",
<<<<<<< HEAD
      start: "2017",
=======
      start: "2016",
>>>>>>> demo
      end: "2019",
    },
  ],
  work: [
    {
<<<<<<< HEAD
      company: "Zerone Technology",
      link: "https://zeronetechnology.com.np/",
      badges: [],
      title: "Full Stack Engineer",
      // logo: JojoMobileLogo,
      start: "2022",
      end: "Present",
      description:
        "Created dynamic web applications for diverse clients while transitioning into the role of project maintainer for existing projects. Continuously enhancing skills and delivering impactful solutions as a Full Stack Engineer since 2022.",
    },
    {
      company: "Freelancer",
      link: "",
      badges: [],
      title: "",
      // logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description: "Freelanced as a web developer.",
    },
    {
      company: "Zerone Technology",
      link: "https://www.zeronetechnology.com.np",
      badges: [],
      title: "Intern",
      // logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "Completed a 45-day internship, sub-merging myself in the world of web development, with a primary focus on Laravel. Thrived in a collaborative team environment, honing my skills and gaining valuable experience.",
=======
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
>>>>>>> demo
    },
  ],
  skills: [
    "PHP/Laravel",
<<<<<<< HEAD
    "JavaScript",
    "TypeScript",
    "MySQL",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GIT",
    "Linux",
    "Bash",
    "Docker",
  ],
  learning: ["Solidity", "Rust", "Go"],
  projects: [
    {
      title: "Pokhara Marathon",
      techStack: ["Laravel", "Bootstrap", "Blade"],
      description:
        "A web app for runners to register in race event with an intuitive admin dashboard to manage users, race registrations, certificates etc.",
      // logo: ConsultlyLogo,
      link: {
        label: "pokharamarathon.org",
        href: "https://app.pokharamarathon.org/",
      },
    },
    {
      title: "Rays Motors",
      techStack: ["React", "Styled Components", "Node.js", "MongoDB"],
      description: "A web app for ISUZU vehicle showroom.",
      // logo: ConsultlyLogo,
      link: {
        label: "raysmotors.com.np",
        href: "https://raysmotors.com.np/",
      },
    },
    {
      title: "Event Mate",
      techStack: ["College Project", "Laravel", "React"],
      description: "An event management web app.",
      // logo: YearProgressLogo,
      link: {
        label: "github.com",
=======
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
>>>>>>> demo
        href: "https://github.com/shivajichalise/eventmate",
      },
    },
    {
<<<<<<< HEAD
      title: "NRB Forex",
      techStack: ["Internal tool", "Custom Package", "Laravel"],
      description:
        "A laravel package to consume Nepal Rastra Bank's forex api.",
      // logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/kodefarmers/nrb-forex",
      },
    },
    {
      title: "Nepal Data",
      techStack: ["Internal tool", "Custom Package", "Laravel"],
      description:
        "A laravel package to get Nepal data (Provinces, Districts, Municipalities).",
      // logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/kodefarmers/nepaldata",
=======
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
>>>>>>> demo
      },
    },
    {
      title: "Snippy Snapy Suu",
      techStack: [
<<<<<<< HEAD
        "Side Project",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
        "Express.js",
      ],
      description: "A simple code snippet web app in developement.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
=======
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
>>>>>>> demo
        href: "https://github.com/shivajichalise/snippysnapysuu",
      },
    },
    {
      title: "Bola na bola",
      techStack: [
<<<<<<< HEAD
        "Side project",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "Socket.io",
        "Sequelize",
        "PostgreSQL",
        "React Hook Form",
      ],
      description: "A dead simple real time chat application.",
      // logo: YearProgressLogo,
      link: {
        label: "github.com",
=======
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
>>>>>>> demo
        href: "https://github.com/shivajichalise/bolanabola",
      },
    },
    {
<<<<<<< HEAD
      title: "Blockure",
      techStack: [
        "Side Project",
        "React",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Web3",
        "Solidity",
      ],
      description:
        "Developing a web3 API service for blockchain certificate generation and validation.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/blockure",
      },
    },
    {
      title: "Miraj Furniture",
      techStack: ["React", "Styled Components"],
      description: "A website for Miraj Furnitures. static",
      // logo: MonitoLogo,
      link: {
        label: "mirajfurniture.com.np",
        href: "https://mirajfurniture.com.np/",
      },
    },
    {
      title: "Shivaji Chalise",
      techStack: ["Side Project", "React"],
      description: "Personal website/blog for myself.",
      // logo: JarockiMeLogo,
      link: {
        label: "shivajichalise.com.np",
        href: "https://shivajichalise.com.np/",
      },
    },
    {
      title: "Yakeen Kapali",
      techStack: ["Side Project", "React", "Material UI"],
      description: "Personal website for my friend; a graphic designer.",
      // logo: JarockiMeLogo,
      link: {
        label: "yakeenkapali.com.np",
        href: "https://yakeenkapali.com.np/",
      },
    },
    {
      title: "Rustodo",
      techStack: ["Side Project", "Rust", "HTMX"],
      description:
        "A basic single-threaded web server with a todo list feature. No database is used. Add and delete todos from HashMap.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/rustodo",
      },
    },
    {
      title: "Rustcp",
      techStack: ["Side Project", "Rust"],
      description: "A very simple multi-threaded mpsc concurrent chat server.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/rust-tcp",
=======
      title: "Rays Motors",
      techStack: ["React", "Styled Components"],
      description: "Website for ISUZU vehicle showroom.",
      link: {
        label: "raysmotors.com.np",
        href: "https://raysmotors.com.np",
>>>>>>> demo
      },
    },
    {
      title: "Forex",
<<<<<<< HEAD
      techStack: ["Side Project", "Rust"],
      description:
        "Console program to consume Nepal Rastra Bank's Foreign Exchange Rates API.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
=======
      techStack: ["Rust"],
      description:
        "Console applicate to consume Nepal Rastra Bank's Foreign Exchange Rates API.",
      link: {
        label: "Foxex",
>>>>>>> demo
        href: "https://github.com/shivajichalise/forex",
      },
    },
    {
<<<<<<< HEAD
      title: "Gotcp",
      techStack: ["Side Project", "Go"],
      description: "A very simple multi user chat server.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/go-tcp",
      },
    },
=======
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
>>>>>>> demo
  ],
} as const;
