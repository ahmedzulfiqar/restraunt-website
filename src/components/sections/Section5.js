import React from "react";
import Secover1 from "./Secover1";
import { Element } from "react-scroll";

function Section5() {
  const images = [
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/team/1.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/team/2.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/team/3.jpg",
  ];
  return (
    <Element name="Chef">
      <Secover1>
        <div className="col-12  px-0 mx-0 py-md-1 bg-darka">
          <div className="container py-md-5 py-3">
            <div className="row justify-content-between ps-md-5 m-0">
              <div className="col-12   mt-md-3 mx-md-0 mx-1">
                <div class=" align-self-center text-light pt-md-5 mt-md-1">
                  <span class="h3  text-monospace">
                    <span className=" text-warninga fw-light">Executive</span>
                  </span>
                  <h2 class="display-1 text-dangera mb-3">
                    Our <span className="text-light"> Chef Team</span>
                  </h2>
                  <hr className="border border-danger" />
                </div>
              </div>
              <div className="col-12 mt-md-3 mt-2">
                <div className="row m-0">
                  {images.map((img) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-12 py-md-3 py-1 px-4">
                        <div class="card sec4card text-bg-dark bg-transparent border-0">
                          <img src={img} class="card-img" alt="..." />
                          <div class="card-body h3 text-center">
                            <span className="text-dangera"> Chef.</span> Raphael
                            Moss
                            <div className="h6 text-warninga fw-light mt-1">
                              {" "}
                              Executive Chef
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Secover1>
    </Element>
  );
}

export default Section5;
