import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";

import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import peacelily from "../images/peacelily-plant.webp";
import peacelily1 from "../images/peacelily-plant-1.webp";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


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

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to={`${location.pathname=="/"?"product/:id":"/:id"}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={peacelily}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={peacelily1}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Peace Lily</h6>
            <h5 className="product-title">
              Peace Lily, Spathiphyllum - Plant{" "}
            </h5>
            <ReactStars {...StarRating} />
            <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>Peace Lilies are popular houseplants known for their air-purifying qualities and elegant appearance. They thrive in low to medium light and require only moderate watering, making them ideal for homes and offices.</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="ProductCompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="View" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="AddCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to={`${location.pathname=="/"?"product/:id":"/:id"}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wish" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={peacelily}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={peacelily1}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Peace Lily</h6>
            <h5 className="product-title">
              Peace Lily, Spathiphyllum - Plant{" "}
            </h5>
            <ReactStars {...StarRating} />
            <p className={`description ${grid === 12 ? "d-block":"d-none"}`}>Peace Lilies are popular houseplants known for their air-purifying qualities and elegant appearance. They thrive in low to medium light and require only moderate watering, making them ideal for homes and offices.</p>

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="ProductCompare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="View" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="AddCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
