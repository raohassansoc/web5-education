"use client";
import React from "react";
import Image from "next/image";

import banner from "../app/images/home/new/learn-section/1212.png"
import bannerMob from "../app/images/home/new/learn-section/1212.png"

const CorporateSection = () => {
    return (
        <>
            <div className="corporateSection" style={{ background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)' }}>
                <div className="learnSection" style={{ background: 'linear-gradient(to bottom, #4FC3F7, #1565C0)' }}>
                    <h3 style={{ color: "white" }}>Learn together with</h3>
                    <h2 style={{ color: 'white' }}>Crypto AI for Enterprise!</h2>
                    <p style={{ color: 'white' }}>
                        Discover your courses to crypto-boost your team. Achieve your organization objectives.
                    </p>
                    <div className="learnDetails">
                        <div className="banner">
                            <Image
                                style={{ borderRadius: '20px' }}
                                className="hideOnMobile"
                                src={banner}
                                alt="banner-img"
                                width={635}
                                height={411}
                            />
                            <Image
                                style={{ borderRadius: '20px' }}
                                className="showOnMobile"
                                src={bannerMob}
                                alt="banner-img"
                                width={327}
                                height={212}
                            />
                        </div>
                        <div className="planDetails">
                            <p style={{ color: 'white' }}>Course Highlights:</p>
                            <ul className="planList">
                                <li style={{ color: 'white' }}>Diverse course selection</li>
                                <li style={{ color: 'white' }}>Expert instructors</li>
                                <li style={{ color: 'white' }}>Interactive learning</li>
                                <li style={{ color: 'white' }}>Real-world applications</li>
                                <li style={{ color: 'white' }}>Certification options</li>

                            </ul>
                            <a
                                target="_blank"
                                className="pinklargeCta"
                                rel="noreferrer"
                                style={{
                                    color: 'white',
                                    background: 'rgb(14, 131, 136)'
                                }}
                            >
                                Try Crypto AI Enterprise
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateSection;
