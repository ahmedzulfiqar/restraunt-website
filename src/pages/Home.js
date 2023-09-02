import React from "react";
import Section1 from "../components/sections/Section1";
import Navbar from "../components/Navbar";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";

function Home() {
  return (
    <div className="p-0 m-0">
      <Navbar />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default Home;
