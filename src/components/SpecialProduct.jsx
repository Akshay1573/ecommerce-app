import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const StarRating = {
  size: 24,
  count: 5,
  color: "black",
  activeColor: "#ffd700",
  value: 4,
  a11y: true,
  isHalf: true,
  edit: false,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    console.log(`Example 2: new value is ${newValue}`);
  },
};

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex jsutify-content-between">
          <div className="special-product-image">
            <img
              src="images/peacelily-plant.webp"
              className="img-fluid"
              alt="peacelily-plant"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Peace Lily</h5>
            <h6 className="title">Peace Lily, Spathiphyllum - Plant</h6>
            <ReactStars {...StarRating} />
            <p className="price">
              {" "}
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
              
            </div>
            <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{"width": "25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
