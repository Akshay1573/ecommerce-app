import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const WishList = () => {
  return (
    <>
      <Meta title={"WishList"} />
      <BreadCrumb title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card w-100 position-relative">
                        <img src="images/cross.svg" className='position-absolute cross img-fluid' alt="cross" />
                        <div className="wishlist-card-image">
                            <img src="images/peacelily-plant.webp" className='img-fluid w-100' alt="peacelily" />
                            <div className='py-3' >
                                <h5 className='title'>Peace Lily, Spathiphyllum - Plant</h5>
                                <h6 className='price'>$ 100</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
      </Container>

    </>
  );
}

export default WishList;
