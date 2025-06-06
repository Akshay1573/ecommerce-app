import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.408500039549!2d73.83229657496145!3d18.46514668261765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295a87fb1c741%3A0xa027bf26ba56035!2sPOLYHUB%20FOODCOURT!5e0!3m2!1sen!2sin!4v1746432632769!5m2!1sen!2sin" 
            width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name" 
                      />
                    </div>
                    <div>
                      <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email" 
                      />
                    </div>
                    <div>
                      <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="Mobile Number"
                       />
                    </div>
                    <div>
                      <textarea 
                        name="" id="" 
                        className="w-100  form-control" 
                        cols="30" rows="4" 
                        placeholder="Comments">

                      </textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">
                          Hno:277, Near village chopal, Vadgaon Bk, Pune
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:+91 9322170688">+91 9322170688</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:suryawanshi0688akshay@gmail.com">suryawanshi0688akshay@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 6 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </Container>
    </>
  );
}

export default Contact;
