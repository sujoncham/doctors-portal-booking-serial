import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex justify-center items-center mb-32 mt-32">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">404</h2>
          <p>Page not found. please, check your url or website link</p>
          <div className="card-actions justify-center">
            <Link to="/" className="btn btn-primary">Back to Home page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
