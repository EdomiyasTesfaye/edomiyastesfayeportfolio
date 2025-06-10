import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Edomiyas Zelleke",
  initials: "Hammer",
  url: "https://edomiyastesfaye.vercel.app/",
  location: "Ethiopia, AA",
  locationLink: "https://maps.app.goo.gl/qPB9jERYpxkHwJKJ6",
  description:
    "I am a full-stack developer, game designer, and AI enthusiast with expertise in Django, Next.js, and Godot.",
  summary:
    "I build innovative platforms like Hammerspacecraft Toolkit and Giyaa Market, blending technology with education, fintech, and creative digital services. Passionate about space science, gamified learning, and ethical tech, I design scalable, community-driven systems with a strong UX/UI focus.",
  avatarUrl: "https://ibb.co/vx8Nm4pG",

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
    "Godot",
    "GDScript",
    "Game Development",
    "TailwindCSS",
    "Shadcn UI",
    "Framer Motion",
    "Figma",
    "UI/UX Design",
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
        name: "Youtube",
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
        "Created a free educational platform focused on space science for students, featuring an AI chatbot (Meudsa), blog center, video hub, and gamified learning system. Built using Django, Next.js, Tailwind, and MongoDB.",
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
        "Developing an e-commerce platform connecting local Ethiopian sellers with buyers. Built with Next.js, Tailwind CSS, and Firebase. Implements search, product listing, and secure authentication.",
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
        "Lead designer and developer of games inspired by African mythology using Godot engine. Focuses on storytelling, gameplay mechanics, and pixel art design.",
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
        "Organized and contributed to national outreach programs to promote space education among youth. Supported workshops and STEM camps for high school students.",
    },
  ],

  projects: [
    {
      title: "Hammerspacecraft Toolkit",
      href: "https://hammerspacecrafts.com",
      dates: "2024 - Present",
      active: true,
      description:
        "AI-powered learning platform offering space science education, blog content, and gamified tasks. Features a search engine, admin panel, and reward system.",
      technologies: [
        "Next.js",
        "Django",
        "MongoDB",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Giyaa Market",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "E-commerce platform for Ethiopian markets. Allows users to browse, search, and purchase locally listed products.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "TypeScript",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TextMaster App",
      href: "#",
      dates: "2025",
      active: false,
      description:
        "Mobile learning app with Gmail login, interactive course sections, textbook library, and AI chatbot integration.",
      technologies: ["Flutter", "Firebase", "Dart"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "HammerOSX",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Web-based Linux-inspired desktop simulation built with Next.js and Tailwind. Features multi-window layout, settings, and file viewer.",
      technologies: ["Next.js", "TailwindCSS", "JavaScript"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Blood Bank System",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Medical platform allowing doctors to manage donor data and users to search blood type profiles using unique IDs.",
      technologies: ["Next.js", "MongoDB", "NextAuth", "TailwindCSS"],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Buildspace Nights & Weekends",
      dates: "2023",
      location: "Online",
      description:
        "Built and shipped real-world full-stack projects under tight deadlines. Focused on AI tools, creative web apps, and gamified learning features.",
      image: "",
      links: [],
    },
  ],
} as const;
