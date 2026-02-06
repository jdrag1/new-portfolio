
import { Mail, Linkedin, Github } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-white text-black py-24 scroll-mt-24 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-12 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact
            </h2>
            <p className="text-lg text-gray-600">
              Feel free to reach out!
            </p>
          </div>

          {/* RIGHT — Contact Links */}
          <div className="flex flex-col gap-6 items-center lg:items-start">

            {/* Email */}
            <a
              href="mailto:myemail@email.com"
              className="flex items-center gap-4 text-lg transition hover:text-black"
            >
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <Mail size={22} />
              </div>
              <span>myemail@email.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/myname"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg transition hover:text-black"
            >
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <Linkedin size={22} />
              </div>
              <span>linkedin.com/in/myname</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/myname"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg transition hover:text-black"
            >
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <Github size={22} />
              </div>
              <span>github.com/myname</span>
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jerald Paragas. All rights reserved.
        </div>

      </div>
    </section>
  )
}

export default Contact
