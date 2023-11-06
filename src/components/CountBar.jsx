"use client";
import React from "react";
import Image from "next/image";

import certified from "../app/images/product-page/new/content-section/shield.svg"

const CountBar = () => {
    return (
        <>
            <div className="count-bar">
                <div className="row">
                    <div className="col-md-6">
                        <div className="certified-section">
                            <div className="section">
                                <div className="what">
                                    <p>60,638</p>
                                </div>
                                <div className="word">Students</div>
                            </div>
                            <div className="section">
                                <div className="what levels-what">
                                    <div className="levels">
                                        <div className="level-1" />
                                        <div className="level-2" />
                                        <div className="level-3" />
                                    </div>
                                </div>
                                <div className="word">All Levels</div>
                            </div>
                            <div className="section">
                                <div className="what">
                                    <Image
                                        src={certified}
                                        data-src={certified}
                                        alt="shield"
                                        width="19px"
                                        height="22px"
                                    />
                                </div>
                                <div className="word">Certified</div>
                            </div>
                        </div>
                        <p className="hr" />
                    </div>
                    <div className="col-md-6">
                        <div className="percentage-count">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path
                                    className="circle-bg"
                                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className="circle"
                                    strokedasharray="0, 100"
                                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x={18} y="20.35" className="percentage">
                                    0%
                                </text>
                            </svg>
                            <span>Booked</span>
                        </div>
                        <div className="percnt-heading">
                            <h2>Most of this week’s places have been filled.</h2>
                            <p>Start your course now to guarantee your place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountBar;
