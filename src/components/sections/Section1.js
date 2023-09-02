import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Secover1 from "./Secover1";
import { Element } from "react-scroll";
function Section1() {
  const [data, setdata] = useState([
    {
      image:
        "https://duruthemes.com/demo/html/winta/onepage-dark/img/slider/4.jpg",
      text: (
        <>
          Explore Our <span className="text-warninga">Menu</span>
        </>
      ),
    },
    {
      image:
        "https://duruthemes.com/demo/html/winta/onepage-dark/img/slider/1.jpg",
      text: (
        <>
          The <span className="text-warninga"> Taste</span> Squad
        </>
      ),
    },
    {
      image:
        "https://duruthemes.com/demo/html/winta/onepage-dark/img/slider/2.jpg",
      text: (
        <>
          Explore <span className="text-warninga">Our</span> Menu
        </>
      ),
    },
    {
      image:
        "https://duruthemes.com/demo/html/winta/onepage-dark/img/slider/3.jpg",
      text: (
        <>
          The <span className="text-warninga"> Taste</span> Squad
        </>
      ),
    },
  ]);
  return (
    <>
      <Element name="Home">
        <Secover1>
          <div className="col-12 p-0 m-0">
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              showThumbs={false}
              useKeyboardArrows={false}
              autoPlay={true}
              stopOnHover={false}
              swipeable={true}
              autoFocus={false}
              emulateTouch={true}
              className="p-0 m-0 mycarousel"
              dynamicHeight={false}
            >
              {data.map((datas) => {
                return (
                  <div>
                    <img src={datas.image} />
                    <div className="mask"></div>
                    <p className="legend text-md-start text-center">
                      <div className="container ps-md-5">
                        <div className="text-md-start text-center ">
                          <div className=" m-0 p-0 display-5">
                            WELCOME TO{" "}
                            <span className=" m-0 p-0 text-dangera">
                              {" "}
                              TOASTERS
                            </span>
                          </div>
                          <div className="display-11 fw-bolder mb-0 mt-0 pt-0">
                            {datas.text}
                          </div>
                          <div className="btn bg-dangera  text-light px-4">
                            <div className="h3 p-0 m-0">Call Now</div>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Secover1>
      </Element>
    </>
  );
}

export default Section1;
