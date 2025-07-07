
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JNTUH University College of Engineering,Science and Technology Hyderabad",
      duration: "2022 - 2026",
      description: "CGPA : 8.80",
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior Kalasala, Hyderabad",
      duration: "2020 - 2022",
      description: "Boards: 97.5%",
      icon: <BookOpen className="h-8 w-8" />
    }
  ];

  // const achievements = [
  //   "Dean's List for Academic Excellence (2020-2022)",
  //   "Winner - University Hackathon 2021",
  //   "Published Research Paper on ML Optimization",
  //   "AWS Certified Solutions Architect",
  //   "Google Cloud Professional Developer"
  // ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="text-gradient">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 border glow-border glow-border-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-neon-teal mt-1">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-neon-blue font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    {edu.duration}
                  </p>
                  <p className="text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient flex items-center justify-center gap-3">
              <Award className="h-8 w-8" />
              Achievements
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
