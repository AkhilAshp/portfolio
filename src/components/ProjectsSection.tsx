
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      name: "AI Online Learning App",
      type: "Web Development",
      description:
        "AI-powered platform that builds custom course structures based on topic difficulty, number of chapters, and content type (text and/or YouTube videos). Includes modular learning paths and visual progress tracking per topic.",
      technologies: ["Next.js", "Tailwind CSS", "NeonDb", "Gemini AI"],
      github: "https://github.com/AkhilAshp/online-learning-platform",
      demo: "https://online-learning-platform-nu.vercel.app",
      featured: true
    },
    {
  name: "PDF Notes Taker",
  type: "Full Stack / AI Application",
  description:
    "AI-powered PDF note-taking platform that indexes uploaded documents and generates structured summaries. Includes an integrated PDF viewer, rich text editor for organizing notes, and secure user authentication, enabling users to efficiently study and extract insights from large PDFs.",
  technologies: [
    "Next.js",
    "Google Generative AI",
    "Tailwind CSS",
    "Convex",
    "Clerk",
    "React"
  ],
  github: "https://github.com/AkhilAshp/ai-pdf-note-taker",
  demo: "", // add live link later if deployed
  featured: true
},

    {
  name: "Insurance Customer Segmentation",
  type: "Data Science / Machine Learning",
  description:
    "Segmented insurance customers into meaningful groups and identified outliers for risk assessment. Applied dimensionality reduction, clustering, and evaluation metrics to generate actionable business insights for targeted marketing and customer profiling.",
  technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  github: "https://github.com/yourusername/insurance-segmentation", // update if available
  demo: "", // optional, leave blank if no live demo
  featured: false
}
,
    {
      name: "Credit Card Customer Segmentation",
      type: "Machine Learning",
      description:
        "Machine learning system to segment credit card customers into behavioral and risk-based groups. Achieved a silhouette score of 0.63, enabling actionable insights for targeted marketing, credit optimization, and fraud detection.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "", // add if you have a repo
      demo: "",
      featured: false
    },
    {
      name: "Diabetes Predictor",
      type: "Machine Learning",
      description:
        "ML model that predicts diabetes risk with 85% accuracy using patient health metrics. Includes feature scaling, model training, evaluation, and patient outcome prediction.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "", // add if you have a repo
      demo: "",
      featured: false
    },
    {
      name: "WanderLust",
      type: "Web Development",
      description:
        "Full-stack rental app where users can add, view, and manage property listings. Includes responsive forms with client-side validation and server checks using Joi, styled with Bootstrap. Backend built with reusable middleware and API routes with clear error handling.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Joi"],
      github: "https://github.com/AkhilAshp/WanderLust",
      demo: "https://wanderlust-production.up.railway.app",
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
