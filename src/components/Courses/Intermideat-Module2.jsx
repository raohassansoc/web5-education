"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";



const IntermediateModule2 = () => {

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
      question: 'Ethereum:',
      lesson: [{
        name: "Smart Contracts: Ethereum introduced the concept of smart contracts, which are self-executing contracts with the terms of the agreement directly written into code. These contracts automatically execute when predefined conditions are met.",
        module: 1
      },
      {
        name: "Decentralized Applications (DApps): Developers can build decentralized applications on the Ethereum platform using smart contracts. These DApps can range from financial services and games to supply chain management and more.",
        module: 1
      },
      {
        name: "Ethereum Virtual Machine (EVM): The EVM is a runtime environment that executes smart contracts on the Ethereum network. It ensures consistency and security by providing a sandboxed environment for contract execution.",
        module: 1
      },
      {
        name: "Ether (ETH): Ether is the native cryptocurrency of the Ethereum network. It's used as both a digital currency and as a means to pay for transaction fees and computational services on the network.",
        module: 1
      },
      {
        name: "Consensus Mechanism: Ethereum is transitioning from a Proof of Work (PoW) consensus mechanism to a Proof of Stake (PoS) mechanism as part of the Ethereum 2.0 upgrade. PoS is more energy-efficient and encourages network participants to stake their Ether as collateral.",
        module: 1
      },
      ],
      module: 1,
      final: true
    },
    {
      question: 'Use Cases of Ethereum:',
      lesson: [{ name: "Decentralized Finance (DeFi): Ethereum hosts a significant portion of the DeFi ecosystem, including lending, borrowing, decentralized exchanges, and yield farming platforms.", module: 2 },
      { name: "Non-Fungible Tokens (NFTs): Ethereum is the primary platform for NFTs, enabling the creation and trading of unique digital assets.", module: 2 },
      { name: "Supply Chain Management: Ethereum can be used to build transparent and secure supply chain solutions.", module: 2 },
      { name: "Gaming: Ethereum-based DApps allow for in-game asset ownership, trading, and provably fair gameplay.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Binance Smart Chain (BSC):',
      lesson: [{ name: "Binance Smart Chain is a blockchain platform created by the popular cryptocurrency exchange Binance. Launched in 2020, BSC aims to provide a fast and low-cost alternative to Ethereum for building DApps and deploying smart contracts. Here are its main features:", module: 3 },
      { name: "Dual-Chain Architecture: BSC operates alongside Binance Chain, a separate blockchain focused on fast trading and transfers. BSC connects to Binance Chain to take advantage of its speed while offering more complex smart contract functionality.", module: 3 },
      { name: "Proof of Stake Authority (PoSA): BSC uses a PoSA consensus mechanism, which involves a small number of validators chosen based on their BNB holdings. This increases transaction speed while maintaining some decentralization.", module: 3 },
      { name: "Cross-Chain Compatibility: BSC is compatible with Ethereum's Web3 API, making it easier for developers to migrate Ethereum DApps to BSC or create DApps that work across both platforms.", module: 3 },
      { name: "Low Transaction Fees: BSC is known for its low transaction fees compared to Ethereum, making it attractive for users and developers who want to avoid high gas fees.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Use Cases of Binance Smart Chain:',
      lesson: [{ name: "Decentralized Exchanges (DEXs): BSC hosts various DEXs that provide users with the ability to trade cryptocurrencies directly from their wallets.", module: 4 },
      { name: "Yield Farming and Staking: BSC offers opportunities for users to earn rewards through yield farming and staking BNB or other tokens.", module: 4 },
      { name: "NFTs and Gaming: Similar to Ethereum, BSC supports NFT creation and gaming DApps.", module: 4 },
      { name: "Fast Transactions: BSC's speed and lower fees make it suitable for applications requiring quick and cost-effective transactions.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Consensus Mechanism:',
      lesson: [{ name: "Ethereum is transitioning from PoW to PoS, while BSC uses a PoSA mechanism.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Centralization:',
      lesson: [{ name: "BSC is criticized for having a more centralized validator structure compared to Ethereum's PoS approach.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Transaction Fees:',
      lesson: [{ name: "BSC generally offers lower transaction fees than Ethereum, making it more appealing for certain use cases.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Development Ecosystem:',
      lesson: [{ name: "Ethereum has a larger and more established ecosystem, including DeFi and NFT projects, while BSC is newer and growing rapidly.", module: 5 },
      { name: "In summary, Ethereum and Binance Smart Chain are two prominent blockchain platforms, each with its own strengths and use cases. Ethereum's well-established ecosystem, smart contract capabilities, and pending transition to PoS make it a versatile choice, while BSC's focus on speed, low fees, and compatibility with Ethereum tools can be advantageous for specific applications.", module: 5 }],
      module: 5,
      final: true
    },
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Exploring Different Blockchain Platforms (Ethereum, Binance Smart Chain, etc.)</h1>
          <p style={{ fontSize: '15px' }} >Ethereum is one of the most well-known and widely used blockchain platforms. It
            was proposed by Vitalik Buterin in late 2013 and went live in 2015. Ethereum is often
            referred to as a decentralized world computer because it allows developers to build
            and deploy smart contracts and decentralized applications (DApps) on its platform.
            Here are the key aspects of Ethereum:</p>
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

export default IntermediateModule2;
