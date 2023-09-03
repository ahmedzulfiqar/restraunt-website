import React from "react";
import Secover1 from "./Secover1";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Element } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Section3() {
  const data = [
    {
      name: "Starters",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "BreakFast",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "Main",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "Salad",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "Dessert",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Element name="Menu">
      <Secover1>
        <div className="col-12  px-0 mx-0 py-md-5 bg-darka">
          <div className="container py-md-5 py-5">
            <div className="row justify-content-center">
              <div className="col-12 display-1 text-center text-light">
                MENU <span className="text-dangera"> LIST</span>
              </div>

              <div className="col-12 mt-4 pt-lg-5">
                <div className="">
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    customTransition="all .5s"
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                  >
                    {data.map((i) => {
                      return (
                        <div className="row  justify-content-between  p-0 ms-md-3 menue">
                          {i.content.map((dats) => {
                            return (
                              <div className="col-lg-6 col-12 my-3 ">
                                <div className="row pe-md-5 mx-md-3 m-0 p-0">
                                  <div className="col-md-10 text-dangera  order-1 display-6 ">
                                    {dats.name}
                                  </div>
                                  <div className="col-2 order-md-2 order-3 text-warninga fs-3  ">
                                    {dats.price}
                                  </div>{" "}
                                  <div className="col-12 order-md-3 order-2 text-light h5 fw-light">
                                    {dats.descrip}
                                    {dats.descrip}
                                  </div>
                                  <hr className=" border my-2 order-4" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Secover1>
    </Element>
  );
}

export default Section3;
