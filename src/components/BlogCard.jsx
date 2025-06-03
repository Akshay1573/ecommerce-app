import React from 'react';
import { Link } from "react-router-dom";


const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img src="images/catbanner-05.webp" className='img-fluid w-100' alt="BLOG" />
            </div>
            <div className="blog-content">
              <p className='date'>1 May 2025</p>
              <h5 className="title">That's How You Should Prepare For Monsoon Gardening </h5>
              <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta, deserunt eum.</p>
              <Link to="/blog/:id" className="button">
                Read More
              </Link>
             
            </div>
        </div>
      
    
  );
}

export default BlogCard;
