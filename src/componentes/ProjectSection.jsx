import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Imagify – AI Text to Image Generator SaaS Website",
    description:
      "Imagify is a full-stack AI-powered application that transforms text prompts into stunning images within seconds. It features seamless integration with the ClipDrop API for high-quality image generation and uses the Razorpay Payment Gateway for secure transactions. Built with React, Tailwind CSS, Express.js, Node.js, and MongoDB, Imagify offers a fast, intuitive interface for users to unleash their creativity and manage payments with ease",
    image: "/public/projects/project 1.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "Motion.dev",
      "MongoDB",
      "AI",
      "ClipDrop API",
      "Razorpay Payment Gateway",
    ],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 2,
    title: "AI Resume Maker – Build Professional Resumes Instantly",
    description:
      "AI Resume Maker helps users generate tailored, professional resumes in minutes using AI. Just provide a brief about yourself, and the AI takes care of the rest. This full-stack application is developed using React, Tailwind CSS, daisyUI, and Spring Boot, with advanced language capabilities powered by Deepseek AI through the Ollama LLM model.",
    image: "/public/projects/project 2.png",
    tags: [
      "React",
      "Tailwind CSS",
      "daisy UI",
      "Spring Boot",
      "Deepseek AI",
      "Ollama LLM Model",
    ],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 3,
    title: "Apple India – E-commerce Website Clone",
    description:
      "A visually accurate and responsive front-end clone of the official Apple India website, built using HTML, Tailwind CSS, and JavaScript. This project replicates Apple’s iconic design, smooth user interactions, and product-focused layout. Ideal for showcasing front-end development skills, clean UI implementation, and responsive design techniques.",
    image: "/public/projects/project 3.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 4,
    title: "TripHub – Online Travel Journal",
    description:
      "A clean and modern travel website landing page created using HTML, CSS, and JavaScript. TripHub features a responsive layout, smooth navigation, and engaging visuals designed to inspire users to plan their next adventure. Perfect for showcasing UI design skills and static front-end development.",
    image: "/public/projects/project 4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    gitHubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I have worked on. Each project is a
          unique opportunity to showcase my skills and creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ayush08sahu"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
