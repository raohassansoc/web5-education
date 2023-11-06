"use client";
import Image from "next/image";
import React from "react";

import bannerImage from "../app/images/home/new/learn-section/bannernew.webp"
import bannerImageMob from "../app/images/home/new/learn-section/bannernewMobile.webp"

const EnterpricePlan = () => {
  return (
    <div className="coursepage-module--corporateSection--O9kt2">
      <div className="container">
        <div className="coursepage-module--learnSection--lKp3f">
          <h3>Learn together with</h3>
          <h2 style={{ color: 'white' }} >Crypto AI for Enterprise!</h2>
          <p style={{ color: 'white' }} >
            Find your courses to crypto ai your team. Meet your
            organisation’s L&amp;D goals.
          </p>
          <div className="coursepage-module--learnDetails--hJB8t">
            <div className="coursepage-module--banner--axwQo">
              <Image
                className="coursepage-module--hideOnMobile--8vHQL"
                src={bannerImage}
                data-src={bannerImage}
                alt="banner-img"
                width={635}
                height={411}
              />
              <Image
                className="coursepage-module--showOnMobile--2zeTy"
                src={bannerImageMob}
                data-src={bannerImage}
                alt="banner-img"
                width={327}
                height={212}
              />
            </div>
            <div className="coursepage-module--planDetails--znXu1">
              <p>Enterprise Plan</p>
              <ul>
                <li style={{ color: 'white' }}>Unlimited access to all courses</li>
                <li style={{ color: 'white' }}>Data driven insights</li>
                <li style={{ color: 'white' }}>International certification</li>
                <li style={{ color: 'white' }}>Competitive pricing</li>
                <li style={{ color: 'white' }}>Customisable branding &amp; URL</li>
                <li style={{ color: 'white' }}>Proven value &amp; outcomes</li>
                <li style={{ color: 'white' }}>SCORM compliant &amp; supports LTI integration</li>
              </ul>
              <a
                className="coursepage-module--pinklargeCta--SCJo6"
                rel="noreferrer"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpricePlan;
