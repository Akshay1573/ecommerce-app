import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"compare product"} />
      <BreadCrumb title="Compare product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="product-card-image">
                            <img src="images/peacelily-plant.webp" className='img-fluid' alt="peace lily" />
                            <div className="compare-product-details">
                                <h5 className='title'>Peace Lily, Spathiphyllum - Plant</h5>
                                <h6 className="price mb-3 mt-4">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Common  Name:</h5>
                                        <p>Peace Lily</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Plant Type:</h5>
                                        <p>Flowering indoor plant</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Humidity:</h5>
                                        <p>Prefers high humidity</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Soil Type:</h5>
                                        <p>Well-draining potting mix</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="product-card-image">
                            <img src="images/peacelily-plant.webp" className='img-fluid' alt="peace lily" />
                            <div className="compare-product-details">
                                <h5 className='title'>Peace Lily, Spathiphyllum - Plant</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div >
                                    <div className="product-detail">
                                        <h5>Common Name:</h5>
                                        <p>Peace Lily</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Plant Type:</h5>
                                        <p>Flowering indoor plant</p>
                                    </div>
                                    <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Humidity:</h5>
                                        <p>Prefers high humidity</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Soil Type:</h5>
                                        <p>Well-draining potting mix</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
      </Container>
    </>
  );
}

export default CompareProduct;
