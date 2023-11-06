"use client";
import React from "react";
import Image from "next/image";


const StepSession = () => {
    return (
        <>
            <div className="stepsSection" style={{backgroundColor: 'linear-gradient(to bottom, #4FC3F7, #1565C0)'}}>
                <div className="container">
                    <div className="stepsDetails">
                        <div className="headingData">
                            <h3 className="subHeading">Get started</h3>
                            <h2 style={{ color: 'white', textShadow: '2px 2px 8px #000000' }} className="heading">In few simple steps.</h2>
                        </div>
                        <div className="details">
                            <ul>
                                <li style={{ color: 'white' }}>
                                    <span>1.</span>Choose a course
                                    <br />
                                    that aligns with your goals.
                                </li>
                                <li style={{ color: 'white' }}>
                                    <span>2.</span>Learn new skills from
                                    <br />
                                    experienced specialists.
                                </li>
                                <li style={{ color: 'white' }}>
                                    <span>3.</span>Test your knowledge through
                                    <br />
                                    interactive assessments.
                                </li>
                                <li style={{ color: 'white' }}>
                                    <span>4.</span>Apply your newfound
                                    <br />
                                    skills in the real world.
                                </li>
                                <li style={{ color: 'white' }}>
                                    <span>5.</span>Set new goals to
                                    <br />
                                    continue your growth.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepSession;
