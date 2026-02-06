import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { useState } from "react"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="
      w-full 
      border-b border-border-subtle
      bg-bg-main/80 
      backdrop-blur-md 
      sticky top-0 z-50
      shadow-lg
    ">
      <div className="max-w-7xl mx-auto px-12 lg:px-24 py-4 flex items-center justify-between">
        
        {/* Left - Logo/Home */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#"
                className="text-2xl font-bold text-accent-main hover:text-text-main transition-colors duration-300"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-8">
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#about"
                className="text-text-main hover:text-accent-main transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#experience"
                className="text-text-main hover:text-accent-main transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#projects"
                className="text-text-main hover:text-accent-main transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#contact"
                className="px-6 py-2 bg-accent-main text-white rounded-md hover:bg-accent-dark hover:shadow-accent-strong transition-all duration-300 font-bold uppercase tracking-wider text-sm"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-accent-main transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent-main transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-accent-main transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/40 z-40">
          <div className="flex justify-end pt-6 px-12">
            <div className="w-64 bg-bg-main rounded-2xl border border-border-subtle overflow-hidden">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="flex flex-col gap-4 w-full p-8 items-center">

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink 
                      href="#about"
                      className="flex w-full justify-center text-text-main hover:text-accent-main transition-all text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink 
                      href="#experience"
                      className="flex w-full justify-center text-text-main hover:text-accent-main transition-all text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Experience
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink 
                      href="#projects"
                      className="flex w-full justify-center text-text-main hover:text-accent-main transition-all text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink 
                      href="#contact"
                      className="flex w-full justify-center text-text-main hover:text-accent-main transition-all text-lg py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
