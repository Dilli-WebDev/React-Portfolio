import SeleniumIcon from "../assets/Selenium.svg";
import Java from "../assets/Java.svg";
import Cucumber from "../assets/Cucumber.svg";
import Maven from "../assets/Apache-Maven.svg";
import JavaScript from "../assets/JavaScript.svg";
import Playwright from "../assets/Playwrite.svg";
import Jenkins from "../assets/Jenkins.svg";
import Postman from "../assets/Postman.svg";
import PostgresSQL from "../assets/PostgresSQL.svg";
import IntelliJ from "../assets/IntelliJ-IDEA.svg";

const TechStack = () => {
  return (
    <div className="flex flex-col w-full mt-7">
      <h2 className="font-bold text-lg tracking-widest text-center text-white uppercase mb-10">
        Tech Stack
      </h2>
      <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
        {/* Selenium */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={SeleniumIcon}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Selenium</p>
        </button>
        {/* Maven */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Maven}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Maven</p>
        </button>
        {/* Cucumber */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Cucumber}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Cucumber</p>
        </button>
        {/* Java */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Java}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Java</p>
        </button>
        {/* JavaScript */}
        <button
          className="border-light-gray/50 hover:bg-gray-600 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={JavaScript}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>JavaScript</p>
        </button>
        {/* Playwright*/}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Playwright}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Playwright</p>
        </button>
        {/* Jenkins*/}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24
          text-light-gray border rounded-lg p-3 flex flex-col items-center
          justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Jenkins}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Jenkins</p>
        </button>
        {/* Postman */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24
          text-light-gray border rounded-lg p-3 flex flex-col items-center
          justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={Postman}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>Postman</p>
        </button>
        {/* PostgresSQL */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24
          text-light-gray border rounded-lg p-3 flex flex-col items-center
          justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={PostgresSQL}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>PostgresSQL</p>
        </button>
        {/* IntelliJ */}
        <button
          className="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24
          text-light-gray border rounded-lg p-3 flex flex-col items-center
          justify-center hover:text-white transition-all ease-in-out group"
          type="button"
        >
          <img
            className="transition-transform duration-300 group-hover:-translate-y-1"
            src={IntelliJ}
            alt="icon-Selenium"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
          />
          <p>IntelliJ</p>
        </button>
      </div>
    </div>
  );
};

export default TechStack;
