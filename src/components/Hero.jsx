import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div data-aos="fade-up" data-aos-delay="100">
        <div className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="inline-block px-4 py-1 mb-4 border border-green-400 text-green-400 text-sm rounded-full tracking-widest"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          OPEN TO WORK
        </div>
        <h1
          className="text-4xl md:text-6xl font-light mb-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Hi, I'm Dilli Rao
        </h1>
        <p
          className="text-lg md:text-xl text-gray-400 mb-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Frontend Engineer & QA Automation Developer
        </p>
        <p
          className="text-sm text-gray-500 mb-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          📍 Chennai, India
        </p>
        <div
          className="flex justify-center space-x-6 mb-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border border-accent px-4 py-2 text-sm rounded hover:bg-accent hover:text-black transition"
          >
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent border border-accent px-4 py-2 text-sm rounded hover:bg-accent hover:text-black transition"
          >
            <FaGithub className="inline mr-2" /> GitHub
          </a>
        </div>
        <div
          className="flex justify-center space-x-6 text-3xl text-accent"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <FaReact title="React" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJsSquare title="JavaScript" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
