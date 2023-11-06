"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import CourseImg from "../../public/images/courses1.jpg";
import Link from 'next/link';
import RatingStar from "./RatingStar";
import { useRouter } from 'next/navigation';

import { getUserProgress } from '../functions';
import { useAuth } from '../app/AuthContext';

import cryptoimg from "../app/images/coinBook.webp"
import blockchain from "../app/images/Blockchain-PNG-Isolated-HD.png"

const FAQ = () => {
    const auth = useAuth();
    const router = useRouter();

    const [activeIndex, setActiveIndex] = useState(null);
    const [stage, setStage] = useState(null);
    const [module, setModule] = useState(null);
    const [lesson, setLesson] = useState(null);

    const faqData = [
        {
            question: 'Crypto',
            lesson: [{ name: "Crypto Lesson 1", module: 1, img: cryptoimg }, { name: "Crypto Lesson 2", module: 1, img: cryptoimg }, { name: "Crypto Lesson 3", module: 1, img: cryptoimg, final: true }],
            module: 1,
            final: true
        },
        {
            question: 'Blockchain: Beginner',
            lesson: [{ name: "Beginner Lesson 1", module: 2, img: blockchain }, { name: "Beginner Lesson 2", module: 2, img: blockchain }, { name: "Beginner Lesson 3", module: 2, img: blockchain, final: true }],
            module: 2,
            final: true
        }, {
            question: 'Blockchain: Intermediate',
            lesson: [{ name: "Intermediate Lesson 1", module: 3, img: blockchain }, { name: "Intermediate Lesson 2", module: 3, img: blockchain }, { name: "Intermediate Lesson 3", module: 3, img: blockchain, final: true }],
            module: 3,
            final: true
        }, {
            question: 'Blockchain: Advanced',
            lesson: [{ name: "Advanced Lesson 1", module: 4, img: blockchain }, { name: "Advanced Lesson 2", module: 4, img: blockchain }, { name: "Advanced Lesson 3", module: 4, img: blockchain, final: true }],
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
            getUser(auth?.user.username);
        }
    }, [auth.user]);

    if (auth.user) {
        getUser(auth?.user.username.toLowerCase());
    }

    return (
        <div className="mt-20 p-4 faqContainer">
            <div>
                <h1 style={{ fontSize: '40px' }} >Courses</h1>
            </div>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    style={{ marginBottom: '10px' }}
                    className={`subscribe-banner-container faqItem ${activeIndex === index ? 'active' : ''}`}
                >
                    {index + 1 <= stage ?
                        <div
                            className="question"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h1 style={{ marginTop: '2px', marginBottom: '-15px', color: 'white' }}>{item.question}</h1>
                            <span className="mt-3 icon">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        :
                        <div className="question" >
                            <h1 style={{ marginTop: '2px', marginBottom: '-15px', color: 'white' }}>{item.question}</h1>
                            <span className="mt-3 icon">
                                🔒
                            </span>
                        </div>
                    }
                    <div className="flex flex-wrap m-2">
                        {activeIndex === index && (
                            <>
                                {item.lesson.map((item, index) => (
                                    <>
                                        {item.module == module ?
                                            <>
                                                {index + 1 <= lesson ?
                                                    <div onClick={() => navigate("/course-detail", { name: item.name, id: index + 1 })} key={index} className="cardstyle hoverbox  w-[30%] p-4 max-md:w-[50%] max-sm:w-[100%]">
                                                        <div className="w-full">
                                                            <Image src={item.img} alt="courses pic" className="w-full" />
                                                        </div>
                                                        <div className="p-1 text-[18px] leading-7">
                                                            {item.name}
                                                        </div>
                                                        <div className="p-1 text-[#fffffffa] my-2">By CRYPTO AI EDUCATION</div>
                                                        <div className="flex justify-between">
                                                            {/* <RatingStar />
                                                            <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div> */}
                                                        </div>
                                                    </div>
                                                    :
                                                    <div key={index} className=" cardstyle hoverbox w-[30%] p-4 max-md:w-[50%] max-sm:w-[100%]">
                                                        <div className="w-full">
                                                            <Image src={item.img} alt="courses pic" className="w-full" />
                                                        </div>
                                                        <div className="p-1 text-[18px] leading-7">
                                                            {item.name}
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <h1 style={{ fontSize: '20px' }}> 🔒 </h1>
                                                            {/* <RatingStar />
                                                    <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div> */}
                                                        </div>
                                                    </div>
                                                }
                                            </>
                                            :
                                            <div onClick={() => navigate("/course-detail", { name: item.name, id: index + 1 })} key={index} className="cardstyle hoverbox w-[30%] p-4 max-md:w-[50%] max-sm:w-[100%]">
                                                <div className="w-full">
                                                    <Image src={item.img} alt="courses pic" className="w-full p-10" />
                                                </div>
                                                <div className="p-1 text-[18px] leading-7">
                                                    {item.name}
                                                </div>
                                                <div className="p-1 text-[#fffffffa] my-2">By CRYPTO AI EDUCATION</div>
                                                <div className="flex justify-between">
                                                    {/* <RatingStar />
                                                    <div className="text-[14px] p-1 text-[#6A6A6A]">4.9 (120 Review)</div> */}
                                                </div>
                                            </div>
                                        }
                                    </>
                                ))}

                                <>
                                    {/* {item.final && (
                                <div className="p-20 hoverbox w-[25%] p-4 max-md:w-[50%] max-sm:w-[100%]">
                                    <div style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto' }}>

                                        <div style={{marginTop:'25%'}} className="text-[18px] leading-7">
                                            <h1>Final Quiz</h1>
                                        </div>
                                    <Link href={'/quiz'}>
                                        <button style={{ padding: '10px 30px', fontSize: '30px', width: '100%' }} className='button' >
                                            Start Quiz
                                        </button>
                                    </Link>
                                        <div style={{ textAlign: 'center' }} className="p-1 text-[#6A6A6A] my-2">Clear Your Quiz Exam and StepFarword</div>

                                    </div>
                                </div>
                             )} */}
                                </>
                            </>
                        )}
                    </div>

                </div>
            ))}


        </div>
    );
};

export default FAQ;
