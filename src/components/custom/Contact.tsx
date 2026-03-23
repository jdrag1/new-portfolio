import { motion } from 'framer-motion'
import type { LucideIcon } from "lucide-react"
import AnimatedSection from './AnimatedSection'

// Import the data using relative path
import { contactLinks, contactContent } from "../data/contactData"
import type { ContactLink } from "../data/contactData"

// Props interface
interface ContactProps {
  sectionTitle?: string
  description?: string
  contactLinks?: ContactLink[]
  copyrightName?: string
  copyrightYear?: number
}

const Contact: React.FC<ContactProps> = ({
  sectionTitle = contactContent.sectionTitle,
  description = contactContent.description,
  contactLinks: contactLinksProps = contactLinks,
  copyrightName = contactContent.copyrightName,
  copyrightYear = new Date().getFullYear(),
}) => {
  return (
    <section
      id="contact"
      className="relative bg-bg-elevated text-text-main pt-20 pb-5 scroll-mt-24 border-t border-border-subtle "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <AnimatedSection>
            <div className="text-center lg:text-left lg:-mt-24">
              <motion.p 
                className="text-accent-main text-xs font-semibold uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Get in touch
              </motion.p>
              <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold mb-4">
                {sectionTitle}
              </h2>
              <div className="h-1 w-16 bg-gradient-purple mb-2 mx-auto lg:mx-0 rounded-full" />
              <p className="text-base text-text-muted leading-relaxed max-w-md mx-auto lg:mx-0">
                {description}
              </p>
            </div>
          </AnimatedSection>

          {/* RIGHT — Contact Links */}
          <div className="flex flex-col gap-3">
            {contactLinksProps.length > 0 ? (
              contactLinksProps.map((link: ContactLink, index: number) => (
                <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                  <ContactLinkItem
                    icon={link.icon}
                    label={link.label}
                    href={link.href}
                    display={link.display}
                  />
                </AnimatedSection>
              ))
            ) : (
              <p className="text-text-muted text-sm">No contact information available.</p>
            )}
          </div>
        </div>

        {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border-subtle text-center">
            <p className="text-xs text-text-muted">
              © {copyrightYear} {copyrightName}. All rights reserved.
            </p>
          </div>

      </div>
    </section>
  )
}

// Contact Link component
interface ContactLinkItemProps {
  icon: LucideIcon
  label: string
  href: string
  display: string
}

const ContactLinkItem: React.FC<ContactLinkItemProps> = ({
  icon: Icon,
  label,
  href,
  display,
}) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-bg-card/50 backdrop-blur-sm hover:bg-bg-hover hover:border-accent-main/50 transition-all duration-300"
      aria-label={label}
      whileHover={{ x: 4, scale: 1.01 }}
    >
      <motion.div 
        className="w-11 h-11 rounded-lg bg-accent-main/10 flex items-center justify-center text-accent-main group-hover:bg-accent-main group-hover:text-white transition-all duration-300 flex-shrink-0"
        whileHover={{ rotate: 5, scale: 1.05 }}
      >
        <Icon size={20} />
      </motion.div>
      <span className="text-sm text-text-muted group-hover:text-text-main transition-colors font-medium">
        {display}
      </span>
    </motion.a>
  )
}

export default Contact