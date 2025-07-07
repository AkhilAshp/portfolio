
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/AkhilAshp", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akhil-mekala-jntu2k5/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:akhil.mekala8410@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-dark-card/30 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; {currentYear} Mekala Akhil. All rights reserved.</p>
            <p className="text-sm mt-1">Built with ❤️ using React & Tailwind CSS</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-teal transition-colors duration-300 hover:scale-110 transform"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-neon-teal transition-colors duration-300"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
