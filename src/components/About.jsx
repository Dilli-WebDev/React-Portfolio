const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-[#111] text-accent"
    >
      <div className="max-w-3xl mx-auto" data-aos="fade-right">
        <h2 className="text-3xl mb-6 font-semibold">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I'm a passionate frontend engineer and QA automation specialist who
          enjoys solving complex problems and crafting delightful user
          experiences. My goal is to combine clean code, functional UI, and
          automated testing to deliver quality at scale.
        </p>
      </div>
    </section>
  );
};

export default About;
