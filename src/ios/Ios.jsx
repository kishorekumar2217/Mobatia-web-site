import React from 'react';

import Common1 from '../android/Common1';
import Common2 from '../android/Common2';


import Header from '../contact/header'
import Banner from '../contact/innerbanner'
import Footer from '../home/footer'
import Iosbanner from './Iosbanner'

const Ios = () => {
    return (
        <div>

            <Header />
            <Banner />
            <Common1
                Services="Build iOS Mobile Applications!"
                name="Crisp and Uniques iOS Mobile Applications!"
                intro="Mobatia offers iOS application development services to design and code apps that provide a great experience for iPhone, iPad and other Apple devices. The app backend and iOS widgets with the latest platform features are especially worth mentioning. Our team of iOS developers is great at coding on iOS SDK. Whether it is Swift, Objective-C, ARKit2, UIKit, CoreData, dynamic back-end or custom API, we have the right skills and tools for developing your iOS app to drive the client’s business."
                intro1="Extra care is taken in creating UI/UX for the app. In fact, we have developed it into fine art. Our creative yet simple solutions drive huge revenues for our clients. We offer it to clients from a bootstrapped startups to midsize firms to large enterprises. End-to-end app modification services are part of our offering. We configure with native UI/UX design, comprehensive server-side engineering and rich features modernization."
                ser1="24/7 Availability "

                serde1=" 24/7 Software helps you improve your awareness, communication,
     ocumentation."

                ser2=" One design for your tab and mobile "
                serde2="While man software development setup and process in place, 
  ."
                ser3="  Easy to use mobile applications"
                serde3="Thinking mobile friendly and user friendly are the same thing is a
      common misconception in technology today."
                ser4=" ­High performing and pixel perfect mobile application"
                serde4="When you safeguard the data that you exchange between 
     your app and other apps, or between your app and a website."
            />
            <Iosbanner />

            <Common2
                name="IOS App "
                details="Fast loading screens are vital. No one likes waiting, particularly when all they have to look at is a 
             screen-loading symbol and this frustration soon gives way to boredom resulting in a decision to seek something better"
                details1="Many people have short attention spans and if you make you app difficult to navigate then they will lose interest fast. If your customer cannot access their information quickly and easily, they will become 
            frustrated and do it another way – possibly by using a competitor’s app"
                details2="While you have to balance app speed against functionality and resolution, you have to ensure that what you have on screen is sufficiently detailed to make the user experience worthwhile. We are well past the times of blocky graphics 
            and today’s users expect to have hi-definition and 16 million colours. "


                feature1="Custom iPhone App development"

                fdetails1="We create future-ready iOS applications with sustained performance using cache and multi-thread coding techniques to optimize performance, lesser battery and CPU consumption. Our environment is test-driven. We adopt an agile approach for developing iPhone apps, to ensure that even on adding newer functionalities, the app quality is maintained and the product remains bug-free."

                feature2="iOS Mobile Application Design"

                fdetails2="As a leading iOS service provider we give utmost importance to the design of apps. We bring together experience, methodologies and knowledge to serve our clients with high-quality iOS UX/UI design services. Our UX/UI Designing services have helped bolster businesses like Retail, Healthcare, Banking, Education, Finance and Gaming. "

                feature3="Custom Enterprise iPad Applications"
                fdetails3="We build iPad apps that facilitate business intelligence and keeps you updated on the progress of your business processes. With Mobatia, you can have a reliable and trustworthy partner to run an enterprise app for your business."


                feature4="Commercial iPad Application and Porting"
                fdetails4="Our expert developers create superior applications for a wide range of purposes such as lifestyle, travel, sports, music, social networking and other app categories available on Apple’s app store by leveraging on the in-built features of iPad such as gyrometer, accelerometer and camera app."
                feature5="Native and Hybrid iOS App Development"
                fdetails5="We deliver cost-effective native iPhone applications to boost clients’ business benefits. Our experts come up with solutions that are entirely compatible with your iOS devices as we use trending languages like Xcode, Objective-C and Swift. Our repeat business rate in native iOS app development speaks for this fact. 
                  "
                feature6=""
            />





            <Footer />
        </div>
    );
};

export default Ios;