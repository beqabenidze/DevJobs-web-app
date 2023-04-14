import React from "react";
import "../global.css";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import { useContext } from "react";
import { Context } from "../context.js";

function Header() {
  const { theme, setTheme } = useContext(Context);
  const { bg } = useContext(Context);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <header>
        <img className="BG" src={bg} />
        <img
          style={{ cursor: "pointer" }}
          onClick={reload}
          className="logo"
          src={logo}
        />
        <div className="theme">
          <img src={sun} />
          <label className="toggler-wrapper">
            <input onClick={changeTheme} type="checkbox" className="checkbox" />
            <div className="toggler-slider">
              <div
                className="toggler-knob"
                style={{
                  left: theme === "dark" ? "calc(100% - 12px - 3px)" : "3px",
                }}
              ></div>
            </div>
          </label>
          <img src={moon} />
        </div>
      </header>
    </>
  );
}

export default Header;
