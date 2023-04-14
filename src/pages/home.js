import React from "react";
import Header from "../components/header.js";
import Body from "../components/body.js";
import MobileFilter from "../components/mobileFilter";
import TabletFilter from "../components/tabletFilter";
import Pop from "../components/pop.js";
import { useState, useEffect } from "react";

function Home() {
  const [mobile, setMobile] = useState(window.innerWidth > 843 ? false : true);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 843) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className="home">
      <Header />
      {mobile ? <MobileFilter /> : <TabletFilter />}
      <Body />
      <Pop />
    </div>
  );
}

export default Home;
