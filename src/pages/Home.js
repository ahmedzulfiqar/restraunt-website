import React from "react";
import Section1 from "../components/sections/Section1";
import Navbar from "../components/Navbar";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";

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
      <Section5 />
    </div>
  );
}

export default Home;
