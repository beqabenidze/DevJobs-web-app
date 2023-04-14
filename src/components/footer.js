import React from "react";
import data from "../data.json";
import { Context } from "../context";
import { useContext } from "react";

function Footer() {
  const { itemID } = useContext(Context);

  const dataID = data.filter((item) => item.id == itemID);

  return dataID.map((item) => {
    return (
      <div className="footer" key={item.id}>
        <div>
          <h1>{item.position}</h1>
          <h5>So Digital Inc.</h5>
        </div>
        <a href={item.apply}>
          <button>Apply Now</button>
        </a>
      </div>
    );
  });
}

export default Footer;
