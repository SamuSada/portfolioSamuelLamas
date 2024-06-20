import React from "react";
import cvPdfFile from "../assets/cv_samuellamasmonje.pdf";

const HeaderComponent = () => {
  return (
    <header className="bg-base-300 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex-1 text-xl text-zinc-100">Portfolio made in Tailwind</div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="block md:inline-flex items-center text-zinc-100" href={cvPdfFile} target="_blank">
                Curriculum Vitae
                <svg
                  className="inline-block w-6 h-6 ml-2 text-gray-800 dark:text-zinc-100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
              </a>
            </li>
            <li className="relative">
              <details>
                <summary className="cursor-pointer text-zinc-100">Project Deploys</summary>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-1 p-2 bg-base-300 rounded-t-none z-50 w-40">
                  <li className="border-b-2 border-base-100">
                    <a
                      className="block p-2"
                      href="https://samusada-simplecoffeelisting.netlify.app/"
                      target="_blank"
                    >
                      Simple Coffee Listing
                    </a>
                  </li>
                  <li>
                    <a
                      className="block p-2"
                      href="https://timer-by-samuellamas.netlify.app/"
                      target="_blank"
                    >
                      Timer By Samuel Lamas
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
