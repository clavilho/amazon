import React from "react";
import "./ProductDetails.css";
import classes from './ProductDetails.css'
const ProductDetail = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
  // const classArr = [classes.ProductImage]
  // if(pos===0){
  //     classArr.push[classes.SelectedProductImage];
  //   }
    return (
      <img
        key={pos}
        className="ProductImage"
        src={item.imageUrl}
        alt={item.styleName}
      />
    );
  });
  return (
    <div className="ProductData">
      <h1 className="ProductTitle">{props.data.title}</h1>
      <p className="ProductDescription">{props.data.description}</p>
      <h3 className="SectionHeading">Selecione uma cor</h3>
      <div>{colorOptions}</div>

      <h3 className="SectionHeading">Features</h3>
      <div>
        <button className="FeatureItem SelectedFeatureItem">Time</button>
        <button className="FeatureItem">Heart Rate</button>
      </div>
      <button className="PrimaryButton">Buy Now</button>
    </div>
  );
};

export default ProductDetail;
