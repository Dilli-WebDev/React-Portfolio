import profileImg from "../assets/profilePic.jpg";
import LinkedIn from "../assets/LinkedIn.svg";

const Hero = () => {
  return (
    <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
      {/* Profile image with gradient border */}
      <div className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
          <div className="w-full h-full bg-dark-bg rounded-full">
            <img
              src={profileImg}
              width="170"
              height="170"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-white border-4"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-light-gray font-bold text-[28px] tracking-[0.03em]">
          {/* Desktop & Mobile Inline Greeting with badge (shown only on md and above) */}
          <span className="text-white hidden md:flex items-center gap-3">
            Hey, This is Dilli.
            <span className="bg-green-600/20 text-green-600 text-sm px-3 py-1 rounded-full inline-flex items-center gap-2 hover:text-green-500 hover:bg-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Open to work
            </span>
          </span>
          {/* Mobile greeting only */}
          <span className="text-white block md:hidden">
            Hey, This is Dilli.
          </span>
          {/* Open to work badge only for mobile view */}
          <div className="block md:hidden mt-2 mb-2">
            <span className="bg-green-600/20 text-green-600 text-sm px-3 py-1 rounded-full inline-flex items-center gap-2 hover:text-green-500 hover:bg-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Open to work
            </span>
          </div>
          I'm an Automation Test Engineer
        </h1>

        {/* Location + Social Links */}
        <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-light-gray whitespace-nowrap hover:text-white"
            href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu"
          >
            🏠 Chennai, India.
          </a>
          <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-light-gray">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-1 items-center hover:text-white"
              href="https://www.linkedin.com/in/dilli-rao-dadi-578493180/"
            >
              <img
                alt="icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={LinkedIn}
              />
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-1 items-center hover:text-white"
              href="https://github.com/Dilli-WebDev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25Z"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
