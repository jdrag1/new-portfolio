
import {
  Code2,
  Atom,
  Server,
  Database,
  PenTool,
  Calendar,
} from "lucide-react"

const skills = [
  { name: "HTML / CSS", icon: Code2 },
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Databases", icon: Database },
  { name: "Figma", icon: PenTool },
]

const experiences = [
  {
    role: "Frontend Web Developer Intern",
    company: "Monad Solution",
    date: "February 2025 – May 2025",
    bullets: [
      "Developed and maintained frontend features using React and TypeScript",
      "Built reusable and responsive UI components with Tailwind CSS",
      "Translated Figma designs into functional user interfaces",
    ],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-bg-main text-text-main py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-12 lg:px-24">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 tracking-wide text-center lg:text-left">
          EXPERIENCE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Skills */}
          <div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 rounded-full bg-white border border-border-subtle flex items-center justify-center text-accent-main transition-all duration-300 hover:shadow-accent-strong">
                    <skill.icon size={32} />
                  </div>
                  <span className="text-sm text-text-muted">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:shadow-accent-strong"
              >
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-text-muted font-medium">
                  {exp.company}
                </p>

                <div className="flex items-center gap-2 text-sm text-text-muted mt-2">
                  <Calendar size={16} />
                  <span>{exp.date}</span>
                </div>

                <ul className="mt-4 space-y-2 list-disc list-inside text-text-muted">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
