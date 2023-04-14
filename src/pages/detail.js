import React from "react";
import Header from "../components/header.js";
import Site from "../components/site.js";
import Apply from "../components/apply.js";
import Footer from "../components/footer.js";
import Home from "./home.js";
import { Context } from "../context";
import { useContext } from "react";

function Detail() {
  const { itemID } = useContext(Context);
  return itemID != null ? (
    <div className="detail">
      <Header />
      <Site />
      <Apply />
      <Footer />
    </div>
  ) : (
    <Home />
  );
}

export default Detail;
