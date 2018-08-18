import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="footer has-cards">
      <div className="container">
        <div className="row row-grid align-items-center my-md">
          <div className="col-lg-12 text-lg-center btn-wrapper">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://twitter.com/creativetim"
              className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Follow us"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.facebook.com/creativetim"
              className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Like us"
            >
              <i className="fab fa-facebook-square" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://dribbble.com/creativetim"
              className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
              data-toggle="tooltip"
              data-original-title="Follow us"
            >
              <i className="fab fa-dribbble" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/creativetimofficial"
              className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Star on Github"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};
