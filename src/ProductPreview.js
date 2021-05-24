import React from "react";
import "./ProductPreview.css";

const ProductPreview = () => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className="ProductPreview">
      <div className="ProductPreview">
        <img src="https://imgur.com/iOeUBV7.png" alt="relogio" />

        <div className="FeatureData">
          <p>{`${currentHour}:${currentMinute}`}</p>
        </div>

        {/* <div className="HeartBeatSection">
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div> */}
      </div>
    </div>
  );
};

export default ProductPreview;
