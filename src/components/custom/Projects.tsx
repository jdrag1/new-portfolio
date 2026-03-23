import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronDown } from "lucide-react"
import { useState } from 'react'
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null)

  const handleProjectClick = (project: Project, index: number) => {
    // On mobile, toggle expanded card
    if (window.innerWidth < 1024) {
      setExpandedCardIndex(expandedCardIndex === index ? null : index)
    } else {
      // On desktop, open modal
      setSelectedProject(project)
    }
  }

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
                  onClick={() => handleProjectClick(project, index)}
                  isExpanded={expandedCardIndex === index}
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

      {/* Project Detail Modal - Desktop only */}
      <div className="hidden lg:block">
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
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
  onClick: () => void
  isExpanded: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  demoLink,
  sourceLink,
  onClick,
  isExpanded,
}) => {
  return (
    <motion.div 
      className="group rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent-main/50 cursor-pointer"
      whileHover={{ y: -6 }}
      onClick={onClick}
      animate={{ height: isExpanded ? 'auto' : 'auto' }}
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
        
        {/* Mobile: Expand indicator */}
        <div className="lg:hidden absolute bottom-2 right-2 bg-accent-main/90 rounded-full p-1.5">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} className="text-white" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-text-main group-hover:text-accent-light transition-colors">
          {title}
        </h3>

        {/* Description - Expandable on mobile */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 'auto' }}
        >
          <p className={`text-text-muted leading-relaxed text-sm ${isExpanded ? '' : 'line-clamp-2 lg:line-clamp-2'}`}>
            {description}
          </p>
        </motion.div>

        {/* Full description - Mobile only when expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="lg:hidden space-y-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-t border-border-subtle pt-3">
                <h4 className="text-xs font-semibold text-text-main mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {tech.map((techItem: string, i: number) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent-main/10 text-accent-light border border-accent-main/20"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack - Desktop only (collapsed view) */}
        {!isExpanded && tech.length > 0 && (
          <div className="hidden lg:flex flex-wrap gap-1.5">
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

// Project Modal component - Desktop only
interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-bg-card border border-border-subtle rounded-2xl max-w-2xl w-full my-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-elevated/80 backdrop-blur-sm border border-border-subtle hover:bg-bg-hover transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-text-main" />
          </button>

          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden rounded-t-2xl bg-bg-elevated">
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-text-main pr-8">
              {project.title}
            </h3>

            <p className="text-text-muted leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.tech.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-text-main mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent-main/10 text-accent-light border border-accent-main/20"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-accent-main px-4 py-2.5 text-white text-sm font-medium transition-all hover:bg-accent-dark hover:shadow-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>

              <motion.a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border-main px-4 py-2.5 text-sm font-medium text-text-main transition-all hover:bg-bg-hover hover:border-accent-main/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} />
                Source Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Projects