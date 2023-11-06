"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import MobileSidebar from "./MobileSidebar";
import { useAuth } from './../app/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import { fetchData, logIn } from '../../src/functions';
import { getUserProgress } from '../../src/functions';
import signInWithDomainAndTokenId from "mango-domain-validate/sdk/domain-checker-sdk";
import QR from "../../public/qr.png"

const Navbar = () => {
  const auth = useAuth();
  const userDomain = new signInWithDomainAndTokenId();

  const [totalPercentage, setTotalPercentage] = useState(null);
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
      // const ftdata = await fetchData(domainTitle.toLowerCase(), domainId)

      const ftdata = await userDomain.validateUser(domainTitle.toLowerCase(), domainId);
      if (ftdata.data.success) {
        console.log(ftdata.data)
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

  useEffect(() => {
    async function getLevels() {
      const username = auth.user?.username;
      const levelData = await getUserProgress(username);
      if (levelData?.lessonprogress.module === 5) {
        let percentage = calculateOverallPercentage(levelData?.levels);
        setTotalPercentage(percentage.toFixed(1))
      }
    }

    function calculateOverallPercentage(data) {
      if (!data || !Array.isArray(data) || data.length === 0) {
        return 0;
      }
      let sum = data.reduce((acc, item) => acc + item.percentage, 0);
      return sum / data.length;
    }

    getLevels();
  }, [auth.user]);

  return (
    <>

      <div className="nav flex justify-between items-center px-7 max-sm:px-2 py-1 ">
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
                  ×
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
                  <div className="flex gap-2 max-[800px]:hidden">
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

        <div className="text-2xl text-[white] font-bold max-sm:text-center find">
          {/* CRYPTO AI EDUCATION Ra */}
          <img width="200px" height="50px" src="./images/portfolio-logo.png" alt="logo" />
        </div>
        <div className="flex gap-10 max-[1000px]:hidden">
          <Link href={'/'}>
            {/* border-b-2 border-white */}
            <div
              style={{ cursor: 'pointer' }}
              className="text-[white]
         hover:text-[#87ceeb] find"
            >
              Home
            </div>
          </Link>
          <div
            style={{ cursor: 'pointer' }}
            className="text-[white]
         hover:text-[#87ceeb] find"
          >
            AI
          </div>
          <div
            style={{ cursor: 'pointer' }}
            className="text-[white]
        hover:text-[#87ceeb] find"
          >
            BlockChain
          </div>
          <div
            style={{ cursor: 'pointer' }}
            className="text-[white]
       hover:text-[#87ceeb] find"
          >
            DeFi
          </div>
          <Link href={'/courses'}>
            <div
              style={{ cursor: 'pointer' }}
              className="text-[white]
       hover:text-[#87ceeb] find"
            >
              Courses
            </div>
          </Link>
        </div>
        <div className="flex gap-2 max-[1000px]:hidden">
          {/* <div
          className="text-sm font-medium max-sm:text-center border border-[#972fed]
         px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]"
        >
          Explore More
        </div> */}
          {auth?.user === null || auth?.user === undefined || !auth?.user ?
            (
              <>
                {/* <Link href={'/login'}>
                  <button className="button text-sm font-medium max-sm:text-center border border-[#972fed]
            px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80]"> Login
                  </button>
                </Link> */}
                {/* <Link href={'/signup'}> */}
                <button onClick={() => { setSignUpmodalOpen(true) }} style={{ color: 'white' }} className="button text-sm font-medium max-sm:text-center border border-[#972fed]
            px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find"> Sign up
                </button>
                {/* </Link> */}


                <button onClick={handleOpenModal} style={{ color: 'white' }} className="button text-sm font-medium max-sm:text-center  text-white
              px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find">
                  Login With USDT Domain
                </button>
              </>
            )
            :
            (
              // {totalPercentage}%
              <>
                {totalPercentage !== null ?
                  <div style={{ marginTop: 'auto', marginBottom: 'auto', color: '#a5b9df', justifyContent: "center", textAlign: 'center', fontSize: '13px', fontWeight: '400' }} >You Got <br />★★★
                  </div>
                  : ""
                }
                <div className='find' style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: '18px', fontWeight: '400', color: 'white' }} >{auth?.user.username.toUpperCase() || auth?.user.email.toUpperCase()}
                </div>

                <button style={{ color: 'white' }} className="button text-sm font-medium max-sm:text-center 
                 px-4 pt-2 pb-[6px] rounded-md active:opacity-[0.80] find" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
        </div>
        <div className="hidden max-[1000px]:flex">
          <MobileSidebar />
        </div>
        <style jsx>{`
       
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: red;
          margin-top: 5px;
        }

        .api-response {
          margin-top: 10px;
          border: 1px solid #ccc;
          padding: 10px;
          background-color: #f7f7f7;
        }
      `}</style>
      </div>
    </>
  );
};

export default Navbar;
