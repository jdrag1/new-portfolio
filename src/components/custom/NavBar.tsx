import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

interface NavItem {
  label: string
  href: string
  isButton?: boolean
}

interface NavBarProps {}

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isButton: true },
]

const NavBar: React.FC<NavBarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Overlay - Backdrop */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-black/80 z-40
          transition-opacity duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMobileMenu}
      />

      {/* Main Navbar */}
      <nav className="
        w-full 
        border-b border-border-subtle
        bg-bg-main/95
        backdrop-blur-lg
        sticky top-0 z-50
      ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          
          {/* Left - Logo/Name */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#"
                  className="text-3xl font-bold text-text-main hover:text-accent-light transition-colors duration-200"
                >
                  Drejal
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-8">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink 
                    href={item.href}
                    className={
                      item.isButton
                        ? "px-4 py-2 bg-accent-main text-white rounded-lg hover:bg-accent-dark hover:shadow-glow transition-all duration-200 text-sm font-medium"
                        : "text-text-muted hover:text-text-main transition-colors duration-200 text-sm font-medium"
                    }
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative z-[60]"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-text-main transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Fixed Overlay (slides down on top) */}
      <div 
        className={`
          md:hidden fixed left-0 right-0 bg-[#0D0D0D] z-50 shadow-2xl
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isMobileMenuOpen ? 'top-[73px] opacity-100' : 'top-0 opacity-0 pointer-events-none'}
        `}
        style={{
          height: '70vh',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        {/* Mobile Navigation Menu */}
        <nav className="flex flex-col items-center justify-center h-full space-y-6 px-6">
          {/* Menu Items */}
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className={`
                text-3xl font-bold text-text-main hover:text-accent-main 
                transition-all duration-500
                ${isMobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 80 + 300}ms` : '0ms'
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Social Links - Mobile Only */}
          <div 
            className={`
              flex gap-4 mt-8 pt-6 border-t border-border-subtle
              transition-all duration-500
              ${isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'}
            `}
            style={{
              transitionDelay: isMobileMenuOpen ? `${NAV_ITEMS.length * 80 + 300}ms` : '0ms'
            }}
          >
            <a 
              href="mailto:jeraldn17@gmail.com"
              onClick={closeMobileMenu}
              className="w-11 h-11 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-main hover:border-accent-main/50 hover:bg-bg-hover transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jerald-paragas-722917343/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-11 h-11 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-main hover:border-accent-main/50 hover:bg-bg-hover transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/jdrag1" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-11 h-11 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-main hover:border-accent-main/50 hover:bg-bg-hover transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar