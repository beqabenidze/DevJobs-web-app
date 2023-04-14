import React from "react";
import { useContext } from "react";
import { Context } from "../context";

function Tablet() {
  const { setSearchTitle } = useContext(Context);
  const { clickTitle, setClickTitle } = useContext(Context);
  const { clickLocation, setClickLocation } = useContext(Context);
  const { setSearchLocation } = useContext(Context);
  const { setSearchFull } = useContext(Context);
  const { clickFull, setClickFull } = useContext(Context);

  const handleFilter = () => {
    setSearchTitle(clickTitle);
    setSearchLocation(clickLocation);
    setSearchFull(clickFull ? "Full Time" : "");
  };

  const handChange = (e) => {
    setClickTitle(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setClickLocation(e.target.value);
  };

  const handleCheck = () => {
    setClickFull(!clickFull);
  };

  return (
    <div className="filter">
      <svg
        className="icon-search"
        viewBox="0 0 25 25"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" />
      </svg>
      <input
        onChange={handChange}
        className="title-filter"
        type="text"
        placeholder="Filter by title…"
        required
      />
      <hr></hr>
      <svg
        className="location-icon"
        viewBox="0 0 25 25"
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
          fill="#5964E0"
          fillRule="nonzero"
        />
      </svg>
      <input
        onChange={handleChangeLocation}
        className="location-filter"
        type="text"
        placeholder="Filter by location..."
        required
      />
      <hr></hr>
      <div className="checkbox-div">
        <label htmlFor="checkbox">
          <input
            onClick={handleCheck}
            type="checkbox"
            style={{ width: "20px", height: "20px" }}
          />
          <div className="checkbox-knob"></div>
          Full Time Only
        </label>
        <button onClick={handleFilter}>Search</button>
      </div>
    </div>
  );
}

export default Tablet;
