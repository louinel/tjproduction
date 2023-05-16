import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.3417066152824!2d-70.6886393885563!3d19.483929138962502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf131255a5a1%3A0x5bf42cb58047f743!2sTJproduction!5e0!3m2!1sfr!2sdo!4v1683735028529!5m2!1sfr!2sdo"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-map-img">
          <img src="/assets/img/logo/fav.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default MapArea;
