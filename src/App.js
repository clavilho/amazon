import React, { Component } from "react";
import "./App.css";
import ProductData from "./ProductData";
import ProductDetail from "./ProductDetail";
import ProductPreview from "./ProductPreview";
import TopBar from "./TopBar";

class App extends Component {
  state = {
    productData:ProductData,
  }
  render() {
    return (
      <div className="App">
        <TopBar />

        <div className="MainContainer">
          <div className="ProductPreview">
            <ProductPreview />
          </div>

          <div className="ProductData">
            <ProductDetail data={this.state.productData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
