import React from 'react';

const CtaAre = () => {
    return (
        <>
            <div className="tp-bs-cta-area pt-105 pb-120 theme-bg p-relative tp-ab-cta-overlay"
         style={{backgroundImage: `url(/assets/img/cta/cta-ab-bg.jpg)`}}
         >
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="bs-cta-section text-center">
                     <span className="bs-cta-section__subtitle mb-5 d-inline-block wow tpfadeUp">
                        Need a Design?</span>
                     <div className="cd-intro">
                        <h3
                           className="bs-cta-section__title ca-cta-section-title cd-headline loading-bar mb-55 ca-cta-title wow tpfadeUp">
                           <span>Contact us to discuss a creative design solution for your </span>
                           <span className="cd-words-wrapper bs-cta-wrapper ca-cta-wrapper">
                              <b className="is-visible"> Business </b>
                              <b className="is-hidden"> Branding </b>
                              <b className="is-hidden"> Marketing </b>
                           </span>
                        </h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="bs-cta-btns text-center">
                  <a href="/contact" className="tp-btn mr-30 wow tpfadeUp">Contact us Now<span><i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i></span></a>
               </div>
            </div>
         </div>
         {/* <div className="red-nots">
            <img src="/assets/img/cta/point-bg.png" alt=""/>
         </div>  */}
         <div className="thumb-animation d-none d-lg-block">
            <div className="like-thumb z-index-11">
               <img src="/assets/img/cta/like-thumb.jpg" alt="" />
            </div>
            <div className="like-thumb-border z-index-11">
            </div>
         </div>
      </div>
        </>
    );
};

export default CtaAre;