import React from 'react';
import Header from "../contact/header"
import Banner from '../contact/innerbanner';
import Pcommon from './Pcommon';
import MobicareBanner from './MobicareBanner';
import Footer from '../home/footer';
import Common2 from '../android/Common2';



const mobicare = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Pcommon/>
            <MobicareBanner/>
            <Common2
             name=" Application MobiCare"
             feature1="Hospital appointment from your fingertips"
             fdetails1="App users can browse through various specialities offered by a hospital and request for an appointment with a doctor of their choice. The request will be confirmed by the hospital. Users will be notified on mobiCare through push notifications. Patients can see the availability of doctors and chose a time slot for their appointment."
             feature2="Multi-lingual support"
             fdetails2="mobiCare is available in Arabic language for the benefit of hospitals in the Middle East. Users can switch between English and Arabic formats by changing the default language option from the Language menu. Arabic format demo is available on request as well."
             feature3="Medical Reports"
             fdetails3="Users can request for their medical report from the hospital via the mobile application. The reports will be sent from the CMS and the user will get a notification, after which they can view the report."
             feature4="Push notification reminders"
             fdetails4="mobiCare will remind users via push notification regarding the scheduled appointments and medications. Appointment date, time and department will be displayed in doctor appointment reminders and patients can add medication reminders manually to their calendars."
             feature5="Pregnancy Tips"
             fdetails5="mobiCare keeps the expecting mother informed about the types of foods she should eat during each phases of pregnancy, and also gives out tips that will help herself and the child stay healthy."
             
         

             
             />
            <Footer/>


        </div>
    );
};

export default mobicare;