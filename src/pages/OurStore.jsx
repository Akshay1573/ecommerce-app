import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const StarRating = {
  size: 20,
  count: 5,
  color: "black",
  activeColor: "#ffd700",
  value: 4,
  a11y: true,
  isHalf: true,
  edit:false,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};


const OurStore = () => {
  const [grid, setGrid] = useState(4);
  
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Shop By categories</h3>
                        <ul className="ps-0">
                          <li>Plants</li>
                          <li>Flowers</li>
                          <li>Ceramic Pots</li>
                          
                        </ul>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                          <h5 className="sub-title">Availablity</h5>
                          <div>
                          <div className="form-check">
                            <input className="form-check-input" type= "checkbox" value="" id=""   />
                            <label className="form-check-label" htmlFor="">
                            In Stock {1}
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type= "checkbox" value="" id=""  />
                            <label className="form-check-label" htmlFor="">
                              Out Of Stock {0}
                            </label>
                          </div>
                          </div>
                          <h5 className="sub-title">Price</h5>
                          <div className="d-flex align-items-center gap-10 ">
                            <div className="form-floating ">
                              <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                              <label htmlFor="floatingInput">From</label>
                            </div>
                            <div className="form-floating">
                              <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                              <label htmlFor="floatingInput">To</label>
                            </div>
                          </div>
                          {/* <h5 className="sub-title">Colors</h5> */}
                            {/* <div >
                              <ul className="colors ps-0">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul>
                            </div> */}
                            {/* <h5 className="sub-title">Size</h5> */}
                            {/* <div>
                            <div className="form-check">
                            <input className="form-check-input" type= "checkbox" value="" id="color-1"   />
                            <label className="form-check-label" htmlFor="color-1">
                             S {1}
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type= "checkbox" value="" id="color-2"   />
                            <label className="form-check-label" htmlFor="color-2">
                             M {2}
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type= "checkbox" value="" id="color-3"   />
                            <label className="form-check-label" htmlFor="color-3">
                             L {3}
                            </label>
                          </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                          <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Plants</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Flowers</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Red Rose</span>
                            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Ceramic Pots</span>

                          </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Random Products</h3>
                        <div >
                          <div className="random-products mb-3 d-flex">
                            <div className="w-50">
                              <img src="images/peacelily-plant-1.webp" className="img-fluid" alt="peacelily" />
                            </div>
                            <div className="w-50">
                              <h5>Peace Lily, Spathiphyllum - Plant</h5>
                               <ReactStars {...StarRating} />
                               <b>$100</b>
                            </div>

                          </div>
                          <div className="random-products mb-3 d-flex">
                            <div className="w-50">
                              <img src="images/peacelily-plant-1.webp" className="img-fluid" alt="peacelily" />
                            </div>
                            <div className="w-50">
                              <h5>Peace Lily, Spathiphyllum - Plant</h5>
                               <ReactStars {...StarRating} />
                               <b>$100</b>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                  <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 d-block " style={{"width":"100px"}}>Sort By:</p>
                      <select name=""  className="form-control form-select" id="">
                        <option value="manual">Featured</option>
                        <option value="best-selling">Best Selling</option>
                        <option value="title-asending">Alphabetically, A-Z</option>
                        <option value="title-desending">Alphabetically, Z-A</option>
                        <option value="price-asending">Price, Low to High</option>
                        <option value="price-desending">price, Hign to Low</option>
                        <option value="created-asending">Date, Old to New</option>
                        <option value="created-desending">Date, New to Old</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                      <p className="totlaProducts mb-0">21 Products</p>
                      <div className="d-flex gap-10 align-items-center grid">
                        <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                        <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                        <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                        <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                      </div>
                      
                    </div>
                    </div>
                  </div>


                  <div className="product-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                    <ProductCard grid={grid} />
                    </div>
                  </div>
                </div>
            </div>
        
      </Container>
    </>
  );
};

export default OurStore;
