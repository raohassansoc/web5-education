"use client";
import React from "react";
import Image from "next/image";
import facebook from "../app/images/social/new/facebook.svg"
import instagram from "../app/images/social/new/instagram.svg"
import linkedin from "../app/images/social/new/linkedin.svg"
import twitter from "../app/images/social/new/twitter.svg"
const Footer = () => {
  return (
    <div className="border-t border-[#e2e2e2]">
      <footer id="footer" className="footer-module--footer--zWWiV">
        <div className="container">
          <div className="footer-module--footerData--T9cCW">
            <div className="footer-module--footerPageLinks---JsKo">
              <div className="footer-module--footerFacultyLinks--JwqOy">
                <span className="footer-module--sectionHeader--Cqm4f">
                  Skills
                </span>
                <div className="footer-module--facultyLinksPartitions--m7wJd">
                  <ul className="footer-module--facultyCourseLinks--ztstM">
                    <li>
                      <a>Design</a>
                    </li>
                    <li>
                      <a>Finance</a>
                    </li>
                    <li>
                      <a>Music</a>
                    </li>
                    <li>
                      <a>
                        Business &amp; Analytics
                      </a>
                    </li>
                    <li>
                      <a>Language</a>
                    </li>
                    <li>
                      <a>Photography</a>
                    </li>
                    <li>
                      <a>Marketing</a>
                    </li>
                    <li>
                      <a>Beauty</a>
                    </li>
                    <li>
                      <a>
                        Arts &amp; Hobbies
                      </a>
                    </li>
                    <li>
                      <a>
                        Health Wellness
                      </a>
                    </li>
                    <li>
                      <a>Technology</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-module--footerCompanyDetails--aIRz2">
                <span className="footer-module--sectionHeader--Cqm4f">
                  {/* Company */}
                </span>
                <ul>
                  <li>
                    <a rel="noindex nofollow">
                      About us
                    </a>
                  </li>
                  <li>
                    <a>
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="faq/index.html">FAQ</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-module--socialLinks--uDPPh">
              <div className="footer-module--footerLogo--5CQ5z">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <span className=" text-xl">CRYPTO AI EDUCATION</span>
                </a>
              </div>
              <div className="footer-module--footerLogoTagline--faXzU">
                <p>Your Future, Your Way</p>
              </div>
              <div className="footer-module--footerSlogan--QIp0I">
                <p>
                  Our courses are designed intelligently so you can crypto ai with
                  ease.
                </p>
              </div>
              <div className="footer-module--mediaLinks--udkLs">
                <div className="footer-module--socialIcons--pZvNB">
                  <a>
                    <Image
                      alt="Facebook Page"
                      src={facebook}
                      width={11}
                      height={20}
                    />
                  </a>
                </div>
                <div className="footer-module--socialIcons--pZvNB">
                  <a>
                    <Image
                      alt="instagram"
                      src={instagram}
                      width={18}
                      height={18}
                    />
                  </a>
                </div>
                <div className="footer-module--socialIcons--pZvNB">
                  <a>
                    <Image
                      alt="Linkedin"
                      src={linkedin}
                      width={19}
                      height={18}
                    />
                  </a>
                </div>
                <div className="footer-module--socialIcons--pZvNB">
                  <a>
                    <Image
                      alt="Twitter"
                      src={twitter}
                      height={20}
                      width={16}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-module--languageSection--w-UE+" />
        </div>
        <div className="footer-module--copyrightSection--khZeW">
          <div className="container">
            <div className="footer-module--copyrightData--SAJW7">
              <div className="footer-module--copyrights--VnAjs">
                <p>All rights reserved © 2023 Crypto AI Education</p>
              </div>
              <div className="footer-module--policyLinks--SwKDT">
                <a>Terms</a>
                <a>Privacy Policy</a>
                <a>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className=" body-font bg-[#02540] ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className=" text-xl">CRYPTO AI EDUCATION</span>
            </a>
            <p className="mt-2 text-sm text-gray">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#972fed]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2020
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className=" ml-1"
                target="_blank"
              ></a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
