// Define types
export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  demoLink: string
  sourceLink: string
}

// Projects data
export const projects: Project[] = [
  {
    title: "Eye Panic",
    description: "This is an online clothing store I developed during my free time, inspired by famous fashion e-commerce platforms.",
    image: "/eye-panic2.png",
    tech: ["HTML", "PHP", "CSS", "MySQL"],
    demoLink: "https://eye-panic.infinityfreeapp.com/?i=1",
    sourceLink: "https://github.com/jdrag1/EYE-PANIC",
  },
  {
    title: "Helply Web",
    description: "A Cleaning Service Website I developed alongside senior developers, where I contributed to building the authentication features of the website.",
    image: "/helply-web.png",
    tech: ["React", "TypeScript", "HTML", "TailwindCSS"],
    demoLink: "https://helply-web.vercel.app/",
    sourceLink: "https://github.com/jdrag1/Internship-Helply-Web",
  },
  {
    title: "Mystic Adventure",
    description: "A 2D role-playing game featuring multi-map navigation, quest systems, and interactive NPCs I made with my capstone groupmates using RPG Maker MZ and React for the web version.",
    image: "/mystic-adventure.png",
    tech: ["React", "RPG Maker MZ", "TypeScript"],
    demoLink: "https://mq-web-green.vercel.app/",
    sourceLink: "https://github.com/jdrag1/MQ-Web",
  },
]