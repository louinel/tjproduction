import portfolio_data from '@/src/data/portfolio-data';
import React from 'react';

const PortfolioArea = () => {
    return (
        <>
        <div className="tp-portfoliop-page-area pt-120 pb-120">
         <div className="container">
            <div className="tp-portfolio-header mb-30">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-pf-btn-group text-center">
                        <button className="active" data-filter="*">All Work</button>
                        <button data-filter=".brand">Brand Identity</button>
                        <button data-filter=".product">Product Design</button>
                        <button data-filter=".flyers">Flyers/Banners</button>
                        <button data-filter=".books">Books</button>
                        <button data-filter=".shirts">Shirts</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row tp-portfolio-isotop-active">

               {
                  portfolio_data.map((item, i) =>                   
                  <div key={i} className={`col-12 tp-portfolio-item mb-25 w-img ${item.cls}`}>
                  <div className="pf-item-wrapper p-relative">
                     <div className="pf-single-item">
                        <img src={item.img} alt={item.title}/>
                     </div>
                     <div className="pf-single-item__info">
                        <span>{item.title}</span>
                        <h3 className="pf-single-item__title"><a href="#">{item.name}</a></h3>
                    </div>
                  </div>
               </div>
                  )
               }
            </div>
            <div className="pt-istop-btn-wrapper text-center mt-30">
               <a href="#" className="tp-common-btn">
                  load more
                  <span>
                     <i className="fal fa-plus"></i>
                     <i className="fal fa-plus"></i>
                  </span>
               </a>
            </div>
         </div>
      </div>
        </>
    );
};

export default PortfolioArea;