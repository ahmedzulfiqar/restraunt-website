import React from "react";
import Secover1 from "./Secover1";
import { Element } from "react-scroll";

function Section2() {
  return (
    <Element name="About">
      <Secover1>
        <div className="col-12  px-0 mx-0 py-md-5 bg-darkaa">
          <div className="container py-md-5 py-5">
            <div className="row justify-content-between m-0">
              <div className="col-12 col-md-6 order-md-1 order-2 mt-md-0 mt-5 mx-md-0 mx-1">
              
              </div>
              <div className="col-md-6 col-12 order-md-2 order-1">
                <div className="row m-0">
                  <img
                    src="https://duruthemes.com/demo/html/winta/onepage-dark/img/about1.jpg"
                    alt=""
                    className="col-12 pb-md-3 pb-1"
                  />
                  <img
                    src="https://duruthemes.com/demo/html/winta/onepage-dark/img/about2.jpg"
                    alt=""
                    className="col-6 pe-md-auto pe-0"
                  />
                  <img
                    src="https://duruthemes.com/demo/html/winta/onepage-dark/img/slider/1.jpg"
                    alt=""
                    className="col-6 ps-md-auto ps-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Secover1>
    </Element>
  );
}

export default Section2;
