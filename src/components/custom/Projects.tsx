import { motion } from 'framer-motion'
import { ExternalLink, Github } from "lucide-react"
import AnimatedSection from './AnimatedSection'

// Import the data using relative path
import { projects } from "../data/projectsData"
import type { Project } from "../data/projectsData"

// Props interface
interface ProjectsProps {
  sectionTitle?: string
  projects?: Project[]
}

const Projects: React.FC<ProjectsProps> = ({
  sectionTitle = "Featured Projects",
  projects: projectsProps = projects,
}) => {
  return (
    <section
      id="projects"
      className="relative bg-bg-main text-text-main py-20 scroll-mt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <AnimatedSection className="mb-4 lg:mb-16">
          <div className="text-center lg:text-left">
            <motion.p 
              className="text-accent-main text-xs font-semibold uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              {sectionTitle}
            </h2>
            <div className="h-1 w-16 bg-gradient-purple mt-4 mx-auto lg:mx-0 rounded-full" />
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        {projectsProps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsProps.map((project: Project, index: number) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  demoLink={project.demoLink}
                  sourceLink={project.sourceLink}
                />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <p className="text-text-muted text-center text-base">
            No projects to display yet. Check back soon!
          </p>
        )}

      </div>
    </section>
  )
}

// Project Card component
interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  demoLink: string
  sourceLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  demoLink,
  sourceLink,
}) => {
  return (
    <motion.div 
      className="group rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent-main/50"
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-bg-elevated">
        <motion.img
          src={image}
          alt={`${title} project screenshot`}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-text-main group-hover:text-accent-light transition-colors">
          {title}
        </h3>

        <p className="text-text-muted leading-relaxed text-sm line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tech.map((techItem: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent-main/10 text-accent-light border border-accent-main/20 hover:bg-accent-main/20 transition-colors"
              >
                {techItem}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-accent-main px-3 py-2 text-white text-xs font-medium transition-all hover:bg-accent-dark hover:shadow-glow"
            aria-label={`View live demo of ${title}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={14} />
            Demo
          </motion.a>

          <motion.a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-border-main px-3 py-2 text-xs font-medium text-text-main transition-all hover:bg-bg-hover hover:border-accent-main/50"
            aria-label={`View source code of ${title}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={14} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects