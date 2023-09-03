import React from "react";
import { Element } from "react-scroll";
import Secover1 from "./Secover1";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Section6() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },

    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Element name="Gallery">
      <Secover1>
        <div className="col-12 section6 py-md-5 py-4">
          <div className="row m-0 py-5">
            <div className="container">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <div class=" mb-4 mb-md-0 text-center px-md-5 mx-md-5">
                  <p class="mb-0 display-2 text-dangera">Ahmed Zulfiqar</p>
                  <p class="lead my-md-3 my-1 text-light px-md-5 mx-md-5">
                    <div className="px-md-5 mx-md-5">
                      The name Toasters, in principle, quite fully describes the
                      restaurant's concept: red meat - what else is needed for a
                      Restraunt! The name Toasters, in principle, quite fully
                      describes the restaurant's concept: red meat - what else
                      is needed for a Restraunt!
                    </div>
                  </p>{" "}
                  <ul class="list-unstyled d-flex justify-content-center">
                    <li>
                      <i class="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                    </li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Secover1>
    </Element>
  );
}

export default Section6;
