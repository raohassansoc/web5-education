"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
import ReactPlayer from "react-player";
const Crypto3 = () => {

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
      question: 'Key Concepts and Components:',
      lesson: [{
        name: "Decentralization: Cryptocurrencies operate on decentralized networks, meaning there is nocentral authority, like a government or financial institution, controlling the currency. Instead,transactions are verified by a network of computers (nodes) through consensus mechanismslike proof-of-work (PoW) or proof-of-stake (PoS).",
        module: 1
      },
      {
        name: "Blockchain: A blockchain is a digital ledger that records all transactions in a chronological and transparent manner. Each block in the chain contains a set of transactions and is linked to the previous block, forming a continuous chain of blocks. This technology ensures the security and immutability of transaction records.",
        module: 1
      },
      {
        name: "Cryptography: Cryptocurrencies use cryptographic techniques to secure transactions and control the creation of new units. Public and private keys are used to sign and verify transactions, ensuring the authenticity and integrity of the process.",
        module: 1
      },
      {
        name: "Digital Wallets: Cryptocurrency users store their funds in digital wallets, which are software applications that securely manage their public and private keys. These wallets allow users to send, receive, and store cryptocurrencies.",
        module: 1
      },
      {
        name: "Mining: In proof-of-work blockchains, mining involves solving complex mathematical puzzles to validate transactions and add new blocks to the blockchain. Miners are rewarded with newly created cryptocurrency units and transaction fees for their efforts.",
        module: 1
      },
      {
        name: "Supply Control: Most cryptocurrencies have a predefined supply limit to control inflation. For example, Bitcoin has a capped supply of 21 million coins, which creates scarcity and potentially affects its value over time.",
        module: 1
      },
      {
        name: "Anonymity and Pseudonymity: While transactions are recorded on the blockchain, the identities of users are often pseudonymous. This means that while transactions are public and traceable, the actual identities behind the transactions are not always easily linked.",
        module: 1
      },
      {
        name: "Use Cases: Cryptocurrencies have various use cases beyond traditional money. They can be used for peer-to-peer payments, cross-border remittances, smart contracts, decentralized applications (DApps), and as a store of value.",
        module: 1
      },
      {
        name: "Volatility and Investment: Cryptocurrencies are known for their price volatility, with values often experiencing rapid fluctuations. This volatility has led some people to view cryptocurrencies as investment opportunities, similar to stocks or commodities.",
        module: 1
      }

      ],
      module: 1,
      final: true
    },
    {
      question: 'Popular Cryptocurrencies:',
      lesson: [{ name: "Bitcoin (BTC): The first and most well-known cryptocurrency, often referred to as digital gold.", module: 2 },
      { name: "Ethereum (ETH): A blockchain platform that introduced the concept of smart contracts, enabling the creation of decentralized applications.", module: 2 },
      { name: "Ripple (XRP): Designed for fast cross-border payments and remittances.", module: 2 },
      { name: "Litecoin (LTC): Created as the silver to Bitcoin's gold, it offers faster transaction confirmation times.", module: 2 },
      { name: "Cardano (ADA): Focused on scalability, sustainability, and creating a secure platform for smart contracts.", module: 2 },
      { name: "In conclusion, the introduction to cryptocurrency provides a glimpse into the revolutionary world of digital finance. Cryptocurrencies offer an innovative way to conduct transactions, create decentralized applications, and potentially reshape traditional financial systems. The core concepts of decentralization, blockchain technology, cryptography, and digital wallets are foundational to understanding how cryptocurrencies operate.", module: 2 }],
      module: 2,
      final: true
    },
    {
      question: 'Popular Cryptocurrencies:',
      lesson: [{ name: "Bitcoin (BTC): The first and most well-known cryptocurrency, often referred to as digital gold.", module: 2 },
      { name: "Ethereum (ETH): A blockchain platform that introduced the concept of smart contracts, enabling the creation of decentralized applications.", module: 2 },
      { name: "Ripple (XRP): Designed for fast cross-border payments and remittances.", module: 2 },
      { name: "Litecoin (LTC): Created as the silver to Bitcoin's gold, it offers faster transaction confirmation times.", module: 2 },
      { name: "Cardano (ADA): Focused on scalability, sustainability, and creating a secure platform for smart contracts.", module: 2 },
      { name: "In conclusion, the introduction to cryptocurrency provides a glimpse into the revolutionary world of digital finance. Cryptocurrencies offer an innovative way to conduct transactions, create decentralized applications, and potentially reshape traditional financial systems. The core concepts of decentralization, blockchain technology, cryptography, and digital wallets are foundational to understanding how cryptocurrencies operate.", module: 2 }],
      module: 2,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Introduction to Cryptocurrency</h1>
          <p style={{ fontSize: '15px' }} >Cryptocurrency is a digital or virtual form of currency that uses cryptography for secure financial
            transactions, control the creation of new units, and verify the transfer of assets. Unlike traditional
            currencies issued by governments (fiat currencies), cryptocurrencies operate on decentralized
            networks based on blockchain technology. Blockchain is a distributed and immutable ledger that
            records all transactions in a transparent and secure manner.</p>
        </div>
        <div className="p-10">
          <ReactPlayer className="ReactPlayer" style={{ marginRight: 'auto', marginLeft: 'auto' }} url='/videos/Course1/introduction.webm' controls />
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


        <div className="p-10">
          <ReactPlayer className="ReactPlayer" style={{ marginRight: 'auto', marginLeft: 'auto', width: '0' }} url='/videos/Course1/empowering.webm' controls />

        </div>

      </div>
    </>


  );
};

export default Crypto3;
