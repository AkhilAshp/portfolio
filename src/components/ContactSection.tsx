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
    <section id="contact" className="section-padding bg-dark-card/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 animate-fade-in">
          <span className="text-gradient">Contact Me</span>
        </h2>

        <div className="mb-12 border border-gray-700 rounded-xl p-8 bg-dark-card/50">
          <div className="flex flex-col space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center sm:justify-start"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-teal to-neon-blue rounded-xl flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-gray-400 text-sm">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white hover:text-neon-teal transition-colors duration-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 mb-4">
            <p className="text-gray-400 mb-4">Follow me on social media</p>
            <div className="flex justify-center flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};
