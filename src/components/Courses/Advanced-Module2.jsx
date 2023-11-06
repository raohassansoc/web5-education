"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";

import ReactPlayer from "react-player";

const AdvancedModule2 = () => {

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
      question: 'Finance and Banking',
      lesson: [{
        name: "Blockchain's impact on the financial industry is substantial. It enables faster and more secure cross-border payments by eliminating intermediaries and reducing transaction times. Smart contracts, self-executing code running on blockchain networks, can automate complex financial processes such as loan disbursement and trade settlements. Additionally, blockchain enhances KYC (Know Your Customer) and AML (Anti-Money Laundering) processes by creating a secure and shared repository for customer data, improving compliance and reducing fraud.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'Supply Chain Management:',
      lesson: [{ name: "Blockchain brings transparency and traceability to supply chains by recording every step of a product's journey. This is crucial for industries like food and pharmaceuticals to ensure product authenticity, safety, and quality. With a blockchain-based system, stakeholders can track the origin, processing, and distribution of goods in real time, reducing counterfeiting and enhancing consumer trust.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Healthcare',
      lesson: [{ name: "In healthcare, blockchain enhances the security and privacy of patient data. Medical records, insurance claims, and drug supply chains can all be managed through blockchain, giving patients control over their health information while ensuring data integrity. Additionally, clinical trials can be made more efficient by securely sharing and tracking trial data among stakeholders.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Real Estate:',
      lesson: [{ name: "Blockchain simplifies property transactions by providing a tamper-proof record of ownership history. This reduces the need for intermediaries and minimizes fraud. Smart contracts can automate aspects of property sales, such as escrow and title transfers, streamlining the buying and selling process.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Voting Systems:',
      lesson: [{ name: "Blockchain can create secure and transparent voting systems. Each vote is recorded on the blockchain, ensuring immutability and reducing the risk of tampering. This can lead to more accurate and trustworthy election results.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Energy Sector:',
      lesson: [{ name: "Blockchain enables peer-to-peer energy trading by allowing individual energy producers (such as solar panel owners) to sell excess energy directly to consumers. This decentralized approach can improve energy efficiency and reduce costs.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Supply Chain Finance:',
      lesson: [{ name: "Blockchain can address issues like delayed payments and lack of transparency in supply chain financing. By providing a shared ledger, it allows suppliers to prove their delivery and trigger automatic payments, reducing the financing gap for small businesses.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Intellectual Property:',
      lesson: [{ name: "Blockchain can establish ownership and provenance of intellectual property, such as patents, copyrights, and trademarks. This can simplify the licensing process and reduce disputes over ownership.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Music and Content Distribution:',
      lesson: [{ name: "Artists and content creators can use blockchain to distribute and monetize their work directly to consumers, eliminating intermediaries and ensuring fair compensation for their creations.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Gaming Industry:',
      lesson: [{ name: "Blockchain enables true ownership of in-game assets, which can be bought, sold, and traded securely. This promotes the development of player-driven economies within games. In each of these industries, blockchain's core features contribute to increased efficiency, reduced costs, enhanced security, and improved trust among stakeholders. However, it's important to note that while blockchain offers significant advantages, its adoption may also bring challenges such as scalability, regulatory compliance, and interoperability that need to be carefully addressed.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Blockchain Use Cases in Various Industries</h1>
          <p style={{ fontSize: '15px' }} >Blockchain technology has transcended its origins as a mere backbone for
            cryptocurrencies like Bitcoin and is now finding applications in a wide range of
            industries. Its inherent features of decentralization, transparency, immutability, and
            security have made it an attractive solution for solving various industry-specific
            challenges. Here an in-depth look at how blockchain is being utilized in different
            sectors:</p>
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
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course4/Video3.webm' controls />
        </div>
      </div>
    </>


  );
};

export default AdvancedModule2;
