import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FaqSection from '../components/FaqSection';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="FAQ" Pdescription="We develop a beautiful, modern theme for building next generation websites."/>
            <FaqSection/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;