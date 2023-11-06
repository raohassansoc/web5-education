"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

import img1 from "../app/images/courses/1.png"
import img2 from "../app/images/courses/2.png"
import img3 from "../app/images/courses/3.png"
import img4 from "../app/images/courses/4.png"
import img5 from "../app/images/courses/5.png"
import img6 from "../app/images/courses/6.png"


import { useRouter } from 'next/navigation';

import { getUserProgress } from '../functions';
import { useAuth } from '../app/AuthContext';



const CoursesCard = () => {
    const auth = useAuth();
    const router = useRouter();

    const [activeIndex, setActiveIndex] = useState(null);
    const [stage, setStage] = useState(null);
    const [module, setModule] = useState(null);
    const [lesson, setLesson] = useState(null);

    const faqData = [
        {
            question: 'Crypto',
            lesson: [{ name: "Crypto Lesson 1", module: 1 }, { name: "Crypto Lesson 2", module: 1 }, { name: "Crypto Lesson 3", module: 1, final: true }],
            module: 1,
            final: true
        },
        {
            question: 'Blockchain: Beginner',
            lesson: [{ name: "Beginner Lesson 1", module: 2 }, { name: "Beginner Lesson 2", module: 2 }, { name: "Beginner Lesson 3", module: 2, final: true }],
            module: 2,
            final: true
        }, {
            question: 'Blockchain: Intermediate',
            lesson: [{ name: "Intermediate Lesson 1", module: 3 }, { name: "Intermediate Lesson 2", module: 3 }, { name: "Intermediate Lesson 3", module: 3, final: true }],
            module: 3,
            final: true
        }, {
            question: 'Blockchain: Advanced',
            lesson: [{ name: "Advanced Lesson 1", module: 4 }, { name: "Advanced Lesson 2", module: 4 }, { name: "Advanced Lesson 3", module: 4, final: true }],
            module: 4,
            final: true
        }
    ];

    const navigate = (path, data) => {
        const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}`;
        router.push(`${path}${queryString}`);
    };

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const getUser = async (username) => {
        const userDetails = await getUserProgress(username);
        setModule(userDetails?.lessonprogress.module)
        setLesson(userDetails?.lessonprogress.lesson)
        setStage(userDetails?.lessons);
    }
    useEffect(() => {

        if (auth.user) {
            getUser(auth?.user.username.toLowerCase());
        }
    }, [auth.user]);

    if (auth.user) {
        getUser(auth?.user.username.toLowerCase());
    }

    return (
        <>

            <div className="homepage-module--newHomeSkills--A8+QL" style={{ background: 'rgb(14, 131, 136)' }}>
                <div className="homepage-module--container--Ls-7E container">
                    <section className="homepage-module--popularCourseContainer--rtVWL">
                        <div className="homepage-module--popularHeader--2xGmf">
                            <h2 style={{color: "white"}}>We’ve got</h2>
                            <div className="homepage-module--ViewAllCourses--JcQlC">
                                <h3 style={{ color: 'white' }}>Just the thing for you.</h3>
                                {/* <Link href={"/courses"}
                                    className="homepage-module--blueLargeCta--Rko0B library-brand-icon-new"
                                >
                                    View all courses
                                </Link> */}
                            </div>
                        </div>
                        <div className="homepage-module--contentRow--ehWtx">
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img1}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }} >
                                                    Crypto Basics
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Learn fundamental concepts, like blockchain, wallets, and cryptocurrencies, to kickstart your crypto journey.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img2}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>



                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }} >
                                                    Crypto Trading Strategies
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Master trading techniques, risk management, and market analysis for profitable cryptocurrency trading.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img3}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>



                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }}>
                                                    Blockchain Development
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Dive into blockchain coding, smart contracts, and decentralized app (DApp) development.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img4}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>



                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }}>
                                                    Crypto Investment Fundamentals
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Explore investment strategies, portfolio diversification, and long-term wealth building in the crypto space.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img5}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>



                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }} >
                                                    Crypto Security & Wallets
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Safeguard your digital assets with knowledge on wallet types, private keys, and security best practices.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <Image
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src={img6}
                                                    style={{
                                                        width: 500,
                                                        height: 300,
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>



                                        </div>

                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a style={{ color: 'white' }} >
                                                    DeFi & NFTs Demystified
                                                </a>
                                                <div />
                                            </div>

                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p style={{ color: 'white' }}>
                                                Understand decentralized finance (DeFi) and non-fungible tokens (NFTs) to explore innovative crypto applications.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <Link href={"/courses"}
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"

                                            >
                                                Start Now
                                            </Link>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"

                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="homepage-module--popularCard--yqbw6">
                                <div className="homepage-module--cardBox--QoWbT">
                                    <div className="homepage-module--popularCardImg--3IZM9">
                                        <div
                                            data-gatsby-image-wrapper=""
                                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained homepage-module--previewImg--i9urp"
                                        >
                                            <div style={{ maxWidth: 500, display: "block" }}>
                                                <img
                                                    alt=""
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='300' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                                                    style={{
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        position: "static"
                                                    }}
                                                />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                data-placeholder-image=""
                                                style={{
                                                    opacity: 1,
                                                    transition: "opacity 500ms linear",
                                                    backgroundColor: "#a8e8e8",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0
                                                }}
                                            ></div>
                                            <picture>
                                                <source
                                                    type="image/webp"
                                                    data-srcset="/static/457e969424d51f0c7e1ab06c47ac7f95/7a077/website-wide.webp 125w,/static/457e969424d51f0c7e1ab06c47ac7f95/8f027/website-wide.webp 250w,/static/457e969424d51f0c7e1ab06c47ac7f95/af253/website-wide.webp 500w"
                                                    sizes="(min-width: 500px) 500px, 100vw"
                                                />
                                                <img
                                                    data-gatsby-image-ssr=""
                                                    data-main-image=""
                                                    style={{ opacity: 0 }}
                                                    sizes="(min-width: 500px) 500px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    data-src="/static/457e969424d51f0c7e1ab06c47ac7f95/27f16/website-wide.jpg"
                                                    data-srcset="/static/457e969424d51f0c7e1ab06c47ac7f95/7e6ac/website-wide.jpg 125w,/static/457e969424d51f0c7e1ab06c47ac7f95/725a8/website-wide.jpg 250w,/static/457e969424d51f0c7e1ab06c47ac7f95/27f16/website-wide.jpg 500w"
                                                    alt="writing-20"
                                                />
                                            </picture>
                
                                        </div>
                                        <button className="homepage-module--playPreviewBtn--vUO5L">
                                            <span className="library-brand-icon-new">
                                                <i className="icon-new-Play1" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="homepage-module--popCardContent--tcuD5">
                                        <div className="homepage-module--cardInfo--tVqz0">
                                            <div className="homepage-module--popCourseName--T9iGW">
                                                <a href="courses/marketing/online-creative-writing-course/index.html">
                                                    Creative Writing
                                                </a>
                                                <div />
                                            </div>
                                            <div className="homepage-module--ratingContent--0mctr">
                                                <div className="homepage-module--popEnrollCount--K8E25">
                                                    74,536&nbsp;Students
                                                </div>
                                            </div>
                                        </div>
                                        <div className="homepage-module--popEnrollContent--iR3Qo">
                                            <p>
                                                Take your prose to the next level and discover how to
                                                write creative fiction and become a published author.
                                            </p>
                                        </div>
                                        <div className="homepage-module--popEnrollSection--ILwkq">
                                            <a
                                                className="homepage-module--popEnrollCta--FC9vp"
                                                rel="noindex nofollow"
                                                href="signup/index94c2.html?courseId=writing-20"
                                            >
                                                Start Now
                                            </a>
                                            <a
                                                className="homepage-module--popMoreCta--+ZpXL"
                                                rel="noindex nofollow"
                                                href="courses/marketing/online-creative-writing-course/index.html"
                                            >
                                                More info
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default CoursesCard;
