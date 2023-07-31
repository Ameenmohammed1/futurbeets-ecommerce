import React from "react";
import "./search.css";
function Search() {
  function x(e) {
    console.log(e.target.value);
  }
  return (
    <div className="SearchParent">
      <div className="filters">
        <select onChange={(e) => x(e)} className="FOption">
          <option value="1">Low To Heigh</option>
          <option value="2" selected="selected">
            None
          </option>
          <option value="3">Heigh To Low</option>
        </select>
        <div className="priceRange">
          <div className="inputs">
            <input type="number" placeholder="less price range" />
            <p>TO</p>
            <input type="number" placeholder="more price range" />
          </div>
          <button>Submit</button>
        </div>
      </div>
      <div className="searchProducts">
      <div className="product">
            <div className="proImage">
              <i className="fa-solid fa-trash"></i>
              <img
                className="image"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="proDetails">
              <p className="name">I Phone 14 Pro Max</p>
              <p className="shortDetail">new latest i phone mobile</p>
              <div className="prices">
                {" "}
                <p className="price">
                  $ 20000{" "}
                  <span className="delPrice">
                    <del>$30000</del>
                  </span>
                </p>
              </div>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <button className="cartBtn">Add To Cart</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Search;
