import "./App.css";
import Home from "./pages/home.js";
import Detail from "./pages/detail";
import { Context } from "./context";
import mobileBG from "./assets/mobile/bg-pattern-header.svg";
import tabletBG from "./assets/tablet/bg-pattern-header.svg";
import desktopBG from "./assets/desktop/bg-pattern-header.svg";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [showMore, setShowMore] = useState(true);
  const [itemID, setItemID] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [clickTitle, setClickTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [clickLocation, setClickLocation] = useState("");
  const [searchFull, setSearchFull] = useState("");
  const [clickFull, setClickFull] = useState(false);
  const [bg, setBg] = useState(
    window.innerWidth > 500
      ? window.innerWidth > 900
        ? desktopBG
        : tabletBG
      : mobileBG
  );

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 900) {
        setBg(desktopBG);
      } else if (window.innerWidth > 500) {
        setBg(tabletBG);
      } else {
        setBg(mobileBG);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        bg,
        showMore,
        setShowMore,
        itemID,
        setItemID,
        visible,
        setVisible,
        searchTitle,
        setSearchTitle,
        clickTitle,
        setClickTitle,
        searchLocation,
        setSearchLocation,
        clickLocation,
        setClickLocation,
        searchFull,
        setSearchFull,
        clickFull,
        setClickFull,
      }}
    >
      <div className="backbone" data-theme={theme}>
        <Routes>
          <Route path="/DevJobs-web-app/" element={<Home />} />
          <Route path="/DevJobs-web-app/detail" element={<Detail />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
