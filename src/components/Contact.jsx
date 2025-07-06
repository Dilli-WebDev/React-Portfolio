const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-20 text-center text-accent bg-[#111]"
    >
      <div data-aos="zoom-in">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          Have a project or want to collaborate? I'm just an email away.
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block bg-white text-black px-6 py-2 mt-4 rounded shadow hover:bg-accent hover:text-black"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
