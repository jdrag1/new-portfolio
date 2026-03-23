import { Github, Linkedin, Mail } from "lucide-react"

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

const socialLinks: SocialLink[] = [
  {
    icon: <Mail size={20} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jeraldn17@gmail.com",
    label: "Email"
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/jerald-paragas-722917343/",
    label: "LinkedIn"
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/jdrag1",
    label: "GitHub"
  },
]

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed left-6 top-3/4 -translate-y-1/2 z-40 flex-col items-center gap-6">
      {/* Social Links */}
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="w-12 h-12 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-main hover:border-accent-main/50 hover:bg-bg-hover transition-all duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Vertical Line */}
      <div className="w-[2px] h-24 bg-border-subtle" />
    </div>
  )
}

export default SocialSidebar