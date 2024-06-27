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

export const RESUME_DATA = {
  name: "Shivaji Chalise",
  initials: "SC",
  location: "Pokhara, Nepal",
  locationLink: "https://www.google.com/maps/place/Pokhara",
  about:
    "Full Stack Web Developer with a strong focus on crafting clean, well-tested, and performant code.",
  summary:
    "Experienced full-stack web developer with over 2 years of expertise. Skilled in Laravel and Node.js for backend development, and proficient in React for dynamic frontend interfaces. Familiar with MySQL, MongoDB, and PostgreSQL for efficient database management. Additional strengths include Bash scripting, Git, Linux, and Docker, with ongoing learning in Rust and Solidity. Known for designing RESTful APIs and adept at comprehensive project development across frontend and backend technologies, committed to continuous improvement and staying current with industry trends.",
  avatarUrl:
    "https://raw.githubusercontent.com/shivajichalise/shivajichalise/main/images/square-dp-shivaji.png",
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
      degree: "Bachelors in Software Engineering",
      start: "2019",
      end: "Present",
    },
    {
      school: "Pokhara Engineering College",
      degree: "Diploma in Computer Engineering",
      start: "2017",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Zerone Technology",
      link: "https://zeronetechnology.com.np/",
      badges: [],
      title: "Intern → Full Stack Web Developer",
      // logo: JojoMobileLogo,
      start: "2022",
      end: "Present",
      description:
        "Created dynamic web applications for diverse clients while transitioning into the role of project maintainer for existing projects. Continuously enhancing skills and delivering impactful solutions as a Full Stack Web Developer since 2022.",
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
    },
  ],
  skills: [
    "PHP",
    "Laravel",
    "MYSQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GIT",
    "Linux",
    "Bash",
    "Docker",
    "Solidity",
  ],
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
      title: "Event Mate",
      techStack: ["College Project", "Laravel", "React"],
      description: "An event management web app.",
      // logo: YearProgressLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/eventmate",
      },
    },
    {
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
      },
    },
    {
      title: "Snippy Snapy Suu",
      techStack: [
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
        href: "https://github.com/shivajichalise/snippysnapysuu",
      },
    },
    {
      title: "Bola na bola",
      techStack: [
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
        href: "https://github.com/shivajichalise/bolanabola",
      },
    },
    {
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
        "A web3 project in development: an API service for blockchain-based certificate generation and validation.",
      // logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/shivajichalise/blockure",
      },
    },
  ],
} as const;
