import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const testimonial_content = {
    title: "Testimonials",
    bg_img: "/assets/img/testimonial/da-testi-dot.png",
    users: "1200",
    social_site: "Feedback"
}

const {title, bg_img , users, social_site}  = testimonial_content
// testimonial_data 

const testimonial_data = [
    {
        id: 1,
        img: "/assets/img/testimonial/bb.png",
        name: "Lisa S.",
        title: "Marketing Director, Beaux Bijoux",
        des: <>“TJ Production's custom illustration for our advertising campaign was a huge hit with our target audience. It helped us increase brand awareness and drive sales!”</>
    },
    {
        id: 2,
        img: "/assets/img/testimonial/arome-locale.png",
        name: "Santiago N. Nelson",
        title: "Founder, Arôme Locale",
        des: <>“TJ Production exceeded our expectations with their innovative branding design for our startup.”</>
    },
    
    {
        id: 3,
        img: "/assets/img/testimonial/synergie.png",
        name: "Mike L.",
        title: "Manager of Synergie",
        des: <>“We were blown away by the quality of the illustrations TJ Production created for our children's book series. They truly brought our characters to life!”</>
    },
    
    {
        id: 4,
        img: "/assets/img/testimonial/flawless.png",
        name: "John J.",
        title: "Social Media Manager, Fl@wless",
        des: <>“Thanks to TJ Production's social media design services, our social media presence has never looked better. Their eye-catching designs have helped us gain more followers and engagement.”</>
    },
    

]

// slider setting 
const setting  = {
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    pagination: {
        el: ".da-testi-pagenation",
        clickable: true,
    },
    navigation: {
        nextEl: ".da-testi-button-next",
        prevEl: ".da-testi-button-prev",
    },

}


const Testimonial = () => {

  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div
        className="da-testimonial bg-black pt-120 pb-120 wow tpfadeUp"
        data-wow-delay=".3s"
        style={{
          backgroundImage: `url(${bg_img})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0">
                     
                   {title}
                  </span>
                  <h2 className="tp-section__title text-white mb-30 black-line">
                    {users}+ User
                    <span> {social_site}</span> 
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12 p-relative">
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="swiper-container da-testi-active"
              >
                {testimonial_data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-12">
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="da-testi-avata p-relative">
                              <img
                                src={item.img}
                                alt={item.name}
                              />
                              <div className="da-testi-icon">
                                <i className="fas fa-quote-left"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-9">
                            <div className="da-testi ml-40">
                              <span className="da-testi__ratting d-inline-block mb-10">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                              </span>
                              <p className="da-testi__review mb-40">
                                {item.des}
                              </p>
                              <div className="da-testi__meta">
                                <h3 className="da-testi__reviewer-name">
                                  
                                   {item.name}
                                </h3>
                                <span> {item.title}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="da-testi-navigation d-none d-md-block">
                <div className="da-testi-button-prev">
                  <i className="fal fa-long-arrow-left"></i>
                </div>
                <div className="da-testi-button-next">
                  <i className="fal fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
