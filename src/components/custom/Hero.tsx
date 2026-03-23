import { motion } from 'framer-motion'
import { CustomButton } from './CustomButton'
import { ArrowRight } from 'lucide-react'

interface HeroContent {
  name: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  imageSrc: string
  imageAlt: string
}

interface HeroProps {
  content?: HeroContent
  onCtaClick?: () => void
}

const DEFAULT_HERO_CONTENT: HeroContent = {
  name: "Jerald",
  title: "Frontend Web Developer",
  description: "I build beautiful, web applications with React, TypeScript, and modern tools. Focused on creating exceptional user experiences.",
  ctaText: "Get in touch",
  ctaLink: "#contact",
  secondaryCtaText: "View projects",
  secondaryCtaLink: "#projects",
  imageSrc: "/src/assets/I2.png",
  imageAlt: "Hero visual",
}

const Hero: React.FC<HeroProps> = ({ 
  content = DEFAULT_HERO_CONTENT,
  onCtaClick 
}) => {
  const handleCtaClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (onCtaClick) {
      event.preventDefault()
      onCtaClick()
    }
  }

  return (
    <section className="relative h-screen flex items-center bg-bg-main overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-accent-main/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 -mt-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Right image - Mobile: First, Desktop: Second */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated glow */}
              <motion.div 
                className="absolute inset-0 bg-accent-main/30 blur-3xl rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image - Smaller on mobile */}
              <motion.img
                src={content.imageSrc}
                alt={content.imageAlt}
                className="relative w-32 sm:w-40 lg:w-64 xl:w-72 object-contain drop-shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Left content - Mobile: Second (centered), Desktop: First */}
          <motion.div 
            className="order-2 lg:order-1 space-y-4 lg:space-y-5 text-center lg:text-left lg:-mt-16 -mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-main/30 bg-accent-main/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-main opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-main"></span>
              </span>
              <span className="text-xs font-medium text-accent-light">
                Available for work
              </span>
            </motion.div>
            
            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="text-gradient inline-block">
                  {content.name}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 text-ellipsis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {content.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {onCtaClick ? (
                <CustomButton 
                  size="md"
                  className="group"
                  label={content.ctaText}
                  onClick={handleCtaClick}
                >
                  {content.ctaText}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </CustomButton>
              ) : (
                <CustomButton 
                  size="md"
                  className="group"
                  asChild
                >
                  <a href={content.ctaLink}>
                    {content.ctaText}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                </CustomButton>
              )}
              
              {content.secondaryCtaText && (
                <CustomButton 
                  size="md"
                  variant="outline"
                  asChild
                >
                  <a href={content.secondaryCtaLink}>
                    {content.secondaryCtaText}
                  </a>
                </CustomButton>
              )}
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-text-muted/30 flex items-start justify-center p-1.5"
        >
          <motion.div 
            className="w-1 h-1.5 bg-text-muted/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero