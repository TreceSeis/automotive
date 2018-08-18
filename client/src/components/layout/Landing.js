import React, { Component } from "react";
import white from "./../../assets/img/brand/white.png";
import gitWhite from "./../../assets/img/brand/github-white-slim.png";
import timWhite from "./../../assets/img/brand/creativetim-white-slim.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <main>
        <div className="position-relative">
          <section className="section-hero section-shaped my-0">
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <div className="container shape-container d-flex align-items-center">
              <div className="col px-0">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-7 text-center pt-lg">
                    <img src={white} className="img-fluid" alt="Argon logo" />
                    <p className="lead text-white mt-4 mb-5">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <div className="btn-wrapper">
                      <Link
                        to="/login"
                        className="btn btn-info btn-icon mb-3 mb-sm-0"
                        data-toggle="scroll"
                      >
                        <span className="btn-inner--text">Login</span>
                      </Link>
                      <Link
                        to="/register"
                        className="btn btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Register</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-around stars-and-coded">
                  <div className="col-sm-4">
                    <span className="text-white alpha-7 ml-3">Star us on</span>
                    <Link
                      to="https://github.com/creativetimofficial/argon-design-system"
                      target="_blank"
                      title="Support us on Github"
                    >
                      <img src={gitWhite} height={22} alt="GitHub" />
                    </Link>
                  </div>
                  <div className="col-sm-4 mt-4 mt-sm-0 text-right">
                    <span className="text-white alpha-7">Coded by</span>
                    <Link
                      to="https://www.creative-tim.com"
                      target="_blank"
                      title="Creative Tim - Premium Bootstrap Themes and Templates"
                    >
                      <img
                        src={timWhite}
                        className="ml-3"
                        height={30}
                        alt="Tim Creative"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Landing;
