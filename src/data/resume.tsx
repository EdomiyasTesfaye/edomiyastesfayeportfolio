import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Edomiyas Zelleke",
  initials: "Hammer",
  url: "https://edomiyastesfaye.vercel.app/",
  location: "Ethiopia, Addis Ababa",
  locationLink: "https://maps.app.goo.gl/qPB9jERYpxkHwJKJ6",
  description:
    "Full-stack developer, game designer, and AI innovator building educational, scientific, and fintech platforms.",
  summary:
    "I design and build high-impact projects like Hammerspacecraft Toolkit, Giyaa Market, and RavenFX LMS — merging technology, creativity, and education. Passionate about space science, gamified learning, and ethical AI, I craft scalable, user-centered systems powered by modern web technologies and strong design principles.",
  avatarUrl: "https://i.postimg.cc/K8WNjFH4/image.png",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Django",
    "Django REST Framework",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "TailwindCSS",
    "Shadcn UI",
    "Framer Motion",
    "Godot",
    "GDScript",
    "Game Development",
    "UI/UX Design",
    "Figma",
    "Photoshop",
    "Illustration",
    "Git",
    "GitHub",
    "APIs",
    "WebSockets",
    "Authentication Systems",
    "Ethical Hacking",
    "Penetration Testing",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "edomiyastesfaye321@gmail.com",
    tel: "+251944139443",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EdomiyasTesfaye",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/edomiyas-tesfaye",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EdomiyasTesfaye",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@EdomiyasTesfaye",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:edomiyastesfaye321@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hammerspacecraft Toolkit",
      href: "https://hammerspacecrafts.com",
      badges: ["Founder"],
      location: "Remote",
      title: "Founder & Full-stack Developer",
      logoUrl: "/hammerspacecraft.png",
      start: "2024",
      end: "Present",
      description:
        "Founded and developed a free educational platform dedicated to space science and technology. Includes an AI chatbot (Meudsa), blog center, search engine, library, and gamified task system with a reward system. Built with Django, Next.js, MongoDB, and TailwindCSS.",
    },
    {
      company: "Giyaa Market",
      href: "#",
      badges: ["Co-founder"],
      location: "Addis Ababa",
      title: "Full-stack Developer",
      logoUrl: "/giyaa.png",
      start: "2024",
      end: "Present",
      description:
        "Developing an e-commerce platform for Ethiopian markets that connects local sellers with buyers. Features search, product filtering, carting, wishlist, and secure authentication using Firebase and Next.js.",
    },
    {
      company: "Axsumet Game Studio",
      href: "#",
      badges: ["Indie"],
      location: "Remote",
      title: "Game Designer & Developer",
      logoUrl: "/axsumet.png",
      start: "2023",
      end: "Present",
      description:
        "Leads design and development of narrative-driven games inspired by African mythology using Godot. Focuses on storytelling, level design, and pixel art for immersive gameplay experiences.",
    },
  ],

  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "Buildspace S3, S4, S5, and Nights & Weekends",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Self-Taught",
      href: "https://github.com/EdomiyasTesfaye",
      degree: "Full-Stack Development, Game Design & Ethical Hacking",
      logoUrl: "/self.png",
      start: "2020",
      end: "Present",
    },
  ],

  certifications: [
    {
      title: "Ethical Hacking & Cybersecurity Fundamentals",
      issuer: "Cybrary / Self-Certified",
      year: "2021",
    },
    {
      title: "Full-Stack Web Development",
      issuer: "FreeCodeCamp / Self-Taught",
      year: "2022",
    },
    {
      title: "Buildspace Web3 & AI Bootcamps",
      issuer: "Buildspace",
      year: "2023-2024",
    },
  ],

  volunteer: [
    {
      organization: "Ethiopian Space Science Society (ESSS)",
      role: "Volunteer Program Coordinator",
      start: "2022",
      end: "2023",
      description:
        "Organized national programs promoting space science and STEM among youth. Supported summer camps and high school workshops focusing on astronomy and rocketry.",
    },
  ],

  projects: [
    {
      title: "Hammerspacecraft Toolkit",
      href: "https://hammerspacecrafts.com",
      dates: "2024 - Present",
      active: true,
      description:
        "An AI-powered educational platform offering free space science resources, interactive blogs, an AI chatbot (Meudsa), and gamified learning tasks. Designed for students and space enthusiasts.",
      technologies: [
        "Next.js",
        "Django",
        "MongoDB",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [{ label: "Visit", url: "https://hammerspacecrafts.com" }],
      image: "/projects/hammerspacecraft.png",
      video: "",
    },
    {
      title: "Giyaa Market",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Ethiopian e-commerce marketplace empowering local vendors to reach buyers online. Features product listings, secure authentication, search, and smooth UI with Tailwind and Shadcn UI.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "TypeScript",
      ],
      links: [],
      image: "/projects/giyaa.png",
      video: "",
    },
    {
      title: "RavenFX LMS",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Advanced Learning Management System (LMS) for selling and managing online courses. Includes payment gateway integration, user dashboard, and progress tracking.",
      technologies: ["Django", "Next.js", "PostgreSQL", "Stripe API"],
      links: [],
      image: "/projects/ravenfx.png",
      video: "",
    },
    {
      title: "TextMaster App",
      href: "#",
      dates: "2025",
      active: false,
      description:
        "Mobile app offering a library, Gmail login, AI chat assistant, and personalized learning. Built with Flutter and Firebase for cross-platform access.",
      technologies: ["Flutter", "Firebase", "Dart"],
      links: [],
      image: "/projects/textmaster.png",
      video: "",
    },
    {
      title: "HammerOSX",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Web-based operating system inspired by Linux desktop environments. Features multi-window UI, settings manager, file viewer, and system simulation.",
      technologies: ["Next.js", "TailwindCSS", "JavaScript"],
      links: [],
      image: "/projects/hammerosx.png",
      video: "",
    },
    {
      title: "Blood Bank Management System",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Web platform for doctors to manage donor and recipient data. Users can search profiles using unique IDs. Includes authentication and role-based access control.",
      technologies: ["Next.js", "MongoDB", "NextAuth", "TailwindCSS"],
      links: [],
      image: "/projects/bloodbank.png",
      video: "",
    },
    {
      title: "Digital Election System for Ethiopia",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Secure and transparent digital election management system for Ethiopia. Includes candidate verification, digital ID integration, and blockchain-backed vote validation.",
      technologies: ["Django", "Next.js", "PostgreSQL", "Web3.js"],
      links: [],
      image: "/projects/election.png",
      video: "",
    },
    {
      title: "Hammerspacecraft Rocket Project",
      href: "#",
      dates: "2024 - 2025",
      active: true,
      description:
        "Level 1 high-powered rocket built under the Hammerspacecraft initiative. Aims to reach 935 meters altitude using a custom motor and dual-stage booster configuration.",
      technologies: ["OpenRocket", "Cesaroni Motors", "Arduino", "Python"],
      links: [],
      image: "/projects/rocket.png",
      video: "",
    },
    {
      title: "Meudsa AI Chat System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "AI chatbot designed for science education, integrated with Hammerspacecraft Toolkit. Trained to provide intelligent, engaging responses across astronomy, physics, and rocketry.",
      technologies: ["Next.js", "OpenAI API", "Django REST Framework"],
      links: [],
      image: "/projects/meudsa.png",
      video: "",
    },
    {
      title: "Space News & Blog Center",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Curated news hub aggregating content from NASA, ESA, and SpaceX with newsletter subscriptions and a community blogging section.",
      technologies: ["Next.js", "RSS API", "TailwindCSS", "MongoDB"],
      links: [],
      image: "/projects/spacenews.png",
      video: "",
    },
    {
      title: "Axsumet Game Studio Projects",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description:
        "Collection of indie games inspired by African history and mythology. Built with Godot engine and features pixel art, storytelling, and tactical gameplay.",
      technologies: ["Godot", "GDScript", "Aseprite", "Figma"],
      links: [],
      image: "/projects/axsumet.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Buildspace Nights & Weekends",
      dates: "2023",
      location: "Online",
      description:
        "Built and launched real-world AI and full-stack projects with a global community. Focused on creative web applications, gamified learning, and real-world AI tools.",
      image: "/projects/buildspace.png",
      links: [],
    },
  ],
} as const;
