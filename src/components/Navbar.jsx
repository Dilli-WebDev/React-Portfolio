import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Optional: Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="w-full pt-5 pb-10 relative z-50">
      <nav className="w-full flex items-center text-light-gray justify-between">
        <a
          href="#home"
          className="font-bold hover:text-white uppercase text-lg tracking-widest"
        >
          Dilli Rao D
        </a>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6 text-lg text-light-gray max-md:hidden">
          <a href="#work-experience" className="hover:text-white">
            Work
          </a>
          <a href="#Projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="hidden max-md:flex">
          {!isOpen && (
            <button
              className="text-white z-50"
              onClick={menuOpen}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-menu-2"
              >
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* 🌙 Dim + Blur Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={menuOpen}
        ></div>
      )}

      {/* 📱 Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-dark-bg text-white transition-transform duration-300 ease-in-out z-[999] flex flex-col px-6 py-11 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ❌ Close Icon */}
        <button
          type="button"
          onClick={menuOpen}
          className="text-white self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        {/* 🔗 Menu Items */}
        <ul className="flex flex-col text-light-gray text-3xl font-semibold mt-32 gap-5 text-center">
          <li>
            <a className="hover:text-white" href="/#work-experience">
              Work Experience
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="/#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
