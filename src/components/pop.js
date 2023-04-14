import React from "react";
import { useContext } from "react";
import { Context } from "../context";

function Pop() {
  const { visible, setVisible } = useContext(Context);
  const { clickLocation, setClickLocation } = useContext(Context);
  const { setSearchLocation } = useContext(Context);
  const { setSearchFull } = useContext(Context);
  const { clickFull, setClickFull } = useContext(Context);

  const handleFilter = () => {
    setSearchLocation(clickLocation);
    setSearchFull(clickFull ? "Full Time" : "");
    setVisible(!visible);
  };
  const handleChange = (e) => {
    setClickLocation(e.target.value);
  };
  const handleCheck = () => {
    setClickFull(!clickFull);
  };

  return (
    <div
      className="overlay"
      onClick={() => setVisible(!visible)}
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="pop" onClick={(e) => e.stopPropagation()}>
        <div className="pop-location">
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
            onChange={handleChange}
            type="text"
            placeholder="Filter by location..."
          ></input>
        </div>
        <hr></hr>
        <div className="pop-checkbox">
          <label htmlFor="checkbox">
            <input
              onClick={handleCheck}
              type="checkbox"
              style={{ width: "20px", height: "20px" }}
            />
            <div className="checkbox-knob"></div>
            Full Time Only
          </label>
        </div>
        <button onClick={handleFilter}>Search</button>
      </div>
    </div>
  );
}

export default Pop;
