"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";

import ReactPlayer from "react-player";

const IntermediateModule = () => {

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
      question: 'Cryptography in Blockchain:',
      lesson: [{
        name: "Cryptography is the science of secure communication and data protection. It plays a crucial role in ensuring the security and integrity of data within a blockchain system. Blockchain relies on several cryptographic principles to achieve its goals of immutability, decentralization, and transparency.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Hash Functions:',
      lesson: [{ name: "Hash functions are at the core of blockchain technology. A hash function takes an input (or 'message') and produces a fixed-size string of characters, which appears random. It's a one-way function, meaning you can't easily deduce the input from the output. In blockchain, hash functions are used to create unique identifiers for blocks and transactions. This helps ensure the integrity of data as any change in the input will result in a completely different hash.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Merkle Trees:',
      lesson: [{ name: "A Merkle tree is a data structure that uses hash functions to organize and verify large amounts of data efficiently. In a blockchain, it's used to represent transactions within a block. Instead of hashing all transactions directly, the transactions are grouped in pairs, hashed, and then the pairs are hashed again until a single root hash, called the Merkle root, is obtained. This root hash is stored in the block header and allows for quick verification of transactions without needing to store or process the entire transaction history.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Public Key Cryptography (Asymmetric Encryption):',
      lesson: [{ name: "Public key cryptography uses a pair of keys: a public key, which is shared openly, and a private key, which is kept secret. Data encrypted with a public key can only be decrypted using the corresponding private key, and vice versa. This principle is used in blockchain for secure transactions and digital signatures. When sending a transaction, the sender's private key is used to sign it. Anyone with the sender's public key can verify the signature and ensure the transaction's authenticity.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Digital Signatures:',
      lesson: [{ name: "Digital signatures are generated using the sender's private key and attached to a message or transaction. They provide authentication, integrity, and non-repudiation. In blockchain, digital signatures are used to verify that a transaction has been authorized by the correct sender and hasn't been tampered with.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Proof of Work (PoW):',
      lesson: [{ name: "Proof of Work is a consensus algorithm used in many blockchains, including Bitcoin. Miners compete to solve complex mathematical puzzles, and the first one to solve it gets to add the next block to the blockchain. This process is computationally intensive and requires a lot of energy, making it difficult for a malicious actor to take over the network. PoW also ensures the chronological order of transactions.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Proof of Stake (PoS):',
      lesson: [{ name: "Proof of Stake is an alternative to PoW where validators (instead of miners) are chosen to create new blocks based on the amount of cryptocurrency they stake as collateral. PoS is considered more energy-efficient compared to PoW. Validators have a financial incentive to act honestly, as they stand to lose their staked funds if they act maliciously.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Elliptic Curve Cryptography (ECC):',
      lesson: [{ name: "ECC is a type of public key cryptography that offers strong security with relatively small key sizes. It's commonly used in blockchain systems due to its efficiency in terms of computation and storage. ECC-based digital signatures are smaller and faster to verify compared to traditional RSA signatures.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Zero-Knowledge Proofs:',
      lesson: [{ name: "Zero-knowledge proofs (ZKPs) allow one party to prove to another party that a statement is true without revealing any specific information about the statement. In blockchain, ZKPs are used for privacy-preserving transactions, where parties can verify the validity of a transaction without knowing the actual transaction details.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Encryption and Privacy:',
      lesson: [{ name: "Blockchain networks often involve sensitive information, especially in enterprise or permissioned blockchains. Encryption techniques are used to protect the confidentiality of data, ensuring that only authorized parties can access the information. These cryptographic principles collectively provide the foundation for the security, authenticity, and trustworthiness of blockchain technology. They enable decentralized and transparent systems that are resistant to tampering and fraud.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Cryptographic Principles in Blockchain</h1>
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
        <div className="pt-10">
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course3/introduction.webm' controls />
        </div>
      </div>
    </>


  );
};

export default IntermediateModule;
