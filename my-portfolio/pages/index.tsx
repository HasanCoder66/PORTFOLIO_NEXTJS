import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import React from "react";

const HomePage = () => {
const [nav , setNav ] = React.useState(true)
const openNav = () => {
  console.log('open nav chal raha hai')
  setNav(true)
}
const closeNav = () => {
  console.log('close nav chal raha hai');
  setNav(false)
}
  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      </div>
    </div>
  );
};

export default HomePage;
