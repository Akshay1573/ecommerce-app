import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';
import Meta from "../components/Meta";
import peacelily from "../images/peacelily-plant.webp";
import { AiFillDelete } from 'react-icons/ai';
import Container from '../components/Container';
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}/>
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className='cart-col-1 gap-15 d-flex align-items-center '>
                  <div className='w-25'>
                    <img src={peacelily} className='img-fluid' alt="product img" />
                  </div>
                  <div className='w-75'>
                    <p >Peace Lily, Spathiphyllum - Plant</p>
                    <p >Brand :White Lily</p>
                    <p >Category :Plant</p>
                  </div>

                </div>
                <div className='cart-col-2'>
                  <h5 className="price">$ 100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div><input className='form-control' min={1} max={10} defaultValue={1} type="number"  name="" id="" /></div>
                  <div><AiFillDelete className='text-danger '/></div>
                </div>
                <div className='cart-col-4'>
                  <h5 className="price">$ 100</h5>
                </div>
              </div>

              <div className="col-12 py-2 mt-4">
                <div className='d-flex justify-content-between align-items-baseline'>
                  <Link to="/product" className='button'>Continue To Shopping</Link>
                  <div className='d-flex flex-column align-items-end'>
                    <h4>SubTotal: $ 100</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className='button'>CheckOut</Link>

                  </div>
                </div>

              </div>
            </div>
          </div>
        
      </Container>
    </>
  );
}

export default Cart;
