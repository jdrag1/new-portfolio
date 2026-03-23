import {
  Code2,
  Database,
  Server,
  Atom,
  FileCode2,
  GitBranch,
  Github,
  Braces,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define types
export interface Skill {
  name: string
  icon: LucideIcon
}

export interface ExperienceItem {
  role: string
  company: string
  date: string
  bullets: string[]
}

// Skills data
export const skills: Skill[] = [
  { name: "HTML / CSS", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "PHP", icon: Server },
  { name: "React Vite", icon: Atom },
  { name: "JavaScript", icon: FileCode2 },
  { name: "TypeScript", icon: Braces },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
]

// Experience data
export const experiences: ExperienceItem[] = [
  {
    role: "Frontend Web Developer Intern",
    company: "Monad Solution",
    date: "February 2025 – May 2025",
    bullets: [
      "Built authentication flows (login/registration) using React and TypeScript.",
      "Created role-based forms with React Hook Form and Zod for validation.",
      "Developed reusable, responsive UI components with Tailwind CSS from Figma.",
      "Integrated REST APIs for registration and address features.",
      "Collaborated via Git/GitHub to fix bugs and improve code quality.",
    ],
  },
]