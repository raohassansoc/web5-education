"use client";
import React from "react";
import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
import { useState, useEffect } from "react";

const BeginnerModule3 = () => {
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
      question: 'Proof of Authority (PoA)',
      lesson: [{ name: "PoA relies on a predefined set of validators who are considered trustworthy. They take turns creating blocks and validating transactions. This mechanism is suitable for private or consortium blockchains where participants are known entities.", module: 7 }],
      module: 1,
      final: true
    },
    {
      question: 'Practical Byzantine Fault Tolerance (PBFT)',
      lesson: [{ name: "PBFT is used in permissioned blockchains. It establishes consensus by having nodes agree on the order of transactions through a multi-step voting process. It's faster than PoW and PoS but requires a fixed number of participants.", module: 7 }],
      module: 3,
      final: true
    },
    {
      question: 'Hybrid and Emerging Mechanisms',
      lesson: [{ name: "Some newer consensus mechanisms combine elements of different models to balance security, scalability, and energy efficiency. Examples include Proof of Space, Proof of Time, and Proof of History.", module: 7 }],
      module: 4,
      final: true
    },
    {
      question: 'Choosing the Right Mechanism:',
      lesson: [{ name: "The choice of consensus mechanism depends on the goals of the blockchain network. Public blockchains often prioritize security and decentralization, while private blockchains may prioritize efficiency and known validators.", module: 7 }],
      module: 5,
      final: true
    },
    {
      question: 'Evolution and Research:',
      lesson: [{ name: "The field of consensus mechanisms is dynamic. Researchers are continuously working on improving existing mechanisms and devising new ones to address the limitations and challenges faced by blockchain networks", module: 7 }],
      module: 6,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Understanding Blockchain Consensus Mechanisms</h1>
          <p style={{ fontSize: '15px' }} >A consensus mechanism is a fundamental component of blockchain technology that
            ensures all participants in a distributed network agree on the state of the ledger, even
            if some of them are untrustworthy or malicious. It enables the network to validate
            and agree upon the transactions that are added to the blockchain. Different
            consensus mechanisms vary in their approach to achieving this agreement. Let
            delve into the details of the key points related to blockchain consensus mechanisms:</p>
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

      </div>
    </>


  );
};

export default BeginnerModule3;
