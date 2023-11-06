"use client";
import React from "react";
import Image from "next/image";
import '../app/theme.css'

import BannerCard from "./BannerCard";
import StepSession from "./StepSession";
import PilotSession from "./PilotSession";
import LearnSection from "./LearnSection";
import CorporateSection from "./CorporateSession";
import CoursesCard from "./CoursesCard";

const FrontPage = () => {
    return (
        <>
            <div id="___gatsby">
                <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
                    <div>

                        <main className="homepage-module--homePage--CGMKi">



                            <CoursesCard />

                            <CorporateSection />
                            <LearnSection />
                            {/* <PilotSession /> */}
                            {/* <StepSession /> */}
                            <BannerCard />
                        </main>

                    </div>
                </div>

            </div>

        </>
    );
};

export default FrontPage;
