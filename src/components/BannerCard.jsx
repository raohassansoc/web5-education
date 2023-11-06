"use client";
import React from "react";
import Image from "next/image";


const BannerCard = () => {
    return (
        <>
            <div className="homepage-module--subscribeSection--zLZ1m" style={{background: 'rgb(14, 131, 136)'}}>
                <div className="homepage-module--container--Ls-7E container">
                    <div style={{paddingBottom: "40px"}}>
                        <div className="subscribe-banner-container" style={{marginBottom: "0"}}>
                            <div className="subscribe-banner" >
                                <div className="subscribe-banner-left-section">
                                    <h2 style={{ color: 'white' }}>Actionable skills,</h2>
                                    <h3 style={{ color: 'white' }}>Infinite possibilities.</h3>
                                    <p style={{ color: 'white' }}>Unique lessons curated by in-house experts!</p>
                                </div>
                                <div className="subscribe-banner-right-section">
                                    <section>
                                        <div className="price-save">
                                            <h3 style={{ color: 'white' }}>What you will get:</h3>
                                        </div>
                                        <ul >
                                            <li style={{ color: 'white' }}>
                                                Choose from <span> courses</span> to learn.
                                            </li>

                                            <li style={{ color: 'white' }}>
                                                Schedule or <span>watch when you want.</span>
                                            </li>
                                            <li style={{ color: 'white' }}>
                                                Industry leading <span>customer support.</span>
                                            </li>
                                            <li style={{ color: 'white' }}>
                                                <span>Course materials</span> and <span>eCerts</span>{" "}
                                                available for purchase
                                            </li>
                                        </ul>
                                        <div className="subscribe-banner-price-section">
                                            {/* <div className="subscription-price monthly">
                                              <p />
                                              <span>&nbsp;</span>
                                              <p className="subText">&nbsp;/month</p>
                                          </div> */}
                                            {/* <div className="tryFree">
                                              <p>Try for FREE</p>
                                          </div> */}
                                        </div>
                                        <a
                                            className="subscrice-banner-cta"
                                            href="courses/index.html"
                                        >
                                            Start your Crypto Journey
                                        </a>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerCard;
