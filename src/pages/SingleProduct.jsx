import React, { useState, useCallback } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ControlledZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

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
};

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const props = {
    width: 500,
    src: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg",
    alt: "Product Image",
    className: "img-fluid",
  };

  const handleZoom = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleUnzoom = useCallback(() => {
    setIsZoomed(false);
  }, []);

  const copyToClipboard = (text)=>{
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-6">
              <div
                className="main-product-image"
                onMouseEnter={handleZoom}
                onMouseLeave={handleUnzoom}
              >
                <ControlledZoom isZoomed={isZoomed} onZoomChange={setIsZoomed} zoomMargin={40}>
                  <img {...props} />
                </ControlledZoom>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg"
                    alt="Thumbnail 1"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg"
                    alt="Thumbnail 2"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg"
                    alt="Thumbnail 3"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg"
                    alt="Thumbnail 4"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Peace Lily, Spathiphyllum - Plant</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars {...StarRating} />
                    <p className="mb-0 t-review">( 2 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">Write a Review</a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3> 
                    <p className="product-data">Indoor Plant</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3> 
                    <p className="product-data">White Lily</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3> 
                    <p className="product-data">Plant</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                     <p className="product-data">Ornamental Plants</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                     <p className="product-data">In Stock</p>
                  </div>
                  {/* <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                     <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                     </div>
                  </div> */}
                  
                  <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                     <div className="">
                      <input type="number" defaultValue={1} className="form-control" name="" min={1} max={10} style={{"width":"70px"}} id="" />
                     </div>
                     <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button border-0 signup">
                      Buy It Now
                    </button>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                     <div>
                      <a href=""><TbGitCompare className="fs-5 me-2" /> Add to Compare</a>
                     </div>
                     <div>
                      <a href=""><AiOutlineHeart className="fs-5 me-2"/> Add to WishList</a>
                     </div>
                     </div>

                     <div className="d-flex gap-10 flex-column  my-3">
                    <h3 className="product-heading">Shipping & Returns:</h3> 
                    <p className="product-data">Free shipping and returns available on all orders!<br/> we ship all US domestic orders within <b>5-10 business days!</b> </p>
                  </div>





                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Copy Product Link:</h3> 
                    <a href="javascript:void(0)" onClick={()=>{copyToClipboard("https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg")}}>Product Link</a>
                  </div>


                </div>
                
              </div>
            </div>
          </div>
        
      </Container>
      {/* Rest of your component remains unchanged */}
      <Container class1="description-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro incidunt nesciunt quo cumque exercitationem, optio
                  facilis beatae consectetur fuga. Distinctio doloribus eum
                  possimus laudantium, quasi fugit adipisci, perferendis rerum
                  et, a officiis pariatur officia ullam?
                </p>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 id="review" >Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars {...StarRating} />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="#"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars {...StarRating} edit={true} size={15} />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Akshay</h6>
                      <ReactStars {...StarRating} size={15} />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Labore, porro amet odit, dolor omnis accusamus dicta ut
                      quisquam quam temporibus voluptas ea id ipsum iusto a
                      eaque, quaerat eius quia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        
      </Container>
    </>
  );
};

export default SingleProduct;