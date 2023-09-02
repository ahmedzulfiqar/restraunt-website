import React from "react";
import Secover1 from "./Secover1";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Element } from "react-scroll";
function Section3() {
  const data = [
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
    {
      name: "STARTERS",
      content: [
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
        {
          name: "Château d'Yquem 2011",
          price: "$400$",
          descrip: "Dessert Wine, Bordeaux, Graves, Sauternes",
        },
        {
          name: "Alvear Cream NV",
          price: "$30$",
          descrip: "Dessert, Fortified Wine, Andalucia",
        },
      ],
    },
  ];
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
                <Tabs className={"border-0"} selectedTabClassName="active2">
                  <TabList
                    className={"row justify-content-between m-0 p-0 mx-md-5 "}
                  >
                    {data.map((i) => {
                      return (
                        <Tab
                          className={
                            "col-lg-2  col-sm-4 col-6 text-center py-2 px-lg-3 text-light rounded-2 h3"
                          }
                        >
                          {i.name}
                        </Tab>
                      );
                    })}
                  </TabList>

                  {data.map((i) => {
                    return (
                      <TabPanel className={""}>
                        <div className="row  justify-content-between mt-md-5 pt-md-3 mt-4 p-0 ms-md-3">
                          {i.content.map((dats) => {
                            return (
                              <div className="col-lg-6 col-12 my-2 ">
                                <div className="row pe-md-5 mx-md-3 m-0 p-0">
                                  <div className="col-md-10 col-12 text-dangera display-6">
                                    {dats.name}
                                  </div>
                                  <div className="col-md-2 col-10 text-md-center text-start  text-warninga fs-md-1 display-6">
                                    {dats.price}
                                  </div>{" "}
                                  <hr className="mt-md-3 mt-1 border"/>
                                  <div className="col-12 text-light h4">
                                    {dats.descrip}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabPanel>
                    );
                  })}
                </Tabs>
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
