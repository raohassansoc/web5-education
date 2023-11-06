"use client";
import React from "react";
import Image from "next/image";
import facebook from "../app/images/social/new/facebook.svg"
import instagram from "../app/images/social/new/instagram.svg"
import linkedin from "../app/images/social/new/linkedin.svg"
import twitter from "../app/images/social/new/twitter.svg"
const Footer = () => {
  return (
    <>
      {/* Footer container */}
      <footer className=" text-center text-[#fffff] text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

        {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div style={{ background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)' }} className="px-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Tailwind Elements section */}
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                {/* Crypto Ai Course */}
                <img width="200px" height="50px" src="./images/portfolio-logo.png" alt="logo" />
              </h6>
              <p>
                Empower your blockchain learning journey by securing your own .USDT domain. Elevate your credibility, showcase your expertise, and create endless opportunities in the ever-evolving blockchain industry.
              </p>
            </div>
            {/* Products section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Blockchain
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Crypto
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  NFT
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  ERC-20
                </a>
              </p>
            </div>
            {/* Useful links section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Settings
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Help
                </a>
              </p>
            </div>
            {/* Contact section */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  FAQ
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Explanation
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200 para">
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*Copyright section*/}
        <div style={{ background: 'rgb(14, 131, 136)' }} className="bg-neutral-200 p-2 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href=""
          >
            Web5 Solution
          </a>
        </div>
      </footer>
    </>

  );
};

export default Footer;
