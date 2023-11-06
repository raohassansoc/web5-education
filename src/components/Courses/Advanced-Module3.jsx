"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";

import ReactPlayer from "react-player";

const AdvancedModule3 = () => {

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
      question: 'Cryptography:',
      lesson: [{
        name: "Cryptography is at the core of blockchain security. It ensures the confidentiality, integrity, and authenticity of data and transactions. Blockchain networks use various cryptographic techniques like digital signatures, hash functions, and asymmetric encryption to secure data and verify the identity of participants.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Consensus Mechanisms:',
      lesson: [{ name: "Consensus mechanisms are protocols that ensure all participants in a blockchain network agree on the state of the blockchain. Common mechanisms include Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS). These mechanisms prevent malicious actors from gaining control over the network and tampering with transactions.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Immutability:',
      lesson: [{ name: "Blockchain achieves immutability by linking blocks through cryptographic hashes. Once data is recorded in a block, it's extremely difficult to alter because changing the data in one block would require altering all subsequent blocks, which is computationally infeasible. This feature ensures the integrity of the stored information.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Distributed Ledger:',
      lesson: [{ name: "The distributed nature of blockchain ensures that no single entity has complete control over the network. Each participant (node) holds a copy of the entire ledger, and any changes to the ledger must be agreed upon through consensus. This decentralization makes the network more resilient to attacks. Private and Public Blockchains: Public blockchains are open to anyone and offer transparency but limited privacy. Private blockchains restrict access to authorized participants, offering enhanced privacy. Hybrid blockchains combine features of both public and private blockchains to cater to specific use cases.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Permissioned and Permissionless Blockchains:',
      lesson: [{ name: "Permissioned blockchains require participants to have permission to join the network and participate in consensus. Permissionless blockchains, like Bitcoin, allow anyone to join without requiring permission. Permissioned blockchains offer more control over participants and are often used in enterprise settings.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Smart Contracts Security:',
      lesson: [{ name: "Smart contracts are self-executing contracts with the terms directly written into code. Ensuring their security is crucial, as vulnerabilities can lead to substantial financial losses. Thorough code audits, formal verification techniques, and best practices can help mitigate risks associated with smart contract vulnerabilities.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Privacy Mechanisms:',
      lesson: [{ name: "Privacy-enhancing techniques are essential to protect sensitive data within the blockchain. Techniques like zero-knowledge proofs (ZKPs) allow one party to prove the validity of a statement without revealing the underlying data. This can be used to enable private transactions while still ensuring their integrity. Off-Chain Solutions: Off-chain solutions involve conducting certain transactions or computations outside the main blockchain to improve scalability and privacy. Payment channels and sidechains are examples of off-chain solutions that reduce the computational load on the main blockchain while maintaining security.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Network Security:',
      lesson: [{ name: "Blockchain networks can still face traditional network-level attacks such as Distributed Denial of Service (DDoS) attacks and Sybil attacks. Implementing robust network security measures is necessary to prevent such attacks from disrupting the network.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Regulatory and Compliance Considerations:',
      lesson: [{ name: "Blockchain implementations need to adhere to legal and regulatory requirements, especially concerning data privacy (e.g., GDPR) and anti-money laundering (AML) regulations. Balancing the transparency of blockchain with regulatory compliance is crucial.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Anonymity vs. Pseudonymity:',
      lesson: [{ name: "While blockchain transactions are pseudonymous (identities are hidden behind cryptographic addresses), achieving true anonymity is challenging. The balance between privacy and accountability needs to be carefully considered in different blockchain use cases.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Data Minimization:',
      lesson: [{ name: "Storing sensitive data on a blockchain is not always recommended due to the immutability of the data. Practicing data minimization—only storing necessary information and keeping sensitive data off-chain—helps improve privacy and security. In conclusion, security and privacy are foundational aspects of blockchain technology. By leveraging cryptography, consensus mechanisms, and privacy techniques, blockchain networks can provide secure and transparent transactions while addressing concerns related to data privacy and confidentiality. The choice of blockchain architecture and the implementation of security measures depend on the specific use case and the desired balance between transparency and privacy.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Security and Privacy in Blockchain:</h1>
          <p style={{ fontSize: '15px' }} >Blockchain technology has gained significant attention due to its potential to provide
            secure and transparent transactions. However, ensuring security and privacy within a
            blockchain network is crucial for its successful implementation. Here a detailed
            explanation of the key points related to security and privacy in blockchain:</p>
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
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course4/Video5.webm' controls />
        </div>
      </div>
    </>


  );
};

export default AdvancedModule3;
