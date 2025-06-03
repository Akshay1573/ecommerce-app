import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.webp"
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiArrowNarrowLeft className="fs-4"/>Go Back To Blogs</Link>
                <h3 className="title">
                  That's How You Should Prepare For Monsoon Gardening
                </h3>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                <p>Monsoon season is the perfect season to try your hands at gardening, as there is little to do maintain the plants. This is the most suitable season for planting, and adjusting the existing plants for taking in the full pleasure of nutrient. 

Let's welcome monsoon with planting trees and setting your garden for dewy rains. 

Since extensive rains can destroy and harm the garden and plants altogether. To prevent your plants from being affected by the rain, you can dig spots, and make proper drainage in the garden.

If need be choosing a shed, or rain cover can be effective for balcony gardens or small seedlings of houseplants. </p>
              </div>
              
            </div>
          </div>
        
      </Container>
    </>
  );
};

export default SingleBlog;
