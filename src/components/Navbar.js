import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import { Element, Link } from "react-scroll";
function Navbar() {
  const [showlist, setshowlist] = useState(false);
  const [list, setlist] = useState([
    "Home",
    "About",
    "Menu",
    "Gallery",
    "Chef",
    "News",
    "Contact",
  ]);

  const [scrolled, setScrolled] = useState(false);
  const [view, setview] = useState(false);
  const [opacity, setopacity] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and update the state
      const scrollTop = window.scrollY;
      const scrollTop2 = window.visualViewport.width;
      if (scrollTop2 < 1000) {
        setScrolled(true);
        setview(true);
      } else {
        if (scrollTop > 500) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      if (scrollTop < 800 && scrollTop > 50) {
        setopacity(true);
      } else {
        setopacity(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`navbar w-100 fixed-top px-lg-5 px-3 navbar-expand-lg mynavbar ${
          !opacity
            ? !scrolled
              ? " bg-transparent py-lg-3 "
              : "bg-darka py-lg-1 bg-darka"
            : !scrolled
            ? " bg-transparent py-lg-3 opacity-0sa "
            : "bg-darka py-lg-1  opacity-0sa "
        }`}
        initial={{ opacity: 0, y: -0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div class="container">
          <a class="navbar-brand text-light text-center" href="#">
            <div className="display-5 p-0 m-0 text-dangera"> TOASTERS</div>
          </a>{" "}
          <button
            class=" navbar-toggler border-0 me-auuto bg-transparent"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <i class="fa fa-bars text-light" aria-hidden="true"></i>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end algin-self-center"
            id="navbarNav"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 opacity-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>{" "}
            </ul>
            <ul class="navbar-nav align-self-center">
              {list.map((item) => {
                return (
                  <Link
                    activeClass="active"
                    to={item}
                    spy={true}
                    hashSpy={true}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    defaultValue={"About Me"}
                    delay={0}
                    onSetActive={(i) => console.log(i)}
                  >
                    <li
                      class={`nav-item   h4  fw-bolder px-2 mx-1  m-0 py-md-2 `}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      <div
        class="offcanvas offcanvas-end  bg-darka "
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header pt-2">
          <h5 class="offcanvas-title pt-2" id="offcanvasDarkNavbarLabel">
            <a class="navbar-brand  bg-dark text-light py-0 m-0" href="#">
              <div className="display-6 p-0 m-0"> TOASTERS</div>
              <span className="bg-dangera h6  m-0 p-1">THE TASTE SQUAD</span>
            </a>
          </h5>

          <i
            class="fa fa-times display-6 text-dangera"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            aria-hidden="true"
          ></i>
        </div>
        <div class="offcanvas-body px-0  mt-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 sa">
            {list.map((item) => {
              return (
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={0}
                  delay={0}
                  offset={-100}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  defaultValue={"About Me"}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  aria-hidden="true"
                  onSetActive={(i) => console.log(i)}
                >
                  <li
                    class={` fw-bolder px-3  h5 py-3  m-0`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
