import { personalInfo, socialLinks } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="text-base sm:text-lg font-medium tracking-tight flex items-center gap-2 mb-3 sm:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {personalInfo.name}
            </a>
            <p className="text-xs sm:text-sm text-muted">
              {personalInfo.role}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-muted uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-muted uppercase tracking-wider">
              Socials
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.email}
                  className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider my-6 sm:my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted text-center sm:text-left">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
