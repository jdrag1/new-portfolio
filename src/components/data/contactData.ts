import { Mail, Linkedin, Github } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define types
export interface ContactLink {
  icon: LucideIcon
  label: string
  href: string
  display: string
}

// Contact links data
export const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Send me an email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jeraldn17@gmail.com",
    display: "jeraldn17@gmail.com",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/jerald-paragas-722917343/",
    display: "linkedin.com/in/jerald-paragas",
  },
  {
    icon: Github,
    label: "View my GitHub profile",
    href: "https://github.com/jdrag1",
    display: "github.com/jdrag1",
  },
]

// Contact section content
export const contactContent = {
  sectionTitle: "Contact",
  description: "Feel free to reach out!",
  copyrightName: "Jerald Paragas",
}