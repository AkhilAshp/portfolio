
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      name: "WanderLust",
      type: "Web Development",
      description:
        "Full-stack rental app where users can add, view, and manage property listings. Includes responsive forms with client-side validation and server checks using Joi, styled with Bootstrap. Backend built with reusable middleware and API routes with clear error handling.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Joi"],
      github: "https://github.com/AkhilAshp/WanderLust", // update if needed
      demo: "https://wanderlust-production.up.railway.app", // update if needed
      featured: false
    },
    {
      name: "AI Online Learning App",
      type: "Web Development",
      description:
        "AI-powered platform that builds custom course structures based on topic difficulty, number of chapters, and content type (text and/or YouTube videos). Includes modular learning paths and visual progress tracking per topic.",
      technologies: ["Next.js", "Tailwind CSS", "NeonDb", "Gemini AI"],
      github: "https://github.com/AkhilAshp/online-learning-platform",
      demo: "https://online-learning-platform-nu.vercel.app",
      featured: false
    },
    {
      name: "Weather App",
      type: "Web Development",
      description:
        "Responsive web app that fetches and displays real-time weather data for any city.",
      technologies: ["React", "Material UI", "OpenWeather API"],
      github: "https://github.com/AkhilAshp/weather-app",
      demo: "https://weather-gg52d5ipu-akhil-mekalas-projects.vercel.app/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-card rounded-2xl p-8 border transition-all duration-300 hover:scale-105 animate-fade-in ${
                project.featured 
                  ? 'glow-border glow-border-hover lg:col-span-1' 
                  : 'border-gray-700 hover:border-neon-teal/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <span className="text-neon-blue text-sm font-medium px-3 py-1 bg-neon-blue/20 rounded-full">
                    {project.type}
                  </span>
                </div>
                {project.featured && (
                  <div className="text-neon-teal text-xs font-semibold px-2 py-1 border border-neon-teal/30 rounded-full">
                    FEATURED
                  </div>
                )}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                {project.demo && project.name !== "WanderLust" && (
                  <Button
                    size="sm"
                    className="bg-neon-teal hover:bg-neon-blue text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
