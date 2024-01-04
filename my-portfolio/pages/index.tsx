import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
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
      </div>
    </div>
  );
};

export default HomePage;
