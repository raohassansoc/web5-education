"use client";
import React from "react";
import Image from "next/image";

import companyLogos from "../app/images/home/new-project/company_logos.png"
import companyLogosMob from "../app/images/home/new-project/company_mobile.png"
import trustPilot from "../app/images/home/new-project/trustpilot.png"
 
const PilotSession = () => {
    return (
        <>
            <div className="trustPilotSection">
                <div className="containerx">
                    <div className="brandsSection">
                        <div className="companyBrands">
                            <p>Creating lifelong learners for ambitious brands</p>
                            <Image
                                className="hideOnMobile"
                                src={companyLogos}
                                width={739}
                                height={31}
                                alt="Company"
                            />
                            <Image
                                className="showOnMobile"
                                src={companyLogosMob}
                                width={305}
                                height={81}
                                alt="Company"
                            />
                        </div>
                        <div className="trustPilot">
                            <Image
                                src={trustPilot}
                                alt="..."
                                width={156}
                                height={29}
                            />
                            <p>Rated Excellent</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PilotSession;
