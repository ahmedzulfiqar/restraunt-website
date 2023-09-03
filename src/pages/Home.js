import React from "react";
import Section1 from "../components/sections/Section1";
import Navbar from "../components/Navbar";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import Sections7 from "../components/sections/Sections7";

function Home() {
  return (
    <div className="p-0 m-0">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Sections7 />
      <footer class="bg-darka text-center text-white px-3">
        <div class="container py-3 ">
          <div className="row  ms-md-3">
            <div className="display-5 p-0 m-0 text-dangera col-md-6 col-12 text-md-start text-center">
              TOASTERS
            </div>
            <section class="col-md-6 col-12 mt-md-0 mt-2 text-center">
              <a
                class="btn btn-outline-light btn-floating m-1 border-danger rounded-circle"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1 border-danger rounded-circle"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1 border-danger rounded-circle"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
