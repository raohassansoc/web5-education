"use client";
import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
import ReactPlayer from "react-player";


const AdvancedModule = () => {

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
      question: 'Sharding:',
      lesson: [{
        name: "Sharding is a technique that involves breaking down the blockchain network into smaller, manageable partitions called shards. Each shard can process its transactions and smart contracts independently. This significantly increases the network's throughput, as transactions are processed in parallel across multiple shards. Sharding improves scalability by reducing the computational load and increasing the capacity of the blockchain to handle more transactions simultaneously. Layer 2 Solutions: Layer 2 solutions aim to alleviate the congestion on the main blockchain by moving a significant portion of transactions off-chain. These solutions operate on top of the main blockchain and include techniques like state channels and sidechains.",
        module: 1
      }
      ],
      module: 1,
      final: true
    },
    {
      question: 'State Channels:',
      lesson: [{ name: "State channels enable users to conduct multiple transactions off-chain, only settling the final result on the main blockchain. This reduces the burden on the main chain, as only the opening and closing transactions need to be processed on-chain, while all intermediate transactions are managed off-chain.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Sidechains:',
      lesson: [{ name: "Sidechains are separate blockchains that are interoperable with the main blockchain. They allow certain transactions to occur off the main chain, improving scalability and reducing congestion. Sidechains can focus on specific use cases, like gaming or supply chain management, and interact with the main chain as needed.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Off-Chain Computing:',
      lesson: [{ name: "Off-chain computing involves moving complex computations and processes off the main blockchain. This is achieved through trusted compute environments or decentralized oracles. These systems ensure that only the final outcome of the computation is recorded on the blockchain, rather than every step of the process. By reducing the computational load on the blockchain, scalability is improved.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Consensus Mechanism Optimization:',
      lesson: [{ name: "Traditional consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) can be resource-intensive and limit scalability. Optimizing these mechanisms or using alternative consensus algorithms can enhance scalability. For instance, Proof of Stake protocols like Casper and Tendermint aim to improve efficiency and increase transaction throughput.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Blockchain Interoperability:',
      lesson: [{ name: "Blockchain networks often operate in isolation, which can be inefficient. Interoperability solutions enable different blockchains to communicate and share information seamlessly. Cross-chain transactions can reduce the strain on a single blockchain by distributing the load across multiple interconnected networks.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Optimized Smart Contracts:',
      lesson: [{ name: "Smart contracts, while powerful, can contribute to scalability challenges due to their complexity. Optimizing smart contract execution and reducing their computational intensity can help improve blockchain throughput.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Dynamic Block Sizes:',
      lesson: [{ name: "Instead of using fixed block sizes, some blockchains employ dynamic block sizes that adjust based on network demand. This approach allows the blockchain to handle more transactions during periods of high activity and fewer transactions during quieter times, thereby optimizing scalability.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Parallel Processing:',
      lesson: [{ name: "Parallel processing involves dividing transaction validation tasks into smaller subtasks that can be processed simultaneously by different nodes. This technique leverages the multi-core capabilities of modern hardware to increase transaction throughput.", module: 7 }],
      module: 7,
      final: true
    },
    {
      question: 'Optimized Network Protocols:',
      lesson: [{ name: "Efficient peer-to-peer network protocols can enhance data propagation across the blockchain network. By minimizing network latency and improving data synchronization, optimized protocols contribute to overall scalability. State Pruning and Compression: Old or unnecessary data can be pruned from the blockchain to reduce its size and improve performance. Techniques like data compression and archiving can also help store historical data without compromising real-time scalability.", module: 7 },
      { name: "In conclusion, blockchain scalability solutions address the challenge of accommodating a growing number of transactions and users while maintaining the fundamental principles of decentralization and security. These advanced techniques, such as sharding, layer 2 solutions, off-chain computing, and consensus mechanism optimization, collectively contribute to building blockchain networks that can handle real-world demands without sacrificing performance or security.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Blockchain Scalability Solutions:</h1>
          <p style={{ fontSize: '15px' }} >Blockchain technology, while revolutionary, has faced challenges in terms of
            scalability. Scalability refers to a blockchain ability to handle an increasing number
            of transactions without compromising its performance, security, or decentralization.
            As the popularity of blockchain applications grows, the need for efficient scalability
            solutions becomes crucial. Here are some advanced scalability solutions:</p>
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
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url='/videos/Course4/Unlocking.webm' controls />
        </div>
      </div>
    </>


  );
};

export default AdvancedModule;
