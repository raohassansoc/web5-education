"use client"
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../app/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Image from 'next/image';
import image1 from "../images/product-page/new/review-section/Star-filled.png"

import { sessionUp } from '../../functions';
import { getUserProgress } from '../../functions';

import Crypto from "../../components/Courses/Crypto";
import Crypto2 from '../../components/Courses/Crypto2';
import Crypto3 from '../../components/Courses/Crypto3';

import BeginnerModule from "../../components/Courses/Beginner-Module";
import BeginnerModule2 from '../../components/Courses/Beginner-Module2';
import BeginnerModule3 from '../../components/Courses/Beginner-Module3';

import IntermideateModule1 from "../../components/Courses/Intermideat-Module";
import IntermediateModule2 from '../../components/Courses/Intermideat-Module2';
import IntermediateModule3 from '../../components/Courses/Intermideat-Module3';

import AdvancedModule from "../../components/Courses/Advanced-Module";
import AdvancedModule2 from '../../components/Courses/Advanced-Module2';
import AdvancedModule3 from '../../components/Courses/Advanced-Module3';

import CountBar from '../../components/CountBar';
import EnterpricePlan from "../../components/EnterprisePlan";
import BannerCard from '@/components/BannerCard';

import checkMark from "../../app/images/transparent.png"
import CourseImg from "../../app/images/bookcover.webp";

