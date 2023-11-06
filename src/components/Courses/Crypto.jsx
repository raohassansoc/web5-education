"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CourseImg from "../../../public/images/courses1.jpg";
import ReactPlayer from 'react-player';

// import video1 from '/videos/Course1/trading.webm'

const Crypto = () => {

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
      question: 'Education and Research:',
      lesson: [{
        name: "Understand Cryptocurrency: Start by gaining a solid understanding of what cryptocurrencies are, how blockchain technology works, and the key concepts behind them",
        module: 1
      },
      {
        name: "Research Different Cryptocurrencies: Study various cryptocurrencies to grasp their use cases,market trends, and potential for growth.",
        module: 1
      },
      {
        name: "Learn Market Analysis: Familiarize yourself with fundamental analysis (examining factors like technology, team, and adoption) and technical analysis (using charts and indicators to predict price movements).",
        module: 1
      },
      ],
      module: 1,
      final: true
    },
    {
      question: 'Choose a Trading Strategy:',
      lesson: [{ name: "Day Trading: Buying and selling cryptocurrencies within a single day to take advantage of short-term price fluctuations.", module: 2 },
      { name: "Swing Trading: Holding cryptocurrencies for a few days or weeks to capitalize on medium-term price movements.", module: 2 },
      { name: "Long-Term Investing: Holding cryptocurrencies for an extended period with the expectation of significant long-term growth.", module: 2 },
      { name: "Arbitrage: Profiting from price discrepancies of the same cryptocurrency on different exchanges.", module: 2 }],
      module: 2,
      final: true
    }, {
      question: 'Set Up Your Trading Environment:',
      lesson: [{ name: "Select a Reliable Exchange: Choose a reputable cryptocurrency exchange that offers the cryptocurrencies you want to trade.", module: 3 },
      { name: "Create an Account: Sign up for an account on the chosen exchange and complete the necessary verification procedures.", module: 3 },
      { name: "Secure Your Account: Enable two-factor authentication (2FA) and consider using a hardware wallet for added security.", module: 3 }]
      , module: 3,
      final: true
    }, {
      question: 'Develop a Trading Plan:',
      lesson: [{ name: "Define Your Goals: Determine what you aim to achieve through trading – whether it's making a certain percentage of profit, building a diverse portfolio, or learning the market.", module: 4 },
      { name: "Risk Management: Decide how much capital you're willing to risk on each trade and set stop-loss orders to limit potential losses.", module: 4 },
      { name: "Position Sizing: Determine the amount of capital you'll allocate to each trade based on your risk tolerance and overall portfolio size.", module: 4 }],
      module: 4,
      final: true
    },
    {
      question: 'Start Trading:',
      lesson: [{ name: "Practice with Paper Trading: Before using real money, consider using a practice or demo account to test your strategies and get a feel for the trading platform.", module: 5 },
      { name: "Start Small: Begin with a small amount of capital that you can afford to lose while you refine your trading skills.", module: 5 },
      { name: "Execute Your Strategy: Apply the trading strategy you've chosen based on your analysis and research.", module: 5 }],
      module: 5,
      final: true
    },
    {
      question: 'Continuous Learning and Improvement:',
      lesson: [{ name: "Keep Up with News: Stay informed about the latest developments, news, and events in the cryptocurrency market that might impact your trades.", module: 6 },
      { name: "Review and Adjust: Regularly review your trading performance, analyze your successes and mistakes, and adjust your strategies accordingly.", module: 6 },
      { name: "Expand Your Knowledge: Continuously educate yourself about new trading techniques, market trends, and emerging cryptocurrencies.", module: 6 }],
      module: 6,
      final: true
    },
    {
      question: 'Emotional Discipline:',
      lesson: [{ name: "Control Emotions: Trading can be emotionally challenging. Keep emotions in check and avoid making impulsive decisions based on fear or greed.", module: 7 },
      { name: "Stick to Your Plan: Follow your trading plan and strategies even in the face of market volatility.", module: 7 },
      { name: "In conclusion, entering the world of cryptocurrency trading requires a blend of knowledge, strategy, discipline, and continuous learning. Cryptocurrencies offer exciting opportunities for financial growth, but they also come with inherent risks due to their volatile nature and the evolving landscape of the market.", module: 7 }],
      module: 7,
      final: true
    }
  ];


  return (
    <>
      <div className="mt-20 p-4 faqContainer">
        <div style={{ textAlign: "center" }} className="p-10">
          <h1 style={{ fontSize: '25px' }} >Crypto Trading Unveiled: Navigating the Path to Profit in the Digital Frontier</h1>
          <p style={{ fontSize: '15px' }} >Starting to trade cryptocurrency involves several steps, from understanding the basics to
            choosing a trading strategy and platform. Here a detailed guide to help you get started:</p>
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
          <ReactPlayer className="ReactPlayer" style={{ marginLeft: 'auto', marginRight: 'auto' }} url="/videos/Course1/trading.webm" controls />
        </div>
      </div>
    </>
  );
};

export default Crypto;
