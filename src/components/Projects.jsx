const projects = [
  {
    title: "React Portfolio",
    description: "A portfolio site built with Vite, Tailwind and animations.",
    link: "#",
  },
  {
    title: "QA Test Suite",
    description:
      "BDD Cucumber framework with Selenium and Jenkins integration.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-background text-accent">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl mb-10 font-semibold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-sm text-accent underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
