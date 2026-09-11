import logo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 md:pt-16 pb-12">
        {/* Main Content Layout */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-16 items-center text-center md:items-start md:text-left">
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-7 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links with Bullet Separators for Mobile */}
            <div className="flex items-center justify-center md:justify-start gap-2 pt-1 text-xs font-medium text-gray-600">
              <a href="#github" className="hover:text-black transition-colors">
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a href="#twitter" className="hover:text-black transition-colors">
                Twitter
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="#linkedin"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Columns (Hidden on mobile to match minimal mobile screenshot, visible on md+) */}
          <div className="hidden md:block">
            <h6 className="text-xs font-bold text-gray-900 tracking-wider mb-4 uppercase">
              PRODUCT
            </h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-gray-900 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h6 className="text-xs font-bold text-gray-900 tracking-wider mb-4 uppercase">
              COMPANY
            </h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-gray-900 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h6 className="text-xs font-bold text-gray-900 tracking-wider mb-4 uppercase">
              LEGAL
            </h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Divider Line */}
        <div className="border-t border-gray-100 pt-6 flex flex-row items-center justify-between text-[11px] sm:text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#privacy"
              className="hover:text-gray-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
