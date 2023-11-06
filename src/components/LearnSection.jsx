"use client";
import React from "react";
import Image from "next/image";

import img1 from "../app/images/home/new-project/a1.png"
import img2 from "../app/images/home/new-project/a2.png"
import img3 from "../app/images/home/new-project/a3.png"

const learnSection = () => {
    return (
        <>
            <div className="learnSection" style={{
                background: 'rgb(14, 131, 136)', margin: 0, width: "100%",
                maxWidth: "none", padding: "30px 80px"
            }}>
                <div className="containerx">
                    <h3 className="subHeading" style={{color: "white"}}>Learn with</h3>
                    <h2 style={{ color: 'white' }} className="heading">Everything you need.</h2>
                    <div className="learnerCards">
                        <div style={{ background: 'rgb(14, 131, 136)' }} className="learnerCardsDetails">
                            <div className="learnerImg">
                                <Image
                                    src={img1}
                                    alt="Learner"
                                    width={330}
                                    height={198}
                                />
                            </div>
                            <div style={{  color: 'white' }} className="learnerDetails">
                                <h3 style={{ color: 'white' }}>
                                    <span style={{color: "white"}}>Real-world skills</span> for online learners.
                                </h3>
                                <p style={{ color: 'white' }}>
                                    Unlock Real-world Skills for Online Learners!
                                    Every course we offer empowers you with actionable skills to transform your career, hobby, or life.
                                </p>
                            </div>
                        </div>
                        <div style={{ background: 'rgb(14, 131, 136)' }} className="learnerCardsDetails">
                            <div className="learnerImg">
                                <Image
                                    src={img2}
                                    alt="Learner"
                                    width={330}
                                    height={198}
                                />
                            </div>
                            <div className="learnerDetails">
                                <h3>
                                    <span style={{color: "white"}}>Learner</span>
                                </h3>
                                <p style={{ color: 'white' }}>
                                    Your Gateway to Lifelong Learning.
                                    At Crypto AI, we understand that learning is a lifelong journey. Start your Crypto AI journey today.
                                </p>
                            </div>
                        </div>
                        <div style={{ background: 'rgb(14, 131, 136)' }} className="learnerCardsDetails">
                            <div className="learnerImg">
                                <Image
                                    src={img3}
                                    alt="Learner"
                                    width={330}
                                    height={198}
                                />
                            </div>
                            <div className="learnerDetails">
                                <h3>
                                    <span style={{color: "white"}}>  Gain Recognition.</span>
                                </h3>
                                <p style={{ color: 'white' }}>

                                    Our accredited courses, developed in collaboration with industry experts, provide flexible learning opportunities. With our extensive content and personalized structure, you are on track to achieve your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default learnSection;
