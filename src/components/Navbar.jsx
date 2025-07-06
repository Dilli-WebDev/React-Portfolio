import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["WORK", "PROJECTS", "CONTACT"];

  return (
    <header className="w-full pt-5 pb-10">
      <nav className="w-full flex items-center justify-between">
        <a
          className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
          href="/"
        >
          Dilli Rao Dadi
        </a>
        <ul className="hidden md:flex  space-x-6 text-sm font-light">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:underline">
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {open && (
          <ul className="absolute top-16 left-0 w-full bg-background p-4 space-y-4 text-center md:hidden z-50">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
