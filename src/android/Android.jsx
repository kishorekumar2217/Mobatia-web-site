import React from 'react';
import Common1 from './Common1';
import Common2 from './Common2';

import Androidbanner from './Androidbanner';
import img from './banner4.jpg';



import Header from '../contact/header'
import Banner from '../contact/innerbanner'
import Footer from '../home/footer';



const Android = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Common1
                Services="Build Android Apps!"
                name="Android App Development"
                intro="Mobatia offers end-to-end Android app development
             services and solutions. Building custom apps from the ground 
             up, we take full advantage of all the features that go into
              making Android the most popular mobile platform in the world.
               We are always working toward setting standards in the industry
                through our expertise in developing exceptional applications 
                for Jellybean and now Oreo."
                intro1="Our Android apps are developed and kept error-free in open source and subjected to upgrades as and when they come.
             We have successfully developed in-house and deployed several full-fledged and ready-to-use mobile applications that are uploaded in the Google Play store."

                ser1="24/7 Availability "

                serde1=" 24/7 Software helps you improve your awareness, communication,
            ocumentation."

                ser2=" Multilingual Support  "
                serde2="While man software development setup and process in place, 
         ."
                ser3="  User friendly Mobile Apps"
                serde3="Thinking mobile friendly and user friendly are the same thing is a
             common misconception in technology today."
                ser4=" Secure Android Apps"
                serde4="When you safeguard the data that you exchange between 
            your app and other apps, or between your app and a website."
            />

            <Androidbanner />

            <Common2
                name="Android App "
                details="Fast loading screens are vital. No one likes waiting, particularly when all they have to look at is a 
             screen-loading symbol and this frustration soon gives way to boredom resulting in a decision to seek something better"
                details1="Many people have short attention spans and if you make you app difficult to navigate then they will lose interest fast. If your customer cannot access their information quickly and easily, they will become 
            frustrated and do it another way – possibly by using a competitor’s app"
                details2="While you have to balance app speed against functionality and resolution, you have to ensure that what you have on screen is sufficiently detailed to make the user experience worthwhile. We are well past the times of blocky graphics 
            and today’s users expect to have hi-definition and 16 million colours. "


                feature1="Custom Android App Development"

                fdetails1="Mobatia’s Android App Strategy begins with understanding the client’s needs and business priorities. Our programmers address the diverse challenges involved in developing the client’s application and handle these at every step using our technical expertise and experience for rolling out a robust app."

                feature2="Android Apps Design"

                fdetails2="Our UI/UX designs help build optimal intersections between the client’s business goals and the needs of the end-user. Our Android app designers offer a channel to end customers
             to help them learn more about the clients and their services."

                feature3="Enterprised Android Apps"
                fdetails3="Our UI/UX designs help build optimal intersections between the client’s business goals and the needs of the end-user. Our Android app designers offer a channel to end customers
             to help them learn more about the clients and their services."


                feature4="Android Tab Apps Design"
                fdetails4="We are constantly focused on capitalizing 
                on the growing Android tablet trends. Our expert developers
                ild successful Android tablet apps that run on tablets and are
                 flexible to suit all screen sizes."
                feature5="Android Application Testing"
                fdetails5="We are constantly focused on capitalizing on the growing 
                Android tablet trends. Our expert developers build successful Android
                 tablet apps that run on tablets and are flexible to suit all screen 
                 sizes. 
                  "
                feature6=""
            />
            <Footer
            />
        </div>
    );
};

export default Android;