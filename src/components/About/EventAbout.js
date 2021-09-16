import React from 'react';

const EventAbout =()=>{
    return(
        <section className="event_about_area">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src={require("../../img/home-event/about.jpg")} alt=""/>
                            <div className="about_bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event_about_content">
                            <h2 className="wow fadeInUp">Web Design Conference 2019</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">As online natives, we know how a bad web design can affect our brand engagement and perception. It’s undeniable that web development and design go hand-in-hand in helping businesses thrive in the digital space, more so in the middle of a global crisis.</p>
                            <div className="row">
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
                                        <img src={require("../../img/home-event/marker.png")} alt=""/>
                                        <h6>Where</h6>
                                        <p>Golly gosh the wireless posh loo smashing.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="event_about_item wow fadeInUp" data-wow-delay="0.4s">
                                        <img src={require("../../img/home-event/timer.png")} alt=""/>
                                        <h6>When</h6>
                                        <p>Sunday to Wednesday March 17 to 04, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventAbout;