import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1sh9-pQmlKi57-cVCpZJvK7XZh8fvQU1y';

    link.download = 'Akhil_Mekala_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [{
    icon: Github,
    href: "https://github.com/AkhilAshp",
    label: "GitHub",
    color: "hover:text-neon-blue"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/akhil-mekala-jntu2k5/",
    label: "LinkedIn",
    color: "hover:text-neon-teal"
  }, {
    icon: Mail,
    href: "mailto:akhil.mekala8410@gmail.com",
    label: "Email",
    color: "hover:text-neon-purple"
  }];

  return (
    <section className="min-h-screen flex items-center section-padding pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8 animate-slide-in-left text-center lg:text-left order-1 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                
                <span className="text-white">Hello!, I'm </span>
                <span className="text-gradient">Mekala Akhil</span>{" "}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-neon-teal font-medium">
                Web Developer | AI Enthusiast
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I'm passionate about building innovative web applications and exploring new technologies to tackle real-world problems. I love crafting digital experiences that seamlessly blend creativity with cutting-edge technology, delivering impactful solutions and engaging user experiences.
              </p>
            </div>

            {/* Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-neon-teal to-neon-blue hover:from-neon-blue hover:to-neon-purple text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl glow-border-hover transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Contact Me
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('projects')} 
                variant="outline" 
                className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Projects
              </Button>
              
              <Button 
                onClick={downloadResume} 
                variant="outline" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Resume
              </Button>
            </div>
          </div>
          {/* Right side - Profile image and social handles */}
          <div className="flex flex-col items-center animate-slide-in-right order-2 lg:order-2 space-y-6">
            {/* Profile Image */}
            <div className="relative mt-16 lg:mt-0 sm:mt-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-neon-teal via-neon-blue to-neon-purple p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-6xl sm:text-8xl text-gray-300">
                    👨‍💻
                  </div>
                </div>
              </div>
              
              {/* Floating elements - Hidden on mobile for cleaner look */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-neon-teal rounded-full animate-float opacity-60"></div>
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-6 h-6 bg-neon-purple rounded-full animate-float opacity-40" style={{
                animationDelay: '1s'
              }}></div>
              <div className="hidden sm:block absolute top-1/2 -right-12 w-4 h-4 bg-neon-blue rounded-full animate-float opacity-50" style={{
                animationDelay: '2s'
              }}></div>
            </div>
            
            {/* Social handles - Centered below the image */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({
                icon: Icon,
                href,
                label,
                color
              }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-gray-400 ${color} transition-all duration-300 hover:scale-125 p-3 rounded-lg hover:bg-gray-800/50 bg-dark-card/30 backdrop-blur-sm border border-gray-800`} 
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};