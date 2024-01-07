import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Services from "@/Components/Services";
import React from "react";

const HomePage = () => {
  const [nav, setNav] = React.useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NAVBAR ===> */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* HERO ===> */}
        <Hero />
        <div className="relative z-[30]" >
          <About />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
