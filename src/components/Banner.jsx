"use client";
import Image from "next/image";
import React from "react";
import rightBanner from "../../public/images/courses-banner.webp";
import search from "../../public/images/search.svg";

const Banner = () => {
  return (
    <div className="flex">
      <div className="w-[50%] bg-[#2c0235] max-lg:w-full max-lg:py-36">
        <div className="flex items-center justify-end h-full w-full max-lg:justify-start max-lg:pl-24 max-[525px]:pl-1">
          <div className="w-[100%] p-20">
            <div className="text-[39px] text-white  font-medium leading-9">
              Learn new skills online with top educators
            </div>
            <div className="text-white mt-6">
              Learn 100% online with world-class universities
            </div>
            <div className="text-[39px] text-white flex mt-6">
              Enjoy your Blockchain Courses.
            </div>
            {/* <div className="flex mt-6">
              <input
                type="text"
                placeholder="What do want to learn?"
                className="pl-2"
              />
              <div className="text-white bg-[#972fed] p-2">Search</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-[50%] max-lg:hidden">
        <Image src={rightBanner} alt="picture" />
      </div>
    </div>
  );
};

export default Banner;
