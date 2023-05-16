import Count from '@/src/common/count';
import React from 'react';

const about_feature_data = [
    {
        id: 1,
        count: 5700,
        title: "Successful projects",
        description: <>Trust in our expertise to deliver stunning and effective design solutions that bring your brand and projects to life.</>,
    },
    {
        id: 2,
        count: 7,
        title: "Years of experiences",
        description: <>These years give us the knowledge and skills to tackle any design challenge with confidence and creativity.</>,
    },
    {
        id: 3,
        count: 797,
        title: "Cost of savings",
        description: <>Our cost-effective design solutions help businesses of all sizes save money without sacrificing quality or impact.</>,
    },
    {
        id: 4,
        count: 1050,
        title: "Custom Designs",
        description: <>Our custom designs are tailored to meet your unique business needs, ensuring that your brand stands out in a crowded market.</>,
    },
]

const AbFactArea = () => {
    return (
      <>
        <div
          className="tp-ab-fact-area fact-overlay p-relative pt-120 pb-85"
          style={{
            backgroundImage: `url(/assets/img/about/about-fact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              {about_feature_data.map((item, i) => (
                <div key={i} className="col-xl-3 col-md-6">
                  <div className="ab-fact-item mb-30">
                    <Count number={item.count} /> 
                    <h3 className="ab-fact-item__title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default AbFactArea;