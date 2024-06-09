import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-blue-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-0">
          <a
            href="https://www.facebook.com/cwrvc.binan"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Centennial Water Resource Venture Corporation
            </span>
          </a>
        </div>
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:white">
            © 2024{" "}
            <a
              href="https://www.facebook.com/cwrvc.binan"
              className="hover:underline"
            >
              Centennial Water Resource Venture Corporation
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex flex-col mt-4 justify-center sm:mt-0 gap-2">
            <a
              href="https://www.facebook.com/cwrvc.binan"
              className="flex flex-row text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>CWRVC</span>
            </a>
            <a
              href="#"
              className="flex flex-row text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 368.553 368.553"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M184.277,0c-71.683,0-130,58.317-130,130c0,87.26,119.188,229.855,124.263,235.883c1.417,1.685,3.504,2.66,5.705,2.67 c0.011,0,0.021,0,0.032,0c2.189,0,4.271-0.957,5.696-2.621c5.075-5.926,124.304-146.165,124.304-235.932 C314.276,58.317,255.96,0,184.277,0z M184.322,349.251C160.385,319.48,69.277,201.453,69.277,130c0-63.411,51.589-115,115-115 s115,51.589,115,115C299.276,203.49,208.327,319.829,184.322,349.251z"></path>{" "}
                      <path d="M184.277,72.293c-30.476,0-55.269,24.793-55.269,55.269s24.793,55.269,55.269,55.269s55.269-24.793,55.269-55.269 S214.753,72.293,184.277,72.293z M184.277,167.83c-22.204,0-40.269-18.064-40.269-40.269s18.064-40.269,40.269-40.269 s40.269,18.064,40.269,40.269S206.48,167.83,184.277,167.83z"></path>{" "}
                    </g>
                  </g>
                </g>
              </svg>
              <span className="text-white hover:text-gray-900 dark:hover:text-white">
                Address Unit 7 Commercial Bldg. La Solidaridad 2A Homes, Timbao
                Biñan Laguna 4024 Binãn, Philippines
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
