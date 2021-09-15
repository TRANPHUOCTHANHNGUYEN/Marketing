import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfolio3cols from '../components/Portfolios/Portfolio3grid';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Portfolio3col = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Portfolio grid 3 column" Pdescription="We develop a beautiful, modern theme for building next generation websites."/>
            <Portfolio3cols/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Portfolio3col;