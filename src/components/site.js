import React from "react";
import data from "../data.json";
import { Context } from "../context";
import { useContext } from "react";

function Site() {
  const { itemID } = useContext(Context);

  const dataID = data.filter((item) => item.id == itemID);

  return dataID.map((item) => {
    return (
      <div className="site" key={item.id}>
        <img
          src={require(`../assets/logos/${item.company
            .toLowerCase()
            .replaceAll(" ", "")}.svg`)}
          style={{ backgroundColor: item.logoBackground }}
        />
        <div className="site-flex">
          <h1>{item.company}</h1>
          <h5>{`${item.company}.com`}</h5>
        </div>
        <a
          style={{ textDecoration: "none", color: "#6e8098" }}
          href={item.website}
        >
          {" "}
          Company Site
        </a>
      </div>
    );
  });
}

export default Site;
