"use client";
import React from "react";
import Image from "next/image";
import CourseImg from "../../public/images/courses1.jpg";
import RatingStar from "./RatingStar";

const Courses = () => {
  return (
    <div className="flex flex-wrap m-2">
      <div className=" hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className=" p-1 text-[18px] leading-7">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
      <div className="hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
        <div className="w-full">
          <Image src={CourseImg} alt="courses pic" className="w-full" />
        </div>
        <div className="p-1 text-[18px] leading-6">
          Python for Data Science and Machine Learning
        </div>
        <div className="p-1 text-[#6A6A6A] my-2">by Mario Speedwagon</div>
        <div className="flex justify-between">
          <RatingStar />
          <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
