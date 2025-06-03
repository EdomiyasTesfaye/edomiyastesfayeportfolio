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
    "I build innovative platforms like Hammerspacecraft Toolkit and Giyaa Market, blending technology with education and digital services. Passionate about space science, fintech, and gaming, I create scalable, user-friendly solutions with a strong focus on UX/UI and community impact.",
  avatarUrl: "https://ibb.co/vx8Nm4pG",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Godot",
    "Game Development",
    "TailwindCSS",
    "UI/UX Design",
    "Photoshop",
    "Illustration",
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
        url: "https://www.linkedin.com/in/edomiyas-tesfaye", // ← update if needed
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EdomiyasTesfaye", // ← update if needed
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@EdomiyasTesfaye", // ← or Hammerspacecraft Toolkit's channel
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
      href: "#", // Add actual link
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
      href: "#", // Add actual link
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
      degree: "Buildspace S3, S4, S5, and Nights Weekend Projects",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Self-Taught",
      href: "https://github.com/EdomiyasTesfaye",
      degree: "Full-Stack Development & Game Design",
      logoUrl: "/self.png",
      start: "2020",
      end: "Present",
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
      links: [
        {
          type: "Website",
          href: "https://hammerspacecrafts.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
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
  ],

  hackathons: [
    {
      title: "Buildspace Nights & Weekends",
      dates: "2023",
      location: "Online",
      description:
        "Participated in multiple project-building sprints including AI tools, social apps, and game design. Built full-stack apps under time pressure and collaborated with global teams.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