const CourseDetail = ({ searchParams }) => {
  const auth = useAuth();
  const router = useRouter();

  const [data, setData] = useState(JSON.parse(searchParams?.data));
  // console.log(data)
  const [stage, setStage] = useState(null);
  const [module, setModule] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(1);
  const navigate = (path, data) => {
    const queryString = `?data=${encodeURIComponent(JSON.stringify(data))}`;
    router.push(`${path}${queryString}`);
  };

  useEffect(() => {
    const getUser = async (username) => {
      const userDetails = await getUserProgress(username);
      await setStage(userDetails.lessons);
      await setModule(userDetails.lessonprogress.module)
      await setLesson(userDetails.lessonprogress.lesson)
    }
    if (auth.user) {
      getUser(auth?.user.username.toLowerCase());
    }
  }, [auth.user]);

  useEffect(() => {
    if (!auth.user) {
      // router.push('/');
      window.location.replace('/')
    }
  }, [auth?.user]);

  useEffect(() => {
    if (data.name === 'Crypto Lesson 1') { setCurrentStatus(11) }
    else if (data.name === 'Crypto Lesson 2') { setCurrentStatus(12) }
    else if (data.name === 'Crypto Lesson 3') { setCurrentStatus(13) }
    else if (data.name === 'Beginner Lesson 1') { setCurrentStatus(21) }
    else if (data.name === 'Beginner Lesson 2') { setCurrentStatus(22) }
    else if (data.name === 'Beginner Lesson 3') { setCurrentStatus(23) }
    else if (data.name === 'Intermediate Lesson 1') { setCurrentStatus(31) }
    else if (data.name === 'Intermediate Lesson 2') { setCurrentStatus(32) }
    else if (data.name === 'Intermediate Lesson 3') { setCurrentStatus(33) }
    else if (data.name === 'Advanced Lesson 1') { setCurrentStatus(41) }
    else if (data.name === 'Advanced Lesson 2') { setCurrentStatus(42) }
    else if (data.name === 'Advanced Lesson 3') { setCurrentStatus(43) }
  }, [data]);
  useEffect(() => {
    console.log({
      'module': module,
      'stage': stage
    })
  }, [module, stage]);
  return (
    <>


      <div id="___gatsby">
        <div style={{ outline: "none" }} tabIndex={-1} id="gatsby-focus-wrapper">
          <main className="coursepage-module--coursePage--0hdOZ">

            <div className="coursepage-module--ProContainer--37JQO container">

              <div id="overview" className="product-banner-section">
                <div className="container-product">
                  <div className="row">
                    <div className="col-md-6">

                      <div style={{ maxWidth: 500, display: "block" }}>
                        <Image
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src={CourseImg}
                          style={{
                            maxWidth: "100%",
                            height: '300',
                            width: '80%',
                            borderRadius: '31px 31px 31px 31px',
                            display: "block",
                            position: "static"
                          }}
                        />
                      </div>


                    </div>
                    <div className="col-md-6">
                      <div className="pt-10 banner-content">
                        <div className="content-head">
                          <h6 />
                          <h1 style={{ color: 'white' }}>{data.name} </h1>
                          {/* &amp; Technology Course */}
                        </div>
                        <div style={{ marginTop: '60px', marginBottom: '60px' }} className="content-info">
                          <p style={{ color: 'white' }}>
                            Empower your blockchain learning journey by securing your own .mmit domain. Elevate your credibility, showcase your expertise, and create endless opportunities in the ever-evolving blockchain industry. Take control of your digital presence and stand out as a dedicated blockchain enthusiast.
                          </p>
                        </div>
                        <div className="trial-section">
                          <div className="trial-day">
                            <div className="subscription-price monthly">
                              <p />
                              <span> </span>
                              {/* <p className="subText">/month</p> */}
                            </div>
                            {/* <p className="offer-text">Try for free</p> */}
                          </div>
                          <p className="limited-time-offer" />
                          {/* <div className="share-btnsection">
                                <a
                                  rel="noindex nofollow"
                                  className="banner-btn btn pink-btn"
                                >
                                  Start
                                </a>
                                <div />
                              </div> */}
                        </div>
                        <div className="check-info">
                          <div className="check">
                            <Image
                              src={checkMark}
                              data-src={checkMark}
                              alt="checkmark"
                              width="20px"
                              height="20px"
                            />
                            <p>Globally Recognised</p>
                          </div>
                          <div className="check">
                            <Image
                              src={checkMark}
                              data-src={checkMark}
                              alt="checkmark"
                              width="20px"
                              height="20px"
                            />
                            <p>No Commitment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {
                currentStatus === 11 ? <Crypto /> :
                  currentStatus === 12 ? <Crypto2 /> :
                    currentStatus === 13 ? <Crypto3 /> :
                      currentStatus === 21 ? <BeginnerModule /> :
                        currentStatus === 22 ? <BeginnerModule2 /> :
                          currentStatus === 23 ? <BeginnerModule3 /> :
                            currentStatus === 31 ? <IntermideateModule1 /> :
                              currentStatus === 32 ? <IntermediateModule2 /> :
                                currentStatus === 33 ? <IntermediateModule3 /> :
                                  currentStatus === 41 ? <AdvancedModule /> :
                                    currentStatus === 42 ? <AdvancedModule2 /> :
                                      currentStatus === 43 ? <AdvancedModule3 /> : null
              }



              {stage === 5 ? '' :
                <div className="m-10 flex">
                  {/* <div className="w-[50%] m-10 max-lg:hidden">
            
        </div> */}
                  <div className="w-[100%] max-lg:w-full max-lg:py-36">
                    {module > currentStatus ? "" :
                      <div className="flex items-center justify-end h-full w-full max-lg:justify-start max-lg:pl-24 max-[525px]:pl-1">
                        {Number(data.id) < Number(lesson) ?
                          <>
                            <button className="button bg-[#32b100] text-sm font-medium max-sm:text-center  text-white px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]">
                              Completed ✔
                            </button>
                          </>
                          :
                          <>
                            {data.id == 3 ?
                              <div className="p-20 hoverbox w-[100%] p-4 max-md:w-[100%] max-sm:w-[100%]">
                                <div style={{ marginTop: '15%', marginBottom: '15%', marginRight: 'auto', marginLeft: 'auto' }}>

                                  <div className="text-[18px] leading-7">
                                    <h1>Final Quiz</h1>
                                  </div>

                                  <button onClick={() => navigate('/quiz', currentStatus)} style={{ padding: '10px 30px', fontSize: '30px', width: '100%' }} className='button' >
                                    Start Quiz
                                  </button>

                                  <div style={{ textAlign: 'center' }} className="p-1 text-[#6A6A6A] my-2">Clear Your Quiz Exam and StepFarword</div>

                                </div>
                              </div>
                              :
                              <button onClick={() => { sessionUp(auth.user.username, module, Number(data.id + 1)).then(router.push(`/courses`)) }} className="button text-sm font-medium max-sm:text-center  text-white px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]">
                                Mark Comlete ✔
                              </button>
                            }
                          </>

                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <CountBar />
              <div />
              <div className="product-review-section" id="results">
                <div className="rating-section">
                  <div className="rating-header">
                    <p>Reviews</p>
                  </div>
                  <div className="rating-container">
                    <div className="rating">4.8/5</div>
                    <div className="stars">
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                    </div>
                  </div>
                </div>
                <p className="vr" />
                <div className="comment-section">
                  <div className="testimony">
                    <div className="testimony-img">
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <div className="rating">
                        <p>4.6</p>
                        <Image
                          src={checkMark}
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="testimony-content">
                      It is so helpful to go back and practice what I have learned
                      from the recordings and your help along the way has been
                      outstanding. Thank you so much.
                    </div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <div className="rating">
                        <p>4.3</p>
                        <Image
                          src={checkMark}
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="testimony-content">
                      The teachers at Shaw Academy are absolutely amazing, thank
                      you so much for everything you have helped me with so far!
                    </div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <div className="rating">
                        <p>4.4</p>
                        <Image
                          src={checkMark}
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="testimony-content">
                      Plenty of good and practical information! I know I am gonna
                      return to Shaw Academy for other courses.
                    </div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <Image
                        src={checkMark}
                        alt='...'
                      />
                      <div className="rating">
                        <p>4.7</p>
                        <Image
                          src={checkMark}
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="testimony-content">
                      I dont know programming or coding except knowing some of the
                      terms used. The detailed information helps me to catch up
                      and understand better.
                    </div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <Image
                        src={checkMark}
                        alt='...' />
                      <div className="rating">
                        <p>4.5</p>
                        <Image
                          src={checkMark}
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="testimony-content">
                      Its been very informative and easy to understand. Really
                      enjoying my classes.
                    </div>
                  </div>
                  <div className="review-bg-arrow-mob">
                    <Image
                      src={checkMark}
                      alt='...'
                    />
                  </div>
                </div>
              </div>
              <div />
              <div />
              <div />
            </div>
            <div className='pt-10 '>
              <BannerCard />
            </div>
            <EnterpricePlan />
          </main>
        </div>
      </div>





    </>
  )
}

export default CourseDetail