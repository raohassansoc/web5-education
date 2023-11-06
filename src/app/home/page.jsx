"use client";
import { useState, useEffect } from 'react';
import React from "react";

import signInWithDomainAndTokenId from "mango-domain-validate/sdk/domain-checker-sdk";

import men from "../../../public/7.gif";
import search from "../../../public/images/search.svg";
import b1 from "../../../public/images/b-1.png";
import b2 from "../../../public/images/b-2.png";
import Image from "next/image";
import './style.css'

import FrontPage from '../../components/FrontPage';

import CourseImg from "../../../public/images/courses1.jpg";
import CourseImg2 from "../../../public/images/courses2.jpg";
import CourseImg3 from "../../../public/images/courses3.jpg";
import CourseImg4 from "../../../public/images/courses4.jpg";
import { useAuth } from "../AuthContext";
import { fetchData, logIn } from '../../functions';
import rightBanner from "../../../public/images/courses-banner.webp";
import QR from "../../../public/qr.png";

import VideoPlayer from '@/components/VedioPlayer';

const Page = () => {
  const auth = useAuth();
  const userDomain = new signInWithDomainAndTokenId();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domainTitle, setDomainTitle] = useState('');
  const [domainId, setDomainId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const [signupModalOpen, setSignUpmodalOpen] = useState(false);
  const [signUpStepTwo, setsignUpStepTwo] = useState(false);
  const [signUpStepThree, setsignUpStepThree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const handleLogout = () => {
    auth.logout();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDomainTitle('');
    setErrorMessage('');
    setApiResponse(null);
  };

  const handleSubmitModal = async (e) => {
    e.preventDefault();

    const domainRegex = /^[a-zA-Z0-9.-]+\.mmit$/;
    if (!domainRegex.test(domainTitle)) {
      setErrorMessage('Invalid domain format');
      return;
    }

    setIsLoading(true)
    try {
      // const ftdata = await fetchData(domainTitle.toLowerCase(), domainId);
      const ftdata = await userDomain.validateUser(domainTitle.toLowerCase(), domainId);
      console.log(ftdata.data)
      if (ftdata.data.success) {
        auth.login({ username: domainTitle.toLowerCase(), id: domainId });
        setApiResponse({ username: domainTitle.toLowerCase(), id: domainId });
        logIn(domainTitle.toLowerCase());
        handleCloseModal();
        setIsLoading(false);
      } else {
        setErrorMessage("Login Failed");
        // console.error('Error:', error);
        handleOpenModal();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error)
      handleOpenModal();
      setIsLoading(false);
      setErrorMessage("Login Failed");
    }

  };


  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Form submitted successfully');
      setErrors({});
      setsignUpStepTwo(true);
    } else {
      setErrors(newErrors);
    }

  };

  const val = [
    "Data Science",
    "WEB 3",
    "AI",
    "Prompt Engineering",
    "VFX",
    "Business",
    "Computer Science",
    "Data Model",
    "Langauge Model",
    "VR",
    "Neural Network",
    "Unity",
    "UI UX",
    "NLP",
  ];

  return (
    <div>
      {signupModalOpen && (
        <div className="modal">
          {isLoading ?
            <div className="loader">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
              <div className="bar4" />
              <div className="bar5" />
              <div className="bar6" />
              <div className="bar7" />
              <div className="bar8" />
              <div className="bar9" />
              <div className="bar10" />
              <div className="bar11" />
              <div className="bar12" />
            </div>
            :
            <div className="modal-content">
              <button className="close-button button border border-[#972fed]
                   px-4 pt-2 pb-[6px]" onClick={() => { setSignUpmodalOpen(false); setsignUpStepTwo(false); setsignUpStepThree(false) }}>
                ×
              </button>
              {signUpStepTwo ?
                <>
                  {signUpStepThree ?
                    <div className="pt-5 pb-5 paymentScreen">
                      <h1>Scan QR Code to Pay</h1>
                      <div className="qrCodeContainer">
                        {/* Placeholder for QR code image */}
                        <Image src={QR} alt="QR Code" width={200} height={200} />
                      </div>
                      <p className="instruction">Scan the QR code with your payment app to proceed.</p>
                    </div>
                    :
                    <div className="payment-form">
                      <h1 className="payment-header">Payment Required: $160</h1>
                      <p className="payment-description">To proceed, please complete the payment.</p>
                      <button
                        onClick={() => { setsignUpStepThree(true) }}
                        className="payment-button"
                        type="submit"
                      >
                        Next
                      </button>
                    </div>
                  }
                </>
                :
                <form className='pt-5 pb-5' onSubmit={handleSignUpSubmit}>
                  <h1>Sign Up</h1>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  {errors.name && <span className="error">{errors.name}</span>}

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  {errors.email && <span className="error">{errors.email}</span>}

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  {errors.password && <span className="error">{errors.password}</span>}

                  <button style={{ color: 'white' }} className=' button text-sm font-medium max-sm:text-center border border-[#972fed]
                   px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]' type="submit">Next</button>

                </form>}
            </div>
          }
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          {isLoading ?
            <div className="loader">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
              <div className="bar4" />
              <div className="bar5" />
              <div className="bar6" />
              <div className="bar7" />
              <div className="bar8" />
              <div className="bar9" />
              <div className="bar10" />
              <div className="bar11" />
              <div className="bar12" />
            </div>
            :
            <div className="modal-content">
              <button className="close-button button border border-[#972fed]
                   px-4 pt-2 pb-[6px]" onClick={handleCloseModal}>
                x

              </button>
              <form onSubmit={handleSubmitModal}>
                <h1>Login Form</h1>
                <label htmlFor="name">Domain:</label>
                <input
                  type="text"
                  value={domainTitle}
                  onChange={(e) => setDomainTitle(e.target.value)}
                  placeholder="abc.USDT"
                  required
                />
                <label htmlFor="name">Token ID:</label>
                <input
                  type="number"
                  value={domainId}
                  onChange={(e) => setDomainId(e.target.value)}
                  placeholder="12345678"
                  required
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <div className="flex gap-2">
                  <button style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', color: 'white' }} onClick={handleSubmitModal} className="button text-sm font-medium max-sm:text-center  text-white
                     px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]" type="submit">
                    Login
                  </button>

                </div>
              </form>
            </div>
          }
        </div>
      )}
      <div className="hero ">
        {/* max-lg:hidden */}
        <div className=" relative py-11 px-28 flex items-center justify-evenly max-lg:px-0 max-md:flex-wrap hero-crd">

          <div style={{ order: '2', marginBottom: 'auto' }} className="w-[50%] max-sm:w-[95%] max-sm:mt-3 herot">
            <h1 style={{ color: '#2c0235' }} className="text-[40px] text-center font-bold text-[#2c0235] mb-3 max-md:text-[30px] find ">
              Find Your Next AI Course.
            </h1>
            <div className="flex gap-2 ">

              {auth?.user === null || auth?.user === undefined || !auth?.user ?
                (
                  <>
                    <button style={{ width: '208px', fontSize: '15px', marginLeft: 'auto' }} onClick={() => { setSignUpmodalOpen(true) }} className="button text-sm font-medium max-sm:text-center border border-[#972fed]
              px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find"> Sign up
                    </button>
                    <button style={{ width: '208px', fontSize: '15px', marginRight: 'auto' }} onClick={handleOpenModal} className="button text-sm font-medium max-sm:text-center  text-white
                px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find">
                      Login With USDT Domain
                    </button>
                  </>
                )
                :
                (
                  <>
                    {/* <h1 className="text-[40px] font-bold text-[#2c0235] mb-3 max-md:text-[30px] find">Welcome {auth?.user.username.toUpperCase() || auth?.user.email.toUpperCase()}</h1> */}
                  </>
                )}
            </div>
          </div>
          {/* <div style={{ order: '1' }}>
            <Image style={{borderRadius:'540px',padding:'27px'}} src={men} width={520} height={'100%'} alt="pic" />
          </div> */}

        </div>
        {/* <div className="mob max-lg:mt-[10px] max-lg:visible relative py-11 px-28 flex items-center justify-evenly max-lg:px-0 max-md:flex-wrap">
          <div className='mb-20'>
            <Image src={men} width={520} height={'100%'} alt="pic" />
          </div>
          <div className="w-[50%] max-sm:w-[95%] max-sm:mt-3">
            <h1 style={{color:'#2c0235'}} className="find text-[40px] font-bold text-[#2c0235] mb-3 max-md:text-[30px] find">
              Find Your Next AI Course.
            </h1>
            <div  className="flex gap-2 ">
            
              {auth?.user === null || auth?.user === undefined || !auth?.user ?
                (
                  <>
                    <button style={{width:'50%'  , fontSize:'15px'}} onClick={() => { setSignUpmodalOpen(true) }} className="button text-sm font-medium max-sm:text-center border border-[#972fed]
              px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find"> Sign up
                    </button>
                    <button  style={{width:'50%' , fontSize:'15px'}} onClick={handleOpenModal} className="button text-sm font-medium max-sm:text-center  text-white
                px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find">
                      Login With MMIT Domain
                    </button>
                  </>
                )
                :
                (
                  <>
                    <h1 style={{marginLeft:'auto' , marginRight:'auto'}} className="text-[40px] font-bold text-[#2c0235] mb-3 max-md:text-[30px] ">Welcome {auth?.user.username.toUpperCase() || auth?.user.email.toUpperCase()}</h1>
                  </>
                )}
            </div>
          </div>
        
    
  </div>   */}
        {/* <div className="hidden side-bar">
      <div className="social-links">
        <img src="https://i.ibb.co/9NKTKHF/fb.png" alt="" />
        <img src="https://i.ibb.co/422KsjC/ig.png" alt="" />
        <img src="https://i.ibb.co/9ZqmptB/tw.png" alt="" />
      </div>
      
    </div>
    
    <div className="bubbles">
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
      <img src="https://i.ibb.co/Fgvxpjn/bubble.png" alt="" />
    </div> */}

      </div>

      <FrontPage />
    </div>
  );
};

export default Page;
