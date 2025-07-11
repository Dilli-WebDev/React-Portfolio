import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <h2
        id="work-experience"
        className="font-bold text-lg tracking-widest text-white uppercase mb-10"
      >
        Work Experience
      </h2>
      <div className="flex flex-col w-full gap-14">
        <div className="flex w-full gap-10">
          <p className="text-light-gray whitespace-nowrap max-sm:hidden">
            2021-2025
          </p>
          <div className="flex flex-col">
            <p className="text-white text-lg font-semibold">
              QA Automation Engineer
            </p>
            <p className="text-light-gray mb-4">
              TCS . Full-time
              <span className="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">
                . (2023-2025)
              </span>
            </p>
            <p className="text-light-gray">
              For the past 4.6 Years, I have primarily working in Front-end
              testing using Selenium java in CucumberBDD and Maven and REST API
              testing using Postman and Intergration with Jenkins and currently
              learning Playwright JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
