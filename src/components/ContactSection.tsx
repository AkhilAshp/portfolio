import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akhil.mekala8410@gmail.com",
      href: "mailto:akhil.mekala8410@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989139890",
      href: "tel:+91 7989139890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AkhilAshp",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akhil-mekala-jntu2k5/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:akhil.mekala8410@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
          <span className="text-gradient">Contact Me</span>
        </h2>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Contact Information Card */}
          <div className="border border-gray-700 rounded-xl p-6 sm:p-8 bg-dark-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">
              Get In Touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-neon-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col text-left min-w-0 flex-1">
                    <p className="text-gray-400 text-sm">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white hover:text-neon-teal transition-colors duration-300 break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white break-words">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links Card */}
          <div className="border border-gray-700 rounded-xl p-6 sm:p-8 bg-dark-card/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">
              Follow Me
            </h3>
            <p className="text-gray-400 mb-6 text-center lg:text-left">
              Connect with me on social media
            </p>
            <div className="flex justify-center lg:justify-start flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-teal hover:border-neon-teal transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Additional Call to Action */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-sm text-center lg:text-left">
                Let's collaborate on something amazing! Feel free to reach out for projects, opportunities, or just to say hello.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Only Combined Card Alternative */}
        <div className="block sm:hidden mt-8">
          <div className="border border-gray-700 rounded-xl p-6 bg-dark-card/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Contact
              </h3>
              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="mailto:akhil.mekala8410@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-neon-teal to-neon-blue rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="tel:+91 7989139890"
                  className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Phone"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Tap to get in touch instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};