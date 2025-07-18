import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/*  */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl  font-semibold">
              Turning ideas into powerful apps, I code the logic and craft the
              look.
            </h3>

            <p className="text-muted-foreground">
              Specialize in building full-stack web applications using Java,
              Spring Boot for the backend, and React with Tailwind CSS for the
              frontend. My projects are driven by a strong understanding of
              RESTful APIs, secure architecture, and responsive UI design. I
              enjoy diving into new technologies, optimizing performance, and
              writing code that’s clean, maintainable, and scalable. I don’t
              just build apps — I solve problems through technology.
            </p>

            <p className="text-muted-foreground">
              As a developer, I thrive in environments where collaboration meets
              innovation. I believe that great software is built not just by
              writing good code, but by working with great people. I'm
              passionate about clean architecture, performance optimization, and
              creating user-centric solutions. My goal is to contribute to
              meaningful projects that create impact while continuously
              upgrading my skill set along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {/*  */}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Java | Spring Boot | React
                  </h4>
                  <p className="text-muted-foreground">
                    Full-stack developer skilled in Java, Spring Boot, React,
                    and Tailwind CSS, crafting clean and responsive web
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Ai Integrated WebApp
                  </h4>
                  <p className="text-muted-foreground">
                    I develop AI-powered web apps with Java and Spring Boot,
                    integrating machine learning models and APIs to deliver
                    intelligent and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I specialize in building project management web apps using
                    Java and Spring Boot, designed to help teams organize tasks,
                    track progress, and collaborate in real time. With clean
                    architecture and a smooth user experience, my apps simplify
                    workflows and enhance team productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
