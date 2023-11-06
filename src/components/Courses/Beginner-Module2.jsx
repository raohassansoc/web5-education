"use client";
import React from "react";
import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
import { useState, useEffect } from "react";

const BeginnerModule2 = () => {
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
      question: 'Introduction to Consensus Mechanisms',
      lesson: [{
        name: "A blockchain is a decentralized and distributed digital ledger that records transactions in a secure and tamper-resistant manner. Consensus mechanisms resolve the issue of trust in such networks, where multiple participants, often referred to as nodes, may have conflicting interests or intentions.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Need for Consensus Mechanisms',
      lesson: [{ name: "In a centralized system, a single entity has the authority to validate transactions and maintain the ledger. However, in a decentralized system like a blockchain, there is no central authority. To avoid fraud, double-spending, and ensure the accuracy of transactions, a mechanism is required for nodes to agree on the state of the ledger.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Decentralization and Trust',
      lesson: [{ name: "Consensus mechanisms uphold the principle of decentralization by allowing multiple nodes to participate in the decision-making process. Decentralization enhances security, reduces the risk of single points of failure, and prevents a single entity from having too much control over the network.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Byzantine Fault Tolerance (BFT)',
      lesson: [{ name: "Many consensus mechanisms are based on the Byzantine Fault Tolerance concept. In a Byzantine fault, nodes in a network may exhibit malicious behavior or fail randomly. BFT algorithms aim to reach consensus even when a certain percentage of nodes are faulty.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Proof of Work (PoW)',
      lesson: [{ name: "PoW is the original consensus mechanism used by Bitcoin. Nodes, called miners, compete to solve complex mathematical puzzles. The first one to solve it gets the right to add the next block to the blockchain and is rewarded. PoW ensures security but consumes a lot of energy. Proof of Stake (PoS): In PoS, validators (instead of miners) are chosen to create new blocks based on the amount of cryptocurrency they stake as collateral. This eliminates energy-intensive puzzle-solving, making PoS more energy-efficient compared to PoW.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Delegated Proof of Stake (DPoS)',
      lesson: [{ name: "DPoS adds another layer of delegation to PoS. Token holders vote for delegates who then validate transactions and create blocks. It aims to improve scalability and efficiency while maintaining decentralization.", module: 6 }],
      module: 6,
      final: true
    },

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

export default BeginnerModule2;
