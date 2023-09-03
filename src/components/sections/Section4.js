import React from "react";
import Secover1 from "./Secover1";
import { Element } from "react-scroll";

function Section4() {
  const images = [
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/7.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/1.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/2.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/4.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/5.jpg",
    "https://duruthemes.com/demo/html/winta/onepage-dark/img/gallery/6.jpg",
  ];
  return (
    <Element name="Gallery">
      <Secover1>
        <div className="col-12  px-0 mx-0 py-md-1 bg-darkaa">
          <div className="container py-md-5 py-3">
            <div className="row justify-content-between ms-md-5 m-0">
              <div className="col-12   mt-md-3 mx-md-0 mx-1">
                <div class=" align-self-center text-light pt-md-5 mt-md-1">
                  <span class="h3  text-monospace">
                    <span className=" text-warninga fw-light">
                      Chef Suggestions
                    </span>
                  </span>
                  <h2 class="display-1 text-dangera mb-3">
                    Winta <span className="text-light"> Gallery</span>
                  </h2>
                  <hr className="border border-danger" />

                </div>
              </div>
              <div className="col-12 mt-md-3 mt-2">
                <div className="row m-0">
                  {images.map((img) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-12 py-md-3 py-1">
                        <div class="card sec4card text-bg-dark">
                          <img src={img} class="card-img" alt="..." />
                          <div class="card-img-overlay bg-darka "></div>
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

export default Section4;
