"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";

import ReactPlayer from "react-player";

const IntermediateModule3 = () => {

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
      question: 'Code-Based Agreements:',
      lesson: [{
        name: "Unlike traditional contracts that are often paper-based and require intermediaries to enforce terms, smart contracts use code to define the agreement's logic. This code is stored on a blockchain.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Decentralization:',
      lesson: [{ name: "Smart contracts run on decentralized networks like Ethereum, Binance Smart Chain, or other blockchain platforms. This means no single entity has complete control over the execution of the contract, making them resistant to censorship and tampering.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Automation',
      lesson: [{ name: "Once a smart contract is deployed on a blockchain, it can automatically execute actions based on predefined conditions. For example, a smart contract could release funds to a seller when a buyer confirms receipt of goods.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Trustless Execution:',
      lesson: [{ name: "Since smart contracts are executed by the blockchain network itself, participants can trust the outcome without relying on intermediaries. The code's execution is transparent and can be audited by anyone.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Immutability',
      lesson: [{ name: "Once deployed, smart contracts are nearly impossible to alter. This ensures that the terms of the contract remain consistent and tamper-proof.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Transparency',
      lesson: [{ name: "Every transaction and action carried out by a smart contract is recorded on the blockchain, providing a transparent and auditable history of events.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Cost-Efficiency',
      lesson: [{ name: "While there are costs associated with deploying and executing smart contracts, they can potentially eliminate the need for intermediaries, reducing costs in the long run.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Decentralized Applications (DApps)',
      lesson: [{ name: "A decentralized application, or DApp, is an application that runs on a decentralized network (usually a blockchain) rather than a centralized server. DApps aim to leverage the benefits of blockchain technology, including security, transparency, and decentralization.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Architecture:',
      lesson: [{ name: "DApps have a decentralized architecture, meaning they do not rely on a single central server. Instead, they use a network of nodes to host and run the application's code and data.", module: 7 }],
      module: 8,
      final: true
    },
    {
      question: 'Frontend and Backend:',
      lesson: [{ name: "Just like traditional applications, DApps have a frontend (user interface) and a backend (logic and data storage). However, the backend is often managed through smart contracts on a blockchain.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Open Source:',
      lesson: [{ name: "Many DApps are developed as open-source projects, allowing the community to review, contribute, and suggest improvements to the code.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Data Ownership:',
      lesson: [{ name: "DApps can give users more control over their data. Users' data might be stored on the blockchain in a pseudonymous or encrypted form, allowing them to retain ownership and control.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Tokens and Incentives:',
      lesson: [{ name: "Many DApps use tokens as a form of value exchange within the application. Users might earn tokens for contributing resources (like computing power) or performing specific actions.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Interoperability:',
      lesson: [{ name: "DApps can potentially interact with each other, creating an ecosystem of applications that collaborate and share data or functionality.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Challenges:',
      lesson: [{ name: "DApps face challenges such as scalability (the ability to handle a large number of users), user experience, and regulatory compliance. Popular examples of DApps include decentralized finance (DeFi) platforms, non-fungible token (NFT) marketplaces, decentralized social networks, and more. In summary, consensus mechanisms play a pivotal role in ensuring the integrity, security, and agreement within a blockchain network. Different mechanisms offer varying trade-offs in terms of security, energy efficiency, scalability, and decentralization, allowing blockchain systems to be tailored to the specific needs of different applications and environments.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Smart Contracts and Decentralized Applications (DApps)</h1>
          <p style={{ fontSize: '15px' }} >A smart contract is a self-executing contract with the terms of the agreement directly
            written into code. It automatically enforces, verifies, or executes the terms of the
            contract when predefined conditions are met. Smart contracts are usually
            associated with blockchain technology, which ensures their security, transparency,
            and immutability.</p>
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
        <div className="pt-10">
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course3/blockchain.webm' controls />
        </div>
      </div>
    </>


  );
};

export default IntermediateModule3;
