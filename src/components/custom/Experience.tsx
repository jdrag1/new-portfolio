import { motion } from 'framer-motion'
import { Calendar } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import AnimatedSection from './AnimatedSection'

// Import the data using relative path
import { skills, experiences } from "../data/experienceData"
import type { Skill, ExperienceItem } from "../data/experienceData"

// Props interface
interface ExperienceProps {
  sectionTitle?: string
  skills?: Skill[]
  experiences?: ExperienceItem[]
}

const Experience: React.FC<ExperienceProps> = ({
  sectionTitle = "Experience",
  skills: skillsProps = skills,
  experiences: experiencesProps = experiences,
}) => {
  return (
    <section
      id="experience"
      className="relative bg-bg-elevated text-text-main py-20 scroll-mt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <AnimatedSection className="mb-10 -mt-8">
          <div className="text-center lg:text-left">
            <motion.p 
              className="text-accent-main text-xs font-semibold uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My journey
            </motion.p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              {sectionTitle}
            </h2>
            <div className="h-1 w-16 bg-gradient-purple mt-4 mx-auto lg:mx-0 rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Skills (Desktop: Left, Mobile: Second) */}
          <div className="order-2 lg:order-1">
            <AnimatedSection delay={0.2}>
              <h3 className="text-xl font-semibold mb-6 text-text-main">Skills & Technologies</h3>
            </AnimatedSection>
            
            {skillsProps.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {skillsProps.map((skill: Skill, index: number) => (
                  <AnimatedSection key={skill.name} delay={0.05 * index}>
                    <SkillCard 
                      name={skill.name}
                      icon={skill.icon}
                    />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <p className="text-text-muted text-center text-sm">No skills to display</p>
            )}
          </div>

          {/* RIGHT — Experience Cards (Desktop: Right, Mobile: First) */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <h3 className="text-xl font-semibold mb-6 text-text-main">Work Experience</h3>
            </AnimatedSection>
            
            <div className="space-y-4">
              {experiencesProps.length > 0 ? (
                experiencesProps.map((exp: ExperienceItem, index: number) => (
                  <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                    <ExperienceCard 
                      role={exp.role}
                      company={exp.company}
                      date={exp.date}
                      bullets={exp.bullets}
                    />
                  </AnimatedSection>
                ))
              ) : (
                <p className="text-text-muted text-center text-sm">No experience to display</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// SkillCard component
interface SkillCardProps {
  name: string
  icon: LucideIcon
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <motion.div 
      className="group flex items-center gap-3 p-4 rounded-lg border border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:bg-bg-hover hover:border-accent-main/50 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <motion.div 
        className="w-9 h-9 rounded-lg bg-accent-main/10 flex items-center justify-center text-accent-main group-hover:bg-accent-main group-hover:text-white transition-all duration-300"
        whileHover={{ rotate: 5 }}
      >
        <Icon size={18} />
      </motion.div>
      <span className="text-sm font-medium text-text-muted group-hover:text-text-main transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

// ExperienceCard component
interface ExperienceCardProps {
  role: string
  company: string
  date: string
  bullets: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  date,
  bullets,
}) => {
  return (
    <motion.div 
      className="relative rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-bg-hover hover:border-accent-main/50"
      whileHover={{ y: -3 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-main/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative">
        <h3 className="text-lg font-semibold text-text-main mb-1">
          {role}
        </h3>

        <p className="text-accent-light font-medium text-base mb-2">
          {company}
        </p>

        <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
          <Calendar size={14} />
          <span>{date}</span>
        </div>

        {bullets.length > 0 && (
          <ul className="space-y-2">
            {bullets.map((bullet: string, i: number) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-2 text-text-muted leading-relaxed text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <span className="text-accent-main mt-1 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default Experience