"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
const BeginnerModule = () => {
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
      question: 'What is Blockchain Technology?',
      lesson: [{
        name: "Blockchain technology is a decentralized and distributed digital ledger system that records transactions across multiple computers. It was initially designed for use in cryptocurrencies like Bitcoin but has found applications beyond that, ranging from supply chain management to healthcare records.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Decentralization:',
      lesson: [{ name: "Decentralization is a key feature of blockchain technology. In traditional systems, there is usually a central authority (like a bank) that manages and validates transactions. In contrast, blockchain operates on a peer-to-peer network where all participants (nodes) have equal authority. Transactions are verified by consensus mechanisms among these nodes, reducing the need for a central authority.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Distributed Ledger:',
      lesson: [{ name: "A ledger is a record-keeping system for transactions. In blockchain, the ledger is distributed across all participating nodes in the network. Each node has a copy of the entire ledger, ensuring transparency and security.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Blocks and Chains:',
      lesson: [{ name: "A blockchain consists of blocks, which are containers for multiple transactions. Each block contains a unique code called a hash and the hash of the previous block. This linking of blocks using hashes creates a chain, hence the name blockchain. This chaining ensures that altering a single block would require changing all subsequent blocks, making the system highly secure.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Consensus Mechanisms:',
      lesson: [{ name: "Consensus mechanisms are protocols that ensure all nodes in the network agree on the state of the blockchain. They prevent issues like double-spending in digital currencies. Some popular consensus mechanisms include Proof of Work (PoW) and Proof of Stake (PoS).", module: 5 },
      { name: "Proof of Work (PoW): In PoW, miners solve complex mathematical problems to validate transactions and create new blocks. The first miner to solve the problem gets the right to add the block and is rewarded. This mechanism is resource-intensive and secure but energy-consuming.", module: 5 },
      { name: "Proof of Stake (PoS): PoS selects validators based on the amount of cryptocurrency they stake or lock up as collateral. Validators are chosen to create new blocks and validate transactions based on their stake. PoS is more energy-efficient compared to PoW.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Immutability',
      lesson: [{ name: "Once a block is added to the blockchain, it's nearly impossible to alter it. This is because changing information in a block would require changing all subsequent blocks and gaining control over the majority of the network, which is extremely difficult in a decentralized system.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Security',
      lesson: [{ name: "Blockchain's decentralized and cryptographic nature enhances security. Transactions are encrypted and linked, making the system resistant to fraud and tampering. Additionally, the consensus mechanisms ensure that malicious actors cannot control the network.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Use Cases:',
      lesson: [{ name: "Blockchain technology extends beyond cryptocurrencies", module: 8 },
      { name: "Supply Chain Management: Blockchain can provide transparency and traceability in supply chains, reducing fraud and ensuring the authenticity of products.", module: 8 },
      { name: "Smart Contracts: These are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when conditions are met, eliminating the need for intermediaries.", module: 8 },
      { name: "Healthcare and Identity Management: Blockchain can securely store and share patient records while giving individuals control over their data.", module: 8 },
      { name: "Voting Systems: Blockchain can create tamper-proof and transparent voting systems, enhancing electoral integrity.", module: 8 }],
      module: 8,
      final: true
    },
    {
      question: 'Challenges:',
      lesson: [{ name: "Blockchain technology faces challenges like scalability (processing a high number of transactions), energy consumption (especially in PoW systems), and regulatory uncertainties.  In conclusion, blockchain technology's unique features of decentralization, security, and transparency have led to various innovative applications across industries. Understanding its mechanisms can open doors to exciting possibilities for the future.", module: 9 },
      { name: "In summary, smart contracts are self-executing agreements coded on blockchains, while DApps are applications that operate on decentralized networks, often utilizing smart contracts to handle backend logic and data. These technologies offer new ways to automate processes, ensure transparency, and create trustless systems in various industries.", module: 9 }], module: 9,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Introduction to Blockchain Technology</h1>
          {/* <p style={{ fontSize: '15px' }} >Starting to trade cryptocurrency involves several steps, from understanding the basics to
            choosing a trading strategy and platform. Here's a detailed guide to help you get started:</p> */}
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

export default BeginnerModule;
