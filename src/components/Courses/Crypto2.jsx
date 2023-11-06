"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";

import ReactPlayer from "react-player";


const Crypto2 = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'Decentralized Wallets:',
      lesson: [{
        name: "A decentralized wallet, also known as a non-custodial wallet, is a software application or hardware device that allows users to securely store, manage, and transact with their cryptocurrencies and digital assets directly on the blockchain. These wallets give users full control over their private keys, which are essential for accessing and managing their funds. Decentralized wallets are a crucial component of the cryptocurrency ecosystem as they enable individuals to maintain sovereignty over their assets and engage in peer-to-peer transactions without relying on intermediaries.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Key Features of Decentralized Wallets:',
      lesson: [{ name: "Private Key Ownership: Users have sole ownership of their private keys, which are required to access and manage the wallet's contents.", module: 2 },
      { name: "Security: Decentralized wallets provide enhanced security as users have control over their private keys and funds. They are less vulnerable to hacks or data breaches that often target centralized exchanges or custodial services.", module: 2 },
      { name: "Control and Freedom: Users have the freedom to manage their assets as they see fit. They can choose to hold, trade, or transfer their cryptocurrencies without seeking permission from any third party.", module: 2 },
      { name: "Anonymity: Decentralized wallets typically offer a higher degree of anonymity since users do not need to provide personal information to use the wallet.", module: 2 },
      { name: "Accessibility: Users can access their decentralized wallets from various devices, including computers, smartphones, and hardware wallets, as long as they have their private keys or recovery seed phrases.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Custodial Wallets:',
      lesson: [{ name: "Custodial wallets, on the other hand, are wallets provided by third-party services like exchanges or wallet providers. In a custodial wallet, the service provider holds the user's private keys on their behalf. Users interact with their funds through the service's interface, and transactions are often faster and more convenient. However, this convenience comes at the cost of reduced control and potential security risks.", module: 3 }], module: 3,
      final: true
    }, {
      question: 'Key Differences between Custodial and Non-Custodial Wallets:',
      lesson: [{ name: "Private Key Ownership:", module: 4 },
      { name: "Decentralized Wallets: Users have full ownership and control of their private keys. Custodial Wallets: Private keys are held and managed by the service provider. Security:", module: 4 },
      { name: "Decentralized Wallets: Users bear the responsibility of securing their private keys, making them less susceptible to hacking of centralized databases. Custodial Wallets: Security relies on the service provider's measures, which might make users vulnerable to breaches if the provider is compromised. Control:", module: 4 },
      { name: "Decentralized Wallets: Users have complete control over their assets and can make decisions without relying on third parties.Custodial Wallets: Users rely on the service provider for access to and management of their funds, potentially facing restrictions or delays.Anonymity and Privacy:", module: 4 },
      { name: "Decentralized Wallets: Generally offer greater anonymity and privacy as users do not need to provide personal information to access the wallet. Custodial Wallets: Often require users to provide personal information for registration and verification. Ease of Use:", module: 4 },
      { name: "Decentralized Wallets: May have a steeper learning curve but provide more control and security. Custodial Wallets: Are often more user-friendly and convenient but may sacrifice some contro  and security.", module: 4 },
      { name: "In summary, decentralized wallets offer users enhanced control, security, and privacy over their cryptocurrency holdings through direct ownership of private keys. Custodial wallets prioritize convenience and ease of use but come with potential security and control trade-offs due to reliance on third-party providers. Users should consider their individual preferences, risk tolerance, and goals when choosing between these two types of wallets.", module: 4 }],
      module: 4,
      final: true
    },

  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Empowering Your Crypto Journey: Unveiling the World of Decentralized Wallets and
            Ownership Dynamics</h1>
          <p style={{ fontSize: '15px' }} >In this course, we will cover decentralized wallets and the key distinctions between custodial
            and non-custodial wallets.</p>
        </div>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{ marginBottom: '10px' }}
            className={`subscribe-banner-container faqItem ${activeIndex === index ? 'active' : ''}`}
          >

            <div
              className="question"
              onClick={() => toggleAccordion(index)}
            >
              <h1 style={{ marginTop: '2px', marginBottom: '2px', padding: '10px 10px', fontSize: '15px' }}>{item.question}</h1>
              <span className="mt-3 icon">
                {activeIndex === index ? '' : ''}
              </span>
            </div>

            <div>
              {activeIndex === index && (
                <div className="p-10">
                  {item.lesson.map((item, index) => (
                    <>
                      {/* text-[18px] */}

                      <div style={{ fontSize: '12px' }} key={index}>
                        <div style={{ color: 'white' }} className="p-1 leading-7">
                          {item.name}
                        </div>
                      </div>

                    </>


                  ))}



                </div>
              )}
            </div>

          </div>
        ))}

        <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course1/unveilingnft.webm' controls />
      </div>
    </>


  );
};

export default Crypto2;
