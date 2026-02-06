import React from "react"
import { ExternalLink, Github } from "lucide-react"

// Replace these with your real project images later
const projects = [
  {
    title: "Project A",
    description:
      "This is a project made to learn the latest languages by building an app.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    tech: ["React", "Node", "Express"],
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project B",
    description:
      "This is a project made to learn the latest languages by building an app.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tech: ["React", "Node", "Express", "Sass"],
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project C",
    description:
      "This is a project made to learn the latest languages by building an app.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: ["React", "Node", "Express"],
    demoLink: "#",
    sourceLink: "#",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-bg-main text-text-main py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-12 lg:px-24">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 tracking-wide text-center lg:text-left">
          PROJECTS
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border-subtle bg-white overflow-hidden transition-all duration-300 hover:shadow-accent-strong"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-accent-main px-4 py-2 text-white text-sm font-medium transition hover:bg-accent-dark"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>

                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium text-text-main transition hover:bg-accent-soft"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
