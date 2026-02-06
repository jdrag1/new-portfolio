import React from "react"
import I from "@/assets/I.png"
import { Code2, Server, LayoutDashboard } from "lucide-react"

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-bg-main text-text-main py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-12 lg:px-24">

        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 tracking-wide text-text-main text-center lg:text-left">
          ABOUT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Character (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-start">
            <img
              src={I}
              alt="Jerald character"
              className="w-64 lg:w-80 object-contain drop-shadow-xl"
            />
          </div>

          {/* Right - Info Cards */}
          <div className="space-y-6">

            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:shadow-accent-strong">
              <div className="flex items-start gap-4">
                <div className="text-accent-main">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-text-main">
                    Frontend Developer
                  </h3>
                  <p className="text-text-muted">
                    I build responsive, accessible, and optimized user interfaces
                    using modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:shadow-accent-strong">
              <div className="flex items-start gap-4">
                <div className="text-accent-main">
                  <Server size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-text-main">
                    Backend Experience
                  </h3>
                  <p className="text-text-muted">
                    I have experience building fast and scalable back-end systems
                    and REST APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:shadow-accent-strong">
              <div className="flex items-start gap-4">
                <div className="text-accent-main">
                  <LayoutDashboard size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-text-main">
                    UI / UX Design
                  </h3>
                  <p className="text-text-muted">
                    I design clean landing pages and build reusable design systems
                    for consistent user experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
