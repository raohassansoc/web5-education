"use client";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import Courses from "../../components/Courses";
import Image from "next/image";
import React from "react";
import rightBanner from "../../../public/images/courses-banner.webp";
import CoursesLayout from "../../components/CoursesLayout";
import { useAuth } from '../AuthContext';

const Page = () => {
  const auth = useAuth();
  return (
    <div>

      {auth?.user === null || auth?.user === undefined || !auth?.user ?
        (
          <>
            <div className=" flex">
              <div className="w-[50%] bg-[#40054d] max-lg:w-full max-lg:py-36">
                <div className="flex items-center justify-end h-full w-full max-lg:justify-start max-lg:pl-24 max-[525px]:pl-1">
                  <div className="w-[100%] p-20">
                    <div className="text-[39px] text-white  font-medium leading-9">
                     You Need To Login First
                    </div>
                    <div className="text-white mt-6">
                      Learn 100% online with world-class universities
                    </div>
                    <div className="text-[35px] text-white flex mt-6">
                      Login and enjoy your courses.
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-[50%] max-lg:hidden">
                <Image src={rightBanner} alt="picture" />
              </div>
            </div>
          </>
        )
        :
        (
          <>

            <Banner />
            <CoursesLayout />
          </>
        )}


      {/* <Courses /> */}
    </div>
  );
};

export default Page;
