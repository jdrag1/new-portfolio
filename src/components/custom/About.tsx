import { motion } from 'framer-motion'
import { Rocket, User, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import AnimatedSection from './AnimatedSection'

// Define types
interface AboutCard {
  icon: LucideIcon
  title: string
  description: string
}

// Props interface
interface AboutProps {
  sectionTitle?: string
  cards?: AboutCard[]
  characterImage?: string
  characterAlt?: string
  showCharacter?: boolean
}

// Default cards content
const DEFAULT_ABOUT_CARDS: AboutCard[] = [
  {
    icon: Rocket,
    title: "Proactive",
    description: "I’m a self-driven developer who takes initiative, actively solving problems and constantly learning new technologies.",
  },
  {
    icon: User,
    title: "User-Centered",
    description: "I care deeply about user experience, focusing on the purpose behind every feature I build.",
  },
  {
    icon: TrendingUp,
    title: "Adaptable",
    description: "I thrive in dynamic environments, viewing challenges and change as opportunities for growth",
  },
]

const About: React.FC<AboutProps> = ({
  sectionTitle = "About Me",
  cards = DEFAULT_ABOUT_CARDS,
  characterImage = "/I.png",
  characterAlt = "Jerald character",
  showCharacter = true,
}) => {
  return (
    <section
      id="about"
      className="relative bg-bg-main text-text-main py-20 scroll-mt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <AnimatedSection className="mb-0 -mt-8">
          <div className="text-center lg:text-left">
            <motion.p 
              className="text-accent-main text-xs font-semibold uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get to know me
            </motion.p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              {sectionTitle}
            </h2>
            <div className="h-1 w-16 bg-gradient-purple mt-4 mx-auto lg:mx-0 rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Character */}
          {showCharacter && (
            <AnimatedSection delay={0.2} className="hidden lg:flex justify-center lg:justify-start lg:pl-18">
              <div className="relative">
                {/* Animated glow */}
                <motion.div 
                  className="absolute inset-0 bg-accent-main/20 blur-3xl rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={characterImage}
                  alt={characterAlt}
                  className="relative w-48 lg:w-64 object-contain drop-shadow-2xl"
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </AnimatedSection>
          )}

          {/* Right - Info Cards */}
          <div className={`space-y-4 ${!showCharacter ? 'lg:col-span-2' : ''}`}>
            {cards.map((card: AboutCard, index: number) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <AboutCardComponent 
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Card component
interface AboutCardComponentProps {
  icon: LucideIcon
  title: string
  description: string
}

const AboutCardComponent: React.FC<AboutCardComponentProps> = ({ 
  icon: Icon, 
  title, 
  description 
}) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-bg-hover hover:border-accent-main/50"
      whileHover={{ y: -3 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-main/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
      />
      
      <div className="relative flex items-start gap-4">
        <motion.div 
          className="flex-shrink-0 w-11 h-11 rounded-lg bg-accent-main/10 flex items-center justify-center text-accent-main group-hover:bg-accent-main group-hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <Icon size={20} />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1.5 text-text-main group-hover:text-accent-light transition-colors">
            {title}
          </h3>
          <p className="text-text-muted leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About