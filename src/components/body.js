import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { useContext } from "react";

function Body() {
  const { showMore, setShowMore } = useContext(Context);
  const { setItemID } = useContext(Context);
  const { searchTitle } = useContext(Context);
  const { searchLocation } = useContext(Context);
  const { searchFull } = useContext(Context);

  const shortData = data.filter((item) => item.id <= 12);

  const showData = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="cards">
        {showMore
          ? shortData.map((item) => {
              const name = item.position.toLowerCase();
              const Search = searchTitle.toLowerCase();
              const place = item.location.toLowerCase();
              const Location = searchLocation.toLowerCase();
              const contract = item.contract.toLowerCase();
              const Time = searchFull.toLowerCase();
              if (
                name.includes(Search) &&
                place.includes(Location) &&
                contract.includes(Time)
              ) {
                return (
                  <div className="card" key={item.id}>
                    <img
                      src={require(`../assets/logos/${item.company
                        .toLowerCase()
                        .replaceAll(" ", "")}.svg`)}
                      style={{ backgroundColor: item.logoBackground }}
                    />
                    <ul>
                      <li>{item.postedAt}</li>
                      <li>{item.contract}</li>
                    </ul>
                    <Link
                      to="/DevJobs-web-app/detail"
                      style={{ textDecoration: "none" }}
                      onClick={() => setItemID(item.id)}
                    >
                      <h1>{item.position}</h1>
                    </Link>
                    <h5>{item.company}</h5>
                    <h6>{item.location}</h6>
                  </div>
                );
              }
            })
          : data.map((item) => {
              const name = item.position.toLowerCase();
              const Search = searchTitle.toLowerCase();
              const place = item.location.toLowerCase();
              const Location = searchLocation.toLowerCase();
              const contract = item.contract.toLowerCase();
              const Time = searchFull.toLowerCase();
              if (
                name.includes(Search) &&
                place.includes(Location) &&
                contract.includes(Time)
              ) {
                {
                  return (
                    <div className="card" key={item.id}>
                      <img
                        src={require(`../assets/logos/${item.company
                          .toLowerCase()
                          .replaceAll(" ", "")}.svg`)}
                        style={{ backgroundColor: item.logoBackground }}
                      />
                      <ul>
                        <li>{item.postedAt}</li>
                        <li>{item.contract}</li>
                      </ul>
                      <Link
                        to="/DevJobs-web-app/detail"
                        style={{ textDecoration: "none" }}
                        onClick={() => setItemID(item.id)}
                      >
                        <h1>{item.position}</h1>
                      </Link>
                      <h5>{item.company}</h5>
                      <h6>{item.location}</h6>
                    </div>
                  );
                }
              }
            })}
      </div>
      <button
        onClick={showData}
        style={{
          display:
            searchTitle || searchLocation || searchFull != ""
              ? "none"
              : "block",
        }}
      >
        {showMore ? "Load More" : "Load Less"}
      </button>
    </>
  );
}

export default Body;
